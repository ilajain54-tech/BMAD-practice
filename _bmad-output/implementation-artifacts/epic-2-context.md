# Epic 2 Context: Choose and Invest in Suitable Direct Mutual Funds

<!-- Compiled from planning artifacts. Edit freely. Regenerate with compile-epic-context if planning docs change. -->

## Goal

Help an investor discover direct mutual funds, understand fund information and suitability, review costs and risks, and walk through one-time investment, SIP, withdrawal, and advisory-fee billing journeys. The current repository is a local interactive demo, so every catalogue value and transaction outcome must remain fictional and visibly simulated. This epic depends on decisions that are not approved in the planning baseline; the demo must expose those gaps instead of presenting a real recommendation, price, order, payment, or redemption.

## Stories

- Story 2.1: Browse Curated Mutual Fund Collections
- Story 2.2: Filter the Mutual Fund Catalogue
- Story 2.3: Review Mutual-Fund Details before Investing
- Story 2.4: Search Mutual Funds
- Story 2.5: Check Fund Suitability against the Investor Profile
- Story 2.6: Calculate and Control Advisory Fees
- Story 2.7: Review All Investment Charges and Risks before Committing
- Story 2.8: Place and Pay for a One-Time Direct Mutual-Fund Investment
- Story 2.9: Set Up a SIP and Authorize Its Recurring Payment Mandate
- Story 2.10: Request a Mutual-Fund Withdrawal
- Story 2.11: View an Itemized Advisory-Fee Invoice
- Story 2.12: Pay an Advisory Fee and Track Its Status

## Requirements & Constraints

- Identify direct plans clearly. Fund discovery should use plain-language collections, search, filters, and details, with source/freshness and explicit unavailable or empty states. Never show missing or stale values as current.
- Explain category, risk, suitability, fund expenses, past-performance context, and intended audience in accessible plain language. Suitability outcomes require approved profile data and rules; do not infer them from a demo risk score.
- Before any order confirmation, present the amount or SIP terms, approved advisory fee/basis, fund expenses, relevant charges, risk, payment/mandate terms, and next steps. Separate estimates from confirmed charges; execution itself is free under the fee-only direction.
- Order, payment, mandate, invoice, and withdrawal states are separate. Distinguish pending, confirmed, failed, cancelled, and unknown; never treat an unpaid order as funded or a pending redemption as paid. Reconcile uncertain results before retry to avoid duplicate orders or collections.
- Keep Hindi and English equivalent, preserve user control, avoid urgency or promised returns, announce status accessibly, and label the local demo clearly. No real personal/financial information, external integrations, provider calls, or live financial actions.
- Unresolved product/compliance blockers include fund source and inclusion rules, data freshness, risk and suitability policies, fee schedule and tax treatment, order/SIP limits and rails, mandate terms, redemption rules, invoice fields, and retention/access controls. Do not invent these as production policy.

## Technical Decisions

- The planning baseline has no approved production architecture, fund catalogue source, execution rail, payment provider, or fee calculation policy. Keep those behind explicit unavailable/demo boundaries; do not simulate a production integration contract as though selected.
- The user-selected local demo can use deterministic fictional fixtures and explicit outcome controls. Simulated outcomes must never be labelled authoritative, and unavailable approved policy must block any representation that the user is ready to invest.
- Treat each consequential action as explicit user confirmation after a complete review. Preserve distinct order, payment, mandate, invoice, and redemption records/statuses in the walkthrough.

## UX & Interaction Patterns

- Use a goal-first, calm discovery experience and a short curated set without implying ranking by compensation. Fund cards identify direct-plan status, category, suitability, freshness, and a concise “who this may suit” explanation.
- Show risk and cost in text as well as visuals. Put required details on the review surface, not only in tooltips. Label dates, sources, assumptions, and data freshness.
- For external hand-offs, explain what will happen and how to return. On return, reconcile status before offering retry. Keep pending/unknown states and safe next actions visible; do not use retry if it could duplicate a transaction.
- Support narrow Android layouts, large text, screen readers, and the selected language. Keep pause/withdrawal choices visible without retention barriers.

## Cross-Story Dependencies

Story 2.5 depends on Epic 1 risk profile, current KYC, and approved suitability rules. Stories 2.6–2.7 depend on counsel/finance-approved advisory fees, fund charges, risk disclosures, and recordkeeping. Stories 2.8–2.10 and 2.12 depend on permitted execution/payment rails and provider status/reconciliation behavior. Story 2.11 depends on approved invoice, tax, language, access, and retention policies. Epic 3 goal/SIP flows and Epic 4 portfolio/activity views consume confirmed investment and payment states.
