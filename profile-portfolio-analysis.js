(()=>{'use strict';
const states=new WeakMap(),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=(v,n=6)=>v==null||!Number.isFinite(Number(v))?'–':Number(v).toFixed(n),qty=v=>v==null?'–':String(Number(Number(v).toFixed(8)));
const difference=(a,b)=>a==null||b==null?null:a-b;
let dataPromise,policyPromise,quantilePromise,plotlyPromise;
const quantiles=()=>quantilePromise||(quantilePromise=fetch('current-sensitivity.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Later-stage sensitivity unavailable');return r.json()}));
const load=()=>dataPromise||(dataPromise=fetch('profile-portfolio-analysis.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Profile analysis HTTP '+r.status);return r.json()}));
const policies=()=>policyPromise||(policyPromise=fetch('chapter3-asset-sensitivity.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Policy sensitivity unavailable');return r.json()}));
const plotly=()=>window.Plotly?Promise.resolve():plotlyPromise||(plotlyPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='vendor/plotly/plotly-3.1.0.min.js';s.onload=resolve;s.onerror=reject;document.head.append(s)}));
const globalChoice=()=>({model:document.querySelector('input[name="portfolio-scope"]:checked')?.value||'CURRENT',policy:document.querySelector('input[name="sale-policy"]:checked')?.value||'NO_SALE',history:document.querySelector('select[name="profile-history-regime"]')?.value||'FULL'});
function install(profile){
 if(!profile.closest('#analytics-1-1'))return null;
 if(states.has(profile))return states.get(profile);
 const asset=(profile.dataset.currentAsset||profile.id.replace(/^(share-|fund-)/,'')).toUpperCase().replace('US:','US_');
 let parent=profile.querySelector(':scope > details.portfolio-sensitivity');if(!parent){parent=document.createElement('details');parent.className='portfolio-sensitivity';parent.innerHTML='<summary>Portfolio sensitivity</summary>';profile.append(parent)}
 profile.querySelectorAll('.corrected-tree-sensitivity').forEach(n=>n.remove());
 let sensitivity=parent.querySelector(':scope > .selected-portfolio-sensitivity');if(!sensitivity){sensitivity=document.createElement('div');parent.querySelector('summary').after(sensitivity)}sensitivity.className='pa-sensitivity';sensitivity.hidden=false;sensitivity.style.removeProperty('display');
 parent.querySelectorAll(':scope > details:not(.dominance-components)').forEach(n=>{n.open=false;const s=n.querySelector(':scope > summary');if(s&&!s.textContent.startsWith('Archived'))s.textContent='Archived earlier snapshot — '+s.textContent});
 let dominance=parent.querySelector('.dominance-explorer');if(!dominance){const detail=document.createElement('details');detail.className='dominance-components';detail.innerHTML='<summary>FSD, SSD and TSD</summary><div></div>';parent.append(detail);dominance=detail.lastElementChild}dominance.className='pa-dominance';dominance.replaceChildren();const ds=dominance.closest('details').querySelector(':scope > summary');if(ds)ds.textContent='FSD, SSD and TSD — all portfolios and asset-sale alternatives';
 let front=profile.querySelector(':scope > details.frontier-components .frontier-explorer');
 if(!front){const detail=document.createElement('details');detail.className='frontier-components';detail.innerHTML='<summary>Five frontier comparisons — all portfolios and sale alternatives</summary><div class="pa-frontiers"></div>';profile.append(detail);front=detail.lastElementChild}else{front.className='pa-frontiers';front.replaceChildren()}
 const state={profile,asset,parent,sensitivity,dominance,front,selected:new Set(),pinned:new Set(['CURRENT','A:'+asset]),history:'FULL',order:'FSD',left:'Markowitz',right:'NetSD',scopeKey:null,dirty:true};states.set(profile,state);return state;
}
function defaults(s,d){
 const choice=globalChoice(),key=choice.model+'/'+choice.policy+'/'+choice.history;if(s.scopeKey===key)return;
 s.scopeKey=key;const h=choice.history==='CURRENT'?d.current_regime:choice.history;s.history=d.contexts[h]?h:'FULL';
 s.selected=new Set(d.portfolios.filter(p=>p.id!=='CURRENT'&&p.status==='computed'&&p.model===choice.model&&(choice.policy==='ALL'||choice.policy===p.policy)).map(p=>p.series));
 for(const id of d.assets[s.asset]?.sales||[])s.selected.add(id);s.dirty=true;
}
function options(s,d){
 let text='<optgroup label="Saved portfolio allocations">'+d.portfolios.filter(p=>p.id!=='CURRENT').map(p=>'<option value="'+esc(p.series||p.id)+'" '+(p.status!=='computed'?'disabled ':'')+(s.selected.has(p.series)?'selected':'')+'>'+esc(p.label)+(p.status!=='computed'?' — not yet calculated (–)':'')+'</option>').join('')+'</optgroup>';
 const a=d.assets[s.asset];text+='<optgroup label="Sell from actual Current">'+(a.sales.length?a.sales.map(id=>'<option value="'+esc(id)+'" '+(s.selected.has(id)?'selected':'')+'>'+esc(d.series[id].label)+'</option>').join(''):'<option disabled>Not held in Current — no units to sell</option>')+'</optgroup>';return text;
}
function controls(s,d,host){
 const box=document.createElement('div');box.className='pa-controls';box.innerHTML='<label>Portfolios and sale alternatives (multiple selection)<select class="pa-selection" multiple size="6">'+options(s,d)+'</select></label><label>Historical sample<select class="pa-history">'+Object.entries(d.contexts).map(([k,v])=>'<option value="'+k+'" '+(s.history===k?'selected':'')+'>'+esc(v.label)+'</option>').join('')+'</select></label><div><button type="button" class="pa-all">Select all portfolios</button> <button type="button" class="pa-reset">Selected model + sales</button></div><small>Current and this asset are always shown. Unfinished models remain named with “–”.</small>';host.append(box);
 box.querySelector('.pa-selection').addEventListener('change',e=>{s.selected=new Set([...e.target.selectedOptions].map(o=>o.value));renderVisible(s,d)});
 box.querySelector('.pa-history').addEventListener('change',e=>{s.history=e.target.value;renderVisible(s,d)});
 box.querySelector('.pa-all').addEventListener('click',()=>{for(const p of d.portfolios)if(p.id!=='CURRENT'&&p.status==='computed')s.selected.add(p.series);renderVisible(s,d)});
 box.querySelector('.pa-reset').addEventListener('click',()=>{s.scopeKey=null;defaults(s,d);renderVisible(s,d)});
}
function note(s,d,host){
 const a=d.assets[s.asset],c=d.contexts[s.history],p=document.createElement('p');p.className='pa-scope';p.textContent='Current: '+qty(a.current_units)+' '+s.asset+' units; '+d.portfolios.filter(p=>p.id!=='CURRENT'&&p.status==='computed').length+' saved portfolio variants and '+d.portfolios.filter(p=>p.status==='pending').length+' pending entries. '+c.label+': '+c.observations+' daily returns, '+c.first+' to '+c.last+'. Current quotes through '+d.asof+'; saved model input '+d.model_snapshot_run+'. These are fixed-composition historical diagnostics, not OOS results or newly optimised orders.';host.append(p);
}
function table(host,headers,rows,kind){
 const t=document.createElement('table');t.className='pa-table horizontal-summary-group '+(kind||'');const h=t.createTHead().insertRow();for(const title of headers){const th=document.createElement('th');th.textContent=title;h.append(th)}
 const b=t.createTBody();for(const row of rows){const tr=b.insertRow();if(row.id)tr.dataset.case=row.id;for(const value of row.values)tr.insertCell().textContent=value??'–'}host.append(t);return t;
}
function methods(host){
 const detail=document.createElement('details');detail.innerHTML=String.raw`<summary>Method, cash proceeds and interpretation</summary><p>Sale cases remove exactly 10%, 50% or 100% of this asset's actual Current units. All other holdings remain fixed. Proceeds at the latest dated EUR quote remain constant zero-return cash throughout the hypothetical historical comparison; the latest total is conserved before costs. These are theoretical fractional quantities, not executed lot-rounded orders. Existing reported cash, bonds and savings notes are outside this shares/funds diagnostic.</p><p>For sold fraction \(f\), current quantity \(q_a\), asset price \(p_a(t)\) and latest quote date \(T\): \[L_f(t)=L_{\mathrm{Current}}(t)-f q_a p_a(t)+f q_a p_a(T).\] Daily returns use consecutive original marks before applying any retrospective regime mask. Every compared series uses the same observations. No portfolio is reoptimised. Asset-only saved-target changes are not new trade recommendations.</p><p>For the \(n\) original returns: \[F(x)=\frac{1}{n}\sum_i\mathbf{1}(R_i\leq x),\quad S_2(x)=\frac{1}{n}\sum_i(x-R_i)_+,\quad S_3(x)=\frac{1}{2n}\sum_i(x-R_i)_+^2.\] Graphs evaluate these functions on up to900 thresholds; netSD uses the full sample and its candidate-dependent reference denominator. Frontier lines are observed nondominated candidate envelopes, not freshly solved optimisation frontiers. Earlier optimised training curves remain in chapter3.</p>`;detail.addEventListener('toggle',()=>{if(detail.open)window.renderReportMath?.([detail])});host.append(detail)
}
function renderSensitivity(s,d){
 const host=s.sensitivity;host.replaceChildren();note(s,d,host);controls(s,d,host);
 const ids=['CURRENT',...s.selected].filter(id=>d.series[id]),rows=ids.map(id=>{const m=d.series[id].metrics[s.history],z=d.series[id];return {id,values:[z.label,fmt(m.netSD),fmt(m.mean),fmt(m.SD),fmt(m.Sharpe),fmt(m.Sortino),fmt(m.Rachev),fmt(m.CVaR95)]}});
 table(host,['Portfolio / alternative','netSD','Mean daily return','STD','Sharpe','Sortino','Rachev','CVaR95'],rows,'pa-summary');
 const sales=(d.assets[s.asset].sales||[]).filter(id=>s.selected.has(id));if(sales.length){table(host,['Sale case','Units sold','Units remaining','Cash proceeds EUR','netSD change vs Current'],sales.map(id=>{const z=d.series[id];return {id,values:[z.label,qty(z.sold_units),qty(z.remaining_units),fmt(z.sale_cash_EUR,2),fmt(difference(z.metrics[s.history].netSD,d.series.CURRENT.metrics[s.history].netSD))]}}),'pa-sales')}
 const marginal=d.assets[s.asset].marginal,selected=d.portfolios.filter(p=>p.id!=='CURRENT'&&(s.selected.has(p.series)||p.status==='pending'));
 if(selected.length){const title=document.createElement('p');title.textContent='Asset-only initial-target sensitivity for the selected saved allocations. Every other actual Current holding remains fixed.';host.append(title);table(host,['Saved allocation','Asset target units','Change vs actual units','Selected portfolio netSD','Current after asset-only change','netSD change vs Current'],selected.map(p=>{const a=marginal[p.id],m=a?.series?d.series[a.series]?.metrics[s.history]:null;return {id:p.id,values:[p.label,p.status==='pending'?'–':qty(a?.target_units),p.status==='pending'?'–':qty(a?.change_units),p.series?fmt(d.series[p.series]?.metrics[s.history]?.netSD):'–',fmt(m?.netSD),m?.netSD==null?'–':fmt(difference(m.netSD,d.series.CURRENT.metrics[s.history].netSD))]}}),'pa-marginal')}
 const policy=document.createElement('details');policy.className='pa-policy';policy.innerHTML='<summary>Saved whole-tree / first-stage / later-stage sensitivity — all model variants</summary><div></div>';host.append(policy);policy.addEventListener('toggle',()=>{if(policy.open)renderPolicy(s,d,policy.lastElementChild)});methods(host);
}
async function renderPolicy(s,d,host){
 host.innerHTML='Loading saved scenario-law sensitivity…';try{
  const source=await policies();host.replaceChildren();const p=document.createElement('p');const different=JSON.stringify(Object.entries(source.holdings).sort())!==JSON.stringify(Object.entries(d.current_holdings).sort());p.textContent='These are saved model-law results, including cash and every original scenario; they do not use the historical-return sample above. '+(different?'Their base inventory predates the new High Dividend C holding; recalculation for latest Current is pending.':'Their Current inventory matches the recorded input.')+' Actual Current holds '+qty(d.assets[s.asset].current_units)+' units of this asset.';host.append(p);
  const laterSource=d.policy_quantiles_source_verified?await quantiles():null;
  const select=document.createElement('select');select.className='pa-policy-model';for(const entry of d.portfolios.filter(p=>p.id!=='CURRENT')){const option=document.createElement('option');option.value=entry.id;option.textContent=entry.label+(entry.status==='pending'?' — pending':'');select.append(option)}host.append(select);const output=document.createElement('div');host.append(output);
  const choice=d.portfolios.find(p=>s.selected.has(p.series)&&p.id.startsWith('MODEL:'));if(choice)select.value=choice.id;
  function draw(){output.replaceChildren();const entry=d.portfolios.find(p=>p.id===select.value),id=entry.id.split(':'),item=id[0]==='MODEL'?source.models[id[1]]?.[id[2]]:null;
   if(!item){output.textContent='– No verified terminal asset-counterfactual result for this variant. Its historical allocation comparison is available above; missing scenario results are not zero.';return}
   const rows=[['Saved full policy',item.full_policy_baseline],['Saved initial decision only',item.initial_baseline],['Saved no-trade baseline',item.current_baseline]].map(([label,m])=>({values:[label,fmt(m?.netSD),fmt(m?.mean_return),fmt(m?.SD),fmt(m?.Sharpe),fmt(m?.Sortino),fmt(m?.Rachev)]}));table(output,['Policy scope','Terminal netSD','Expected return','SD','Sharpe','Sortino','Rachev'],rows);
   const remove=item.current_removal?.find(r=>r.asset===s.asset),initial=item.initial_buys?.find(r=>r.asset===s.asset),later=item.later_maximum_buys?.find(r=>r.asset===s.asset);
   table(output,['Asset counterfactual','Recorded quantity','Terminal netSD','Change vs recorded baseline'],[['Remove entire recorded holding',remove],['Exact recorded first buy',initial],['Maximum attained gross later purchases',later]].map(([label,r])=>({values:[label,qty(r?.quantity),fmt(r?.terminal?.netSD),fmt(r?.delta?.netSD??r?.delta)]})));
   const quantileCases=laterSource?.models?.[id[1]]?.[id[2]]?.assets?.[s.asset]?.all_stages;
   if(quantileCases?.length)table(output,['Saved later-stage purchase case','Later purchases','Total gross purchases','Terminal netSD','Change vs saved full policy'],quantileCases.map(r=>({values:[r.case,qty(r.later_units),qty(r.total_gross_purchase_units),fmt(r.terminal?.netSD),fmt(r.delta_vs_model?.netSD)]})));
   const link=document.createElement('a');link.href='#chapter3-asset-sensitivity';link.textContent='Open the complete scenario sensitivity tables and feasibility definitions';output.append(link);
  }select.addEventListener('change',draw);draw();
 }catch(e){host.textContent=e.message}}
