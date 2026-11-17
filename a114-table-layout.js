(()=>{
 const signature=/A\.?1\.?1\.?4|^1\.5\.\s/i,states=[];
 const el=(tag,text)=>{const n=document.createElement(tag);if(text!=null)n.textContent=text;return n};
 function sourceTitle(table){for(let d=table.parentElement;d;d=d.parentElement){if(d.tagName==='DETAILS'){const s=d.querySelector(':scope>summary');if(s&&signature.test(s.textContent))return s.textContent.trim()}}return null}
 function cell(source,tag='td'){const n=source.cloneNode(true);if(n.tagName.toLowerCase()!==tag){const c=el(tag);while(n.firstChild)c.append(n.firstChild);return c}n.removeAttribute('id');n.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));for(const k of ['width','min-width','white-space'])n.style.removeProperty(k);return n}
 function init(table){
  if(table.dataset.a114Source||table.closest('.a114-table-view'))return;const title=sourceTitle(table);if(!title)return;
  const heads=[...(table.tHead?.rows[0]?.cells||[])],rows=[...(table.tBodies[0]?.rows||[])];if(!heads.length||!rows.length||rows.some(r=>r.cells.length!==heads.length))return;
  const names=heads.map(h=>h.textContent.trim()),low=names.map(s=>s.toLowerCase()),comparison=low[0]==='policy',keys=comparison?[0,...(low[1]?.startsWith('scenario')?[1]:[])]:low[0]==='asset'&&low.includes('scenario')?[0,low.indexOf('scenario'),...(low.includes('stage')?[low.indexOf('stage')]:[])]:[0];
  if(low[0]==='profit_outcome'&&low.includes('horizon'))keys.push(low.indexOf('horizon'));
  const families=[];const used=new Set(keys);
  function family(label,fields){const indices=fields.map(f=>typeof f==='number'?f:low.indexOf(f.toLowerCase())).filter(i=>i>=0&&!keys.includes(i));if(indices.length){families.push({label,indices});indices.forEach(i=>used.add(i))}}
  if(low.includes('conditional_mean_return')){
   family('Returns and event counts',['events','conditional_mean_return','conditional_variance_return','conditional_median_return','positive_return_share']);
   family('Abnormal returns',['events','conditional_mean_abnormal','conditional_variance_abnormal','conditional_median_abnormal']);
  }else if(low.includes('kruskal_h')){
   family('Sample and test statistic',['groups','classified_events','kruskal_H']);family('Significance and conclusion',['p_value','p_BH','conclusion']);
  }else if(low.includes('bollinger_sell')){
   family('Forecast prices and returns',['information_date','decision_price','forecast_terminal_price','forecast_remaining_return']);
   family('Four-indicator sale votes',['Bollinger_sell','RSI_sell','StochRSI_sell','MACD_sell','sell_votes']);
   family('Indicator values',['RSI','StochRSI_K','MACD','MACD_signal','BB_upper']);
   family('Sale permission',['forecast_sell','allowed']);
  }else if(low.includes('eligible_to_buy')){
   family('Eligibility and position limit',['eligible_to_buy','effective_max_units','exempt_fund']);family('Trading activity',['last_week_volume','median_week_volume','active_fraction','active_recent']);family('Exclusion reason',['buy_exclusion_reason']);
  }else if(low.includes('target units')){
   family('Holdings and quantities',['Name','Type','Current units','Target units','Change','Model trade']);family('Price, purchases and weight',['Current price / NAV','Price / NAV EUR','Buy EUR','Sell EUR','Weight %']);family('Risk and performance',['Individual OUT / IN','Portfolio OUT / IN after addition','netSD change','Rachev change','Sortino change']);family('Dividends and fund fees',['Average annual cash dividends EUR','Embedded annual fee EUR','Average annual dividend per unit EUR','Five-year average dividend yield %','Current annual cash dividends EUR','Target annual cash dividends EUR','Embedded annual fund costs EUR']);family('Execution',['Execution signal']);
  }else if(low.includes('recourse_trade')){
   family('Stage quantities and trades',['node','stage1_units','recourse_trade','stage2_units']);family('Forecast and permission',['forecast_remaining_return','sell_votes','scenario_sale_allowed','node_sale_allowed']);
  }else if(low.includes('final_wealth_eur')){
   family('Scenario and objective',['node','probability','netSD','OUT','IN','penalty','objective']);family('Cash, return and terminal wealth',['cash_EUR','weekly_return','final_wealth_EUR']);
  }
  family(families.length?'Other fields':'Measures',names.map((_,i)=>i).filter(i=>!used.has(i)));
  const wrapper=el('div');wrapper.className='a114-table-view chapter3-table-groups';wrapper.dataset.table=String(states.length);table.after(wrapper);table.hidden=true;table.dataset.a114Source=String(states.length);
  const controls=el('div');controls.className='a114-controls';wrapper.append(controls);
  const search=el('input');search.type='search';search.placeholder='Search rows';search.setAttribute('aria-label','Search '+title);controls.append(search);
  const filters=[];if(rows.length>30)for(const key of ['asset','scenario','stage']){const i=low.indexOf(key);if(i<0)continue;const label=el('label',key[0].toUpperCase()+key.slice(1)+' '),select=el('select');select.add(new Option('All',''));for(const value of [...new Set(rows.map(r=>r.cells[i].textContent.trim()))].sort())select.add(new Option(value,value));label.append(select);controls.append(label);filters.push([i,select])}
  const viewLabel=el('label',comparison?'Comparison ':'Columns '),view=el('select');viewLabel.append(view);controls.append(viewLabel);
  const prev=el('button','Previous'),next=el('button','Next'),count=el('span');prev.type=next.type='button';controls.append(prev,next,count);
  const grid=el('div');wrapper.append(grid);let page=0,views=[],maxCols=0;
  function options(){const cols=Math.max(3,Math.min(7,Math.floor((wrapper.clientWidth||innerWidth)/135)));if(cols===maxCols)return;maxCols=cols;const chosen=view.value;views=[];view.replaceChildren();if(comparison){views=[{label:'Measures by policy',indices:names.map((_,i)=>i).filter(i=>!keys.includes(i))}];view.add(new Option('Measures by policy','0'))}else for(const group of families){for(let start=0;start<group.indices.length;start+=cols-1){const part={label:group.label,indices:group.indices.slice(start,start+cols-1)};views.push(part);view.add(new Option(group.label+' — '+part.indices.map(i=>names[i]).join(', '),String(views.length-1)))}}view.value=chosen;if(!view.value)view.value='0';page=0}
  function draw(){
   options();const query=search.value.trim().toLowerCase(),filtered=rows.filter(r=>(!query||r.textContent.toLowerCase().includes(query))&&filters.every(([i,s])=>!s.value||r.cells[i].textContent.trim()===s.value)),size=comparison?maxCols-1:25;page=Math.min(page,Math.max(0,Math.ceil(filtered.length/size)-1));const visible=filtered.slice(page*size,(page+1)*size),part=views[Number(view.value)||0];
   const t=el('table');t.className='a114-horizontal horizontal-summary-group';t.createCaption().textContent=part?.label||'Measures';const h=t.createTHead().insertRow(),body=t.createTBody();
   const identity=r=>keys.map(i=>r.cells[i].textContent.trim()).join(' / ');
   if(comparison){h.append(el('th','Measure'));visible.forEach(r=>h.append(el('th',identity(r))));for(const i of part.indices){const row=body.insertRow();row.append(cell(heads[i],'th'));visible.forEach(r=>row.append(cell(r.cells[i])))}
   }else{h.append(el('th',keys.map(i=>names[i]).join(' / ')));part?.indices.forEach(i=>h.append(cell(heads[i],'th')));visible.forEach((r,index)=>{const row=body.insertRow();row.dataset.sourceRow=String(rows.indexOf(r));row.append(el('th',identity(r)));part?.indices.forEach(i=>row.append(cell(r.cells[i])))})}
   grid.replaceChildren(t);count.textContent=(filtered.length?(page*size+1)+'–'+Math.min((page+1)*size,filtered.length):'0')+' of '+filtered.length+(comparison?' policies':' rows');prev.disabled=page===0;next.disabled=(page+1)*size>=filtered.length;wrapper.dataset.ready='true';wrapper.dataset.filteredRows=String(filtered.length);
  }
  search.addEventListener('input',()=>{page=0;draw()});filters.forEach(([,s])=>s.addEventListener('change',()=>{page=0;draw()}));view.addEventListener('change',draw);prev.addEventListener('click',()=>{page--;draw()});next.addEventListener('click',()=>{page++;draw()});states.push({table,wrapper,draw});draw();
 }
 function scan(root=document){if(root.matches?.('table'))init(root);root.querySelectorAll('table:not([data-a114-source])').forEach(init)}
 scan();new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1&&!n.closest('.a114-table-view'))scan(n)}).observe(document.body,{childList:true,subtree:true});
 let timer;addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>states.forEach(s=>s.draw()),80)});document.addEventListener('toggle',e=>{if(e.target.open)states.filter(s=>e.target.contains(s.wrapper)).forEach(s=>s.draw())},true);
 document.documentElement.dataset.a114Ready='true';
})();
