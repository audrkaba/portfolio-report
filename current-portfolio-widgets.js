(()=>{
 const root=document.getElementById('chapter3-current-composition');if(!root)return;
 const data=JSON.parse(root.querySelector('script[type="application/json"]').textContent),view=root.querySelector('select'),grid=root.querySelector('.current-tv-grid');
 const el=(tag,text)=>{const n=document.createElement(tag);if(text!=null)n.textContent=text;return n};
 const visible=card=>{if(!card._near)return false;for(let p=card;p;p=p.parentElement)if(p.hidden||(p.tagName==='DETAILS'&&!p.open))return false;return true};
 const cards=[];const observer=new IntersectionObserver(entries=>entries.forEach(e=>{e.target._near=e.isIntersecting;refresh(e.target)}),{rootMargin:'120px'});
 function refresh(card){
  const host=card.querySelector('.current-tv-host'),status=card.querySelector('.current-tv-status');
  if(!visible(card)){const f=host.querySelector('iframe');if(f){card._frame=f;f.remove()}return}
  if(card._frame){if(!card._frame.isConnected)(card._frameParent?.isConnected?card._frameParent:host).append(card._frame);return}
  if(card._loading)return;const r=card._item;card._loading=true;const generation=card._generation||0;
  if(!r.symbol){
   if(r.fund_chart){const frame=el('iframe');frame.title=r.name+' exact-class daily NAV';frame.src='fund-chart.html?asset='+encodeURIComponent(r.asset)+'&period='+(view.value==='week'?'week':view.value==='day'?'day':'year');frame.loading='lazy';card._frame=frame;card._frameParent=host;host.style.height='750px';frame.style.setProperty('height','720px','important');host.append(frame);status.textContent='Exact fund-class NAV chart; no verified TradingView listing.'}
   else{status.textContent='No verified TradingView symbol for this exact asset; use the provider link.';host.hidden=true}
   return;
  }
  status.textContent='Loading TradingView...';const technical=view.value==='technical';
  const container=el('div');container.className='tradingview-widget-container';container.append(el('div'));container.firstChild.className='tradingview-widget-container__widget';
  const credit=el('div');credit.className='tradingview-widget-copyright';const link=el('a',r.asset.replace(/^US_/, '')+' by TradingView');link.href=r.url;link.target='_blank';link.rel='noopener nofollow';credit.append(link);container.append(credit);host.append(container);
  const watch=new MutationObserver(()=>{if(generation!==(card._generation||0))return;const frame=container.querySelector('iframe');if(!frame)return;card._frame=frame;card._frameParent=frame.parentElement;frame.title=r.asset+' TradingView '+(technical?'technical recommendation':'price chart');frame.addEventListener('load',()=>{status.textContent=technical?'TradingView technical recommendation; external provider data.':'Candlestick chart with Bollinger Bands; external provider data.'});watch.disconnect();if(!visible(card))frame.remove()});watch.observe(container,{childList:true,subtree:true});card._watch=watch;
  const script=el('script');script.async=true;script.src='https://s3.tradingview.com/external-embedding/embed-widget-'+(technical?'technical-analysis':'advanced-chart')+'.js';
  const configuration=technical?{interval:'1D',width:'100%',height:400,symbol:r.symbol,showIntervalTabs:true,displayMode:'single',locale:'en',colorTheme:'light',isTransparent:false,disableInterval:false}:{autosize:true,symbol:r.symbol,interval:view.value==='day'?'5':'D',range:view.value==='year'?'12M':view.value==='week'?'5D':'1D',timezone:'Europe/Vilnius',theme:'light',style:'1',locale:'en',allow_symbol_change:false,save_image:false,hide_side_toolbar:true,withdateranges:true,studies:['STD;Bollinger_Bands'],support_host:'https://www.tradingview.com'};
  card.dataset.widgetType=technical?'technical':'chart';card.dataset.symbol=r.symbol;card.dataset.interval=technical?'1D':configuration.interval;
  script.textContent=JSON.stringify(configuration);script.onerror=()=>{if(generation!==(card._generation||0))return;card._loading=false;watch.disconnect();status.textContent='TradingView could not load. Open the verified provider link.'};container.append(script);
 }
 for(const r of data.rows){const card=el('section');card.className='current-tv-card';card.dataset.asset=r.asset;card._item=r;card.append(el('div',r.asset.replace(/^US_/,'')+' — '+r.units+' units'),el('p',r.name));const provider=el('a',r.symbol?'Open TradingView':'Open exact fund class');provider.href=r.url;provider.target='_blank';provider.rel='noopener';card.append(provider);if(r.currency==='USD')card.append(el('p','Provider chart currency: USD. Portfolio valuations use EUR.'));const host=el('div');host.className='current-tv-host';const status=el('p','Loads when visible.');status.className='current-tv-status';card.append(host,status);grid.append(card);cards.push(card);observer.observe(card)}
 view.addEventListener('change',()=>{cards.forEach(c=>{c._watch?.disconnect();c._generation=(c._generation||0)+1;c.querySelector('.current-tv-host').replaceChildren();c.querySelector('.current-tv-host').hidden=false;c._frame=null;c._loading=false;refresh(c)})});
 document.addEventListener('toggle',()=>cards.forEach(refresh),true);
 window.addEventListener('message',e=>{let message=e.data;if(typeof message==='string'){try{message=JSON.parse(message)}catch{return}}if(message?.name!=='tv-widget-load')return;for(const card of cards){const f=card._frame;if(!f||card.dataset.widgetType!=='chart'||f.contentWindow!==e.source)continue;let origin;try{origin=new URL(f.src).origin}catch{continue}if(origin!==e.origin||!/^https:\/\/([a-z0-9-]+\.)?(tradingview|tradingview-widget)\.com$/.test(e.origin))continue;setTimeout(()=>{if(f.isConnected)f.contentWindow.postMessage({name:'set-interval',data:{interval:card.dataset.interval}},e.origin)},500)}});
 root.dataset.widgetsReady='true';
})();
