// PORTFOLIO_PROGRESS {"verified_folds": 195, "planned_folds": 222, "is_complete": false}
'use strict';
(async()=>{
 const data=await fetch('rolling-validation.json').then(r=>{if(!r.ok)throw Error(r.status);return r.json()});
 const $=id=>document.getElementById(id),escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const queueEnded=data.progress?.state==='all_remaining_origins_attempted_with_explicit_unavailable';
 const stopped=data.progress?.state?.includes('failed_checkpoint');
 $('study-status').textContent=`${data.verified_folds} / ${data.planned_folds} windows verified. ${data.is_complete?'Study complete.':queueEnded?'Queue finished with unavailable origins; these are excluded.':stopped?'Study stopped at a preserved checkpoint; unfinished windows are excluded.':'Calculations in progress; unfinished windows are excluded.'} Sources end 2026-11-17; calendar windows: six months / one month / seven-day step.`;
 const frozen=document.createElement('p');frozen.textContent='Frozen study: Current uses the original research inventory, not subsequent live-account purchases. Previously checked windows are retained unchanged. Published calculation status: '+(data.progress?.state||'not recorded')+(data.progress?.current?' / origin '+data.progress.current:'')+(data.progress?.updated_at_UTC?' / as of '+data.progress.updated_at_UTC:'')+'.';$('study-status').after(frozen);
 if(data.unavailable_origins?.length){const note=document.createElement('details');note.innerHTML='<summary>Unavailable origins and coverage</summary><ul>'+data.unavailable_origins.map(x=>'<li>'+escape(x.fold)+': '+escape(x.reason)+'</li>').join('')+'</ul>';frozen.after(note);}
 const rows=data.completed.flatMap(f=>f.metrics.map(r=>({...r,origin:f.fold.origin,regime:f.origin_regime||null}))).filter(r=>r.cost_bps===(r.scope==='IS'?0:10));
 const metrics=['netSD','mean_return','Rachev','Sharpe','maximum_drawdown','Sortino','STD','accumulated_wealth_EUR','CVaR95','fees_EUR','turnover_EUR'];
 function options(el,values){el.replaceChildren(...values.map(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;return o}));}
 options($('case'),[...new Set(rows.map(r=>r.case))].sort());options($('metric'),metrics);options($('origin'),data.completed.map(x=>x.fold.id));
 const overview=document.createElement('details');overview.id='all-portfolio-comparison';
 overview.innerHTML='<summary>Results: all portfolios and all key measures</summary><p>Same period and origin-regime selection as below. Each cell is the mean across available verified windows; the smaller line gives sample SD and the number of finite observations. No missing value is replaced by zero. Daily mean return, STD, CVaR and maximum drawdown are percentages; Sharpe and Sortino are unannualised. Overlapping windows are descriptive and are never compounded.</p><p>Stochastic names without an observed-prefix suffix use only their fitted initial allocation. Observed-prefix rows execute the fitted later decision rules using only information available by that date. These are separate deployments. Sale, No-sale and No-initial-sales are separate policies.</p><label>Sale policy <select id="overview-policy"><option value="ALL">All policies</option><option value="SALE">Sale</option><option value="NO_SALE">No-sale</option><option value="NO_INITIAL_SALES">No initial sales; later sales allowed</option></select></label><label>Stochastic deployment <select id="overview-deployment"><option value="ALL">Initial-only and observed-prefix</option><option value="INITIAL">Initial-only</option><option value="CAUSAL">Observed-prefix</option></select></label><p id="overview-coverage"></p><div id="all-portfolio-metrics"></div>';
 $('filters').before(overview);
 const overviewMeasures=[['netSD','netSD'],['Daily mean return','mean_return'],['Rachev','Rachev'],['Sharpe','Sharpe'],['Sortino','Sortino'],['Daily STD','STD'],['Maximum drawdown','maximum_drawdown'],['CVaR95','CVaR95'],['Accumulated wealth, EUR','accumulated_wealth_EUR']];
 let overviewSignature='';
 function renderOverview(){
  const host=$('all-portfolio-metrics'),width=host.getBoundingClientRect().width||document.body.clientWidth-54,count=Math.max(2,Math.min(10,Math.floor(width/125)));
  const signature=[$('scope').value,$('regime').value,$('overview-policy').value,$('overview-deployment').value,count].join('|');if(signature===overviewSignature)return;overviewSignature=signature;
  const eligible=rows.filter(r=>r.scope===$('scope').value&&($('regime').value==='all'||r.regime===$('regime').value));
  const origins=new Set(eligible.map(r=>r.origin));
  const cases=[...new Set(eligible.map(r=>r.case))].sort().filter(c=>{
   if(c==='Current')return true;
   const policy=c.split(' / ')[1]?.replace(' [observed-prefix]','');
   if($('overview-policy').value!=='ALL'&&policy!==$('overview-policy').value)return false;
   const stochastic=/^(STOCHASTIC|stoch)/.test(c),causal=c.endsWith(' [observed-prefix]');
   return !stochastic||$('overview-deployment').value==='ALL'||($('overview-deployment').value==='CAUSAL'?causal:!causal);
  });
  const percentage=new Set(['mean_return','STD','maximum_drawdown','CVaR95']);
  const format=(x,k)=>percentage.has(k)?(100*x).toFixed(3)+'%':k==='accumulated_wealth_EUR'?x.toFixed(2):x.toFixed(4);
  const records=cases.map(c=>{const group=eligible.filter(r=>r.case===c);return [escape(c),...overviewMeasures.map(([label,k])=>{
   const values=group.map(r=>r[k]).filter(Number.isFinite),n=values.length;if(!n)return 'Unavailable<small style="display:block">n=0 / '+origins.size+'</small>';
   const mean=values.reduce((a,b)=>a+b,0)/n,sd=n>1?Math.sqrt(values.reduce((a,b)=>a+(b-mean)**2,0)/(n-1)):null;
   return format(mean,k)+'<small style="display:block">SD '+(sd===null?'Unavailable':format(sd,k))+'; n='+n+' / '+origins.size+'</small>';
  })]});
  const headers=['Portfolio / policy / deployment',...overviewMeasures.map(m=>m[0])];let html='';
  for(let start=1;start<headers.length;start+=count-1){const indices=[0,...Array.from({length:Math.min(count-1,headers.length-start)},(_,i)=>start+i)];
   html+='<table class="horizontal-summary-group"><thead><tr>'+indices.map(i=>'<th scope="col">'+headers[i]+'</th>').join('')+'</tr></thead><tbody>'+records.map(row=>'<tr>'+indices.map((i,j)=>'<'+(j?'td':'th scope="row"')+'>'+row[i]+'</'+(j?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table>';
  }host.innerHTML=html;$('overview-coverage').textContent=cases.length+' deployments; '+origins.size+' verified origins in this filter. All model families are shown together. Regime-specific netSD fits with unavailable training data have lower coverage.';
 }
 ['overview-policy','overview-deployment'].forEach(id=>$(id).addEventListener('change',renderOverview));
 overview.addEventListener('toggle',()=>{if(overview.open){overviewSignature='';renderOverview()}});
 let overviewResize;window.addEventListener('resize',()=>{clearTimeout(overviewResize);overviewResize=setTimeout(renderOverview,180)});
 function plot(host,points,label){
  const valid=points.filter(p=>Number.isFinite(p[1]));if(!valid.length){host.textContent='No verified observations for this selection.';return;}
  const lo=Math.min(...valid.map(p=>p[1])),hi=Math.max(...valid.map(p=>p[1])),span=hi-lo||1,w=1000,h=320;
  const x=i=>75+(w-100)*i/Math.max(1,points.length-1),y=v=>h-55-(v-lo)/span*(h-90);
  let paths='',open=false;points.forEach((p,i)=>{if(Number.isFinite(p[1])){paths+=(open?' L':' M')+x(i).toFixed(2)+','+y(p[1]).toFixed(2);open=true;}else open=false;});
  host.innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${escape(label)}"><line x1="75" y1="${h-55}" x2="980" y2="${h-55}" stroke="#aaa"/><path d="${paths}" fill="none" stroke="#1762a0" stroke-width="2"/><text x="5" y="30" font-size="14">${hi.toPrecision(5)}</text><text x="5" y="${h-55}" font-size="14">${lo.toPrecision(5)}</text><text x="75" y="${h-12}" font-size="14">${escape(points[0][0])}</text><text x="850" y="${h-12}" font-size="14">${escape(points.at(-1)[0])}</text>${points.filter(p=>Number.isFinite(p[1])).map(p=>{const i=points.indexOf(p);return `<circle cx="${x(i)}" cy="${y(p[1])}" r="3" fill="#1762a0"><title>${escape(p[0])}: ${escape(p[1])}</title></circle>`}).join('')}</svg>`;
 }
 let renderId=0;const curveCache=new Map();async function render(){
  const thisRender=++renderId;
  renderOverview();
  let selected=rows.filter(r=>r.case===$('case').value&&r.scope===$('scope').value&&($('regime').value==='all'||r.regime===$('regime').value));
  const metric=$('metric').value;plot($('chart'),selected.map(r=>[r.origin,r[metric]]),metric);
  let aggregate=$('aggregate-results');if(!aggregate){const section=document.createElement('details');section.innerHTML='<summary>Results: descriptive comparison across verified windows</summary><p>Same selected metric, scope and origin-regime filter. Each window has equal weight. Delta is paired with Current on the same origin. Overlapping windows are dependent; these are descriptive statistics, not significance tests. Held-out periods have different lengths.</p><div id="aggregate-results"></div>';$('result-table').parentElement.after(section);aggregate=$('aggregate-results');}
  const eligible=rows.filter(r=>r.scope===$('scope').value&&($('regime').value==='all'||r.regime===$('regime').value));
  const benchmark=new Map(eligible.filter(r=>r.case==='Current'&&Number.isFinite(r[metric])).map(r=>[r.origin,r[metric]]));
  const fmt=v=>Number.isFinite(v)?v.toPrecision(5):'Unavailable';
  aggregate.innerHTML='<table><thead><tr><th>Case</th><th>Available windows</th><th>Mean</th><th>Sample SD</th><th>Mean paired delta vs Current</th><th>Min / median / max</th></tr></thead><tbody>'+[...new Set(eligible.map(r=>r.case))].sort().map(c=>{const group=eligible.filter(r=>r.case===c&&Number.isFinite(r[metric]));const v=group.map(r=>r[metric]).sort((a,b)=>a-b),n=v.length,mean=n?v.reduce((a,b)=>a+b,0)/n:NaN,sd=n>1?Math.sqrt(v.reduce((s,x)=>s+(x-mean)**2,0)/(n-1)):NaN,delta=group.filter(r=>benchmark.has(r.origin)).map(r=>r[metric]-benchmark.get(r.origin));return '<tr><td>'+escape(c)+'</td><td>'+n+' / '+data.verified_folds+'</td><td>'+fmt(mean)+'</td><td>'+fmt(sd)+'</td><td>'+fmt(delta.length?delta.reduce((a,b)=>a+b,0)/delta.length:NaN)+'</td><td>'+[v[0],n?(v[Math.floor((n-1)/2)]+v[Math.ceil((n-1)/2)])/2:NaN,v[n-1]].map(fmt).join(' / ')+'</td></tr>';}).join('')+'</tbody></table>';
  $('chart-note').textContent=`${selected.length} overlapping folds. Ratios are unannualised unless labelled otherwise. Missing values remain unavailable. Held-out tails have different lengths.`;
  $('result-table').innerHTML='<table><thead><tr><th>Origin</th><th>Sessions</th><th>'+escape(metric)+'</th><th>netSD denominator</th><th>Tail mass</th></tr></thead><tbody>'+selected.map(r=>`<tr><td>${escape(r.origin)}</td><td>${r.observations}</td><td>${Number.isFinite(r[metric])?r[metric].toPrecision(6):'Unavailable'}</td><td>${r.netSD_D??'—'}</td><td>${r.tail_observation_mass??'—'}</td></tr>`).join('')+'</tbody></table>';
  const fold=data.completed.find(f=>f.fold.id===$('origin').value);if(fold){if(!curveCache.has(fold.fold.id))curveCache.set(fold.fold.id,await fetch('rolling-validation-folds/'+fold.fold.id+'.json').then(r=>r.json()));if(thisRender!==renderId)return;const curve=curveCache.get(fold.fold.id)?.[$('case').value]||[];plot($('wealth-chart'),curve,'Accumulated wealth in EUR');const p=fold.parameters||{};$('regime-parameters').innerHTML='<p>Training: '+escape(fold.fold.training_first)+' to '+escape(fold.fold.origin)+'; OOS ends '+escape(fold.fold.OOS_end)+'.</p><table><thead><tr><th>Parameter</th><th>Window value</th></tr></thead><tbody>'+Object.entries(p).filter(([k,v])=>typeof v==='number').map(([k,v])=>'<tr><td>'+escape(k)+'</td><td>'+escape(v.toPrecision(6))+'</td></tr>').join('')+'</tbody></table><table><thead><tr><th>Period</th><th>Sessions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>Unknown</th></tr></thead><tbody>'+(fold.regimes||[]).map(r=>'<tr><td>'+escape(r.scope)+'</td><td>'+r.observations+'</td>'+[1,2,3,4].map(k=>'<td>'+(r.regime_counts[k]||0)+'</td>').join('')+'<td>'+r.unclassified+'</td></tr>').join('')+'</tbody></table>';}
 }
 for(const id of ['case','scope','metric','regime','origin'])$(id).addEventListener('change',render);render();
})().catch(e=>{document.getElementById('study-status').textContent='Experiment data unavailable: '+e.message;});