function selectedSeries(s,d){return ['CURRENT',d.assets[s.asset].series,...s.selected].filter((v,i,a)=>v&&d.series[v]&&a.indexOf(v)===i)}
function empirical(values,x,order){
 const r=[...values].sort((a,b)=>a-b);let k=0,sum=0,sq=0;return x.map(v=>{while(k<r.length&&r[k]<=v){sum+=r[k];sq+=r[k]*r[k];k++}return order==='FSD'?k/r.length:order==='SSD'?(k*v-sum)/r.length:(k*v*v-2*v*sum+sq)/(2*r.length)})
}
async function renderDominance(s,d){
 const host=s.dominance;if(!host)return;host.replaceChildren();note(s,d,host);controls(s,d,host);const label=document.createElement('label');label.textContent='Dominance component ';const select=document.createElement('select');for(const name of ['FSD','SSD','TSD']){const o=document.createElement('option');o.value=name;o.textContent=name;select.append(o)}select.value=s.order;label.append(select);host.append(label);const plot=document.createElement('div');plot.className='pa-plot';host.append(plot);
 const indices=d.contexts[s.history].indices,ids=selectedSeries(s,d),samples=ids.map(id=>indices.map(i=>d.series[id].returns[i]));let lo=Infinity,hi=-Infinity;for(const r of samples)for(const v of r){lo=Math.min(lo,v);hi=Math.max(hi,v)}const x=Array.from({length:900},(_,i)=>lo+(hi-lo)*i/899);
 await plotly();if(!plot.isConnected)return;const traces=ids.map((id,i)=>({name:d.series[id].label,x,y:empirical(samples[i],x,s.order),type:'scatter',mode:'lines',line:{shape:s.order==='FSD'?'hv':'linear',width:id==='CURRENT'?3:2},hovertemplate:'%{x:.3%}<br>%{y:.8f}<extra>%{fullData.name}</extra>'}));
 await Plotly.newPlot(plot,traces,{height:420,margin:{l:65,r:15,t:25,b:70},xaxis:{title:'Daily return threshold',tickformat:'.1%'},yaxis:{title:s.order==='FSD'?'Empirical CDF':s.order==='SSD'?'Integrated CDF':'Twice-integrated CDF'},showlegend:false,autosize:true},{responsive:true,displaylogo:false});select.addEventListener('change',()=>{s.order=select.value;renderDominance(s,d)});methods(host);
}
const risks={Markowitz:'SD',MAD:'MAD',Minimax:'Minimax',Robust:'CVaR95',NetSD:'netSD'};
async function frontierPlot(s,d,plot,model){
 const points=Object.entries(d.series).filter(([id,z])=>z.type==='asset'||id==='CURRENT'||s.selected.has(id)||d.portfolios.some(p=>p.series===id)).map(([id,z])=>{const m=z.metrics[s.history],risk=model==='NetSD'?m.netSD==null?null:1-m.netSD:m[risks[model]];return {id,name:z.label,type:z.type,risk,mean:m.mean,m}}).filter(p=>p.risk!=null&&p.mean!=null);
 const candidates=points.filter(p=>p.type==='portfolio'||p.type==='sale');const sorted=[...candidates].sort((a,b)=>a.risk-b.risk||b.mean-a.mean),front=[];let best=-Infinity;for(const p of sorted)if(p.mean>best+1e-14){front.push(p);best=p.mean}
 const background=points.filter(p=>p.type==='asset'&&p.id!==d.assets[s.asset].series&&!s.pinned.has(p.id)),chosen=points.filter(p=>p.id==='CURRENT'||s.selected.has(p.id)||p.id===d.assets[s.asset].series||s.pinned.has(p.id));
 await plotly();if(!plot.isConnected)return;
 const traces=[{x:front.map(p=>p.risk),y:front.map(p=>p.mean),name:'Observed portfolio envelope',type:'scatter',mode:'lines',line:{color:'#337d87',width:2}},{x:background.map(p=>p.risk),y:background.map(p=>p.mean),name:'Other assets',type:'scatter',mode:'markers',marker:{size:4,color:'#c6cdd1'},customdata:background.map(p=>[p.id,p.name]),hovertemplate:'%{customdata[1]}<br>Risk %{x:.6f}<br>Mean %{y:.6f}<extra></extra>'},...chosen.map(p=>({x:[p.risk],y:[p.mean],name:p.name,type:'scatter',mode:s.pinned.has(p.id)?'markers+text':'markers',text:s.pinned.has(p.id)?[p.name]:undefined,textposition:'top center',marker:{size:p.id==='CURRENT'?11:8,symbol:p.type==='sale'?'diamond':'circle'},customdata:[[p.id,p.name]],hovertemplate:'%{customdata[1]}<br>Risk %{x:.6f}<br>Mean %{y:.6f}<extra></extra>'}))];
 await Plotly.newPlot(plot,traces,{height:440,margin:{l:65,r:15,t:25,b:80},xaxis:{title:model==='NetSD'?'1 − netSD':model+' risk'},yaxis:{title:'Mean daily return',tickformat:'.2%'},showlegend:false,autosize:true},{responsive:true,displaylogo:false});plot.on('plotly_click',event=>{const id=event.points[0]?.customdata?.[0];if(id){s.pinned.add(id);frontierPlot(s,d,plot,model)}});
}
async function renderFrontiers(s,d){
 const host=s.front;host.replaceChildren();note(s,d,host);controls(s,d,host);const p=document.createElement('p');p.textContent='All five risk definitions use the same selected daily observations. Click a point to retain its label. Diamonds are asset-sale alternatives; their proceeds remain cash. Lines are the observed nondominated portfolio envelope, not a new optimisation under changed constraints.';host.append(p);const grid=document.createElement('div');grid.className='pa-front-grid';host.append(grid);
 for(const side of ['left','right']){const panel=document.createElement('div');const select=document.createElement('select');for(const name of Object.keys(risks)){const o=document.createElement('option');o.value=name;o.textContent=name;select.append(o)}select.value=s[side];panel.append(select);const plot=document.createElement('div');plot.className='pa-plot';panel.append(plot);grid.append(panel);select.addEventListener('change',()=>{s[side]=select.value;frontierPlot(s,d,plot,select.value)});frontierPlot(s,d,plot,select.value)}methods(host);
}
function renderVisible(s,d){
 if(!d.assets[s.asset]){s.sensitivity.textContent='No complete common return sample is available for this instrument; no sensitivity is fabricated.';return}const visible=host=>host&&host.getClientRects().length&&host.closest('details')?.open;
 if(s.parent.open&&s.profile.open)renderSensitivity(s,d);if(visible(s.dominance))renderDominance(s,d).catch(e=>s.dominance.textContent=e.message);if(visible(s.front))renderFrontiers(s,d).catch(e=>s.front.textContent=e.message);
 s.profile.dataset.profileAnalysisReady='true';s.profile.dataset.profileAnalysisPortfolios=String(d.portfolios.filter(p=>p.status==='computed').length);
}
function refresh(profile){const s=install(profile);if(!s||!profile.open)return;load().then(d=>{defaults(s,d);renderVisible(s,d)}).catch(e=>s.sensitivity.textContent=e.message)}
window.renderSelectedPortfolioSensitivity=function(profile){refresh(profile)};
function start(){document.querySelectorAll('#analytics-1-1 details.stock-profile').forEach(install);document.querySelectorAll('details.stock-profile[open]').forEach(refresh)}
document.addEventListener('toggle',event=>{const profile=event.target.closest?.('details.stock-profile');if(!profile||!event.target.open)return;const s=states.get(profile)||install(profile);if(!s)return;if(event.target===profile||event.target===s.parent||event.target===s.dominance?.closest('details')||event.target===s.front?.closest('details'))refresh(profile)},true);
document.addEventListener('change',event=>{if(event.target.matches('input[name="portfolio-scope"],input[name="sale-policy"],select[name="profile-history-regime"]'))queueMicrotask(()=>document.querySelectorAll('details.stock-profile[open]').forEach(refresh))});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
