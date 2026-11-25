(()=>{'use strict';
 const get=id=>document.getElementById(id),num=(x,n=4)=>Number.isFinite(x)?x.toLocaleString('en-GB',{minimumFractionDigits:n,maximumFractionDigits:n}):'—';
 const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
 let summary,context,scope='long',regime='FULL',serial=0;const cache=new Map();
 function table(headers,rows){const t=el('table'),head=el('thead'),tr=el('tr'),body=el('tbody');headers.forEach(h=>tr.append(el('th',h)));head.append(tr);for(const row of rows){const r=el('tr');row.forEach((value,i)=>{const c=el('td');c.dataset.label=headers[i];if(value instanceof Node)c.append(value);else c.textContent=value;r.append(c);});body.append(r);}t.append(head,body);return t;}
 function host(id,headers,rows){const n=get(id);n.replaceChildren(table(headers,rows));window.reportTableFit?.(n);}
 function card(label,value,detail){const c=el('div',undefined,'metric-card');c.append(el('span',label),el('strong',value));if(detail)c.append(el('span',detail));return c;}
 const yahooLinks={
  "AKO1L": "https://finance.yahoo.com/quote/AKO1L.VS/chart/",
  "AMG1L": "https://finance.yahoo.com/quote/AMG1L.VS/chart/",
  "APG1L": "https://finance.yahoo.com/quote/APG1L.VS/chart/",
  "ARC1T": "https://finance.yahoo.com/quote/ARC1T.TL/chart/",
  "AUG1L": "https://finance.yahoo.com/quote/AUG1L.VS/chart/",
  "BAL1R": "https://finance.yahoo.com/quote/BAL1R.RG/chart/",
  "BERCM": "https://finance.yahoo.com/lookup/?s=BERCM",
  "CPA1T": "https://finance.yahoo.com/quote/CPA1T.TL/chart/",
  "CTS1L": "https://finance.yahoo.com/lookup/?s=CTS1L",
  "DGR1R": "https://finance.yahoo.com/quote/DGR1R.RG/chart/",
  "EFT1T": "https://finance.yahoo.com/quote/EFT1T.TL/chart/",
  "EWA1L": "https://finance.yahoo.com/lookup/?s=EWA1L",
  "GRG1L": "https://finance.yahoo.com/quote/GRG1L.VS/chart/",
  "HAE1T": "https://finance.yahoo.com/quote/HAE1T.TL/chart/",
  "HPR1T": "https://finance.yahoo.com/quote/HPR1T.TL/chart/",
  "IGN1L": "https://finance.yahoo.com/quote/IGN1L.VS/chart/",
  "INC1L": "https://finance.yahoo.com/quote/INC1L.VS/chart/",
  "INL1L": "https://finance.yahoo.com/quote/INL1L.VS/chart/",
  "INR1L": "https://finance.yahoo.com/quote/INR1L.VS/chart/",
  "IVL1L": "https://finance.yahoo.com/quote/IVL1L.VS/chart/",
  "KNE1L": "https://finance.yahoo.com/quote/KNE1L.VS/chart/",
  "KNR1L": "https://finance.yahoo.com/quote/KNR1L.VS/chart/",
  "LGD1L": "https://finance.yahoo.com/quote/LGD1L.VS/chart/",
  "LHV1T": "https://finance.yahoo.com/quote/LHV1T.TL/chart/",
  "LINDA": "https://finance.yahoo.com/lookup/?s=LINDA",
  "MDARA": "https://finance.yahoo.com/quote/MDARA.RG/chart/",
  "MODE": "https://finance.yahoo.com/lookup/?s=MODE",
  "MRK1T": "https://finance.yahoo.com/quote/MRK1T.TL/chart/",
  "NCN1T": "https://finance.yahoo.com/quote/NCN1T.TL/chart/",
  "NEOFI": "https://finance.yahoo.com/lookup/?s=NEOFI",
  "NTU1L": "https://finance.yahoo.com/quote/NTU1L.VS/chart/",
  "PKG1T": "https://finance.yahoo.com/quote/PKG1T.TL/chart/",
  "PRF1T": "https://finance.yahoo.com/quote/PRF1T.TL/chart/",
  "PZV1L": "https://finance.yahoo.com/quote/PZV1L.VS/chart/",
  "RKB1R": "https://finance.yahoo.com/quote/RKB1R.RG/chart/",
  "ROE1L": "https://finance.yahoo.com/quote/ROE1L.VS/chart/",
  "RSU1L": "https://finance.yahoo.com/quote/RSU1L.VS/chart/",
  "SAF1R": "https://finance.yahoo.com/quote/SAF1R.RG/chart/",
  "SAUNA": "https://finance.yahoo.com/lookup/?s=SAUNA",
  "SCM1R": "https://finance.yahoo.com/quote/SCM1R.RG/chart/",
  "SFG1T": "https://finance.yahoo.com/quote/SFG1T.TL/chart/",
  "SKN1T": "https://finance.yahoo.com/quote/SKN1T.TL/chart/",
  "TAL1T": "https://finance.yahoo.com/quote/TAL1T.TL/chart/",
  "TEL1L": "https://finance.yahoo.com/quote/TEL1L.VS/chart/",
  "TKM1T": "https://finance.yahoo.com/quote/TKM1T.TL/chart/",
  "TPD1T": "https://finance.yahoo.com/quote/TPD1T.TL/chart/",
  "TSM1T": "https://finance.yahoo.com/quote/TSM1T.TL/chart/",
  "TVE1T": "https://finance.yahoo.com/quote/TVE1T.TL/chart/",
  "UTR1L": "https://finance.yahoo.com/quote/UTR1L.VS/chart/",
  "VBL1L": "https://finance.yahoo.com/quote/VBL1L.VS/chart/",
  "VIRSI": "https://finance.yahoo.com/quote/VIRSI.RG/chart/",
  "VLP1L": "https://finance.yahoo.com/quote/VLP1L.VS/chart/",
  "ZMP1L": "https://finance.yahoo.com/quote/ZMP1L.VS/chart/",
  "SE0013876927": "https://finance.yahoo.com/quote/0P0001JFN6.F/chart/",
  "SE0013876950": "https://finance.yahoo.com/quote/0P0001JFN4.F/chart/",
  "SE0013876968": "https://finance.yahoo.com/quote/0P0001JFN9.F/chart/",
  "SE0014261756": "https://finance.yahoo.com/quote/0P0001JOFO.F/chart/",
  "SE0014261764": "https://finance.yahoo.com/quote/0P0001JOFN.F/chart/",
  "SE0014261871": "https://finance.yahoo.com/quote/0P0001JOFL.F/chart/",
  "SE0014261889": "https://finance.yahoo.com/quote/0P0001JOFK.F/chart/",
  "SE0014261897": "https://finance.yahoo.com/quote/0P0001JOFM.F/chart/",
  "SE0014263273": "https://finance.yahoo.com/quote/0P0001LPRD.F/chart/",
  "SE0014263281": "https://finance.yahoo.com/quote/0P0001LPRF.F/chart/",
  "SE0014263299": "https://finance.yahoo.com/quote/0P0001LPRE.F/chart/",
  "SE0015192315": "https://finance.yahoo.com/quote/0P0001LMDT.F/chart/",
  "SE0015192323": "https://finance.yahoo.com/quote/0P0001LMDQ.F/chart/",
  "SE0015192331": "https://finance.yahoo.com/quote/0P0001LMDS.F/chart/",
  "SE0015192349": "https://finance.yahoo.com/quote/0P0001LMDR.F/chart/",
  "SE0015948609": "https://finance.yahoo.com/quote/0P0001MGC9.F/chart/",
  "SE0015948617": "https://finance.yahoo.com/quote/0P0001MGCA.F/chart/",
  "US_PFE": "https://finance.yahoo.com/quote/PFE/",
  "US_NVDA": "https://finance.yahoo.com/quote/NVDA/",
  "US_AAPL": "https://finance.yahoo.com/quote/AAPL/",
  "US_ABBV": "https://finance.yahoo.com/quote/ABBV/",
  "US_AMD": "https://finance.yahoo.com/quote/AMD/",
  "US_AMT": "https://finance.yahoo.com/quote/AMT/",
  "US_AMZN": "https://finance.yahoo.com/quote/AMZN/",
  "US_AVGO": "https://finance.yahoo.com/quote/AVGO/",
  "US_BRK_B": "https://finance.yahoo.com/quote/BRK-B/",
  "US_CAT": "https://finance.yahoo.com/quote/CAT/",
  "US_CEG": "https://finance.yahoo.com/quote/CEG/",
  "US_COP": "https://finance.yahoo.com/quote/COP/",
  "US_COST": "https://finance.yahoo.com/quote/COST/",
  "US_CVX": "https://finance.yahoo.com/quote/CVX/",
  "US_DIS": "https://finance.yahoo.com/quote/DIS/",
  "US_DUK": "https://finance.yahoo.com/quote/DUK/",
  "US_EQIX": "https://finance.yahoo.com/quote/EQIX/",
  "US_FCX": "https://finance.yahoo.com/quote/FCX/",
  "US_GE": "https://finance.yahoo.com/quote/GE/",
  "US_GOOGL": "https://finance.yahoo.com/quote/GOOGL/",
  "US_HD": "https://finance.yahoo.com/quote/HD/",
  "US_JNJ": "https://finance.yahoo.com/quote/JNJ/",
  "US_JPM": "https://finance.yahoo.com/quote/JPM/",
  "US_KO": "https://finance.yahoo.com/quote/KO/",
  "US_LIN": "https://finance.yahoo.com/quote/LIN/",
  "US_LLY": "https://finance.yahoo.com/quote/LLY/",
  "US_MA": "https://finance.yahoo.com/quote/MA/",
  "US_MCD": "https://finance.yahoo.com/quote/MCD/",
  "US_META": "https://finance.yahoo.com/quote/META/",
  "US_MPC": "https://finance.yahoo.com/quote/MPC/",
  "US_MRK": "https://finance.yahoo.com/quote/MRK/",
  "US_MSFT": "https://finance.yahoo.com/quote/MSFT/",
  "US_MU": "https://finance.yahoo.com/quote/MU/",
  "US_NEE": "https://finance.yahoo.com/quote/NEE/",
  "US_NEM": "https://finance.yahoo.com/quote/NEM/",
  "US_NFLX": "https://finance.yahoo.com/quote/NFLX/",
  "US_PG": "https://finance.yahoo.com/quote/PG/",
  "US_PLD": "https://finance.yahoo.com/quote/PLD/",
  "US_RTX": "https://finance.yahoo.com/quote/RTX/",
  "US_SHW": "https://finance.yahoo.com/quote/SHW/",
  "US_SO": "https://finance.yahoo.com/quote/SO/",
  "US_TSLA": "https://finance.yahoo.com/quote/TSLA/",
  "US_V": "https://finance.yahoo.com/quote/V/",
  "US_WELL": "https://finance.yahoo.com/quote/WELL/",
  "US_WMT": "https://finance.yahoo.com/quote/WMT/",
  "US_XOM": "https://finance.yahoo.com/quote/XOM/",
  "US_GEV": "https://finance.yahoo.com/quote/GEV/"
}
;
 function linkName(asset){const m=summary.scopes[scope].assets[asset],box=el('span'),a=el('a',m.ticker||asset);a.href=yahooLinks[asset]||'https://finance.yahoo.com/lookup/?s='+encodeURIComponent(m.ticker||asset);a.target='_blank';a.rel='noopener noreferrer';a.dataset.referenceAsset=asset;a.title='Open Yahoo Finance: '+m.name;box.append(a,el('span',m.name,'reference-name'));return box;}
 function renderPortfolios(){if(!context?.available)return;const policy=get('reference-policy').value,family=get('reference-portfolio-measures').value;
  const p=Object.entries(context.portfolios).filter(([key,r])=>key==='Current'||policy==='ALL'||r.policy===policy).sort((a,b)=>a[0]==='Current'?-1:b[0]==='Current'?1:b[1].netSD.netSD-a[1].netSD.netSD);
  if(family==='netsd')host('reference-portfolio-table',['Model','Policy','netSD ·71 refs','netSD ·'+context.reference_assets+' refs','Change','D · expanded graph','Account netSD · with cash'],p.map(([key,r])=>[r.model,r.policy,num(r.narrow_same_window_netSD.netSD),num(r.netSD.netSD),num(r.delta_netSD),r.netSD.D,num(r.cash_inclusive_netSD.netSD)]));
  else host('reference-portfolio-table',['Model','Policy','Market beta','Annual SD %','Daily ES95 loss %','MES5 loss %','Conditional market-tail difference pp'],p.map(([key,r])=>[r.model,r.policy,num(r.beta),num(r.annualised_SD_pct,2),num(r.ES95_loss_pct,3),num(r.MES5_loss_pct,3),num(r.delta_CoVaR_proxy_pct,3)]));
 }
 function renderAssets(){if(!context?.available)return;const group=get('reference-asset-group').value,family=get('reference-asset-measures').value,meta=summary.scopes[scope].assets;
  const assets=context.reference_names.filter(a=>group==='ALL'||(group==='US'?meta[a].US:meta[a].main_model_input));assets.sort((a,b)=>context.assets[b].netSD.netSD-context.assets[a].netSD.netSD);
  get('reference-asset-note').textContent=`${assets.length} assets. US additions are analysis references; portfolio purchase permissions and quantities are unchanged. `+(family==='garch'?'Parameters use training only; latest/next-session conditional volatility is filtered through '+summary.asof+' without refitting.':'Returns use the selected training context. A dash denotes an undefined or insufficient-sample measure.');
  let headers,rows;
  if(family==='netsd'){headers=['Asset','netSD','OUT','IN','Candidate D','Annual SD %','Mean daily %'];rows=assets.map(a=>{const r=context.assets[a];return [linkName(a),num(r.netSD.netSD),r.netSD.OUT,r.netSD.IN,r.netSD.D,num(r.annualised_SD_pct,2),num(r.mean_daily_pct,4)];});}
  if(family==='risk'){headers=['Asset','Market beta','VaR95 loss %','ES95 loss %','MES5 loss %','Conditional market-tail difference pp','Market-tail days'];rows=assets.map(a=>{const r=context.assets[a];return [linkName(a),num(r.beta),num(r.VaR95_loss_pct,3),num(r.ES95_loss_pct,3),num(r.MES5_loss_pct,3),num(r.delta_CoVaR_proxy_pct,3),r.market_tail_days];});}
  if(family==='network'){headers=['Asset','TO pp','FROM pp','NET pp','Mean DCC with other assets','Zero returns %'];rows=assets.map(a=>{const r=context.assets[a],i=context.reference_names.indexOf(a),m=context.matrices.DCC_mean,mean=m?(m[i].reduce((s,x)=>s+(x||0),0)-1)/(m.length-1):null;return [linkName(a),num(r.connectedness?.TO,2),num(r.connectedness?.FROM,2),num(r.connectedness?.NET,2),num(mean,3),num(100*r.zero_return_fraction,1)];});}
  if(family==='garch'){headers=['Asset','GARCH omega · percent squared','Latest conditional SD %','Next-session SD %','GARCH alpha','GARCH beta','Persistence','Fit'];rows=assets.map(a=>{const g=meta[a].garch;return [linkName(a),g.omega_percent_squared.toPrecision(6),num(g.latest_filtered_sigma_pct,3),num(g.next_session_sigma_pct,3),g.alpha.toPrecision(6),g.beta.toPrecision(6),num(g.persistence,6),g.converged?'Converged':'Diagnostic: '+(g.optimizer_message||g.reason)];});}
  host('reference-asset-table',headers,rows);
 }
 function fillPair(){for(const id of ['reference-row','reference-column']){const select=get(id),old=select.value;select.replaceChildren();context.reference_names.forEach(a=>{const m=summary.scopes[scope].assets[a],o=el('option',(m.ticker||a)+' · '+m.name);o.value=a;select.append(o);});select.value=context.reference_names.includes(old)?old:id==='reference-row'?'VLP1L':'US_PFE';}}
 function matrix(){return context?.matrices?.[get('reference-matrix').value];}
 function showCell(i,j,pin=false){if(!context?.available)return;const m=matrix(),names=context.reference_names;if(i<0||j<0||i>=names.length||j>=names.length)return;const row=names[i],column=names[j],meta=summary.scopes[scope].assets,kind=get('reference-matrix').value;
  if(pin){get('reference-row').value=row;get('reference-column').value=column;}
  get('reference-cell').textContent=`${meta[row].ticker||row} (${meta[row].name}) ← ${meta[column].ticker||column} (${meta[column].name}): ${m?num(m[i][j],kind==='GFEVD'?3:4):'unavailable'}${kind==='GFEVD'?'% of row forecast-error variance':''}`;
 }
 function renderMatrix(){if(!context?.available)return;const canvas=get('reference-heatmap'),ctx=canvas.getContext('2d'),m=matrix(),n=context.reference_names.length,pad=30,size=940;ctx.clearRect(0,0,1000,1000);ctx.fillStyle='#fff';ctx.fillRect(0,0,1000,1000);
  if(!m){ctx.fillStyle='#586873';ctx.font='22px sans-serif';ctx.fillText('Unavailable: insufficient adjacent regime pairs',30,100);get('reference-network-note').textContent=context.connectedness.reason||'Unavailable for this context.';showCell(context.reference_names.indexOf(get('reference-row').value),context.reference_names.indexOf(get('reference-column').value));return;}
  const kind=get('reference-matrix').value,isFEVD=kind==='GFEVD';const max=isFEVD?summary.GFEVD_offdiag_colour_max:1;
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){const value=m[i][j];if(value===null||isFEVD&&i===j){ctx.fillStyle='#ddd';}else if(isFEVD){const x=Math.max(0,Math.min(1,value/max));ctx.fillStyle=`rgb(${Math.round(245-230*x)},${Math.round(250-140*x)},${Math.round(255-105*x)})`;}else{const x=Math.max(-1,Math.min(1,value));ctx.fillStyle=x>=0?`rgb(${Math.round(245-210*x)},${Math.round(245-125*x)},${Math.round(245-90*x)})`:`rgb(235,${Math.round(245+165*x)},${Math.round(245+170*x)})`;}
   ctx.fillRect(pad+j*size/n,pad+i*size/n,Math.ceil(size/n),Math.ceil(size/n));}
  const i=context.reference_names.indexOf(get('reference-row').value),j=context.reference_names.indexOf(get('reference-column').value);ctx.strokeStyle='#111';ctx.lineWidth=2;if(i>=0)ctx.strokeRect(pad,pad+i*size/n,size,size/n);if(j>=0)ctx.strokeRect(pad+j*size/n,pad,size/n,size);ctx.fillStyle='#263e4d';ctx.font='17px sans-serif';ctx.fillText('Rows: receivers / assets · columns: transmitters / assets · fixed order',30,992);
  get('reference-network-note').textContent=isFEVD?`TCI ${num(context.connectedness.TCI,2)}%; ridge λ=${context.connectedness.ridge_lambda}; ${context.connectedness.pairs} genuine adjacent pairs; horizon10 sessions. Off-diagonal colour scale0–${num(max,2)}%, fixed across all contexts; own diagonal is grey and remains available through the selected-cell value.`:kind==='DCC_latest'||kind==='DCC_next'?`Frozen training parameters, filtered through completed session ${summary.asof}. Latest/next-session matrices are shared across regime selections; conditional training averages are available under Mean fitted DCC. Colour scale: orange−1, white0, blue+1.`:`${context.observations} selected training observations. Fixed ${n}-asset order; grey cells have undefined sample correlation. Colour scale: orange−1, white0, blue+1. Correlation is not a causal risk contribution.`;
  showCell(i,j);
 }
 function fitTables(){const d=summary.scopes[scope].DCC_fit,c=context.connectedness;
  host('reference-var-fit',['Parameter','Value'],Object.entries({observations:context.observations,adjacent_pairs:c.pairs,status:c.available?'Available':c.reason,ridge_lambda:c.ridge_lambda,covariance_shrinkage:c.covariance_shrinkage,spectral_radius:c.spectral_radius,TCI_percent:c.TCI}).map(([k,v])=>[k,typeof v==='number'?num(v,5):String(v??'—')]));
  if(c.available){get('reference-var-fit').append(table(['Ridge penalty','Chronological validation MSE'],c.lambdas.map((x,i)=>[num(x,2),num(c.validation_MSE[i],7)])));window.reportTableFit?.();}
  host('reference-dcc-fit',['Parameter','Value'],[['Estimator','Pairwise Gaussian composite likelihood DCC(1,1)'],['Training observations',d.observations],['Fitted a',num(d.a,7)],['Fitted b',num(d.b,7)],['Persistence',num(d.persistence,7)],['Converged',String(d.converged)],['CPU call, seconds',num(d.CPU_seconds,6)],['GPU call, seconds',num(d.GPU_seconds,6)],['Selected DCC backend',d.backend],['CPU/CUDA equality verified',String(d.CPU_GPU_verified)]]);
  get('reference-compute').textContent=`Analysis used ${summary.CPU_workers} CPU workers and ${summary.GPU_available?'one CUDA owner':'CPU only'}. Generalised FEVD CUDA results were checked against float64 CPU results. DCC uses the faster measured backend for this workload. Total analytics calculation: ${num(summary.elapsed_seconds,2)} seconds, excluding data download, report preparation, browser checks and deployment; this is not a full-refresh duration. Energy was not continuously measured for this partial analysis.`;
 }
 function render(){const s=summary.scopes[scope];get('reference-window').textContent=context.available?`${context.reference_assets} asset references + Current reference + evaluated candidate · ${context.observations} selected training observations · common training ${context.train_start}–${context.train_end};126 reserved diagnostic observations ${context.test_start}–${context.test_end}. ${context.unclassified_training} unclassified training dates remain only in Full history.${context.small_sample?' Small regime sample: descriptive empirical scores only.':''}`:context.reason;get('reference-window').className=context.small_sample?'reference-warning':'';
  if(!context.available)return;const cur=context.portfolios.Current;get('reference-headline').replaceChildren(card('Current · expanded historical netSD',num(cur.netSD.netSD),'Invested holdings; candidate D='+cur.netSD.D),card('Current ·71 refs, same window',num(cur.narrow_same_window_netSD.netSD),'Identical observations and marks'),card('Current · change in netSD',num(cur.delta_netSD),'Reference-universe effect'),card('System connectedness · TCI',num(context.connectedness.TCI,2)+'%',context.connectedness.available?context.connectedness.pairs+' adjacent training pairs':context.connectedness.reason));
  fillPair();renderPortfolios();renderAssets();renderMatrix();fitTables();get('reference-snapshot').textContent=`Completed closes through ${summary.asof} · ${summary.US_candidates} candidates + PFE =47 US companies. Long-history reference set116 assets; GEV short-history set117. No new US trade quantities are proposed.`;document.documentElement.dataset.referenceReady='true';window.reportTableFit?.();
 }
 async function load(){const token=++serial;scope=get('reference-scope').value;regime=get('reference-context').value;const meta=summary.scopes[scope].contexts[regime];if(!meta.available){context=meta;render();return;}const key=scope+'-'+regime;if(!cache.has(key)){const response=await fetch('extended-reference/'+key+'.json?v='+summary.version);if(!response.ok)throw Error('Context data HTTP '+response.status);cache.set(key,await response.json());}if(token!==serial)return;context=cache.get(key);render();}
 async function init(){try{const response=await fetch('extended-reference/summary.json?v=ed3bbce0d83f');if(!response.ok)throw Error('Manifest HTTP '+response.status);summary=await response.json();const params=new URLSearchParams(location.search);if(['long','short'].includes(params.get('scope')))get('reference-scope').value=params.get('scope');if(['FULL','R1','R2','R3','R4'].includes(params.get('context')))get('reference-context').value=params.get('context');
  for(const id of ['reference-scope','reference-context'])get(id).addEventListener('change',()=>load().catch(error=>{get('reference-window').textContent=error.message;}));
  for(const id of ['reference-policy','reference-portfolio-measures'])get(id).addEventListener('change',renderPortfolios);
  for(const id of ['reference-asset-group','reference-asset-measures'])get(id).addEventListener('change',renderAssets);
  for(const id of ['reference-row','reference-column','reference-matrix'])get(id).addEventListener('change',renderMatrix);
  get('reference-heatmap').addEventListener('click',event=>{const canvas=event.currentTarget,b=canvas.getBoundingClientRect(),x=(event.clientX-b.left)*1000/b.width,y=(event.clientY-b.top)*1000/b.height,n=context.reference_names.length;showCell(Math.floor((y-30)*n/940),Math.floor((x-30)*n/940),true);renderMatrix();});
  const revealAnchor=()=>{let id;try{id=decodeURIComponent(location.hash.slice(1));}catch(_){return;}const target=get(id);for(let n=target;n;n=n.parentElement)if(n.tagName==='DETAILS')n.open=true;};window.addEventListener('hashchange',revealAnchor);
  await load();revealAnchor();const asset=params.get('asset');if(asset&&context.reference_names.includes(asset)){get('extended-reference-assets').open=true;get('reference-row').value=asset;renderMatrix();const ticker=summary.scopes[scope].assets[asset].ticker||asset;const row=[...get('reference-asset-table').querySelectorAll('tbody tr')].find(r=>r.querySelector('a')?.textContent===ticker);if(row){row.style.background='#fff1ca';row.scrollIntoView({block:'center'});}}
 }catch(error){get('reference-snapshot').textContent='Verified results could not be loaded: '+error.message;document.documentElement.dataset.referenceError=error.message;}}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
