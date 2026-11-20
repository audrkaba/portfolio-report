(()=>{
'use strict';
const root=document.getElementById('current-portfolio-overview');if(!root)return;
const $=id=>document.getElementById(id);
let data,loaded,rendering=false,pending=false;
const regimeColors=['#e5eaef','#86b8d3','#e6bd77','#b8a0d3','#dd8f8d'];
const regimeNames=['Unclassified','R1: Baltic calm; world calm','R2: Baltic stress; world calm','R3: Baltic calm; world stress','R4: Baltic stress; world stress'];
const pct=x=>x==null?'—':(100*x).toFixed(2)+'%';
const num=x=>x==null?'—':Number(x).toFixed(3);
const exact=x=>x==null?'—':Number(x).toFixed(6);
const eur=x=>new Intl.NumberFormat('en',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(x);
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cfg={responsive:true,displaylogo:false,scrollZoom:false,modeBarButtonsToRemove:['select2d','lasso2d'],toImageButtonOptions:{format:'png',scale:2}};
async function plotly(){if(window.Plotly)return;await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='vendor/plotly/plotly-3.1.0.min.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});}
function layout(title,height){return {title:{text:title,font:{size:13},x:.02},height,autosize:true,margin:{l:56,r:15,t:65,b:40},paper_bgcolor:'#fafcfd',plot_bgcolor:'#fff',font:{family:'system-ui',size:11,color:'#263c48'},xaxis:{type:'date',automargin:true},yaxis:{automargin:true},legend:{orientation:'h',x:0,y:1.12,font:{size:10}},hovermode:'x unified'};}
function line(name,x,y,color,extra={}){return {type:'scatter',mode:'lines',name,x,y,line:{color,width:1.6},connectgaps:false,...extra};}
function table(headers,rows){return '<table><thead><tr>'+headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((v,i)=>'<'+(i?'td':'th scope="row"')+' data-label="'+esc(headers[i])+'">'+v+'</'+(i?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table>';}
function changeCell(x){return x==null?'—':'<span class="'+(x<0?'co-negative':'co-positive')+'">'+pct(x)+'</span>';}
function fitVisibleValueAxis(plot){
 const range=plot._fullLayout?.xaxis?.range;if(!range)return;
 const start=Date.parse(range[0]),end=Date.parse(range[1]);if(!Number.isFinite(start)||!Number.isFinite(end))return;
 let low=Infinity,high=-Infinity;
 const include=y=>{if(Number.isFinite(y)){low=Math.min(low,y);high=Math.max(high,y);}};
 for(const trace of plot.data){
  if((trace.yaxis&&trace.yaxis!=='y')||trace.visible===false||trace.visible==='legendonly'||trace.type!=='scatter')continue;
  let previous;
  for(let i=0;i<trace.x.length;i++){
   const x=Date.parse(trace.x[i]),y=trace.y[i];
   if(y==null||!Number.isFinite(y)){previous=null;continue;}
   if(x>=start&&x<=end)include(y);
   if(previous&&x>previous.x){
    for(const edge of [start,end])if(previous.x<edge&&edge<x)include(previous.y+(y-previous.y)*(edge-previous.x)/(x-previous.x));
   }
   previous={x,y};
  }
 }
 if(!Number.isFinite(low))return;
 const padding=high>low?(high-low)*.06:Math.max(Math.abs(low)*.005,1e-6),next=[low-padding,high+padding],old=plot.layout.yaxis.range;
 if(old&&next.every((v,i)=>Math.abs(v-old[i])<1e-8))return;
 return Plotly.relayout(plot,{'yaxis.range':next,'yaxis.autorange':false});
}
function bindValueAutoscale(plot){
 if(plot._coValueAutoscale)return;plot._coValueAutoscale=true;
 let queued=false;
 const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;Promise.resolve(fitVisibleValueAxis(plot)).catch(console.error);});};
 plot.on('plotly_relayout',event=>{if(Object.keys(event).some(k=>k.startsWith('xaxis.range')||k==='xaxis.autorange'))schedule();});
 plot.on('plotly_restyle',schedule);
}
async function render(){
 if(!data||!root.open)return;if(rendering){pending=true;return;}rendering=true;
 try{
  const key=$('co-period').value,period=data.periods[key],begin=data.dates.findIndex(d=>d>=period.first),dates=data.dates,baltic=$('co-baltic').value,bands=$('co-bands').checked,small=innerWidth<500;
  const normalize=a=>{const base=a.slice(begin).find(v=>v!=null);return a.map(v=>v==null||base==null?null:v/base*data.value[begin]);};
  const traces=[];
  if(bands){
   traces.push(line('Lower Bollinger band',dates,data.bollinger.lower,'#a5b5bf',{line:{width:0},showlegend:false,hoverinfo:'skip'}));
   traces.push(line('Bollinger ±2σ',dates,data.bollinger.upper,'#a5b5bf',{line:{width:0},fill:'tonexty',fillcolor:'rgba(40,110,140,.12)',hoverinfo:'skip'}));
   traces.push(line('SMA20',dates,data.bollinger.mean,'#8197a4',{line:{color:'#8197a4',width:1,dash:'dot'}}));
  }
  traces.push(line('Current: fixed units',dates,data.value,'#075b78',{line:{color:'#075b78',width:2.3}}),line('S&P500 · EUR',dates,normalize(data.benchmarks.SP500_EUR),'#d17a22'),line(baltic==='OMXB10'?'OMX Baltic10 · price':'OMX Baltic Benchmark · GI',dates,normalize(data.benchmarks[baltic]),'#8262a3'));
  traces.push(line('Stoch RSI %K',dates,data.stoch_rsi.K,'#096e94',{yaxis:'y2'}),line('Stoch RSI %D',dates,data.stoch_rsi.D,'#c47b29',{yaxis:'y2'}));
  const regimes=data.regimes.map(r=>r==null?0:r);
  traces.push({type:'heatmap',name:'Market regime',x:dates,y:[0],z:[regimes],yaxis:'y3',zmin:0,zmax:4,colorscale:regimeColors.flatMap((c,i)=>[[Math.max(0,(i-.5)/4),c],[Math.min(1,(i+.5)/4),c]]),showscale:false,text:[regimes.map(r=>regimeNames[r])],hovertemplate:'%{x}<br>%{text}<extra></extra>'});
  const main=layout(small?'Current portfolio - linked panels':'Current value, Bollinger bands, Stochastic RSI and regime · shared time axis',small?650:730);
  main.uirevision='co-period-'+key;main.yaxis={domain:[.48,1],tickformat:',.0f',automargin:true,title:{text:'EUR'}};
  main.yaxis2={domain:[.20,.40],range:[0,100],anchor:'x',fixedrange:true,title:{text:'Stoch RSI'}};
  main.yaxis3={domain:[.02,.12],range:[-.5,.5],anchor:'x',visible:false,fixedrange:true};
  main.xaxis={type:'date',anchor:'y3',range:[period.first,period.last],automargin:true,rangeslider:{visible:true,range:[data.first,data.last],thickness:.07}};
  main.legend.y=1.10;main.margin.t=90;
  main.annotations=[{xref:'paper',yref:'paper',x:0,y:.425,text:'Stochastic RSI ·14 /14 /3 /3',showarrow:false,xanchor:'left',font:{size:11}},{xref:'paper',yref:'paper',x:0,y:.145,text:'Market regime',showarrow:false,xanchor:'left',font:{size:11}}];
  main.shapes=[20,80].map(y=>({type:'line',xref:'paper',yref:'y2',x0:0,x1:1,y0:y,y1:y,line:{color:'#b1bfca',dash:'dot',width:1}}));
  await Plotly.react('current-overview-price',traces,main,cfg);
  const valuePlot=$('current-overview-price');bindValueAutoscale(valuePlot);await fitVisibleValueAxis(valuePlot);
  $('co-context').textContent=`Current invested value ${eur(data.current_value_EUR)} · ${Object.keys(data.holdings).length} holdings. Drag or zoom the common time axis to move all three panels together. Performance and benchmark rebasing follow History: ${period.first}–${period.last}. S&P500 last close ${data.benchmark_last.SP500_EUR}; Baltic index last close ${data.benchmark_last[baltic]}.`;
  $('co-regime-note').textContent=`Latest classified session: ${data.latest_classified_regime.date} — ${regimeNames[data.latest_classified_regime.regime]}. R1 blue; R2 amber; R3 purple; R4 red; unclassified grey. Missing regime dates are not filled.`;
  const columns=['CURRENT','SP500_EUR',baltic];
  const rows=[['Daily arithmetic mean','mean_daily',pct],['Annual arithmetic mean ·252 sessions','mean_annual',pct],['Daily sample STD','std_daily',pct],['Annual volatility','volatility_annual',pct],['Annual Sharpe · rf0','sharpe_annual',num],['Annual Sortino · target0','sortino_annual',num],['Rachev ·5% tails','rachev_5',num],['Historical netSD','netSD',exact],['netSD dynamic denominator','netSD_D',x=>x??'—'],['netSD observations','netSD_observations',x=>x??'—'],['Cumulative return','cumulative_return',pct],['CAGR ·252 sessions','CAGR',pct],['Maximum drawdown','maximum_drawdown',pct],['Current drawdown','current_drawdown',pct],['CVaR95 · daily loss','cvar95',pct],['VaR95 · daily loss','var95',pct],['Calmar','calmar',num],['Omega · threshold0','omega',num],['Positive-return sessions','positive_days',pct],['Best daily return','best_day',pct],['Worst daily return','worst_day',pct],['Skewness','skewness',num],['Excess kurtosis','excess_kurtosis',num],['Return observations','observations',x=>x??'—'],['Last included session','last',x=>x||'—']];
  $('co-metrics').innerHTML=table(['Metric','Current','S&P500 EUR',baltic,'Best possible · observed'],rows.map(([label,metric,format])=>{
   const best=period.best_observed?.[metric];
   const cell=best?format(best.value)+'<small class="co-best-case">('+esc(best.portfolio)+')</small>':'—';
   return [esc(label),...columns.map(c=>format(period.metrics[c][metric])),cell];
  }));
  const scope=data.hypotheses_coverage;
  $('co-best-note').textContent=`Best possible means the best observed value among ${period.hypotheses_evaluated} recorded hypothetical compositions with the same complete selected history (${scope.unique_compositions} unique saved compositions; ${period.hypotheses_missing_history} lack this full period). Each metric has its own winning portfolio. Returns and ratios are maximised; volatility, drawdowns and loss measures are minimised. Diagnostic counts, skewness and kurtosis have no assumed best direction. These are fixed-quantity invested-holdings reconstructions, not adaptive policy backtests or a theoretical optimum. netSD reference window: ${period.metrics.CURRENT.netSD_first}–${period.metrics.CURRENT.netSD_last}.`;
  const assets=data.asset_order,method=$('co-correlation-method').value;
  const cl=layout(method==='pearson'?'Pearson return correlations':'Spearman return correlations',small?410:470);cl.margin={l:75,r:16,t:35,b:90};cl.xaxis={tickangle:-55,automargin:true,tickfont:{size:10}};cl.yaxis={automargin:true,tickfont:{size:10},autorange:'reversed'};cl.hovermode='closest';
  await Plotly.react('current-overview-correlations',[{type:'heatmap',x:assets,y:assets,z:period.correlations[method],zmin:-1,zmax:1,colorscale:[[0,'#2166ac'],[.5,'#ffffff'],[1,'#b2182b']],reversescale:false,colorbar:{title:{text:'ρ'},thickness:10,len:.8},hovertemplate:'%{y} × %{x}<br>Correlation %{z:.3f}<extra></extra>'}],cl,cfg);
  $('co-correlation-note').textContent=`${assets.length} held assets; ${period.correlation_observations} returns. Red: high positive correlation; blue: negative correlation; white: near zero. Asset order is fixed.`;
  const take=a=>a.slice(begin),selectedDates=dates.slice(begin);
  await Plotly.react('current-overview-rolling-correlation',[line('Pairwise10th percentile',selectedDates,take(data.rolling_correlation.p10),'#b2c9d0',{showlegend:false,line:{width:0}}),line('10th–90th percentile',selectedDates,take(data.rolling_correlation.p90),'#b2c9d0',{fill:'tonexty',fillcolor:'rgba(30,110,130,.15)',line:{width:0}}),line('Median pairwise correlation',selectedDates,take(data.rolling_correlation.median),'#176d82')],{...layout('Rolling63-session holdings-only correlations',235),yaxis:{range:[-1,1]}},cfg);
  const compRows=data.composition.map(r=>{
   const name=r.asset==='CURRENT'?'<strong>Current portfolio</strong>':'<a class="co-asset-link" href="'+esc(data.profile_links[r.asset])+'">'+esc(r.asset+' — '+r.name)+'</a>';
   return [name,r.units==null?'—':String(r.units),r.price_EUR==null?'—':Number(r.price_EUR).toFixed(4),r.date,...['day','month','YTD','since_2025'].map(k=>changeCell(r.changes[k])),eur(r.value_EUR),pct(r.weight)];
  });
  $('co-holdings').innerHTML=table(['Asset','Units','Latest EUR price','Quote date','Day','Month','Year to date','Since2025-01-01','Value, EUR','Weight'],compRows);
  root.dataset.ready='true';root.dataset.period=key;
 }finally{rendering=false;if(pending){pending=false;queueMicrotask(()=>render().catch(console.error));}}
}
async function load(){if(loaded)return loaded;loaded=(async()=>{const response=await fetch('current-overview.json',{cache:'no-store'});if(!response.ok)throw Error('Portfolio data HTTP'+response.status);data=await response.json();$('co-period').value=data.default_period||'1Y';await plotly();$('current-overview-price').replaceChildren();await render();})();return loaded;}
root.addEventListener('toggle',()=>{if(root.open)load().then(render).catch(e=>{$('current-overview-price').textContent='Unable to load Current analytics: '+e.message;loaded=null;});});
['co-period','co-baltic','co-bands','co-correlation-method'].forEach(id=>$(id).addEventListener('change',()=>render().catch(console.error)));
root.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open&&window.Plotly)requestAnimationFrame(()=>d.querySelectorAll('.js-plotly-plot').forEach(p=>Plotly.Plots.resize(p)));}));
root.addEventListener('click',event=>{
 const link=event.target.closest('a.co-asset-link');if(!link)return;const target=document.getElementById(link.hash.slice(1));if(!target)return;event.preventDefault();
 for(const [name,value] of [['portfolio-scope','CURRENT'],['profile-update-mode','ALL'],['profile-instrument-type','ALL']]){const r=document.querySelector('input[name="'+name+'"][value="'+value+'"]');if(r){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}));}}
 document.querySelectorAll('#analytics-1-1 .profile-filters input[type=checkbox]').forEach(c=>c.checked=true);
 const selected=document.querySelector('input[name="portfolio-scope"][value="CURRENT"]');if(selected)selected.dispatchEvent(new Event('change',{bubbles:true}));
 target.hidden=false;for(let p=target;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
 history.pushState(null,'',link.hash);target.scrollIntoView({behavior:'smooth',block:'start'});
});
let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>{if(root.open&&data)render().catch(console.error)},180);});
if(root.open)load().catch(console.error);
})();
