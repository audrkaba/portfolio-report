(()=>{'use strict';
const $=id=>document.getElementById(id),fmt=(v,d=2)=>new Intl.NumberFormat('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d}).format(v),pct=v=>fmt(100*v,3)+'%';
let data,state={policy:'main',nodes:[],leaf:0,decision:-1};
const policy=()=>data.policies[state.policy];
function statistic(host,label,value){const box=document.createElement('div'),small=document.createElement('span'),strong=document.createElement('strong');small.textContent=label;strong.textContent=value;box.append(small,strong);host.append(box);}
function choose(stage,id){
 if(stage===4){state.leaf=id;state.decision=-2;}
 else if(stage===0){state.decision=-1;}
 else{state.nodes[stage-1]=id;state.decision=id;
  for(let k=stage;k<3;k++)state.nodes[k]=data.nodes.find(n=>n.stage===k+1&&n.parent===state.nodes[k-1]).node;
  state.leaf=data.leaves.findIndex(l=>l.node===state.nodes[2]);
 }render();
}
function renderTree(){
 const host=$('tree');host.replaceChildren();
 const steps=[0,5,10,15,20];
 for(let stage=0;stage<5;stage++){
  const column=document.createElement('div'),title=document.createElement('strong');title.textContent=stage===4?'Valuation only':`Stage ${stage+1}`;column.append(title,document.createElement('br'),document.createTextNode(data.dates[steps[stage]]));
  const candidates=stage===0?[{id:-1,label:'Shared initial decision',mass:1,conditional:1}]:stage===4?data.leaves.map((l,i)=>({id:i,label:`${l.scenario} · R${l.terminal_regime}`,mass:l.probability,conditional:l.probability/data.nodes[l.node].probability,node:l.node})).filter(l=>l.node===state.nodes[2]):data.nodes.filter(n=>n.stage===stage&&(stage===1||n.parent===state.nodes[stage-2])).map(n=>({id:n.node,label:`N${n.node+1}`,mass:n.probability,conditional:n.probability/(n.parent<0?1:data.nodes[n.parent].probability)}));
  for(const item of candidates){
   const button=document.createElement('button'),strong=document.createElement('strong'),line=document.createElement('span');strong.textContent=item.label;line.textContent=pct(item.mass)+' | '+pct(item.conditional);button.append(strong,line);
   button.dataset.stage=stage;button.dataset.id=item.id;button.setAttribute('aria-pressed',String(stage===0?state.decision===-1:stage===4?state.leaf===item.id:state.nodes[stage-1]===item.id));button.addEventListener('click',()=>choose(stage,item.id));column.append(button);
  }host.append(column);
 }
}
function renderHoldings(){
 const p=policy(),terminal=state.decision===-2,node=terminal?state.nodes[2]:state.decision;
 const initial=node<0,parent=initial?-1:data.nodes[node].parent;
 const previous=initial?data.assets.map(a=>a.current):parent<0?p.q0:p.qs[parent];const units=initial?p.q0:p.qs[node];
 const prices=terminal?data.paths[state.leaf][20]:initial?data.assets.map(a=>a.price):data.nodes[node].prices;
 const cash=initial?p.cash0:p.cash[node],wealth=prices.reduce((v,price,i)=>v+price*units[i],cash);
 $('decision-title').textContent=terminal?'Terminal valuation — no trades':initial?'Stage 1 — shared initial decision':`Stage ${data.nodes[node].stage+1} — ${data.dates[data.nodes[node].step]} · N${node+1}`;
 const stats=$('decision-stats');stats.replaceChildren();statistic(stats,'Portfolio wealth',fmt(wealth)+' Eur');statistic(stats,'Cash balance',fmt(cash)+' Eur');
 statistic(stats,'Purchase limit per asset',terminal?'No trades':'750 Eur');
 const body=$('holdings');body.replaceChildren();
 data.assets.forEach((asset,i)=>{
  const change=terminal?0:units[i]-previous[i];if($('updates').checked&&!change&&!terminal)return;if(terminal&&!units[i])return;
  const row=body.insertRow();row.dataset.asset=asset.id;row.dataset.change=change;
  const permitted=terminal?'—':state.policy==='no_sales'?'No':initial?(state.policy==='sale'&&data.initial_sale_allowed[i]?'Yes':'No'):(data.sale_allowed[node][i]?'Yes':'No');
  [asset.id,asset.name,terminal?units[i]:previous[i],units[i],change>0?'+'+change:change,fmt(prices[i],4),fmt(Math.max(change,0)*prices[i]),fmt(Math.max(-change,0)*prices[i]),permitted].forEach(v=>{row.insertCell().textContent=v});
 });
}
function draw(){
 if(!data)return;const canvas=$('wealth'),width=canvas.getBoundingClientRect().width,height=330,ratio=devicePixelRatio||1;
 canvas.width=width*ratio;canvas.height=height*ratio;const ctx=canvas.getContext('2d');ctx.scale(ratio,ratio);
 const values=policy().results[state.leaf].wealth,left=70,right=15,top=20,bottom=48;
 let lo=Math.min(...values),hi=Math.max(...values);const pad=Math.max((hi-lo)*.15,10);lo-=pad;hi+=pad;
 const x=i=>left+i/20*(width-left-right),y=v=>top+(hi-v)/(hi-lo)*(height-top-bottom);
 ctx.font='11px system-ui';ctx.textAlign='right';
 for(let i=0;i<=4;i++){const v=lo+(hi-lo)*i/4;ctx.fillStyle='#526b77';ctx.fillText(fmt(v,0),left-5,y(v)+4);ctx.strokeStyle='#e0e9ed';ctx.beginPath();ctx.moveTo(left,y(v));ctx.lineTo(width-right,y(v));ctx.stroke();}
 for(const i of [0,5,10,15,20]){ctx.setLineDash([3,3]);ctx.strokeStyle=i===20?'#b77719':'#a6bcc7';ctx.beginPath();ctx.moveTo(x(i),top);ctx.lineTo(x(i),height-bottom);ctx.stroke();ctx.textAlign=i===0?'left':i===20?'right':'center';ctx.fillStyle='#526b77';const label=width<600?(i===20?'V':`D${i/5+1}`):(i===20?'Valuation':`Stage ${i/5+1}`);ctx.fillText(label,x(i),height-bottom+18);if(width>600)ctx.fillText(data.dates[i],x(i),height-bottom+35);}
 ctx.setLineDash([]);ctx.strokeStyle='#087c92';ctx.lineWidth=2.5;ctx.beginPath();values.forEach((v,i)=>i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)));ctx.stroke();canvas.dataset.leaf=state.leaf;
}
function render(){
 renderTree();renderHoldings();const p=policy(),r=p.results[state.leaf],out=$('outcome');out.replaceChildren();
 statistic(out,'Selected-branch terminal wealth',fmt(r.final_wealth)+' Eur');statistic(out,'Branch return',pct(r.return_fraction));statistic(out,'Branch netSD',fmt(r.netSD,6));statistic(out,'Model-weighted netSD',fmt(p.summary.expected_netSD,6));statistic(out,'Model-weighted terminal wealth',fmt(data.budget*(1+p.summary.expected_horizon_return))+' Eur');statistic(out,'Model-weighted return',pct(p.summary.expected_horizon_return));
 $('status').textContent=`${p.label} · ${data.nodes.length+1} decision nodes · ${data.leaves.length} terminal branches · horizon ${data.dates[0]}–${data.dates[20]}`;draw();
 document.documentElement.dataset.ready='true';
}
async function start(){
 const version=document.querySelector('script[data-version]').dataset.version;const response=await fetch('interactive/stochastic2.json?v='+version);if(!response.ok)throw new Error('HTTP '+response.status);data=await response.json();
 state.nodes=[data.nodes.find(n=>n.stage===1).node];state.nodes.push(data.nodes.find(n=>n.stage===2&&n.parent===state.nodes[0]).node);state.nodes.push(data.nodes.find(n=>n.stage===3&&n.parent===state.nodes[1]).node);state.leaf=data.leaves.findIndex(l=>l.node===state.nodes[2]);
 $('policy').addEventListener('change',()=>{state.policy=$('policy').value;render();});$('updates').addEventListener('change',renderHoldings);new ResizeObserver(draw).observe($('wealth'));render();
}start().catch(e=>{$('status').textContent='Could not load: '+e.message;document.documentElement.dataset.error='true';});
})();
