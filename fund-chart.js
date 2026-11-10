(()=>{'use strict';
const $=id=>document.getElementById(id),query=new URLSearchParams(location.search),allowed=new Set(['SE0014261764']);
const asset=query.get('asset'),num=(v,n=4)=>Number.isFinite(v)?new Intl.NumberFormat('en-GB',{maximumFractionDigits:n}).format(v):'—';
let doc,points=[],at=0;
function draw(){
 const W=940,L=65,R=18,x=i=>L+i/Math.max(1,points.length-1)*(W-L-R),out=[];
 function pane(title,H,series,opt={}){
  const T=22,B=opt.bottom?26:10,values=series.flatMap(s=>s.v).filter(Number.isFinite);
  if(opt.hist)values.push(0,...points.map(p=>p.MACD_histogram).filter(Number.isFinite));
  let lo=opt.lo??(values.length?Math.min(...values):0),hi=opt.hi??(values.length?Math.max(...values):1);
  if(opt.lo===undefined){const pad=Math.max((hi-lo)*.12,Math.abs(hi)*.003,1e-6);lo-=pad;hi+=pad;}
  const y=v=>H-B-(v-lo)/(hi-lo)*(H-T-B);let svg=`<text x="${L}" y="14" font-size="12" fill="#526b77">${title}</text>`;
  for(let k=0;k<3;k++){const v=lo+(hi-lo)*k/2;svg+=`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="#e6edf0"/><text x="${L-7}" y="${y(v)+4}" text-anchor="end" font-size="10" fill="#526b77">${num(v,3)}</text>`;}
  if(opt.hist)points.forEach((p,i)=>{const v=p.MACD_histogram;if(!Number.isFinite(v))return;const width=Math.max(1,Math.min(10,(W-L-R)/points.length*.6));svg+=`<rect x="${x(i)-width/2}" y="${Math.min(y(v),y(0))}" width="${width}" height="${Math.max(1,Math.abs(y(v)-y(0)))}" fill="${v>=0?'#99c9b5':'#e3aea9'}"/>`;});
  for(const s of series){let started=false,path='';s.v.forEach((v,i)=>{if(!Number.isFinite(v)){started=false;return;}path+=(started?'L':'M')+x(i)+','+y(v);started=true;});svg+=`<path d="${path}" fill="none" stroke="${s.c}" stroke-width="${s.width||1.8}" ${s.dash?'stroke-dasharray="4 3"':''}/>`;}
  svg+=`<line x1="${x(at)}" x2="${x(at)}" y1="${T}" y2="${H-B}" stroke="#526b77" stroke-dasharray="3 3"/>`;
  if(opt.price)svg+=`<circle cx="${x(at)}" cy="${y(points[at].price)}" r="4" fill="#087c92"/>`;
  if(opt.bottom)for(const i of [...new Set([0,Math.floor((points.length-1)/2),points.length-1])])svg+=`<text x="${x(i)}" y="${H-5}" text-anchor="${i===0?'start':i===points.length-1?'end':'middle'}" font-size="10" fill="#526b77">${points[i].date}</text>`;
  out.push(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">${svg}</svg>`);
 }
 pane('EUR NAV · blue / Bollinger bands · grey',220,[{v:points.map(p=>p.BB_lower),c:'#9aabb5',dash:true},{v:points.map(p=>p.BB_upper),c:'#9aabb5',dash:true},{v:points.map(p=>p.price),c:'#087c92',width:2.5}],{price:true});
 pane('Stoch RSI · %K blue / %D orange',100,[{v:points.map(p=>p.StochRSI_K===null?null:p.StochRSI_K*100),c:'#247ac0'},{v:points.map(p=>p.StochRSI_D===null?null:p.StochRSI_D*100),c:'#d88b38'}],{lo:0,hi:100});
 pane('MACD · blue / signal · orange / histogram',125,[{v:points.map(p=>p.MACD),c:'#247ac0'},{v:points.map(p=>p.MACD_signal),c:'#d88b38'}],{hist:true,bottom:true});
 $('charts').innerHTML=out.join('');const p=points[at];$('quote').textContent=`${p.date} · ${num(p.price)} EUR · Stoch K/D ${num(p.StochRSI_K*100,1)}/${num(p.StochRSI_D*100,1)} · MACD ${num(p.MACD)}`;
 $('cursor').value=String(at);
}
function period(){
 const value=$('period').value,last=new Date(doc.last_date+'T12:00:00Z');
 if(value==='year'){last.setUTCFullYear(last.getUTCFullYear()-1);points=doc.points.filter(p=>p.date>=last.toISOString().slice(0,10));}
 else points=doc.points.slice(value==='week'?-5:-30);
 at=points.length-1;$('cursor').max=String(at);draw();document.documentElement.dataset.ready='true';
}
async function start(){
 if(!allowed.has(asset))throw new Error('Unknown fund');
 const version=document.querySelector('script[data-version]').dataset.version;
 const r=await fetch('interactive/yahoo-funds/'+asset+'.json?v='+version);if(!r.ok)throw new Error('HTTP '+r.status);doc=await r.json();
 $('title').textContent=doc.name+' · Yahoo Finance · EUR';$('source').href=doc.source_url;
 const checked=new Intl.DateTimeFormat('en-GB',{dateStyle:'short',timeStyle:'short',timeZone:'Europe/Vilnius'}).format(new Date(doc.retrieved_at));
 $('availability').textContent=`Latest NAV: ${doc.last_date}. Snapshot checked: ${checked} (Europe/Vilnius). Daily observations; no intraday series.`;
 if(doc.official_last_date)$('availability').textContent+=` Official EUR NAV used for portfolio valuation: ${doc.official_last_date}.`;
 if(doc.provider_behind_official)$('availability').textContent+=' Yahoo is behind the official source; this older display chart is not used to value or optimise portfolios.';
 $('period').value=['week','year','day'].includes(query.get('period'))?query.get('period'):'week';
 $('period').addEventListener('change',period);$('cursor').addEventListener('input',e=>{at=Number(e.target.value);draw();});
 $('charts').addEventListener('pointermove',e=>{const svg=e.target.closest('svg');if(!svg)return;const box=svg.getBoundingClientRect(),x=(e.clientX-box.left)/box.width*940;const i=Math.max(0,Math.min(points.length-1,Math.round((x-65)/(940-65-18)*(points.length-1))));if(i!==at){at=i;draw();}});period();
}
start().catch(e=>{$('title').textContent='Chart could not load: '+e.message;document.documentElement.dataset.error='true';});
})();
