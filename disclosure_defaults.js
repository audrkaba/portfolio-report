(()=>{
 const seen=new WeakSet();
 function makeParts(root){
  const headings=[...(root.matches?.('h2,h3,h4,h5,h6')?[root]:[]),...root.querySelectorAll('h2,h3,h4,h5,h6')];
  for(const h of headings){
   if(!h.isConnected||h.closest('summary,table,figure,[role="dialog"],.metric-modal,#asset-dialog'))continue;
   const level=Number(h.tagName.slice(1)),d=document.createElement('details'),s=document.createElement('summary');
   d.className='research-subsection';h.before(d);s.innerHTML=h.innerHTML;
   if(h.id)s.id=h.id;d.append(s);
   let n=h.nextSibling;h.remove();
   while(n){const next=n.nextSibling;if(n.nodeType===1&&/^H[2-6]$/.test(n.tagName)&&Number(n.tagName.slice(1))<=level)break;d.append(n);n=next;}
  }
 }
 function collapseNew(root){
  const nodes=[...(root.matches?.('details')?[root]:[]),...root.querySelectorAll('details')];
  for(const d of nodes)if(!seen.has(d)){seen.add(d);d.open=false}
 }
 makeParts(document.body);collapseNew(document.body);
 new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1){makeParts(n);collapseNew(n)}}).observe(document.body,{childList:true,subtree:true});
 document.addEventListener('click',e=>{
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
