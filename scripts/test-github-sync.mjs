import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const script=fs.readFileSync("sync/github-sync.js","utf8");
new vm.Script(script);
const dataset={schemaVersion:1,history:[],active:null,activeUpdatedAt:0,updatedAt:null};
let sha=1;
const server=async (url,options={})=>{
 const method=options.method||"GET";
 const auth=options.headers?.Authorization || "";
 if(auth!=="Bearer valid-token")return {ok:false,status:401,json:async()=>({message:"Bad credentials"})};
 if(!url.includes("progress.json"))return {ok:false,status:404,json:async()=>({})};
 if(method==="GET"){
  const data=Buffer.from(JSON.stringify(dataset)).toString("base64");
  return {ok:true,status:200,json:async()=>({sha:"sha-"+sha,content:data})};
 }
 if(method==="PUT"){
  const body=JSON.parse(options.body);
  if(body.sha!=="sha-"+sha)return {ok:false,status:409,json:async()=>({message:"Conflict"})};
  const incoming=JSON.parse(Buffer.from(body.content,"base64").toString("utf8"));
  Object.assign(dataset,incoming);
  sha++;
  return {ok:true,status:200,json:async()=>({content:{sha:"sha-"+sha}})};
 }
 throw Error("Unexpected method "+method);
};
const makeDevice=()=>{
 const local=new Map(),session=new Map();
 const storage=m=>({getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k)});
 // Install the token after initialization so each test controls sync timing.
 const s={history:[],active:null,updatedAt:0,updatedCalls:0};
 const w={},doc={getElementById:()=>null,addEventListener:()=>{},hidden:false};
 const sandbox={
  window:w,document:doc,localStorage:storage(local),sessionStorage:storage(session),
  fetch:server,Date,JSON,Number,Array,Map,Set,TextEncoder,TextDecoder,Uint8Array,
  atob:s=>Buffer.from(s,"base64").toString("binary"),
  btoa:s=>Buffer.from(s,"binary").toString("base64"),
  setTimeout:()=>1,clearTimeout:()=>{},console
 };
 vm.createContext(sandbox);vm.runInContext(script,sandbox);
 const sync=w.PECS_GITHUB_SYNC;
 sync.initialize({
  getHistory:()=>s.history,
  setHistory:x=>{s.history=x},
  getActive:()=>({snapshot:s.active,updatedAt:s.updatedAt}),
  setActive:(x,t)=>{s.active=x;s.updatedAt=t},
  updated:()=>{s.updatedCalls++}
 });
 session.set("pecs-github-token-session","valid-token");
 return {sync,s,local,session};
};
const a=makeDevice(),b=makeDevice();
await Promise.all([a.sync.synchronize(),b.sync.synchronize()]);
const sessionData=(id)=>({sessionId:id,date:"2026-10-09T16:00:00Z",mode:"exam",count:1,correct:1,questions:[{id,right:true}]});
a.s.history.push(sessionData("deviceA"));
assert.equal(await a.sync.synchronize(),true);
assert.equal(dataset.history.length,1);
assert.equal(await b.sync.synchronize(),true);
assert.equal(b.s.history.length,1);
b.s.history.push(sessionData("deviceB"));
assert.equal(await b.sync.synchronize(),true);
assert.equal(dataset.history.length,2);
a.s.history.push(sessionData("deviceC"));
assert.equal(await a.sync.synchronize(),true);
assert.equal(dataset.history.length,3);
const c=makeDevice(),d=makeDevice();
await Promise.all([c.sync.synchronize(),d.sync.synchronize()]);
c.s.history.push(sessionData("concurrentC"));
d.s.history.push(sessionData("concurrentD"));
await Promise.all([c.sync.synchronize(),d.sync.synchronize()]);
assert.equal(dataset.history.length,5);
assert.equal(new Set(dataset.history.map(h=>h.sessionId)).size,5);
a.s.active={version:1,ids:["q1"],idx:0,exam:false,answers:{},updatedAt:100};a.s.updatedAt=100;
await a.sync.synchronize();
await b.sync.synchronize();
assert.equal(b.s.active.ids[0],"q1");
b.s.active=null;b.s.updatedAt=200;
await b.sync.synchronize();
await a.sync.synchronize();
assert.equal(a.s.active,null,"newer deletion must not be resurrected");
assert.equal(dataset.active,null);
console.log("PASS: GitHub cloud synchronization, cross-device history merge, concurrent SHA conflicts, and active-session tombstones.");
