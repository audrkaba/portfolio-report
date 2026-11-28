(()=>{
 const seen=new WeakSet();let bulkOpen=null;
 function makeParts(root){
  const headings=[...(root.matches?.('h2,h3,h4,h5,h6')?[root]:[]),...root.querySelectorAll('h2,h3,h4,h5,h6')];
  for(const h of headings){
   if(!h.isConnected||h.closest('summary,table,figure,[role="dialog"],.metric-modal,#asset-dialog,#current-portfolio-overview,.asset-sensitivity-group,[data-distance-policy]'))continue;
   const level=Number(h.tagName.slice(1)),d=document.createElement('details'),s=document.createElement('summary');
   d.className='research-subsection';h.before(d);s.innerHTML=h.innerHTML;
   if(h.id)s.id=h.id;d.append(s);
   let n=h.nextSibling;h.remove();
   while(n){const next=n.nextSibling;if(n.nodeType===1&&/^H[2-6]$/.test(n.tagName)&&Number(n.tagName.slice(1))<=level)break;d.append(n);n=next;}
  }
 }
 function collapseNew(root){
  const nodes=[...(root.matches?.('details')?[root]:[]),...root.querySelectorAll('details')];
  for(const d of nodes)if(!seen.has(d)){seen.add(d);d.open=bulkOpen===true&&!d.closest('[hidden]')}
 }
 makeParts(document.body);collapseNew(document.body);
 const controls=document.createElement('div');controls.id='report-section-controls';controls.setAttribute('role','group');controls.setAttribute('aria-label','Section controls');controls.style.cssText='display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.6rem 0;max-width:100%';
 function setAll(value){bulkOpen=value;window.reportExpandAllActive=value;for(const d of document.querySelectorAll('details')){seen.add(d);if(!value||!d.closest('[hidden]'))d.open=value}}
 for(const [id,label,value] of [['expand-all-sections','Expand all',true],['collapse-all-sections','Collapse all',false]]){
  const button=document.createElement('button');button.type='button';button.id=id;button.textContent=label;button.style.cssText='padding:.4rem .7rem;cursor:pointer;max-width:100%';button.addEventListener('click',()=>setAll(value));controls.append(button);
 }
 const nav=document.querySelector('.report-chapter-nav'),heading=document.querySelector('h1');
 if(nav&&!nav.closest('details'))nav.prepend(controls);else if(heading?.nextElementSibling?.id==='daily-market-watch')heading.nextElementSibling.after(controls);else if(heading)heading.after(controls);else document.body.prepend(controls);

 new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1){makeParts(n);collapseNew(n)}}).observe(document.body,{childList:true,subtree:true});
 document.addEventListener('click',e=>{
  if(e.target.closest('summary')){bulkOpen=null;window.reportExpandAllActive=false}
  const a=e.target.closest('a[href^="#"]');if(!a)return;
  const target=document.getElementById(a.hash.slice(1));
  for(let p=target;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
 });
 function revealRequestedAnchor(){
  let id;try{id=decodeURIComponent(location.hash.slice(1))}catch(_){return}
  if(!id)return;const target=document.getElementById(id);if(!target)return;
  for(let node=target;node;node=node.parentElement)if(node.tagName==='DETAILS')node.open=true;
 }
 window.addEventListener('hashchange',revealRequestedAnchor);
 revealRequestedAnchor();
 document.documentElement.dataset.disclosuresReady='true';
})();
