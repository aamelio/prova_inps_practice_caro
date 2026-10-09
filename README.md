# PECS Lab — INPS 1.695 PECS (2026)

Practice app for the Italian INPS *Funzionario progettazione, erogazione e controllo dei servizi* competition. **Independent project; not affiliated with INPS.**

## Live app

After GitHub Pages deploys from `main` at root:
https://aamelio.github.io/prova_inps_practice_caro/

## Question bank

**369 original practice questions (draft, not official, not independently fact-checked).**

| Materia | Quesiti disponibili | Quesiti per prova |
| --- | ---: | ---: |
| Logica | 80 | 15 |
| Comprensione / ragionamento verbale | 58 | 10 |
| Lingua inglese | 65 | 10 |
| Competenze informatiche | 63 | 10 |
| Cultura generale | 103 | 15 |
| **Totale** | **369** | **60** |

Enough distinct questions to support up to five non-overlapping 60-question primary mock papers **if only these full simulations are taken**. The simulator preferentially selects questions not previously used in a full exam. Ordinary practice and topic drills may repeat questions.

Every question has a stable ID, correct-option index, explanation, subject and an origin field; the 339 newly added questions also have a subtopic. Each question has `verified:false` and requires subject-matter review. They are **original authored practice**, not reproductions of third-party banks or previous official tests.

### Official exam format

- Preselettiva, October 27–30, 2026: 60 questions, four choices, 60 minutes. Distribution 15 logic / 10 verbal / 10 English / 10 IT / 15 general knowledge.
- Additionally five reserve questions in five minutes. **Reserve-question phase is not yet implemented in the application.**
- Written exam, November 9, 2026: 3 technical-legal cloze passages with comprehension items, plus 2 situational scenarios, three options per question. Passing threshold 21/30 in each section. **Written exam simulator not yet implemented.**
- Official notice does not settle a negative-marking formula in the provided documents, so raw practice accuracy is **not** an official exam score.

## How it works

Pure HTML/JS and static question scripts in `data/`. No backend, login or cookies are required.

### Persistent progress (same browser and device)
- Completed practice sessions and simulations are stored in the browser's `localStorage` under `pecs-history-v1`, retaining previous history.
- **In-progress sessions** save answers, question position, and timings automatically under `pecs-active-v1`. On the homepage, choose **Riprendi sessione** after reopening the website.
- During a **timed exam**, the deadline is absolute: closing the browser does not stop the 60-minute countdown. Reopening after the deadline finalizes the exam.
- **Statistiche** displays a per-subject breakdown, answer timings for new attempts and recent sessions.
- **Esporta backup JSON** saves completed results and the unfinished session; **Importa backup** restores them, including legacy history-only JSON arrays.
- Storage is local to the **same browser profile and device**. Clearing site data, private/incognito browsing or switching browsers/devices can lose or hide it. Export a backup periodically.
- Cross-device synchronization is available via the **GitHub Sync** tab and `progress.json` on the separate `progress-data` branch **of this same repository**. Local autosave continues to work even when offline. Results synchronize when the app opens, when its tab becomes active, and shortly after local changes. Use the manual **Sincronizza ora** button before switching devices if needed.
- The storage branch is separate from `main`, so frequent progress commits do not change the live app or trigger GitHub Pages deployment.
- Each browser needs a GitHub fine-grained personal access token authorized for this exact repository, permission **Contents: Read and write**. In GitHub: Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token → Only select repositories → `prova_inps_practice_caro` → Contents: Read and write. Never share the token in chat, screenshots, commits, or code. Prefer a dedicated GitHub account invited as a collaborator rather than the repository owner's broad personal credential.
- In the **GitHub Sync** tab enter the token and choose whether to remember it in this browser. Session-only is the safer default; checking **Ricorda il token** stores it in `localStorage` on that device. Because the token can write repository contents, never enter it on a shared/untrusted device. Revoke it in GitHub if exposed.
- **PUBLIC DATA WARNING:** this repository is public. Although the `progress-data` branch isn't used to host the site, its `progress.json` file is publicly readable by anyone. Do not record sensitive/private information in answers or progress, and do not treat the site URL as access control. The token is required for writing; anyone with the public URL can still use the app locally without syncing.
- Simultaneous devices are supported using GitHub's SHA conflict detection and history merging. The newest in-progress session is selected if two devices both save one; avoid actively answering on two devices at once. Commits are produced by GitHub when syncing, so the app delays writes briefly.
- Clearing site data, private/incognito browsing or switching browsers can remove local progress and saved token. The remote history persists in `progress-data` and can be restored after reconnecting. Keep occasional JSON backups as an extra safeguard.

### Editing content

- Base demonstration bank: `data/questions.js`
- Logic: `data/logic-extra.js`
- Verbal: `data/verbal-extra.js`
- English: `data/english-extra.js`
- IT: `data/computing-extra.js`
- General knowledge: `data/culture-extra.js`

For each new entry, provide unique `id`, `subject`, `topic`, `question`, `choices` (4 distinct strings), `correct` (zero-based), `explanation`, `source`, and `verified`. Run `node scripts/validate-bank.mjs` to validate the combined collection.

## Sources and legal caution

- [Official 2026 INPS competition (inPA)](https://www.inpa.gov.it/bandi-e-avvisi/dettaglio-bando-avviso/?concorso_id=69e36f03408f4a80b3785a647fc77905)
- [Constitution, Senate of the Italian Republic](https://www.senato.it/istituzione/la-costituzione)
- [Article 288 TFEU (EUR-Lex)](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A12016E288)

Links are **reference materials**, not an assertion that every authored question has been individually source-verified. Do not copy and republish proprietary exam-preparation banks without permission and necessary rights.

## Remaining work

1. Subject-matter review and factual verification with citations per question.
2. More diverse question types and better calibration of difficulty using legally reusable historical items.
3. Dedicated reserve-question timing; fully accurate written-exam cloze and situational practice.
4. Improve spaced repetition and timed practice analytics.
