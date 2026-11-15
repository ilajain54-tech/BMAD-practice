# BMAD — Long-Term Investing Platform for India

This repository is the product-planning workspace for a mobile-first, long-term investing platform for Indian retail investors. It contains the product requirements, UX strategy and design contracts, epics and user stories, and planning validation artifacts used to guide future architecture and implementation.

> **Project status:** Planning and design. This repository does not yet contain the production investing application. The PRD and UX design artifacts are drafts; legal, compliance, pricing, provider, brand, and architecture decisions remain open.

## Product direction

The product aims to make long-term investing a habit for Indian families through a simple, trustworthy experience in Hindi and English. The MVP centers on direct mutual funds, goals and SIPs, transparent advisory fees, KYC, payment and withdrawal status, portfolio reporting, accessible support, and calm guidance during market falls.

The product is planned around a fee-only SEBI Registered Investment Adviser (RIA) structure. The PRD explicitly requires qualified counsel and compliance review for the RIA structure, fee design, disclosures, suitability, product boundaries, and execution arrangements. No registration, legal approval, investment return, fee, or provider capability should be inferred from these planning documents.

## Repository contents

| Path | Purpose |
|---|---|
| `Input/PRD_Investing_Platform.md` | Primary investing-platform PRD (draft v1.1), including product vision, users, requirements, roadmap, metrics, and open decisions. |
| `Input/UX_Strategy_Investing_Platform.md` | PRD-aligned UX strategy (draft v1.1). It distinguishes committed requirements from UX hypotheses and flags decisions needing approval. |
| `Input/uber_ride_hailing_prd.md` | Separate sample/reference PRD. It is not part of the investing-platform scope. |
| `_bmad-output/planning-artifacts/epics.md` | Epics, user stories, acceptance criteria, dependencies, and release sequencing derived from the investing PRD. |
| `_bmad-output/planning-artifacts/epics-validation-report.md` | Validation findings for epic/story coverage and readiness. |
| `_bmad-output/planning-artifacts/requirements-traceability-matrix.md` | Functional and non-functional requirement mapping to story IDs. |
| `_bmad-output/planning-artifacts/sprint-change-proposal-2026-11-15.md` | Correct Course impact analysis and UX change proposal. |
| `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/DESIGN.md` | Draft visual design contract. Its color and typography tokens are provisional. |
| `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/EXPERIENCE.md` | Draft experience contract: information architecture, component behavior, states, accessibility, and key user flows. |
| `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/ux-traceability-matrix.md` | UX mapping from PRD FRs/NFRs to experience behavior and story IDs. |
| `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/validation-report.md` | UX validation report, including open findings and review notes. |
| `_bmad/` | BMAD configuration, manifests, and workflow utility scripts used in this workspace. |
| `.agents/skills/` | Installed BMAD skills and agent workflows, when included in a checkout. |

An earlier planning artifact under `_bmad-output/planning-artifacts/prds/` is not the source of truth for the investing product. Use `Input/PRD_Investing_Platform.md` for current product scope.

## Current planning baseline

- **Primary release:** MVP, focused on the first-time investor and Tier 2/3 family-finance-manager journeys.
- **Launch language:** Hindi and English.
- **Primary platform:** Android first; iOS and web follow later.
- **Later releases:** v1.0 includes family access, partner/separate-entity equity delivery and IPOs, referrals, Account Aggregator, premium advice, and additional regional languages; v1.5 adds advice-led Indian products; v2.0 includes margin funding/lending through a partner and US stocks under LRS.
- **Explicitly out of scope:** F&O, advanced charts, and API trading.
- **Planning state:** 13 epics and 85 stories are documented. Story acceptance criteria cover the PRD requirements, but implementation readiness still depends on architecture and resolution of documented product/compliance dependencies.

## Important open decisions

Resolve these before treating the UX contracts or downstream implementation details as final:

1. Confirm the RIA entity, eligibility, registration, agreement, suitability process, disclosures, and record-retention obligations with securities-law counsel and compliance.
2. Choose the advisory fee model and approve user-facing fee, tax, billing, and invoice language.
3. Confirm the direct mutual-fund execution and payment rails and their provider-specific statuses, limits, and failure behavior.
4. Define the market-fall trigger, verified data source/freshness, goal calculations, and approved messaging.
5. Decide brand identity and review the provisional palette and typography tokens for Hindi/English accessibility.
6. Define support channels, language coverage, assisted-mode boundaries, operating hours, and service levels.
7. Create the architecture document before implementation planning is considered complete.
8. Reconcile the Epic 13 release label: it currently says “v1.5 or later” for US stocks, while the PRD roadmap schedules US stocks for v2.0.

## Working with the BMAD artifacts

1. Read the investing PRD and its open items before changing scope.
2. Keep the epic/story IDs stable when updating acceptance criteria or UX trace links.
3. Update the PRD, epics, UX contracts, and traceability artifacts together when a product decision changes their assumptions.
4. Keep unconfirmed legal, fee, provider, and UX decisions explicitly labeled as open items or hypotheses.
5. Before implementation, produce the architecture decisions and confirm story dependencies and release sequencing.

BMAD workflows available in this workspace include:

- `bmad-prd` — create, update, or validate the PRD.
- `bmad-create-epics-and-stories` — generate or refine epics and user stories.
- `bmad-correct-course` — assess cross-artifact impact from a significant change.
- `bmad-ux` — create or update `DESIGN.md` and `EXPERIENCE.md`.
- `bmad-architecture` — document architecture decisions.
- `bmad-sprint-planning` — check readiness and create sprint tracking.
- `bmad-build` — implement approved stories after planning inputs are ready.

## Validation artifacts

The epic validation report and traceability matrix live under `_bmad-output/planning-artifacts/`. The latest UX run includes its own traceability matrix, rubric review, editorial structure/prose review notes, and validation report under the dated `ux-designs` folder.

Validation here refers to planning-document coverage and consistency. It does not certify regulatory compliance, investment suitability, security, or implementation behavior.
