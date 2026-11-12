(()=>{
 const box=document.querySelector('[data-refresh-status]');if(!box)return;
 async function update(){try{
  const r=await fetch('refresh-status.json?t='+Date.now(),{cache:'no-store'});if(!r.ok)return;const s=await r.json();
  if(s.complete){location.replace('index.html?v='+encodeURIComponent(s.public_commit||s.revision));return;}
  if(document.body.dataset.progressPage&&document.body.dataset.progressRevision!==s.revision){location.replace('partial-progress.html?v='+encodeURIComponent(s.revision));return;}
  box.replaceChildren();const title=document.createElement('strong');title.textContent='Refresh in progress — published and pending parts';box.append(title);
  if(s.notice){const warning=document.createElement('p');warning.textContent=s.notice;box.append(warning);}
  const direct=document.createElement('p');const link=document.createElement('a');link.href=s.main_report_complete?'index.html?v='+s.main_report_commit:'partial-progress.html?v='+s.revision;link.textContent=s.main_report_complete?'Open the completed daily report':'Open the latest completed results';direct.append(link);direct.append(document.createTextNode(' · VLP1L '+s.holdings.VLP1L+' units · Technology C '+s.holdings.SE0014261764+' units'));box.append(direct);
  const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='Publication status by part';details.append(summary);const list=document.createElement('ul');
  for(const part of s.parts){const li=document.createElement('li');li.append(document.createTextNode(part.status.toUpperCase()+': '));if(part.url){const a=document.createElement('a');a.href=part.url;a.textContent=part.label;li.append(a)}else li.append(document.createTextNode(part.label));list.append(li)}details.append(list);box.append(details);
  if(!document.body.dataset.progressPage){const note=document.createElement('p');note.textContent=(s.main_report_complete||document.body.dataset.dailyReportFresh)?'The daily closing-price report below is updated. The separate optional US equity trial is still being prepared and checked.':'The main report below retains its previous snapshot until full integration. Completed new results are available through the link above.';box.append(note)}
 }catch(e){/* Retain the dated static notice during a temporary connection failure. */}}
 update();setInterval(update,30000);
})();
