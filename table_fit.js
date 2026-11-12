/* Table layout is shared by all pages; observers cover future branch/fragment loads. */
(()=>{
  if(window.reportTableFit)return;
  let pending=false;
  function labels(table){
    const grid=[];
    for(const [r,row] of [...(table.tHead?.rows||[])].entries()){
      grid[r] ||= [];let col=0;
      for(const cell of row.cells){
        while(grid[r][col])col++;
        for(let y=r;y<r+cell.rowSpan;y++){
          grid[y] ||= [];
          for(let x=col;x<col+cell.colSpan;x++)grid[y][x]=cell.textContent.trim();
        }
        col+=cell.colSpan;
      }
    }
    return Array.from({length:Math.max(0,...grid.map(r=>r.length))},(_,i)=>[...new Set(grid.map(r=>r[i]).filter(Boolean))].join(' / '));
  }
  function fit(){
    pending=false;
    for(const table of document.querySelectorAll('table')){
      if(!table.getClientRects().length)continue;
      if(!table.classList.contains('report-fit-table'))table.classList.add('report-fit-table');
      const headings=labels(table);
      for(const section of [...table.tBodies,...(table.tFoot?[table.tFoot]:[])]){
        for(const row of section.rows){let col=0;
          for(const cell of row.cells){
            const label=headings.slice(col,col+cell.colSpan).join(' / ')||cell.dataset.label||`Column ${col+1}`;
            if(cell.dataset.label!==label)cell.dataset.label=label;
            col+=cell.colSpan;
          }
        }
      }
      for(let parent=table.parentElement;parent&&parent!==document.body;parent=parent.parentElement){
        const style=getComputedStyle(parent);
        if(['auto','scroll'].includes(style.overflowX)||/table-scroll|performance-table-scroll|fund-case-wrap/.test(parent.className))parent.classList.add('report-fit-wrapper');
      }
      const width=table.parentElement?.getBoundingClientRect().width||innerWidth;
      const cols=Math.max(headings.length,...[...table.rows].map(r=>[...r.cells].reduce((s,c)=>s+c.colSpan,0)));
      const textScale=parseFloat(getComputedStyle(document.documentElement).fontSize)/16;
      // The single-row asset summary has compact numeric values and historically
      // used vertical headings. It needs less width than general text tables.
      const profile=table.classList.contains('stock-summary-table');
      const compactProfile=profile&&width>=cols*60*textScale;
      table.classList.toggle('fit-profile-compact',compactProfile);
      table.classList.toggle('fit-stacked',!compactProfile&&cols*105*textScale>width);
    }
    document.documentElement.dataset.tablesReady='true';
  }
  function schedule(){if(window.reportTableFitPaused)return;if(!pending){pending=true;requestAnimationFrame(fit)}}
  window.reportTableFit=fit;
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','open']});
  addEventListener('resize',schedule);document.addEventListener('toggle',schedule,true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
})();
