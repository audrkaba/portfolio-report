(()=>{
 const main=!document.body.dataset.progressPage&&/\/(?:index\.html)?$/.test(location.pathname);
 if(main){document.querySelectorAll('[data-refresh-status],#refresh-progress-notice').forEach(e=>e.remove());return}
 const boxes=[...document.querySelectorAll('[data-refresh-status]')];if(!boxes.length)return;
 fetch('refresh-status.json?t='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(status=>{
  for(const box of boxes){box.replaceChildren();const p=document.createElement('p');p.textContent=status.notice;box.append(p);
   const a=document.createElement('a');a.href='index.html#analytics-1-1';a.textContent='Confirmed Current holdings and historical netSD';box.append(a);
   const note=document.createElement('p');note.textContent='This page retains its own earlier model-input snapshot. It is not a recalculation for the latest holdings. No active refresh is claimed.';box.append(note);
  }
 }).catch(()=>{for(const box of boxes)box.textContent='Model snapshot: latest delivery status unavailable. Return to the main report for confirmed holdings.'});
})();
