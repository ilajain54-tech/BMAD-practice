import { messages, t } from "./i18n.js";
import {
  createDemoState,
  filterDemoCatalogue,
  isInvestmentCommitmentAvailable,
  isAuthoritativelyReady,
  isProviderStage,
  isStageReviewed,
  markDemoStageReviewed,
  nextIncompleteStage,
  normalizeDemoState,
  recordProviderOutcome,
  retryDemoStage,
  transitionInvestmentDemo
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

const catalog = [
  { id: "saffron-index", category: "equity", risk: "riskHigh" },
  { id: "monsoon-bond", category: "debt", risk: "riskLow" },
  { id: "pebble-hybrid", category: "hybrid", risk: "riskModerate" },
  { id: "terracotta-equity", category: "equity", risk: "riskHigh" }
];
const categoryLabel = category => t(`category${category[0].toUpperCase()}${category.slice(1)}`, state.lang);
const selectedFund = () => catalog.find(fund => fund.id === state.investment.selectedFund);
function filteredFunds() {
  const localized = catalog.map((fund, index) => ({ ...fund, index, name: t("funds")[index], description: t("fundDescriptions")[index] }));
  const categoryLabels = { equity: t("equityCategory"), debt: t("debtCategory"), hybrid: t("hybridCategory") };
  return filterDemoCatalogue(localized, state.investment.query, state.investment.category, categoryLabels);
}
function renderFundCard(fund) {
  const index = fund.index;
  return `<article class="fund-card"><p class="eyebrow">${t("fundLabel")}</p><p class="direct-plan-note">${t("directPlanExplanation")}</p><h2>${escapeHTML(t("funds")[index])}</h2><p>${escapeHTML(t("fundDescriptions")[index])}</p><div class="fund-meta"><span>${escapeHTML(categoryLabel(fund.category))}</span><span>${escapeHTML(t("riskLabel", state.lang, { risk: t(fund.risk) }))}</span></div><p class="freshness">${t("freshnessLabel")}</p><button class="button secondary" data-action="fund-detail" data-fund="${fund.id}">${t("detailsAction")}</button></article>`;
}
function renderExplore() {
  const funds = filteredFunds();
  const collectionOptions = [
    ["all", "collectionAll", "collectionDescriptionAll"],
    ["equity", "collectionEquity", "collectionDescriptionEquity"],
    ["debt", "collectionDebt", "collectionDescriptionDebt"],
    ["hybrid", "collectionHybrid", "collectionDescriptionHybrid"]
  ];
  const collections = collectionOptions.map(([category, title, description]) => `<button data-action="collection" data-category="${category}" aria-pressed="${state.investment.category === category}"><span>${t(title)}</span><small>${t(description)}</small></button>`).join("");
  return `<section class="investment-page"><div class="investment-heading"><div><p class="eyebrow">${t("exploreEyebrow")}</p><h1>${t("exploreTitle")}</h1><p class="lead">${t("exploreIntro")}</p></div><div class="quick-paths"><button class="text-button" data-action="unavailable" data-kind="withdrawal">${t("pathWithdraw")}</button><button class="text-button" data-action="unavailable" data-kind="invoice">${t("pathInvoice")}</button></div></div><section class="collections" aria-label="${escapeHTML(t("collectionsTitle"))}"><strong>${t("collectionsTitle")}</strong>${collections}</section><section class="catalog-tools" aria-label="${escapeHTML(t("exploreTitle"))}"><label for="fund-search">${t("searchFunds")}</label><input id="fund-search" type="search" value="${escapeHTML(state.investment.query)}" placeholder="${escapeHTML(t("searchPlaceholder"))}" data-action="search-funds"><label for="fund-category">${t("categoryFilter")}</label><select id="fund-category" data-action="filter-funds"><option value="all" ${state.investment.category === "all" ? "selected" : ""}>${t("allCategories")}</option><option value="equity" ${state.investment.category === "equity" ? "selected" : ""}>${t("equityCategory")}</option><option value="debt" ${state.investment.category === "debt" ? "selected" : ""}>${t("debtCategory")}</option><option value="hybrid" ${state.investment.category === "hybrid" ? "selected" : ""}>${t("hybridCategory")}</option></select><button class="text-button" data-action="clear-filters">${t("clearFilters")}</button></section><div class="fund-grid">${funds.length ? funds.map(renderFundCard).join("") : `<div class="empty-state" role="status"><p>${t("noFunds")}</p><button class="button secondary" data-action="clear-filters">${t("clearFilters")}</button></div>`}</div></section>`;
}
function renderFundDetail() {
  const fund = selectedFund();
  if (!fund) return renderExplore();
  const index = catalog.findIndex(item => item.id === fund.id);
  return `<section class="investment-page"><button class="text-button" data-action="back-explore">← ${t("backExplore")}</button><article class="detail-panel"><p class="eyebrow">${t("detailsTitle")} · ${t("fundLabel")}</p><p class="direct-plan-note">${t("directPlanExplanation")}</p><h1>${escapeHTML(t("funds")[index])}</h1><p class="lead">${escapeHTML(t("fundDescriptions")[index])}</p><div class="fund-meta"><span>${escapeHTML(categoryLabel(fund.category))}</span><span>${escapeHTML(t("riskLabel", state.lang, { risk: t(fund.risk) }))}</span></div><h2>${t("whoItMaySuit")}</h2><p>${escapeHTML(t("fundSuitability")[index])}</p><p class="freshness">${t("freshnessLabel")}</p><div class="status-box unavailable"><strong>${t("notAdvice")}</strong><p>${t("expensesUnavailable")}</p><p>${t("staleNotice")}</p></div><button class="button primary" data-action="order-review">${t("reviewOrder")}</button></article></section>`;
}
function demoStatus(status) { return t(({ "not-started": "notStarted", pending: "demoPending", failed: "demoFailed", completed: "demoCompleted" })[status]); }
function renderOrderReview() {
  const fund = selectedFund();
  const index = catalog.findIndex(item => item.id === fund?.id);
  if (!fund) return `<section class="investment-page"><p>${t("selectFund")}</p><button class="button secondary" data-action="back-explore">${t("backExplore")}</button></section>`;
  const amount = Number(state.investment.amount).toLocaleString(state.lang === "hi" ? "hi-IN" : "en-IN");
  const amountSummary = state.investment.frequency === "sip" ? "sipAmountSummary" : "oneTimeAmountSummary";
  return `<section class="investment-page"><button class="text-button" data-action="back-fund-detail">← ${t("backToFundDetails")}</button><div class="review-layout"><article class="detail-panel"><p class="eyebrow">${t("reviewTitle")}</p><h1>${t("reviewTitle")}</h1><h2>${t("selectedFund")}</h2><p>${escapeHTML(t("funds")[index])} · ${t("fundLabel")}</p><p class="fund-meta"><span>${escapeHTML(categoryLabel(fund.category))}</span><span>${escapeHTML(t("riskLabel", state.lang, { risk: t(fund.risk) }))}</span></p><label for="order-frequency">${t("orderType")}</label><select id="order-frequency" data-action="order-frequency"><option value="one-time" ${state.investment.frequency === "one-time" ? "selected" : ""}>${t("oneTime")}</option><option value="sip" ${state.investment.frequency === "sip" ? "selected" : ""}>${t("sip")}</option></select>${state.investment.frequency === "sip" ? `<div class="status-box unavailable"><strong>${t("sipTermsUnavailable")}</strong><p>${t("sipTermsDetail")}</p><p>${t("noRecurringInstruction")}</p></div>` : ""}<label for="order-amount">${t("amountLabel")}</label><select id="order-amount" data-action="order-amount"><option value="500" ${state.investment.amount === "500" ? "selected" : ""}>₹500</option><option value="1000" ${state.investment.amount === "1000" ? "selected" : ""}>₹1,000</option><option value="2500" ${state.investment.amount === "2500" ? "selected" : ""}>₹2,500</option></select><p class="order-summary">${t(amountSummary, state.lang, { amount })}</p><p class="demo-disclaimer">${t("reviewDisclosure")}</p><div class="status-box unavailable"><strong>${t("confirmBlocked")}</strong><p>${t("missingRequirements")}</p><p>${t("advisoryFeeUnavailable")}</p><p>${t("fundChargesUnavailable")}</p></div><button class="button primary" ${isInvestmentCommitmentAvailable() ? "" : "disabled aria-disabled=\"true\""}>${t("confirmBlocked")}</button></article><aside class="detail-panel"><p class="eyebrow">${t("simulateStatuses")}</p><button class="text-button" data-action="reset-demo-status">${t("resetSampleStatuses")}</button><h2>${t("sampleOrderStatus")}</h2><p class="state-pill">${demoStatus(state.investment.orderStatus)}</p>${renderStateButtons("order")}<h2>${t("samplePaymentStatus")}</h2><p class="state-pill">${demoStatus(state.investment.paymentStatus)}</p>${renderStateButtons("payment")}<p class="status-separation">${t("statusSeparation")}</p></aside></div></section>`;
}
function renderUnavailable() {
  const kind = state.investment.unavailableKind;
  return `<section class="investment-page"><button class="text-button" data-action="back-explore">← ${t("backExplore")}</button><div class="detail-panel"><p class="eyebrow">${t("unavailablePath")}</p><h1>${t(kind === "invoice" ? "pathInvoice" : "pathWithdraw")}</h1><div class="status-box unavailable"><strong>${t("unavailablePath")}</strong><p>${t(kind === "invoice" ? "invoiceUnavailable" : "withdrawalUnavailable")}</p></div></div></section>`;
}

function render() {
  document.documentElement.lang = state.lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelector(".lang-toggle").textContent = state.lang === "en" ? "हिन्दी" : "English";
  document.querySelectorAll(".app-nav [data-action]").forEach(button => button.setAttribute("aria-current", button.dataset.screen === state.screen || (button.dataset.screen === "explore" && ["explore", "fund-detail", "order-review", "unavailable"].includes(state.screen)) ? "page" : "false"));
  if (state.screen === "welcome") app.innerHTML = renderWelcome();
  else if (state.screen === "step") app.innerHTML = renderStep();
  else if (state.screen === "status") app.innerHTML = renderStatus();
  else if (state.screen === "explore") app.innerHTML = renderExplore();
  else if (state.screen === "fund-detail") app.innerHTML = renderFundDetail();
  else if (state.screen === "order-review") app.innerHTML = renderOrderReview();
  else if (state.screen === "unavailable") app.innerHTML = renderUnavailable();
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
  if (action === "navigate") { state.screen = button.dataset.screen; save(); render(); }
  if (action === "fund-detail") { if (button.dataset.fund) state.investment.selectedFund = button.dataset.fund; state.screen = state.investment.selectedFund ? "fund-detail" : "explore"; save(); render(); }
  if (action === "order-review") { state.screen = "order-review"; save(); render(); }
  if (action === "back-explore") { state.screen = "explore"; save(); render(); }
  if (action === "back-fund-detail") { state.screen = "fund-detail"; save(); render(); }
  if (action === "unavailable") { state.investment.unavailableKind = button.dataset.kind; state.screen = "unavailable"; save(); render(); }
  if (action === "clear-filters") { state.investment.query = ""; state.investment.category = "all"; save(); render(); }
  if (action === "collection") { state.investment.category = button.dataset.category; save(); render(); }
  if (action === "demo-status") { state.investment = transitionInvestmentDemo(state.investment, button.dataset.kind, button.dataset.status); save(); render(); }
  if (action === "reset-demo-status") { state.investment = transitionInvestmentDemo(state.investment, "all", "not-started"); save(); render(); }
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

let searchComposing = false;
function refreshSearch(input) {
  state.investment.query = input.value.slice(0, 80);
  save();
  const cursor = input.selectionStart;
  const selectionEnd = input.selectionEnd;
  render();
  const search = document.querySelector("#fund-search");
  search?.focus({ preventScroll: true });
  search?.setSelectionRange(cursor, selectionEnd);
}
document.addEventListener("compositionstart", event => {
  if (event.target.matches?.('[data-action="search-funds"]')) searchComposing = true;
});
document.addEventListener("compositionend", event => {
  if (!event.target.matches?.('[data-action="search-funds"]')) return;
  searchComposing = false;
  refreshSearch(event.target);
});
document.addEventListener("input", event => {
  if (!event.target.matches('[data-action="search-funds"]')) return;
  state.investment.query = event.target.value.slice(0, 80);
  if (searchComposing || event.isComposing) { save(); return; }
  refreshSearch(event.target);
});
document.addEventListener("change", event => {
  const action = event.target.dataset.action;
  if (action === "filter-funds") { state.investment.category = event.target.value; save(); render(); }
  if (action === "order-frequency") { state.investment.frequency = event.target.value; save(); render(); document.querySelector("#order-frequency")?.focus({ preventScroll: true }); }
  if (action === "order-amount") { state.investment.amount = event.target.value; save(); }
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
