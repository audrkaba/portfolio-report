
const metricModal=document.createElement('div');
metricModal.className='metric-modal';metricModal.hidden=true;
metricModal.innerHTML='<div class="metric-modal-card" role="dialog" aria-modal="true" aria-labelledby="metric-modal-title"><button type="button" class="metric-modal-close" aria-label="Close">&times;</button><h3 id="metric-modal-title"></h3><p><strong>Meaning:</strong> <span class="metric-modal-meaning"></span></p><p><strong>Calculation:</strong> <span class="metric-modal-calculation"></span></p><p><strong>Interpretation:</strong> <span class="metric-modal-interpretation"></span></p></div>';
document.body.appendChild(metricModal);
function closeMetricModal(){metricModal.hidden=true;}
document.addEventListener('click',function(event){
  const button=event.target.closest('.metric-help-button');
  if(button){metricModal.querySelector('h3').textContent=button.dataset.metric;metricModal.querySelector('.metric-modal-meaning').textContent=button.dataset.meaning;metricModal.querySelector('.metric-modal-calculation').textContent=button.dataset.calculation;metricModal.querySelector('.metric-modal-interpretation').textContent=button.dataset.interpretation;metricModal.hidden=false;metricModal.querySelector('.metric-modal-close').focus();return;}
  if(event.target===metricModal||event.target.closest('.metric-modal-close'))closeMetricModal();
});
document.addEventListener('keydown',function(event){if(event.key==='Escape')closeMetricModal();});
document.querySelectorAll('table.scenario-period-table').forEach(function(table){
  const headerDirections={'Mean':1,'Median':1,'SD':-1,'VaR 95% loss':-1,'CVaR 95% loss':-1,'Maximum drawdown':1};
  const directions={};
  [...table.tHead.rows[0].cells].forEach((cell,i)=>{const key=cell.textContent.trim();if(key in headerDirections)directions[i]=headerDirections[key];});
  const rows=[...table.tBodies[0].rows];
  Object.entries(directions).forEach(([columnText,direction])=>{
    const column=Number(columnText), cells=rows.map(row=>row.cells[column]);
    const values=cells.map(cell=>Number.parseFloat(cell.textContent.replace(/[^0-9eE+.-]/g,'')));
    const finite=values.filter(Number.isFinite); if(!finite.length)return;
    const minimum=Math.min(...finite),maximum=Math.max(...finite),spread=maximum-minimum;
    cells.forEach((cell,index)=>{if(!Number.isFinite(values[index]))return;let score=spread?((values[index]-minimum)/spread):.5;if(direction<0)score=1-score;const hue=120*score;cell.style.backgroundColor=`hsl(${hue} 68% 82%)`;cell.style.color='#17212b';cell.title=`Investor-benefit score within this column: ${(100*score).toFixed(0)}%`;} );
  });
});
document.querySelectorAll('.report-chapter-nav a').forEach(function(link) {
  link.addEventListener('click',function(){
    const target=document.getElementById(link.hash.slice(1));
    if(target&&target.tagName==='DETAILS')target.open=true;
  });
});
document.querySelectorAll('details.stock-profile').forEach(function(profile) {
  profile.addEventListener('toggle', function() {
    if (!profile.open) return;
    profile.querySelectorAll('details.technical-indicators').forEach(function(section){section.open=true;});
    document.querySelectorAll('details.stock-profile[open]').forEach(function(other) {
      if (other !== profile) other.open = false;
    });
    profile.querySelectorAll('details.dominance-components[open] .dominance-explorer').forEach(initialiseDominanceExplorer);
    profile.querySelectorAll('details.frontier-components[open] .frontier-explorer').forEach(initialiseFrontierExplorer);
  });
});
document.querySelectorAll('.profile-filters').forEach(function(filterBlock) {
  const section=filterBlock.closest('details.report-section');
  if (!section) return;
    const signalFilters=[...filterBlock.querySelectorAll('.signal-filters input[type="checkbox"]')];
    const netsdFilters=[...filterBlock.querySelectorAll('.netsd-filters input[type="checkbox"]')];
    const dividendFilters=[...filterBlock.querySelectorAll('.dividend-filters input[type="checkbox"]')];
    const instrumentFilters=[...filterBlock.querySelectorAll('.instrument-type-filters input[type="radio"]')];
    const portfolioFilters=[...filterBlock.querySelectorAll('.portfolio-scope-filters input[type="radio"]')];
    const saleFilters=[...filterBlock.querySelectorAll('.sale-policy-filters input[type="radio"]')];
    const updateFilters=[...filterBlock.querySelectorAll('.update-filters input[type="radio"]')];
    const filters=[...signalFilters,...netsdFilters,...dividendFilters,...instrumentFilters,...portfolioFilters,...saleFilters,...updateFilters];
  const profiles=[...section.querySelectorAll('details.stock-profile')];
  const counter=filterBlock.querySelector('.profile-filter-count');
  function applyProfileFilters() {
      const selectedSignals=new Set(signalFilters.filter(box=>box.checked).map(box=>box.value));
      const selectedNetsdEffects=new Set(netsdFilters.filter(box=>box.checked).map(box=>box.value));
      const selectedDividendStatuses=new Set(dividendFilters.filter(box=>box.checked).map(box=>box.value));
    const selectedType=instrumentFilters.find(box=>box.checked)?.value || 'ALL';
    const selectedScope=portfolioFilters.find(box=>box.checked)?.value || 'STOCHASTIC';
    const selectedSale=saleFilters.find(box=>box.checked)?.value || 'ALL';
    const selectedUpdate=updateFilters.find(box=>box.checked)?.value || 'ALL';
    let visible=0;
    profiles.forEach(function(profile) {
        if(window.updateSelectedPortfolioProfile)window.updateSelectedPortfolioProfile(profile,selectedScope,selectedSale);
        const type=profile.classList.contains('fund-profile')?'FUND':'SHARE';
        const scopes=(profile.dataset.portfolioScopes??'STOCHASTIC ANY').split(' ');
        const saleMembership=JSON.parse(profile.dataset.saleMembership||'{}');
        const saleMatch=selectedSale==='ALL'||(saleMembership[selectedScope]||[]).includes(selectedSale);
        const updateMatch=selectedUpdate==='ALL'||profile.dataset.hasUpdate==='true';
        const signalMatch=(profile.dataset.signal||'').split(' ').some(signal=>selectedSignals.has(signal));
        const effectMatch=(profile.dataset.netsdEffect||'').split(' ').some(effect=>selectedNetsdEffects.has(effect));
        const show=updateMatch && saleMatch && (selectedScope==='ALL'||scopes.includes(selectedScope)) && (selectedType==='ALL'||selectedType===type) && signalMatch && effectMatch && selectedDividendStatuses.has(profile.dataset.dividendStatus);
      profile.hidden=!show;
      if (!show) profile.open=false;
      if (show) visible++;
    });
    if (counter) counter.textContent=`${visible} / ${profiles.length} shown`;
  }
  filters.forEach(box=>box.addEventListener('change',applyProfileFilters));
  applyProfileFilters();
});
document.querySelectorAll('details.portfolio-sensitivity').forEach(function(sensitivity) {
  sensitivity.addEventListener('toggle', function() {
    if (!sensitivity.open) return;
    const components = sensitivity.querySelector('details.dominance-components');
    if (components) { components.open=true; const box=components.querySelector('.dominance-explorer'); if(box)initialiseDominanceExplorer(box); }
  });
});

