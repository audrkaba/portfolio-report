(()=>{'use strict';
function reveal(){let key;try{key=decodeURIComponent(location.hash.slice(1))}catch(_){return}if(!key)return;const target=document.getElementById(key);if(!target)return;for(let e=target;e;e=e.parentElement)if(e.tagName==='DETAILS')e.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}
window.addEventListener('hashchange',reveal);document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a&&a.hash===location.hash)reveal()});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',reveal);else reveal();
})();
