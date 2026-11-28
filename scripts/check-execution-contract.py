"""Independent public-artifact gate: every real US BUY/SELL > EUR1 or zero."""
from pathlib import Path
import argparse,hashlib,json
import numpy as np
from lxml import html

def check(site):
 site=Path(site);manifest=site/'interactive/corrected-tree/manifest.json';meta=json.loads(manifest.read_text(encoding='utf8'));assets=meta['assets'];us=np.array([a.startswith(('US_','US:')) for a in assets]);cur=np.asarray(meta['current']);p0=np.asarray(meta['p0']);E=np.asarray(meta['sector_exposure_upper']);step=np.asarray(meta['unit']);upper=np.asarray(meta['upper']);fund=np.asarray(meta['fund'],bool);reference=np.asarray(meta['reference_only'],bool);hashes={'interactive/corrected-tree/manifest.json':hashlib.sha256(manifest.read_bytes()).hexdigest()};rows=[]
 assert meta['execution_constraints']['no_sale_initial_purchase_cap_EUR']==2000
 assert meta['execution_constraints']['minimum_US_trade_EUR']==1 and meta['execution_constraints']['US_trade_comparison']=='strictly_greater'
 def read(path):
  p=site/path;raw=p.read_bytes();hashes[path]=hashlib.sha256(raw).hexdigest();return json.loads(raw)
 def node(q,before,price,cash,cap,assetcap,non_us_no_sale):
  q=np.asarray(q,float);before=np.asarray(before,float);price=np.asarray(price,float);cash=np.asarray(cash,float);value=q*price;invested=value.sum(axis=-1);delta=q-before;trade=np.abs(delta)*price
  assert np.isfinite(q).all() and np.isfinite(price).all() and (price>0).all() and (q>=-1e-8).all() and (cash>=-1e-7).all()
  assert (q<=upper+1e-7).all();assert np.allclose(q/step,np.rint(q/step),atol=1e-5,rtol=0)
  assert not np.any((trade[...,us]>0)&(trade[...,us]<=1.+1e-8)),'US trade not strictly above EUR1'
  assert (value@E.T<=.3*invested[...,None]+1e-7).all(),'Sector exceeds30% of invested securities'
  assert (value[...,us].sum(axis=-1)<=.3*invested+1e-7).all(),'US concentration exceeds30%'
  buy=np.maximum(delta,0)*price;assert (buy.sum(axis=-1)<=cap+1e-7).all() and (buy<=assetcap+1e-7).all()
  assert (delta[...,reference]<=1e-8).all();assert (np.count_nonzero(q[...,fund],axis=-1)<=4).all()
  if non_us_no_sale:assert (delta[...,~us]>=-1e-8).all()
  return trade[...,us][trade[...,us]>0]
 for family,cfg in meta['families'].items():
  prices=[read('interactive/corrected-tree/'+family+'/prices-'+str(i)+'.json') for i in range(cfg['branching'][0])]
  for model in cfg['models']:
   for policy in ['SALE','NO_SALE','NO_INITIAL_SALES']:
    prefix='interactive/corrected-tree/'+model+'/'+policy+'/';root=read(prefix+'root.json');summary=root['summary'];assert summary['input_hash']==meta['input_hash'] and summary['US_trade_minimum_policy']=='US_TRADE_STRICT_GT_EUR1_V2'
    q0=np.asarray(root['q0']);uncapped=model.endswith('A');cap=np.inf if uncapped else (1000 if policy=='SALE' else 2000);assetcap=np.inf if uncapped else 750;futurecap=np.inf if uncapped else 1000
    assert summary['initial_stage_cap_EUR']==(None if uncapped else cap)
    trades=list(node(q0,cur,p0,summary['root_cash_EUR'],cap,assetcap,policy!='SALE'));assert abs(summary['root_cash_EUR']-(15000-p0@q0))<1e-7;count=1
    for branch,pr in enumerate(prices):
     dec=read(prefix+'branch-'+str(branch)+'.json');q=np.asarray(dec['q']);price=np.asarray(pr['prices']);parents=pr['parents'];lookup={global_id:i for i,global_id in enumerate(pr['indices'])};before=np.asarray([q0 if parent<0 else q[lookup[parent]] for parent in parents]);prior=np.asarray([summary['root_cash_EUR'] if parent<0 else dec['cash'][lookup[parent]] for parent in parents]);cash=np.asarray(dec['cash']);expected_cash=prior-np.sum((q-before)*price,axis=1);assert np.allclose(cash,expected_cash,atol=1e-7,rtol=0),'Self-financing cash mismatch'
     trades.extend(node(q,before,price,cash,futurecap,assetcap,policy=='NO_SALE'));count+=len(q)
    rows.append(dict(model=model,policy=policy,decision_nodes=count,US_trades=len(trades),minimum_US_trade_EUR=float(min(trades)) if trades else None,passed=True))
 index=(site/'index.html').read_text(encoding='utf8');doc=html.fromstring(index,parser=html.HTMLParser(huge_tree=True));baskets=json.loads(doc.get_element_by_id('current-portfolio-baskets').text);regimes=json.loads(doc.get_element_by_id('regime-netsd-data').text)
 def one(model,policy,basket):
  assert basket['US_trade_minimum_policy']=='US_TRADE_STRICT_GT_EUR1_V2'
  q=np.array([next((r['units'] for r in basket['rows'] if r['asset']==a),0.) for a in assets]);cap=2000 if policy=='NO_SALE' else 1000;trades=node(q,cur,p0,15000-q@p0,cap,750,policy=='NO_SALE');rows.append(dict(model=model,policy=policy,decision_nodes=1,US_trades=len(trades),minimum_US_trade_EUR=float(min(trades)) if len(trades) else None,passed=True))
 for model,cases in baskets.items():
  if model in ['STOCHASTIC','STOCHASTIC2','stochA','stoch2A','NETSD']:continue
  for policy,basket in cases.items():one(model,policy,basket)
 for regime,cases in regimes['portfolios'].items():
  for policy,basket in cases.items():one('NETSD/'+regime,policy,basket)
 assert len(rows)==32,('Missing active model variants',len(rows));minimum=min(r['minimum_US_trade_EUR'] for r in rows if r['minimum_US_trade_EUR'] is not None)
 overview=read('current-overview.json');assert overview['model_input_hash']==meta['input_hash'];assert sum(p['status']=='available' for p in overview['portfolio_comparison']['portfolios'])==32
 for p in overview['portfolio_comparison']['portfolios']:
  if p['status']!='available':continue
  q=np.array([p['units'].get(a,0.) for a in assets]);latest=p0.copy()
  for i,a in enumerate(assets):
   if a in overview['quotes']:latest[i]=overview['quotes'][a]['price_EUR']
  trade=np.abs(q-cur)*latest;assert not np.any((trade[us]>0)&(trade[us]<=1.+1e-8))
 # Bind non-tree active plan data semantically; presentation-only HTML edits remain allowed.
 embedded={k:hashlib.sha256(doc.get_element_by_id(k).text.encode()).hexdigest() for k in ['current-portfolio-baskets','regime-netsd-data','selected-model-contracts']}
 return dict(passed=True,checker_source_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),rule='Each nonzero US BUY and SELL is strictly above EUR1 at its own decision-node EUR price, including A variants',active_portfolio_variants=len(rows),decision_nodes_checked=sum(r['decision_nodes'] for r in rows),invalid_US_trades=0,minimum_US_trade_EUR=minimum,model_input_hash=meta['input_hash'],model_input_observation_dates=meta['market'],current_holding_positions=int((cur>0).sum()),no_sale_initial_cap_EUR=2000,later_standard_cap_EUR=1000,per_asset_standard_cap_EUR=750,sector_and_US_cap_fraction=.3,concentration_denominator='invested shares/funds excluding cash and fixed income',rows=rows,source_sha256=hashes,embedded_source_sha256=embedded)

def main():
 p=argparse.ArgumentParser();p.add_argument('--site',required=True);p.add_argument('--write',action='store_true');a=p.parse_args();data=check(a.site);out=Path(a.site)/'execution-validation.json'
 if a.write:out.write_text(json.dumps(data,indent=2),encoding='utf8')
 else:
  prior=json.loads(out.read_text(encoding='utf8'));assert prior==data,'Execution proof is stale; validate and review new model artifacts before publishing'
 print(json.dumps({k:v for k,v in data.items() if k not in ['rows','source_sha256','embedded_source_sha256']}))
if __name__=='__main__':main()