const reportVersion='0617cf388e22';
const palette = ['#1b1b1b','#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#a65628','#f781bf','#008080','#6a3d9a','#b2182b','#2166ac','#1b9e77','#d95f02'];
const linePatterns = [[],[10,5],[2,4],[10,4,2,4],[14,5],[6,3],[2,3,8,3],[12,3,3,3]];
function isExplorerVisible(box) {
  if(!box)return false;
  for(let node=box;node;node=node.parentElement){
    if(node.hidden || (node.tagName==='DETAILS'&&!node.open))return false;
  }
  return true;
}
const dominanceJsonPromises=new Map();
function initialiseDominanceExplorer(box) {
  if (!isExplorerVisible(box) || box.dataset.loaded) return;
  box.dataset.loaded = 'loading';
  const profile = box.dataset.asset, target = box.dataset.target || profile;
  const loadJson=url=>{if(!dominanceJsonPromises.has(url))dominanceJsonPromises.set(url,fetch(url+(url.includes('?')?'&':'?')+'v='+reportVersion).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).catch(error=>{dominanceJsonPromises.delete(url);throw error;}));return dominanceJsonPromises.get(url);};
  Promise.all([loadJson(box.dataset.source||`interactive/dominance/${profile}.json`),profile==='Portfolio'?Promise.resolve(null):loadJson(box.dataset.universe||'interactive/dominance/Portfolio.json')]).then(([data,universe]) => {
    // Individual files stay compact.  Other-share curves are interpolated from
    // the one shared universe file only when a stock profile is opened.
    if(universe){
      data.series_types=universe.series_types||{};
      data.portfolio_codes=universe.portfolio_codes||{};
      data.sorted_returns=universe.sorted_returns;
      const interpolate=(xs,ys,x)=>{if(x<=xs[0])return ys[0];if(x>=xs[xs.length-1])return ys[ys.length-1];let lo=0,hi=xs.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(xs[mid]<=x)lo=mid;else hi=mid;}const w=(x-xs[lo])/(xs[hi]-xs[lo]||1);return ys[lo]+w*(ys[hi]-ys[lo]);};
      Object.keys(data.orders).forEach(component=>{const destination=data.orders[component],source=universe.orders[component];Object.entries(source.series).forEach(([name,values])=>{if(!destination.series[name])destination.series[name]=destination.x.map(x=>interpolate(source.x,values,x));});});
    }
    const displayLabel=name=>name==='update3_stochastic_recourse_sell'?'Main: gated recourse':name==='update3_stochastic_sell'?'Stochastic: gated sales both stages':name==='update3_stochastic_no_sell'?'Stochastic: no sales':name==='Baltic_NetSD'?'Update: sales allowed':name==='curent_update_baltic'?'Update: no sales':name==='update2_penalty_sell'?'Update2 penalty: sales allowed':name==='update2_penalty_no_sell'?'Update2 penalty: no sales':name;
    const displayName=name=>`${(data.portfolio_codes||{})[name]?data.portfolio_codes[name]+' — ':''}${displayLabel(name)}`;
    const first=data.orders.FSD, seriesNames=Object.keys(first.series), preferred=profile==='Portfolio'?['Current','Update long: gated recourse','Update long: no sales','Update long: gated sales both stages','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','SP500']:[ 'Current','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell','SP500','curent_update_baltic','Baltic_NetSD','update2_penalty_sell','update2_penalty_no_sell'];
    const portfolioNames=seriesNames.filter(x=>(data.series_types||{})[x]==='portfolio');
    const shareNames=seriesNames.filter(x=>['share','fund'].includes((data.series_types||{})[x]));
    const fundNames=shareNames.filter(x=>(data.series_types||{})[x]==='fund');
    const benchmarkPool=profile==='Portfolio'?seriesNames:portfolioNames;
    const benchmarks=[...preferred.filter(x=>benchmarkPool.includes(x)),...benchmarkPool.filter(x=>!preferred.includes(x))];
    const otherShares=shareNames.filter(x=>x!==target);
    const defaultSelected=new Set(preferred.filter(x=>seriesNames.includes(x)).slice(0,3));
    const defaultComparators=new Set(['Current','Update long: gated recourse','Update long: no sales','Update long: gated sales both stages','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','update3_funds_sell','update3_funds_no_sell','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell'].filter(x=>benchmarks.includes(x)));
    box.innerHTML = `${profile==='Portfolio'?`<p class="dom-exact-note">Same portfolio codes and ${data.sample?.observations||''} historical observations as the portfolio-only dominance matrices. FSD is an exact right-continuous empirical step function. Row A dominates column B when F(A) ≤ F(B) everywhere, with strict inequality somewhere; other selected curves may still cross. In the lower panels, B minus A is then nonnegative.</p><div class="dom-matrix-pair"><label>Matrix row (candidate dominator)<select class="dom-pair-row">${portfolioNames.filter(x=>data.portfolio_codes?.[x]).map(x=>`<option value="${x}"${x==='update3_stochastic_no_sell'?' selected':''}>${displayName(x)}</option>`).join('')}</select></label><label>Matrix column<select class="dom-pair-column">${portfolioNames.filter(x=>data.portfolio_codes?.[x]).map(x=>`<option value="${x}"${x==='Baltic_NetSD'?' selected':''}>${displayName(x)}</option>`).join('')}</select></label><button type="button" class="dom-pair-check">Show this matrix pair only</button></div><p class="dom-pair-result" role="status"></p>`:''}<div class="dominance-controls">
      <label>Component<select class="dom-order"><option>FSD</option><option>SSD</option><option>TSD</option></select></label>
      ${profile==='Portfolio'?`<label>Comparison base<select class="dom-benchmark">${benchmarks.map(x=>`<option value="${x}"${x===target?' selected':''}>${displayName(x)}</option>`).join('')}</select></label>`:
      `<label class="dominance-compact-wrap">Comparison portfolios
        <select class="dom-comparators dominance-multiselect dominance-compact-select" multiple size="5">${benchmarks.map(x=>`<option value="${x}"${defaultComparators.has(x)?' selected':''}>${displayName(x)}</option>`).join('')}</select>
        <small>Ctrl/Cmd selects several.</small></label>
       <label class="dominance-compact-wrap">Other shares
        <select class="dom-share-comparators dominance-multiselect dominance-compact-select" multiple size="5">${otherShares.map(x=>`<option value="${x}">${x}</option>`).join('')}</select>
        <small>Optional share comparisons.</small></label>`}
      ${profile==='Portfolio'?`<label class="dominance-multiselect-wrap">Displayed portfolios and shares
        <select class="dominance-multiselect" multiple size="10">
          <optgroup label="Portfolios">${portfolioNames.map(x=>`<option value="${x}"${defaultSelected.has(x)?' selected':''}>${displayName(x)}</option>`).join('')}</optgroup>
          <optgroup label="Shares">${shareNames.filter(x=>!fundNames.includes(x)).map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
          <optgroup label="Funds">${fundNames.map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
        </select><small>Use Ctrl (Windows) or Cmd (Mac) to select several entries.</small></label>`:''}
      <label>X position: <output class="dom-xout">50.0%</output><input class="dom-xpos" type="range" min="0" max="1000" value="500" step="1"></label>
      <label>Horizontal magnification: <output class="dom-hout">8x</output><input class="dom-hzoom" type="range" min="1" max="100" value="8" step="1"></label>
      <button class="dom-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="dominance-canvas"></canvas><p class="dominance-status">Move the x-position slider, click a left-hand graph, or use the mouse wheel over it. The right-hand panels magnify the selected interval.</p>`;
    const canvas=box.querySelector('canvas'), order=box.querySelector('.dom-order'), benchmark=box.querySelector('.dom-benchmark'), comparators=box.querySelector('.dom-comparators'), shareComparators=box.querySelector('.dom-share-comparators'), multi=profile==='Portfolio'?box.querySelector('.dominance-multiselect'):null, xpos=box.querySelector('.dom-xpos'), hz=box.querySelector('.dom-hzoom'), status=box.querySelector('.dominance-status');
    let centre=.5, hit=[];
    const upperBound=(a,x)=>{let l=0,r=a.length;while(l<r){const m=(l+r)>>1;if(a[m]<=x)l=m+1;else r=m;}return l;};
    function render() {
      let d=data.orders[order.value]; const selected=multi?[...multi.selectedOptions].map(o=>o.value):[];
      const selectedComparators=[...(comparators?[...comparators.selectedOptions].map(o=>o.value):[]),...(shareComparators?[...shareComparators.selectedOptions].map(o=>o.value):[])];
      const bench=profile==='Portfolio'?benchmark.value:(selectedComparators[0]||'');
      // A share profile always compares that concrete share with the selected
      // portfolio.  The portfolio explorer instead uses the selected benchmark
      // as its base and may compare it with several selected entities.
      const baseName=profile==='Portfolio'?bench:target;
      const names=(profile==='Portfolio'?[baseName,...selected]:[target,...selectedComparators]).filter((k,i,a)=>d.series[k]&&a.indexOf(k)===i);
      if(order.value==='FSD'&&data.sorted_returns&&names.every(k=>data.sorted_returns[k])){
        const support=[...new Set(names.flatMap(k=>data.sorted_returns[k]))].sort((a,b)=>a-b),padding=Math.max((support.at(-1)-support[0])*.01,1e-8);
        const exactX=[support[0]-padding,...support,support.at(-1)+padding];
        d={x:exactX,series:Object.fromEntries(names.map(k=>{const a=data.sorted_returns[k];return[k,exactX.map(v=>upperBound(a,v)/a.length)];}))};
      } else if(box.dataset.source&&data.sorted_returns&&names.every(k=>data.sorted_returns[k])) {
        const low=Math.min(...names.map(k=>data.sorted_returns[k][0])),high=Math.max(...names.map(k=>data.sorted_returns[k].at(-1))),padding=Math.max((high-low)*.01,1e-8);
        const indices=d.x.map((v,i)=>i).filter(i=>d.x[i]>=low-padding&&d.x[i]<=high+padding);
        if(indices.length>2)d={x:indices.map(i=>d.x[i]),series:Object.fromEntries(names.map(k=>[k,indices.map(i=>d.series[k][i])]))};
      }
      const x=d.x,n=x.length;
      const rect=canvas.getBoundingClientRect(), ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3);
      canvas.width=Math.max(900,Math.round(rect.width*ratio)); canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0); const W=canvas.width/ratio,H=canvas.height/ratio;
      ctx.clearRect(0,0,W,H); ctx.font='12px system-ui';
      const L=67,R=18,T=Math.max(128,48+Math.ceil(names.length/3)*23),rowGap=64,colGap=48,leftW=(W-L-R-colGap)*.64,rightW=(W-L-R-colGap)*.36,panelH=(H-T-rowGap-48)/2;
      const main={l:L,r:L+leftW,t:T,b:T+panelH}, zoom={l:L+leftW+colGap,r:W-R,t:T,b:T+panelH};
      const diff={l:L,r:L+leftW,t:T+panelH+rowGap,b:T+2*panelH+rowGap}, diffZoom={l:L+leftW+colGap,r:W-R,t:T+panelH+rowGap,b:T+2*panelH+rowGap}; hit=[main,diff];
      const mid=Math.round(centre*(n-1)), count=Math.max(8,Math.round(n/Number(hz.value))), lo=Math.max(0,Math.min(n-count,mid-Math.floor(count/2))), hi=Math.min(n-1,lo+count-1);
      const comparisonNames=profile==='Portfolio'?names.filter(k=>k!==baseName):selectedComparators.filter(k=>d.series[k]);
      if(!comparisonNames.length){status.textContent='Select at least one portfolio or share in addition to the comparison base.';return;}
      const differences=Object.fromEntries(comparisonNames.map(k=>[k,d.series[baseName].map((v,i)=>v-d.series[k][i])]));
      const focus=profile==='Portfolio'?comparisonNames[0]:bench, difference=differences[focus];
      function yrange(i0,i1,keys=names) { let mn=Infinity,mx=-Infinity; keys.forEach(k=>{for(let i=i0;i<=i1;i++){const v=d.series[k][i];if(v<mn)mn=v;if(v>mx)mx=v;}}); if(mx===mn){mx+=1;mn-=1} return [mn,mx]; }
      function arrayRange(a,i0,i1){let mn=Infinity,mx=-Infinity;for(let i=i0;i<=i1;i++){if(a[i]<mn)mn=a[i];if(a[i]>mx)mx=a[i];}if(mx===mn){mx+=1;mn-=1}return[mn,mx];}
      function differenceRange(i0,i1){let mn=Infinity,mx=-Infinity;comparisonNames.forEach(k=>{const r=arrayRange(differences[k],i0,i1);mn=Math.min(mn,r[0]);mx=Math.max(mx,r[1]);});if(mx===mn){mx+=1;mn-=1}return[mn,mx];}
      function axes(p,x0,x1,y0,y1,label) { ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.l,p.t);ctx.lineTo(p.l,p.b);ctx.lineTo(p.r,p.b);ctx.stroke();ctx.fillStyle='#263d4b';ctx.fillText(label,p.l,p.t-9); for(let j=0;j<=6;j++){const xx=p.l+(p.r-p.l)*j/6,xv=x0+(x1-x0)*j/6;ctx.fillText(xv.toFixed(5),xx-22,p.b+17);} for(let j=0;j<=5;j++){const yy=p.b-(p.b-p.t)*j/5,yv=y0+(y1-y0)*j/5;ctx.fillText(yv.toExponential(2),Math.max(1,p.l-62),yy+4);} if(x0<=0&&x1>=0){const zx=p.l+(0-x0)/(x1-x0)*(p.r-p.l);ctx.strokeStyle='#17212b';ctx.lineWidth=2;ctx.setLineDash([6,4]);ctx.beginPath();ctx.moveTo(zx,p.t);ctx.lineTo(zx,p.b);ctx.stroke();ctx.setLineDash([]);} if(y0<=0&&y1>=0){const zy=p.b-(0-y0)/(y1-y0)*(p.b-p.t);ctx.strokeStyle='#17212b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(p.l,zy);ctx.lineTo(p.r,zy);ctx.stroke();ctx.fillStyle='#17212b';ctx.font='bold 13px system-ui';ctx.fillText('0',p.l-15,zy+4);ctx.font='12px system-ui';} }
      function seriesStyle(k,ki){
        if(k===baseName)return{colour:profile==='Portfolio'?'#111111':'#c2185b',dash:[],width:3.6,alpha:1};
        if(k==='Current')return{colour:'#009e73',dash:[12,5],width:3.0,alpha:1};
        if(k==='Baltic_NetSD')return{colour:'#0072b2',dash:[2,4],width:3.0,alpha:1};
        if(k==='curent_update_baltic')return{colour:'#d55e00',dash:[10,4,2,4],width:3.0,alpha:1};
        if(k===bench)return{colour:'#6a3d9a',dash:[14,5],width:3.0,alpha:1};
        return{colour:palette[ki%palette.length],dash:linePatterns[ki%linePatterns.length],width:1.6,alpha:.62};
      }
      function plot(p,i0,i1,y0,y1) { names.forEach((k,ki)=>{const style=seriesStyle(k,ki);ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.globalAlpha=style.alpha;ctx.lineWidth=style.width;ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(d.series[k][i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else {if(order.value==='FSD')ctx.lineTo(px,p.b-(d.series[k][i-1]-y0)/(y1-y0||1)*(p.b-p.t));ctx.lineTo(px,py);}}ctx.stroke();});ctx.globalAlpha=1;ctx.setLineDash([]); }
      function plotDifference(p,i0,i1,y0,y1){comparisonNames.forEach(k=>{const a=differences[k],style=seriesStyle(k,names.indexOf(k));ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.lineWidth=k===bench?3.4:(profile==='Portfolio'?1.7:2.8);ctx.globalAlpha=k===bench?1:(profile==='Portfolio'?.68:1);ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(a[i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else {if(order.value==='FSD')ctx.lineTo(px,p.b-(a[i-1]-y0)/(y1-y0||1)*(p.b-p.t));ctx.lineTo(px,py);}}ctx.stroke();});ctx.globalAlpha=1;ctx.setLineDash([]);}
      const ym=yrange(0,n-1); axes(main,x[0],x[n-1],ym[0],ym[1],`${displayName(baseName)}: ${order.value} components - scroll or click to move`); plot(main,0,n-1,ym[0],ym[1]);
      const sx0=main.l+(x[lo]-x[0])/(x[n-1]-x[0])*(main.r-main.l), sx1=main.l+(x[hi]-x[0])/(x[n-1]-x[0])*(main.r-main.l);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,main.t,Math.max(2,sx1-sx0),main.b-main.t);
      let yz=yrange(lo,hi); axes(zoom,x[lo],x[hi],yz[0],yz[1],`Selected component interval (${hz.value}x horizontal)`); plot(zoom,lo,hi,yz[0],yz[1]);
      let yd=differenceRange(0,n-1);axes(diff,x[0],x[n-1],yd[0],yd[1],profile==='Portfolio'?`${displayName(baseName)} minus selected portfolios and shares`:`${target} minus selected portfolios and shares`);plotDifference(diff,0,n-1,yd[0],yd[1]);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,diff.t,Math.max(2,sx1-sx0),diff.b-diff.t);
      let ydz=differenceRange(lo,hi);axes(diffZoom,x[lo],x[hi],ydz[0],ydz[1],`Selected difference interval (${hz.value}x horizontal)`);plotDifference(diffZoom,lo,hi,ydz[0],ydz[1]);
      const legend=names; legend.forEach((k,j)=>{const style=seriesStyle(k,names.indexOf(k)),lx=L+(j%3)*Math.max(190,(W-L-R)/3),ly=20+Math.floor(j/3)*20;ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.lineWidth=style.width;ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(lx+24,ly);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#263d4b';ctx.fillText(displayName(k),lx+31,ly+4);});
      const values=names.map(k=>`${displayName(k)}=${d.series[k][mid].toExponential(5)}`).join(' | '); status.textContent=`x=${x[mid].toFixed(6)}; selected interval [${x[lo].toFixed(6)}, ${x[hi].toFixed(6)}]; ${displayName(baseName)}-${displayName(focus)}=${difference[mid].toExponential(5)} | ${values}`;
      xpos.value=Math.round(centre*1000);box.querySelector('.dom-xout').value=`${(100*centre).toFixed(1)}%`;box.querySelector('.dom-hout').value=`${hz.value}x`;
    }
    [order,benchmark,comparators,shareComparators,hz,multi].filter(Boolean).forEach(el=>el.addEventListener('input',render));xpos.addEventListener('input',()=>{centre=Number(xpos.value)/1000;render();});
    if(profile==='Portfolio')box.querySelector('.dom-pair-check').addEventListener('click',()=>{
      const row=box.querySelector('.dom-pair-row').value,column=box.querySelector('.dom-pair-column').value;
      benchmark.value=column;[...multi.options].forEach(o=>o.selected=o.value===row);order.value='FSD';centre=.5;render();
      const a=(data.fsd_pair_audit||[]).find(a=>a.row===row&&a.column===column);
      box.querySelector('.dom-pair-result').textContent=a?`${displayName(row)} ${a.dominates?'FSD dominates':'does not FSD dominate'} ${displayName(column)}. Exact F(row) − F(column): minimum ${a.minimum.toFixed(8)}, maximum ${a.maximum.toFixed(8)} over the entire empirical support.`:'Pair audit unavailable.';
    });
    canvas.addEventListener('click',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;const p=hit.find(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b);if(p){centre=Math.max(0,Math.min(1,(px-p.l)/(p.r-p.l)));render();}});
    canvas.addEventListener('wheel',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;if(hit.some(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b)){e.preventDefault();centre=Math.max(0,Math.min(1,centre+Math.sign(e.deltaY)*.015));render();}},{passive:false});
    box.querySelector('.dom-save').addEventListener('click',()=>{const a=document.createElement('a');a.download=`${profile==='Portfolio'?benchmark.value:target}_${order.value}_interactive.png`;a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render); render(); box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive graph could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.dominance-components').forEach(function(d) { d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.dominance-explorer');if(box)initialiseDominanceExplorer(box);}}); });

