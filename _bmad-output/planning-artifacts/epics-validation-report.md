# Story and Acceptance Criteria Validation Report

**Product:** Long-Term Investing Platform for India  
**Source:** `Input/PRD_Investing_Platform.md`, Draft v1.1 dated 14 November 2026  
**Validation date:** 15 November 2026  
**Primary artifact:** [`epics.md`](epics.md)  
**Traceability matrix:** [`requirements-traceability-matrix.md`](requirements-traceability-matrix.md)  
**Status:** Draft - functional and quality coverage validated; architecture/legal readiness remains open.

## Executive result

The breakdown contains **13 user-value epics and 85 unique stories**, with **437 Given/When/Then acceptance criteria**. All **24 in-scope FRs** map to stories; FR-24 is explicitly excluded by the PRD. All **10 NFR categories** now have explicit story references and acceptance criteria. Epic 2 was reordered and consolidated so discovery/detail/suitability/disclosure precede the order, and payment/mandate handling is in the same story as its order.

**Gate verdict: KEEP DRAFT.** The requested NFR coverage and Epic 2 sequencing gaps are resolved. Architecture and UX validation remain not assessable because no architecture or UX contract was supplied. Critical RIA, counsel, vendor, fee, and execution decisions also remain dependencies; the product cannot be considered implementation-ready until owners resolve them.

## Validation checks

| Check | Result | Evidence / finding |
|---|---|---|
| Functional requirement coverage | PASS with explicit scope exception | FR-01 to FR-23 and FR-25 map to stories. FR-24 has no story by design. See matrix. |
| Story format and acceptance criteria | PASS | 85 unique stories; 437 AC bullets; all stories have one AC section and Given/When/Then structure. |
| Epic structure and numbering | PASS | 13 epics; story IDs are unique and sequential within each epic. |
| NFR coverage | PASS | NFR-01 through NFR-10 have story references and explicit acceptance criteria. Detailed implementation still needs architecture/vendor decisions. |
| Within-Epic dependencies | PASS for Epic 2 | Details precede search results linking to them; suitability and fee disclosure precede order placement; one-time order/payment and SIP/mandate flows are consolidated; withdrawal follows investment creation. |
| Other story dependencies | PASS with recorded external dependencies | Stories sequence through their epic; dependencies on previous MVP capabilities and named external partners are documented. |
| Architecture validation | NOT ASSESSABLE | No architecture document was supplied. Stack, integration contracts, deployment, APIs/data models, starter template, and architecture-level NFR choices remain unchecked. |
| UX validation | NOT ASSESSABLE | No DESIGN.md / EXPERIENCE.md or other UX contract was supplied. Accessibility criteria are now explicit but require design review. |
| Regulatory/product readiness | OPEN | RIA structure/eligibility, fee model, execution rails, current regulatory controls, provider capabilities, privacy/retention, and service operations remain dependencies. |

## NFR coverage summary

- **NFR-01 - Performance:** Explicit cold-start <3s, order/SIP submission acknowledgement <2s, and quote refresh <1s criteria are mapped to stories 1.1, 2.8, 2.9, and 8.1.
- **NFR-02 - Availability/DR:** Story 6.8 measures the 99.9% market-hours target and records counsel-approved RTO/RPO recovery tests.
- **NFR-03 - Scalability:** Story 6.8 adds a 10x peak-load scenario for core flows.
- **NFR-04 - Security:** Story 1.2 adds second-factor/device-binding behavior; Story 6.9 covers encryption, secrets management, VAPT, and security monitoring.
- **NFR-05 - Compliance:** Stories 1.13 and 6.10 cover privacy requests and incident reporting/DPDP/CERT-In process, with rules explicitly counsel-configured.
- **NFR-06 - Privacy:** Story 1.13 covers data export/deletion; other stories retain consent, minimisation, and access controls.
- **NFR-07 - Reliability:** Idempotency, reconciliation, and graceful failure states remain explicit across transaction stories.
- **NFR-08 - Accessibility/reach:** Story 1.14 covers low-RAM Android, low bandwidth, large text, screen readers, WCAG AA, and voice/assisted support.
- **NFR-09 - Localisation:** Story 1.1 covers Hindi/English, extensible languages, INR formatting, and IST.
- **NFR-10 - Observability:** Story 6.8 adds correlated logs/traces and real-time alerts; story 6.9 adds security-event alerting.

## Epic 2 sequencing remediation

Epic 2 now has 12 stories, ordered as follows: curated lists; filters; fund details; search; suitability; advisory-fee calculation; pre-commit disclosure; one-time order plus payment; SIP plus mandate; withdrawal; invoice; fee payment. This removes the prior forward references from search/detail to later order stories and combines transaction steps that otherwise required later-numbered capabilities.

The actual execution/payment rails, supported order states, fee schedule, risk rules, and minimum investment amount are still external or product decisions. The order-minimum wording ?Rs 100-500? remains ambiguous in the source PRD.

## Remaining source and readiness dependencies

- Counsel must confirm RIA structure, eligibility, fee limits, agreements, advice/execution boundary, and current SEBI, CERT-In, DPDP, retention, and grievance obligations.
- Product/finance must decide fee basis and the actual order minimum.
- Tech/counsel must select permitted direct-plan execution rails and confirm payment/KYC/partner capabilities.
- The MVP scope says one-time/SIP, while an earlier PRD feature summary also mentions switch/SWP; this remains out of the story set pending a scope decision.
- Explicit client-fund/security segregation controls and their customer disclosure/reconciliation evidence still need acceptance criteria after counsel confirms the operating structure.
- Architecture and UX artifacts are absent, so integration, deployment, data/API contracts, platform design, and accessibility implementation cannot be validated.
- Success metrics are illustrative; stories still need an analytics/instrumentation plan for the north star, activation, retention, fee acceptance, trust, and compliance measures.

## Validation conclusion

The functional breakdown and NFR traceability are complete enough for architecture and UX planning. Keep `epics.md` at `status: draft` until the architecture/UX handoffs and critical regulatory/vendor decisions are resolved, then rerun the readiness gate before sprint planning.
