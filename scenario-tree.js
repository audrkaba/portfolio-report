/* Native scenario diagnostics are fetched only when an asset is opened. */
function createScenarioAssetPopup(){
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=(v,d=4)=>Number.isFinite(v)?new Intl.NumberFormat('lt-LT',{minimumFractionDigits:d,maximumFractionDigits:d}).format(v):'—';
 const eur=v=>new Intl.NumberFormat('lt-LT',{style:'currency',currency:'EUR',maximumFractionDigits:4}).format(v);
 const labels={BUY:'PIRKTI',SELL:'PARDUOTI',WAIT:'LAUKTI',CLOSED:'RINKA UŽDARYTA'};
 const colors={BUY:'#087954',SELL:'#b3433b',WAIT:'#7e929e',CLOSED:'#a4afb6'};
 const dialog=document.createElement('dialog');dialog.id='asset-dialog';dialog.setAttribute('aria-labelledby','asset-popup-title');
 dialog.innerHTML='<header class="popup-header"><div><h2 id="asset-popup-title"></h2><p id="asset-popup-context" class="muted"></p></div><button id="asset-popup-close" type="button">Uždaryti ×</button></header><div class="popup-body" id="asset-popup-body"></div>';
 document.body.appendChild(dialog);let context,doc,step=0,token=0;const cache=new Map();
 const body=()=>document.getElementById('asset-popup-body');
 document.getElementById('asset-popup-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{token++;});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
 function metrics(){
  const m=doc.metrics[context.plan],a=m.augmented.values,n=m.augmented.n;
  const card=(label,value)=>`<div class="stat"><span>${esc(label)}</span><strong>${esc(num(value,6))}</strong></div>`;
  return `<h3>Viso šio scenarijaus portfelio rodikliai</h3><p class="popup-help">Tai viso portfelio, o ne pasirinkto aktyvo rodikliai. Naudojama ta pati ${n} grąžų imtis kaip optimizavimo netSD: ${context.data.training_observations} istorinių grąžų ir ${doc.dates.length-1} modeliuotų scenarijaus dienų.</p><div class="popup-metrics">${card('Scenarijaus netSD',m.netSD)}${card('Rachev · α = β = 5 %',a.Rachev)}${card('Sortino · MAR = 0',a.Sortino)}${card('Sharpe · dieninis, Rf = 0',a.Sharpe_daily)}</div><details><summary>Rodiklių apibrėžimai ir tik prognozės laikotarpio diagnostika</summary><p class="popup-help">Istorinė dalis yra hipotetinės pastovių svorių grąžos pagal portfelį po II etapo ir mazgo kainas, įskaitant grynųjų dalį. Prognozės dalis naudoja faktinę modeliuotą turto trajektoriją: pradinius kiekius iki rekursijos ir scenarijaus kiekius po jos. Tai nėra realizuotos sąskaitos istorija.</p><div class="popup-table-scroll"><table><thead><tr><th>Imtis</th><th>N</th><th>netSD</th><th>Rachev</th><th>Sortino</th><th>Sharpe dieninis</th><th>Sharpe metinis (252)</th></tr></thead><tbody>${['augmented','forecast'].map(key=>{const r=m[key],v=r.values;return `<tr data-metric-sample="${key}"><td>${key==='augmented'?'Istorija + scenarijus':'Tik prognozės dienos'}</td><td>${r.n}</td><td>${key==='augmented'?num(m.netSD,6):'Netaikoma'}</td>${['Rachev','Sortino','Sharpe_daily','Sharpe_annualized'].map(k=>`<td title="${esc(r.warnings[k]||'')}">${num(v[k],6)}</td>`).join('')}</tr>`;}).join('')}</tbody></table></div><p class="popup-help">20 prognozės grąžų yra maža imtis, ypač Rachev uodegų rizikai. Metinis Sharpe yra skalės 252 perskaičiavimas, o ne vieno mėnesio rezultatas per metus. „—“ reiškia neapibrėžtą rodiklį, pavyzdžiui, kai nėra neigiamų grąžų ar dispersijos. Skaičiuota su R PerformanceAnalytics; Rf = MAR = 0. netSD tik prognozės imčiai atskirai nepervertinamas, kad nebūtų pakeistas jo etalonas.</p></details>`;
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
  pane('Scenarijaus kaina ir Bollinger juostos (20; 2σ) · taškų spalvos: techninis signalas',240,[{values:points.map(p=>p.BB_lower),color:'#9aabb5',dash:true},{values:points.map(p=>p.BB_upper),color:'#9aabb5',dash:true},{values:points.map(p=>p.price),color:'#087c92',width:2.5}],{price:true});
  pane('Stochastic RSI · %K mėlyna / %D oranžinė',105,[{values:points.map(p=>p.StochRSI_K===null?null:p.StochRSI_K*100),color:'#247ac0'},{values:points.map(p=>p.StochRSI_D===null?null:p.StochRSI_D*100),color:'#d88b38'}],{lo:0,hi:100});
  pane('MACD (12, 26, 9) · MACD mėlyna / signalinė oranžinė / histograma',130,[{values:points.map(p=>p.MACD),color:'#247ac0'},{values:points.map(p=>p.MACD_signal),color:'#d88b38'}],{hist:true,bottom:true});
  return out.join('');
 }
 function action(){
  const d=context.data,p=d.policies[context.plan],i=d.assets.findIndex(a=>a.id===context.asset),node=d.leaves[context.leafIndex].node;
  if(step===0){const change=p.units[i]-d.assets[i].current;return 'I etapo modelio sandoris: '+(change>0?'+':'')+change+' vnt.';}
  if(step===d.recourse_step){const change=p.decisions[node].units[i]-p.units[i];return 'II etapo modelio sandoris: '+(change>0?'+':'')+change+' vnt. · po sandorio '+p.decisions[node].units[i]+' vnt.';}
  return 'Šią dieną modelis papildomo portfelio perbalansavimo nenumato.';
 }
 function update(){
  const a=doc.assets[context.asset],points=a.points,p=points[step];
  document.getElementById('popup-signal').innerHTML=`<strong>${esc(doc.dates[step])} · ${esc(eur(p.price))} · <span style="color:${colors[p.signal]}">${labels[p.signal]}</span></strong><br>Techniniai balsai: PIRKTI ${p.buy_votes}/4 · PARDUOTI ${p.sell_votes}/4.<br>${esc(action())}<div class="popup-indicators"><span>RSI(14): ${num(p.RSI,2)}</span><span>Stoch RSI K/D: ${num(p.StochRSI_K===null?null:p.StochRSI_K*100,2)} / ${num(p.StochRSI_D===null?null:p.StochRSI_D*100,2)}</span><span>MACD / signalinė: ${num(p.MACD)} / ${num(p.MACD_signal)}</span></div>`;
  document.getElementById('popup-charts').innerHTML=charts(points);
 }
 function render(){
  const d=context.data,asset=d.assets.find(a=>a.id===context.asset),l=d.leaves[context.leafIndex];
  document.getElementById('asset-popup-title').textContent=asset.id+' · '+asset.name;
  document.getElementById('asset-popup-context').textContent=l.id+' · '+d.policies[context.plan].label;
  const a=doc.assets[context.asset];
  body().innerHTML=`<nav class="popup-external-links" aria-label="External instrument pages">${(a.links||[]).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} &nearr;</a>`).join(' &middot; ')}</nav>${metrics()}<div class="popup-controls"><label>Aktyvas<select id="popup-asset" class="popup-asset-picker">${d.assets.map(a=>`<option value="${esc(a.id)}"${a.id===context.asset?' selected':''}>${esc(a.id+' · '+a.name)}</option>`).join('')}</select></label><label>Scenarijaus diena<select id="popup-step">${doc.dates.map((date,i)=>`<option value="${i}"${i===step?' selected':''}>${esc(date)}${i===0?' · žinoma pradinė kaina':i===d.recourse_step?' · II etapas':''}</option>`).join('')}</select></label></div><div class="popup-signal" id="popup-signal" role="status"></div><div class="popup-charts" id="popup-charts"></div><p class="popup-help">Pradinės žinomos kainos / NAV data: ${esc(a.origin)}. Juostos ir indikatoriai skaičiuojami iš istorijos ir tik iki pasirinktos dienos esančių scenarijaus kainų. Grafikai turi bendrą laiko ašį: 20 ankstesnių prekybos dienų, pradinė žinoma kaina ir 20 scenarijaus dienų. Žydra vertikali linija skiria istoriją nuo prognozės. Techniniai signalai yra diagnostika: modelio pirkimams BUY nereikia, o sandoriai numatyti tik I ir II etapuose.</p><details><summary>Visų scenarijaus dienų kainos ir signalai</summary><div class="popup-table-scroll"><table class="popup-day-table"><thead><tr><th>Data</th><th>Kaina EUR</th><th>Indikacija</th><th>BUY balsai</th><th>SELL balsai</th><th>RSI</th><th>Stoch K %</th><th>Stoch D %</th><th>MACD</th><th>Signalinė</th><th>Bollinger apačia</th><th>Bollinger viršus</th></tr></thead><tbody>${a.points.map((p,i)=>`<tr data-step="${i}"><td>${esc(doc.dates[i])}</td><td>${num(p.price)}</td><td style="color:${colors[p.signal]}">${labels[p.signal]}</td><td>${p.buy_votes}</td><td>${p.sell_votes}</td><td>${num(p.RSI,2)}</td><td>${num(p.StochRSI_K===null?null:p.StochRSI_K*100,2)}</td><td>${num(p.StochRSI_D===null?null:p.StochRSI_D*100,2)}</td><td>${num(p.MACD)}</td><td>${num(p.MACD_signal)}</td><td>${num(p.BB_lower)}</td><td>${num(p.BB_upper)}</td></tr>`).join('')}</tbody></table></div></details>`;
  document.getElementById('popup-step').addEventListener('change',e=>{step=Number(e.target.value);update();});
  document.getElementById('popup-asset').addEventListener('change',e=>{context.asset=e.target.value;render();});update();
 }
 async function open(c){
  context={...c};step=c.initial?0:c.valuation==='end'?c.data.dates.length-1:c.data.recourse_step;
  const own=++token;document.getElementById('asset-popup-title').textContent=c.asset;document.getElementById('asset-popup-context').textContent='Kraunamos scenarijaus detalės…';body().innerHTML='<p class="popup-loading">Kraunami patikrinti kainų, signalų ir portfelio rodiklių duomenys…</p>';
  if(!dialog.open)dialog.showModal();
  try{const url=c.data.leaves[c.leafIndex].details_url;if(!url)throw new Error('Scenarijaus detalių duomenys neparuošti');if(!cache.has(url))cache.set(url,fetch(url).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).catch(e=>{cache.delete(url);throw e;}));const loaded=await cache.get(url);if(own!==token||!dialog.open)return;doc=loaded;render();}
  catch(error){if(own===token&&dialog.open)body().innerHTML='<p role="alert">Nepavyko įkelti detalių: '+esc(error.message)+'. Uždarykite langą ir bandykite dar kartą.</p>';}
 }
 return {open};
}

﻿/* Standalone viewer of saved model outputs. No optimisation or order execution. */
(()=>{'use strict';
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=(n,d=2)=>new Intl.NumberFormat('lt-LT',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
const euro=n=>new Intl.NumberFormat('lt-LT',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
const pct=n=>number(n*100,3)+' %';
const date=s=>new Intl.DateTimeFormat('lt-LT',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'UTC'}).format(new Date(s+'T12:00:00Z'));
const regimes=['','R1 · Baltijos ir pasaulio biržos ramios','R2 · Baltijos biržų stresas (pasaulio ramios)','R3 · Pasaulio biržų stresas (Baltijos ramios)','R4 · Globalus biržų stresas'];
const treeRegimes=['','R1 · Abi rinkų grupės ramios','R2 · Baltijos biržų stresas','R3 · Pasaulio biržų stresas','R4 · Globalus biržų stresas'];
let data,state,manualZoom=false;
const assetPopup=createScenarioAssetPopup();
const selected=()=>data.policies[state.plan],leaf=()=>data.leaves[state.leaf],decision=()=>selected().decisions[state.node];
function stat(label,value){return `<div class="stat"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;}
function marketState(){
 const s=data.market_state;if(!s)return;
 const m=s.market,l=s.model,p=n=>number(n*100,2)+' %',pp=n=>(n>0?'+':'')+number(n*100,2)+' p. p.';
 const current=m.dominant-1,growth=m.largest_increase-1;
 $('market-state-summary').innerHTML=stat('Labiausiai tikėtinas režimas pagal naujausius duomenis',regimes[m.dominant]+' · '+p(m.probabilities[current]))+stat('Labiausiai per savaitę padidėjusi tikimybė',m.change[growth]>1e-12?regimes[m.largest_increase]+' · '+pp(m.change[growth]):'Nė vieno režimo tikimybė nepadidėjo');
 $('market-state-dates').textContent='Rinkos duomenys: '+date(m.source_date)+'; palyginimas su '+date(m.previous_source_date)+'. Dabartinio režimo tikimybė: '+p(m.previous[current])+' → '+p(m.probabilities[current])+' ('+pp(m.change[current])+').';
 function rows(v){return v.probabilities.map((value,i)=>`<tr data-regime="${i+1}"${i+1===v.dominant?' class="dominant-regime"':''}><td>${esc(regimes[i+1])}</td><td>${esc(p(v.previous[i]))}</td><td>${esc(p(value))}</td><td class="${v.change[i]>0?'probability-rise':'muted'}">${esc(pp(v.change[i]))}</td></tr>`).join('');}
 $('market-state-table').querySelector('tbody').innerHTML=rows(m);$('model-state-table').querySelector('tbody').innerHTML=rows(l);
 $('market-state-model').textContent='Medžio pradinis vertinimas: '+regimes[l.dominant]+' · '+p(l.probabilities[l.dominant-1])+'. Taikant '+s.lag_business_days+' darbo dienų informacijos vėlavimą, naudoti '+date(l.source_date)+' rinkos duomenys. Šio režimo savaitės pokytis: '+pp(l.change[l.dominant-1])+'. Naujausių duomenų rodymas nekeičia išsaugotų scenarijų tikimybių.';
 $('model-state-dates').textContent='Medžio vertinimo datos: '+date(l.previous_date)+' → '+date(l.date)+'. Joms naudoti rinkos stebėjimai: '+date(l.previous_source_date)+' → '+date(l.source_date)+'.';
 if(s.initial_condition){
  const r=s.initial_condition.regime,risk=s.conditional_regime_risk;
  $('market-state-model').textContent='Šio perskaičiavimo prielaida: pradinis '+regimes[r]+' laikomas žinomu (100 %). Tai naudotojo pasirinkta sąlyga, o ne HMM tikimybės padidinimas iki 100 %. Prognozėje leidžiami perėjimai į visus keturis režimus; produkcijai naudojama naujausia stebėta rinkos informacija.';
  $('model-state-details').querySelector(':scope > summary').textContent='Informacinis HMM vertinimas su 2 darbo dienų vėlavimu (šio medžio pradžiai nenaudojamas)';
  $('model-state-table').querySelectorAll('thead th')[2].textContent='Su 2 d. vėlavimu';
  $('model-state-dates').textContent='Informacinio HMM palyginimo datos: '+date(l.previous_date)+' → '+date(l.date)+'. Rinkos stebėjimai: '+date(l.previous_source_date)+' → '+date(l.source_date)+'.';
  const notice=$('initial-condition-risk');notice.hidden=false;
  notice.textContent='Pradedant iš R'+r+': P(R4 kitame modelio žingsnyje) = '+p(risk.next_step_R4)+'; P(R4 po '+risk.horizon_steps+' žingsnių, keturių savaičių pabaigoje) = '+p(risk.terminal_R4)+'; P(bent kartą patekti į R4 per šį laikotarpį) = '+p(risk.ever_R4)+'. Tai trys skirtingi įvykiai. Reprezentatyvių scenarijų galutinių režimų tikimybės suderintos su Markovo matricos prognoze.';
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
 boxes+=box(16,445,190,91,'root',0,['Bendras I etapo planas','P = 100 %',euro(selected().cash)+' grynųjų'],state.stage==='initial');
 for(let r=1;r<=4;r++){
  const members=data.leaves.map((l,i)=>({l,i})).filter(v=>v.l.regime===r),total=members.reduce((s,v)=>s+v.l.probability,0),center=142+(r-1)*245;
  const activeR=state.stage==='recourse'&&active.regime===r;
  edges+=curved(206,490,300,center,activeR?'active':'',1+8*total);
  boxes+=box(300,center-39,245,78,'regime',r,[treeRegimes[r],'P(R) = '+pct(total),members.length+' atskiri II etapo sprendiniai'],activeR);
  members.sort((a,b)=>a.l.cluster-b.l.cluster).forEach(({l,i},j)=>{
   const yy=center-106+j*48,p=selected(),changes=p.decisions[l.node].units.filter((q,k)=>q!==p.units[k]).length,chosen=state.stage==='recourse'&&state.leaf===i;
   edges+=curved(545,center,650,yy+22,chosen?'active':'',1+5*l.probability/total);
   boxes+=box(650,yy,498,44,'leaf',i,[data.nodes[l.node].label+' · R'+r+' / K'+l.cluster+' · P = '+pct(l.probability),'Atskiras portfelis · '+changes+' aktyvų kiekio pokyčiai'],chosen);
  });
 }
 $('graph').innerHTML=`<svg viewBox="0 0 1170 1020" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="20 scenarijų ir atskirų rekursijos sprendinių"><text class="tree-heading" x="20" y="35">I etapas: bendri kiekiai</text><text class="tree-heading" x="300" y="35">Režimai: tik grupavimas</text><text class="tree-heading" x="650" y="35">II etapas: 20 atskirų portfelių · ${esc(date(data.dates[data.recourse_step]))}</text>${edges}${boxes}</svg>`;
 zoom();
}
function tree(){
 if(data.full_revelation){fullTree();return;}
 const n=state.node,active=leaf(),node=data.nodes[n];let edges='',boxes='';
 const root={x:16,y:445,w:190,h:91};
 boxes+=box(root.x,root.y,root.w,root.h,'root',0,['Pradinis planas','P = 100 %',euro(selected().cash)+' grynųjų'],state.stage==='initial');
 data.nodes.forEach((d,i)=>{const y=300+i*114,cy=y+42;edges+=curved(206,490,264,cy,i===n?'active':'',1+10*d.probability);boxes+=box(264,y,205,84,'node',i,[d.label+' · P = '+pct(d.probability),'2 d. pokytis: '+pct(d.current_move),'Rekursija pagal '+d.label],i===n&&state.stage==='recourse');});
 for(let r=1;r<=4;r++){
  const members=data.leaves.map((l,i)=>({l,i})).filter(v=>v.l.node===n&&v.l.regime===r);if(!members.length)continue;
  const total=members.reduce((s,v)=>s+v.l.probability,0),center=142+(r-1)*245;
  edges+=curved(469,342+n*114,548,center,'future-edge'+(state.stage==='recourse'&&active.regime===r?' active':''),1+7*total/node.probability);
  boxes+=box(548,center-39,214,78,'regime',r,[treeRegimes[r],'P(R | '+node.label+') = '+pct(total/node.probability),'P(N ir R) = '+pct(total)],state.stage==='recourse'&&active.regime===r,true);
  members.sort((a,b)=>a.l.cluster-b.l.cluster).forEach(({l,i},j)=>{const yy=center-106+j*48;edges+=curved(762,center,844,yy+21,'future-edge'+(state.stage==='recourse'&&state.leaf===i?' active':''),1+5*l.probability/total);boxes+=box(844,yy,304,42,'leaf',i,['K'+l.cluster+' · P(visa šaka) = '+pct(l.probability)],state.stage==='recourse'&&state.leaf===i,true);});
 }
 $('graph').innerHTML=`<svg viewBox="0 0 1170 1020" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Scenarijų medžio šakos"><rect x="520" y="8" width="640" height="1000" rx="12" fill="#f5f8fc"/><text class="tree-heading" x="20" y="35">I etapas</text><text class="tree-heading" x="264" y="35">II etapas · ${esc(date(data.dates[data.recourse_step]))}</text><text class="tree-heading" x="548" y="35">Ateitis: rekursijos momentu nežinoma</text>${edges}${boxes}</svg>`;
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
 $('wealth-chart').innerHTML=`<svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Pasirinktos šakos modeliuota turto vertė su rekursija ir be jos"><title>Modeliuota portfelio vertė, EUR</title>${grid}<line x1="${x(data.recourse_step)}" x2="${x(data.recourse_step)}" y1="${top}" y2="${height-bottom}" stroke="#8a9ca7" stroke-dasharray="3 4"/><path d="${line(baseline)}" fill="none" stroke="#8898a3" stroke-width="2" stroke-dasharray="5 4"/><path d="${line(values)}" fill="none" stroke="#087c92" stroke-width="2.8"/></svg>`;
}
function leafOptions(){
 $('leaf').innerHTML=[1,2,3,4].map(r=>`<optgroup label="${esc(regimes[r])}">${data.leaves.map((l,i)=>({l,i})).filter(v=>(data.full_revelation||v.l.node===state.node)&&v.l.regime===r).map(({l,i})=>`<option value="${i}"${i===state.leaf?' selected':''}>${esc(data.nodes[l.node].label)} · K${l.cluster} · ${esc(pct(l.probability))} bendra tikimybė</option>`).join('')}</optgroup>`).join('');
 $('leaf').disabled=state.stage==='initial';
}
function details(){
 const p=selected(),l=leaf(),d=decision(),result=p.results[state.leaf],members=data.leaves.filter(x=>x.node===state.node).length;
 if(state.stage==='initial'){
  $('selection-title').textContent='Pradinis sprendimas · '+p.label;
  $('selection-description').textContent='Pirkimai ir pardavimai prieš būsimą kainų pokytį. Pradinis planas bendras visiems '+data.leaves.length+' scenarijams.';
  $('detailstats').innerHTML=stat('Pradinė investuota suma',euro(data.budget-p.cash))+stat('Grynieji po I etapo',euro(p.cash))+stat('Tikėtinas netSD',number(p.expected_netSD,6))+stat('Tikėtina horizonto grąža',pct(p.expected_return));
  $('decision-note').textContent='Pradiniai kiekiai nežino, kuris N1–N4 mazgas bus pasiektas. Norėdami pamatyti sąlyginę rekursiją, pasirinkite stebimą mazgą arba galutinę šaką.';
  $('wealth-chart').hidden=true;document.querySelector('.legend').hidden=true;document.querySelector('.chart-note').hidden=true;
 }else{
  $('selection-title').textContent=state.valuation==='node'?data.nodes[l.node].label+' · Portfelis po rekursijos':data.nodes[l.node].label+' → R'+l.regime+' → K'+l.cluster;
  $('selection-description').textContent=state.valuation==='node'?'Šio mazgo sudėtis bendra jo ateities šakoms. Scenarijaus rodikliams pasirinkta šaka: '+l.id+'.':regimes[l.regime]+'. Galutinis scenarijus: '+l.id+'.';
  $('detailstats').innerHTML=stat('Bendra šakos tikimybė',pct(l.probability))+stat('P(šaka | N'+(l.node+1)+')',pct(l.conditional_node))+stat('Galutinė turto vertė',euro(result.final_wealth))+stat('Horizonto grąža',pct(result.horizon_return))+stat('Šakos netSD · OUT / IN',number(result.netSD,6)+' · '+result.OUT+' / '+result.IN)+stat('Grynieji po rekursijos',euro(d.cash))+stat('P(K | N, R)',pct(l.conditional_regime))+stat('Tikslas po baudos',number(result.objective,6));
  $('decision-note').innerHTML=`<strong>${esc(data.nodes[state.node].label)} rekursija bendra visoms ${members} šio mazgo ateities šakoms.</strong> Pasirinkus kitą R ar K tame pačiame mazge sandorių kiekiai nesikeičia. Keičiasi šakos tikimybė, galutinės kainos ir rezultatai.`;
  if(data.full_revelation){
   const pr=data.leaves.filter(x=>x.regime===l.regime).reduce((s,x)=>s+x.probability,0);
   $('selection-title').textContent=data.nodes[l.node].label+' · R'+l.regime+' / K'+l.cluster;
   $('selection-description').textContent='Atskiras šio scenarijaus II etapo portfelis: '+l.id+'. Kiekiai parenkami žinant visą scenarijų.';
   $('detailstats').innerHTML=stat('Scenarijaus P(s)',pct(l.probability))+stat('Režimo P(R)',pct(pr))+stat('Klasterio P(K | R)',pct(l.probability/pr))+stat('Galutinė turto vertė',euro(result.final_wealth))+stat('Horizonto grąža',pct(result.horizon_return))+stat('netSD · OUT / IN',number(result.netSD,6)+' · '+result.OUT+' / '+result.IN)+stat('Grynieji po II etapo',euro(d.cash))+stat('Tikslas po baudos',number(result.objective,6));
   $('decision-note').innerHTML=`<strong>${esc(data.nodes[state.node].label)} turi atskirą II etapo kiekių vektorių.</strong> Kitam scenarijui leidžiami kiti kiekiai. Pirmojo etapo planas bendras visiems 20 scenarijų. Pagal pasirinktą modelio prielaidą II etape jau žinoma visa šio scenarijaus trajektorija.`;
  }
  $('wealth-chart').hidden=false;document.querySelector('.legend').hidden=false;document.querySelector('.chart-note').hidden=false;chart(result.wealth,result.no_recourse_wealth);
 }
}
function showPanel(panel){
 $('portfolio-preview').hidden=panel!=='portfolio';$('outcome-panel').hidden=panel!=='outcomes';
 $('show-portfolio').setAttribute('aria-pressed',String(panel==='portfolio'));$('show-outcomes').setAttribute('aria-pressed',String(panel==='outcomes'));
}
function quantityWithChange(quantity,before){const delta=quantity-before;return `${quantity} (${delta>0?'+':''}${delta})`;}
function composition(){
 const p=selected(),initial=state.stage==='initial',end=!initial&&state.valuation==='end',d=decision();
 const units=initial?p.units:d.units,prices=initial?data.assets.map(a=>a.price):end?leaf().terminal_prices:data.nodes[state.node].prices,cash=initial?p.cash:d.cash;
 const total=units.reduce((s,q,i)=>s+q*prices[i],cash);
 for(const v of ['node','end']){const button=$('valuation-'+v);button.disabled=initial;button.setAttribute('aria-pressed',String(!initial&&state.valuation===v));}
 const rows=data.assets.map((a,i)=>({a,q:units[i],before:initial?a.current:p.units[i],value:units[i]*prices[i]})).filter(r=>$('preview-filter').value==='UPDATES'?r.q!==r.before:r.q>0).sort((a,b)=>b.value-a.value);
 $('portfolio-date').textContent=initial?'Pradinis planas pagal '+date(data.as_of)+' kainas.':end?'Kiekiai po '+data.nodes[state.node].label+' rekursijos; vertės pagal pasirinktos šakos pabaigos kainas ('+date(data.dates.at(-1))+').':'Portfelis iškart po '+data.nodes[state.node].label+' rekursijos ('+date(data.dates[data.recourse_step])+'), pagal mazgo kainas.';
 $('portfolio-preview').querySelector('tbody').innerHTML=rows.map(r=>`<tr data-asset="${esc(r.a.id)}" data-units="${r.q}" data-value="${r.value}"><td><button type="button" class="asset-trigger" data-asset-popup="${esc(r.a.id)}"><strong>${esc(r.a.id)}</strong><small>${esc(r.a.name)}</small></button></td><td>${quantityWithChange(r.q,r.before)}</td><td>${esc(euro(r.value))}</td><td>${esc(pct(r.value/total))}</td></tr>`).join('')+`<tr data-cash="true"><td><strong>Grynieji</strong></td><td>—</td><td>${esc(euro(cash))}</td><td>${esc(pct(cash/total))}</td></tr>`;
 $('portfolio-total').textContent=rows.length+' aktyvų · bendra vertė '+euro(total)+'.';
}
function orders(){
 const p=selected(),l=leaf(),d=decision(),initial=state.stage==='initial',units=initial?p.units:d.units,before=initial?data.assets.map(a=>a.current):p.units,prices=initial?data.assets.map(a=>a.price):data.nodes[state.node].prices;
 const changes=units.map((q,i)=>q-before[i]);const buys=changes.reduce((s,q,i)=>s+Math.max(q,0)*prices[i],0),sells=changes.reduce((s,q,i)=>s+Math.max(-q,0)*prices[i],0);
 $('orders-title').textContent=initial?'Pradinio portfelio sudėtis ir sandoriai':data.nodes[state.node].label+' · Portfelio sudėtis po rekursijos';
 $('orders-subtitle').textContent=initial?'Dabartinės patvirtintos pozicijos → siūlomas pradinis planas.':'Pradinis planas → šio modelio mazgo sąlyginis portfelis. Sandoriai vykdomi modeliuotomis mazgo kainomis.';
 const headers=['Aktyvas','Dabar','Po I etapo','Po II etapo','Šio etapo pokytis','Veiksmas','Etapo kaina, EUR','Sandorio vertė, EUR','Vertė scenarijaus pabaigoje, EUR'];
 $('orders-table').querySelector('thead').innerHTML='<tr>'+headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr>';
 let count=0;
 $('orders-table').querySelector('tbody').innerHTML=data.assets.map((a,i)=>{
  const change=changes[i];if($('only-trades').checked?change===0:!(a.current||p.units[i]||units[i]))return '';count++;
  const action=change>0?'PIRKTI':change<0?'PARDUOTI':'LAIKYTI',cls=change>0?'buy':change<0?'sell':'hold';
  const final=initial?'—':euro(units[i]*l.terminal_prices[i]);
  return `<tr data-asset="${esc(a.id)}" data-change="${change}"><td><button type="button" class="asset-trigger" data-asset-popup="${esc(a.id)}"><strong>${esc(a.id)}</strong><small>${esc(a.name)}</small></button></td><td>${a.current}</td><td>${quantityWithChange(p.units[i],a.current)}</td><td>${initial?'—':quantityWithChange(units[i],p.units[i])}</td><td class="${cls}">${change>0?'+':''}${change}</td><td class="${cls}">${action}</td><td>${esc(number(prices[i],4))}</td><td>${change?esc(euro(Math.abs(change)*prices[i])):'—'}</td><td>${final}</td></tr>`;
 }).join('');
 if(!count)$('orders-table').querySelector('tbody').innerHTML='<tr><td colspan="9">Šiame etape sandorių nėra. Nuimkite filtrą, kad matytumėte laikomas pozicijas.</td></tr>';
 const cash=initial?p.cash:d.cash;let info=`<span>Pirkimai: <strong>${esc(euro(buys))}</strong></span><span>Pardavimai: <strong>${esc(euro(sells))}</strong></span><span>Grynieji po etapo: <strong>${esc(euro(cash))}</strong></span>`;
 if(!initial)info+=`<span>Turto vertė mazge: <strong>${esc(euro(d.wealth_before))}</strong></span><span>Rekursijos poveikis galutinei vertei: <strong>${esc(euro(p.results[state.leaf].final_wealth-p.results[state.leaf].no_recourse_wealth.at(-1)))}</strong></span>`;
 $('cashline').innerHTML=info;
}
function render(){
 $('plan').value=state.plan;$('node').value=state.node;$('initial').setAttribute('aria-pressed',String(state.stage==='initial'));
 const p=selected();$('topstats').innerHTML=stat('Pradinis biudžetas',euro(data.budget))+stat('Grynieji po I etapo',euro(p.cash))+stat('Tikėtinas netSD',number(p.expected_netSD,6))+stat('Medžio struktūra',data.nodes.length+' mazgai · '+data.leaves.length+' šakų');
 leafOptions();tree();details();composition();orders();writeURL();$('copy-status').textContent='';
 document.title=(state.stage==='initial'?'Pradinis planas':leaf().id)+' · Scenarijų medis';
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
 $('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('copy-status').textContent='Pasirinktos šakos nuoroda nukopijuota.';}catch{$('copy-status').textContent='Šakos nuoroda: '+location.href;}});
}
async function start(){
 const source=document.querySelector('script[data-source]').dataset.source;const response=await fetch(source);if(!response.ok)throw new Error('Duomenų atsakymas: '+response.status);data=await response.json();
 if(data.schema!==1||Math.abs(data.leaves.reduce((s,l)=>s+l.probability,0)-1)>1e-9)throw new Error('Neteisingi scenarijų duomenys');
 const query=new URLSearchParams(location.search),plan=Object.hasOwn(data.policies,query.get('plan'))?query.get('plan'):'main';
 let n=Number(query.get('node'));if(!query.has('node')||!data.nodes[n])n=data.nodes.reduce((best,v)=>v.probability>data.nodes[best].probability?v.id:best,0);
 let index=data.leaves.findIndex(l=>l.id===query.get('leaf'));if(index>=0)n=data.leaves[index].node;else index=bestLeaf(n);
 state={plan,node:n,leaf:index,stage:query.get('stage')==='initial'?'initial':'recourse',valuation:query.get('valuation')==='end'?'end':'node'};
 $('plan').innerHTML=Object.entries(data.policies).map(([key,p])=>`<option value="${key}">${esc(p.label)}</option>`).join('');
 $('node').innerHTML=data.nodes.map(n=>{const l=data.leaves.find(l=>l.node===n.id);return `<option value="${n.id}">${n.label}${data.full_revelation?' · R'+l.regime+' / K'+l.cluster:''} · ${esc(pct(n.probability))}</option>`;}).join('');
 if(data.full_revelation){
  $('model-information').innerHTML='<strong>20 scenarijų ir 20 atskirų rekursijos sprendinių.</strong> Tai keturi režimai × penki klasteriai. Pirmojo etapo planas bendras; antrajame etape visą scenarijų laikome paaiškėjusiu ir kiekvienam parenkame atskirus kiekius. Kelių scenarijų optimalūs kiekiai gali sutapti, tačiau jie neprivalo būti vienodi.';
  $('tree-description').textContent='Spauskite bet kurį S01–S20 scenarijų: dešinėje matysite jo portfelio sudėtį. Režimų blokai yra tik grupavimas, o ne papildomi rekursijos sprendimai.';
  $('method-information').innerHTML='<summary>Kaip skaityti medį ir tikimybes</summary><p>Modelyje yra vienas bendras pirmojo etapo kiekių vektorius ir 20 atskirų antrojo etapo vektorių, po vieną kiekvienam režimo ir klasterio deriniui. Tarp šių 20 vektorių nėra privalomų lygybės apribojimų.</p><p><strong>Pasirinkta informacijos prielaida:</strong> antrojo etapo dieną visas scenarijus, įskaitant likusią mėnesio trajektoriją, laikomas paaiškėjusiu. Tai stipresnė informacija nei vien pirmųjų dviejų dienų kainos. Rezultatai nereiškia, kad realiame pasaulyje tuo metu bus žinomos būsimos kainos.</p><p>20 scenarijų gauti iš 12 000 modeliuotų trajektorijų, sugrupavus pagal 4 galutinius režimus ir 5 klasterius. Iš kiekvieno derinio išsaugota viena reprezentatyvi trajektorija, o tikimybės sumuotos. P(s) = P(R) × P(K | R). Visų 20 scenarijų tikimybės sudaro 100 %.</p><p>Paspaudus scenarijų matomi jo antrojo etapo kiekiai, grynieji ir svoriai. Paspaudus pirmojo etapo planą — bendras pradinis portfelis. Vertės pagal antrojo etapo kainas ir prognozės pabaigos kainas aiškiai pažymėtos. Optimizuojamas tikėtinas netSD atėmus baudas, todėl rekursija neprivalo padidinti turto vertės kiekvienoje šakoje.</p><p>Rodomi modelio planai, ne įvykdyti pavedimai. Pirkimams BUY signalo nereikia; pardavimams taikomos pasirinktos strategijos sąlygos. Paieška heuristinė, globalus optimalumas neįrodytas. <a href="index.html#multifrequency-forecasts">Metodika ir modelio rezultatai →</a></p>';
 }
 $('snapshot').textContent='Duomenų pjūvis: '+date(data.as_of)+' · Rekursija po '+data.recourse_step+' žingsnių: '+date(data.dates[data.recourse_step])+' · Prognozės pabaiga: '+date(data.dates.at(-1))+'.';
 marketState();$('app').hidden=false;attach();render();fit();document.documentElement.dataset.ready='true';
}
start().catch(error=>{$('load-error').hidden=false;$('load-error').textContent='Nepavyko įkelti scenarijų medžio. Atnaujinkite puslapį arba grįžkite į pagrindinę ataskaitą. '+error.message;});
})();
