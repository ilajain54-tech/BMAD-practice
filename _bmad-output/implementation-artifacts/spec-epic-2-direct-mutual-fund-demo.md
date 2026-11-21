---
title: 'Epic 2: Direct Mutual Fund Discovery and Order Demo'
type: 'feature'
created: '2026-11-21'
baseline_commit: 'c51e581b1ea19ef7a1b4070f39a9605e1153c0c0'
status: 'done'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/implementation-artifacts/epic-2-context.md'
  - '{project-root}/_bmad-output/planning-artifacts/epics.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** First-time investors need a plain-language way to explore direct mutual funds and understand the steps, costs, risks, and statuses involved before investing. The current local demo ends at onboarding and has no investment discovery or order flows.

**Approach:** Extend the Hindi/English local demo with a fictional fund catalogue, search/filter/detail views, and an order journey that exposes suitability, fees, payment, and execution states without contacting providers or handling real money.

**Decision:** The local demo may advance fictional one-time and SIP order/payment flows through clearly labeled pending, failed, and completed sample outcomes. Actual orders, fees, suitability decisions, and provider actions remain unavailable.

## Boundaries & Constraints

**Always:** Mark every fund and transaction value as fictional/illustrative; distinguish direct-plan identity, risk, stale/unavailable content, order status, and payment status; preserve the existing not-ready gate; keep language selection, keyboard access, responsive layout, and local-only sample persistence.

**Never:** Use real funds, market data, performance claims, recommendations, fees, tax values, investment suitability rules, provider connections, mandates, payments, orders, withdrawals, invoices, or customer data. Missing approval/configuration must remain visible and must not be represented as current or authoritative.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Browse catalogue | Search/filter finds no fictional fund | Show a localized empty state and clear/reset path | Keep filters visible and recoverable |
| Order review | Profile, fee schedule, or required disclosure is unavailable | Explain which required information is unavailable; do not mark a real order ready | Keep real commitment blocked |
| Sample transaction status | User selects a demo outcome for an order/payment | Show clearly simulated order and payment states separately | Pending/failure never appears paid or executed |

</frozen-after-approval>

## Code Map

- `src/app.js` — current single-page renderer, local state persistence, delegated actions, status announcements, and existing onboarding screens. Extend its navigation/state handling without weakening Epic 1 gates.
- `src/onboarding-state.mjs` — normalizes demo state and enforces simulated provider outcomes/readiness. Add separate Epic 2 demo-state helpers; never turn sample outcomes into authoritative evidence.
- `src/i18n.js` — English/Hindi message dictionaries and interpolation helper; add matched copy for all Epic 2 views and states.
- `styles.css` — responsive design tokens, cards, form controls, badges, dark mode, focus styles, and reduced-motion rules. Reuse these patterns for catalogue, detail, and review screens.
- `index.html` — app shell, global demo banner, help/language controls, and module entry point; add navigation only if needed for Explore/Portfolio access.
- `_bmad-output/implementation-artifacts/epic-2-context.md` — distilled requirements, cross-story constraints, and user-facing patterns.
- `_bmad-output/planning-artifacts/epics.md` — Stories 2.1–2.12 and acceptance criteria; no architecture document or approved fund/fee/provider policy exists.

## Tasks & Acceptance

**Execution:**
- [x] `src/onboarding-state.mjs` — add validated fictional catalogue/order state and safe transition helpers; invalid or unknown states must normalize safely.
- [x] `src/app.js` — implement Explore collections, search and filters, fund details, visibly unavailable/illustrative suitability and fee gates, one-time/SIP review, separate sample order/payment statuses, and unavailable withdrawal/invoice paths.
- [x] `src/i18n.js` — add equivalent English and Hindi copy for discovery, review, validation, and transaction states.
- [x] `styles.css` and `index.html` — integrate navigation and accessible responsive catalogue/order components.
- [x] `tests/` — cover empty search/filter results, policy-gated commitment, and separation of payment/order demo statuses.

