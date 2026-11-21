import { messages, t } from "./i18n.js";
import {
  createDemoState,
  isAuthoritativelyReady,
  isProviderStage,
  isStageReviewed,
  markDemoStageReviewed,
  nextIncompleteStage,
  normalizeDemoState,
  recordProviderOutcome,
  retryDemoStage
} from "./onboarding-state.mjs";

const STORAGE_KEY = "saathi-onboarding-demo-v1";
const fresh = createDemoState;
let state = fresh();
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  state = normalizeDemoState(saved);
} catch { /* Storage may be unavailable; the demo still works in memory. */ }

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const save = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* In-memory demo fallback. */ } };
const statusLabel = status => ({ pending: t("pending", state.lang), rejected: t("rejected", state.lang), unavailable: t("unavailable", state.lang), simulated: t("complete", state.lang), reviewed: t("complete", state.lang) }[status] || t("incomplete", state.lang));
const isReviewed = index => isStageReviewed(state, index);

function stateMessage(status, index) {
  if (index >= 5) return status === "unavailable" ? "policyUnavailable" : status === "reviewed" ? "statusReviewed" : "";
  return ({ pending: "statusPending", rejected: "statusRejected", unavailable: "statusUnavailable", simulated: "statusApproved", reviewed: "statusReviewed" })[status] || "";
}

function renderWelcome() {
  return `<section class="welcome-layout">
    <div class="welcome-copy"><p class="eyebrow">${t("eyebrow")}</p><p class="welcome-tag">${t("welcomeTag")}</p><h1>${t("welcomeTitle")}</h1><p class="lead">${t("welcomeBody")}</p>
      <div class="welcome-art" aria-hidden="true"><div class="art-sun"></div><div class="art-path"></div><div class="art-card"><span>01</span><i></i><i></i><i></i></div><div class="art-stem stem-one"></div><div class="art-stem stem-two"></div><div class="art-ground"></div></div>
    </div>
    <div class="welcome-side"><div class="panel language-panel"><h2>${t("chooseLanguage")}</h2><div class="language-options"><button class="language-option ${state.lang === "en" ? "selected" : ""}" data-action="set-language" data-lang="en"><span class="radio-dot" aria-hidden="true"></span><span><strong>English</strong><small>${t("continueEnglish")}</small></span></button><button class="language-option ${state.lang === "hi" ? "selected" : ""}" data-action="set-language" data-lang="hi"><span class="radio-dot" aria-hidden="true"></span><span><strong>हिन्दी</strong><small>${t("continueHindi")}</small></span></button></div><button class="button primary full" data-action="start">${state.screen === "welcome" && state.step > 0 ? t("resume") : t("continue")} <span aria-hidden="true">→</span></button></div>
      <details class="info-card"><summary>${t("trustTitle")}</summary><p>${t("trustBody")}</p><h3>${t("howMoney")}</h3><p>${t("howMoneyBody")}</p></details><p class="privacy-note"><span aria-hidden="true">◈</span>${t("saveNote")}</p></div>
    </section>`;
}

