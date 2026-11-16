(()=>{
 const input=document.getElementById('current-market-quotes-data'),held=document.getElementById('current-holdings-monitor-data');if(!input||!held)return;
 const market=JSON.parse(input.textContent),holdings=JSON.parse(held.textContent),baskets=JSON.parse(document.getElementById('current-portfolio-baskets').textContent),previous=window.updateSelectedPortfolioProfile,cache=new WeakMap();
 const canonical=a=>a==='US_PFE'?'US:PFE':a;
 const historicalElement=document.getElementById('current-holdings-netsd-data'),historical=historicalElement?JSON.parse(historicalElement.textContent):null;
 const impactElement=document.getElementById('pfe-portfolio-impact-data'),impact=impactElement?JSON.parse(impactElement.textContent):null;
 const selectedHistory=()=>document.querySelector('select[name="profile-history-regime"]')?.value||'FULL';
 const assetOf=p=>canonical((p.dataset.currentAsset||p.id.replace(/^(share-|fund-)/,'')).toUpperCase());
 const tableOf=p=>p.querySelector('table.stock-summary-table')||p.querySelector('table');
 const infoFor=(asset,scope,policy)=>(baskets[scope]?.[policy]?.rows||[]).find(r=>canonical(r.asset)===asset)||Object.values(baskets).flatMap(m=>Object.values(m)).flatMap(b=>b.rows||[]).find(r=>canonical(r.asset)===asset);
 function fields(table){const names=[...(table?.tHead?.rows[0]?.cells||[])].map(c=>c.textContent.trim().toLowerCase()),row=table?.tBodies[0]?.rows[0];return {set:(name,value)=>{const i=names.indexOf(name);if(i>=0&&row)row.cells[i].textContent=value},get:name=>{const i=names.indexOf(name);return i>=0&&row?row.cells[i].textContent:null}}}
 function pfeTable(profile){
  if(tableOf(profile))return;
  const template=document.querySelector('table.stock-summary-table');if(!template)return;
  const table=document.createElement('table');table.className='stock-summary-table';table.dataset.currentOnly='true';table.append(template.tHead.cloneNode(true));
  const row=table.createTBody().insertRow();for(const _ of table.tHead.rows[0].cells)row.insertCell().textContent='—';profile.append(table);
 }
 window.updateSelectedPortfolioProfile=function(profile,scope,policy){
  const asset=assetOf(profile),units=holdings.units[asset]||0,isCurrent=scope==='CURRENT',quote=market.quotes[asset.replace('US:','US_')];
  if(!isCurrent&&cache.has(profile)){
   const f=fields(tableOf(profile));for(const [label,value] of Object.entries(cache.get(profile)))f.set(label,value);
   cache.delete(profile);
  }
  const result=previous?.(profile,scope,policy);
  if(profile.dataset.currentPending==='true'&&!isCurrent)return result;
  if(isCurrent&&profile.dataset.currentPending==='true')pfeTable(profile);
  const table=tableOf(profile),f=fields(table);if(!table)return result;
  const snapshot=infoFor(asset,scope,policy);
  f.set('current units',units);
  let note=profile.querySelector(':scope > .confirmed-holding-scope');
  if(!note){note=document.createElement('p');note.className='confirmed-holding-scope';profile.querySelector('table')?.before(note)}
  if(isCurrent){
   if(!cache.has(profile))cache.set(profile,Object.fromEntries(['last price','bollinger lower eur','bollinger upper eur'].map(label=>[label,f.get(label)]).filter(([,v])=>v!==null)));
   if(quote){
    f.set('last price',quote.price.toFixed(4));f.set('bollinger lower eur',quote.bollinger_lower.toFixed(4));f.set('bollinger upper eur',quote.bollinger_upper.toFixed(4));
    f.set('target units',units);f.set('change',0);f.set('target value eur',(units*quote.price).toFixed(2));f.set('weight %',(100*units*quote.price/15000).toFixed(2)+'%');
   }
   const context=historical?.contexts[selectedHistory()],score=context?.assets[asset.replace('US:','US_')];
   if(score){f.set('individual netsd',score.netSD.toFixed(6));f.set('out',score.OUT);f.set('in',score.IN)}
   note.textContent='Confirmed holding: '+units+' units. '+(quote?'Latest verified EUR price '+quote.price.toFixed(4)+' dated '+quote.date+'. ':'')+'Current monitoring proposes no trades. '+(score?'Historical netSD: '+selectedHistory()+', '+context.observations+' training observations ('+context.first_return_date+' to '+context.last_return_date+'); D='+score.D+' on the complete 72-node network including PFE and confirmed Current. Excludes cash and the 126 diagnostic observations. The native historical metrics use the refreshed common training/diagnostic split.':'Historical analytics pending.');
   if(profile.dataset.currentPending==='true'){
    const text=profile.querySelector(':scope > p:not(.confirmed-holding-scope)');if(text)text.textContent='Confirmed PFE holding, latest completed-session quote and regime-dependent historical netSD are shown. Reoptimised trading allocations and full scenario-tree evaluation remain pending.';
    let p=profile.querySelector('.pfe-portfolio-impact');if(!p){p=document.createElement('p');p.className='pfe-portfolio-impact';table.after(p)}
    const row=impact?.contexts[selectedHistory()]?.rows.find(r=>r.model==='CURRENT');
    if(row){p.textContent='Effect of the complete PFE holding on Current historical netSD: with PFE '+row.with_PFE.netSD.toFixed(6)+', without PFE '+row.without_PFE.netSD.toFixed(6)+', difference '+row.effect_of_PFE.toFixed(6)+'. Other asset quantities unchanged. ';const a=document.createElement('a');a.href='pfe-portfolio-impact.html';a.textContent='Compare PFE impact for Current and all 20 published model/policy allocations (historical sensitivity; not reoptimised plans)';p.append(a)}
   }
  }else{
   const old=snapshot?.current_units;
   const validated=baskets[scope]?.[policy]?.validated===true;
   note.textContent='Confirmed holding: '+units+' units. '+(old!=null?'Model input: '+old+' units. ':'')+(validated?'Recalculated allocation using the latest completed-session quotes.':'Target and analytics are an earlier model snapshot, not recalculated current orders.');
   if(old!=null&&Math.abs(old-units)>1e-9)f.set('change','Pending recalculation');
   const summary=profile.querySelector(':scope > summary');if(summary){summary.textContent=summary.textContent.replace(validated?'recorded action:':'current action:',validated?'current action:':'recorded action:');summary.textContent=summary.textContent.replace(/ \| held now:.*$/,'');summary.textContent+=' | held now: '+units+' units'}
  }
  return result;
 };
 function showCurrent(asset){
  for(const [name,value] of [['profile-update-mode','ALL'],['profile-instrument-type','ALL']]){const i=document.querySelector(`input[name="${name}"][value="${value}"]`);if(i)i.checked=true}
  const current=document.querySelector('input[name="portfolio-scope"][value="CURRENT"]');current.checked=true;current.dispatchEvent(new Event('change',{bubbles:true}));
  if(asset)queueMicrotask(()=>{const p=[...document.querySelectorAll('details.stock-profile')].find(p=>assetOf(p)===asset);if(p){p.hidden=false;p.open=true;p.scrollIntoView({block:'start',behavior:'smooth'})}});
 }
 function currentNetSD(){
  document.querySelectorAll('.actual-current-netsd').forEach(e=>e.remove());
  if(document.querySelector('input[name="portfolio-scope"]:checked')?.value!=='CURRENT'||!historical)return;
  const context=historical.contexts[selectedHistory()],score=context.assets.Current,host=document.querySelector('.current-portfolio-composition');if(!host)return;
  const p=document.createElement('p');p.className='actual-current-netsd';p.textContent='Confirmed Current portfolio historical netSD: '+score.netSD.toFixed(6)+' ('+selectedHistory()+', OUT '+score.OUT+', IN '+score.IN+', D '+score.D+'). Uses all 14 confirmed holdings, including 117 VLP and 5.491688 PFE, valued at the latest verified quotes. Invested-holdings returns exclude cash; '+context.observations+' training observations. This is not terminal scenario-tree netSD and does not represent reoptimised orders.';host.append(p);
 }
 document.addEventListener('change',e=>{if(e.target.matches('input[name="portfolio-scope"],input[name="sale-policy"],select[name="profile-history-regime"]'))queueMicrotask(currentNetSD)});
 function initialise(){
  const filters=document.querySelector('.profile-filters');if(filters&&!document.getElementById('confirmed-holdings-shortcut')){
   const box=document.createElement('aside');box.id='confirmed-holdings-shortcut';box.style.cssText='border:1px solid #bfd1d9;border-radius:5px;padding:.65rem;margin:.6rem 0;overflow-wrap:anywhere';
   const p=document.createElement('p');p.textContent='Confirmed holdings: VLP1L '+holdings.units.VLP1L+'; PFE '+holdings.units['US:PFE']+'; Robur Technology C '+holdings.units.SE0014261764+' units. “Updates only” filters recorded model changes; it is not a list of all investments held.';box.append(p);
   for(const [label,asset] of [['View all Current holdings',null],['View PFE holding','US:PFE']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.style.marginRight='.5rem';b.addEventListener('click',()=>showCurrent(asset));box.append(b)}
   filters.after(box);
  }
  if(filters&&!document.getElementById('profile-supporting-information')){
   const section=document.getElementById('analytics-1-1'),zone=document.createElement('details');zone.id='profile-supporting-information';
   const summary=document.createElement('summary');summary.textContent='Additional information: model conditions, methodology and data notes';zone.append(summary);
   const children=[...section.children],firstAsset=children.findIndex(e=>e.matches('.stock-profile:not([data-current-pending="true"])'));
   const extras=children.filter((e,i)=>i<firstAsset&&!e.matches('.stock-profile')&&e.matches('details,nav,.profile-summary-note'));
   filters.before(zone);for(const e of extras){zone.append(e);if(e.tagName==='DETAILS')e.open=false}zone.open=false;
   const heading=document.createElement('div');heading.setAttribute('role','heading');heading.setAttribute('aria-level','4');heading.id='profile-assets-heading';heading.textContent='My holdings and selected model asset profiles';
   document.getElementById('confirmed-holdings-shortcut').after(heading);
   for(const e of [...section.children]){if(e.matches('.stock-profile')&&e.compareDocumentPosition(filters)&Node.DOCUMENT_POSITION_FOLLOWING)heading.after(e)}
   const style=document.createElement('style');style.textContent='#profile-supporting-information{margin:.45rem 0;font-size:.88rem}#profile-supporting-information>summary{font-weight:400}#selected-model-conditions{font-size:.82rem;padding:.2rem;margin:.25rem 0}#selected-model-conditions summary,#selected-model-conditions summary strong{font-weight:400!important;font-size:.82rem}#selected-model-conditions p{margin:.3rem 0;line-height:1.4}#profile-assets-heading{font-size:1rem;margin:.9rem 0 .4rem}#confirmed-holdings-shortcut p{margin:.2rem 0 .4rem}';document.head.append(style);
  }
  const selected=document.querySelector('input[name="portfolio-scope"]:checked');selected?.dispatchEvent(new Event('change',{bubbles:true}));
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialise);else initialise();
})();
