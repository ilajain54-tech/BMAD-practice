import assert from "node:assert/strict";
import test from "node:test";
import {
  createInvestmentDemoState,
  filterDemoCatalogue,
  isInvestmentCommitmentAvailable,
  normalizeDemoState,
  normalizeInvestmentDemoState,
  transitionInvestmentDemo
} from "../src/onboarding-state.mjs";

const sampleFunds = [
  { name: "Saffron Index Illustration", category: "equity", description: "fictional index" },
  { name: "Monsoon Bond Illustration", category: "debt", description: "fictional bond" }
];

test("empty search and filter results remain empty and filters can be cleared", () => {
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "no such sample", "all"), []);
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "", "hybrid"), []);
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "", "all"), sampleFunds);
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "saffron", "equity"), [sampleFunds[0]]);
});

test("localized category labels are searchable while category filters use stable IDs", () => {
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "इक्विटी", "all", { equity: "इक्विटी", debt: "डेट" }), [sampleFunds[0]]);
  assert.deepEqual(filterDemoCatalogue(sampleFunds, "डेट", "equity", { equity: "इक्विटी", debt: "डेट" }), []);
});

test("investment demo state accepts only known fictional identifiers and values", () => {
  const state = normalizeInvestmentDemoState({ selectedFund: "real-fund", amount: "999999", orderStatus: "executed", category: "unsupported" });
  assert.equal(state.selectedFund, "");
  assert.equal(state.amount, "1000");
  assert.equal(state.orderStatus, "not-started");
  assert.equal(state.category, "all");
  assert.equal(normalizeDemoState({ lang: "en", screen: "untrusted" }).screen, "welcome");
});

test("real commitment stays blocked when profile, fee, and disclosure policy are unavailable", () => {
  assert.equal(isInvestmentCommitmentAvailable(), false);
});

test("order and payment outcomes stay separate and failed or pending payment cannot show completed order", () => {
  let state = createInvestmentDemoState();
  state = transitionInvestmentDemo(state, "order", "completed");
  assert.equal(state.orderStatus, "pending");
  assert.equal(state.paymentStatus, "not-started");
  state = transitionInvestmentDemo(state, "payment", "pending");
  assert.equal(state.paymentStatus, "pending");
  assert.equal(state.orderStatus, "pending");
  state = transitionInvestmentDemo(state, "payment", "failed");
  assert.equal(state.paymentStatus, "failed");
  state = transitionInvestmentDemo(state, "payment", "completed");
  assert.equal(state.paymentStatus, "completed");
  assert.equal(state.orderStatus, "pending");
  state = transitionInvestmentDemo(state, "order", "completed");
  assert.equal(state.orderStatus, "completed");
});
