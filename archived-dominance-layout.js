(()=>{
  function setup(root){
    const data=JSON.parse(root.querySelector('.dominance-matrix-data').textContent);
    const controls=root.querySelector('.dominance-matrix-controls'),grid=root.querySelector('.dominance-matrix-grid');
    controls.style.cssText='display:flex;flex-wrap:wrap;gap:.5rem;align-items:end;max-width:100%';
    let row=0,column=0,cols=1;const rows=8;
    function select(title,labels,onchange){
      const label=document.createElement('label');label.textContent=title+' ';
      label.style.cssText='display:flex;flex-direction:column;min-width:0;max-width:100%';
      const select=document.createElement('select');select.style.maxWidth='100%';
      labels.forEach((name,i)=>{const option=document.createElement('option');option.value=i;option.textContent=name;select.append(option)});
      select.addEventListener('change',()=>{onchange(Number(select.value));render()});label.append(select);controls.append(label);return select;
    }
    const rowSelect=select('First row (dominates)',data.rows,v=>row=v);
    const colSelect=select('First column (dominated)',data.columns,v=>column=v);
    function button(text,action){const b=document.createElement('button');b.type='button';b.textContent=text;b.addEventListener('click',action);controls.append(b);return b}
    button('Previous rows',()=>{row=Math.max(0,row-rows);render()});button('Next rows',()=>{row=Math.min(data.rows.length-1,row+rows);render()});
    button('Previous columns',()=>{column=Math.max(0,column-cols);render()});button('Next columns',()=>{column=Math.min(data.columns.length-1,column+cols);render()});
    button('Download full CSV',()=>{
      const quote=v=>'"'+String(v).replaceAll('"','""')+'"';
      const csv=[['Row dominates column',...data.columns],...data.values.map((v,i)=>[data.rows[i],...v])].map(r=>r.map(quote).join(',')).join('\r\n');
      const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='archived-dominance-matrix-'+root.dataset.matrixNumber+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    });
    function render(){
      if(!root.getClientRects().length)return;
      cols=Math.max(1,Math.min(8,Math.floor((root.clientWidth-110)/65)));
      const table=document.createElement('table');table.className='research-table report-fit-table horizontal-summary-group dominance-matrix-table';
      const thead=table.createTHead(),header=thead.insertRow();
      const th=document.createElement('th');th.textContent='Row ↓ / column →';th.scope='col';header.append(th);
      for(let j=column;j<Math.min(data.columns.length,column+cols);j++){const c=document.createElement('th');c.scope='col';c.textContent=data.columns[j];header.append(c)}
      const body=table.createTBody();
      for(let i=row;i<Math.min(data.rows.length,row+rows);i++){
        const tr=body.insertRow(),name=document.createElement('th');name.scope='row';name.textContent=data.rows[i];tr.append(name);
        for(let j=column;j<Math.min(data.columns.length,column+cols);j++){const td=tr.insertCell();td.textContent=data.values[i][j];td.dataset.row=i;td.dataset.column=j;td.title=data.rows[i]+' dominates '+data.columns[j]+': '+data.values[i][j]}
      }
      grid.replaceChildren(table);rowSelect.value=row;colSelect.value=column;
      root.querySelector('.dominance-matrix-range').textContent=`Rows ${row+1}–${Math.min(data.rows.length,row+rows)} of ${data.rows.length}; columns ${column+1}–${Math.min(data.columns.length,column+cols)} of ${data.columns.length}.`;
    }
    new ResizeObserver(render).observe(root);document.addEventListener('toggle',render,true);render();
  }
  document.querySelectorAll('.dominance-matrix-view').forEach(setup);
})();
