(()=>{'use strict';const node=document.getElementById('extended-reference-summary-data');if(!node)return;const data=JSON.parse(node.textContent),num=x=>Number.isFinite(x)?x.toFixed(6):'—';
 function update(){const scope=document.querySelector('input[name="portfolio-scope"]:checked')?.value||'STOCHASTIC2',policy=document.querySelector('input[name="sale-policy"]:checked')?.value||'NO_SALE',context=document.querySelector('select[name="profile-history-regime"]')?.value||'FULL',c=data.contexts[context],target=document.getElementById('extended-reference-selected');if(!target||!c)return;target.replaceChildren();
  const label=document.createElement('p');label.textContent=`Historical comparison with ${c.reference_assets} asset references including US equities · ${context} · n=${c.observations}. Same-window scores; existing quantities retained.${c.small_sample?' Small regime sample.':''}`;target.append(label);
  const policies=scope==='CURRENT'?['CURRENT']:policy==='ALL'?['SALE','NO_SALE']:[policy];
  for(const p of policies){const row=c.portfolios[scope==='CURRENT'?'Current':scope+'|'+p];if(!row)continue;const text=document.createElement('p');text.textContent=`${scope} · ${p}: netSD ${num(row.netSD)};71-reference same-window score ${num(row.narrow)}; change ${num(row.delta)}; actual augmented-graph D=${row.D}.`;target.append(text);}
  for(const profile of document.querySelectorAll('#analytics-1-1 details.stock-profile')){
   const asset=(profile.id||'').replace(/^(share-|fund-)/,'').toUpperCase().replace('US:','US_'),score=c.assets[asset];if(score==null)continue;let note=profile.querySelector(':scope > .extended-reference-profile-note');if(!note){note=document.createElement('p');note.className='extended-reference-profile-note';note.style.fontSize='.8rem';const table=profile.querySelector(':scope > .profile-summary-wrap,:scope > table,:scope > .horizontal-summary-groups');if(table)table.after(note);else profile.append(note);}
   note.textContent=`Extended-reference historical netSD: ${num(score.netSD)} · ${c.reference_assets} assets + Current reference · ${context}, n=${c.observations}; D=${score.D}. `;const a=document.createElement('a');a.href='extended-reference.html?context='+encodeURIComponent(context);a.textContent='US reference and risk analysis';note.append(a);
  }
 }
 document.addEventListener('change',event=>{if(event.target.closest?.('#analytics-1-1 .profile-filters'))queueMicrotask(update);});
 const original=window.updateSelectedPortfolioProfile;if(typeof original==='function')window.updateSelectedPortfolioProfile=function(...args){const result=original.apply(this,args);queueMicrotask(update);return result;};
 update();
})();
