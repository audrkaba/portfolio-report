const regimeData=null;function historyKey(){return document.getElementById('partial-sens-history').value;}
const sensitivityElement=document.getElementById('portfolio-sensitivity-data');
const sensitivityData=sensitivityElement?JSON.parse(sensitivityElement.textContent):null;
const sensitivityKeys=new WeakMap();
window.renderSelectedPortfolioSensitivity=function(profile,scope,policy){
 const host=profile.querySelector('.selected-portfolio-sensitivity');if(!host||!sensitivityData)return;
 const renderKey=JSON.stringify([scope,policy,historyKey()]);if(sensitivityKeys.get(host)===renderKey)return;
 const asset=profile.id.replace(/^(share-|fund-)/,'').toUpperCase(),context=sensitivityData.contexts[historyKey()];
 host.replaceChildren();
 const paragraph=text=>{const p=document.createElement('p');p.textContent=text;host.append(p);};
 const fmt=value=>value==null?'—':Number(value).toFixed(6),units=value=>value==null?'—':String(Number(Number(value).toFixed(3)));
 const labels={maximum:'Maximum',median:'Probability-weighted median',minimum_positive:'Smallest positive'};
 const caseOrder=['minimum_positive','median','maximum'];
 const cases=context?.portfolios[scope];
 if(!cases){paragraph('Select a portfolio and sale policy to view decision-specific portfolio sensitivity.');return;}
 paragraph('Historical marginal sensitivity: '+(regimeData?.contexts[historyKey()]?.label||historyKey())+'. Only this asset changes in Current; all other holdings stay fixed. Historical netSD uses invested holdings, excluding uninvested cash, with the same selected history/regime, reference network and denominator for every row.');
 const gross=sensitivityData.quantity_basis==='gross_purchases';
 function table(headers){const t=document.createElement('table');t.className='research-table selected-sensitivity-table';const r=t.createTHead().insertRow();headers.forEach(text=>{const h=document.createElement('th');h.textContent=text;r.append(h);});host.append(t);return t.createTBody();}
 for(const [key,rows] of Object.entries(cases)){
  if(policy!=='ALL'&&policy!==key)continue;
  const item=rows[asset];if(!item)continue;
  const title=document.createElement('h5');title.textContent=scope+' \u00b7 '+(key==='SALE'?'Sale':'No-sale');host.append(title);
  paragraph('Current holding: '+units(item.current_units)+' units. Quantities below are units of this asset. Removal and each purchase case are separate counterfactuals.');
  const body=table(['Quantity case','Immediate change, units','Later gross purchases, units','Total gross purchases, units','Current netSD','After change netSD','netSD change']);
  function row(label,immediate,later,total,target,after,delta,kind){const r=body.insertRow();r.dataset.case=kind;r.dataset.policy=key;r.dataset.targetUnits=target??'';r.dataset.changeUnits=target==null?'':Number((target-item.current_units).toFixed(3));r.dataset.laterUnits=later??'';r.dataset.totalPurchaseUnits=total??'';r.dataset.afterNetsd=after??'';
   [label,units(immediate),units(later),units(total),fmt(context.baseline.netSD),fmt(after),fmt(delta)].forEach(v=>r.insertCell().textContent=v);
  }
  row(item.current_units>0?'Remove the entire current holding':'Removal: no current holding',-item.current_units,0,0,0,item.removal.netSD,item.removal_delta,'remove');
  const firstBuy=Math.max(item.initial_change,0);
  row(item.initial_change>0?'Stage 1: exact proposed buy':item.initial_change<0?'Stage 1: exact proposed sale':'Stage 1: no change',item.initial_change,0,firstBuy,item.initial_target,item.initial.netSD,item.initial_delta,'initial');
  for(const stat of [...item.all_stages].sort((a,b)=>caseOrder.indexOf(a.case)-caseOrder.indexOf(b.case))){
   if(stat.units==null){row('Later stages: '+labels[stat.case]+' unavailable (no later purchases)',item.initial_change,null,null,null,null,null,stat.case);continue;}
   row('Stage 1 + later stages: '+labels[stat.case],item.initial_change,stat.later_units,stat.units,stat.target_units,stat.historical.netSD,stat.delta,stat.case);
  }
  if(!item.all_stages.length){paragraph('This is a single-decision model; it has no later-stage scenario quantities.');continue;}
  paragraph('Later gross purchases sum all positive purchases after stage 1 along each complete scenario path. Their smallest positive total excludes paths with zero later purchases; the probability-weighted median includes zero and the maximum is attained on at least one positive-probability path. Total gross purchases include the stage-1 buy; sales do not subtract from this purchase total.');
  paragraph('Each later historical row applies the exact stage-1 buy or sale, then adds that later purchase quantity to this asset. It leaves every other current holding fixed and does not subtract later sales. These rows are marginal diagnostics, not complete executable policies. A sale can therefore make the net holding change differ from total gross purchases.');
  paragraph('The separate complete-policy horizon comparison below includes all assets, all stages, sales and cash. Each row conditions on scenarios with the stated later purchase quantity; probabilities for different rows can overlap.');
  const terminal=table(['Later purchase quantity case','Scenario probability, %','No-trade terminal netSD','Initial-only terminal netSD','All-stage terminal netSD','Change vs initial-only']);
  for(const stat of [...(sensitivityData.native[scope]?.[key]?.[asset]||[])].sort((a,b)=>caseOrder.indexOf(a.case)-caseOrder.indexOf(b.case))){
   if(!stat.terminal)continue;
   const r=terminal.insertRow(),t=stat.terminal;r.dataset.case=stat.case;r.dataset.policy=key;r.dataset.denominator=t.denominator;r.dataset.terminalDelta=t.change_vs_initial;
   [labels[stat.case],(100*t.probability).toFixed(4),fmt(t.no_trades.netSD),fmt(t.initial_only.netSD),fmt(t.all_stages.netSD),fmt(t.change_vs_initial)].forEach(v=>r.insertCell().textContent=v);
  }
  paragraph('Terminal netSD compares true probability-weighted four-week return distributions on actual scenarios with that later purchase quantity. Initial-only keeps the first allocation without later trades; All-stage executes the complete portfolio policy, including other assets, stage prices, sales and cash. The same scenario subset and references are used within each row. Quantities from incompatible scenarios are never combined. The terminal model retains its native training sample and scenario law.');
 }
 sensitivityKeys.set(host,renderKey);
};

(()=>{const controls=['model','policy','history','asset'].map(n=>document.getElementById('partial-sens-'+n));function render(){const [model,policy,history,asset]=controls;const item=sensitivityData.contexts[history.value].portfolios[model.value][policy.value][asset.value];document.getElementById('partial-sens-summary').textContent=asset.value+' · Current units '+item.current_units+' · Initial target '+item.initial_target+' · Initial change '+item.initial_change;const host=document.getElementById('partial-sens-host');host.replaceChildren();const profile=document.createElement('div');profile.id='share-'+asset.value;const panel=document.createElement('div');panel.className='selected-portfolio-sensitivity';profile.append(panel);host.append(profile);window.renderSelectedPortfolioSensitivity(profile,model.value,policy.value);window.reportTableFit?.()}controls.forEach(c=>c.addEventListener('change',render));render()})();