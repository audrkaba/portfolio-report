/* Native scenario diagnostics are fetched only when an asset is opened. */
function createScenarioAssetPopup(){
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=(v,d=4)=>Number.isFinite(v)?new Intl.NumberFormat('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d}).format(v):'—';
 const eur=v=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'EUR',maximumFractionDigits:4}).format(v);
 const labels={BUY:'BUY',SELL:'SELL',WAIT:'WAIT',CLOSED:'MARKET CLOSED'};
 const colors={BUY:'#087954',SELL:'#b3433b',WAIT:'#7e929e',CLOSED:'#a4afb6'};
 const dialog=document.createElement('dialog');dialog.id='asset-dialog';dialog.setAttribute('aria-labelledby','asset-popup-title');
 dialog.innerHTML='<header class="popup-header"><div><h2 id="asset-popup-title"></h2><p id="asset-popup-context" class="muted"></p></div><button id="asset-popup-close" type="button">Close ×</button></header><div class="popup-body" id="asset-popup-body"></div>';
 document.body.appendChild(dialog);let context,doc,step=0,token=0;const cache=new Map();
 const body=()=>document.getElementById('asset-popup-body');
 document.getElementById('asset-popup-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{token++;});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
 function metrics(){
  const m=doc.metrics[context.plan],a=m.augmented.values,n=m.augmented.n;
  const card=(label,value)=>`<div class="stat"><span>${esc(label)}</span><strong>${esc(num(value,6))}</strong></div>`;
  return `<h3>Whole-portfolio measures for this scenario</h3><p class="popup-help">These measures describe the whole portfolio, not the selected asset. They use the same ${n}-return sample as optimisation netSD: ${context.data.training_observations} historical returns and ${doc.dates.length-1} simulated scenario days.</p><div class="popup-metrics">${card('Scenario netSD',m.netSD)}${card('Rachev · α = β = 5 %',a.Rachev)}${card('Sortino · MAR = 0',a.Sortino)}${card('Sharpe · daily, Rf = 0',a.Sharpe_daily)}</div><details><summary>Measure definitions and forecast-only diagnostics</summary><p class="popup-help">The historical component consists of hypothetical constant-weight returns using the stage 2 portfolio and node prices, including cash. The forecast component uses the modelled wealth path: initial quantities before recourse and scenario quantities afterwards. This is not realised account history.</p><div class="popup-table-scroll"><table><thead><tr><th>Sample</th><th>N</th><th>netSD</th><th>Rachev</th><th>Sortino</th><th>Sharpe daily</th><th>Annualised Sharpe (252)</th></tr></thead><tbody>${['augmented','forecast'].map(key=>{const r=m[key],v=r.values;return `<tr data-metric-sample="${key}"><td>${key==='augmented'?'History + scenario':'Forecast days only'}</td><td>${r.n}</td><td>${key==='augmented'?num(m.netSD,6):'Not applicable'}</td>${['Rachev','Sortino','Sharpe_daily','Sharpe_annualized'].map(k=>`<td title="${esc(r.warnings[k]||'')}">${num(v[k],6)}</td>`).join('')}</tr>`;}).join('')}</tbody></table></div><p class="popup-help">Twenty forecast returns form a small sample, especially for Rachev tail risk. Annualised Sharpe uses 252-day scaling; it is not a realised annual return. A dash denotes an undefined measure, for example with no negative returns or zero variance. Calculated with R PerformanceAnalytics; Rf = MAR = 0. Forecast-only netSD is not separately rescored, to preserve its reference sample.</p></details>`;
 }
 function charts(points){
  const past=doc.assets[context.asset].history||[],dates=[...past.map(p=>p.date),...doc.dates],selected=step+past.length;points=[...past,...points];
  const W=940,L=62,R=20,x=i=>L+i/(points.length-1)*(W-L-R),out=[];
  function pane(title,height,series,options={}){
   const T=23,B=options.bottom?30:10,values=series.flatMap(s=>s.values).filter(Number.isFinite);if(options.hist)values.push(0,...points.map(p=>p.MACD_histogram).filter(Number.isFinite));
   let lo=options.lo??Math.min(...values),hi=options.hi??Math.max(...values);if(options.lo===undefined){const pad=Math.max((hi-lo)*.12,Math.abs(hi)*.003,1e-6);lo-=pad;hi+=pad;}
   const y=v=>height-B-(v-lo)/(hi-lo)*(height-T-B);let content=`<text x="${L}" y="15" font-size="12" fill="#526b78">${esc(title)}</text>`;
   for(let k=0;k<3;k++){const v=lo+(hi-lo)*k/2;content+=`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="#e6edf0"/><text x="${L-6}" y="${y(v)+4}" text-anchor="end" font-size="10" fill="#617986">${esc(num(v,options.lo===0?0:3))}</text>`;}
   if(options.hist)points.forEach((p,i)=>{const v=p.MACD_histogram;if(!Number.isFinite(v))return;content+=`<rect x="${x(i)-7}" y="${Math.min(y(v),y(0))}" width="14" height="${Math.max(1,Math.abs(y(v)-y(0)))}" fill="${v>=0?'#99c9b5':'#e3aea9'}"/>`;});
   for(const s of series){let started=false,path='';s.values.forEach((v,i)=>{if(!Number.isFinite(v)){started=false;return;}path+=(started?'L':'M')+x(i)+','+y(v);started=true;});content+=`<path d="${path}" fill="none" stroke="${s.color}" stroke-width="${s.width||1.8}" ${s.dash?'stroke-dasharray="4 3"':''}/>`;}
   if(options.price)points.forEach((p,i)=>{content+=`<circle cx="${x(i)}" cy="${y(p.price)}" r="${i===selected?5:3}" fill="${colors[p.signal]}"/>`;});
   content+=`<line x1="${x(past.length)}" x2="${x(past.length)}" y1="${T}" y2="${height-B}" stroke="#087c92" stroke-width="1.5"/><line x1="${x(selected)}" x2="${x(selected)}" y1="${T}" y2="${height-B}" stroke="#4e6a7b" stroke-dasharray="3 3"/>`;
   if(options.bottom)for(const i of [0,past.length,points.length-1])content+=`<text x="${x(i)}" y="${height-6}" text-anchor="${i===0?'start':i===points.length-1?'end':'middle'}" font-size="10" fill="#617986">${esc(dates[i])}</text>`;
   out.push(`<svg class="popup-chart" viewBox="0 0 ${W} ${height}" role="img" aria-label="${esc(title)}">${content}</svg>`);
  }
  pane('Scenario price and Bollinger Bands (20; 2σ) · point colours: technical signal',240,[{values:points.map(p=>p.BB_lower),color:'#9aabb5',dash:true},{values:points.map(p=>p.BB_upper),color:'#9aabb5',dash:true},{values:points.map(p=>p.price),color:'#087c92',width:2.5}],{price:true});
  pane('Stochastic RSI · %K blue / %D orange',105,[{values:points.map(p=>p.StochRSI_K===null?null:p.StochRSI_K*100),color:'#247ac0'},{values:points.map(p=>p.StochRSI_D===null?null:p.StochRSI_D*100),color:'#d88b38'}],{lo:0,hi:100});
  pane('MACD (12, 26, 9) · MACD blue / signal orange / histogram',130,[{values:points.map(p=>p.MACD),color:'#247ac0'},{values:points.map(p=>p.MACD_signal),color:'#d88b38'}],{hist:true,bottom:true});
  return out.join('');
 }
 function action(){
  const d=context.data,p=d.policies[context.plan],i=d.assets.findIndex(a=>a.id===context.asset),node=d.leaves[context.leafIndex].node;
  if(step===0){const change=p.units[i]-d.assets[i].current;return 'Stage 1 model trade: '+(change>0?'+':'')+change+' units';}
  if(step===d.recourse_step){const change=p.decisions[node].units[i]-p.units[i];return 'Stage 2 model trade: '+(change>0?'+':'')+change+' units · after trade '+p.decisions[node].units[i]+' units';}
  return 'The model schedules no additional portfolio rebalance on this day.';
 }
 function update(){
  const a=doc.assets[context.asset],points=a.points,p=points[step];
  document.getElementById('popup-signal').innerHTML=`<strong>${esc(doc.dates[step])} · ${esc(eur(p.price))} · <span style="color:${colors[p.signal]}">${labels[p.signal]}</span></strong><br>Technical votes: BUY ${p.buy_votes}/4 · SELL ${p.sell_votes}/4.<br>${esc(action())}<div class="popup-indicators"><span>RSI(14): ${num(p.RSI,2)}</span><span>Stoch RSI K/D: ${num(p.StochRSI_K===null?null:p.StochRSI_K*100,2)} / ${num(p.StochRSI_D===null?null:p.StochRSI_D*100,2)}</span><span>MACD / signal: ${num(p.MACD)} / ${num(p.MACD_signal)}</span></div>`;
  document.getElementById('popup-charts').innerHTML=charts(points);
 }
 function render(){
  const d=context.data,asset=d.assets.find(a=>a.id===context.asset),l=d.leaves[context.leafIndex];
  document.getElementById('asset-popup-title').textContent=asset.id+' · '+asset.name;
  document.getElementById('asset-popup-context').textContent=l.id+' · '+d.policies[context.plan].label;
  const a=doc.assets[context.asset];
  body().innerHTML=`<nav class="popup-external-links" aria-label="External instrument pages">${(a.links||[]).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} &nearr;</a>`).join(' &middot; ')}</nav>${metrics()}<div class="popup-controls"><label>Asset<select id="popup-asset" class="popup-asset-picker">${d.assets.map(a=>`<option value="${esc(a.id)}"${a.id===context.asset?' selected':''}>${esc(a.id+' · '+a.name)}</option>`).join('')}</select></label><label>Scenario day<select id="popup-step">${doc.dates.map((date,i)=>`<option value="${i}"${i===step?' selected':''}>${esc(date)}${i===0?' · known initial price':i===d.recourse_step?' · Stage 2':''}</option>`).join('')}</select></label></div><div class="popup-signal" id="popup-signal" role="status"></div><div class="popup-charts" id="popup-charts"></div><p class="popup-help">Known initial price / NAV date: ${esc(a.origin)}. Bands and indicators use history and scenario prices available only up to the selected day. Charts share a timeline: 20 preceding trading days, the known initial price and 20 scenario days. The teal vertical line separates history from the forecast. Technical signals are diagnostic: model purchases do not require BUY, and trades occur only at stages 1 and 2.</p><details><summary>Prices and signals for all scenario days</summary><div class="popup-table-scroll"><table class="popup-day-table"><thead><tr><th>Data</th><th>Price EUR</th><th>Signal</th><th>BUY votes</th><th>SELL votes</th><th>RSI</th><th>Stoch K %</th><th>Stoch D %</th><th>MACD</th><th>Signal line</th><th>Lower Bollinger Band</th><th>Upper Bollinger Band</th></tr></thead><tbody>${a.points.map((p,i)=>`<tr data-step="${i}"><td>${esc(doc.dates[i])}</td><td>${num(p.price)}</td><td style="color:${colors[p.signal]}">${labels[p.signal]}</td><td>${p.buy_votes}</td><td>${p.sell_votes}</td><td>${num(p.RSI,2)}</td><td>${num(p.StochRSI_K===null?null:p.StochRSI_K*100,2)}</td><td>${num(p.StochRSI_D===null?null:p.StochRSI_D*100,2)}</td><td>${num(p.MACD)}</td><td>${num(p.MACD_signal)}</td><td>${num(p.BB_lower)}</td><td>${num(p.BB_upper)}</td></tr>`).join('')}</tbody></table></div></details>`;
  document.getElementById('popup-step').addEventListener('change',e=>{step=Number(e.target.value);update();});
  document.getElementById('popup-asset').addEventListener('change',e=>{context.asset=e.target.value;render();});update();
 }
 async function open(c){
  context={...c};step=c.initial?0:c.valuation==='end'?c.data.dates.length-1:c.data.recourse_step;
  const own=++token;document.getElementById('asset-popup-title').textContent=c.asset;document.getElementById('asset-popup-context').textContent='Loading scenario details…';body().innerHTML='<p class="popup-loading">Loading validated price, signal and portfolio-measure data…</p>';
  if(!dialog.open)dialog.showModal();
  try{const url=c.data.leaves[c.leafIndex].details_url;if(!url)throw new Error('Scenario detail data is unavailable');if(!cache.has(url))cache.set(url,fetch(url).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).catch(e=>{cache.delete(url);throw e;}));const loaded=await cache.get(url);if(own!==token||!dialog.open)return;doc=loaded;render();}
  catch(error){if(own===token&&dialog.open)body().innerHTML='<p role="alert">Could not load details: '+esc(error.message)+'. Close the dialog and try again.</p>';}
 }
 return {open};
}

﻿/* Standalone viewer of saved model outputs. No optimisation or order execution. */
(()=>{'use strict';
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=(n,d=2)=>new Intl.NumberFormat('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
const euro=n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
const pct=n=>number(n*100,3)+' %';
const date=s=>new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'UTC'}).format(new Date(s+'T12:00:00Z'));
const regimes=['','R1 · Baltic and global markets calm','R2 · Baltic stress (global calm)','R3 · Global stress (Baltic calm)','R4 · Baltic and global stress'];
const treeRegimes=['','R1 · Both market groups calm','R2 · Baltic stress','R3 · Global stress','R4 · Baltic and global stress'];
let data,state,manualZoom=false;
const assetPopup=createScenarioAssetPopup();
const selected=()=>data.policies[state.plan],leaf=()=>data.leaves[state.leaf],decision=()=>selected().decisions[state.node];
function stat(label,value){return `<div class="stat"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;}
function marketState(){
 const s=data.market_state;if(!s)return;
 const m=s.market,l=s.model,p=n=>number(n*100,2)+' %',pp=n=>(n>0?'+':'')+number(n*100,2)+' p. p.';
 const current=m.dominant-1,growth=m.largest_increase-1;
 $('market-state-summary').innerHTML=stat('Most likely regime using latest data',regimes[m.dominant]+' · '+p(m.probabilities[current]))+stat('Largest weekly probability increase',m.change[growth]>1e-12?regimes[m.largest_increase]+' · '+pp(m.change[growth]):'No regime probability increased');
 $('market-state-dates').textContent='Market data: '+date(m.source_date)+'; compared with '+date(m.previous_source_date)+'. Current regime probability: '+p(m.previous[current])+' → '+p(m.probabilities[current])+' ('+pp(m.change[current])+').';
 function rows(v){return v.probabilities.map((value,i)=>`<tr data-regime="${i+1}"${i+1===v.dominant?' class="dominant-regime"':''}><td>${esc(regimes[i+1])}</td><td>${esc(p(v.previous[i]))}</td><td>${esc(p(value))}</td><td class="${v.change[i]>0?'probability-rise':'muted'}">${esc(pp(v.change[i]))}</td></tr>`).join('');}
 $('market-state-table').querySelector('tbody').innerHTML=rows(m);$('model-state-table').querySelector('tbody').innerHTML=rows(l);
 $('market-state-model').textContent='Tree-origin assessment: '+regimes[l.dominant]+' · '+p(l.probabilities[l.dominant-1])+'. With a '+s.lag_business_days+' business-day information lag, using market data from '+date(l.source_date)+'. Weekly change for this regime: '+pp(l.change[l.dominant-1])+'. Displaying the latest observations does not change saved scenario probabilities.';
 $('model-state-dates').textContent='Tree assessment dates: '+date(l.previous_date)+' → '+date(l.date)+'. Underlying market observations: '+date(l.previous_source_date)+' → '+date(l.source_date)+'.';
 if(s.initial_condition){
  const r=s.initial_condition.regime,risk=s.conditional_regime_risk;
  $('market-state-model').textContent='Recalculation assumption: initial '+regimes[r]+' is treated as known (100%). This is a user-selected condition, not an HMM probability raised to 100%. Forecasts allow transitions to all four regimes; production uses the latest observed market information.';
  $('model-state-details').querySelector(':scope > summary').textContent='Informational HMM assessment with a 2-business-day lag (not used to initialise this tree)';
  $('model-state-table').querySelectorAll('thead th')[2].textContent='With 2-day lag';
  $('model-state-dates').textContent='Informational HMM comparison dates: '+date(l.previous_date)+' → '+date(l.date)+'. Market observations: '+date(l.previous_source_date)+' → '+date(l.source_date)+'.';
  const notice=$('initial-condition-risk');notice.hidden=false;
  notice.textContent='Starting from R'+r+': P(R4 at the next model step) = '+p(risk.next_step_R4)+'; P(R4 after '+risk.horizon_steps+' steps, at the four-week horizon) = '+p(risk.terminal_R4)+'; P(entering R4 at least once during the horizon) = '+p(risk.ever_R4)+'. These are three different events. Representative scenarios’ terminal regime probabilities match the Markov-matrix forecast.';
 }
 $('market-state').hidden=false;
}
function bestLeaf(node,regime){let index=-1;data.leaves.forEach((l,i)=>{if(l.node===node&&(!regime||l.regime===regime)&&(index<0||l.probability>data.leaves[index].probability))index=i;});return index;}
function chooseNode(node){state.node=node;state.leaf=bestLeaf(node);state.stage='recourse';state.valuation='node';render();}
function chooseLeaf(index){if(index<0)return;state.leaf=index;state.node=leaf().node;state.stage='recourse';state.valuation=data.full_revelation?'node':'end';render();}
function writeURL(){const url=new URL(location.href);url.searchParams.set('plan',state.plan);url.searchParams.set('node',state.node);url.searchParams.set('stage',state.stage);url.searchParams.set('valuation',state.valuation);if(state.stage==='recourse')url.searchParams.set('leaf',leaf().id);else url.searchParams.delete('leaf');history.replaceState(null,'',url);}
function curved(x,y,xx,yy,cls,width=2){const m=(x+xx)/2;return `<path class="branch ${cls}" stroke-width="${width}" d="M${x},${y} C${m},${y} ${m},${yy} ${xx},${yy}"/>`;}
function box(x,y,w,h,kind,value,lines,active,future=false){return `<g class="tree-node${active?' selected':''}${future?' future':''}" data-kind="${kind}" data-value="${esc(value)}" role="button" tabindex="0" aria-label="${esc(lines.join('; '))}" aria-pressed="${active}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9"/>${lines.map((s,i)=>`<text x="${x+12}" y="${y+21+i*19}" font-size="${i?13:14}" font-weight="${i?400:650}">${esc(s)}</text>`).join('')}</g>`;}
function fullTree(){
 const active=leaf();let edges='',boxes='';
 boxes+=box(16,445,190,91,'root',0,['Shared stage 1 allocation','P = 100 %',euro(selected().cash)+' cash'],state.stage==='initial');
 for(let r=1;r<=4;r++){
  const members=data.leaves.map((l,i)=>({l,i})).filter(v=>v.l.regime===r),total=members.reduce((s,v)=>s+v.l.probability,0),center=142+(r-1)*245;
  const activeR=state.stage==='recourse'&&active.regime===r;
  edges+=curved(206,490,300,center,activeR?'active':'',1+8*total);
  boxes+=box(300,center-39,245,78,'regime',r,[treeRegimes[r],'P(R) = '+pct(total),members.length+' separate stage 2 decisions'],activeR);
  members.sort((a,b)=>a.l.cluster-b.l.cluster).forEach(({l,i},j)=>{
   const yy=center-106+j*48,p=selected(),changes=p.decisions[l.node].units.filter((q,k)=>q!==p.units[k]).length,chosen=state.stage==='recourse'&&state.leaf===i;
   edges+=curved(545,center,650,yy+22,chosen?'active':'',1+5*l.probability/total);
   boxes+=box(650,yy,498,44,'leaf',i,[data.nodes[l.node].label+' · R'+r+' / K'+l.cluster+' · P = '+pct(l.probability),'Separate portfolio · '+changes+' asset quantity changes'],chosen);
  });
 }
 $('graph').innerHTML=`<svg viewBox="0 0 1170 1020" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="20 scenarios with separate recourse decisions"><text class="tree-heading" x="20" y="35">Stage 1: shared quantities</text><text class="tree-heading" x="300" y="35">Regimes: grouping only</text><text class="tree-heading" x="650" y="35">Stage 2: 20 separate portfolios · Week ${esc(data.recourse_step/5)}</text>${edges}${boxes}</svg>`;
 zoom();
}
function tree(){
 if(data.full_revelation){fullTree();return;}
 const n=state.node,active=leaf(),node=data.nodes[n];let edges='',boxes='';
 const root={x:16,y:445,w:190,h:91};
 boxes+=box(root.x,root.y,root.w,root.h,'root',0,['Initial allocation','P = 100 %',euro(selected().cash)+' cash'],state.stage==='initial');
 data.nodes.forEach((d,i)=>{const y=300+i*114,cy=y+42;edges+=curved(206,490,264,cy,i===n?'active':'',1+10*d.probability);boxes+=box(264,y,205,84,'node',i,[d.label+' · P = '+pct(d.probability),'Observed-prefix change: '+pct(d.current_move),'Recourse at '+d.label],i===n&&state.stage==='recourse');});
 for(let r=1;r<=4;r++){
  const members=data.leaves.map((l,i)=>({l,i})).filter(v=>v.l.node===n&&v.l.regime===r);if(!members.length)continue;
  const total=members.reduce((s,v)=>s+v.l.probability,0),center=142+(r-1)*245;
  edges+=curved(469,342+n*114,548,center,'future-edge'+(state.stage==='recourse'&&active.regime===r?' active':''),1+7*total/node.probability);
  boxes+=box(548,center-39,214,78,'regime',r,[treeRegimes[r],'P(R | '+node.label+') = '+pct(total/node.probability),'P(N and R) = '+pct(total)],state.stage==='recourse'&&active.regime===r,true);
  members.sort((a,b)=>a.l.cluster-b.l.cluster).forEach(({l,i},j)=>{const yy=center-106+j*48;edges+=curved(762,center,844,yy+21,'future-edge'+(state.stage==='recourse'&&state.leaf===i?' active':''),1+5*l.probability/total);boxes+=box(844,yy,304,42,'leaf',i,['K'+l.cluster+' · P(whole branch) = '+pct(l.probability)],state.stage==='recourse'&&state.leaf===i,true);});
 }
 $('graph').innerHTML=`<svg viewBox="0 0 1170 1020" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Scenario-tree branches"><rect x="520" y="8" width="640" height="1000" rx="12" fill="#f5f8fc"/><text class="tree-heading" x="20" y="35">Stage 1</text><text class="tree-heading" x="264" y="35">Stage 2 · Week ${esc(data.recourse_step/5)}</text><text class="tree-heading" x="548" y="35">Future: unknown at recourse time</text>${edges}${boxes}</svg>`;
 zoom();
}
function zoom(){const value=Number($('zoom').value);$('zoom-value').textContent=value+' %';const svg=$('graph').querySelector('svg');if(svg){svg.style.width=1170*value/100+'px';svg.style.height=1020*value/100+'px';}}
function fit(){manualZoom=false;$('zoom').value=Math.max(60,Math.min(100,Math.floor($('graph').clientWidth/1170*100/5)*5));zoom();}
function chart(values,baseline){
 const width=560,height=270,left=64,right=14,top=20,bottom=40,all=[...values,...baseline];let lo=Math.min(...all),hi=Math.max(...all);const padding=Math.max((hi-lo)*.12,20);lo-=padding;hi+=padding;
 const x=i=>left+i/(values.length-1)*(width-left-right),y=v=>height-bottom-(v-lo)/(hi-lo)*(height-top-bottom);
 const line=a=>a.map((v,i)=>(i?'L':'M')+x(i).toFixed(2)+','+y(v).toFixed(2)).join(' ');
 let grid='';for(let i=0;i<4;i++){const v=lo+(hi-lo)*i/3;grid+=`<line x1="${left}" y1="${y(v)}" x2="${width-right}" y2="${y(v)}" stroke="#e1e9ee"/><text x="${left-7}" y="${y(v)+4}" text-anchor="end" font-size="11" fill="#526b78">${esc(number(v,0))}</text>`;}
 for(const i of [0,data.recourse_step,values.length-1])grid+=`<text x="${x(i)}" y="${height-15}" text-anchor="${i===0?'start':i===values.length-1?'end':'middle'}" font-size="10" fill="#526b78">${esc(data.dates[i].slice(5))}</text>`;
 $('wealth-chart').innerHTML=`<svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Selected branch modelled wealth with and without recourse"><title>Modelled portfolio wealth, EUR</title>${grid}<line x1="${x(data.recourse_step)}" x2="${x(data.recourse_step)}" y1="${top}" y2="${height-bottom}" stroke="#8a9ca7" stroke-dasharray="3 4"/><path d="${line(baseline)}" fill="none" stroke="#8898a3" stroke-width="2" stroke-dasharray="5 4"/><path d="${line(values)}" fill="none" stroke="#087c92" stroke-width="2.8"/></svg>`;
}
function leafOptions(){
 $('leaf').innerHTML=[1,2,3,4].map(r=>`<optgroup label="${esc(regimes[r])}">${data.leaves.map((l,i)=>({l,i})).filter(v=>(data.full_revelation||v.l.node===state.node)&&v.l.regime===r).map(({l,i})=>`<option value="${i}"${i===state.leaf?' selected':''}>${esc(data.nodes[l.node].label)} · K${l.cluster} · ${esc(pct(l.probability))} joint probability</option>`).join('')}</optgroup>`).join('');
 $('leaf').disabled=state.stage==='initial';
}
function details(){
 const p=selected(),l=leaf(),d=decision(),result=p.results[state.leaf],members=data.leaves.filter(x=>x.node===state.node).length;
 if(state.stage==='initial'){
  $('selection-title').textContent='Initial decision · '+p.label;
  $('selection-description').textContent='Purchases and sales before future price changes. The initial allocation is shared across all '+data.leaves.length+' scenarios.';
  $('detailstats').innerHTML=stat('Initial invested amount',euro(data.budget-p.cash))+stat('Cash after stage 1',euro(p.cash))+stat('Expected netSD',number(p.expected_netSD,6))+stat('Expected horizon return',pct(p.expected_return));
  $('decision-note').textContent='Initial quantities do not know which N1–N4 node will be reached. Select an observed node or terminal branch to inspect conditional recourse.';
  $('wealth-chart').hidden=true;document.querySelector('.legend').hidden=true;document.querySelector('.chart-note').hidden=true;
 }else{
  $('selection-title').textContent=state.valuation==='node'?data.nodes[l.node].label+' · Portfolio after recourse':data.nodes[l.node].label+' → R'+l.regime+' → K'+l.cluster;
  $('selection-description').textContent=state.valuation==='node'?'This node’s holdings are shared by its future branches. Branch selected for scenario measures: '+l.id+'.':regimes[l.regime]+'. Terminal scenario: '+l.id+'.';
  $('detailstats').innerHTML=stat('Joint branch probability',pct(l.probability))+stat('P(branch | N'+(l.node+1)+')',pct(l.conditional_node))+stat('Terminal wealth',euro(result.final_wealth))+stat('Horizon return',pct(result.horizon_return))+stat('Branch netSD · OUT / IN',number(result.netSD,6)+' · '+result.OUT+' / '+result.IN)+stat('Cash after recourse',euro(d.cash))+stat('P(K | N, R)',pct(l.conditional_regime))+stat('Penalised objective',number(result.objective,6));
  $('decision-note').innerHTML=`<strong>${esc(data.nodes[state.node].label)} recourse is shared by all ${members} future branches of this node.</strong> Selecting another R or K within this node does not change trade quantities. Branch probabilities, terminal prices and outcomes change.`;
  if(data.full_revelation){
   const pr=data.leaves.filter(x=>x.regime===l.regime).reduce((s,x)=>s+x.probability,0);
   $('selection-title').textContent=data.nodes[l.node].label+' · R'+l.regime+' / K'+l.cluster;
   $('selection-description').textContent='Separate stage 2 portfolio for this scenario: '+l.id+'. Quantities are chosen with the full scenario known.';
   $('detailstats').innerHTML=stat('Scenario P(s)',pct(l.probability))+stat('Regime P(R)',pct(pr))+stat('Cluster P(K | R)',pct(l.probability/pr))+stat('Terminal wealth',euro(result.final_wealth))+stat('Horizon return',pct(result.horizon_return))+stat('netSD · OUT / IN',number(result.netSD,6)+' · '+result.OUT+' / '+result.IN)+stat('Cash after stage 2',euro(d.cash))+stat('Penalised objective',number(result.objective,6));
   $('decision-note').innerHTML=`<strong>${esc(data.nodes[state.node].label)} has its own stage 2 quantity vector.</strong> Other scenarios may use different quantities. The stage 1 allocation is shared across all 20 scenarios. Under this model assumption, the full scenario path is already known at stage 2.`;
  }
  $('wealth-chart').hidden=false;document.querySelector('.legend').hidden=false;document.querySelector('.chart-note').hidden=false;chart(result.wealth,result.no_recourse_wealth);
 }
}
function showPanel(panel){
 $('portfolio-preview').hidden=panel!=='portfolio';$('outcome-panel').hidden=panel!=='outcomes';
 $('show-portfolio').setAttribute('aria-pressed',String(panel==='portfolio'));$('show-outcomes').setAttribute('aria-pressed',String(panel==='outcomes'));
}
function quantityWithChange(quantity,before){const delta=Number((quantity-before).toFixed(3));return `${quantity} (${delta>0?'+':''}${delta})`;}
function composition(){
 const p=selected(),initial=state.stage==='initial',end=!initial&&state.valuation==='end',d=decision();
 const units=initial?p.units:d.units,prices=initial?data.assets.map(a=>a.price):end?leaf().terminal_prices:data.nodes[state.node].prices,cash=initial?p.cash:d.cash;
 const total=units.reduce((s,q,i)=>s+q*prices[i],cash);
 for(const v of ['node','end']){const button=$('valuation-'+v);button.disabled=initial;button.setAttribute('aria-pressed',String(!initial&&state.valuation===v));}
 const rows=data.assets.map((a,i)=>({a,q:units[i],before:initial?a.current:p.units[i],value:units[i]*prices[i]})).filter(r=>$('preview-filter').value==='UPDATES'?r.q!==r.before:r.q>0).sort((a,b)=>b.value-a.value);
 $('portfolio-date').textContent=initial?'Initial allocation at '+date(data.as_of)+' prices.':end?'Quantities after '+data.nodes[state.node].label+' recourse; valued at selected-branch terminal prices ('+date(data.dates.at(-1))+').':'Portfolio immediately after '+data.nodes[state.node].label+' recourse in week '+(data.recourse_step/5)+', at node prices.';
 $('portfolio-preview').querySelector('tbody').innerHTML=rows.map(r=>`<tr data-asset="${esc(r.a.id)}" data-units="${r.q}" data-value="${r.value}"><td><button type="button" class="asset-trigger" data-asset-popup="${esc(r.a.id)}"><strong>${esc(r.a.id)}</strong><small>${esc(r.a.name)}</small></button></td><td>${quantityWithChange(r.q,r.before)}</td><td>${esc(euro(r.value))}</td><td>${esc(pct(r.value/total))}</td></tr>`).join('')+`<tr data-cash="true"><td><strong>Cash</strong></td><td>—</td><td>${esc(euro(cash))}</td><td>${esc(pct(cash/total))}</td></tr>`;
 $('portfolio-total').textContent=rows.length+' assets · total value '+euro(total)+'.';
}
function orders(){
 const p=selected(),l=leaf(),d=decision(),initial=state.stage==='initial',units=initial?p.units:d.units,before=initial?data.assets.map(a=>a.current):p.units,prices=initial?data.assets.map(a=>a.price):data.nodes[state.node].prices;
 const changes=units.map((q,i)=>Number((q-before[i]).toFixed(3)));const buys=changes.reduce((s,q,i)=>s+Math.max(q,0)*prices[i],0),sells=changes.reduce((s,q,i)=>s+Math.max(-q,0)*prices[i],0);
 $('orders-title').textContent=initial?'Initial portfolio holdings and trades':data.nodes[state.node].label+' · Portfolio holdings after recourse';
 $('orders-subtitle').textContent=initial?'Confirmed current holdings → proposed initial allocation.':'Initial allocation → conditional portfolio at this model node. Trades use modelled node prices.';
 const headers=['Asset','Now','After stage 1','After stage 2','Stage change','Action','Stage price, EUR','Trade value, EUR','Scenario-end value, EUR'];
 $('orders-table').querySelector('thead').innerHTML='<tr>'+headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr>';
 let count=0;
 $('orders-table').querySelector('tbody').innerHTML=data.assets.map((a,i)=>{
  const change=changes[i];if($('only-trades').checked?change===0:!(a.current||p.units[i]||units[i]))return '';count++;
  const action=change>0?'BUY':change<0?'SELL':'HOLD',cls=change>0?'buy':change<0?'sell':'hold';
  const final=initial?'—':euro(units[i]*l.terminal_prices[i]);
  return `<tr data-asset="${esc(a.id)}" data-change="${change}"><td><button type="button" class="asset-trigger" data-asset-popup="${esc(a.id)}"><strong>${esc(a.id)}</strong><small>${esc(a.name)}</small></button></td><td>${a.current}</td><td>${quantityWithChange(p.units[i],a.current)}</td><td>${initial?'—':quantityWithChange(units[i],p.units[i])}</td><td class="${cls}">${change>0?'+':''}${change}</td><td class="${cls}">${action}</td><td>${esc(number(prices[i],4))}</td><td>${change?esc(euro(Math.abs(change)*prices[i])):'—'}</td><td>${final}</td></tr>`;
 }).join('');
 if(!count)$('orders-table').querySelector('tbody').innerHTML='<tr><td colspan="9">No trades at this stage. Clear the filter to see held positions.</td></tr>';
 const cash=initial?p.cash:d.cash;let info=`<span>Purchases: <strong>${esc(euro(buys))}</strong></span><span>Sales: <strong>${esc(euro(sells))}</strong></span><span>Cash after stage: <strong>${esc(euro(cash))}</strong></span>`;
 if(!initial)info+=`<span>Wealth at node: <strong>${esc(euro(d.wealth_before))}</strong></span><span>Recourse effect on terminal wealth: <strong>${esc(euro(p.results[state.leaf].final_wealth-p.results[state.leaf].no_recourse_wealth.at(-1)))}</strong></span>`;
 const sectors=initial?p.sector_exposure:d.sector_exposure;
 if(sectors?.length){const top=sectors.reduce((a,b)=>a.maximum_weight>b.maximum_weight?a:b);info+=`<span>Sector limit at decision time: <strong>${esc(pct(data.sector_limit))}</strong>; largest exposure upper bound: <strong>${esc(top.sector)} ${esc(pct(top.maximum_weight))}</strong>. Includes fund look-through and cash in total wealth.</span>`;}
 $('cashline').innerHTML=info;
}
function render(){
 $('plan').value=state.plan;$('node').value=state.node;$('initial').setAttribute('aria-pressed',String(state.stage==='initial'));
 const p=selected();$('topstats').innerHTML=stat('Initial budget',euro(data.budget))+stat('Cash after stage 1',euro(p.cash))+stat('Expected netSD',number(p.expected_netSD,6))+stat('Tree structure',data.nodes.length+' nodes · '+data.leaves.length+' branches');
 leafOptions();tree();details();composition();orders();writeURL();$('copy-status').textContent='';
 document.title=(state.stage==='initial'?'Initial allocation':leaf().id)+' · Scenario tree';
}
function attach(){
 $('preview-filter').addEventListener('change',composition);
 document.addEventListener('click',event=>{const target=event.target.closest('[data-asset-popup]');if(target)assetPopup.open({data,plan:state.plan,leafIndex:state.leaf,asset:target.dataset.assetPopup,initial:state.stage==='initial',valuation:state.valuation});});
 for(const valuation of ['node','end'])$('valuation-'+valuation).addEventListener('click',()=>{state.valuation=valuation;composition();writeURL();});
 $('show-portfolio').addEventListener('click',()=>showPanel('portfolio'));$('show-outcomes').addEventListener('click',()=>showPanel('outcomes'));
 $('plan').addEventListener('change',()=>{state.plan=$('plan').value;render();});$('node').addEventListener('change',()=>chooseNode(Number($('node').value)));
 $('leaf').addEventListener('change',()=>chooseLeaf(Number($('leaf').value)));$('only-trades').addEventListener('change',orders);$('zoom').addEventListener('input',()=>{manualZoom=true;zoom();});$('fit').addEventListener('click',fit);window.addEventListener('resize',()=>{if(!manualZoom)fit();});
 $('initial').addEventListener('click',()=>{state.stage='initial';render();});
 function activate(event){const target=event.target.closest('[data-kind]');if(!target)return;if(event.type==='keydown'&&!['Enter',' '].includes(event.key))return;event.preventDefault();const value=Number(target.dataset.value);if(target.dataset.kind==='root'){state.stage='initial';render();}else if(target.dataset.kind==='node')chooseNode(value);else if(target.dataset.kind==='regime'){const matches=data.leaves.map((l,i)=>({l,i})).filter(v=>v.l.regime===value&&(data.full_revelation||v.l.node===state.node));chooseLeaf(matches.sort((a,b)=>b.l.probability-a.l.probability)[0]?.i??-1);}else chooseLeaf(value);}
 $('graph').addEventListener('click',activate);$('graph').addEventListener('keydown',activate);
 $('previous').addEventListener('click',()=>chooseLeaf((state.leaf-1+data.leaves.length)%data.leaves.length));$('next').addEventListener('click',()=>chooseLeaf((state.leaf+1)%data.leaves.length));
 $('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('copy-status').textContent='Selected branch link copied.';}catch{$('copy-status').textContent='Branch link: '+location.href;}});
}
async function start(){
 const source=document.querySelector('script[data-source]').dataset.source;const response=await fetch(source);if(!response.ok)throw new Error('Data response: '+response.status);data=await response.json();
 if(data.schema!==1||Math.abs(data.leaves.reduce((s,l)=>s+l.probability,0)-1)>1e-9)throw new Error('Invalid scenario data');
 const query=new URLSearchParams(location.search),plan=Object.hasOwn(data.policies,query.get('plan'))?query.get('plan'):'main';
 let n=Number(query.get('node'));if(!query.has('node')||!data.nodes[n])n=data.nodes.reduce((best,v)=>v.probability>data.nodes[best].probability?v.id:best,0);
 let index=data.leaves.findIndex(l=>l.id===query.get('leaf'));if(index>=0)n=data.leaves[index].node;else index=bestLeaf(n);
 state={plan,node:n,leaf:index,stage:query.get('stage')==='initial'?'initial':'recourse',valuation:query.get('valuation')==='end'?'end':'node'};
 $('plan').innerHTML=Object.entries(data.policies).map(([key,p])=>`<option value="${key}">${esc(p.label)}</option>`).join('');
 $('node').innerHTML=data.nodes.map(n=>{const l=data.leaves.find(l=>l.node===n.id);return `<option value="${n.id}">${n.label}${data.full_revelation?' · R'+l.regime+' / K'+l.cluster:''} · ${esc(pct(n.probability))}</option>`;}).join('');
 if(data.full_revelation){
  $('model-information').innerHTML='<strong>20 scenarios and 20 separate recourse decisions.</strong> Four regimes × five clusters. Stage 1 is shared; at stage 2 the full scenario is treated as revealed and separate quantities are selected for each scenario. Some scenarios may have matching quantities, but equality is not required.';
  $('tree-description').textContent='Select any S01–S20 scenario to see its holdings on the right. Regime blocks are groups, not additional recourse decisions.';
  $('method-information').innerHTML='<summary>How to read the tree and probabilities</summary><p>The model has one shared stage 1 quantity vector and 20 separate stage 2 vectors, one per regime/cluster combination. No equality constraints link these 20 vectors.</p><p><strong>Selected information assumption:</strong> on the stage 2 date, the entire scenario including the remaining monthly path is treated as revealed. This gives more information than the observed price prefix alone. It does not imply that future prices will be known at that time in reality.</p><p>The 20 scenarios are obtained from 12,000 simulated paths, grouped by 4 terminal regimes and 5 clusters. Each group retains one representative path and sums its probabilities. P(s) = P(R) × P(K | R). All 20 scenario probabilities sum to 100%.</p><p>Select a scenario to see its stage 2 quantities, cash and weights. Select stage 1 to see the shared initial portfolio. Values at stage 2 prices and forecast-end prices are labelled separately. The objective is expected netSD minus penalties, so recourse need not increase wealth in every branch.</p><p>The viewer displays model plans, not executed orders. Purchases do not require a BUY signal; sales follow the chosen policy constraints. Search is heuristic; global optimality is not proven. <a href="index.html#multifrequency-forecasts">Methods and model results →</a></p>';
 }
 $('snapshot').textContent='Data snapshot: '+date(data.as_of)+' · Second decision: Week '+(data.recourse_step/5)+' ('+data.recourse_step+' trading sessions after the initial decision) · Final valuation: Week 4. Calendar dates on price paths are derived from this snapshot.';
 marketState();$('app').hidden=false;attach();render();fit();document.documentElement.dataset.ready='true';
}
start().catch(error=>{$('load-error').hidden=false;$('load-error').textContent='Could not load the scenario tree. Refresh the page or return to the main report. '+error.message;});
})();
