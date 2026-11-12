(()=>{
 const node=document.getElementById('completed-portfolio-data');if(!node)return;
 const data=JSON.parse(node.textContent),model=document.getElementById('partial-model'),policy=document.getElementById('partial-policy'),mode=document.getElementById('partial-rows');
 const labels={NO_SALE:'No-sale',SALE:'Sale at every stage',LATER_SALES:'No initial sales; later sales allowed'};
 const units=v=>Number.isInteger(v)?String(v):v.toFixed(3).replace(/0+$/,'').replace(/\.$/,'');
 function render(reset){
  const cases=data.cases[model.value];if(reset){const prior=policy.value;policy.replaceChildren();for(const key of Object.keys(cases)){const o=document.createElement('option');o.value=key;o.textContent=labels[key]||key;policy.append(o)}policy.value=cases[prior]?prior:cases.NO_SALE?'NO_SALE':Object.keys(cases)[0]}
  const basket=cases[policy.value],body=document.querySelector('#partial-allocation tbody');body.replaceChildren();let count=0;
  for(const row of basket.rows){if(mode.value==='updates'?Math.abs(row.change)<1e-9:row.current===0&&row.target===0)continue;const tr=document.createElement('tr');tr.dataset.asset=row.asset;tr.dataset.current=row.current;tr.dataset.target=row.target;const values=[row.asset,row.name,units(row.current),units(row.target),(row.change>0?'+':'')+units(row.change),row.price.toFixed(4),row.value.toFixed(2),(100*row.weight).toFixed(2)+'%',row.date];for(const value of values){const td=document.createElement('td');td.textContent=value;tr.append(td)}body.append(tr);count++}
  document.getElementById('partial-empty').hidden=count>0;
  document.getElementById('partial-summary').textContent=model.value+' · '+labels[policy.value]+' · '+count+' rows · initial gross purchases EUR '+basket.gross_purchases.toFixed(2)+' · cash EUR '+basket.cash.toFixed(2)+' · maximum sector exposure '+(100*basket.maximum_sector_weight).toFixed(2)+'%';
  window.reportTableFit?.();
 }
 model.addEventListener('change',()=>render(true));policy.addEventListener('change',()=>render(false));mode.addEventListener('change',()=>render(false));render(true);
 window.MathJax?.startup?.promise?.then(()=>window.reportTableFit?.());
})();
