'use strict';
(()=>{
 const study=document.getElementById('rolling-in-out-analysis'),frame=document.getElementById('rolling-study-inline');
 if(study&&frame){
  const load=()=>{if(study.open&&!frame.getAttribute('src'))frame.src=frame.dataset.src;};
  study.addEventListener('toggle',load);load();
  frame.addEventListener('load',()=>{
   const doc=frame.contentDocument;if(!doc)return;
   doc.documentElement.classList.add('inline-study');
   const heading=doc.querySelector('h1');if(heading)heading.hidden=true;
   const resize=()=>{frame.style.height=Math.ceil(doc.body.getBoundingClientRect().height+36)+'px';};
   new ResizeObserver(resize).observe(doc.body);resize();
   document.addEventListener('click',event=>{
    if(!event.target.closest('#expand-all-sections,#collapse-all-sections'))return;
    // Share the report's existing bulk-disclosure state with the embedded study.
    if(typeof window.reportExpandAllActive==='boolean'){
     doc.querySelectorAll('details').forEach(e=>{e.open=window.reportExpandAllActive;});
    }
   });
   if(window.reportExpandAllActive===true)doc.querySelectorAll('details').forEach(e=>{e.open=true;});
  });
 }
 if(!document.getElementById('study-status'))return;
 let queued=false;
 const renumber=(parent,prefix)=>{
  const items=[...parent.querySelectorAll('details')].filter(e=>e.parentElement.closest('details')===(parent.tagName==='DETAILS'?parent:null));
  items.forEach((e,i)=>{
   const s=e.querySelector(':scope > summary');if(!s)return;
   const label=s.textContent.replace(/^\d+(?:\.\d+)*\.\s*/,''),next=prefix+'.'+(i+1)+'. '+label;
   if(s.textContent!==next)s.textContent=next;
   renumber(e,prefix+'.'+(i+1));
  });
 };
 const update=()=>{queued=false;renumber(document.body,'3.5');};
 new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(update);}}).observe(document.body,{childList:true,subtree:true});
 update();
})();
