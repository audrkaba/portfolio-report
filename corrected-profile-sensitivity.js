(()=>{
 let promise;const load=()=>promise||(promise=fetch('current-sensitivity.json').then(r=>{if(!r.ok)throw Error('Sensitivity data unavailable');return r.json()}));
 const format=x=>x==null?'—':Number(x).toFixed(6);
 window.renderSelectedPortfolioSensitivity=function(profile,model,policy){
  const key=model+'/'+policy;profile.dataset.correctedSensitivityKey=key;
  const legacy=profile.querySelector(':scope > details.portfolio-sensitivity');
  let host=profile.querySelector('.corrected-tree-sensitivity');
  if(!host){host=document.createElement('details');host.className='corrected-tree-sensitivity';}
  if(legacy){legacy.querySelectorAll(':scope > .selected-portfolio-sensitivity').forEach(e=>e.hidden=true);if(host.parentElement!==legacy)legacy.insertBefore(host,legacy.querySelector(':scope > summary')?.nextSibling||null);}
  else if(host.parentElement!==profile)profile.append(host);
  host.replaceChildren();const title=document.createElement('summary');title.textContent='Portfolio sensitivity: complete four-week scenario tree';host.append(title);
  if(!['STOCHASTIC','STOCHASTIC2','stochA','stoch2A'].includes(model)||policy==='ALL'){host.hidden=true;return}host.hidden=false;
  load().then(data=>{
   if(profile.dataset.correctedSensitivityKey!==key)return;
   const tree=data.models[model]?.[policy],asset=(profile.dataset.currentAsset||profile.id.replace(/^(share-|fund-)/,'')).toUpperCase().replace('US:','US_'),row=tree?.assets[asset];if(!row)return;
   const p=document.createElement('p');p.textContent='Whole policy terminal netSD '+format(tree.all_stages.netSD)+'; Current '+format(tree.no_trades.netSD)+'; first decision only '+format(tree.initial_only.netSD)+'. All '+tree.scenarios.toLocaleString('en-US')+' outcomes are retained. Other assets keep every model trade.';host.append(p);
   const table=document.createElement('table');table.className='research-table';const head=table.createTHead().insertRow();for(const text of ['Counterfactual','Later gross buys, units','Terminal netSD','Change vs full policy']){const th=document.createElement('th');th.textContent=text;head.append(th)}
   const body=table.createTBody(),items=[['Remove complete holding',row.removal,0],['Exact first trade '+format(row.initial_change)+'; no later trades',row.initial,0],...row.all_stages.map(v=>[{minimum_positive:'Minimum positive later buys',median:'Weighted median later buys',maximum:'Maximum later buys'}[v.case],v,v.later_units])];
   for(const [name,item,later] of items){const tr=body.insertRow();for(const value of [name,format(later),item.terminal?format(item.terminal.netSD):item.status,format(item.delta_vs_model)])tr.insertCell().textContent=value}
   host.append(table);const a=document.createElement('a');a.href='current-sensitivity.html?'+new URLSearchParams({model,policy,asset});a.textContent='Full quantities, case-specific denominator, cash feasibility and signed schedules';host.append(a);window.reportTableFit?.();
  }).catch(e=>{const p=document.createElement('p');p.textContent=e.message;host.append(p)});
 };
 function terminalFooter(){
  const section=document.getElementById('analytics-1-1'),input=document.getElementById('current-portfolio-baskets');if(!section||!input)return;
  const model=document.querySelector('input[name="portfolio-scope"]:checked')?.value,policy=document.querySelector('input[name="sale-policy"]:checked')?.value,basket=JSON.parse(input.textContent)[model]?.[policy];let footer=document.getElementById('selected-terminal-policy-score');
  const target=document.getElementById('profile-additional-analysis')||section;
  if(!footer){footer=document.createElement('p');footer.id='selected-terminal-policy-score';target.append(footer)}target.append(footer);footer.hidden=!basket?.terminal;
  if(basket?.terminal)footer.textContent=model+' / '+policy+' — complete four-week policy terminal netSD '+format(basket.terminal.netSD)+'; D='+basket.terminal.D+'; first decision only '+format(basket.initial_only_terminal.netSD)+'. Includes every later model decision and residual cash. The selected history/regime affects the separate initial-allocation historical comparison, not this fitted full-tree probability law.';
 }
 const refresh=()=>{const model=document.querySelector('input[name="portfolio-scope"]:checked')?.value,policy=document.querySelector('input[name="sale-policy"]:checked')?.value;document.querySelectorAll('details.stock-profile').forEach(p=>window.renderSelectedPortfolioSensitivity(p,model,policy));terminalFooter()};
 document.addEventListener('change',e=>{if(e.target.matches('input[name="portfolio-scope"],input[name="sale-policy"],select[name="profile-history-regime"]'))queueMicrotask(terminalFooter)});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh);else refresh();
})();
