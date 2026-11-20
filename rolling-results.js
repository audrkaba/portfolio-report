'use strict';
(async()=>{
 const $=id=>document.getElementById(id);if(!$('rolling-study-results'))return;
 const data=await fetch('rolling-inference.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error(r.status);return r.json();});
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pct=new Set(['mean_return','STD','maximum_drawdown','CVaR95','cumulative_return']);
 const names={netSD:'netSD',mean_return:'Mean daily return',Sharpe:'Sharpe',Sortino:'Sortino',Rachev:'Rachev',STD:'Daily STD',maximum_drawdown:'Maximum drawdown',CVaR95:'CVaR95',accumulated_wealth_EUR:'End wealth EUR',cumulative_return:'Cumulative OOS return'};
 const label=c=>c.replace('STOCHASTIC2','Stochastic 2').replace('STOCHASTIC','Stochastic').replace('stoch2A','Stochastic 2A').replace('stochA','Stochastic A').replace('MARKOWITZ','Markowitz').replace('MINIMAX','Minimax').replace('ROBUST','Robust').replace('UPDATE2','Update 2').replace('UPDATE3','Update 3').replace('NETSD','netSD').replace('NO_INITIAL_SALES','No initial sales').replace('NO_SALE','No sales').replace('SALE','Sale').replace('[observed-prefix]','(later decisions)');
 const fmt=(v,m,difference=false)=>!Number.isFinite(v)?'Unavailable':m.includes('EUR')?'EUR '+v.toFixed(2):pct.has(m)?(100*v).toFixed(4)+(difference?' pp':'%'):v.toFixed(5);
 const pformat=v=>!Number.isFinite(v)?'Unavailable':v<.0001?v.toExponential(2):v.toFixed(4);
 function options(el,items){const previous=el.value;el.replaceChildren(...items.map(([value,text])=>{const o=document.createElement('option');o.value=value;o.textContent=text;return o;}));if(items.some(x=>x[0]===previous))el.value=previous;}
 options($('infer-metric'),data.plan.metrics.map(m=>[m,names[m]]));
 function table(id,headers,rows,caption){
  const host=$(id),width=host.getBoundingClientRect().width||document.body.clientWidth-54,count=Math.max(2,Math.min(headers.length,Math.floor(width/145)));
  let out='';for(let start=1;start<headers.length;start+=count-1){const ix=[0,...Array.from({length:Math.min(count-1,headers.length-start)},(_,j)=>start+j)];
   out+='<table class="horizontal-summary-group"><caption>'+escape(caption)+(start>1?' — continued columns':'')+'</caption><thead><tr>'+ix.map(i=>'<th scope="col">'+escape(headers[i])+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+ix.map((i,j)=>'<'+(j?'td':'th scope="row"')+'>'+row[i]+'</'+(j?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table>';
  }host.innerHTML=out||'<p>No finite results for this selection.</p>';
 }
 function plot(id,traces,layout={}){
  const host=$(id);if(!host.getClientRects().length)return;
  const width=host.clientWidth||document.body.clientWidth-54;
  Plotly.react(host,traces,{autosize:true,height:390,margin:{l:65,r:18,t:38,b:75},paper_bgcolor:'#fff',plot_bgcolor:'#fff',font:{family:'system-ui',size:11},legend:{orientation:'h',y:-.24},...layout},{responsive:true,displaylogo:false,toImageButtonOptions:{format:'svg',filename:id}});
  host.dataset.figureReady='true';host.dataset.plotWidth=String(width);
 }
 const chooseDefault=family=>family==='purchase_caps'?'stoch2A / NO_SALE [observed-prefix]':family==='sale_permissions'?'STOCHASTIC2 / SALE [observed-prefix]':'STOCHASTIC2 / NO_SALE [observed-prefix]';
 function render(){
  const family=$('infer-family').value,metric=$('infer-metric').value,block=Number($('infer-block').value);
  $('infer-population').disabled=family!=='vs_Current';if(family!=='vs_Current')$('infer-population').value='ALL_MODELS_COMMON';
  const pop=$('infer-population').value;
  const available=data.tests.filter(r=>r.family===family&&r.population===pop&&r.block===block&&r.metric===metric);
  const cases=[...new Set(available.map(r=>r.case))].sort();options($('infer-case'),[['ALL','All contrasts'],...cases.map(c=>[c,label(c)])]);
  const selected=$('infer-case').value,filtered=available.filter(r=>selected==='ALL'||r.case===selected);
  const selectedCase=selected==='ALL'?(cases.includes(chooseDefault(family))?chooseDefault(family):cases[0]):selected;
  $('inference-selection-note').textContent=`${family}; ${pop}; ${names[metric]}; block/HAC lag ${block}. Effects are case minus reference. Secondary treatment families use the 157-origin common-fit population. Intervals are marginal95%; p values are Holm-adjusted within the declared family across all nine outcomes.`;
  table('inference-tests-table',['Contrast and paired count','Difference [95% CI]','Bootstrap p / Holm p','HAC Holm p'],filtered.map(r=>[escape(label(r.case))+'<small>versus '+escape(label(r.reference))+'; n='+r.n+'</small>',escape(fmt(r.delta,metric,true))+'<small>['+escape(fmt(r.ci_low,metric,true))+', '+escape(fmt(r.ci_high,metric,true))+']</small>',escape(pformat(r.p_bootstrap))+' / '+escape(pformat(r.p_Holm)),escape(pformat(r.hac_p_Holm))]),'Table 3.5.4a. Paired OOS comparisons');
  const multiplier=pct.has(metric)?100:1,labels=filtered.map(r=>label(r.case));
  plot('inference-forest-chart',[{type:'scatter',mode:'markers',x:filtered.map(r=>r.delta*multiplier),y:labels,customdata:filtered.map(r=>[r.reference,r.n,r.p_Holm,r.hac_p_Holm]),error_x:{type:'data',symmetric:false,array:filtered.map(r=>(r.ci_high-r.delta)*multiplier),arrayminus:filtered.map(r=>(r.delta-r.ci_low)*multiplier)},marker:{color:filtered.map(r=>r.p_Holm<.05&&r.hac_p_Holm<.05?'#7b2d26':'#245d85'),size:7},hovertemplate:'%{y}<br>reference:%{customdata[0]}<br>difference:%{x}<br>n:%{customdata[1]}<br>Holm bootstrap:%{customdata[2]}<br>Holm HAC:%{customdata[3]}<extra></extra>'}],{height:Math.max(360,filtered.length*25+120),margin:{l:document.body.clientWidth<600?105:290,r:20,t:30,b:65},yaxis:{autorange:'reversed',tickfont:{size:9},tickvals:labels,ticktext:labels.map(s=>document.body.clientWidth<600?s.replace('Stochastic','S').replace('later decisions','later').replace('No initial sales','No initial'):s)},xaxis:{title:{text:'Paired difference'+(pct.has(metric)?' (percentage points)':'')},zeroline:true,zerolinecolor:'#555'}});
  const period=$('infer-period').value;
  const description=data.descriptive.filter(r=>r.population===pop&&r.scope===period&&r.metric===metric&&(selected==='ALL'||r.case===selected||r.case==='Current'));
  table('inference-description-table',['Portfolio and count','Mean [sample SD]','Median / min / max','Paired difference vs Current'],description.map(r=>[escape(label(r.case))+'<small>n='+r.n+'; paired n='+r.paired_n+'</small>',escape(fmt(r.mean,metric))+'<small>['+escape(fmt(r.SD,metric))+']</small>',escape([r.median,r.minimum,r.maximum].map(v=>fmt(v,metric)).join(' / ')),escape(fmt(r.paired_delta,metric,true))]),'Table 3.5.4b. '+period+' descriptive comparison');
  const initial=data.descriptive.filter(r=>r.population===pop&&r.scope==='IS'&&r.metric===metric);
  const dots=initial.map(r=>{const future=data.descriptive.find(s=>s.population===pop&&s.scope==='OOS'&&s.metric===metric&&s.case===r.case);return future?{case:r.case,x:r.mean*multiplier,y:future.mean*multiplier,n:r.n+'/'+future.n}:null;}).filter(Boolean);
  const range=dots.flatMap(r=>[r.x,r.y]).filter(Number.isFinite),lo=Math.min(...range),hi=Math.max(...range);
  plot('inference-generalisation-chart',[{type:'scatter',mode:'markers',x:dots.map(r=>r.x),y:dots.map(r=>r.y),text:dots.map(r=>label(r.case)),customdata:dots.map(r=>r.n),marker:{size:8,color:dots.map(r=>r.case==='Current'?'#111':r.case.includes('/ NO_SALE')?'#3274a1':r.case.includes('/ SALE')?'#c27b25':'#7355a6')},hovertemplate:'%{text}<br>IS:%{x}<br>OOS:%{y}<br>n IS/OOS:%{customdata}<extra></extra>'},{type:'scatter',mode:'lines',x:[lo,hi],y:[lo,hi],line:{dash:'dot',color:'#888'},name:'Equal descriptive means',hoverinfo:'skip'}],{xaxis:{title:{text:'IS '+names[metric]}},yaxis:{title:{text:'OOS '+names[metric]}},showlegend:false});
  const regimeCases=selected==='ALL'?data.cases:[selectedCase,'Current'];
  const regimeRows=data.regime_sensitivity.filter(r=>r.metric===metric&&regimeCases.includes(r.case));
  const z=regimeCases.map(c=>['R1','R2','R3','R4'].map(reg=>regimeRows.find(r=>r.case===c&&r.regime===reg)?.delta*multiplier));
  const n=regimeCases.map(c=>['R1','R2','R3','R4'].map(reg=>regimeRows.find(r=>r.case===c&&r.regime===reg)?.n??null));
  plot('inference-regime-chart',[{type:'heatmap',x:['R1','R2','R3','R4'],y:regimeCases.map(label),z,customdata:n,zmid:0,colorscale:'RdBu',hovertemplate:'%{y}<br>%{x}<br>difference:%{z}<br>paired origins:%{customdata}<extra></extra>'}],{height:Math.max(350,regimeCases.length*22+100),margin:{l:document.body.clientWidth<600?105:290,r:45,t:25,b:45},yaxis:{autorange:'reversed',tickfont:{size:9},tickvals:regimeCases.map(label),ticktext:regimeCases.map(c=>label(c).replace('Stochastic','S').replace('later decisions','later'))}});
  table('inference-regime-table',['Portfolio / regime','Paired origins','Mean','Difference vs Current'],regimeRows.map(r=>[escape(label(r.case)+' / '+r.regime),String(r.n),escape(fmt(r.mean,metric)),escape(fmt(r.delta,metric,true))]),'Table 3.5.4c. Common-fit regime sensitivity');
  const costMetric=metric==='netSD'?'cumulative_return':metric;
  const costCases=selected==='ALL'?['Current','STOCHASTIC2 / NO_SALE [observed-prefix]','stoch2A / SALE [observed-prefix]']:Array.from(new Set(['Current',selectedCase]));
  const costRows=data.cost_sensitivity.filter(r=>r.population===pop&&r.metric===costMetric&&costCases.includes(r.case));
  plot('inference-cost-chart',costCases.map(c=>{const a=costRows.filter(r=>r.case===c).sort((a,b)=>a.cost_bps-b.cost_bps);return {type:'scatter',mode:'lines+markers',x:a.map(r=>r.cost_bps),y:a.map(r=>r.mean*(pct.has(costMetric)?100:1)),name:label(c).replace(' / ','<br>').replace(' (later decisions)','<br>(later decisions)'),customdata:a.map(r=>r.n),hovertemplate:'%{fullData.name}<br>cost:%{x} bps<br>mean:%{y}<br>n:%{customdata}<extra></extra>'};}),{xaxis:{title:{text:'Execution cost (basis points)'},tickvals:[0,10,25,50]},yaxis:{title:{text:names[costMetric]}},legend:{orientation:'h',y:1.03,yanchor:'bottom',x:0},margin:{l:65,r:18,t:150,b:75},height:520});
  table('inference-cost-table',['Portfolio / cost','Origins','Mean '+names[costMetric]],costRows.map(r=>[escape(label(r.case)+' / '+r.cost_bps+' bps'),String(r.n),escape(fmt(r.mean,costMetric))]),'Table 3.5.4d. Cost sensitivity'+(metric==='netSD'?' — cumulative return shown; non-primary netSD unavailable':''));
  const robust=data.tests.filter(r=>r.population===pop&&r.family===family&&r.metric===metric&&r.case===selectedCase).sort((a,b)=>a.block-b.block);
  plot('inference-robustness-chart',[{type:'scatter',mode:'lines+markers',x:robust.map(r=>r.block),y:robust.map(r=>r.p_Holm),name:'Bootstrap Holm p'},{type:'scatter',mode:'lines+markers',x:robust.map(r=>r.block),y:robust.map(r=>r.hac_p_Holm),name:'HAC Holm p'}],{title:{text:label(selectedCase),font:{size:12}},xaxis:{title:{text:'Block length / HAC lag (origins)'},tickvals:[4,8,13,26,30,52]},yaxis:{title:{text:'Adjusted p value'},range:[0,1.03]},shapes:[{type:'line',xref:'paper',x0:0,x1:1,y0:.05,y1:.05,line:{color:'#a44',dash:'dot'}}]});
  const coverageRows=family==='vs_Current'?data.tests.filter(r=>r.family===family&&r.metric===metric&&r.case===selectedCase&&r.block===block):robust.filter(r=>r.block===block);
  table('inference-population-table',['Population / n','Difference [95% CI]','Bootstrap Holm p','HAC Holm p'],coverageRows.map(r=>[escape(r.population)+'<small>n='+r.n+'</small>',escape(fmt(r.delta,metric,true))+'<small>['+escape(fmt(r.ci_low,metric,true))+', '+escape(fmt(r.ci_high,metric,true))+']</small>',pformat(r.p_Holm),pformat(r.hac_p_Holm)]),'Table 3.5.4e. Coverage sensitivity: '+label(selectedCase));
  const common=new Set(data.metadata.filter(r=>r.deployment_count===45).map(r=>r.origin));
  const exposures=(selected==='ALL'?data.cases:[selectedCase,'Current']).map(c=>{const x=data.marked_sector_exposure.filter(r=>r.case===c&&common.has(r.origin)&&r.OOS_breach_marks>0);return [escape(label(c)),x.length+' / 157',x.length?(100*Math.max(...x.map(r=>r.OOS_maximum_weight))).toFixed(2)+'%':'No recorded OOS breach'];});
  table('inference-exposure-table',['Portfolio','Common origins with OOS breach','Largest recorded sector weight'],exposures,'Table 3.5.4f. Historical marked exposure');
  $('rolling-inference-status').textContent='Verified statistical appendix:157 common-fit origins; all 45 deployments;19,999 replications per block; 9,828 exported paired tests across declared families, populations and dependence settings.';
  $('rolling-study-results').dataset.inferenceReady='true';
 }
 for(const id of ['infer-family','infer-metric','infer-population','infer-block','infer-case','infer-period'])$(id).addEventListener('change',render);
 let pending;document.addEventListener('toggle',e=>{if(e.target.closest?.('#rolling-study-results')){clearTimeout(pending);pending=setTimeout(render,80);}},true);
 let previousWidth=innerWidth;window.addEventListener('resize',()=>{if(innerWidth===previousWidth)return;previousWidth=innerWidth;clearTimeout(pending);pending=setTimeout(render,180);});
 render();
})().catch(error=>{const target=document.getElementById('rolling-inference-status');if(target)target.textContent='Statistical appendix unavailable: '+error.message;});
