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
    chapterThreeTables();
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
  // Chapter 3 contains comparisons, record lists and genuine square matrices.
  // Keep originals intact for updates/downloads; build horizontal views by type.
  const chapterThreeState=new WeakMap();
  const chapterThreeFragments=/\/(?:active-long-history-portfolios|portfolio-dominance-netsd|portfolio-return-risk|portfolio-dividends|portfolio-sensitivity|statistical-research|portfolios-in-sample|portfolio-dominance|portfolio-concentration|portfolio-systematic-risk)\.html$/;
  function chapterThreeTables(){
    const direct=chapterThreeFragments.test(location.pathname);
    for(const table of document.querySelectorAll('table')){
      if(!direct&&!table.closest('#analytics-3'))continue;
      if(table.style.display==='none'||(table.hidden&&!table.dataset.chapter3Source)){
        const view=chapterThreeState.get(table);if(view)view.group.hidden=true;continue;
      }
      const visibleView=chapterThreeState.get(table);if(visibleView)visibleView.group.hidden=false;
      if([...table.closest('details')?.querySelectorAll(':scope > summary')||[]].some(s=>/^A3\.[12]\./.test(s.textContent.trim())))continue;
      if(table.closest('.chapter3-table-groups')||table.classList.contains('chapter3-matrix-block')||table.classList.contains('dominance-matrix-table')||table.classList.contains('sharpe-transposed')||table.classList.contains('archived-scenarios-transposed'))continue;
      if(table.closest('#current-correlation-coverage')||table.classList.contains('stock-summary-table'))continue;
      for(let parent=table.parentElement;parent&&parent!==document.body;parent=parent.parentElement){
        if(/table-scroll|performance-table-scroll|fund-case-wrap/.test(parent.className))parent.classList.add('report-fit-wrapper');
      }
      const width=table.parentElement.getBoundingClientRect().width;
      if(!width||!table.parentElement.getClientRects().length)continue;
      const heads=[...(table.tHead?.rows[0]?.cells||[])],rows=[...table.tBodies].flatMap(b=>[...b.rows]);
      if(!heads.length||!rows.length||[...table.rows].some(r=>[...r.cells].some(c=>c.colSpan!==1||c.rowSpan!==1))||rows.some(r=>r.cells.length!==heads.length))continue;
      const normalized=heads.map(h=>h.textContent.trim().toLowerCase());
      const textScale=parseFloat(getComputedStyle(document.documentElement).fontSize)/16;
      const maxCols=Math.max(2,Math.min(8,Math.floor(width/(95*textScale))));
      const square=rows.length>12&&rows.length===heads.length-1&&rows.every((r,i)=>r.cells[0].textContent.trim()===heads[i+1].textContent.trim());
      let keys=[0],transpose=false;
      if(['portfolio','strategy'].includes(normalized[0]))transpose=true;
      if(['period','sample'].includes(normalized[0])&&normalized[1]==='portfolio'){keys=[0,1];transpose=true}
      if(normalized[0]==='universe'&&normalized[1]==='model'){keys=[0,1];transpose=true}
      if(normalized[0]==='method'&&rows.length<=20)transpose=true;
      if(['period','sample'].includes(normalized[0])&&normalized[1]==='measure')keys=[0,1];
      const mode=square?'matrix':transpose?'comparison':'records';
      const signature=table.innerHTML,previous=chapterThreeState.get(table);
      if(previous?.signature===signature&&previous.maxCols===maxCols&&previous.mode===mode)continue;
      previous?.group.remove();
      if(!square&&!transpose&&heads.length<=maxCols){
        table.hidden=false;delete table.dataset.chapter3Source;chapterThreeState.delete(table);
        table.classList.remove('fit-stacked');table.classList.add('horizontal-summary-group','chapter3-horizontal-records');
        continue;
      }
      const group=document.createElement('div');group.className='chapter3-table-groups';group.dataset.mode=mode;
      group.style.cssText='min-width:0;max-width:100%';
      function clean(node){node.removeAttribute('id');node.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));return node}
      function cell(source,tag='td'){
        const c=document.createElement(tag);for(const a of source.attributes)if(a.name!=='id'&&a.name!=='data-label')c.setAttribute(a.name,a.value);
        c.innerHTML=source.innerHTML;c.dataset.originRow=source.parentElement.rowIndex;c.dataset.originColumn=source.cellIndex;
        if(tag==='th')c.scope=source.closest('thead')?'col':'row';return clean(c);
      }
      function keyCell(row,tag){
        if(keys.length===1)return cell(row.cells[keys[0]],tag);
        const c=document.createElement(tag);if(tag==='th')c.scope='row';keys.forEach((i,n)=>{if(n)c.append(document.createElement('br'));const span=document.createElement('span');span.innerHTML=row.cells[i].innerHTML;span.dataset.originRow=row.rowIndex;span.dataset.originColumn=i;clean(span);c.append(span)});return c;
      }
      function empty(){const t=document.createElement('table');t.className='report-fit-table horizontal-summary-group chapter3-table-group';return t}
      function heading(row,text){const th=document.createElement('th');th.scope='col';th.textContent=text;row.append(th)}
      if(square){
        let firstRow=0,firstCol=0;
        const controls=document.createElement('div');controls.style.cssText='display:flex;flex-wrap:wrap;gap:.5rem;max-width:100%';
        function select(label,values,change){const l=document.createElement('label');l.textContent=label+' ';l.style.cssText='min-width:0;max-width:100%;display:flex;flex-direction:column';const s=document.createElement('select');s.style.maxWidth='100%';values.forEach((v,i)=>{const o=document.createElement('option');o.value=i;o.textContent=v;s.append(o)});s.addEventListener('change',()=>{change(Number(s.value));draw()});l.append(s);controls.append(l)}
        select('First row',rows.map(r=>r.cells[0].textContent.trim()),v=>firstRow=v);
        select('First column',heads.slice(1).map(h=>h.textContent.trim()),v=>firstCol=v);
        const range=document.createElement('p'),grid=document.createElement('div');group.append(controls,range,grid);
        function draw(){
          const t=empty();t.classList.add('chapter3-matrix-block');const h=t.createTHead().insertRow();h.append(cell(heads[0],'th'));
          for(let j=firstCol;j<Math.min(rows.length,firstCol+maxCols-1);j++)h.append(cell(heads[j+1],'th'));
          const b=t.createTBody();for(let i=firstRow;i<Math.min(rows.length,firstRow+10);i++){
            const tr=b.insertRow();tr.append(cell(rows[i].cells[0],'th'));
            for(let j=firstCol;j<Math.min(rows.length,firstCol+maxCols-1);j++)tr.append(cell(rows[i].cells[j+1]));
          }
          range.textContent=`Rows ${firstRow+1}–${Math.min(rows.length,firstRow+10)} of ${rows.length}; columns ${firstCol+1}–${Math.min(rows.length,firstCol+maxCols-1)} of ${rows.length}. Original row and column direction retained.`;
          grid.replaceChildren(t);
        }
        draw();
      }else if(transpose){
        const batch=maxCols-1;
        for(let start=0;start<rows.length;start+=batch){
          const selection=rows.slice(start,start+batch),t=empty(),h=t.createTHead().insertRow();heading(h,'Measure');selection.forEach(r=>{const c=keyCell(r,'th');c.scope='col';c.hidden=r.hidden||r.style.display==='none';h.append(c)});
          const b=t.createTBody();heads.forEach((head,i)=>{if(keys.includes(i))return;const tr=b.insertRow();const label=cell(head,'th');label.scope='row';tr.append(label);selection.forEach(r=>{const c=cell(r.cells[i]);c.hidden=r.hidden||r.style.display==='none';tr.append(c)})});t.hidden=selection.every(r=>r.hidden||r.style.display==='none');group.append(t);
        }
      }else{
        const fields=heads.map((_,i)=>i).filter(i=>!keys.includes(i));
        for(let start=0;start<fields.length;start+=maxCols-1){
          const selection=fields.slice(start,start+maxCols-1),t=empty(),h=t.createTHead().insertRow();
          if(keys.length===1)h.append(cell(heads[keys[0]],'th'));else heading(h,keys.map(i=>heads[i].textContent.trim()).join(' / '));
          selection.forEach(i=>{const c=cell(heads[i],'th');c.scope='col';h.append(c)});
          const b=t.createTBody();rows.forEach(r=>{const tr=clean(r.cloneNode(false));b.append(tr);tr.append(keyCell(r,'th'));selection.forEach(i=>tr.append(cell(r.cells[i])))});group.append(t);
        }
      }
      table.classList.add('report-fit-table');table.hidden=true;table.dataset.chapter3Source='true';table.after(group);
      chapterThreeState.set(table,{signature,maxCols,mode,group});
    }
  }
  function schedule(){if(window.reportTableFitPaused)return;if(!pending){pending=true;requestAnimationFrame(fit)}}
  window.reportTableFit=fit;
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','open']});
  addEventListener('resize',schedule);document.addEventListener('toggle',schedule,true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
})();
