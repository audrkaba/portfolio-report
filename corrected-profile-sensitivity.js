(()=>{
 let promise;const load=()=>promise||(promise=fetch('current-sensitivity.json').then(r=>{if(!r.ok)throw Error('Sensitivity data unavailable');return r.json()}));
 const format=x=>x==null?'—':Number(x).toFixed(6);
 window.renderSelectedPortfolioSensitivity=function(profile,model,policy){
  const key=model+'/'+policy;profile.dataset.correctedSensitivityKey=key;
  let host=profile.querySelector(':scope > .corrected-tree-sensitivity');
  if(!host){host=document.createElement('details');host.className='corrected-tree-sensitivity';profile.append(host)}
  host.replaceChildren();const title=document.createElement('summary');title.textContent='Portfolio sensitivity: complete four-week scenario tree';host.append(title);
  profile.querySelectorAll(':scope > .portfolio-sensitivity,:scope > .selected-portfolio-sensitivity').forEach(e=>e.remove());
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
 const refresh=()=>{const model=document.querySelector('input[name="portfolio-scope"]:checked')?.value,policy=document.querySelector('input[name="sale-policy"]:checked')?.value;document.querySelectorAll('details.stock-profile').forEach(p=>window.renderSelectedPortfolioSensitivity(p,model,policy))};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh);else refresh();
})();
