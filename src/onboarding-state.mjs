const PROVIDER_STAGES = new Set([1, 2, 3, 4]);
const OPEN_PROVIDER_STATES = new Set(["pending", "rejected", "unavailable"]);
const PROVIDER_OUTCOMES = new Set(["simulated", "pending", "rejected", "unavailable"]);

const isRecord = value => value !== null && typeof value === "object" && !Array.isArray(value);

export function createDemoState() {
  return { mode: "demo", lang: "en", screen: "welcome", step: 0, states: {}, visited: {}, privacy: "", investment: createInvestmentDemoState() };
}

const ORDER_STATES = new Set(["not-started", "pending", "failed", "completed"]);
const PAYMENT_STATES = new Set(["not-started", "pending", "failed", "completed"]);
const FUND_IDS = new Set(["saffron-index", "monsoon-bond", "pebble-hybrid", "terracotta-equity"]);
const SCREENS = new Set(["welcome", "step", "status", "completion", "explore", "fund-detail", "order-review", "unavailable"]);

export function createInvestmentDemoState() {
  return { query: "", category: "all", selectedFund: "", frequency: "one-time", amount: "1000", orderStatus: "not-started", paymentStatus: "not-started" };
}

export function normalizeInvestmentDemoState(value) {
  const input = isRecord(value) ? value : {};
  return {
    ...createInvestmentDemoState(),
    query: typeof input.query === "string" ? input.query.slice(0, 80) : "",
    category: ["all", "equity", "debt", "hybrid"].includes(input.category) ? input.category : "all",
    selectedFund: FUND_IDS.has(input.selectedFund) ? input.selectedFund : "",
    unavailableKind: ["invoice", "withdrawal"].includes(input.unavailableKind) ? input.unavailableKind : "withdrawal",
    frequency: ["one-time", "sip"].includes(input.frequency) ? input.frequency : "one-time",
    amount: ["500", "1000", "2500"].includes(String(input.amount)) ? String(input.amount) : "1000",
    orderStatus: ORDER_STATES.has(input.orderStatus) ? input.orderStatus : "not-started",
    paymentStatus: PAYMENT_STATES.has(input.paymentStatus) ? input.paymentStatus : "not-started"
  };
}

export function transitionInvestmentDemo(state, type, outcome) {
  const current = normalizeInvestmentDemoState(state);
  if (type === "all") {
    current.orderStatus = "not-started";
    current.paymentStatus = "not-started";
    return current;
  }
  if (type === "order" && ORDER_STATES.has(outcome)) {
    current.orderStatus = outcome === "completed" && current.paymentStatus !== "completed" ? "pending" : outcome;
  }
  if (type === "payment" && PAYMENT_STATES.has(outcome)) {
    current.paymentStatus = outcome;
    if (outcome !== "completed" && current.orderStatus === "completed") current.orderStatus = "pending";
  }
  return current;
}

export function filterDemoCatalogue(funds, query = "", category = "all", categoryLabels = {}) {
  const needle = String(query).trim().toLocaleLowerCase();
  return funds.filter(fund => (category === "all" || fund.category === category) && (!needle || `${fund.name} ${fund.description} ${categoryLabels[fund.category] ?? fund.category}`.toLocaleLowerCase().includes(needle)));
}

export function isInvestmentCommitmentAvailable() { return false; }

export function normalizeDemoState(saved) {
  if (!isRecord(saved) || !["en", "hi"].includes(saved.lang)) return createDemoState();
  return {
    ...createDemoState(),
    ...saved,
    mode: "demo",
    screen: SCREENS.has(saved.screen) ? saved.screen : "welcome",
    states: isRecord(saved.states) ? saved.states : {},
    visited: isRecord(saved.visited) ? saved.visited : {},
    investment: normalizeInvestmentDemoState(saved.investment)
  };
}

export const isProviderStage = index => PROVIDER_STAGES.has(index);

export function isStageReviewed(state, index) {
  if (isProviderStage(index) && OPEN_PROVIDER_STATES.has(state.states?.[index])) return false;
  return Boolean(state.visited?.[index]) || ["simulated", "reviewed"].includes(state.states?.[index]);
}

export function nextIncompleteStage(state, totalStages) {
  return Array.from({ length: totalStages }, (_, index) => index).find(index => !isStageReviewed(state, index)) ?? -1;
}

export function recordProviderOutcome(state, index, outcome) {
  if (!isProviderStage(index) || !PROVIDER_OUTCOMES.has(outcome)) return state;
  return {
    ...state,
    states: { ...state.states, [index]: outcome },
    visited: { ...state.visited, [index]: true }
  };
}

export function retryDemoStage(state, index) {
  const states = { ...state.states };
  const visited = { ...state.visited };
  delete states[index];
  delete visited[index];
  return { ...state, states, visited };
}

export function markDemoStageReviewed(state, index) {
  const states = { ...state.states };
  const visited = { ...state.visited, [index]: true };
  if (index >= 5) states[index] = "unavailable";
  else states[index] ||= "reviewed";
  return { ...state, states, visited };
}

export function isAuthoritativelyReady(state) {
  if (state.mode !== "live") return false;
  const requiredEvidence = [
    [0, "verified"], [1, "verified"], [2, "verified"], [3, "verified"], [4, "verified"],
    [5, "signed"], [6, "captured"], [7, "scored"], [8, "suitable"]
  ];
  return requiredEvidence.every(([index, evidence]) => state.states?.[index] === evidence);
}