function renderStep() {
  const index = Math.max(0, Math.min(state.step, messages.en.steps.length - 1));
  const status = state.states[index];
  const providerOutcomeNeedsResolution = isProviderStage(index) && ["pending", "rejected", "unavailable"].includes(status);
  const title = t("steps")[index];
  const progress = Math.round(((index + 1) / messages.en.steps.length) * 100);
  let content = `<p class="step-description">${t("desc")[index]}</p><div class="demo-note"><span class="note-icon" aria-hidden="true">i</span><p>${t("demoOnly")}</p></div>`;
  if (index === 0) content += `<div class="sample-code"><h3>${t("codeLabel")}</h3><p>${t("otpHint")}</p><button class="button secondary" data-action="check-code">${t("simulateCode")}</button></div>`;
  if (index === 5) content += `<div class="blocked-content"><div class="blocked-icon" aria-hidden="true">⌁</div><h3>${t("unavailableTitle")}</h3><p>${t("unavailableText")}</p><button class="text-button" data-action="support">${t("supportAction")} ↗</button></div>`;
  if (index === 7) content += `<div class="risk-sample"><h3>${t("riskTitle")}</h3><p class="warning-copy">${t("riskWarning")}</p><div class="sample-qa"><strong>${t("q1")}</strong><span>${t("q1c")}</span></div><div class="sample-qa"><strong>${t("q2")}</strong><span>${t("q2b")}</span></div><p class="no-score">${t("noScore")}</p></div>`;
  if (index === 9) content += renderPrivacy();
  content += `<div class="real-world"><h3>${t("expected")}</h3><p>${t("expectedText")}</p></div>`;
  const outcome = status ? `<div class="status-box ${status}" role="status"><strong>${statusLabel(status)}</strong><p>${t(stateMessage(status, index))}</p>${["pending", "rejected", "unavailable"].includes(status) && index >= 1 && index <= 4 ? `<button class="text-button" data-action="retry">${t("retry")}</button>` : ""}</div>` : "";
  const providerActions = isProviderStage(index) ? `<div class="provider-actions"><p class="field-caption">${t("providerLabel")}</p><div class="outcome-grid"><button class="outcome-button" data-action="outcome" data-status="simulated"><span class="outcome-icon good" aria-hidden="true">✓</span>${t("approved")}</button><button class="outcome-button" data-action="outcome" data-status="pending"><span class="outcome-icon wait" aria-hidden="true">◷</span>${t("wait")}</button><button class="outcome-button" data-action="outcome" data-status="rejected"><span class="outcome-icon bad" aria-hidden="true">!</span>${t("reject")}</button><button class="outcome-button" data-action="outcome" data-status="unavailable"><span class="outcome-icon neutral" aria-hidden="true">×</span>${t("offline")}</button></div></div>` : index >= 5 ? `<div class="status-box unavailable" role="status"><strong>${t("unavailable")}</strong><p>${t("policyUnavailable")}</p></div>` : "";
  return `<section class="journey-layout"><aside class="journey-rail"><div class="rail-heading"><p class="eyebrow">${t("onboarding")}</p><span class="step-counter">${t("stepOf", state.lang, { n: index + 1, total: messages.en.steps.length })}</span></div><div class="progress-track" role="progressbar" aria-label="${escapeHTML(t("onboarding"))}" aria-valuemin="1" aria-valuemax="${messages.en.steps.length}" aria-valuenow="${index + 1}"><span style="width:${progress}%"></span></div><ol class="step-list">${t("steps").map((name, i) => `<li class="step-item ${i === index ? "current" : ""} ${isReviewed(i) ? "is-reviewed" : ""}"><button data-action="goto-step" data-step="${i}" aria-current="${i === index ? "step" : "false"}"><span class="step-mark">${isReviewed(i) ? "✓" : String(i + 1).padStart(2, "0")}</span><span class="step-text">${escapeHTML(name)}</span><span class="visually-hidden">${statusLabel(state.states[i])}</span></button></li>`).join("")}</ol><button class="save-exit" data-action="save-exit">↙ <span>${t("saveExit")}</span></button></aside>
    <article class="step-content"><div class="content-head"><p class="eyebrow">${t("stepOf", state.lang, { n: index + 1, total: messages.en.steps.length })}</p><span class="state-pill ${status || "incomplete"}"><span aria-hidden="true">${status === "simulated" || status === "reviewed" ? "✓" : status === "pending" ? "◷" : status === "rejected" ? "!" : "○"}</span>${statusLabel(status)}</span></div><h1>${escapeHTML(title)}</h1>${content}${outcome}${providerActions}
      <button class="review-link" data-action="review-step">${t("markReviewed")} <span aria-hidden="true">→</span></button><div class="step-nav"><button class="button back-button" data-action="previous" ${index === 0 ? "disabled" : ""}>← <span>${t("back")}</span></button><button class="button primary" data-action="next" ${providerOutcomeNeedsResolution ? "disabled" : ""}>${index === messages.en.steps.length - 1 ? t("demoComplete") : t("next")} <span aria-hidden="true">→</span></button></div></article></section>`;
}

function renderPrivacy() {
  const actionLabel = state.privacy ? "identityGate" : "";
  return `<div class="privacy-card"><div class="privacy-heading"><span class="privacy-symbol" aria-hidden="true">⌑</span><div><h3>${t("privacyTitle")}</h3><p>${t("privacyText")}</p></div></div><div class="privacy-actions"><button class="button secondary" data-action="privacy" data-kind="export">${t("export")}</button><button class="button secondary" data-action="privacy" data-kind="delete">${t("delete")}</button></div>${actionLabel ? `<div class="privacy-result" role="status"><strong>${t(actionLabel)}</strong><p>${t("identityGateText")}</p><p>${t("requestPending")}</p></div>` : ""}</div>`;
}

function renderStatus() {
  const rows = t("steps").map((name, i) => `<li><span class="status-name">${escapeHTML(name)}</span><span class="state-pill ${state.states[i] || "incomplete"}">${statusLabel(state.states[i])}</span></li>`).join("");
  const visitedCount = messages.en.steps.filter((_, i) => state.visited?.[i]).length;
  const readinessLabel = t(isAuthoritativelyReady(state) ? "ready" : "notReady");
  return `<section class="summary-page"><div class="summary-header"><p class="eyebrow">${t("statusTitle")}</p><h1>${readinessLabel}</h1><p class="lead">${t("statusBody")}</p></div><div class="summary-grid"><div class="summary-panel"><div class="summary-number">${visitedCount}<span> / 10</span></div><p>${t("allDone")}</p><ul class="status-list">${rows}</ul></div><aside class="summary-callout"><span class="callout-icon" aria-hidden="true">i</span><h2>${t("suitabilityUnavailable")}</h2><p>${t("completionBody")}</p><div class="status-box pending"><strong>${readinessLabel}</strong><p>${t("statusBody")}</p></div><button class="button primary full" data-action="review-steps">${t("restart")}</button></aside></div></section>`;
}