function initialiseFrontierExplorer(box) {
  if (!isExplorerVisible(box) || box.dataset.loaded) return;
  box.dataset.loaded='loading';
  fetch((box.dataset.source||'interactive/frontiers.json')+'?v='+reportVersion).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(data=>{
    const models=Object.keys(data.models), first=data.models[models[0]], names=first.portfolios.map(p=>p.name);
    const portfolioNames=first.portfolios.filter(p=>p.type==='portfolio'&&p.name!=='Current').map(p=>p.name), sharePoints=first.portfolios.filter(p=>['share','fund'].includes(p.type)), shareNames=sharePoints.map(p=>p.name), fundNames=sharePoints.filter(p=>p.type==='fund').map(p=>p.name), heldShares=new Set(sharePoints.filter(p=>p.held).map(p=>p.name));
    const preferred=['update3_funds_sell','update3_funds_no_sell','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','NetSD_full','NetSD_training'];
    box.innerHTML=`<div class="frontier-controls">
      <label class="frontier-multiselect-wrap">Compare Current with portfolios and shares
        <select class="frontier-multiselect" multiple size="10">
          <optgroup label="Portfolios">${[...preferred.filter(x=>portfolioNames.includes(x)),...portfolioNames.filter(x=>!preferred.includes(x))].map(x=>`<option value="${x}" ${['Update long: gated recourse','Update long: no sales','Update long: gated sales both stages','Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','update3_funds_sell','update3_funds_no_sell','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell'].includes(x)?'selected':''}>${x}</option>`).join('')}</optgroup>
          <optgroup label="Shares currently held">${shareNames.filter(x=>heldShares.has(x)).map(x=>`<option value="${x}" selected>${x}</option>`).join('')}</optgroup>
          <optgroup label="Other shares">${shareNames.filter(x=>!heldShares.has(x)&&!fundNames.includes(x)).map(x=>`<option value="${x}"${x===box.dataset.highlight?' selected':''}>${x}</option>`).join('')}</optgroup>
          <optgroup label="Funds">${fundNames.map(x=>`<option value="${x}"${x===box.dataset.highlight?' selected':''}>${x}</option>`).join('')}</optgroup>
        </select><span class="frontier-select-help">Hold Ctrl (Windows) or Command (Mac) to select several entries.</span>
      </label>
      <label>Horizontal view: <output class="front-xout">100%</output><input class="front-xzoom" type="range" min="20" max="100" value="100" step="1"></label>
      <label>Vertical view: <output class="front-yout">100%</output><input class="front-yzoom" type="range" min="20" max="100" value="100" step="1"></label>
      <button class="front-reset" type="button">Reset view</button><button class="front-save" type="button">Save high-resolution PNG</button>
    </div><div class="frontier-canvas-grid">
      <div class="frontier-panel"><label>Left frontier model<select class="front-model-left">${models.map(x=>`<option${x==='Markowitz'?' selected':''}>${x}</option>`).join('')}</select></label><canvas class="frontier-canvas"></canvas></div>
      <div class="frontier-panel"><label>Right frontier model<select class="front-model-right">${models.map(x=>`<option${x==='NetSD'?' selected':''}>${x}</option>`).join('')}</select></label><canvas class="frontier-canvas"></canvas></div>
    </div><p class="frontier-status"></p>
    <details class="frontier-dividend-copy" open><summary><strong>Mean return and five-year average dividend yield versus all portfolios</strong></summary><div class="dividend-explorer" data-source="${box.dataset.source?'interactive/dominance/LongDividends.json':''}" data-highlight="${box.dataset.highlight||''}" data-static="figures/return_dividend_all_portfolios.png"></div><p>The horizontal axis is realised mean one-period return. The vertical axis is the five-year average annual historical dividend yield measured using the share price at each ex-dividend date. Other eligible shares are transparent background points; portfolios are labelled. This is historical and is not a dividend forecast.</p></details>`;
    initialiseDividendExplorer(box.querySelector('.dividend-explorer'));
    const canvases=[...box.querySelectorAll('canvas')], leftModel=box.querySelector('.front-model-left'), rightModel=box.querySelector('.front-model-right'), compareSelect=box.querySelector('.frontier-multiselect'), xzoom=box.querySelector('.front-xzoom'), yzoom=box.querySelector('.front-yzoom'), status=box.querySelector('.frontier-status');
    function draw(canvas,modelValue){
      const d=data.models[modelValue], frontier=d.frontier, points=d.portfolios;
      const ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3), rect=canvas.getBoundingClientRect();
      canvas.width=Math.max(900,Math.round(rect.width*ratio));canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);const W=canvas.width/ratio,H=canvas.height/ratio,L=82,R=28,T=45,B=68;
      ctx.clearRect(0,0,W,H);ctx.font='12px system-ui';
      const risks=[...frontier.map(p=>p.risk),...points.map(p=>p.risk)], means=[...frontier.map(p=>p.mean),...points.map(p=>p.mean)];
      const fullX=[Math.min(...risks,0),Math.max(...risks)*1.10],fullY=[Math.min(...means,0),Math.max(...means)*1.10];
      const xf=Number(xzoom.value)/100,yf=Number(yzoom.value)/100;
      const x0=fullX[0],x1=x0+(fullX[1]-x0)*xf,y0=fullY[0],y1=y0+(fullY[1]-y0)*yf;
      const sx=x=>L+(x-x0)/(x1-x0||1)*(W-L-R), sy=y=>H-B-(y-y0)/(y1-y0||1)*(H-T-B);
      ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(L,T);ctx.lineTo(L,H-B);ctx.lineTo(W-R,H-B);ctx.stroke();
      for(let j=0;j<=6;j++){const v=x0+(x1-x0)*j/6,px=sx(v);ctx.fillStyle='#344c5a';ctx.fillText(v.toFixed(5),px-22,H-B+20);}
      for(let j=0;j<=6;j++){const v=y0+(y1-y0)*j/6,py=sy(v);ctx.fillStyle='#344c5a';ctx.fillText(v.toFixed(5),8,py+4);}
      ctx.font='bold 13px system-ui';ctx.fillStyle='#173246';ctx.fillText(d.risk_label,L,H-18);ctx.save();ctx.translate(18,(T+H-B)/2);ctx.rotate(-Math.PI/2);ctx.fillText('Mean daily return',0,0);ctx.restore();
      ctx.strokeStyle='#007f8b';ctx.lineWidth=3;ctx.beginPath();frontier.forEach((p,i)=>{const px=sx(p.risk),py=sy(p.mean);if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);});ctx.stroke();
      const selected=new Set([...compareSelect.selectedOptions].map(x=>x.value)), labelled=new Set(['Current',...selected]);
      points.forEach((p,pi)=>{if(p.risk<x0||p.risk>x1||p.mean<y0||p.mean>y1)return;const isCurrent=p.name==='Current',isSelected=selected.has(p.name),isShare=p.type==='share';ctx.beginPath();if(isShare&&isSelected){ctx.rect(sx(p.risk)-6,sy(p.mean)-6,12,12);}else{ctx.arc(sx(p.risk),sy(p.mean),isCurrent||isSelected?7:(isShare?3:4),0,2*Math.PI);}ctx.fillStyle=isCurrent?'#d7191c':isSelected?(p.name==='Baltic_NetSD'?'#0072b2':p.name==='curent_update_baltic'?'#009e73':palette[pi%palette.length]):(isShare?'#d5dadd':'#8f9ba2');ctx.fill();ctx.strokeStyle=isSelected?'#17212b':'#fff';ctx.lineWidth=isSelected?1.5:1;ctx.stroke();if(labelled.has(p.name)){ctx.font='bold 12px system-ui';ctx.fillStyle='#17212b';ctx.fillText(p.name,sx(p.risk)+9,sy(p.mean)-7);}});
      ctx.strokeStyle='#007f8b';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(L,T-20);ctx.lineTo(L+28,T-20);ctx.stroke();ctx.fillStyle='#17212b';ctx.font='12px system-ui';ctx.fillText(modelValue==='NetSD'?(frontier.length?'Observed nondominated envelope':'Discrete netSD candidate points'):modelValue==='Robust'?'Empirical mean-CVaR relaxation':'Efficient frontier',L+36,T-16);
      return points.find(p=>p.name==='Current');
    }
    function render(){const left=draw(canvases[0],leftModel.value),right=draw(canvases[1],rightModel.value);status.textContent=`Left ${leftModel.value}: Current risk ${left.risk.toFixed(6)}, mean ${left.mean.toFixed(6)} | Right ${rightModel.value}: Current risk ${right.risk.toFixed(6)}, mean ${right.mean.toFixed(6)}. ${data.models[leftModel.value].note||''} ${data.models[rightModel.value].note||''}`;box.querySelector('.front-xout').value=`${xzoom.value}%`;box.querySelector('.front-yout').value=`${yzoom.value}%`;}
    [leftModel,rightModel,xzoom,yzoom,compareSelect].forEach(x=>x.addEventListener('input',render));
    canvases.forEach(canvas=>canvas.addEventListener('wheel',e=>{e.preventDefault();const control=e.shiftKey?yzoom:xzoom;control.value=Math.max(20,Math.min(100,Number(control.value)+Math.sign(e.deltaY)*4));render();},{passive:false}));
    box.querySelector('.front-reset').addEventListener('click',()=>{xzoom.value=100;yzoom.value=100;render();});
    box.querySelector('.front-save').addEventListener('click',()=>{canvases.forEach((canvas,index)=>{const a=document.createElement('a');a.download=`${index?'right':'left'}_${index?rightModel.value:leftModel.value}_interactive_frontier.png`;a.href=canvas.toDataURL('image/png');a.click();});});
    window.addEventListener('resize',render);render();box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive frontier could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.frontier-components').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.frontier-explorer');if(box)initialiseFrontierExplorer(box);}});if(d.open){const box=d.querySelector('.frontier-explorer');if(box)initialiseFrontierExplorer(box);}});

