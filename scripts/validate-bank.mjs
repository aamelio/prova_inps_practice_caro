import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const files = [
  'data/questions.js',
  'data/logic-extra.js',
  'data/verbal-extra.js',
  'data/english-extra.js',
  'data/computing-extra.js',
  'data/culture-extra.js',
  'data/questions.generated.js',
];
const required = { logica: 15, verbale: 10, inglese: 10, informatica: 10, cultura: 15 };
const ctx = { window: {} };
vm.createContext(ctx);
for (const file of files) {
  if (!fs.existsSync(file)) throw new Error('Missing bank file: ' + file);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: path.resolve(file), timeout: 5000 });
}
const bank = ctx.window.PECS_QUESTIONS;
if (!Array.isArray(bank)) throw new Error('Bank is not an array.');
const ids = new Set();
const questions = new Set();
const counts = Object.fromEntries(Object.keys(required).map(s => [s, 0]));
let draft = 0;
for (const q of bank) {
  if (!q || typeof q !== 'object') throw new Error('Invalid question entry.');
  if (!q.id || ids.has(q.id)) throw new Error('Duplicate/empty question ID: ' + q.id);
  ids.add(q.id);
  const text = (q.question || '').trim().replace(/\s+/g, ' ').toLowerCase();
  if (!text || questions.has(text)) throw new Error('Duplicate/empty question: ' + q.id);
  questions.add(text);
  if (!(q.subject in required)) throw new Error('Unknown subject: ' + q.id);
  counts[q.subject]++;
  if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4)
    throw new Error('Invalid answer alternatives: ' + q.id);
  if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3)
    throw new Error('Invalid answer index: ' + q.id);
  if (!q.explanation || !q.source) throw new Error('Missing explanation or provenance: ' + q.id);
  if (q.verified !== true) draft++;
}
for (const [subject, target] of Object.entries(required)) {
  if (counts[subject] < target) throw new Error('Insufficient questions in ' + subject);
}
console.log('PASS: bank schema and uniqueness. Total: ' + bank.length);
console.log('Counts by subject:', JSON.stringify(counts));
console.log('Unverified drafts:', draft);
console.log('Maximum complete disjoint main exams:', Math.min(...Object.entries(required).map(([s,n]) => Math.floor(counts[s] / n))));
