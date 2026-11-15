# Sprint Change Proposal — Investing Platform UX Alignment

**Date:** 2026-11-15  
**Trigger:** User requested that the UX strategy be corrected against the current PRD and that UX design be built.  
**Mode:** Incremental, as interpreted from the user's “+” response.  
**Scope:** UX strategy and UX contract creation. The PRD and epic/story backlog remain unchanged by this proposal.

## 1. Issue Summary

The strategy is directionally consistent with the PRD, but several statements read like settled requirements when they are design hypotheses, and some release, legal, data, and service details are unresolved in the PRD. Leaving these indistinguishable could make downstream design and implementation treat unapproved fee wording, market messaging, family features, timing claims, or service promises as committed product behavior.

Evidence: PRD v1.1 Sections 2, 5, 10–13, 16–17; strategy Sections 5–17; epic/story backlog Epics 1–13. The PRD expressly leaves fee design, RIA counsel confirmation, execution rails, market-fall thresholds, support service levels, and some product structures open. No architecture or existing UX contract was found in planning artifacts.

No implementation-triggering story was supplied; this is a planning correction before design/build, not a defect discovered during an active sprint. Checklist 1.1 is N/A. Checklist 1.2–1.3 are complete using the written-artifact mismatch as evidence.

## 2. Impact Analysis

### Epic and story impact

All 13 epics can continue under their current scope; no epic is made obsolete by the UX correction. UX contract alignment is concentrated in:

- **Epic 1 (Stories 1.1–1.14):** onboarding states, bilingual content, secure resume, suitability, and accessibility.
- **Epic 2 (Stories 2.1–2.12):** fund discovery, fee clarity, pre-commit review, payment hand-offs, withdrawals.
- **Epic 3 (Stories 3.1–3.9):** goal projections, SIP recovery/flexibility, and market-fall content.
- **Epic 4 (Stories 4.1–4.8):** data freshness, reporting and notifications.
- **Epic 5 (Stories 5.1–5.5):** support availability, escalation and assisted mode.
- **Epic 6:** operations, compliance and security ownership for statuses and records.
- **Epics 7–13:** preserve release gates and authorized-entity/partner boundaries in future modules.

No story text was changed in this UX correction. Existing story IDs are used as trace links in the UX contracts.

### Artifact conflicts and adjustments

| Artifact | Before → after | Rationale |
|---|---|---|
| UX strategy §3.2 | Android-only description → Android-first with later iOS/web sequence and test-width qualification | Match PRD §13. |
| UX strategy §§5–6 | Signup bypass and navigation as settled rules → browse-before-registration and IA labeled hypotheses/design targets | PRD does not commit to anonymous account-free investing or the exact tab structure. |
| UX strategy §§7–8 | Three funds, exact fee copy, RIA badge and reassurance used as firm patterns → suitability-bound candidate, approved fee/identity copy only, accurate status/data-based messaging | Fee design, legal display, suitability and content are unresolved or regulated. |
| UX strategy §§7, 9, 11 | Family sharing, audio, WCAG 2.2 AA appear as launch decisions → family and audio phase-gated to v1.0; WCAG 2.2 AA treated as proposed target over PRD WCAG AA baseline | Align MVP boundary and distinguish aspiration from approved requirement. |
| UX strategy §15 | “v1.0 planning” after month 10 → PRD release windows v1.0, v1.5 and v2.0 with feature groups | Reduce roadmap ambiguity and keep US stocks in v2.0 per PRD §17. |
| UX contracts | No `DESIGN.md` / `EXPERIENCE.md` → create linked, draft contracts with traceable flows, component/state behavior, release gates and open questions | Make UX actionable for architecture and story implementation without inventing unresolved policy. |

### Other impacts

- **PRD:** no change proposed; current vision and FR/NFR scope remain valid.
- **Architecture:** no architecture document exists. Architecture must specify localization, provider hand-offs/status reconciliation, data freshness, accessibility, and theme support before implementation readiness.
- **Technical/operations:** no code or infrastructure change in this planning correction. Support hours/SLA, market data source/trigger, provider capability, analytics, and compliance approval remain dependencies.
- **Release risk:** backlog Epic 13 currently labels US stocks “v1.5 or later,” while PRD §17 schedules US stocks for v2.0. Recommend correcting the Epic 13 release label during backlog reconciliation; this proposal flags but does not edit epics.md.

## 3. Recommended Approach

**Selected: Direct adjustment (UX artifacts only), with backlog clarification queued.**

Effort: Low-to-medium for document alignment; medium for downstream UX research and architecture contract. Risk: Low for the document correction; high if provisional pricing, advice, market context, or RIA copy is implemented without approval. Timeline: no change to stated PRD roadmap; open dependencies could block production-ready hi-fi and build.

