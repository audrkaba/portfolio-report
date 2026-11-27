"""Fresh public watch quotes before publication. No portfolio/signal inputs changed."""
from pathlib import Path
from datetime import datetime,timedelta,timezone
from zoneinfo import ZoneInfo
from concurrent.futures import ThreadPoolExecutor,as_completed
import argparse,hashlib,json,urllib.request,urllib.parse,re,xml.etree.ElementTree as ET,subprocess,sys

def get(url,headers=None):
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 PortfolioResearch',**(headers or {})})
    with urllib.request.urlopen(req,timeout=20) as r:return r.read()

def load(p):
    try:return json.loads(p.read_text(encoding='utf-8-sig'))
    except (OSError,ValueError):return {}

def committed_quotes_match(site):
    try:
        raw=subprocess.check_output(['git','show','HEAD:watch-latest-quotes.json'],cwd=site,stderr=subprocess.DEVNULL)
        return json.loads(raw)==load(site/'watch-latest-quotes.json')
    except (subprocess.CalledProcessError,ValueError):return False

def refresh(site,check=False):
    watch=load(site/'daily-market-watch.json');assert watch.get('rows'),'Missing watch universe'
    target=site/'watch-latest-quotes.json';old=load(target);now=datetime.now(timezone.utc);today=now.astimezone(ZoneInfo('Europe/Vilnius')).date()
    receipt_path=Path('D:/codex_temp/portfolio/local-compute/watch-quote-check.json')
    recent=load(receipt_path)
    if check and target.exists() and recent.get('site')==str(site.resolve()) and recent.get('quote_sha256')==hashlib.sha256(target.read_bytes()).hexdigest() and recent.get('watch_sha256')==hashlib.sha256((site/'daily-market-watch.json').read_bytes()).hexdigest():
        if (now-datetime.fromisoformat(recent['checked_at_UTC'])).total_seconds()<90:
            print('Quote source check is less than 90 seconds old',flush=True)
            if not committed_quotes_match(site):
                print('The verified quote snapshot must be committed before pushing.',file=sys.stderr);return 1
            return 0
    fx={};fundkey=None;pre_errors={}
    try:
        root=ET.fromstring(get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml'))
        for e in root.iter():
            if 'time' in e.attrib:
                for c in e:
                    if c.get('currency')=='USD':fx[e.get('time')]=float(c.get('rate'))
    except Exception as e:pre_errors['USD_FX']=str(e)
    try:
        page=get('https://swedbankrobur.fondlista.se/en/nav').decode('utf8','replace')
        for name in re.findall(r'src="([^\"]+\.js[^\"]*)"',page):
            script=get(urllib.parse.urljoin('https://swedbankrobur.fondlista.se',name)).decode('utf8','replace')
            if 'timeseriesPrice' in script:
                fundkey=next((s for s in re.findall(r'"([A-Za-z0-9.!_]{25,})"',script) if s.startswith('dgng')),None)
                if fundkey:break
        if not fundkey:raise ValueError('Official NAV browser data key unavailable')
    except Exception as e:pre_errors['NAV']=str(e)
    def one(r):
        asset=r['asset'];quote={'currency':'EUR'}
        if asset.startswith('US_'):
            ticker=r.get('ticker') or asset[3:].replace('_','-')
            url='https://query1.finance.yahoo.com/v8/finance/chart/'+urllib.parse.quote(ticker,safe='')+'?range=5d&interval=1d'
            raw=get(url);j=json.loads(raw)['chart']['result'][0];m=j['meta'];assert m['currency']=='USD'
            price=float(m['regularMarketPrice']);stamp=datetime.fromtimestamp(m['regularMarketTime'],timezone.utc)
            day=stamp.astimezone(ZoneInfo(m.get('exchangeTimezoneName','America/New_York'))).date().isoformat()
            dates=[d for d in fx if d<=day]
            if not dates:raise ValueError('No dated ECB USD conversion')
            fd=max(dates);quote.update(price_EUR=price/fx[fd],native_price=price,native_currency='USD',FX_date=fd,USD_per_EUR=fx[fd],date=day,timestamp_UTC=stamp.isoformat(),kind='exchange_quote')
        elif r['type']=='Fund':
            if not fundkey:raise ValueError(pre_errors.get('NAV','NAV service unavailable'))
            query=urllib.parse.urlencode(dict(isin=r['isin'],currencyId='EUR',startDate=str(today-timedelta(days=45)),endDate=str(today+timedelta(days=1))))
            url='https://tmsapi.auxality.systems/dataaccess/RoburMorningstarConnection/timeseriesPrice?'+query
            raw=get(url,{'X-Api-Key':fundkey});j=json.loads(raw);rows=j.get('data',j) if isinstance(j,dict) else j
            valid=[x for x in rows if x.get('value') is not None and float(x['value'])>0 and str(x['x'])[:10]<=str(today)]
            v=max(valid,key=lambda x:str(x['x']));quote.update(price_EUR=float(v['value']),date=str(v['x'])[:10],kind='NAV')
        else:
            query=urllib.parse.urlencode(dict(start=str(today-timedelta(days=45)),end=str(today),historical=1))
            url='https://nasdaqbaltic.com/statistics/en/instrument/'+r['isin']+'/trading/chart_price_json?'+query
            raw=get(url);rows=json.loads(raw)['data']['data'];valid=[x for x in rows if x[1] is not None and float(x[1])>0]
            v=max(valid,key=lambda x:(x[0],x[2] or 0));day=datetime.fromtimestamp(v[0]/1000,timezone.utc).astimezone(ZoneInfo('Europe/Vilnius')).date().isoformat()
            assert day<=str(today);quote.update(price_EUR=float(v[1]),date=day,kind='exchange_quote')
        assert quote['price_EUR']>0
        quote.update(source_url=url,raw_sha256=hashlib.sha256(raw).hexdigest(),checked_at_UTC=now.isoformat(),refresh_ok=True)
        return asset,quote
    prices={};errors={}
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures={pool.submit(one,r):r for r in watch['rows']}
        for f in as_completed(futures):
            r=futures[f]
            try:
                asset,q=f.result();prior=old.get('prices',{}).get(asset)
                if prior and q['date']<prior['date']:raise ValueError('Provider response older than retained quote')
                prices[asset]=q
            except Exception as e:
                asset=r['asset'];errors[asset]=str(e)
                prior=old.get('prices',{}).get(asset)
                if prior:prices[asset]={**prior,'refresh_ok':False,'refresh_error':str(e)}
    payload=dict(checked_at_UTC=now.isoformat(),scope='Latest provider quotes/NAV; separate from historical signal close and frozen model inputs',prices=prices,errors=errors)
    def semantic(d):
        return {a:{k:v for k,v in q.items() if k not in ['checked_at_UTC','raw_sha256']} for a,q in d.get('prices',{}).items()}
    changed=semantic(old)!=semantic(payload) or old.get('errors',{})!=errors
    if changed or not target.exists():
        target.write_text(json.dumps(payload,ensure_ascii=False,allow_nan=False,separators=(',',':')),encoding='utf8')
    receipt=dict(site=str(site.resolve()),quote_sha256=hashlib.sha256(target.read_bytes()).hexdigest(),watch_sha256=hashlib.sha256((site/'daily-market-watch.json').read_bytes()).hexdigest(),checked_at_UTC=now.isoformat(),verified=len(prices)-sum(not q.get('refresh_ok',False) for q in prices.values()),requested=len(watch['rows']),failures=len(errors),quote_content_changed=changed)
    receipt_path=Path('D:/codex_temp/portfolio/local-compute/watch-quote-check.json')
    if receipt_path.parent.exists():receipt_path.write_text(json.dumps(receipt,indent=2),encoding='utf8')
    print(json.dumps(receipt),flush=True)
    if not prices:raise RuntimeError('All quote providers unavailable')
    if check and (changed or not committed_quotes_match(site)):
        print('Latest quotes changed. Include watch-latest-quotes.json in the reviewed commit, then push again.',file=sys.stderr)
        return 1
    return 0

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--site',type=Path,default=Path.cwd());p.add_argument('--check',action='store_true');a=p.parse_args();raise SystemExit(refresh(a.site,a.check))