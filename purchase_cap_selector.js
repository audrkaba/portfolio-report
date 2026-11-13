(()=>{
 const panel=document.getElementById('purchase-cap-filter');if(!panel)return;
 const message=panel.querySelector('.purchase-cap-status'),inputs=[...panel.querySelectorAll('input')];
 const pairs={STOCHASTIC:['STOCHASTIC','stochA'],stochA:['STOCHASTIC','stochA'],STOCHASTIC2:['STOCHASTIC2','stoch2A'],stoch2A:['STOCHASTIC2','stoch2A']};
 const baskets=JSON.parse(document.getElementById('current-portfolio-baskets')?.textContent||'{}');
 function sync(){
  const scope=document.querySelector('input[name="portfolio-scope"]:checked')?.value,pair=pairs[scope];
  inputs.forEach(input=>{input.disabled=!pair;input.checked=!!pair&&(input.value==='A')===(scope===pair[1])});message.replaceChildren();
  if(!pair){message.textContent='Select Stochastic or Stochastic 2 to compare purchase-limit alternatives.';return}
  const uncapped=scope===pair[1];
  message.textContent=(uncapped?scope+' selected: both purchase-value caps removed.':'Standard '+scope+' selected: EUR 1,000 total and EUR 750 per asset per decision.')+' The 30% sector cap remains.';
  if(uncapped&&!baskets[scope]){
   message.textContent+=' This variant is not yet integrated into the main snapshot. No standard-model allocation is substituted. ';
   const a=document.createElement('a');a.href='current-sensitivity.html?model='+scope+'&policy=NO_SALE&asset=VLP1L';a.textContent='Open current variant results / calculation status';message.append(a);
  }
 }
 panel.addEventListener('change',e=>{
  if(e.target.name!=='purchase-cap-mode')return;
  const current=document.querySelector('input[name="portfolio-scope"]:checked')?.value,pair=pairs[current];if(!pair)return;
  const target=document.querySelector('input[name="portfolio-scope"][value="'+pair[e.target.value==='A'?1:0]+'"]');
  if(target){target.checked=true;target.dispatchEvent(new Event('change',{bubbles:true}))}sync();
 });
 document.addEventListener('change',e=>{if(e.target.name==='portfolio-scope')sync()});sync();
})();
