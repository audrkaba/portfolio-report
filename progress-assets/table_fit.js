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
    // Quick summaries keep ordinary horizontal rows. Split wide schemas into
    // column groups, repeating the instrument key, rather than stacking cells.
    for(const table of document.querySelectorAll('table:not(.horizontal-summary-group)')){
      const section=table.closest('details.report-section');
      const title=(section?.querySelector(':scope > summary')?.textContent.trim()||'').replace(/\bA[123]\.(?=\d)/g,'');
      const localTitle=(table.closest('details')?.querySelector(':scope > summary')?.textContent.trim()||'').replace(/\bA[123]\.(?=\d)/g,'');
      let preceding=table.previousElementSibling;
      while(preceding&&!/^(H[1-6]|TABLE)$/.test(preceding.tagName))preceding=preceding.previousElementSibling;
      const heading=(preceding?.textContent.trim()||'').replace(/\bA[123]\.(?=\d)/g,'');
      if(!/^1\.[23]\./.test(title)&&!/^Table 1\.4\.[abc]\./.test(localTitle)&&!/^Table 1\.4\.[abc]\./.test(heading))continue;
      const width=table.parentElement.getBoundingClientRect().width;
      if(!width)continue;
      const scale=parseFloat(getComputedStyle(document.documentElement).fontSize)/16;
      const count=Math.max(2,Math.min(8,Math.floor(width/(125*scale))));
      if(table.dataset.horizontalColumns===String(count))continue;
      const heads=[...(table.tHead?.rows[0]?.cells||[])];
      if(!heads.length||[...table.rows].some(r=>[...r.cells].some(c=>c.colSpan!==1||c.rowSpan!==1)))continue;
      table.nextElementSibling?.classList.contains('horizontal-summary-groups')&&table.nextElementSibling.remove();
      const groups=document.createElement('div');groups.className='horizontal-summary-groups';
      for(let start=1;start<heads.length;start+=count-1){
        const indices=[0,...Array.from({length:Math.min(count-1,heads.length-start)},(_,i)=>start+i)];
        const copy=table.cloneNode(false);copy.removeAttribute('id');copy.removeAttribute('hidden');
        copy.classList.remove('fit-stacked');copy.classList.add('horizontal-summary-group');
        const thead=copy.createTHead(),header=thead.insertRow();
        indices.forEach(i=>header.append(heads[i].cloneNode(true)));
        for(const body of table.tBodies){const target=copy.createTBody();for(const row of body.rows){
          const next=target.insertRow();indices.forEach(i=>{if(row.cells[i])next.append(row.cells[i].cloneNode(true));});
        }}
        copy.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));
        groups.append(copy);
      }
      table.after(groups);table.hidden=true;table.dataset.horizontalColumns=String(count);
    }
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
      const compactProfile=profile&&width>=cols*48*textScale;
      const groupedProfile=profile&&!compactProfile;
      const profileCols=width>=9*60*textScale?9:width>=6*60*textScale?6:width>=3*60*textScale?3:2;
      table.classList.toggle('fit-profile-compact',compactProfile);
      table.classList.toggle('fit-profile-grid',groupedProfile);
      table.classList.toggle('fit-profile-vertical',groupedProfile&&profileCols>=6);
      if(groupedProfile){
        table.style.setProperty('--profile-columns',profileCols);
        for(const [i,cell] of [...(table.tHead?.rows[0]?.cells||[])].entries()){
          cell.style.setProperty('--profile-column',i%profileCols+1);
          cell.style.setProperty('--profile-row',Math.floor(i/profileCols)*2+1);
        }
        for(const row of table.tBodies[0]?.rows||[]){
          for(const [i,cell] of [...row.cells].entries()){
            cell.style.setProperty('--profile-column',i%profileCols+1);
            cell.style.setProperty('--profile-row',Math.floor(i/profileCols)*2+2);
          }
        }
      }
      table.classList.toggle('fit-stacked',!profile&&!table.classList.contains('horizontal-summary-group')&&cols*105*textScale>width);
    }
    document.documentElement.dataset.tablesReady='true';
  }
  function schedule(){if(window.reportTableFitPaused)return;if(!pending){pending=true;requestAnimationFrame(fit)}}
  window.reportTableFit=fit;
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','open']});
  addEventListener('resize',schedule);document.addEventListener('toggle',schedule,true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
})();
