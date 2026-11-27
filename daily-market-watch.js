(() => {
 'use strict';
 const init=()=>{
  let root=document.getElementById('daily-market-watch');const dataNode=document.getElementById('daily-market-watch-data');if(!root||!dataNode)return;
  // Upgrade previously published expanded markup without changing its data.
  if(root.tagName!=='DETAILS'){
   const disclosure=document.createElement('details');for(const a of root.attributes)disclosure.setAttribute(a.name,a.value);
   const heading=root.querySelector('.watch-heading'),summary=document.createElement('summary');summary.className='watch-heading';
   while(heading?.firstChild)summary.append(heading.firstChild);heading?.remove();disclosure.append(summary);
   while(root.firstChild)disclosure.append(root.firstChild);root.replaceWith(disclosure);root=disclosure;
  }
  const summary=root.querySelector(':scope > summary');if(summary){summary.style.display='list-item';summary.style.cursor='pointer'}
  const data=JSON.parse(dataNode.textContent),number=(x,d=2)=>Number.isFinite(x)?x.toLocaleString('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d}):'—';
  let latestQuotes={};
  const holdingsNode=document.getElementById('current-holdings-monitor-data');
  const actualHoldings=holdingsNode?JSON.parse(holdingsNode.textContent).units:null;
  const isHeld=r=>actualHoldings?Number(actualHoldings[r.asset.replace(/^US_/,'US:')]??actualHoldings[r.asset]??0)>0:Number(r.held_units||0)>0;
  const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
  const stamp=new Date(data.checked_at_UTC).toLocaleString('en-GB',{timeZone:'Europe/Vilnius',dateStyle:'medium',timeStyle:'short'});
  root.querySelector('#watch-dates').textContent=`Checked ${stamp} (Europe/Vilnius) · completed sessions through ${data.completed_session_cutoff}; each asset's actual quote date is shown. Model targets retain their published snapshot.`;
  root.querySelector('#watch-coverage').textContent=`${data.rows.length} permitted instruments with verified indicators; ${data.unavailable.length} unavailable. Sources: official Nasdaq Baltic closes, official Swedbank Robur NAV, Yahoo completed PFE closes converted with dated ECB reference rates.`;
  const un=root.querySelector('#watch-unavailable');if(!data.unavailable.length)un.textContent='No unavailable instruments.';else data.unavailable.forEach(r=>un.append(el('p',`${r.asset} — ${r.name}: ${r.error}`)));
  function reveal(asset){
   const id=asset.startsWith('SE')?'fund-'+asset:'share-'+asset.toLowerCase();const profile=document.getElementById(id);if(!profile)return;
   const filters=document.querySelector('#analytics-1-1 .profile-filters');
   for(const [name,value] of [['portfolio-scope','ALL'],['profile-update-mode','ALL'],['profile-instrument-type','ALL']]){
    const option=filters?.querySelector(`input[name="${name}"][value="${value}"]`);if(option){option.checked=true;option.dispatchEvent(new Event('change',{bubbles:true}));}
   }
   // Clear text and technical-action filters only on this explicit profile click.
   filters?.querySelectorAll('input[type="search"],input[type="text"]').forEach(n=>{n.value='';n.dispatchEvent(new Event('input',{bubbles:true}));});
   filters?.querySelectorAll('input[type="checkbox"]').forEach(n=>{if(!n.checked){n.checked=true;n.dispatchEvent(new Event('change',{bubbles:true}));}});
   for(let p=profile;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
   profile.hidden=false;profile.style.display='';profile.scrollIntoView({block:'start'});history.replaceState(null,'','#'+id);
  }
  function card(r,side){
   const t=r[side+'_trigger'],v=r.values,c=el('li',undefined,'watch-card');c.dataset.asset=r.asset;c.dataset.active=String(t.active);
   const name=el('div');const link=el('a',r.ticker||(r.asset==='US_PFE'?'PFE':r.asset),'watch-asset');const profileId=r.asset.startsWith('SE')?'fund-'+r.asset:'share-'+r.asset.toLowerCase();link.href=document.getElementById(profileId)?'#'+profileId:r.analysis_only?'extended-reference.html?scope='+(r.short_history?'short':'long')+'&asset='+encodeURIComponent(r.asset)+'#extended-reference-assets':r.quote_url||(r.type==='Share'&&r.isin?'https://nasdaqbaltic.com/statistics/en/instrument/'+r.isin+'/trading':r.source_url);
   link.addEventListener('click',e=>{if(document.getElementById(link.hash.slice(1))){e.preventDefault();reveal(r.asset);}});name.append(link,el('span',r.name,'watch-name'));
   const fresh=latestQuotes.prices?.[r.asset];
   const quote=el('a',fresh?`${fresh.kind==='NAV'?'Latest NAV':'Latest quote'} €${number(fresh.price_EUR,4)} · ${fresh.date}${fresh.timestamp_UTC?' '+new Date(fresh.timestamp_UTC).toLocaleTimeString('en-GB',{timeZone:'Europe/Vilnius',hour:'2-digit',minute:'2-digit'}):''}${fresh.refresh_ok===false?' · retained; latest check failed':''}`:'Latest quote — unavailable','watch-quote watch-latest-quote');
   if(fresh){quote.href=fresh.source_url;quote.target='_blank';quote.rel='noopener';quote.title='Source checked '+fresh.checked_at_UTC+(fresh.native_currency==='USD'?'; USD '+number(fresh.native_price,4)+' converted with ECB rate dated '+fresh.FX_date:'');}
   name.append(quote);
   const source=el('a',`Signal close €${number(v.price,4)} · ${r.date}`,'watch-quote');source.href=r.source_url;source.target='_blank';source.rel='noopener';source.title='Verified market-data source';name.append(source);
   if(!r.model_eligible)name.append(el('span',r.model_status_text||'Short history — observation only','watch-name'));
   const signal=el('div');signal.append(el('span',`${t.active?'● ACTIVE':'◇ NEAR'} ${side.toUpperCase()} · ${r[side+'_votes']}/4`,'watch-signal'));
   signal.append(el('span',t.active?'Threshold already reached':`Trigger €${number(t.price,4)} (${t.move_pct>=0?'+':''}${number(t.move_pct,2)}%)`,'watch-quote'));
   if(!t.active)signal.append(el('span','At trigger: '+Object.keys(t.components).filter(k=>t.components[k]).join(' + '),'watch-quote'));
   if(side==='sell')signal.append(el('span',r.held_units>0?`Held: ${number(r.held_units,6)} units`:'Not held — observation only','watch-quote'));
   const indicators=el('div',undefined,'watch-indicators');
   const entries=[['BB',`BB €${number(v.lower,4)}–${number(v.upper,4)}`],['RSI',`RSI ${number(v.rsi,1)}`],['StochRSI',`Stoch RSI K/D % ${number(Math.max(0,Math.min(1,v.k))*100,1)}/${number(Math.max(0,Math.min(1,v.d))*100,1)}`],['MACD',`MACD ${number(v.macd,4)} / signal ${number(v.macd_signal,4)}`]];
   entries.forEach(([key,text])=>{const n=el('span',`${r[side][key]?'✓ ':''}${text}`,r[side][key]?'watch-vote':'');n.title=`${key}: ${r[side][key]?'currently votes '+side.toUpperCase():'no '+side.toUpperCase()+' vote'}`;indicators.append(n);});
   c.append(name,signal,indicators);
   if(r.initial_models.length||r.future_models.length){
    const details=el('details',undefined,'watch-models');details.append(el('summary',r.initial_models.length?`Initial addition: ${r.initial_models.length} model/policy plans${r.future_models.length?' · conditional later purchases also present':''}`:`Later only: ${r.future_models.length} conditional model/policy plans`));
    r.initial_models.forEach(m=>details.append(el('p',`${m.model}: +${number(m.units,6)} units initially`)));
    r.future_models.forEach(m=>details.append(el('p',`${m.model}: up to +${number(m.maximum_gross_units,6)} gross additional units after the initial decision, on one future path`)));
    c.append(details);
   }
   return c;
  }
  const voteFilters={},voteFields={};
  for(const side of ['buy','sell']){
   const fieldset=el('fieldset',undefined,'watch-vote-filter');fieldset.append(el('legend',side.toUpperCase()+' votes'));
   voteFilters[side]=new Set([3,4]);
   for(const votes of [0,1,2,3,4]){
    const label=el('label'),input=el('input');input.type='checkbox';input.name='watch-'+side+'-votes';input.value=String(votes);input.checked=voteFilters[side].has(votes);
    input.addEventListener('change',()=>{input.checked?voteFilters[side].add(votes):voteFilters[side].delete(votes);render()});label.append(input,document.createTextNode(' '+votes+'/4'));fieldset.append(label);
   }
   voteFields[side]=fieldset;
  }
  function render(){
   const near=Number(root.querySelector('#watch-near-pct').value),counts={};
   for(const side of ['buy','sell']){
    const host=root.querySelector('#watch-'+side);host.replaceChildren(voteFields[side]);
    const matches=data.rows.filter(r=>(side!=='sell'||isHeld(r))&&voteFilters[side].has(Number(r[side+'_votes']))&&!(Number(r[side+'_votes'])===1&&r[side].MACD)&&r[side+'_trigger']&&(r[side+'_trigger'].active||Math.abs(r[side+'_trigger'].move_pct)<=near+1e-7)).sort((a,b)=>Number(b[side+'_trigger'].active)-Number(a[side+'_trigger'].active)||Math.abs(a[side+'_trigger'].move_pct)-Math.abs(b[side+'_trigger'].move_pct)||a.asset.localeCompare(b.asset));
    counts[side]=matches.length;host.append(el('div',`${side.toUpperCase()} watch · ${matches.length}`,'watch-side-title'));
    for(const supported of [true,false]){
     const group=matches.filter(r=>Boolean(r.initial_models.length||r.future_models.length)===supported);host.append(el('div',`${supported?'Model proposes addition':side==='sell'?'Other held assets':'Other permitted assets / reference candidates'} (${group.length})`,'watch-group-title'));
     const list=el('ul');list.dataset.group=supported?'models':'other';group.forEach(r=>list.append(card(r,side)));host.append(list);if(!group.length)host.append(el('p','No matching signals within this distance.','watch-empty'));
    }
   }
   root.querySelector('#watch-status').textContent=`${counts.buy} BUY · ${counts.sell} SELL · within ${near}%`;
  }
  root.querySelector('#watch-near-pct').addEventListener('change',render);render();root.dataset.ready='true';
  fetch('watch-latest-quotes.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Quote snapshot unavailable');return r.json()}).then(q=>{latestQuotes=q;render();root.dataset.latestQuotes='ready';const stamp=new Date(q.checked_at_UTC).toLocaleString('en-GB',{timeZone:'Europe/Vilnius',dateStyle:'medium',timeStyle:'short'});root.querySelector('#watch-dates').textContent+=' Latest quote snapshot checked '+stamp+' (Europe/Vilnius). Signals retain the separately shown Signal close.';}).catch(()=>{root.dataset.latestQuotes='unavailable';});
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
