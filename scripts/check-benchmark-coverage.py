"""Fast publication guard: actual Berkshire coverage, not text-only presence."""
import argparse,json,hashlib,math,statistics
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--site',required=True);a=p.parse_args();s=Path(a.site)
read=lambda name:json.loads((s/name).read_text(encoding='utf8'))
d=read('current-overview.json');n=read('chapter3-current-performance.json');m=read('dominance-matrices.json')
assert n['source_sha256']==hashlib.sha256((s/'current-overview.json').read_bytes()).hexdigest(),'Stale native Current metrics'
entities={'CURRENT','SP500_EUR','OMXBBGI','BERKSHIRE_EUR'}
assert set(n['entities'])==entities
for period,window in d['periods'].items():
 assert entities<=set(window['metrics']),'Benchmark missing from Current overview '+period
 rows=[r for r in n['rows'] if r['period']==period]
 for entity in entities:assert len([r for r in rows if r['entity']==entity])==72,(period,entity)
 levels=d['benchmarks']['BERKSHIRE_EUR'];rr=[levels[i]/levels[i-1]-1 for i in range(1,len(levels)) if window['first']<d['dates'][i]<=window['last'] and levels[i] is not None and levels[i-1] is not None]
 native={r['metric']:r for r in rows if r['entity']=='BERKSHIRE_EUR'}
 assert native['ArithmeticReturn']['observations']==len(rr)
 assert abs(native['ArithmeticReturn']['value']-statistics.mean(rr))<1e-12
 assert abs(native['CumulativeReturn']['value']-(math.prod(1+x for x in rr)-1))<1e-11
assert m['source_sha256']==n['source_sha256']
assert {'SP500_EUR','OMXBBGI','BERKSHIRE_EUR'}<={r.get('benchmark_id') for r in m['entities']}
js=(s/'chapter3-current-diagnostics.js').read_text(encoding='utf8');assert js.count('Berkshire EUR')==2 and js.count("'BERKSHIRE_EUR'")>=2
print(json.dumps(dict(passed=True,periods=len(d['periods']),native_Berkshire_values=72*len(d['periods']),native_total_values=len(n['rows']),dominance_benchmarks=3)))