function initialiseCumulativeExplorer(box) {
  if (!isExplorerVisible(box) || box.dataset.loaded) return;
  box.dataset.loaded='loading';
  fetch('interactive/cumulative_drawdown.json?v='+reportVersion).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(data=>{
    const names=Object.keys(data.series), types=data.series_types||{};
    const portfolios=names.filter(x=>types[x]==='portfolio'), shares=names.filter(x=>types[x]==='share'),funds=names.filter(x=>types[x]==='fund');
    const preferred=['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','SP500'];
    const orderedPortfolios=[...preferred.filter(x=>portfolios.includes(x)),...portfolios.filter(x=>!preferred.includes(x))];
    const defaults=new Set(['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','update3_funds_sell','update3_funds_no_sell','update3_stochastic_recourse_sell','update3_stochastic_no_sell','update3_stochastic_sell']);
    box.innerHTML=`<div class="cumulative-controls">
      <label class="cumulative-multiselect-wrap">Displayed portfolios, benchmark and shares
        <select class="cumulative-multiselect" multiple size="10">
          <optgroup label="Portfolios and benchmark">${orderedPortfolios.map(x=>`<option value="${x}"${defaults.has(x)?' selected':''}>${x}</option>`).join('')}</optgroup>
          <optgroup label="Individual shares">${shares.map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
          <optgroup label="Funds">${funds.map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
        </select><small>Use Ctrl (Windows) or Cmd (Mac) to select several entries.</small>
      </label><button class="cum-reset" type="button">Reset selection</button><button class="cum-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="cumulative-canvas"></canvas><p class="cumulative-status"></p>`;
    const select=box.querySelector('.cumulative-multiselect'), canvas=box.querySelector('canvas'), status=box.querySelector('.cumulative-status');
    function styleFor(name,index){
      if(name==='Current')return{colour:'#d7191c',dash:[],width:3.4};
      if(name==='Baltic_NetSD')return{colour:'#0072b2',dash:[10,4],width:3};
      if(name==='curent_update_baltic')return{colour:'#009e73',dash:[2,4],width:3};
      if(name==='SP500')return{colour:'#7b3294',dash:[12,4,2,4],width:2.8};
      return{colour:palette[index%palette.length],dash:linePatterns[index%linePatterns.length],width:2};
    }
    function render(){
      const selected=[...select.selectedOptions].map(o=>o.value);
      if(!selected.length){status.textContent='Select at least one portfolio or share.';return;}
      const ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3), rect=canvas.getBoundingClientRect();
      canvas.width=Math.max(900,Math.round(rect.width*ratio));canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);const W=canvas.width/ratio,H=canvas.height/ratio;
      ctx.clearRect(0,0,W,H);ctx.font='12px system-ui';
      const L=72,R=24,T=Math.max(58,28+Math.ceil(selected.length/4)*19),B=48,G=56,panelH=(H-T-B-G)/2;
      const upper={l:L,r:W-R,t:T,b:T+panelH},lower={l:L,r:W-R,t:T+panelH+G,b:H-B};
      const n=data.dates.length, dates=data.dates.map(x=>new Date(x+'T00:00:00'));
      function range(key){let mn=Infinity,mx=-Infinity;selected.forEach(name=>data.series[name][key].forEach(v=>{mn=Math.min(mn,v);mx=Math.max(mx,v);}));if(mx===mn){mx+=1;mn-=1}const pad=(mx-mn)*.06;return[mn-pad,mx+pad];}
      function axes(p,yr,label,showDates){ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.l,p.t);ctx.lineTo(p.l,p.b);ctx.lineTo(p.r,p.b);ctx.stroke();ctx.fillStyle='#263d4b';ctx.font='bold 12px system-ui';ctx.fillText(label,p.l,p.t-9);ctx.font='12px system-ui';for(let j=0;j<=5;j++){const v=yr[0]+(yr[1]-yr[0])*j/5,y=p.b-(v-yr[0])/(yr[1]-yr[0])*(p.b-p.t);ctx.fillText(v.toFixed(label.startsWith('Drawdown')?2:3),5,y+4);ctx.strokeStyle='#e1e8eb';ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(p.r,y);ctx.stroke();}if(showDates){for(let j=0;j<=6;j++){const i=Math.round((n-1)*j/6),x=p.l+(p.r-p.l)*j/6;ctx.fillStyle='#344c5a';ctx.fillText(data.dates[i].slice(0,7),x-23,p.b+18);}}}
      function plot(p,key,yr){selected.forEach((name,index)=>{const values=data.series[name][key],s=styleFor(name,index);ctx.strokeStyle=s.colour;ctx.setLineDash(s.dash);ctx.lineWidth=s.width;ctx.beginPath();values.forEach((v,i)=>{const x=p.l+(p.r-p.l)*i/(n-1),y=p.b-(v-yr[0])/(yr[1]-yr[0])*(p.b-p.t);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.stroke();});ctx.setLineDash([]);}
      const wealthRange=range('cumulative'),drawRange=range('drawdown');axes(upper,wealthRange,'Cumulative value of 1 monetary unit',false);plot(upper,'cumulative',wealthRange);axes(lower,drawRange,'Drawdown from previous peak',true);plot(lower,'drawdown',drawRange);
      selected.forEach((name,j)=>{const s=styleFor(name,j),x=L+(j%4)*Math.max(150,(W-L-R)/4),y=18+Math.floor(j/4)*19;ctx.strokeStyle=s.colour;ctx.setLineDash(s.dash);ctx.lineWidth=s.width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+24,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#263d4b';ctx.font='12px system-ui';ctx.fillText(name,x+30,y+4);});
      status.textContent=selected.map(name=>{const s=data.series[name],last=s.cumulative.length-1;return`${name}: final value ${s.cumulative[last].toFixed(3)}, maximum drawdown ${(100*Math.min(...s.drawdown)).toFixed(2)}%`;}).join(' | ');
    }
    select.addEventListener('input',render);
    box.querySelector('.cum-reset').addEventListener('click',()=>{[...select.options].forEach(o=>o.selected=defaults.has(o.value));render();});
    box.querySelector('.cum-save').addEventListener('click',()=>{const a=document.createElement('a');a.download='interactive_cumulative_value_drawdowns.png';a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render);render();box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive graph could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.cumulative-components').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.cumulative-explorer');if(box)initialiseCumulativeExplorer(box);}});if(d.open){const box=d.querySelector('.cumulative-explorer');if(box)initialiseCumulativeExplorer(box);}});
