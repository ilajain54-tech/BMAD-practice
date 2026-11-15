# UX Traceability Matrix — Investing Platform

Source: PRD v1.1, corrected UX Strategy v1.1, and `_bmad-output/planning-artifacts/epics.md`. This is a design trace, not an assertion that each screen is already implemented.

| PRD item | UX strategy / experience contract | Epic/story trace | Release | UX coverage / open dependency |
|---|---|---|---|---|
| FR-01 Languages | Strategy §§5, 9; Foundation, Welcome, language selector | 1.1, 1.6–1.7, 1.11, 2.4, 2.7, 3.1, 3.4, 4.6–4.8, 5.1–5.5 | MVP | Covered; approved translations and fallback policy open. |
| FR-02 Onboarding/KYC | Strategy §7.1; Flow 1, KYC states | 1.2–1.10, 1.12 | MVP | Covered; counsel/vendor fields, reasons and exception policy open. |
| FR-03 Risk/suitability | Foundation, Flow 1, risk indicator | 1.11–1.12, 2.5 | MVP | Covered; assessment and suitability rules need approval. |
| FR-04 Mutual funds | IA Explore/Fund detail, fund card, Flow 2 | 2.1–2.5, 2.8–2.9 | MVP | Covered; catalogue, ranking and order limits open. |
| FR-05 SIP recovery | Flow 3, reminder/status patterns | 3.4–3.6 | MVP | Covered; retry policy and rail capabilities open. |
| FR-06 SIP flexibility | Flow 3; explicit pause/resume control | 3.7–3.8 | MVP | Covered; supported schedules/mandates open. |
| FR-07 Goals | IA Goals; goal card/progress; Flow 2/4 | 3.1–3.3 | MVP | Covered; calculation, linkage, statuses and projection assumptions open. |
| FR-08 Transparency | Cost breakdown/pre-commit; Flow 2 | 2.7–2.9 | MVP | Covered; fee, taxes and approved text open. |
| FR-09 Market-fall guidance | Market context card/state; Flow 4 | 3.9 | MVP | Covered; thresholds, data source/freshness and compliant copy open. |
| FR-10 Payments/withdrawals | Invest/payment states; Flow 2/5 | 1.5, 2.8–2.10, 2.12 | MVP | Covered; rail status, limits and timing open. |
| FR-11 Portfolio/reports | IA Portfolio; data freshness and report states | 4.1–4.5 | MVP | Covered; calculations and data sources open. |
| FR-12 Notifications | Voice and tone; notification interaction rules | 3.4–3.5, 4.6–4.8 | MVP | Partly covered at UX contract level; channel preferences and lock-screen privacy details need product decisions. |
| FR-13 Support | IA Help; Flow 6; support component | 5.1–5.5, 1.14 | MVP | Covered; channels, hours, language coverage and SLA open. |
| FR-14 Fee management | Strategy §8.2; fee/cost component | 2.6, 2.11–2.12, 11.1 | MVP | Covered; basis, limits, billing, taxes and counsel wording open. |
| FR-15 Admin/Ops | Foundation and handoff dependencies; operations screens not detailed in consumer UX spine | 6.1–6.10 | MVP | Consumer UX intentionally thin; admin UX needs a separate operations design. |
| FR-16 Family access | Release boundary; Flow 7 | 7.1–7.3 | v1.0 | Covered as future phase; consent, scopes and revocation policy open. |
| FR-17 Equity delivery | Partner product module boundary | 8.1–8.4 | v1.0 | Boundary covered; detailed journeys deferred until partner/structure confirmed. |
| FR-18 IPO | Partner product module boundary | 8.5–8.7 | v1.0 | Boundary covered; application and status details deferred. |
| FR-19 Referral | Release boundary only | 9.1–9.2 | v1.0 | Phase traced; UX journey deferred; reward/compliance rules open. |
| FR-20 Aggregation | IA Portfolio external-assets note | 10.1–10.3 | v1.0 | Boundary covered; consent and stale-data behavior needs source/provider detail. |
| FR-21 Premium advice | Foundation/IA Advice workspace | 11.1–11.4, 12.2 | v1.0 | Boundary covered; enrollment, pricing, staffing, service scope and compliance approval open. |
| FR-22 Other assets | Partner module boundary | 12.1–12.4 | v1.5 | Boundary covered; product/partner-specific UX deferred. |
| FR-23 US stocks/LRS | Partner module boundary and release map | 13.1–13.4 | v2.0 per PRD | UX says v2.0; backlog Epic 13 label conflicts (“v1.5 or later”) and should be reconciled. |
| FR-24 Excluded | Foundation release boundary; no F&O interface | None | Out of scope | Explicitly excluded. |
| FR-25 RIA compliance | Foundation; flows 1–2; fee/consent/audit dependencies | 1.7, 1.11–1.12, 2.5–2.7, 6.1–6.7, 11.1, 11.3–11.4, 12.2, 12.4, 13.1 | MVP core, later advice records | Covered at interaction boundary; exact obligations and retention remain counsel/compliance dependencies. |
| NFR-01 Performance | Foundation, loading states, external hand-off | 1.1, 2.8–2.9, 6.8 | MVP | UX supports; target remains NFR/architecture verification. |
| NFR-02 Availability | Global outage/degradation states | 6.8 | MVP | UX state contract covered; operational target/DR architecture open. |
| NFR-03 Scalability | Graceful degradation; no false current state | 6.8 | MVP | UX response covered; load behavior owned by architecture. |
| NFR-04 Security | Secure resume, device/auth, privacy-safe notifications | 1.2, 1.6, 1.9, 5.3, 6.9, 7.2 | MVP plus v1.0 | UX interactions covered; security architecture and policies open. |
| NFR-05 Compliance | Consent, approved copy, audit/retention boundaries | 1.4, 1.7, 1.13, 6.6, 6.10 | MVP | UX requirements covered; exact rules need counsel. |
| NFR-06 Privacy | Data minimization, account isolation, helper consent | 1.13, 4.1, 5.3–5.5, 7.2 | MVP plus v1.0 | Covered; retention, export/deletion, and sharing policy need approval. |
| NFR-07 Reliability | Unknown/pending state, safe retry, idempotency | 2.8–2.10, 2.12, 3.5–3.8, 6.2, 10.2, 13.3–13.4 | All relevant phases | Covered; technical implementation is architecture/provider work. |
| NFR-08 Accessibility/reach | Accessibility Floor; low-bandwidth, TalkBack, text scale | 1.14, 5.3 | MVP | Covered; PRD WCAG AA baseline; WCAG 2.2 AA proposed target. |
| NFR-09 Localisation | Language selector, Indian numeric/time patterns | 1.1, 3.1 | MVP | Covered; numeral convention and translation fallback open. |
| NFR-10 Observability | State/reference/last-updated language and support tracking | 1.7, 4.6, 6.5, 6.8–6.10 | MVP | UX needs visible status; system instrumentation details remain architecture/ops work. |

## Traceability notes

- Seven named-protagonist flows cover MVP KYC, first SIP, failed SIP recovery, market-fall context, withdrawal, and human help, plus v1.0 family access.
- Future product epics are release-gated and traceable but do not yet have detailed UX journeys; add those when partner, legal, data, and servicing models are decided.
- No story acceptance criteria were edited in this UX pass. See `../../epics.md` and the existing requirements RTM for requirement-level acceptance criteria coverage.