function renderCompletion() {
  const readinessLabel = t(isAuthoritativelyReady(state) ? "ready" : "notReady");
  return `<section class="completion-page"><div class="completion-symbol" aria-hidden="true">✓</div><p class="eyebrow">${t("demoComplete")}</p><h1>${t("completionTitle")}</h1><p class="lead">${t("completionBody")}</p><div class="completion-actions"><button class="button primary" data-action="review-steps">${t("restart")}</button><button class="button secondary" data-action="view-status">${t("statusTitle")}</button></div><p class="completion-note">${readinessLabel}</p></section>`;
}

function render() {
  document.documentElement.lang = state.lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelector(".lang-toggle").textContent = state.lang === "en" ? "हिन्दी" : "English";
  if (state.screen === "welcome") app.innerHTML = renderWelcome();
  else if (state.screen === "step") app.innerHTML = renderStep();
  else if (state.screen === "status") app.innerHTML = renderStatus();
  else app.innerHTML = renderCompletion();
  app.focus({ preventScroll: true });
}

function announce(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function setStatus(status) {
  if (state.step === 7) {
    state = markDemoStageReviewed(state, state.step);
    save(); render();
    announce(t("noScore"));
    return;
  }
  state = recordProviderOutcome(state, state.step, status);
  save(); render();
}

function next() {
  if (state.screen === "welcome") { state.screen = "step"; save(); render(); return; }
  if (!isReviewed(state.step)) {
    announce(t("expectedText"));
    document.querySelector(".step-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (state.step >= messages.en.steps.length - 1) {
    state.screen = "completion"; save(); render();
  } else { state.step += 1; save(); render(); }
}

function requestPrivacy(kind) {
  state.privacy = kind;
  save(); render();
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "set-language") { state.lang = button.dataset.lang; save(); render(); }
  if (action === "toggle-language") { state.lang = state.lang === "en" ? "hi" : "en"; save(); render(); }
  if (action === "start") {
    const earliestIncomplete = nextIncompleteStage(state, messages.en.steps.length);
    if (earliestIncomplete >= 0) state.step = earliestIncomplete;
    state.screen = "step"; save(); render();
  }
  if (action === "outcome") setStatus(button.dataset.status);
  if (action === "review-step") {
    state = markDemoStageReviewed(state, state.step);
    if (state.step === 7) announce(t("noScore"));
    save(); render();
  }
  if (action === "next") next();
  if (action === "previous") { state.step = Math.max(0, state.step - 1); save(); render(); }
  if (action === "goto-step") { state.step = Number(button.dataset.step); state.screen = "step"; save(); render(); }
  if (action === "retry") { state = retryDemoStage(state, state.step); save(); render(); }
  if (action === "save-exit") { state.screen = "welcome"; save(); render(); announce(t("saved")); }
  if (action === "view-status") { state.screen = "status"; save(); render(); }
  if (action === "review-steps") { state.screen = "step"; state.step = 0; save(); render(); }
  if (action === "privacy") requestPrivacy(button.dataset.kind);
  if (action === "help" || action === "support") showHelp();
  if (action === "close-help") closeHelp();
  if (action === "reset") {
    if (window.confirm(t("resetConfirm"))) { state = fresh(); save(); render(); }
  }
  if (action === "check-code") { state.states[state.step] = "simulated"; state.visited[state.step] = true; save(); announce(t("codeGood")); render(); }
});

function showHelp() {
  if (document.querySelector("#help-dialog")) return;
  const dialog = document.createElement("dialog");
  dialog.id = "help-dialog";
  dialog.setAttribute("aria-labelledby", "help-title");
  dialog.innerHTML = `<div class="dialog-top"><span class="dialog-symbol" aria-hidden="true">?</span><button class="icon-button" data-action="close-help" aria-label="${escapeHTML(t("close"))}">×</button></div><h2 id="help-title">${t("supportTitle")}</h2><p>${t("helpPanel")}</p><div class="status-box unavailable"><strong>${t("help")}</strong><p>${t("supportUnavailable")}</p></div><button class="button primary full" data-action="close-help">${t("close")}</button>`;
  document.body.append(dialog);
  dialog.showModal();
  dialog.addEventListener("close", () => dialog.remove());
}

function closeHelp() { document.querySelector("#help-dialog")?.close(); }

render();