This preserves scope and provides a useful draft now. Rollback is not applicable because no implementation has started. MVP review is not indicated because the PRD goals remain achievable and no scope reduction is evidenced.

## 4. Detailed Change Proposals

### UX strategy

1. **§3.2 platform statement**
   - OLD: “mid-range Android, small screens (about 360dp wide), limited RAM and storage.”
   - NEW: “Android first, including mid-range and lower-memory devices; use about 360dp as a layout test case, not a minimum-device requirement. iOS and web follow Android in the PRD sequence.”
   - Why: aligns to PRD platform roadmap and avoids turning a test width into a device constraint.

2. **§5 signup and §6 navigation**
   - OLD: browse without an account, exact four-tab navigation and maximum three taps stated as rules.
   - NEW: mark browsing-before-signup as a hypothesis, four tabs as a proposed IA, and three taps as a usability target that cannot override required steps.
   - Why: PRD names platform screens and a three-tap principle but does not require anonymous browsing or the exact navigation.

3. **§7.2 first SIP**
   - OLD: exactly three curated funds and illustrative yearly-fee wording.
   - NEW: a short suitable set; three is a test starting point. Show actual approved fee basis only, with applicable charges and risks; no illustrative amount in production.
   - Why: selection must honor suitability; fee basis/taxes/counsel approval remain open.

4. **§7.4 and §8 market/trust messaging**
   - OLD: sample “goal is 11 years away” reassurance and fixed SEBI registration display.
   - NEW: use verified current data and the actual linked goal horizon; no recovery assurance; show correct entity/registration/grievance details only as approved and only when applicable.
   - Why: avoid inaccurate personalization or an untrue regulatory claim.

5. **§7.5, §7.6, §11, §15 release/operations**
   - OLD: shared goal/helper and WCAG 2.2 AA / response promises presented without phase or approval qualifiers; roadmap compressed to v1.0.
   - NEW: family access is v1.0; WCAG AA is PRD baseline with WCAG 2.2 AA a proposed target; show SLA only after operations approves it; map the roadmap to PRD v1.0, v1.5, v2.0.
   - Why: protect MVP release boundaries and distinguish approved requirements from candidates.

### UX contracts

- Create `DESIGN.md` as a draft visual contract, with provisional, contrast-aware light/dark token candidates explicitly requiring user/brand/accessibility approval.
- Create `EXPERIENCE.md` with the PRD platform and release boundaries, screen IA, component behavior, state patterns, accessibility behavior, seven key journeys with named protagonists/failure paths, and open questions.
- Use existing story IDs as trace references; do not duplicate the PRD or change acceptance criteria in this pass.

## 5. Implementation Handoff

**Classification: Moderate planning impact.** UX contracts are reviewable draft inputs, not a production-ready visual approval. Handoff:

- **Product/UX:** resolve brand, pricing, anonymous browsing, numeral convention, support scope and research findings; decide whether to accept provisional tokens.
- **Counsel/compliance:** confirm RIA status/display, fee and tax wording, disclosures, suitability rules, market-fall language/trigger, privacy/retention and partner boundaries.
- **Architecture:** create the architecture artifact before implementation readiness; define provider hand-off/reconciliation, localization, accessibility, data freshness and theme behavior.
- **Product Owner:** reconcile Epic 13 release label with PRD v2.0 and decide if any UX-specific stories are needed after the contracts are approved.
- **Developer:** implement only against approved tokens, flows, statuses and legal content. Success criteria: every MVP flow has correct states and story trace links; no unapproved copy/fees/registration claims; Hindi and English parity and accessibility checks pass.

## Checklist Record

- §1 Trigger/context: 1.1 [N/A — pre-sprint]; 1.2 [x]; 1.3 [x — document evidence above].
- §2 Epic impact: 2.1–2.5 [x — no scope/order change; UX trace coverage across 13 epics; Epic 13 release mismatch flagged].
- §3 Artifact impacts: 3.1 [x — no PRD conflict requiring edit]; 3.2 [N/A — no architecture file]; 3.3 [x]; 3.4 [x — ops/support/telemetry dependencies recorded].
- §4 Path: 4.1 [x — viable, selected]; 4.2 [N/A — no completed implementation to roll back]; 4.3 [x — MVP remains achievable]; 4.4 [x].
- §5 proposal: 5.1–5.5 [x].
- §6 review/handoff: 6.1–6.2 [x]; 6.3 [authorized by user's direct request to correct/build UX; no separate story-level approval requested]; 6.4 [N/A — no epic/story records changed]; 6.5 [x — recipients and success criteria above].

## Decision / approval record

The user directly authorized correcting the strategy and building UX design. This task authorization is recorded as approval to produce the UX artifacts. Open policy and brand decisions remain explicitly unresolved; they are not inferred from the authorization.
