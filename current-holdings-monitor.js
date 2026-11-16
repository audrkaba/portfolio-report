(()=>{
 const payload=document.getElementById('current-holdings-monitor-data');if(!payload)return;
 const holdings=JSON.parse(payload.textContent),original=window.updateSelectedPortfolioProfile;
 const selector='input[name="portfolio-scope"]';
 const isCurrent=()=>document.querySelector(selector+':checked')?.value==='CURRENT';
 const monitored=new WeakSet();
 window.updateSelectedPortfolioProfile=function(profile,scope,policy){
  if(scope!=='CURRENT'){if(profile.dataset.currentPending==='true'){profile.dataset.portfolioScopes='';profile.dataset.saleMembership='{}';profile.dataset.hasUpdate='false';return;}if(monitored.has(profile)){original?.(profile,'CURRENT',policy);monitored.delete(profile);}return original?.(profile,scope,policy);}
  monitored.add(profile);
  original?.(profile,'ALL',policy);
  const raw=profile.dataset.currentAsset||profile.id.replace(/^(share-|fund-)/,'').toUpperCase();
  const asset=raw==='US_PFE'&&holdings.units['US:PFE']?'US:PFE':raw,units=holdings.units[asset]||0;
  profile.dataset.portfolioScopes=units>0?'CURRENT':'';
  profile.dataset.saleMembership=JSON.stringify({CURRENT:units>0?['SALE','NO_SALE']:[]});
  profile.dataset.signal='HOLD';profile.dataset.hasUpdate='false';profile.dataset.netsdEffect='UNCHANGED';
  if(!units)return;
  const table=profile.querySelector('table'),row=table?.tBodies[0]?.rows[0];
  const labels=[...(table?.querySelectorAll('thead th')||[])].map(e=>e.textContent.trim().toLowerCase());
  const set=(label,value)=>{const i=labels.indexOf(label);if(i>=0&&row)row.cells[i].textContent=value;};
  set('current units',units);set('target units',units);set('change',0);
  const baskets=JSON.parse(document.getElementById('current-portfolio-baskets').textContent);
  const info=Object.values(baskets).flatMap(c=>Object.values(c)).flatMap(b=>b.rows).find(z=>z.asset===asset||z.asset===raw);
  const value=info?units*info.price:null;
  set('target value eur',value==null?'—':value.toFixed(2));set('weight %',value==null?'—':(value/15000*100).toFixed(2)+'%');
  const summary=profile.querySelector(':scope > summary');
  const name=info?.name||summary.textContent.split('|')[0].trim();
  summary.textContent=(info?asset+' — '+name:name)+' | Current: '+units+' units';
  let notes=profile.querySelector(':scope > .profile-allocation-notes');
  if(notes)notes.textContent='Current confirmed holding. No purchase or sale is proposed in this monitoring view.';
  const sensitivity=profile.querySelector('.selected-portfolio-sensitivity');
  if(sensitivity)sensitivity.textContent='Current holdings monitoring. Select an optimisation model for its proposed trades and scenario-tree sensitivity.';
 };
 function decorate(){
  const active=isCurrent();
  const conditions=document.querySelector('#selected-model-conditions');if(conditions)conditions.hidden=active;
  if(!active)return;
  const host=document.querySelector('.current-portfolio-composition');if(host){
   host.replaceChildren();const details=document.createElement('details'),summary=document.createElement('summary'),p=document.createElement('p');
   summary.textContent='Current — confirmed holdings';
   p.textContent='Monitoring view: quantities are the user-confirmed holdings; values use the report’s latest available prices and weights use EUR 15,000 account wealth. No optimisation trades are proposed. '+(holdings.pending_model_updates?.length?'PFE is included as a confirmed holding; its model analytics and valuation are pending.':'');
   details.append(summary,p);host.append(details);
  }
 }
 document.addEventListener('change',e=>{
  if(e.target.name==='portfolio-scope'&&isCurrent()){
   const all=document.querySelector('input[name="profile-update-mode"][value="ALL"]');if(all)all.checked=true;
  }
  // Keep Current selected when changing historical evaluation context.
  if(e.target.name==='profile-history-regime'&&isCurrent())queueMicrotask(()=>{const input=document.querySelector(selector+'[value="CURRENT"]');input.checked=true;input.dispatchEvent(new Event('change',{bubbles:true}));});
  queueMicrotask(decorate);
 },true);
})();
