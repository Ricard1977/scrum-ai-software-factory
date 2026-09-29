import fs from 'node:fs';
const registry=JSON.parse(fs.readFileSync('registry/projects.json','utf8'));
const required=['project_id','project_name','repository','product_owner','status','main_branch','documentation_location','backlog_location','architecture_location','active_sprint','health_status'];
const ids=new Set();let failures=[];
for(const p of registry.projects){
  for(const k of required) if(!(k in p)) failures.push(`${p.project_id||'UNKNOWN'} missing ${k}`);
  if(ids.has(p.project_id)) failures.push(`Duplicate PROJECT_ID ${p.project_id}`);
  ids.add(p.project_id);
  if(!['ACTIVE','PAUSED','BLOCKED','ARCHIVED'].includes(p.status)) failures.push(`${p.project_id} invalid status`);
  if(!['HEALTHY','ATTENTION','BLOCKED'].includes(p.health_status)) failures.push(`${p.project_id} invalid health`);
  if(!fs.existsSync(p.backlog_location)) failures.push(`${p.project_id} missing backlog fixture`);
  else {
    const b=JSON.parse(fs.readFileSync(p.backlog_location,'utf8'));
    if(b.project_id!==p.project_id) failures.push(`${p.project_id} backlog isolation mismatch`);
    for(const item of b.items||[]) if(!item.id||!item.title||!item.type||!item.priority||!item.owner_role||!item.status) failures.push(`${p.project_id} malformed backlog item`);
  }
}
const evidencePath='fixtures/FACTORY-DEMO-B/delivery-evidence.json';
if(fs.existsSync(evidencePath)){
  const evidence=JSON.parse(fs.readFileSync(evidencePath,'utf8'));
  if(evidence.project_id!=='FACTORY-DEMO-B') failures.push('Demo B delivery evidence PROJECT_ID isolation mismatch');
  if(evidence.issue_number!==1) failures.push('Demo B delivery evidence is not linked to Issue #1');
  if(evidence.evidence_scope!=='fictitious-phase-1-only') failures.push('Demo B evidence escaped fictitious Phase 1 scope');
}
if(failures.length){console.error('FACTORY VALIDATION FAILED');failures.forEach(x=>console.error('- '+x));process.exit(1)}
console.log(`FACTORY VALIDATION PASSED: ${registry.projects.length} project(s), strict PROJECT_ID isolation verified.`);