document.querySelectorAll('details.report-section').forEach(function(section){section.addEventListener('toggle',function(){if(!section.open)return;section.querySelectorAll('details.dominance-components[open] .dominance-explorer').forEach(initialiseDominanceExplorer);section.querySelectorAll('details.frontier-components[open] .frontier-explorer').forEach(initialiseFrontierExplorer);section.querySelectorAll('details.cumulative-components[open] .cumulative-explorer').forEach(initialiseCumulativeExplorer);});});
let dividendScatterData;
const dividendScatterVariants={};
function initialiseDividendExplorer(box) {
  if(!box||box.dataset.loaded)return;
  box.dataset.loaded='loading';
  const source=box.dataset.source||'interactive/return_dividend.json';
  if(!dividendScatterVariants[source])dividendScatterVariants[source]=fetch(source+'?v='+reportVersion).then(r=>{if(!r.ok)throw Error(`HTTP ${r.status}`);return r.json();});
  dividendScatterVariants[source].then(data=>{
    const highlight=box.dataset.highlight||'', points=data.points;
    const ns='http://www.w3.org/2000/svg';
    const make=(tag,attrs={},parent=null,text=null)=>{const e=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text!==null)e.textContent=text;if(parent)parent.appendChild(e);return e;};
    box.innerHTML='<div class="dividend-toolbar"><span>Hover for details · click a point to pin/unpin its name.</span><button type="button" class="dividend-clear">Clear labels</button><button type="button" class="dividend-save">Save SVG</button></div><div class="dividend-plot"></div><div class="dividend-tooltip" role="tooltip" hidden></div><p class="dividend-selection" aria-live="polite"></p>';
    const svg=make('svg',{viewBox:'0 0 1000 520',role:'group','aria-label':'Mean daily return and five-year average dividend yield','font-family':'system-ui, sans-serif','font-size':11},box.querySelector('.dividend-plot'));
    make('title',{},svg,'Mean return and five-year average dividend yield versus all portfolios');
    make('rect',{x:0,y:0,width:1000,height:520,fill:'white'},svg);
    const L=78,R=975,T=45,B=452;
    let xmin=Math.min(0,...points.map(p=>p.mean)), xmax=Math.max(0,...points.map(p=>p.mean));
    const xp=Math.max((xmax-xmin)*.09,.0001);xmin-=xp;xmax+=xp;
    const ymax=Math.max(1,...points.map(p=>p.yield_percent))*1.12,ymin=-ymax*.035;
    const sx=x=>L+(x-xmin)/(xmax-xmin)*(R-L),sy=y=>B-(y-ymin)/(ymax-ymin)*(B-T);
    for(let j=0;j<=6;j++){
      const x=xmin+(xmax-xmin)*j/6, px=sx(x);
      make('line',{x1:px,y1:T,x2:px,y2:B,stroke:'#e6edef'},svg);
      make('text',{x:px,y:B+22,'text-anchor':'middle',fill:'#405968'},svg,x.toFixed(3));
    }
    for(let j=0;j<=5;j++){
      const y=ymax*j/5,py=sy(y);
      make('line',{x1:L,y1:py,x2:R,y2:py,stroke:j===0?'#6d818c':'#e6edef','stroke-width':j===0?1.4:1},svg);
      make('text',{x:L-10,y:py+4,'text-anchor':'end',fill:'#405968'},svg,y.toFixed(1));
    }
    make('path',{d:`M ${L} ${T} V ${B} H ${R}`,fill:'none',stroke:'#8ea3ad'},svg);
    if(xmin<0&&xmax>0)make('line',{x1:sx(0),y1:T,x2:sx(0),y2:B,stroke:'#7d919b','stroke-dasharray':'4 4'},svg);
    make('text',{x:(L+R)/2,y:498,'text-anchor':'middle',fill:'#29485a','font-size':13},svg,'Mean daily return (%)');
    make('text',{x:18,y:(T+B)/2,transform:`rotate(-90 18 ${(T+B)/2})`,'text-anchor':'middle',fill:'#29485a','font-size':13},svg,'Five-year average annual dividend yield (%)');
    const legend=[['#788c97','Shares'],['#d28b00','Accumulating funds: no cash payout'],['#007f8b','Portfolios'],['#c2185b','Selected asset']];
    legend.forEach(([colour,name],i)=>{const x=L+[0,135,460,610][i];if(i===1)make('path',{d:`M ${x} 13 L ${x+5} 22 L ${x-5} 22 Z`,fill:colour},svg);else if(i===2)make('path',{d:`M ${x} 13 L ${x+5} 18 L ${x} 23 L ${x-5} 18 Z`,fill:colour},svg);else make('circle',{cx:x,cy:18,r:4,fill:colour},svg);make('text',{x:x+10,y:22,fill:'#29485a'},svg,name);});
    const pointLayer=make('g',{},svg), labelLayer=make('g',{'class':'dividend-labels','pointer-events':'none'},svg);
    const pinned=new Set(points.filter(p=>p.type==='portfolio'||p.id===highlight).map(p=>p.id));
    const nodes=new Map(), colours=new Map(), tip=box.querySelector('.dividend-tooltip');
    const palette=['#111111','#0072b2','#d55e00','#009e73','#6a3d9a','#b2182b','#008080'];let pi=0;
    points.forEach(p=>{
      const x=sx(p.mean),y=sy(p.yield_percent),colour=p.id===highlight?'#c2185b':p.type==='portfolio'?palette[pi++%palette.length]:p.type==='fund'?'#d28b00':'#788c97';
      colours.set(p.id,colour);
      const node=make('g',{'class':'dividend-point','data-name':p.id,tabindex:0,role:'button','aria-label':`${p.label}: ${p.name}. Mean return ${p.mean.toFixed(5)}%, dividend yield ${p.yield_percent.toFixed(3)}%. Click to pin or unpin.`,style:'cursor:pointer'},pointLayer);
      make('circle',{cx:x,cy:y,r:9,fill:'transparent'},node);
      const attrs={fill:colour,'fill-opacity':p.id===highlight||p.type==='portfolio'?1:p.type==='fund'?.6:.33,stroke:colour,'stroke-width':p.id===highlight?2:1};
      if(p.type==='portfolio')make('path',{...attrs,d:`M ${x} ${y-6} L ${x+6} ${y} L ${x} ${y+6} L ${x-6} ${y} Z`},node);
      else if(p.type==='fund')make('path',{...attrs,d:`M ${x} ${y-6} L ${x+6} ${y+4} L ${x-6} ${y+4} Z`},node);
      else make('circle',{...attrs,cx:x,cy:y,r:p.id===highlight?6:4.5},node);
      nodes.set(p.id,node);
      const showTip=e=>{
        const label=p.type==='share'?`${p.id} — ${p.name}`:p.name;
        tip.textContent=`${label}\nMean daily return: ${p.mean.toFixed(5)}%\n5-year average dividend yield: ${p.yield_percent.toFixed(3)}%`;
        tip.hidden=false;
        const rect=box.getBoundingClientRect(),nr=node.getBoundingClientRect();
        const x=(Number.isFinite(e.clientX)?e.clientX:nr.x+nr.width/2)-rect.left;
        const y=(Number.isFinite(e.clientY)?e.clientY:nr.y)-rect.top;
        tip.style.left=Math.max(4,Math.min(x+14,rect.width-tip.offsetWidth-8))+'px';
        tip.style.top=Math.max(4,Math.min(y+14,rect.height-tip.offsetHeight-4))+'px';
      };
      node.addEventListener('pointerenter',showTip);node.addEventListener('pointermove',showTip);
      node.addEventListener('pointerleave',()=>tip.hidden=true);node.addEventListener('focus',showTip);node.addEventListener('blur',()=>tip.hidden=true);
      const toggle=()=>{if(pinned.has(p.id))pinned.delete(p.id);else pinned.add(p.id);renderLabels();};
      node.addEventListener('click',toggle);node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}if(e.key==='Escape')tip.hidden=true;});
    });
    function renderLabels(){
      labelLayer.replaceChildren();const occupied=[];
      points.filter(p=>pinned.has(p.id)).forEach(p=>{
        const x=sx(p.mean),y=sy(p.yield_percent),w=Math.min(225,p.label.length*6.5+6),h=17;
        const offsets=[[10,-12],[10,19],[-w-10,-12],[-w-10,19],[10,-33],[10,40],[-w-10,-33],[-w-10,40]];
        let best=null,score=Infinity;
        offsets.forEach(([dx,dy])=>{const r={x:Math.max(L,Math.min(R-w,x+dx)),y:Math.max(T+13,Math.min(B-4,y+dy)),w,h};const overlap=occupied.reduce((s,o)=>s+(r.x<o.x+o.w&&r.x+r.w>o.x&&r.y-h<o.y&&r.y>o.y-o.h?1:0),0);if(overlap<score){score=overlap;best=r;}});
        occupied.push(best);
        make('line',{x1:x,y1:y,x2:best.x+w/2,y2:best.y-5,stroke:colours.get(p.id),'stroke-opacity':.45,'stroke-width':.8},labelLayer);
        make('text',{'class':'dividend-pinned-label','data-name':p.id,x:best.x,y:best.y,fill:p.type==='share'?'#29485a':colours.get(p.id),'font-size':11,'font-weight':600,stroke:'white','stroke-width':3,'paint-order':'stroke'},labelLayer,p.label);
      });
      nodes.forEach((node,name)=>node.setAttribute('aria-pressed',String(pinned.has(name))));
      box.querySelector('.dividend-selection').textContent=`${pinned.size} names pinned · ${data.observations} observations (${data.sample_start}–${data.sample_end}). Click again to remove a name.`;
    }
    box.querySelector('.dividend-clear').addEventListener('click',()=>{pinned.clear();renderLabels();});
    box.querySelector('.dividend-save').addEventListener('click',()=>{const blob=new Blob([new XMLSerializer().serializeToString(svg)],{type:'image/svg+xml;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='return_dividend_'+(highlight||'all')+'.svg';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
    if(box.dataset.static){const fallback=document.createElement('details');fallback.className='dividend-static';const summary=document.createElement('summary');summary.textContent='Static PNG';fallback.appendChild(summary);const img=document.createElement('img');img.src=box.dataset.static+(box.dataset.static.includes('?')?'&':'?')+'report='+reportVersion;img.alt='Static mean-return and dividend-yield comparison';fallback.appendChild(img);box.appendChild(fallback);}
    renderLabels();box.dataset.loaded='yes';
  }).catch(err=>{box.dataset.loaded='';box.textContent='Interactive return/dividend graph could not be loaded: '+err.message;});
}
const dividendObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){initialiseDividendExplorer(e.target);dividendObserver.unobserve(e.target);}}),{rootMargin:'200px'});
document.querySelectorAll('.dividend-explorer').forEach(box=>dividendObserver.observe(box));

