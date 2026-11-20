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
let compositionRows;
function renderComposition(rows=compositionRows){
 if(!rows)return;compositionRows=rows;
 const headings=['Asset','Units','Latest EUR price','Day','Month','Year to date','Since 2025-01-01','Value, EUR','Weight','Quote date'];
 const widths=[28,9,8,7,7,7,7,12,7,8];
 $('co-holdings').innerHTML=table(headings,rows).replace('<table>','<table class="horizontal-summary-group co-composition-table"><colgroup>'+widths.map(w=>'<col style="width:'+w+'%">').join('')+'</colgroup>');
}
function table(headers,rows){return '<table><thead><tr>'+headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((v,i)=>'<'+(i?'td':'th scope="row"')+' data-label="'+esc(headers[i])+'">'+v+'</'+(i?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table>';}
function changeCell(x){return x==null?'—':'<span class="'+(x<0?'co-negative':'co-positive')+'">'+pct(x)+'</span>';}
function fitVisibleValueAxis(plot){
 const range=plot._fullLayout?.xaxis?.range;if(!range)return;
 const axis=plot._fullLayout.xaxis,start=axis.r2l(range[0]),end=axis.r2l(range[1]);if(!Number.isFinite(start)||!Number.isFinite(end))return;
 let low=Infinity,high=-Infinity;
 const include=y=>{if(Number.isFinite(y)){low=Math.min(low,y);high=Math.max(high,y);}};
 for(const trace of plot.data){
  if((trace.yaxis&&trace.yaxis!=='y')||trace.visible===false||trace.visible==='legendonly'||trace.type!=='scatter')continue;
  let previous;
  for(let i=0;i<trace.x.length;i++){
   const x=axis.d2l(trace.x[i]),y=trace.y[i];
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
 if(plot._coYBounds){next[0]=Math.max(plot._coYBounds[0],next[0]);next[1]=Math.min(plot._coYBounds[1],next[1]);}
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
const portfolioColors=['#c02663','#26734d','#6846a6','#c4631b','#086f83','#b13939','#577321','#885b35','#2362af','#a3308a','#536277','#00856b'];
function comparisonStyle(index){return {color:portfolioColors[index%portfolioColors.length],dash:['solid','dash','dot'][Math.floor(index/portfolioColors.length)%3]};}
function setupPortfolioPicker(){
 const select=$('co-portfolios');select.replaceChildren();
 const groups=new Map();
 for(const [index,p] of data.portfolio_comparison.portfolios.entries()){
  if(!groups.has(p.group)){const g=document.createElement('optgroup');g.label=p.group;groups.set(p.group,g);select.append(g)}
  const option=document.createElement('option');option.value=p.id;option.textContent=p.label;option.style.color=comparisonStyle(index).color;
  if(p.status!=='available'){option.disabled=true;option.textContent+=' / unavailable'}
  groups.get(p.group).append(option);
 }
}
async function render(){
 if(!data||!root.open)return;if(rendering){pending=true;return;}rendering=true;
 try{
  const key=$('co-period').value,period=data.periods[key],begin=data.dates.findIndex(d=>d>=period.first),dates=data.dates,baltic=$('co-baltic').value,bands=$('co-bands').checked,small=innerWidth<500;
  const normalize=a=>{const base=a.slice(begin).find(v=>v!=null);return a.map(v=>v==null||base==null?null:v/base*data.value[begin]);};
  const traces=[];
  if(bands){
   traces.push(line('Lower Bollinger band',dates,data.bollinger.lower,'#a5b5bf',{line:{width:0},showlegend:false,hoverinfo:'skip'}));
   traces.push(line('Bollinger ±2σ',dates,data.bollinger.upper,'#a5b5bf',{showlegend:false,line:{width:0},fill:'tonexty',fillcolor:'rgba(40,110,140,.12)',hoverinfo:'skip'}));
   traces.push(line('SMA20',dates,data.bollinger.mean,'#8197a4',{showlegend:false,line:{color:'#8197a4',width:1,dash:'dot'}}));
  }
  const selectedPortfolios=new Set([...$('co-portfolios').selectedOptions].map(o=>o.value));
  traces.push(line('Current',dates,data.value,'#075b78',{line:{color:'#075b78',width:2.3}}));
  traces.push(line('S&P 500',dates,normalize(data.benchmarks.SP500_EUR),'#d17a22'),line(baltic==='OMXB10'?'OMX Baltic 10':'OMX Baltic Benchmark GI',dates,normalize(data.benchmarks[baltic]),'#8262a3'));
  const selectedLegend=[];
  for(const [index,p] of data.portfolio_comparison.portfolios.entries()){
   if(!selectedPortfolios.has(p.id))continue;
   const first=p.values.findIndex((v,i)=>i>=begin&&v!=null&&v>0),style=comparisonStyle(index);
   if(first<0)continue;
   const values=p.values.map(v=>v==null?null:v/p.values[first]*data.value[first]);
   traces.push(line(p.label.replace('; later sales allowed',''),dates,values,style.color,{showlegend:true,meta:{portfolio_id:p.id},line:{color:style.color,width:1.7,dash:style.dash}}));
   selectedLegend.push({label:p.label,...style});
  }
  $('co-selected-lines-list').innerHTML=selectedLegend.map(p=>'<div class="co-selected-line"><span style="border-color:'+p.color+';border-top-style:'+(p.dash==='solid'?'solid':p.dash==='dash'?'dashed':'dotted')+'"></span><span>'+esc(p.label)+'</span></div>').join('');
  traces.push(line('Stoch RSI %K',dates,data.stoch_rsi.K,'#096e94',{yaxis:'y2',showlegend:false}),line('Stoch RSI %D',dates,data.stoch_rsi.D,'#c47b29',{yaxis:'y2',showlegend:false}));
  const regimes=data.regimes.map(r=>r==null?0:r);
  traces.push({type:'heatmap',name:'Market regime',showlegend:false,x:dates,y:[0],z:[regimes],yaxis:'y3',zmin:0,zmax:4,colorscale:regimeColors.flatMap((c,i)=>[[Math.max(0,(i-.5)/4),c],[Math.min(1,(i+.5)/4),c]]),showscale:false,text:[regimes.map(r=>regimeNames[r])],hovertemplate:'%{x}<br>%{text}<extra></extra>'});
  const compactMain=$('current-overview-price').getBoundingClientRect().width<750;
  const main=layout(small?'Current portfolio - linked panels':compactMain?'Portfolio comparison - linked panels':'Current value, Bollinger bands, Stochastic RSI and regime · shared time axis',small?650:730);
  main.uirevision='co-period-'+key;main.yaxis={domain:[.48,1],tickformat:',.0f',automargin:true,title:{text:'EUR'}};
  main.yaxis2={domain:[.20,.40],range:[0,100],anchor:'x',fixedrange:true,title:{text:'Stoch RSI'}};
  main.yaxis3={domain:[.02,.12],range:[-.5,.5],anchor:'x',visible:false,fixedrange:true};
  main.xaxis={type:'date',anchor:'y3',range:[period.first,period.last],automargin:true,rangeslider:{visible:true,range:[data.first,data.last],thickness:.07}};
  main.legend.traceorder='normal';main.legend.maxheight=90;main.legend.itemdoubleclick=false;main.legend.y=1.10;main.margin.t=90;
  main.annotations=[{xref:'paper',yref:'paper',x:0,y:.425,text:'Stochastic RSI ·14 /14 /3 /3',showarrow:false,xanchor:'left',font:{size:11}},{xref:'paper',yref:'paper',x:0,y:.145,text:'Market regime',showarrow:false,xanchor:'left',font:{size:11}}];
  main.shapes=[20,80].map(y=>({type:'line',xref:'paper',yref:'y2',x0:0,x1:1,y0:y,y1:y,line:{color:'#b1bfca',dash:'dot',width:1}}));
  await Plotly.react('current-overview-price',traces,main,cfg);
  const valuePlot=$('current-overview-price');if(!valuePlot._coCurrentPinned){valuePlot._coCurrentPinned=true;valuePlot.on('plotly_legendclick',e=>e.data[e.curveNumber].name==='Current'?false:undefined);}bindValueAutoscale(valuePlot);await fitVisibleValueAxis(valuePlot);
  $('co-context').textContent=`Current invested value ${eur(data.current_value_EUR)} · ${Object.keys(data.holdings).length} holdings. Drag or zoom the common time axis to move all three panels together. Chart rebasing follows History: ${period.first}–${period.last}. Performance uses full history ${data.periods.ALL.first} to ${data.periods.ALL.last}. S&P500 last close ${data.benchmark_last.SP500_EUR}; Baltic index last close ${data.benchmark_last[baltic]}.`;
  $('co-regime-note').textContent=`Latest classified session: ${data.latest_classified_regime.date} — ${regimeNames[data.latest_classified_regime.regime]}. R1 blue; R2 amber; R3 purple; R4 red; unclassified grey. Missing regime dates are not filled.`;
  const fullPerformance=data.periods.ALL;
  const columns=['CURRENT','SP500_EUR',baltic];
  const rows=[['Daily arithmetic mean','mean_daily',pct],['Annual arithmetic mean ·252 sessions','mean_annual',pct],['Daily sample STD','std_daily',pct],['Annual volatility','volatility_annual',pct],['Annual Sharpe · rf0','sharpe_annual',num],['Annual Sortino · target0','sortino_annual',num],['Rachev ·5% tails','rachev_5',num],['Historical netSD','netSD',exact],['netSD dynamic denominator','netSD_D',x=>x??'—'],['netSD observations','netSD_observations',x=>x??'—'],['Cumulative return','cumulative_return',pct],['CAGR ·252 sessions','CAGR',pct],['Maximum drawdown','maximum_drawdown',pct],['Current drawdown','current_drawdown',pct],['CVaR95 · daily loss','cvar95',pct],['VaR95 · daily loss','var95',pct],['Calmar','calmar',num],['Omega · threshold0','omega',num],['Positive-return sessions','positive_days',pct],['Best daily return','best_day',pct],['Worst daily return','worst_day',pct],['Skewness','skewness',num],['Excess kurtosis','excess_kurtosis',num],['Return observations','observations',x=>x??'—'],['Last included session','last',x=>x||'—']];
  $('co-metrics').innerHTML=table(['Metric','Current','S&P500 EUR',baltic,'Best possible · Sale','Best possible · No-sale'],rows.map(([label,metric,format])=>{
   const cells=['SALE','NO_SALE'].map(policy=>{
    const best=fullPerformance.best_observed_by_policy?.[policy]?.[metric];
    const label=best?.portfolio.split('|').map(part=>part.trim()).filter(part=>!['SALE','NO_SALE','NO-SALE','NO SALE'].includes(part.toUpperCase())).join(' | ');
    return best?format(best.value)+'<small class="co-best-case">('+esc(label)+')</small>':'—';
   });
   return [esc(label),...columns.map(c=>format(fullPerformance.metrics[c][metric])),...cells];
  })).replace('<table>','<table class="horizontal-summary-group co-performance-table"><colgroup>'+[28,12,12,12,18,18].map(w=>'<col style="width:'+w+'%">').join('')+'</colgroup>');
  $('co-best-note').textContent=`Latest full-history model portfolios only; rolling-origin refits, archived versions and regime-only fits are excluded. All table values use the full available history: ${fullPerformance.first} to ${fullPerformance.last}, independently of the chart History selector. Complete-history allocations available: ${fullPerformance.hypotheses_evaluated_by_policy.SALE} Sale and ${fullPerformance.hypotheses_evaluated_by_policy.NO_SALE} No-sale. Plans without complete history are excluded rather than backfilled. Each cell gives only the best observed value and model name within that policy. Fixed initial invested holdings; excludes cash and later scenario trades. Returns and ratios are maximised; volatility, drawdown and loss measures are minimised. Diagnostic counts, skewness and kurtosis have no assumed best direction.`;
  const method=$('co-correlation-method').value,tree=period.correlation_clustering[method],order=tree.order,assets=order.map(i=>data.asset_order[i]);
  const host=$('current-overview-correlations'),size=Math.floor(host.getBoundingClientRect().width);
  const compact=size<360,margin={l:8,r:compact?68:85,t:compact?30:35,b:compact?95:115},pw=size-margin.l-margin.r,ph=size-margin.t-margin.b,side=Math.min(pw*.78,ph*.78),xd=[.18,.18+side/pw],yd=[0,side/ph];
  const labels=assets.map(a=>a.startsWith('US_')?a.slice(3):a.startsWith('SE')?(data.names[a].replace('Swedbank Robur ','').slice(0,19)):a);
  const positions=assets.map((_,i)=>i),z=order.map(i=>order.map(j=>period.correlations[method][i][j]));
  const cl=layout((method==='pearson'?'Pearson':'Spearman')+' correlations / Ward',size);Object.assign(cl,{width:size,height:size,autosize:false,margin,showlegend:false,hovermode:'closest'});
  cl.xaxis={domain:xd,range:[-.5,assets.length-.5],tickmode:'array',tickvals:positions,ticktext:labels,tickangle:-60,tickfont:{size:8},fixedrange:true,showgrid:false,zeroline:false};
  cl.yaxis={domain:yd,range:[assets.length-.5,-.5],tickmode:'array',tickvals:positions,ticktext:labels,side:'right',tickfont:{size:8},fixedrange:true,showgrid:false,zeroline:false};
  cl.yaxis2={domain:[yd[1]+.04,1],range:[0,(tree.max_height||1)*1.05],anchor:'x',visible:false,fixedrange:true};
  cl.xaxis2={domain:[0,.14],range:[(tree.max_height||1)*1.05,0],anchor:'y',visible:false,fixedrange:true};
  const corrTraces=[{type:'heatmap',x:positions,y:positions,z,customdata:assets.map(a=>assets.map(b=>a+' / '+data.names[a]+'<br>'+b+' / '+data.names[b])),zmin:-1,zmax:1,colorscale:[[0,'#2166ac'],[.5,'#ffffff'],[1,'#b2182b']],reversescale:false,colorbar:{title:{text:'Correlation'},orientation:'h',x:xd[0]+(xd[1]-xd[0])/2,y:-(compact?75:90)/ph,len:xd[1]-xd[0],thickness:7,tickfont:{size:8},outlinewidth:0},hovertemplate:'%{customdata}<br>Correlation %{z:.3f}<extra></extra>'}];
  for(const branch of tree.segments){
   corrTraces.push({type:'scatter',mode:'lines',x:branch.positions,y:branch.heights,xaxis:'x',yaxis:'y2',line:{color:'#354b5e',width:1.2},hoverinfo:'skip',showlegend:false});
   corrTraces.push({type:'scatter',mode:'lines',x:branch.heights,y:branch.positions,xaxis:'x2',yaxis:'y',line:{color:'#354b5e',width:1.2},hoverinfo:'skip',showlegend:false});
  }
  await Plotly.react(host,corrTraces,cl,{...cfg,scrollZoom:false});
  $('co-correlation-note').textContent=assets.length+' held assets; '+period.correlation_observations+' returns. '+(tree.status==='available'?'Ward hierarchy for the selected history and correlation method; branch height is merge distance.':'Ward unavailable: '+tree.reason+'.')+' Red: positive correlation; blue: negative. Both dendrograms and the matrix use the same leaf order.';
  const take=a=>a.slice(begin),selectedDates=dates.slice(begin);
  await Plotly.react('current-overview-rolling-correlation',[line('Pairwise10th percentile',selectedDates,take(data.rolling_correlation.p10),'#b2c9d0',{showlegend:false,line:{width:0}}),line('10th–90th percentile',selectedDates,take(data.rolling_correlation.p90),'#b2c9d0',{fill:'tonexty',fillcolor:'rgba(30,110,130,.15)',line:{width:0}}),line('Median pairwise correlation',selectedDates,take(data.rolling_correlation.median),'#176d82')],{...layout('Rolling63-session holdings-only correlations',235),uirevision:'co-rolling-'+key,yaxis:{tickformat:'.2f',automargin:true}},cfg);
  const rollingPlot=$('current-overview-rolling-correlation');rollingPlot._coYBounds=[-1,1];bindValueAutoscale(rollingPlot);await fitVisibleValueAxis(rollingPlot);
  const compRows=data.composition.map(r=>{
   const name=r.asset==='CURRENT'?'<strong>Current portfolio</strong>':'<a class="co-asset-link" href="'+esc(data.profile_links[r.asset])+'">'+esc(r.asset+' — '+r.name)+'</a>';
   return [name,r.units==null?'—':String(r.units),r.price_EUR==null?'—':Number(r.price_EUR).toFixed(4),...['day','month','YTD','since_2025'].map(k=>changeCell(r.changes[k])),eur(r.value_EUR),pct(r.weight),'<time datetime="'+esc(r.date)+'" title="'+esc(r.date)+'">'+esc(r.date.slice(8,10)+'-'+r.date.slice(5,7))+'</time>'];
  });
  renderComposition(compRows);
  root.dataset.ready='true';root.dataset.period=key;
 }finally{rendering=false;if(pending){pending=false;queueMicrotask(()=>render().catch(console.error));}}
}
async function load(){if(loaded)return loaded;loaded=(async()=>{const response=await fetch('current-overview.json',{cache:'no-store'});if(!response.ok)throw Error('Portfolio data HTTP'+response.status);data=await response.json();setupPortfolioPicker();$('co-period').value=data.default_period||'1Y';await plotly();$('current-overview-price').replaceChildren();await render();})();return loaded;}
root.addEventListener('toggle',()=>{if(root.open)load().then(render).catch(e=>{$('current-overview-price').textContent='Unable to load Current analytics: '+e.message;loaded=null;});});
['co-period','co-baltic','co-bands','co-correlation-method','co-portfolios'].forEach(id=>$(id).addEventListener('change',()=>render().catch(console.error)));
$('co-composition').addEventListener('toggle',()=>{if($('co-composition').open)renderComposition()});
$('co-portfolios-reset').addEventListener('click',()=>{for(const option of $('co-portfolios').options)option.selected=false;render().catch(console.error)});
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
