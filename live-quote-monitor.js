(()=>{
 const input=document.getElementById('current-market-quotes-data'),held=document.getElementById('current-holdings-monitor-data');if(!input||!held)return;
 const market=JSON.parse(input.textContent),holdings=JSON.parse(held.textContent),baskets=JSON.parse(document.getElementById('current-portfolio-baskets').textContent),previous=window.updateSelectedPortfolioProfile,cache=new WeakMap();
 const canonical=a=>a==='US_PFE'?'US:PFE':a;
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
   note.textContent='Confirmed holding: '+units+' units. '+(quote?'Latest verified EUR price '+quote.price.toFixed(4)+' dated '+quote.date+'. ':'')+'Current monitoring proposes no trades. Historical netSD and other model analytics retain their stated earlier sample.';
   if(profile.dataset.currentPending==='true'){
    const text=profile.querySelector(':scope > p:not(.confirmed-holding-scope)');if(text)text.textContent='Confirmed PFE holding and completed-session quote are shown. A complete model profile and corrected allocation remain pending.';
   }
  }else{
   const old=snapshot?.current_units;
   note.textContent='Confirmed holding: '+units+' units. '+(old!=null?'Recorded model input: '+old+' units. ':'')+'Target and analytics are an earlier model snapshot, not recalculated current orders.';
   if(old!=null&&Math.abs(old-units)>1e-9)f.set('change','Pending recalculation');
   const summary=profile.querySelector(':scope > summary');if(summary){summary.textContent=summary.textContent.replace('current action:','recorded action:');summary.textContent=summary.textContent.replace(/ \| held now:.*$/,'');summary.textContent+=' | held now: '+units+' units'}
  }
  return result;
 };
 function showCurrent(asset){
  for(const [name,value] of [['profile-update-mode','ALL'],['profile-instrument-type','ALL']]){const i=document.querySelector(`input[name="${name}"][value="${value}"]`);if(i)i.checked=true}
  const current=document.querySelector('input[name="portfolio-scope"][value="CURRENT"]');current.checked=true;current.dispatchEvent(new Event('change',{bubbles:true}));
  if(asset)queueMicrotask(()=>{const p=[...document.querySelectorAll('details.stock-profile')].find(p=>assetOf(p)===asset);if(p){p.hidden=false;p.open=true;p.scrollIntoView({block:'start',behavior:'smooth'})}});
 }
 function initialise(){
  const filters=document.querySelector('.profile-filters');if(filters&&!document.getElementById('confirmed-holdings-shortcut')){
   const box=document.createElement('aside');box.id='confirmed-holdings-shortcut';box.style.cssText='border:1px solid #bfd1d9;border-radius:5px;padding:.65rem;margin:.6rem 0;overflow-wrap:anywhere';
   const p=document.createElement('p');p.textContent='Confirmed holdings: VLP1L '+holdings.units.VLP1L+'; PFE '+holdings.units['US:PFE']+'; Robur Technology C '+holdings.units.SE0014261764+' units. “Updates only” filters recorded model changes; it is not a list of all investments held.';box.append(p);
   for(const [label,asset] of [['View all Current holdings',null],['View PFE holding','US:PFE']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.style.marginRight='.5rem';b.addEventListener('click',()=>showCurrent(asset));box.append(b)}
   filters.after(box);
  }
  const selected=document.querySelector('input[name="portfolio-scope"]:checked');selected?.dispatchEvent(new Event('change',{bubbles:true}));
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialise);else initialise();
})();