// Forecast links open existing collapsed profiles; search stays local to this table.
document.querySelectorAll('.weekly-forecast-overview').forEach(box=>{
 const search=box.querySelector('.weekly-forecast-search'),kind=box.querySelector('.weekly-forecast-type');
 const rows=[...box.querySelectorAll('.weekly-forecast-summary>tbody>tr')];
 function filter(){let count=0;for(const row of rows){const ok=(!search.value||row.cells[0].textContent.toLowerCase().includes(search.value.toLowerCase()))&&(!kind.value||row.cells[1].textContent.trim()===kind.value);row.hidden=!ok;if(ok)count++;}box.querySelector('.weekly-forecast-count').textContent=`${count} / ${rows.length} shown`;}
 search.addEventListener('input',filter);kind.addEventListener('change',filter);filter();
});
document.querySelectorAll('a.weekly-asset-link').forEach(link=>link.addEventListener('click',event=>{
 const target=document.getElementById(link.hash.slice(1));if(!target)return;event.preventDefault();
 for(let el=target;el;el=el.parentElement)if(el.tagName==='DETAILS')el.open=true;
 requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'smooth'}));
}));

/* Report-only HTML fragments avoid Markdown conversion and large hidden DOMs. */
function initialiseReportFragment(box) {
  if(!isExplorerVisible(box)||['yes','loading'].includes(box.dataset.loaded))return;
  box.dataset.loaded='loading';box.textContent='Loading tables and figures…';
  const url=new URL(box.dataset.fragmentSrc,document.baseURI);
  if(url.origin!==location.origin){box.dataset.loaded='no';box.textContent='Invalid report fragment location.';return;}
  fetch(url.href).then(response=>{if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.text();}).then(content=>{
    box.innerHTML=content;box.dataset.loaded='yes';
    box.querySelectorAll('.dominance-explorer').forEach(initialiseDominanceExplorer);
    box.querySelectorAll('.frontier-explorer').forEach(initialiseFrontierExplorer);
    box.querySelectorAll('.dividend-explorer').forEach(initialiseDividendExplorer);
  }).catch(error=>{box.dataset.loaded='no';box.textContent='Tables could not be loaded: '+error.message+'. Close and reopen this section to retry.';});
}
document.addEventListener('toggle',function(event){
  if(event.target.tagName==='DETAILS'&&event.target.open){event.target.querySelectorAll('.native-report-fragment').forEach(initialiseReportFragment);event.target.querySelectorAll('.dominance-explorer').forEach(initialiseDominanceExplorer);event.target.querySelectorAll('.frontier-explorer').forEach(initialiseFrontierExplorer);}
},true);
document.querySelectorAll('.native-report-fragment').forEach(initialiseReportFragment);

// A report cross-reference must reveal its collapsed ancestor sections.
function revealReportAnchor() {
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch(_){return;}
  if(!id)return;
  const target=document.getElementById(id);if(!target)return;
  for(let node=target;node;node=node.parentElement)if(node.tagName==='DETAILS')node.open=true;
  requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
}
window.addEventListener('hashchange',revealReportAnchor);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',revealReportAnchor);else revealReportAnchor();

// The portfolio analysis is a lazy fragment, so initialise when it enters the DOM.
(()=>{
const observer=new IntersectionObserver(entries=>{for(const entry of entries){entry.target._tvNear=entry.isIntersecting;refresh(entry.target);}},{rootMargin:'100px',threshold:0.01});
function visible(card){
 if(card.hidden||!card._tvNear)return false;
 for(let p=card.parentElement;p;p=p.parentElement)if(p.hidden||(p.tagName==='DETAILS'&&!p.open))return false;
 return true;
}
function refresh(card){
 const host=card.querySelector('.portfolio-tv-host');if(!host)return;
 if(!visible(card)){host.querySelectorAll('iframe').forEach(frame=>{if(!card._tvFrame&&(frame.src.includes('advanced-chart')||frame.src.includes('fund-chart.html'))){card._tvFrame=frame;card._tvParent=frame.parentElement;card._tvNext=frame.nextSibling;}frame.remove();});return;}
 if(card._tvFrame){if(!card._tvFrame.isConnected){const parent=card._tvParent?.isConnected?card._tvParent:host;parent.insertBefore(card._tvFrame,card._tvNext?.parentNode===parent?card._tvNext:null);}return;}
 if(card._tvLoading)return;card._tvLoading=true;
 const period=card.closest('.portfolio-tv-period');
 if(card.dataset.yahoo){
  const status=card.querySelector('.portfolio-tv-status'),frame=document.createElement('iframe');
  frame.src='fund-chart.html?asset='+encodeURIComponent(card.dataset.yahoo)+'&period='+period.dataset.period+'&v='+card.dataset.yahooVersion;
  frame.title=card.dataset.asset+' Yahoo daily NAV, Bollinger Bands, Stoch RSI and MACD';frame.loading='lazy';
  frame.addEventListener('load',()=>{status.hidden=true;});
  card._tvFrame=frame;card._tvParent=host;card._tvNext=null;host.appendChild(frame);return;
 }

 const assetStudies=Boolean(card.closest('.asset-tv'));
 const studies=assetStudies?['STD;Bollinger_Bands','StochasticRSI@tv-basicstudies','MACD@tv-basicstudies']:['STD;Bollinger_Bands'];
 const status=card.querySelector('.portfolio-tv-status');status.textContent='Loading TradingView…';
 const watch=new MutationObserver(()=>{
  const frame=host.querySelector('iframe');if(!frame)return;
  card._tvFrame=frame;card._tvParent=frame.parentElement;card._tvNext=frame.nextSibling;frame.title=card.dataset.asset+' '+period.dataset.period+' candlesticks and Bollinger Bands'+(assetStudies?', Stochastic RSI and MACD on a shared time axis':'');
  if(!frame.dataset.statusHook){frame.dataset.statusHook='true';frame.addEventListener('load',()=>{status.hidden=true;});}
  if(!visible(card))frame.remove();
 });watch.observe(host,{childList:true,subtree:true});
 const script=document.createElement('script');script.async=true;
 script.src='https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
 script.textContent=JSON.stringify({autosize:true,symbol:card.dataset.symbol,interval:period.dataset.interval,range:period.dataset.range,timezone:'Europe/Vilnius',theme:'light',style:'1',locale:'en',allow_symbol_change:false,save_image:false,hide_side_toolbar:true,hide_top_toolbar:false,withdateranges:true,studies:studies,support_host:'https://www.tradingview.com'});
 script.onerror=()=>{watch.disconnect();card._tvLoading=false;status.hidden=false;status.textContent='TradingView could not load. Use the TradingView chart link.';};
 host.appendChild(script);
}
function initialise(group){
 if(group.dataset.ready)return;group.dataset.ready='true';
 const select=group.querySelector('.portfolio-tv-select select');
 const cards=[...group.querySelectorAll('.portfolio-tv-card')];
 function update(){
  group.querySelectorAll('[data-units]').forEach(item=>{const units=JSON.parse(item.dataset.units)[select.value]||0;item.hidden=units===0;item.querySelector('.portfolio-tv-units').textContent=units;});
  cards.forEach(refresh);
 }
 if(select)select.addEventListener('change',update);
 group.querySelectorAll('.portfolio-tv-period').forEach(period=>{
  period.querySelector(':scope > summary').addEventListener('click',event=>{
   event.preventDefault();const open=!period.open;
   if(!open)period.querySelectorAll('iframe').forEach(frame=>frame.remove());
   period.open=open;cards.forEach(refresh);
  });
  period.addEventListener('toggle',()=>{cards.forEach(refresh);if(!period.open)period.querySelectorAll('iframe').forEach(frame=>frame.remove());});
 });
 cards.filter(card=>card.dataset.symbol||card.dataset.yahoo).forEach(card=>observer.observe(card));update();
}
document.querySelectorAll('.portfolio-tv').forEach(initialise);
new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes){if(node.nodeType!==1)continue;if(node.matches('.portfolio-tv'))initialise(node);node.querySelectorAll('.portfolio-tv').forEach(initialise);}document.querySelectorAll('.portfolio-tv-period:not([open]) iframe').forEach(frame=>{const card=frame.closest('.portfolio-tv-card');if(card&&(frame.src.includes('advanced-chart')||frame.src.includes('fund-chart.html'))){card._tvFrame=frame;card._tvParent=frame.parentElement;card._tvNext=frame.nextSibling;}frame.remove();});}).observe(document.body,{childList:true,subtree:true});
})();

