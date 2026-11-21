---
title: 'Epic 1: Bilingual Onboarding, KYC, and Suitability'
type: 'feature'
created: '2026-11-21'
baseline_commit: '83bffd32ca1f1d3fccd4ea0d6acda284c81303ae'
status: 'done'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/Input/PRD_Investing_Platform.md'
  - '{project-root}/Input/UX_Strategy_Investing_Platform.md'
  - '{project-root}/_bmad-output/planning-artifacts/epics.md'
  - '{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/DESIGN.md'
  - '{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/EXPERIENCE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** First-time investors need a clear, safe way to understand the service, complete onboarding, and learn their suitability in Hindi or English. The repository has product and UX plans but no investing application code.

**Approach:** Build Epic 1 (Stories 1.1–1.14) as an Android-first local interactive demo. Use simulated verification and fictional data so the onboarding experience is reviewable without presenting it as a live investing service.

**Decision:** The user selected a local demo with simulated verification, not production KYC integrations.

## Boundaries & Constraints

**Always:** Keep Hindi and English equivalent; make pending, rejected, and completed states distinct; use fictional data only; make resume and help paths clear; label the experience as a demo and not for real investing.

**Never:** Collect real personal or financial information; call KYC or OTP providers; present simulated KYC as real verification; imply investment readiness; invent legal advice, approved disclosures, an RIA registration, or production risk scoring. Epics 2–13 are deferred.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Resume onboarding | Authenticated user with saved step states | Continue at the next incomplete, still-valid step | Show retry if progress cannot load; never mark an incomplete check complete |
| Verification failure | Provider rejects, times out, or returns indeterminate status | Preserve prior completed steps and show pending/needs-attention with a permitted next step | No false success; explain known reason and offer retry/help |
| Missing approved content | Translation, agreement, disclosure, or policy is unavailable | Do not present invented or incomplete legal/suitability content as approved | Block the dependent action and explain what is unavailable |

</frozen-after-approval>

## Code Map

- `README.md` — confirms this is a planning/design workspace with no production application, and says architecture and regulatory/vendor decisions precede implementation readiness.
- `Input/PRD_Investing_Platform.md` — source product scope, MVP boundary, open legal/provider decisions, FR-01–03/25 and NFR-01/04–06/08–10.
- `Input/UX_Strategy_Investing_Platform.md` — onboarding chapters, save/resume, plain-language rejection handling, risk profile, privacy, and accessibility intent.
- `_bmad-output/planning-artifacts/epics.md` — Epic 1 Stories 1.1–1.14 and their Given/When/Then criteria; story IDs remain stable.
- `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/DESIGN.md` — draft, provisional visual tokens; do not treat them as approved brand decisions.
- `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/EXPERIENCE.md` — onboarding flow, states, accessibility and hand-off behavior for reuse.
- `Input/` and `_bmad-output/` — no app package, runtime, API, database, provider adapter, or existing implementation was found. No `AGENTS.md` was found.

## Tasks & Acceptance

**Execution:**
- [x] Add the selected Android-first application foundation and localization structure for Hindi and English.
- [x] Implement welcome, language selection, OTP and KYC progress with explicit pending, rejection, retry, and support states (Stories 1.1–1.10).
- [x] Implement risk profile, suitability, and completion gates using only approved rules (Stories 1.11–1.12).
- [x] Implement data export/deletion request states and accessibility behavior for core flows (Stories 1.13–1.14).
- [x] Keep provider access behind explicit interfaces and prevent simulated results from being represented as authoritative.

**Acceptance Criteria:**
- Given a first-time user, when they choose Hindi or English, then onboarding labels, instructions, and navigation use that language and the choice remains selected.
- Given a verification is pending, rejected, unavailable, or incomplete, when its status is shown, then the user sees the accurate state and a permitted retry or help action; it is never shown as successful.
- Given all required checks and approved suitability rules are complete, when onboarding status is calculated, then completion is shown only from authoritative results; otherwise the outstanding step is identified.
- Given an unauthenticated or unauthorized data request, when export or deletion is requested, then the request is not fulfilled and the user is directed to the required identity check.
- Given large text, screen-reader use, or a narrow Android display, when a core flow is navigated, then actions and status remain perceivable and usable without relying on color alone.

## Implementation Notes

Epic 1 depends on final KYC providers, approved client agreement and RIA status, nominee policy, risk-profile/suitability rules, security/session policy, and privacy/retention policy. Keep those dependencies visible in user-facing states and prevent prototype behavior from being mistaken for a live regulated service.

The user selected a local interactive demo. Use an Android-first local app foundation; simulated OTP/KYC outcomes and fictional sample values only. Do not collect real personal information, persist real data, or contact external services. Keep production legal wording and risk decisions explicitly out of the demo.

Implemented as a dependency-free responsive browser demo with an Android-oriented web app manifest. Local storage contains only sample walkthrough state.

## Verification

**Verification:** `node --test tests/onboarding-state.test.mjs` passed all three tests covering resume ordering, unresolved provider outcomes and retry, and unavailable policy content/readiness gating. Static inspection confirms bilingual welcome/stage content, provider-only outcomes, unavailable policy stages, a persistent not-ready gate, and resume/retry handling. File-level diff checks found no whitespace errors; Git reported LF-to-CRLF conversion warnings. Interactive browser/device, TalkBack, and large-text walkthroughs could not be run because the browser access host was unavailable. Two supplemental review agents could not read their generated instructions due to access restrictions; the available independent review findings were triaged and recorded above.

## Review Triage Log

| Verdict | Evidence | Route |
|---|---|---|
| medium | `src/app.js`: a saved later step could bypass earlier incomplete stages; resume now selects the earliest unreviewed stage, including unresolved provider outcomes. | patch |
| medium | `src/app.js`: retry removed the status but retained the visited flag; retry now clears both. | patch |
| false | The step has an explicit “mark reviewed” action; it records walkthrough viewing only, while all outcomes remain simulated and readiness stays unavailable. | rejected |
| medium | `src/app.js`: generic outcomes appeared on policy-only stages; provider controls now appear only for PAN, DigiLocker, bank, and selfie checks, while other stages stay unavailable. | patch |
| low | `LOCAL_DEMO.md` and `src/i18n.js`: the sample-code instruction contradicted the one-tap simulation; both now describe the same behavior. | patch |
| low | `src/app.js`: first-stage progress was 0%; the progress calculation now includes the current stage. | patch |
| low | `src/app.js`: summary count used status records instead of viewed stages; it now counts visited flags. | patch |
| medium | `index.html` and `src/i18n.js`: page title and home/language accessible labels were fixed in English; they now update with the selected language. | patch |
| medium | `src/i18n.js`: generic English terms and broad transliteration substitutions produced uneven Hindi; common flow labels now use targeted Hindi copy and retain proper names/acronyms. | patch |

The blind review completed. The edge-case and verification-gap reviewers could not read their instruction files in the rendered workflow directory and stopped without findings. The focused automated state tests passed; browser-host access was unavailable for a visual/device walkthrough.
