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
 const cases=context?.portfolios[scope];
 if(!cases){paragraph('Select a portfolio and sale policy to view decision-specific portfolio sensitivity.');return;}
 paragraph('Historical sensitivity: '+(regimeData?.contexts[historyKey()]?.label||historyKey())+'. Only this asset is changed in Current; the invested-holdings return distribution and reference denominator are recomputed consistently. These are hypothetical marginal changes.');
 const gross=sensitivityData.quantity_basis==='gross_purchases';
 function table(headers){const t=document.createElement('table');t.className='research-table selected-sensitivity-table';const r=t.createTHead().insertRow();headers.forEach(text=>{const h=document.createElement('th');h.textContent=text;r.append(h);});host.append(t);return t.createTBody();}
 for(const [key,rows] of Object.entries(cases)){
  if(policy!=='ALL'&&policy!==key)continue;
  const item=rows[asset];if(!item)continue;
  const title=document.createElement('h5');title.textContent=scope+' · '+(key==='SALE'?'Sale':'No-sale');host.append(title);
  const body=table(['Decision / quantity case',gross?'Units added / sold':'Target units',...(gross?[]:['Change from Current']),'Current netSD','After change netSD','netSD change']);
  function row(label,quantity,change,after,delta,kind){const r=body.insertRow();r.dataset.case=kind;r.dataset.policy=key;r.dataset.targetUnits=quantity??'';r.dataset.changeUnits=change??'';r.dataset.afterNetsd=after??'';
   [label,units(quantity),...(gross?[]:[units(change)]),fmt(context.baseline.netSD),fmt(after),fmt(delta)].forEach(v=>r.insertCell().textContent=v);
  }
  row(item.initial_change>0?'Initial decision: buy':item.initial_change<0?'Initial decision: sell':'Initial decision: no change',gross?item.initial_change:item.initial_target,item.initial_change,item.initial.netSD,item.initial_delta,'initial');
  for(const stat of item.all_stages){
   if(stat.units==null){row(labels[stat.case]+': no nonzero quantity exists',null,null,null,null,stat.case);continue;}
   row((gross?'Cumulative gross buys: ':'Final target: ')+labels[stat.case],stat.units,stat.change,stat.historical.netSD,stat.delta,stat.case);
  }
  if(!item.all_stages.length){paragraph('This is a single-decision model; it has no later-stage scenario quantities.');continue;}
  paragraph(gross?'All-stage quantity is cumulative gross units purchased along one complete scenario path, including the initial decision. Sales do not reduce that purchase total. The historical diagnostic adds that quantity to Current.':'All-stage quantity is the final holding after every decision, including purchases and sales. The historical diagnostic replaces this asset’s Current holding with that final quantity.');
  paragraph('The smallest positive quantity excludes zero-purchase scenarios; the median includes them. Complete-portfolio horizon comparison: these scenario subsets are selected by this asset’s quantity; the following netSD changes include every asset’s trades, sales and cash. Each probability belongs to its own quantity condition; identical quantities share the same scenario subset.');
  const terminal=table(['All-stage quantity case','Scenario probability, %','No-trade terminal netSD','Initial-only terminal netSD','All-stage terminal netSD','Change vs initial-only']);
  for(const stat of sensitivityData.native[scope]?.[key]?.[asset]||[]){
   if(!stat.terminal)continue;
   const r=terminal.insertRow(),t=stat.terminal;r.dataset.case=stat.case;r.dataset.policy=key;r.dataset.denominator=t.denominator;r.dataset.terminalDelta=t.change_vs_initial;
   [labels[stat.case],(100*t.probability).toFixed(4),fmt(t.no_trades.netSD),fmt(t.initial_only.netSD),fmt(t.all_stages.netSD),fmt(t.change_vs_initial)].forEach(v=>r.insertCell().textContent=v);
  }
  paragraph('Terminal netSD compares true probability-weighted four-week return distributions on the actual scenarios with that asset quantity. Initial-only keeps the first allocation without later trades; All-stage executes the complete portfolio policy, including other assets, stage prices, sales and cash. The same scenario subset and references are used within each row. Quantities from incompatible scenarios are never combined. The terminal model retains its native training sample and scenario law.');
 }
 sensitivityKeys.set(host,renderKey);
};

(()=>{const controls=['model','policy','history','asset'].map(n=>document.getElementById('partial-sens-'+n));function render(){const [model,policy,history,asset]=controls;const item=sensitivityData.contexts[history.value].portfolios[model.value][policy.value][asset.value];document.getElementById('partial-sens-summary').textContent=asset.value+' · Current units '+item.current_units+' · Initial target '+item.initial_target+' · Initial change '+item.initial_change;const host=document.getElementById('partial-sens-host');host.replaceChildren();const profile=document.createElement('div');profile.id='share-'+asset.value;const panel=document.createElement('div');panel.className='selected-portfolio-sensitivity';profile.append(panel);host.append(profile);window.renderSelectedPortfolioSensitivity(profile,model.value,policy.value);window.reportTableFit?.()}controls.forEach(c=>c.addEventListener('change',render));render()})();