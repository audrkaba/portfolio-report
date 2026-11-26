(()=>{
 const init=async()=>{
  const root=document.getElementById('chapter3-asset-sensitivity');if(!root)return;
  const response=await fetch('chapter3-asset-sensitivity.json?v='+encodeURIComponent(root.dataset.jsonVersion||''));if(!response.ok)throw new Error('Asset sensitivity data unavailable');const data=await response.json();
  const model=root.querySelector('[name=asset-sensitivity-model]'),policy=root.querySelector('[name=asset-sensitivity-policy]'),context=root.querySelector('[name=asset-removal-context]'),initialContext=root.querySelector('[name=asset-initial-context]');
  const labels={STOCHASTIC2:'Stochastic 2',STOCHASTIC:'Stochastic',stochA:'stochA',stoch2A:'stoch2A',MARKOWITZ:'Markowitz',MINIMAX:'Minimax',ROBUST:'Robust',UPDATE2:'Update 2',UPDATE3:'Update 3',NETSD:'netSD (full history)'};
  const groups=[['netSD','Sharpe','Rachev','Sortino'],['mean_return','SD','CVaR95','loss_probability']];
  const metricLabels={netSD:'netSD',Sharpe:'Sharpe',Rachev:'Rachev 5%/5%',Sortino:'Sortino',mean_return:'Mean return %',SD:'SD %',CVaR95:'CVaR95 loss %',loss_probability:'Loss probability %'};
  const percent=new Set(['mean_return','SD','CVaR95','loss_probability']);const qty=x=>Number(x).toLocaleString('en-GB',{maximumFractionDigits:6}),fmt=x=>x==null||!Number.isFinite(x)?'—':(x!==0&&Math.abs(x)<0.0000005?Number(x).toExponential(2):Number(x).toFixed(6));
  const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n};
  for(const key of Object.keys(data.models))model.add(new Option(labels[key]||key,key));model.value='STOCHASTIC2';
  root.querySelector('.asset-sensitivity-snapshot').textContent=data.snapshot+' Inventory: '+(data.scope==='actual'?'latest user-confirmed Current; frozen model signed trades are replayed from this inventory without reoptimisation.':'the already-published model/Current snapshot; this is not a claim that newer holdings were reoptimised.');
  function baseline(host,score,label){const p=el('p',label+': '+(score?['netSD','Sharpe','Rachev','Sortino','mean_return','CVaR95'].map(k=>metricLabels[k]+' '+fmt(score[k]==null?null:score[k]*(percent.has(k)?100:1))).join(' · '):'unavailable with unchanged trades and cash.'),'sensitivity-baseline');host.append(p)}
  function tables(host,rows,kind){
   if(!rows.length){host.append(el('p',kind==='later'?'No positive later-stage purchases in any positive-probability path.':'No positive first-stage purchases in this portfolio.'));return}
   for(const keys of groups){
    const table=el('table',null,'asset-sensitivity-table horizontal-summary-group');table.createCaption().textContent=(kind==='remove'?'Full position removed':kind==='first'?'Exact first-stage purchase':'Exact first-stage buy + attained maximum later gross buys')+' — after value and Δ versus the stated baseline';
    const head=table.createTHead().insertRow();for(const h of ['Asset',kind==='later'?'First buy + later buys':'Quantity',...keys.map(k=>metricLabels[k])])head.append(el('th',h));
    const body=table.createTBody();for(const item of rows){
     const row=body.insertRow();row.dataset.asset=item.asset;row.dataset.quantity=item.quantity;row.dataset.available=String(Boolean(item.terminal));if(kind==='later'){row.dataset.initialBuy=item.initial_buy;row.dataset.laterBuy=item.quantity;row.dataset.totalBuy=item.total_gross_buy}
     const cell=row.insertCell(),link=el('a',item.asset.replace(/^US_/,''));link.title=data.names[item.asset]||item.asset;const anchor=item.asset.startsWith('SE')?'fund-'+item.asset:'share-'+item.asset.toLowerCase();link.href=(location.pathname.includes('portfolio-asset-sensitivity')?'index.html':'')+'#'+anchor;cell.append(link);
     if(!item.terminal){const note=el('details',null,'asset-sensitivity-row-note');note.append(el('summary','Unavailable'),el('p',item.status));cell.append(note)}
     const amount=row.insertCell();amount.textContent=kind==='later'?qty(item.initial_buy)+' + '+qty(item.quantity):(kind==='remove'?'−':'+')+qty(item.quantity);
     if(kind==='later'){const note=el('details',null,'asset-sensitivity-row-note');note.append(el('summary','Schedule'));note.append(el('p','Gross total: '+qty(item.total_gross_buy)+' units. Signed initial trade: '+qty(item.initial_signed_trade)+'. '+item.signed_later_trades.map((q,i)=>'Week '+item.stage_weeks[i]+': '+qty(q)).join('; ')+'. This full signed schedule occurs on an actual path.'));amount.append(note)}
     for(const key of keys){const c=row.insertCell(),factor=percent.has(key)?100:1,value=item.terminal?.[key],change=item.delta?.[key];c.append(el('span',fmt(value==null?null:value*factor),'sensitivity-value'),el('small','Δ '+fmt(change==null?null:change*factor),'sensitivity-change'));c.title='Before: '+fmt(item.baseline?.[key]==null?null:item.baseline[key]*factor)+(percent.has(key)?'%; Δ in percentage points':'')}
    }host.append(table);
   }
  }
  function draw(){
   const selected=data.models[model.value][policy.value],law=data.laws[selected.law];
   root.querySelector('.asset-sensitivity-context').textContent=(labels[model.value]||model.value)+' / '+(policy.value==='NO_SALE'?'No-sale':'Sale')+' · '+selected.outcomes.toLocaleString('en-GB')+' original terminal outcomes · four-week horizon · other trades fixed; no portfolio reoptimisation.';
   const removal=root.querySelector('#asset-removal-tables'),first=root.querySelector('#asset-initial-buy-tables'),later=root.querySelector('#asset-later-buy-tables');[removal,first,later].forEach(n=>n.replaceChildren());
   const current=context.value==='CURRENT';baseline(removal,current?law.baseline:selected.full_policy_baseline,current?'Before: Current, no model trades':'Before: complete selected-model policy');tables(removal,current?law.current_removal:selected.current_removal,'remove');
   if(initialContext.value==='CURRENT'){
    baseline(first,selected.current_baseline,'Before: Current with no proposed trades');first.append(el('p','After: add only this asset exact proposed first-stage purchase to Current. All other Current holdings stay unchanged. Each row is a separate counterfactual.'));tables(first,selected.initial_buys.map(r=>r.current_addition),'first');
   }else{
   baseline(first,selected.initial_baseline,'After: selected initial portfolio including all its initial purchases');first.append(el('p','Each row compares this initial composition against the same composition with only that asset’s initial buy omitted. All other initial positions remain identical. No later-stage trades enter this table.'));tables(first,selected.initial_buys,'first');
   }
   baseline(later,selected.full_policy_baseline,'Before: complete selected-model policy');later.append(el('p','Each row replaces only that asset’s later schedule by an actually attained maximum-gross-purchase schedule, retaining its exact signed initial trade. Every other asset keeps all model trades. The chosen schedule is replayed on every original path; its sales and dates remain. These rows are separate diagnostics and are not combined into one portfolio.'));tables(later,selected.later_maximum_buys,'later');
   root.dataset.ready='true';
  }
  function policies(){const previous=policy.value||'NO_SALE';policy.replaceChildren();for(const key of Object.keys(data.models[model.value]))policy.add(new Option(key==='NO_SALE'?'No-sale':'Sale',key));policy.value=previous;if(!policy.value)policy.selectedIndex=0;draw()}
  model.addEventListener('change',policies);policy.addEventListener('change',draw);context.addEventListener('change',draw);initialContext.addEventListener('change',draw);policies();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init().catch(console.error));else init().catch(console.error);
})();
