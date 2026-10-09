import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html=fs.readFileSync("index.html","utf8");
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,"Inline application script must exist");
new vm.Script(script);
const questionFiles=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]).filter(p=>p.startsWith("data/"));
assert.ok(questionFiles.length>=1,"Question scripts must exist");
const bankContext={window:{}};
vm.createContext(bankContext);
for(const file of questionFiles){
 assert.ok(fs.existsSync(file),"Missing question source: "+file);
 vm.runInContext(fs.readFileSync(file,"utf8"),bankContext,{filename:file});
}
const bank=bankContext.window.PECS_QUESTIONS;
const store=new Map();
const storage={
 getItem:key=>store.has(key)?store.get(key):null,
 setItem:(key,val)=>store.set(key,String(val)),
 removeItem:key=>store.delete(key)
};
const makeApp=()=>{
 const elements={},view={innerHTML:""};
 elements.view=view;
 const document={
  getElementById(id){return elements[id]??(elements[id]={innerHTML:"",value:"all",textContent:"",onclick:null,onchange:null})},
  querySelectorAll(css){
   if(css!==".choice")return [];
   return [...view.innerHTML.matchAll(/data-i="(\d+)"/g)].map(m=>({dataset:{i:m[1]},onclick:null}));
  }
 };
 const ctx={
  window:bankContext.window,document,localStorage:storage,console,
  confirm:()=>true,alert:(msg)=>{throw new Error("Unexpected alert: "+msg)},
  setInterval:()=>1,clearInterval:()=>{},
  Date,Math,JSON,Number,String,Array,Map,Set,URL,Blob,
 };
 vm.createContext(ctx);
 vm.runInContext(script,ctx,{filename:"index.html:inline",timeout:10000});
 const get=()=>vm.runInContext("({run,history})",ctx);
 const call=(functionName)=>vm.runInContext(functionName,ctx);
 return {elements,view,get,call};
};
let app=makeApp();
assert.ok(app.view.innerHTML.includes("La prova preselettiva"));
const three=bank.slice(0,3);
const ctx0=app.call("start");
ctx0(three,false);
assert.equal(JSON.parse(store.get("pecs-active-v1")).ids.length,3);
app.elements.next.onclick();
assert.equal(JSON.parse(store.get("pecs-active-v1")).idx,1);
app=makeApp();
assert.ok(app.view.innerHTML.includes("Riprendi sessione"));
app.call("resumeSession")();
assert.equal(app.get().run.idx,1);
app.get().run.answers[three[1].id]=1;
app.call("saveSnapshot")();
app.elements.next.onclick();
app.elements.next.onclick();
assert.equal(app.get().history.length,1);
assert.equal(store.has("pecs-active-v1"),false);
app=makeApp();
assert.equal(app.get().history.length,1);
app.call("startExam")();
const simulation=app.get().run.qs;
assert.equal(simulation.length,60);
assert.equal(new Set(simulation.map(q=>q.id)).size,60);
for(const [subject,count] of Object.entries({logica:15,verbale:10,inglese:10,informatica:10,cultura:15})){
 assert.equal(simulation.filter(q=>q.subject===subject).length,count);
}
app.get().run.idx=17;
app.get().run.answers[simulation[4].id]=2;
app.call("saveSnapshot")();
app=makeApp();
app.call("resumeSession")();
assert.equal(app.get().run.idx,17);
assert.equal(app.get().run.answers[simulation[4].id],2);
app.get().run.deadline=Date.now()-1000;
app.call("saveSnapshot")();
app=makeApp();
app.call("resumeSession")();
assert.equal(app.get().history.length,2);
assert.equal(store.has("pecs-active-v1"),false);
app.call("stats")();
assert.ok(app.view.innerHTML.includes("Risultati per materia"));
assert.ok(app.view.innerHTML.includes("Sessioni completate"));
console.log("PASS: question bank loads, active sessions persist across reload, completed history persists, expired timed exam is finalized, and subject statistics render.");