**Acceptance Criteria:**
- Given the local demo is open, when a user browses, searches, or filters the catalogue, then fictional direct-plan cards and localized empty states are clear and recoverable.
- Given a fund detail is opened, when required data is illustrative or unavailable, then its source/freshness and risk/approval limits are explicit and it is not presented as advice.
- Given a user reviews a one-time or SIP order, when suitability, fee, or disclosure policy is unavailable, then no real commitment is enabled and the missing requirement is explained.
- Given a demo transaction status is selected, when the order/payment state changes, then each is visibly simulated and represented separately; pending or failed payment never appears paid.
- Given withdrawal or invoice policies are unavailable, when those paths are opened, then the app explains the limitation without fabricating balances, bills, or completed requests.

## Implementation Notes

Epic 2 depends on approved fund metadata and freshness rules, suitability/profile rules, advisory fee schedule and tax handling, disclosures, execution/payment rails, order limits, redemption rules, invoice fields, and retention/access controls. Keep these dependencies visible; the prototype may demonstrate interaction only within the user-approved simulation boundary. Epic 3–13 remain separate deferred work.

Implemented a deterministic four-item fictional catalogue. Catalogue values, risk descriptions, sample amounts, and transaction statuses are local demo fixtures. Order review explicitly blocks actual commitment while sample status controls remain available for walkthroughs. Withdrawal and invoice screens explain their policy dependencies without creating records.

Review follow-up adds plain-language descriptions to the fictional category groupings, explains the direct-plan label, distinguishes a one-time amount from a SIP installment, adds a reset for both simulated transaction statuses, and aligns search help with searchable fields. Collection copy remains explicitly illustrative and does not claim approved screening or ranking rules.

## Spec Change Log

## Review Triage Log

| Finding | Verdict and evidence | Route |
|---|---|---|
| Collections lacked distinct curated descriptions | **medium** — `renderExplore` exposed category buttons only; Story 2.1 requires plain-language collection names and descriptions. Added localized descriptions that state these are illustrative groupings, not screened or ranked. | patch |
| Direct-plan label was unexplained | **medium** — the catalogue identified a direct plan but gave no plain-language explanation for first-time investors. Added a cautious definition and made clear the demo label is fictional. | patch |
| Order review lacked an amount summary | **false** — the selected order type and selected amount were visible in labeled controls on the review screen before the disabled commitment action; no missing value was found. | reject |
| SIP amount cadence was unclear | **medium** — the amount field used a generic label while schedule details were unavailable, so the selected value could be mistaken for a total. Added an explicit illustrative installment summary and retained the unavailable-schedule notice. | patch |
| Sample status could not be reset | **low** — the UI had no control to return a saved order or payment state to `not-started`. Added reset controls for the two independent sample states. | patch |
| Order/payment states lacked announcement semantics | **false** — the stable `#app` main element already has `aria-live="polite"`, and `render()` updates then focuses it; state changes therefore have an announcement region. | reject |
| Search placeholder omitted searchable descriptions | **low** — `filterDemoCatalogue` searches names, descriptions, and category labels while the placeholder listed only names and categories. Updated the placeholder. | patch |
| Tests did not cover rendered flows, keyboard use, or language parity | **low** — this is a coverage limitation rather than a demonstrated user-facing defect; expanding to rendered-flow and keyboard test infrastructure is beyond a direct correction, so it is rejected under the review routing rule. | reject |

## Design Notes

Keep exploration browseable before sign-in, but preserve the existing onboarding status as not ready. Use clear text labels and separate order from payment status; color alone must not carry meaning. Unknown or stale values should be omitted or explicitly unavailable, never filled with plausible-looking current facts.

## Verification

**Commands:**
- `node --check src/app.js; node --check src/i18n.js; node --check src/onboarding-state.mjs` — passed.
- `node --test tests/onboarding-state.test.mjs tests/investment-demo.test.mjs` — passed, 7 tests.
- `git diff --cached --check` — passed; Git emitted expected LF-to-CRLF working-copy warnings.

**Manual checks:**
- Browser, bilingual visual, and narrow-screen keyboard walkthroughs were not performed. The browser-control host is unavailable and the local server remains stopped by user request. Static inspection confirms explicit fictional data labels, unavailable policy/fee/suitability notices, disabled real commitment, and separate order/payment state displays.
- The command results above predate the review follow-up changes; no tests or browser checks were run after those changes in this turn.
