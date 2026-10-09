/*
 * PECS Lab GitHub synchronization.
 * Stores progress.json on the progress-data branch of this repository.
 * The access token is provided by the user IN THE BROWSER, never committed.
 */
(() => {
  "use strict";
  const REPO = "aamelio/prova_inps_practice_caro";
  const BRANCH = "progress-data";
  const PATH = "progress.json";
  const URL = "https://api.github.com/repos/" + REPO + "/contents/" + PATH;
  const SESSION_KEY = "pecs-github-token-session";
  const REMEMBER_KEY = "pecs-github-token-remember";
  const LAST_SYNC_KEY = "pecs-github-last-sync";
  let callbacks = null;
  let pending = null;
  let busy = false;
  let resyncRequested = false;
  let status = "";
  let syncEpoch = 0;

  function getStored(key, session = false) {
    try { return (session ? sessionStorage : localStorage).getItem(key) || ""; }
    catch { return ""; }
  }
  function setStored(key, value, session = false) {
    try { (session ? sessionStorage : localStorage).setItem(key, value); return true; }
    catch { return false; }
  }
  function delStored(key, session = false) {
    try { (session ? sessionStorage : localStorage).removeItem(key); }
    catch {}
  }
  function token() {
    return getStored(SESSION_KEY, true) || getStored(REMEMBER_KEY);
  }
  function connected() { return token().length > 0; }
  function setStatus(message) {
    status = message;
    const el = document.getElementById("githubSyncStatus");
    if (el) el.textContent = status;
  }
  function encode(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    for (let start = 0; start < bytes.length; start += 8192)
      binary += String.fromCharCode(...bytes.subarray(start, start + 8192));
    return btoa(binary);
  }
  function decode(text) {
    const bytes = Uint8Array.from(atob(text.replace(/\s/g, "")), ch => ch.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  function normalizeHistory(input) {
    return Array.isArray(input) ? input.filter(x => x && typeof x === "object" &&
      Array.isArray(x.questions) && Number.isFinite(x.count)) : [];
  }
  function keyFor(h) {
    if (typeof h.sessionId === "string" && h.sessionId) return "id:" + h.sessionId;
    // Deterministic ID for sessions stored before synchronization was introduced.
    return "legacy:" + JSON.stringify([h.date || "", h.mode || "", h.count || 0,
      (h.questions || []).map(q => [q.id || "", q.right, q.answer ?? null])]);
  }
  function mergeHistory(left, right) {
    const result = new Map();
    for (const entry of [...normalizeHistory(left), ...normalizeHistory(right)]) {
      const k = keyFor(entry), previous = result.get(k);
      if (!previous || JSON.stringify(entry).length > JSON.stringify(previous).length)
        result.set(k, entry);
    }
    return [...result.values()].sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  }
  function asTime(x) { return Number.isFinite(Number(x)) ? Math.max(0, Number(x)) : 0; }
  function localState() {
    const active = callbacks.getActive();
    return {
      schemaVersion: 1,
      history: normalizeHistory(callbacks.getHistory()),
      active: active.snapshot || null,
      activeUpdatedAt: Math.max(asTime(active.updatedAt), asTime(active.snapshot?.updatedAt))
    };
  }
  function mergeState(local, remote) {
    const remoteStamp = asTime(remote.activeUpdatedAt || remote.active?.updatedAt);
    const localStamp = asTime(local.activeUpdatedAt || local.active?.updatedAt);
    const remoteWins = remoteStamp > localStamp;
    return {
      schemaVersion: 1,
      history: mergeHistory(remote.history, local.history),
      active: remoteWins ? (remote.active || null) : (local.active || null),
      activeUpdatedAt: Math.max(remoteStamp, localStamp)
    };
  }
  function isEquivalent(a, b) {
    return JSON.stringify({
      history: normalizeHistory(a.history),
      active: a.active || null,
      activeUpdatedAt: asTime(a.activeUpdatedAt)
    }) === JSON.stringify({
      history: normalizeHistory(b.history),
      active: b.active || null,
      activeUpdatedAt: asTime(b.activeUpdatedAt)
    });
  }
  async function request(url, options, ownToken) {
    const headers = {
      "Accept": "application/vnd.github+json",
      "Authorization": "Bearer " + ownToken,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options?.headers || {})
    };
    const response = await fetch(url, { ...options, headers, cache: "no-store" });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok) {
      const e = new Error(response.status === 401 ? "Token non valido o scaduto." :
        response.status === 403 ? "Accesso negato o limite API: verifica i permessi Contents e l'accesso al repository." :
        response.status === 404 ? "File o branch progress-data non trovato, oppure accesso non consentito." :
        "GitHub ha restituito HTTP " + response.status + ".");
      e.status = response.status;
      throw e;
    }
    return data;
  }
  async function readRemote(ownToken) {
    const json = await request(URL + "?ref=" + encodeURIComponent(BRANCH) + "&t=" + Date.now(), {}, ownToken);
    if (!json || typeof json.content !== "string" || typeof json.sha !== "string")
      throw Error("Risposta GitHub non valida.");
    const progress = JSON.parse(decode(json.content));
    if (!progress || progress.schemaVersion !== 1 || !Array.isArray(progress.history))
      throw Error("Formato progress.json non riconosciuto.");
    return { progress, sha: json.sha };
  }
  async function writeRemote(ownToken, sha, state) {
    const payload = JSON.stringify({
      ...state,
      updatedAt: new Date().toISOString()
    }, null, 2) + "\n";
    const body = {
      message: "Update PECS practice progress",
      content: encode(payload),
      sha,
      branch: BRANCH
    };
    await request(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }, ownToken);
  }
  function applyMerged(state) {
    callbacks.setHistory(state.history);
    callbacks.setActive(state.active || null, state.activeUpdatedAt);
    callbacks.updated();
  }
  async function synchronize() {
    if (!callbacks || !connected()) { setStatus("Sincronizzazione non collegata."); return false; }
    if (busy) { resyncRequested = true; return false; }
    if (pending) { clearTimeout(pending); pending = null; }
    busy = true;
    const myEpoch = syncEpoch, ownToken = token();
    setStatus("Sincronizzazione GitHub in corso…");
    try {
      for (let attempt = 0; attempt < 4; attempt++) {
        const { progress: remote, sha } = await readRemote(ownToken);
        // A token could be disconnected while a network request is in flight.
        if (myEpoch !== syncEpoch) return false;
        const state = mergeState(localState(), remote);
        // Keep local copy coherent even if the remote already contains our state.
        applyMerged(state);
        if (!isEquivalent(state, remote)) {
          try { await writeRemote(ownToken, sha, state); }
          catch (e) {
            if ((e.status === 409 || e.status === 422) && attempt < 3) continue;
            throw e;
          }
        }
        if (myEpoch !== syncEpoch) return false;
        const date = new Date().toISOString();
        setStored(LAST_SYNC_KEY, date);
        setStatus("Sincronizzato: " + new Date(date).toLocaleString("it-IT"));
        return true;
      }
      throw Error("Conflitto tra dispositivi: riprova la sincronizzazione.");
    } catch (e) {
      setStatus("Non sincronizzato: " + (e.message || "errore di connessione") +
        " I dati locali sono conservati.");
      return false;
    } finally {
      busy = false;
      if (resyncRequested) {
        resyncRequested = false;
        schedule();
      }
    }
  }
  function schedule() {
    if (!connected() || !callbacks) return;
    if (pending) clearTimeout(pending);
    setStatus("Modifiche locali in attesa di sincronizzazione…");
    pending = setTimeout(() => { pending = null; synchronize(); }, 1200);
  }
  async function connect(newToken, remember) {
    const cleaned = String(newToken || "").trim();
    if (!cleaned || /\s/.test(cleaned)) { setStatus("Inserisci un token GitHub valido."); return false; }
    // Verify token before storing it.
    setStatus("Verifica dei permessi GitHub…");
    try { await readRemote(cleaned); }
    catch (e) { setStatus("Connessione non riuscita: " + e.message); return false; }
    delStored(SESSION_KEY, true);
    delStored(REMEMBER_KEY);
    const stored = setStored(remember ? REMEMBER_KEY : SESSION_KEY, cleaned, !remember);
    if (!stored) { setStatus("Impossibile memorizzare la connessione su questo browser."); return false; }
    syncEpoch++;
    await synchronize();
    return true;
  }
  function disconnect() {
    syncEpoch++;
    if (pending) clearTimeout(pending);
    pending = null;
    delStored(SESSION_KEY, true);
    delStored(REMEMBER_KEY);
    setStatus("Connessione scollegata. Il progresso locale è conservato.");
    render();
  }
  function render() {
    const panel = document.getElementById("githubSyncPanel");
    if (!panel) return;
    panel.innerHTML = connected()
      ? '<p><b>Connesso a GitHub.</b> La cronologia di questo browser può essere condivisa con gli altri dispositivi collegati.</p>' +
        '<p id="githubSyncStatus" role="status"></p>' +
        '<div class="flex"><button id="githubSyncNow">Sincronizza ora</button>' +
        '<button class="secondary" id="githubSyncDisconnect">Scollega questo dispositivo</button></div>' +
        '<p class="muted">La sincronizzazione usa il file progress.json sul branch progress-data dello stesso repository pubblico. Chiunque può leggere quei dati.</p>'
      : '<p>Collega questo browser al file di progresso su GitHub. Il link pubblico del sito <b>non</b> autorizza la scrittura: serve un token personale con accesso al repository.</p>' +
        '<p><label>GitHub fine-grained token<br><input id="githubToken" type="password" autocomplete="off" spellcheck="false" placeholder="github_pat_…" style="max-width:100%;width:420px;padding:11px;border:1px solid #cbd5e1;border-radius:9px"></label></p>' +
        '<p><label><input id="githubRememberToken" type="checkbox"> Ricorda il token su questo dispositivo (meno sicuro, ma resta connesso dopo la chiusura)</label></p>' +
        '<button id="githubConnect">Collega e sincronizza</button><p id="githubSyncStatus" role="status"></p>' +
        '<p class="muted">Crea il token nelle impostazioni GitHub: Fine-grained personal access tokens → Only select repositories → <b>prova_inps_practice_caro</b> → Repository permissions → <b>Contents: Read and write</b>. Non pubblicare mai il token nel repository o nei messaggi. Per minimizzare il rischio usa un account GitHub dedicato, autorizzato su questa repository.</p>';
    const statusEl = document.getElementById("githubSyncStatus");
    if (statusEl) statusEl.textContent = status || (connected() ? ("Ultima sincronizzazione: " + (getStored(LAST_SYNC_KEY) || "non disponibile")) : "Non collegato.");
    const connectButton = document.getElementById("githubConnect");
    if (connectButton) connectButton.onclick = async () => {
      const input = document.getElementById("githubToken");
      const remember = document.getElementById("githubRememberToken").checked;
      const ok = await connect(input.value, remember);
      input.value = "";
      if (ok) render();
    };
    const syncButton = document.getElementById("githubSyncNow");
    if (syncButton) syncButton.onclick = () => synchronize();
    const disconnectButton = document.getElementById("githubSyncDisconnect");
    if (disconnectButton) disconnectButton.onclick = disconnect;
  }
  function initialize(hooks) {
    callbacks = hooks;
    if (connected()) {
      // Load the most recent remote state on every visit, without blocking app startup.
      synchronize();
    }
    // When returning to the tab, refresh histories written by other devices.
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && connected()) synchronize();
      else if (document.hidden && pending) {
        clearTimeout(pending); pending = null;
        synchronize();
      }
    });
  }
  window.PECS_GITHUB_SYNC = Object.freeze({
    initialize, schedule, synchronize, render, disconnect, mergeHistory, mergeState
  });
})();