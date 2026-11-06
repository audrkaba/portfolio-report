/* Standalone viewer of saved model outputs. No optimisation or order execution. */
(()=>{'use strict';
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=(n,d=2)=>new Intl.NumberFormat('lt-LT',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
const euro=n=>new Intl.NumberFormat('lt-LT',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
const pct=n=>number(n*100,3)+' %';
const date=s=>new Intl.DateTimeFormat('lt-LT',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'UTC'}).format(new Date(s+'T12:00:00Z'));
const regimes=['','R1 · Abu ramūs','R2 · Baltijos stresas','R3 · Pasaulio stresas','R4 · Abu įtempti'];
let data,state,manualZoom=false;
const selected=()=>data.policies[state.plan],leaf=()=>data.leaves[state.leaf],decision=()=>selected().decisions[state.node];
function stat(label,value){return `<div class="stat"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;}
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
  boxes+=box(300,center-39,245,78,'regime',r,[regimes[r],'P(R) = '+pct(total),members.length+' atskiri II etapo sprendiniai'],activeR);
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
  boxes+=box(548,center-39,214,78,'regime',r,[regimes[r],'P(R | '+node.label+') = '+pct(total/node.probability),'P(N ir R) = '+pct(total)],state.stage==='recourse'&&active.regime===r,true);
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
function composition(){
 const p=selected(),initial=state.stage==='initial',end=!initial&&state.valuation==='end',d=decision();
 const units=initial?p.units:d.units,prices=initial?data.assets.map(a=>a.price):end?leaf().terminal_prices:data.nodes[state.node].prices,cash=initial?p.cash:d.cash;
 const total=units.reduce((s,q,i)=>s+q*prices[i],cash);
 for(const v of ['node','end']){const button=$('valuation-'+v);button.disabled=initial;button.setAttribute('aria-pressed',String(!initial&&state.valuation===v));}
 const rows=data.assets.map((a,i)=>({a,q:units[i],value:units[i]*prices[i]})).filter(r=>r.q>0).sort((a,b)=>b.value-a.value);
 $('portfolio-date').textContent=initial?'Pradinis planas pagal '+date(data.as_of)+' kainas.':end?'Kiekiai po '+data.nodes[state.node].label+' rekursijos; vertės pagal pasirinktos šakos pabaigos kainas ('+date(data.dates.at(-1))+').':'Portfelis iškart po '+data.nodes[state.node].label+' rekursijos ('+date(data.dates[data.recourse_step])+'), pagal mazgo kainas.';
 $('portfolio-preview').querySelector('tbody').innerHTML=rows.map(r=>`<tr data-asset="${esc(r.a.id)}" data-units="${r.q}" data-value="${r.value}"><td><strong>${esc(r.a.id)}</strong><small>${esc(r.a.name)}</small></td><td>${r.q}</td><td>${esc(euro(r.value))}</td><td>${esc(pct(r.value/total))}</td></tr>`).join('')+`<tr data-cash="true"><td><strong>Grynieji</strong></td><td>—</td><td>${esc(euro(cash))}</td><td>${esc(pct(cash/total))}</td></tr>`;
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
  return `<tr data-asset="${esc(a.id)}" data-change="${change}"><td><strong>${esc(a.id)}</strong><small>${esc(a.name)}</small></td><td>${a.current}</td><td>${p.units[i]}</td><td>${initial?'—':units[i]}</td><td class="${cls}">${change>0?'+':''}${change}</td><td class="${cls}">${action}</td><td>${esc(number(prices[i],4))}</td><td>${change?esc(euro(Math.abs(change)*prices[i])):'—'}</td><td>${final}</td></tr>`;
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
 $('app').hidden=false;attach();render();fit();document.documentElement.dataset.ready='true';
}
start().catch(error=>{$('load-error').hidden=false;$('load-error').textContent='Nepavyko įkelti scenarijų medžio. Atnaujinkite puslapį arba grįžkite į pagrindinę ataskaitą. '+error.message;});
})();
