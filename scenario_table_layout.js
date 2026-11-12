/* Scenario explorers retain their original horizontal tables and native panels. */
(()=>{
  document.body.dataset.tableLayout='native-scenario';
  function restore(){
    document.querySelectorAll('table').forEach(table=>table.classList.remove('report-fit-table','fit-stacked','fit-profile-grid','fit-profile-vertical','fit-profile-compact'));
    document.querySelectorAll('.report-fit-wrapper').forEach(wrapper=>wrapper.classList.remove('report-fit-wrapper'));
    document.documentElement.dataset.tablesReady='true';
  }
  window.reportTableFit=restore;
  restore();
})();