// TradingView range presets select their own resolution (5D -> 5m, 1D -> 1m).
// Set the requested candle interval after the embedded chart has initialised.
(()=>{
window.addEventListener('message',event=>{
 if(!/^https:\/\/(www\.)?tradingview(-widget)?\.com$/.test(event.origin))return;
 let message=event.data;
 if(typeof message==='string'){try{message=JSON.parse(message);}catch{return;}}
 if(message?.name!=='tv-widget-load')return;
 for(const frame of document.querySelectorAll('.portfolio-tv-host iframe,.mini-panel iframe')){
  if(frame.contentWindow!==event.source||new URL(frame.src).origin!==event.origin)continue;
  const interval=frame.closest('.portfolio-tv-period,.mini-panel')?.dataset.interval;
  if(!interval)return;
  clearTimeout(frame._tvIntervalTimer);
  frame._tvIntervalTimer=setTimeout(()=>{
   if(frame.isConnected)frame.contentWindow.postMessage({name:'set-interval',data:{interval}},event.origin);
  },500);
  break;
 }
});
})();

// Official gauges load only for open profiles near the viewport.
(()=>{'use strict';
let pending=false;
const profileOpen=box=>{for(let p=box;p;p=p.parentElement)if(p.hidden||(p.tagName==='DETAILS'&&!p.open))return false;return true;};
const visible=box=>box._taNear&&profileOpen(box);
function refresh(box){
 const host=box.querySelector('.tv-technicals-host'),status=box.querySelector('.tv-technicals-status');
 if(!profileOpen(box)){if(box._taFrame?.isConnected)box._taFrame.remove();return;}
 if(!box._taNear)return;
 if(box._taFrame){if(!box._taFrame.isConnected)box._taParent.appendChild(box._taFrame);return;}
 if(box._taLoading||box._taFailed)return;box._taLoading=true;status.textContent='Loading TradingView Technicals…';
 const watch=new MutationObserver(()=>{
  const frame=host.querySelector('iframe');if(!frame)return;
  box._taFrame=frame;box._taParent=frame.parentElement;frame.setAttribute('scrolling','no');frame.title=box.dataset.taSymbol+' TradingView Technicals: summary, oscillators and moving averages';
  frame.addEventListener('load',()=>{status.hidden=true;});watch.disconnect();if(!visible(box))frame.remove();
 });watch.observe(host,{childList:true,subtree:true});
 const script=document.createElement('script');script.async=true;script.src='https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
 script.textContent=JSON.stringify({interval:box.dataset.taInterval,width:800,height:720,symbol:box.dataset.taSymbol,showIntervalTabs:true,displayMode:'multiple',locale:'en',colorTheme:'light',isTransparent:false,disableInterval:false});
 script.onerror=()=>{watch.disconnect();box._taLoading=false;box._taFailed=true;status.hidden=false;status.textContent='TradingView could not load. Open the technical-analysis link above.';};host.appendChild(script);
}
function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;document.querySelectorAll('.tv-technicals').forEach(refresh);});}
const observer=new IntersectionObserver(entries=>{for(const entry of entries){entry.target._taNear=entry.isIntersecting;refresh(entry.target);}},{rootMargin:'120px',threshold:.01});
const sizes=new ResizeObserver(entries=>{for(const {target,contentRect} of entries){const width=Math.min(416.7,contentRect.width),height=294*Math.min(1,width/416.7);target.style.setProperty('--ta-scale-x',width/800);target.style.setProperty('--ta-scale-y',height/744);target.style.height=height+'px';}});
function initialise(){document.querySelectorAll('.tv-technicals:not([data-ta-ready])').forEach(box=>{box.dataset.taReady='true';sizes.observe(box.querySelector('.tv-technicals-scroll'));observer.observe(box);});}
document.addEventListener('toggle',schedule,true);
new MutationObserver(records=>{if(records.some(r=>r.type==='childList'))initialise();schedule();}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open','hidden']});
initialise();
})();



