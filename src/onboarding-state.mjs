const PROVIDER_STAGES = new Set([1, 2, 3, 4]);
const OPEN_PROVIDER_STATES = new Set(["pending", "rejected", "unavailable"]);
const PROVIDER_OUTCOMES = new Set(["simulated", "pending", "rejected", "unavailable"]);

const isRecord = value => value !== null && typeof value === "object" && !Array.isArray(value);

export function createDemoState() {
  return { mode: "demo", lang: "en", screen: "welcome", step: 0, states: {}, visited: {}, privacy: "" };
}

export function normalizeDemoState(saved) {
  if (!isRecord(saved) || !["en", "hi"].includes(saved.lang)) return createDemoState();
  return {
    ...createDemoState(),
    ...saved,
    mode: "demo",
    screen: ["welcome", "step", "status", "completion"].includes(saved.screen) ? saved.screen : "welcome",
    states: isRecord(saved.states) ? saved.states : {},
    visited: isRecord(saved.visited) ? saved.visited : {}
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
