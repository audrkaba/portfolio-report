(()=>{'use strict';
const $=id=>document.getElementById(id),fmt=(x,d=2)=>new Intl.NumberFormat('lt-LT',{minimumFractionDigits:d,maximumFractionDigits:d}).format(x),pct=x=>x>0&&x<.00001?'<0,001%':fmt(100*x,3)+'%';
const cache=new Map();let data,branch,nodeMap,positionMap,version,ticket=0,state={policy:'main',nodes:[0,20,420],terminal:0,decision:-1};
const selected=()=>data.policies[state.policy],branchPolicy=()=>branch.policies[state.policy];
function error(e){$('status').textContent='Nepavyko įkelti pasirinktos šakos: '+e.message;document.documentElement.dataset.error='true';}
async function load(name){if(!cache.has(name))cache.set(name,fetch('interactive/stochastic2-twenty/'+name+'?v='+(data?.resources[name]||version)).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).catch(e=>{cache.delete(name);throw e;}));return cache.get(name);}
async function branchFor(root){const loaded=await load('branch-'+root+'.json');if(state.nodes[0]!==root)return;branch=loaded;nodeMap=new Map(branch.nodes.map(n=>[n.node,n]));positionMap=new Map(branch.nodes.map((n,i)=>[n.node,i]));}
const node=id=>id<20?data.root_nodes[id]:nodeMap.get(id);
function units(id){return id<0?selected().q0:branchPolicy().qs[positionMap.get(id)];}
function statistic(host,label,value){const div=document.createElement('div'),small=document.createElement('span'),strong=document.createElement('strong');small.textContent=label;strong.textContent=value;div.append(small,strong);host.append(div);}
async function choose(stage,id){
 if(stage===2&&(id<20+state.nodes[0]*20||id>=20+(state.nodes[0]+1)*20))return;
 if(stage===3&&(id<420+(state.nodes[1]-20)*20||id>=420+(state.nodes[1]-19)*20))return;
 const serial=++ticket;
 if(stage===0)state.decision=-1;
 else if(stage===4){state.terminal=id;state.decision=-2;}
 else{state.nodes[stage-1]=id;state.decision=id;state.terminal=0;
  if(stage===1){state.nodes[1]=20+id*20;state.nodes[2]=420+(state.nodes[1]-20)*20;$('status').textContent='Įkeliama pasirinkta šaka…';await branchFor(id);}
  if(stage===2)state.nodes[2]=420+(id-20)*20;
 }
 if(serial!==ticket)return;await render(serial);
}
function tree(){
 const host=$('tree');host.replaceChildren();const steps=[0,5,10,15,20];
 for(let stage=0;stage<5;stage++){
  const column=document.createElement('div'),title=document.createElement('strong'),count=document.createElement('p');title.textContent=stage===4?'Tik vertinimas':`${stage+1} etapas`;count.className='muted';count.textContent=stage===4?'Iš viso 160 000 baigčių':`Iš viso ${fmt(data.stage_counts[stage],0)} mazgų`;column.append(title,document.createElement('br'),document.createTextNode(data.dates[steps[stage]]),count);
  if(stage===0){const button=document.createElement('button');button.className='root-button';button.dataset.stage=0;button.textContent='Bendras pradinis sprendimas';button.setAttribute('aria-pressed',String(state.decision===-1));button.addEventListener('click',()=>choose(0,-1).catch(error));column.append(button);}
  else{const grid=document.createElement('div');grid.className='state-grid';let choices=[];
   if(stage===1)choices=data.root_nodes.map(n=>({id:n.node,state:n.state,mass:n.probability,conditional:n.probability}));
   else if(stage===4){const parent=node(state.nodes[2]);choices=Array.from({length:20},(_,s)=>({id:s,state:s,conditional:data.transitions[2][parent.state][s],mass:parent.probability*data.transitions[2][parent.state][s]}));}
   else{const parent=state.nodes[stage-2];choices=branch.nodes.filter(n=>n.stage===stage&&n.parent===parent).map(n=>({id:n.node,state:n.state,mass:n.probability,conditional:n.probability/node(parent).probability}));}
   for(const choice of choices){const button=document.createElement('button'),label=document.createElement('strong'),line=document.createElement('span');const r=Math.floor(choice.state/5)+1,k=choice.state%5+1;
    label.textContent=`R${r}/K${k}`;line.textContent=pct(choice.mass)+' | '+pct(choice.conditional);button.append(label,line);button.dataset.stage=stage;button.dataset.id=choice.id;button.dataset.regime=r;button.dataset.cluster=k;button.title=`R${r} / K${k}; tikimybė ${choice.mass.toPrecision(6)}; sąlyginė ${choice.conditional.toPrecision(6)}`;button.setAttribute('aria-pressed',String(stage===4?state.terminal===choice.id:state.nodes[stage-1]===choice.id));button.addEventListener('click',()=>choose(stage,choice.id).catch(error));grid.append(button);
   }column.append(grid);
  }host.append(column);
 }
}
function holdings(path){
 const p=selected(),bp=branchPolicy(),terminal=state.decision===-2,id=terminal?state.nodes[2]:state.decision,initial=id<0,n=initial?null:node(id),parent=initial?-1:n.parent;
 const previous=initial?data.assets.map(a=>a.current):units(parent),q=units(id),prices=terminal?path[20]:initial?data.assets.map(a=>a.price):n.prices;
 const cash=initial?p.cash0:bp.cash[positionMap.get(id)],wealth=prices.reduce((v,price,i)=>v+price*q[i],cash),host=$('decision-stats');host.replaceChildren();
 $('decision-title').textContent=terminal?'Galutinis vertinimas — sandorių nėra':initial?'1 etapas — pradinis bendras sprendimas':`${n.stage+1} etapas · ${data.dates[n.step]} · R${n.regime}/K${n.cluster}`;
 statistic(host,'Vertė',fmt(wealth)+' Eur');statistic(host,'Pinigų likutis',fmt(cash)+' Eur');statistic(host,'Pirkimo riba vienam aktyvui',terminal?'Sandorių nėra':'750 Eur');
 const body=$('holdings');body.replaceChildren();
 data.assets.forEach((asset,i)=>{
  const change=terminal?0:q[i]-previous[i];if($('updates').checked&&!change&&!terminal)return;if(terminal&&!q[i])return;
  const common=terminal?0:initial?p.common.initial[i]:p.common.stages[n.stage-1].minimum[i];const row=body.insertRow();row.dataset.asset=asset.id;row.dataset.change=change;row.dataset.commonBuyUnits=common;
  const permission=terminal?'—':state.policy==='no_sales'?'Ne':initial?(state.policy==='sale'&&data.initial_sale_allowed[i]?'Taip':'Ne'):(branch.sale_allowed[positionMap.get(id)][i]?'Taip':'Ne');
  [asset.id,asset.name,terminal?q[i]:previous[i],q[i],change>0?'+'+change:String(change),fmt(prices[i],4),fmt(Math.max(change,0)*prices[i]),fmt(Math.max(-change,0)*prices[i]),permission].forEach(v=>{row.insertCell().textContent=v});
  if(change>0){const span=document.createElement('span');span.className='consensus';span.textContent=`(visiems etapo scenarijams bendra ${common} vnt.)`;row.cells[4].append(span);}
 });
}
function futurePurchases(){
 const common=selected().common,body=$('future-purchases');body.replaceChildren();
 data.assets.forEach((asset,i)=>{
  if(common.future_total_maximum[i]===0)return;const row=body.insertRow();row.dataset.asset=asset.id;row.insertCell().textContent=asset.id;
  for(const stage of common.stages){const cell=row.insertCell();cell.textContent=`${stage.minimum[i]}–${stage.maximum[i]} vnt. (${stage.minimum[i]} bendra)`;cell.dataset.commonBuyUnits=stage.minimum[i];}
  row.insertCell().textContent=`${common.future_total_minimum[i]}–${common.future_total_maximum[i]} vnt. (${common.future_total_minimum[i]} bendra)`;
 });
}
async function prices(){
 let last=data.assets.map(a=>a.price),path=[last],previous=0;
 const states=[node(state.nodes[0]).state,node(state.nodes[1]).state,node(state.nodes[2]).state,state.terminal];
 for(let week=0;week<4;week++){
  const templates=await load(week===0?'templates-root.json':`templates-w${week}-s${previous}.json`),segment=templates[states[week]],start=last;
  for(let day=0;day<5;day++){last=start.map((v,i)=>v*Math.exp(segment[day][i]));path.push(last);}previous=states[week];
 }return path;
}
function wealth(path){
 let q=selected().q0,cash=selected().cash0;const values=[data.budget];
 for(let step=1;step<=20;step++){values.push(path[step].reduce((v,p,i)=>v+p*q[i],cash));if([5,10,15].includes(step)){const target=units(state.nodes[step/5-1]);cash+=path[step].reduce((v,p,i)=>v+p*(q[i]-target[i]),0);q=target;}}
 return values;
}
let lastWealth;
function draw(){
 if(!lastWealth)return;const canvas=$('wealth'),width=canvas.getBoundingClientRect().width,height=330,ratio=devicePixelRatio||1;canvas.width=width*ratio;canvas.height=height*ratio;const ctx=canvas.getContext('2d');ctx.scale(ratio,ratio);
 const values=lastWealth,left=70,right=15,top=20,bottom=48;let lo=Math.min(...values),hi=Math.max(...values);const pad=Math.max((hi-lo)*.15,10);lo-=pad;hi+=pad;const x=i=>left+i/20*(width-left-right),y=v=>top+(hi-v)/(hi-lo)*(height-top-bottom);
 ctx.font='11px system-ui';ctx.textAlign='right';for(let i=0;i<=4;i++){const v=lo+(hi-lo)*i/4;ctx.fillStyle='#526b77';ctx.fillText(fmt(v,0),left-5,y(v)+4);ctx.strokeStyle='#e1e9ed';ctx.beginPath();ctx.moveTo(left,y(v));ctx.lineTo(width-right,y(v));ctx.stroke();}
 for(const i of [0,5,10,15,20]){ctx.setLineDash([3,3]);ctx.strokeStyle=i===20?'#b77719':'#a8bec7';ctx.beginPath();ctx.moveTo(x(i),top);ctx.lineTo(x(i),height-bottom);ctx.stroke();ctx.fillStyle='#526b77';ctx.textAlign=i===0?'left':i===20?'right':'center';ctx.fillText(i===20?'V':`E${i/5+1}`,x(i),height-bottom+18);if(width>600)ctx.fillText(data.dates[i],x(i),height-bottom+35);}
 ctx.setLineDash([]);ctx.lineWidth=2.5;ctx.strokeStyle='#087c92';ctx.beginPath();values.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));ctx.stroke();canvas.dataset.terminalState=state.terminal;
}
async function render(serial=++ticket){
 if(branch?.root!==state.nodes[0])await branchFor(state.nodes[0]);
 if(serial!==ticket)return;
 tree();const path=await prices();if(serial!==ticket)return;holdings(path);futurePurchases();lastWealth=wealth(path);draw();
 const local=(state.nodes[2]-420-state.nodes[0]*400)*20+state.terminal,bp=branchPolicy(),final=bp.final_value[local],p=selected(),host=$('outcome');host.replaceChildren();
 if(Math.abs(lastWealth[20]-final)>1e-5)throw new Error('Šakos vertė nesutampa su patikrintu modelio rezultatu');
 statistic(host,'Pasirinktos šakos galutinė vertė',fmt(final)+' Eur');statistic(host,'Šakos grąža',pct(final/data.budget-1));statistic(host,'Šakos netSD',fmt(bp.netSD[local],6));statistic(host,'Šakos OUT / IN',`${bp.OUT[local]} / ${bp.IN[local]}`);statistic(host,'Svertinė galutinė vertė',fmt(data.budget*(1+p.summary.expected_horizon_return))+' Eur');statistic(host,'Svertinis netSD',fmt(p.summary.expected_netSD,6));
 $('status').textContent=`${p.label} · 8 421 sprendimo mazgas · 160 000 vertinimo baigčių · kiekvienam mazgui 20 tęsinių · ${data.dates[0]}–${data.dates[20]}`;
 document.documentElement.dataset.ready='true';document.documentElement.dataset.error='false';document.documentElement.dataset.root=state.nodes[0];
}
async function start(){
 version=document.querySelector('script[data-version]').dataset.version;data=await load('manifest.json');await branchFor(0);
 $('policy').addEventListener('change',()=>{state.policy=$('policy').value;render().catch(error);});$('updates').addEventListener('change',()=>render().catch(error));new ResizeObserver(draw).observe($('wealth'));await render();
}start().catch(error);
})();
