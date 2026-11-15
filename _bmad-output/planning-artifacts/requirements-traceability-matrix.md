# Requirements Traceability Matrix

Source: `Input/PRD_Investing_Platform.md` (Draft v1.1). Story references are based on FR/NFR tags in acceptance criteria.

## Functional requirements

| Requirement | PRD requirement summary | Story IDs | Coverage |
|---|---|---|---|
| FR-01 | Hindi/English onboarding, UI, notifications and support; additional languages from v1.0 | 1.1, 1.6, 1.7, 1.11, 2.4, 2.7, 3.1, 3.4, 4.6, 4.7, 4.8, 5.1, 5.2, 5.3, 5.5 | Covered |
| FR-02 | Mobile OTP, PAN, DigiLocker Aadhaar, bank penny-drop, selfie/liveness, eSign, nominee, save/resume and rejection reasons | 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 1.9, 1.10, 1.12, 4.8, 6.1 | Covered |
| FR-03 | Plain-language risk profiling and suitability rating | 1.11, 1.12, 2.5 | Covered |
| FR-04 | Curated funds, filters, fund details/risk/fit, direct one-time and SIP orders | 2.1, 2.2, 2.3, 2.4, 2.5, 2.8, 2.9 | Covered |
| FR-05 | SIP reminders, auto-retry, alternate date and recovery prompts | 3.4, 3.5, 3.6, 4.8 | Covered |
| FR-06 | SIP step-up, pause and resume without penalty | 3.7, 3.8 | Covered |
| FR-07 | Goal creation, recommended SIP, progress and on-track indicator | 3.1, 3.2, 3.3 | Covered |
| FR-08 | Pre-commit advisory fee, fund expenses, risk and possible outcomes | 2.7, 2.8, 2.9, 12.3 | Covered |
| FR-09 | Calm in-app guidance during sharp falls, no action prompt, goal context | 3.9 | Covered |
| FR-10 | UPI, net banking, mandates, status tracking and withdrawals | 1.5, 2.8, 2.9, 2.10, 2.12 | Covered |
| FR-11 | Holdings, XIRR, allocation, statements and capital-gains reports | 4.1, 4.2, 4.3, 4.4, 4.5 | Covered |
| FR-12 | Push/SMS/email for orders, SIP debits, failures and KYC status | 2.8, 2.10, 3.4, 3.5, 4.6, 4.7, 4.8 | Covered |
| FR-13 | Chat, vernacular call-back, assisted mode, ticket tracking and human escalation | 1.10, 1.14, 5.1, 5.2, 5.3, 5.4, 5.5 | Covered |
| FR-14 | RIA-limited advisory-fee calculation, display, billing and invoices | 2.6, 2.11, 2.12, 11.1 | Covered |
| FR-15 | KYC review, reconciliation, compliance dashboards, complaints and audit logs | 1.3, 1.10, 2.1, 2.12, 6.1, 6.2, 6.3, 6.4, 6.5, 9.2 | Covered |
| FR-16 | Trusted-relative view-only access and shared goals | 7.1, 7.2, 7.3 | Covered |
| FR-17 | Partner/separate-entity equity quotes, delivery orders and status | 8.1, 8.2, 8.3, 8.4 | Covered |
| FR-18 | IPO browsing, UPI application and allotment status | 8.5, 8.6, 8.7 | Covered |
| FR-19 | Referrals/rewards tied to continued SIPs | 9.1, 9.2 | Covered |
| FR-20 | Account Aggregator link for external holdings/net worth | 10.1, 10.2, 10.3 | Covered |
| FR-21 | Personalised fee-only planning and advice | 11.1, 11.2, 11.4, 12.2 | Covered |
| FR-22 | Advice-led FDs, bonds, NPS, digital gold; commission only via separate entity | 12.1, 12.2, 12.3 | Covered |
| FR-23 | US stocks under LRS | 13.1, 13.2, 13.3, 13.4 | Covered |
| FR-24 | F&O, advanced charts, API are not planned | - | Excluded by PRD |
| FR-25 | Client agreement/e-consent, suitability/advice trail, fee disclosure, retention, officer/certification tracking | 1.3, 1.4, 1.6, 1.7, 1.8, 1.10, 1.11, 1.12, 1.13, 2.1, 2.5, 2.6, 2.7, 2.11, 4.4, 4.5, 5.3, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.9, 6.10, 9.2, 10.1, 11.1, 11.3, 11.4, 12.2, 12.4, 13.1 | Covered |

FR-24 is intentionally unmapped because F&O, advanced charts, and API are explicitly not planned.

## Non-functional requirements

| Requirement | PRD quality attribute | Tagged story IDs | Coverage | Implementation note |
|---|---|---|---|---|
| NFR-01 | Performance: cold start <3s; order/SIP submission acknowledgment <2s; quote refresh <1s | 1.1, 2.8, 2.9, 6.8, 8.1 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-02 | Availability: 99.9% market-hours target and defined DR RTO/RPO | 6.8 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-03 | Scalability: handle 10x traffic spikes | 6.8 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-04 | Security: encryption, 2FA, device binding, secrets, VAPT, security monitoring | 1.2, 1.6, 1.9, 4.6, 4.7, 4.8, 5.3, 5.5, 6.1, 6.3, 6.5, 6.7, 6.8, 6.9, 7.2 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-05 | Compliance: RIA controls, cyber-resilience, CERT-In, DPDP and retention | 1.4, 1.6, 1.7, 1.13, 2.11, 6.6, 6.10 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-06 | Privacy: consent, minimisation, data export and deletion | 1.4, 1.5, 1.6, 1.9, 1.13, 2.11, 4.1, 4.4, 4.5, 4.6, 4.7, 4.8, 5.1, 5.2, 5.3, 5.4, 5.5, 6.10, 7.2, 8.4, 10.1, 11.2, 11.4, 12.4 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-07 | Reliability: idempotent payments/orders, reconciliation, graceful degradation | 2.8, 2.9, 2.10, 2.12, 3.5, 3.7, 3.8, 6.2, 6.8, 8.2, 8.3, 8.6, 10.2, 12.3, 13.3, 13.4 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-08 | Accessibility: low-RAM Android, low bandwidth, large text, WCAG AA, voice/assisted | 1.14 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-09 | Localisation: Hindi/English, extensible languages, INR formatting and IST | 1.1, 3.1 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |
| NFR-10 | Observability: central logs, tracing, real-time alerts and audit trails | 1.7, 1.12, 4.6, 4.8, 6.5, 6.7, 6.8, 6.9, 6.10 | Covered | Covered by explicit AC; implementation details/targets may depend on architecture or counsel approval. |

## Epic-to-requirement summary

| Epic | Main FR coverage | Release |
|---|---|---|
| 1 | FR-01, FR-02, FR-03, FR-25 | MVP |
| 2 | FR-04, FR-08, FR-10, FR-14 | MVP |
| 3 | FR-05, FR-06, FR-07, FR-09 | MVP |
| 4 | FR-11, FR-12 | MVP |
| 5 | FR-13 | MVP |
| 6 | FR-15, FR-25 | MVP |
| 7 | FR-16 | v1.0 |
| 8 | FR-17, FR-18 | v1.0 |
| 9 | FR-19 | v1.0 |
| 10 | FR-20 | v1.0 |
| 11 | FR-21 | v1.0 |
| 12 | FR-22 | v1.5 |
| 13 | FR-23 | v1.5 or later |
