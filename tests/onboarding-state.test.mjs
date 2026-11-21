import assert from "node:assert/strict";
import test from "node:test";
import {
  createDemoState,
  isAuthoritativelyReady,
  isStageReviewed,
  markDemoStageReviewed,
  nextIncompleteStage,
  normalizeDemoState,
  recordProviderOutcome,
  retryDemoStage
} from "../src/onboarding-state.mjs";

test("resume selects the earliest incomplete stage instead of a later saved stage", () => {
  const saved = normalizeDemoState({
    lang: "en",
    screen: "step",
    step: 7,
    visited: { 0: true, 1: true, 2: true, 3: true },
    states: { 1: "simulated", 3: "rejected" }
  });

  assert.equal(nextIncompleteStage(saved, 10), 3);
});

test("pending, rejected, and unavailable provider outcomes remain incomplete until retry", () => {
  for (const outcome of ["pending", "rejected", "unavailable"]) {
    const initial = markDemoStageReviewed(createDemoState(), 0);
    const failed = recordProviderOutcome(initial, 1, outcome);
    assert.equal(failed.states[1], outcome);
    assert.equal(isStageReviewed(failed, 1), false);
    assert.equal(nextIncompleteStage(failed, 10), 1);

    const retried = retryDemoStage(failed, 1);
    assert.equal(retried.states[1], undefined);
    assert.equal(retried.visited[1], undefined);
    assert.equal(isStageReviewed(retried, 1), false);
  }
});

test("missing approved content stays unavailable and cannot establish investment readiness", () => {
  let state = createDemoState();
  for (let index = 0; index < 10; index += 1) state = markDemoStageReviewed(state, index);

  assert.equal(state.states[5], "unavailable");
  assert.equal(state.states[7], "unavailable");
  assert.equal(state.states[8], "unavailable");
  assert.equal(isAuthoritativelyReady(state), false);
});