const basketDataElement=document.getElementById('current-portfolio-baskets');
if(basketDataElement){
 const fullData=JSON.parse(basketDataElement.textContent), host=document.querySelector('.current-portfolio-composition');
 let data=fullData;
 const regimeDataElement=document.getElementById('regime-netsd-data'),regimeData=regimeDataElement?JSON.parse(regimeDataElement.textContent):null;
 const historyFilter=document.querySelector('select[name="profile-history-regime"]');
 let activeHistory='FULL',fullHistoryScope=document.querySelector('input[name="portfolio-scope"]:checked')?.value||'STOCHASTIC';
 function historyKey(){return historyFilter?.value||'FULL';}
 function evaluation(scope,policy){return regimeData?.evaluations[historyKey()]?.[scope]?.[policy];}
 const assetInfo={};Object.values(data).forEach(cases=>Object.values(cases).forEach(b=>b.rows.forEach(z=>assetInfo[z.asset]=z)));
 if(regimeData)Object.values(regimeData.portfolios).forEach(cases=>Object.values(cases).forEach(b=>b.rows.forEach(z=>assetInfo[z.asset]=z)));
 const originals=new WeakMap();
 window.updateSelectedPortfolioProfile=function(profile,scope,policy){
  const table=profile.querySelector('table'),summary=profile.querySelector(':scope > summary');if(!table||!summary)return;
  if(!originals.has(profile))originals.set(profile,{table:table.innerHTML,summary:summary.innerHTML,signal:profile.dataset.signal,update:profile.dataset.hasUpdate});
  const saved=originals.get(profile),asset=profile.id.replace(/^(share-|fund-)/,'').toUpperCase();
  const context=regimeData?.contexts[historyKey()],diagnostic=context?.diagnostics[asset];
  const legacySensitivity=profile.querySelector(':scope > details.portfolio-sensitivity > summary');
  if(legacySensitivity)legacySensitivity.textContent='Stochastic reference sensitivity (original full-history analysis)';
  let impactBox=profile.querySelector(':scope > .regime-asset-impact');
  if(diagnostic){
   if(!impactBox){impactBox=document.createElement('p');impactBox.className='regime-asset-impact';table.before(impactBox);}
   impactBox.textContent=context.label+' · '+context.observations+' observations · Current netSD '+diagnostic.current_netSD.toFixed(6)+'; after adding '+diagnostic.add_units+' units (EUR '+diagnostic.add_value_EUR.toFixed(2)+'): '+diagnostic.after_add_netSD.toFixed(6)+'; change '+(diagnostic.add_delta>=0?'+':'')+diagnostic.add_delta.toFixed(6)+'. Standardised hypothetical addition; not an executable order.';
  }
  const modes={},scopes=new Set(['ALL']),allModes=new Set();
  for(const [model,cases] of Object.entries(data)){modes[model]=Object.entries(cases).filter(([key,b])=>currentHolding(asset,b)>0||b.rows.some(z=>z.asset===asset)).map(([key])=>key);if(modes[model].length)scopes.add(model);modes[model].forEach(key=>allModes.add(key));}
  modes.ANY=modes.ALL=[...allModes];if(allModes.size)scopes.add('ANY');profile.dataset.saleMembership=JSON.stringify(modes);profile.dataset.portfolioScopes=[...scopes].join(' ');
  if(!data[scope]){
   table.innerHTML=saved.table;const headers=[...table.querySelectorAll('thead th')].map(x=>x.textContent.trim().toLowerCase()),row=table.querySelector('tbody tr');
   for(const label of ['target units','change','weight','avg annual dividends: target units eur']){const i=headers.indexOf(label);if(i>=0)row.cells[i].textContent='—';}
   if(diagnostic){for(const [label,value] of Object.entries({'individual netsd':diagnostic.individual_netSD.toFixed(6),'out':diagnostic.individual_OUT,'in':diagnostic.individual_IN})){const i=headers.indexOf(label);if(i>=0&&value!==undefined)row.cells[i].textContent=value;}}
   const changes=Object.values(data).flatMap(cases=>Object.values(cases).map(b=>(b.rows.find(z=>z.asset===asset)?.units??0)-currentHolding(asset,b)));
   profile.dataset.signal=[...new Set(changes.map(v=>v>0?'BUY':v<0?'SELL':'HOLD'))].join(' ');profile.dataset.hasUpdate=String(changes.some(v=>v!==0));
   summary.textContent=asset+' — '+(assetInfo[asset]?.name??asset)+' | '+(context?.label||'Full history')+' | select a portfolio to see target units';
   if(diagnostic)profile.dataset.netsdEffect=effect(diagnostic.add_delta);return;
  }
  const template=document.createElement('table');template.innerHTML=saved.table;
  const labels=[...template.querySelectorAll('thead th')].map(x=>x.textContent.trim().replace(/\s+/g,' ').toLowerCase());
  const originalRow=template.querySelector('tbody tr');if(!originalRow)return;
  const current=assetInfo[asset]?.current_units??Number(originalRow.cells[labels.indexOf('current units')]?.textContent||0);
  const cases=Object.entries(data[scope]).filter(([key])=>policy==='ALL'||policy===key);
  table.innerHTML=saved.table;table.tBodies[0].replaceChildren();
  table.querySelectorAll('thead th').forEach(th=>{if(th.textContent.trim()==='Rachev (train)')th.textContent='Rachev (full training)';if(th.textContent.trim()==='Sortino (train)')th.textContent='Sortino (full training)';});
  const policyHead=document.createElement('th');policyHead.textContent='Portfolio / policy';table.tHead.rows[0].prepend(policyHead);
  const decisionHead=document.createElement('th');decisionHead.textContent='Execution decision';table.tHead.rows[0].append(decisionHead);
  for(const label of ['Current netSD before this trade','netSD after this trade','netSD change from this trade','Portfolio netSD','Portfolio netSD without this asset','netSD change on removal']){const th=document.createElement('th');th.textContent=label;table.tHead.rows[0].append(th);}
  const signals=[],titles=[],effects=[];let changed=false;
  for(const [key,basket] of cases){
   const selected=basket.rows.find(z=>z.asset===asset),target=selected?.units??0,change=target-current;
   const decision=change>0?'BUY':change<0?'SELL':'HOLD';signals.push(decision);changed ||= change!==0;
   const row=originalRow.cloneNode(true);
   for(const [label,value] of Object.entries({'current units':current,'target units':target,'change':change,'weight':(selected?.weight??0).toFixed(6)})){
    const index=labels.indexOf(label);if(index>=0)row.cells[index].textContent=value;
   }
   if(diagnostic){for(const [label,value] of Object.entries({'individual netsd':diagnostic.individual_netSD.toFixed(6),'out':diagnostic.individual_OUT,'in':diagnostic.individual_IN})){const index=labels.indexOf(label);if(index>=0&&value!==undefined)row.cells[index].textContent=value;}}
   const dividendUnit=Number(originalRow.cells[labels.indexOf('avg dividend / unit eur')]?.textContent||0);
   const dividendIndex=labels.indexOf('avg annual dividends: target units eur');if(dividendIndex>=0)row.cells[dividendIndex].textContent=(dividendUnit*target).toFixed(4);
   const context=row.insertCell(0);context.textContent=scope+' / '+(key==='SALE'?'Sale':'No-sale');
   row.insertCell().textContent=decision;
   const impact=evaluation(scope,key)?.changes[asset];
   for(const value of impact?[impact.before_netSD,impact.after_netSD,impact.delta,impact.portfolio_netSD,impact.without_asset_netSD,impact.removal_delta]:[null,null,null,null,null,null])row.insertCell().textContent=value==null?'—':Number(value).toFixed(6);
   effects.push(effect(impact?.delta??diagnostic?.add_delta??0));table.tBodies[0].append(row);
   titles.push((key==='SALE'?'Sale':'No-sale')+': '+decision+'; target '+target+' units');
  }
  table.classList.add('selected-portfolio-allocation');profile.dataset.signal=[...new Set(signals)].join(' ');profile.dataset.hasUpdate=String(changed);
  profile.dataset.netsdEffect=[...new Set(effects)].join(' ');
  summary.textContent=asset+' — '+(assetInfo[asset]?.name??saved.summary.replace(/<[^>]*>/g,'').split('|')[0])+' | '+scope+' | '+(regimeData?.contexts[historyKey()]?.label||'Full history')+' | '+titles.join(' | ');
 };
 function currentHolding(asset,basket){return assetInfo[asset]?.current_units??basket.rows.find(z=>z.asset===asset)?.current_units??0;}
 function effect(delta){return delta>1e-10?'INCREASE':delta< -1e-10?'DECREASE':'UNCHANGED';}
 function drawBasket(){
  const scope=document.querySelector('input[name="portfolio-scope"]:checked')?.value||'STOCHASTIC';
  const policy=document.querySelector('input[name="sale-policy"]:checked')?.value||'ALL';
  host.replaceChildren();
  const cases=data[scope];
  const context=regimeData?.contexts[historyKey()],noteHost=document.querySelector('.regime-analysis-note'),comparison=document.querySelector('.regime-portfolio-comparison');
  if(context&&noteHost){noteHost.textContent=context.label+': '+context.observations+' training observations; reference denominator D='+context.denominator+'. '+(context.small_sample?'Small sample: results are exploratory and can be unstable. ':'')+'Retrospective historical regime labels; '+context.unclassified_training_observations+' training sessions have no common-market regime label and are excluded only from R1–R4. Full history retains all training observations; the 126 diagnostic observations are not used to fit portfolios. netSD compares invested holdings, excluding cash, consistently with the existing reference network. Only the netSD model is independently optimised for each regime; other model allocations remain their full-history results and are evaluated in the selected regime.';}
  if(context&&comparison){
   comparison.replaceChildren();const box=document.createElement('details'),title=document.createElement('summary');title.textContent='Portfolio netSD comparison — '+context.label;box.append(title);const table=document.createElement('table');table.className='research-table';const head=table.createTHead().insertRow();['Portfolio','Policy','netSD','Change vs Current','OUT','IN'].forEach(t=>{const c=document.createElement('th');c.textContent=t;head.append(c)});const body=table.createTBody();
   const baseline=body.insertRow();['Current','Existing holdings',context.current_netSD.toFixed(6),'0.000000','—','—'].forEach(v=>baseline.insertCell().textContent=v);
   for(const [model,policies] of Object.entries(regimeData.evaluations[historyKey()]))for(const [key,e] of Object.entries(policies)){const row=body.insertRow();[model,key,e.netSD.toFixed(6),(e.netSD-context.current_netSD).toFixed(6),e.OUT,e.IN].forEach(v=>row.insertCell().textContent=v);}
   box.append(table);comparison.append(box);
  }
  if(!cases)return;
  for(const [key,basket] of Object.entries(cases)){
   if(policy!=='ALL'&&policy!==key)continue;
   const box=document.createElement('details');box.open=true;
   const evaluated=evaluation(scope,key);
   const title=document.createElement('summary');title.textContent=scope+' · '+(key==='SALE'?'Sales allowed':'No sales')+' · '+(context?.label||'Full history')+' · invested EUR '+basket.total.toFixed(2)+' · cash EUR '+basket.cash.toFixed(2)+(evaluated?' · netSD '+evaluated.netSD.toFixed(6):'');box.append(title);
   const note=document.createElement('p');note.textContent=(scope!=='NETSD'&&historyKey()!=='FULL'?'Full-history allocation, evaluated in '+context.label+'. Its quantities were not reoptimised for this regime. ':'')+basket.status+' Profile quantities and execution decisions follow this portfolio; technical indicators describe the instrument.';box.append(note);
   const m=evaluated?.metrics??basket.metrics,stats=document.createElement('p');stats.textContent='Training fixed-allocation statistics ('+m.training_observations+' observations; cash at zero interest): mean/day '+m.mean_daily_percent.toFixed(4)+'%; '+(m.annualised_SD_percent==null?'conditional daily SD '+m.daily_SD_percent.toFixed(2)+'%':'annualised SD '+m.annualised_SD_percent.toFixed(2)+'%')+'; daily CVaR95 loss '+m.daily_CVaR95_loss_percent.toFixed(2)+'%; '+(m.maximum_drawdown_percent==null?'drawdown not computed from nonconsecutive regime days':'maximum drawdown '+m.maximum_drawdown_percent.toFixed(2)+'%')+'. Descriptive comparison, not a strategy backtest.';box.append(stats);
   const table=document.createElement('table');table.className='research-table';
   const head=table.createTHead().insertRow();['Instrument','Name','Current units','Target units','Change','Latest price (EUR)','Price date','Value (EUR)','Weight'].forEach(t=>{const c=document.createElement('th');c.textContent=t;head.append(c)});
   const body=table.createTBody();basket.rows.forEach(z=>{const row=body.insertRow();[z.asset,z.name,z.current_units,z.units,(z.change>0?'+':'')+z.change,z.price.toFixed(4),z.date,z.value.toFixed(2),(100*z.weight).toFixed(2)+'%'].forEach(v=>{row.insertCell().textContent=v})});box.append(table);host.append(box);
  }
 }
 document.querySelectorAll('input[name="portfolio-scope"],input[name="sale-policy"]').forEach(x=>x.addEventListener('change',drawBasket));drawBasket();
 if(historyFilter&&regimeData)historyFilter.addEventListener('change',()=>{
  if(activeHistory==='FULL')fullHistoryScope=document.querySelector('input[name="portfolio-scope"]:checked')?.value||'STOCHASTIC';
  data={...fullData,NETSD:regimeData.portfolios[historyKey()]};
  document.querySelector('input[name="portfolio-scope"][value="'+(historyKey()==='FULL'?fullHistoryScope:'NETSD')+'"]').checked=true;
  activeHistory=historyKey();
  document.querySelector('input[name="portfolio-scope"]:checked')?.dispatchEvent(new Event('change'));
 });
 document.querySelector('input[name="portfolio-scope"]:checked')?.dispatchEvent(new Event('change'));
}
