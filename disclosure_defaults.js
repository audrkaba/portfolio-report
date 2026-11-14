(()=>{
 const seen=new WeakSet();
 function collapseNew(root){
  const nodes=[...(root.matches?.('details')?[root]:[]),...root.querySelectorAll('details')];
  for(const d of nodes)if(!seen.has(d)){seen.add(d);d.open=false}
 }
 collapseNew(document.body);
 new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1)collapseNew(n)}).observe(document.body,{childList:true,subtree:true});
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
