---
name: Investing Platform — Experience Spine
status: draft
sources:
  - ../../../../Input/PRD_Investing_Platform.md
  - ../../../../Input/UX_Strategy_Investing_Platform.md
  - ../../epics.md
updated: 2026-11-15
---

## Foundation

Android-first mobile experience for Indian retail investors; iOS and web follow the PRD platform sequence. Hindi and English are supported across onboarding, UI, notifications, and support at launch (FR-01). Design for low-memory Android and low-bandwidth conditions (NFR Accessibility and reach). `DESIGN.md` is the visual identity reference; colors and font values there are provisional pending brand, accessibility, and localization review.

The product supports long-term direct mutual-fund investing under a fee-only RIA model. Generic product education is distinct from personalized advice. Suitability checks and required consent must precede advice or investing as defined by approved compliance rules. Do not imply that a user can place an order before KYC and required checks are complete.

### Release boundary

- **MVP:** onboarding/KYC, risk profile and suitability, direct mutual funds, SIP and payment management, goals, portfolio/reports, notifications, support, fee display/billing, compliance and operations (FR-01–15, FR-25).
- **v1.0:** family access, equity delivery and IPO through approved partner/entity, referrals, Account Aggregator, premium advice, and additional regional languages (FR-16–21).
- **v1.5:** advice-led FDs, bonds, NPS and digital gold through approved structures (FR-22).
- **v2.0:** margin funding/lending through separate regulated partner and US stocks under LRS (FR-23; roadmap §17).
- **Out of scope:** F&O, advanced charts, and API trading (FR-24).

## Information Architecture

Proposed mobile navigation, subject to concept testing:

| Surface | Entry | Purpose and phase |
|---|---|---|
| Welcome / language | First launch or language change | Select Hindi/English, understand the service and required registration/business information (MVP). |
| Browse / education | Welcome or Explore | Review fund explainers and permitted public content; any anonymous calculator is a hypothesis pending privacy/compliance review. |
| Onboarding / KYC | Start onboarding | OTP, PAN, DigiLocker, bank verification, selfie/liveness, agreement/eSign, nominee as required, risk profile, progress and support (MVP). |
| Home | App open after onboarding | Portfolio summary, goals, next SIP, calm guidance and core shortcuts (MVP). |
| Goals | Bottom navigation | Create and track private goals, assumptions and progress (MVP); shared goal access in v1.0. |
| Explore | Bottom navigation | Curated direct funds, search, filters and fund details (MVP); phase-gated products appear only when enabled. |
| Fund detail | Explore result | Understand category, direct plan, suitability, risk, charges, fund information and available actions (MVP). |
| Invest / SIP setup | Goal, fund detail | Amount, schedule, suitability, mandate, charge/risk review and submission state (MVP). |
| Portfolio | Bottom navigation | Holdings, returns, allocation, transactions and reports (MVP). External holdings are v1.0 and visibly separate. |
| Market context | Home / relevant notification | Verified context, goal horizon, data freshness, educational explanation and user-controlled actions (MVP). |
| Payments and activity | Home, portfolio or SIP | Payment, mandate, withdrawal and order status/history; source and pending state remain clear (MVP). |
| Help and complaints | Persistent labeled entry / Profile | Chat, vernacular callback, assisted mode, ticket tracking and grievance path (MVP). |
| Profile / settings | Avatar | KYC/documents, security, language, privacy, fees, agreements, notification preferences, support and complaints (MVP). Family access and shared views in v1.0. |
| Advice workspace | Advisory service entry | Enrollment, financial intake, appointment and plan (v1.0 only when RIA/service approvals are complete). |
| Partner product modules | Explore / partner boundary | Equity/IPO (v1.0), other assets (v1.5), international (v2.0); identify the executing entity and partner. |

Bottom navigation candidate: **Home / Goals / Explore / Portfolio**. Profile is reached through the account avatar. The help entry is labeled and available on core journeys; persistent placement is tested on small screens. The PRD's three-tap target is a usability goal, not a reason to remove required disclosures or accessibility steps.

## Voice and Tone

Brand voice direction from the strategy: warm, direct, respectful, never preachy or sales-led. Hindi is written natively in simple everyday Hindi; common terms such as SIP, fund, and bank may remain in English when user-tested and explained on first use. Keep English and Hindi meaning equivalent, not literal. Use Indian number grouping and IST; test Western versus Devanagari numerals before locking the Hindi convention.

| Situation | Pattern |
|---|---|
| Waiting | State what is being checked and whether the user can leave safely. |
| Error | Say what happened, what is known, and the next available action; never invent a cause. |
| Pending transaction | Say it is pending, give the reference/time if available, and explain how to check status. Do not ask the user to retry if that could duplicate a payment/order. |
| Fee | Distinguish free execution from the approved advisory service and its actual fee basis. Use no placeholder amount in production. |
| Risk | Explain uncertainty and material downside in plain words; never promise returns or recovery. |
| Support | Explain that staff will never ask for passwords or OTPs. Do not promise a response time until the service level is approved and met. |

Use conditional language for data-dependent states. For example, reassure about a SIP only after confirming its actual status; never state “not cancelled” based on a generic failure event.

## Component Patterns

Behavioral contracts; visual treatments live in `DESIGN.md.Components`.

| Component | Behavioral rule |
|---|---|
| Primary and secondary buttons | One primary action per step. Label the outcome (“Review SIP”, “Pause SIP”) and keep secondary/exit actions visible. Disable only when necessary and explain why. |
| Input and OTP field | Keep labels persistent, announce validation, preserve safe completed fields after recoverable errors, and never expose sensitive values in screen-reader announcements. |
| Language selector | Available before onboarding and in settings. Changing language does not reset progress; show a clear confirmation if the selected content/translation is unavailable. |
| KYC progress stepper | Name current and completed steps, show pending external checks distinctly, save completed steps, and provide resume/retry/help paths. |
| Fund card | Show direct-plan identity, category, source/freshness as applicable, suitability status, and concise “who this may suit” explanation. Never rank by commercial compensation. |
| Risk indicator | Always pair the graphic with a label and plain explanation; link to detail. Suitability outcomes follow approved rules, not a visual-only score. |
| Cost breakdown and pre-commit review | Present approved advisory fee/basis, fund expenses, other charges, risks, payment/mandate terms, and what happens next before confirmation. Separate estimates from confirmed charges. |
| Goal card and progress visual | Show target/date/value, calculation freshness and status label. State projection assumptions and uncertainty. Do not turn a projection into a guarantee. |
| Market context card | Show verified market data timestamp and the user's actual linked-goal horizon where available. If data is stale or no relevant goal exists, say so and do not fabricate personalized reassurance. |
| Status banner | Distinguish success, pending, failed, and needs-attention with text and accessible announcement. Use only authoritative payment/provider status. |
| Help entry point | Opens available chat, callback or assisted options and discloses operating hours/availability. A user can exit support without losing flow progress. |
| Chart | Provide a text summary and data period/as-of date. Avoid dense intraday/trader patterns in MVP. |
| Bottom navigation | Expose selected state to assistive technology; preserve a predictable back stack and do not trap users in nested sheets. |
| Tooltip / explainer | Open on explicit request, use plain language, and be available to screen readers; never place required risk/fee information only in a tooltip. |

## State Patterns

| Surface | Required states |
|---|---|
| Welcome / language | First load, language chosen, translation unavailable, offline/retry. |
| Onboarding / KYC | Not started, in progress, saved/resumable, pending provider, completed, rejected/needs attention with safe next step, expired/re-authentication, offline/service unavailable. |
| Home | Loading, populated, first-use empty, partial/stale data with as-of time, offline, account restriction, critical service outage. |
| Goals | No goals, create/edit validation, calculating, current projection, assumptions unavailable, stale holdings, on-track/needs-attention/undetermined. |
| Explore / fund detail | Loading, results, no results, filter empty, stale/unavailable fund data, unsuitable or unavailable product, disabled order path. |
| Invest / SIP / payment | Editing, review, external authorization hand-off, returned-to-app, submitted/pending, confirmed, rejected/failed, timeout/unknown, retry-safe next step, duplicate prevention. |
| Portfolio / reports | Loading, no holdings, partial holdings, stale valuation, report ready, report unavailable, download failure. |
| Market context | Trigger not met, current verified context, stale market data, no linked goal, card dismissed where allowed, error; pause/withdraw remain reachable. |
| Help / complaints | Channel unavailable, hours/queue, callback submitted, chat active/disconnected, ticket created/tracked, complaint escalated. |
| Profile / settings | Loading, saved, save failed, consent active/revoked, language change, security lock, data export/deletion request state. |
| Advice workspace (v1.0) | Not eligible/unavailable, enrollment incomplete, intake saved/incomplete, appointment unavailable/pending/confirmed, plan in review/issued/revised. |
| Partner product modules (later releases) | Not enabled/ineligible, partner hand-off, pending/confirmed/rejected order, stale quote/terms, provider unavailable, consent/disclosure update required. |

Global network behavior: preserve safe user-entered values, show whether a change was saved, retry only idempotent requests automatically, and avoid presenting cached financial data as current. Respect data minimization, consent, and approved retention policies.

## Interaction Primitives

- Tap activates an explicitly labeled control; use native Android back behavior and keep a visible in-flow way back when an external provider takes over.
- Before DigiLocker, eSign, UPI AutoPay, or eNACH hand-off, explain the next screen, expected action, and how to return. On return, reconcile provider status before offering a retry.
- Save and resume onboarding after each completed step. Require authentication to resume and re-check only verifications whose validity has expired under approved policy.
- Confirm consequential actions with an accurate summary. Do not add confirmation friction to ordinary navigation or use confirmation as a retention barrier for pause/withdraw.
- Do not auto-submit an investment or mandate. User authorization is explicit and separate from advice/recommendation.
- Notifications are status- and preference-aware. Never expose sensitive portfolio details on a lock screen by default; user controls channel and preview preferences.
- Reduced motion suppresses nonessential transitions. Do not use vibration or animation to imply investment success or safety.

## Accessibility Floor

- Meet the PRD's WCAG AA baseline; test against the strategy's proposed WCAG 2.2 AA target after that target is accepted.
- TalkBack announces screen titles, control labels, state changes, error summaries, and chart summaries in the selected language.
- Support 200% text scaling and Android font/display size settings without clipping, overlap, or inaccessible actions.
- Interactive targets are at least 48dp where platform guidance allows. Keyboard/focus behavior is defined for later web surface.
- Never rely on color alone. Verify text, focus, and control contrast in both themes and both languages.
- Keep Hindi and English layouts equivalent in meaning and task capability; test Devanagari shaping, mixed scripts, numerals, dates, and long text on low-end devices.
- Offer assisted support without requesting passwords, OTPs, or remote control of the device. Audio explainers are v1.0 candidate functionality, not MVP dependency.

## Responsive & Platform

MVP is Android-first. Test small phones (including ~360dp width), low-memory devices, slow connections, app switching, and large text. Keep primary actions in the reachable lower region when this does not conflict with system controls or screen-reader order. Avoid fixed-height layouts. iOS and web are later surfaces and require platform-specific navigation and accessibility review before release; this document does not claim parity is already specified.

## Key Flows

### Flow 1 — Complete KYC and understand status (Aarav, first-time Android investor)

1. Aarav opens the app and chooses English or Hindi before onboarding (FR-01; Story 1.1).
2. He reviews the welcome/service information and starts onboarding; mobile verification explains the OTP step (FR-02; Story 1.2).
3. The KYC stepper guides PAN, DigiLocker, bank, selfie/liveness, agreement/eSign, and nominee as required by approved policy (Stories 1.3–1.10).
4. Each external hand-off prepares him for the provider screen and reconciles status when he returns. Completed steps are saved; he can leave and resume securely (Story 1.9).
5. He completes the plain-language risk profile, sees its meaning, and reviews the onboarding outcome (Stories 1.11–1.12).
6. **Climax:** Aarav sees a clear completed or pending status and knows the next valid step; he is not shown investment actions as available until required suitability and consent checks pass.

Failure: a provider rejects a check or times out. The affected step remains incomplete/pending, the app explains only the known reason, offers a safe retry or support route, preserves prior completed work, and never says KYC succeeded (Story 1.10).

### Flow 2 — Start a suitable goal-based SIP (Sunita, Tier 2 family finance manager)

1. Sunita selects Hindi on welcome and reads the service and fee explanation before starting (Stories 1.1, 2.6).
2. She completes onboarding, risk profiling, suitability, and required agreement before investment (Stories 1.1–1.12).
3. She creates a private goal for her child's education with target and date; the app explains any SIP estimate and its assumptions (Stories 3.1–3.3).
4. She explores suitable direct mutual funds. Each fund explains who it may suit, its risk, charges, and data freshness (Stories 2.1–2.5).
5. She chooses an amount and SIP schedule, reviews the approved fee, fund expenses, risk, mandate terms, and next debit before committing (Stories 2.7, 2.9).
6. **Climax:** she explicitly authorizes the payment mandate and receives the true provider status, first debit date if confirmed, and how to pause/resume (Stories 2.9, 3.8).

Failure: mandate approval is pending or fails after a provider hand-off. Return to the app with the mandate marked pending/failed, do not create an active SIP prematurely, reconcile before retry, and offer help. Never claim a debit is scheduled without confirmed mandate and order state.

### Flow 3 — Recover a failed SIP debit (Aarav)

1. Aarav receives a pre-debit reminder in his chosen language with amount/date (Story 3.4).
2. A debit fails; the app displays the confirmed status and available failure reason, without implying the SIP itself has ended (Story 3.6).
3. It presents only supported recovery choices, such as retry or an alternate date, with the timing and any mandate effect (Stories 3.5–3.6).
4. He chooses a recovery action and reviews the schedule change before confirming.
5. **Climax:** he sees the authoritative result and updated next debit information; the app preserves the prior schedule until the provider confirms the change.

Failure: status is unknown or retry could duplicate a debit. Show pending/unknown, check existing transaction state, suppress unsafe retry, and provide a support/reference path.

### Flow 4 — See market context without losing control (Sunita)

1. Sunita opens Home during a sharp market movement.
2. If a verified trigger and fresh data are available, a calm card explains what changed, when the data was updated, and how her linked goal horizon relates to the view (Story 3.9).
3. She can open the accessible explanation or review goal details; content makes uncertainty explicit and does not predict recovery.
4. Pause and withdrawal remain available as ordinary user choices; no blocking dialog or repeated retention prompt appears.
5. **Climax:** Sunita understands the current information and chooses whether to continue, pause, or take another permitted action without pressure.

Failure: market data is stale or no linked goal exists. The app states that personalized context is unavailable, avoids reassuring claims, and offers portfolio details/support while keeping user controls accessible.

### Flow 5 — Request a mutual-fund withdrawal (Aarav)

1. Aarav opens an eligible holding and selects withdraw (Story 2.10).
2. The app shows supported amount/unit limits, destination bank, applicable exit conditions/charges, and timing where confirmed.
3. He reviews and explicitly confirms the redemption request.
4. **Climax:** he sees the provider-confirmed accepted, rejected, or pending state with a reference and expected timing only when supported.

Failure: a timeout leaves the request uncertain. The app checks the existing request before retry, shows pending/unknown accurately, and never says proceeds were paid before confirmation. A pause option is offered at most once as an optional alternative, never as a barrier.

### Flow 6 — Get help without losing place (Ramesh, low digital confidence)

1. Ramesh opens “Need help?” from the KYC or payment step in Hindi (Stories 5.1–5.3).
2. He sees available chat, callback, or assisted support and any operating-hour/availability limits (Stories 5.1–5.3).
3. Support helps explain the next step without asking for passwords or OTPs; the app remains on the same saved task.
4. Ramesh can track the ticket and escalate if unresolved (Stories 5.4–5.5).
5. **Climax:** he returns to the KYC/payment flow with progress intact and knows exactly what action remains.

Failure: support is unavailable or the callback cannot be scheduled. Show the limitation, retain progress, create/track a ticket where available, and state the next response channel without promising an unapproved SLA.

### Flow 7 — Share selected goals with a trusted relative (v1.0; Sunita)

1. Sunita opens family access and reviews exactly what a helper can see and do (Story 7.1).
2. She invites a trusted relative and grants only the approved read-only scope (Stories 7.1–7.3).
3. She reviews the selected shared goals and can revoke access at any time.
4. **Climax:** the relative sees only authorized information; Sunita can verify and change the access state.

Failure: invitation is expired, rejected, or sent to the wrong contact. Do not expose account data; allow Sunita to cancel/reissue and show the invitation state.

## Inspiration & Anti-patterns

The PRD names Groww, Zerodha, INDmoney, and Angel One as market references, but this contract does not copy their product patterns. Reject trading-floor urgency, risk gamification, social proof counters, hidden exits, and compensation-led ranking. Validate the proposed goal-first navigation, browsing-before-sign-up hypothesis, and curated-set size with target users before they become fixed product requirements.

## Open Questions and Assumptions

- **[OPEN — blocker for hi-fi pricing]** Advisory fee basis, taxes, billing timing, and counsel-approved user wording.
- **[OPEN — blocker for compliant onboarding UI]** Current RIA registration/entity status, agreement, required disclosures, nominee policy, risk profiling and suitability rules.
- **[OPEN — blocker for market-fall production logic]** Trigger thresholds, authoritative data source/freshness, affected portfolio/goal calculations, and copy approval.
- **[OPEN — product decision]** Brand name/personality and whether the proposed neutral palette is acceptable.
- **[OPEN — UX research]** Whether users can browse/estimate goals before registration; one navigation option versus alternatives; Hindi numeral convention; assisted-mode scope and operating hours.
- **[ASSUMPTION]** MVP goal data and holdings can be linked as needed to show goal progress; provider capabilities and calculation rules remain to be defined.
- **[ASSUMPTION]** App can reconcile external-provider status after app switching and expose a stable reference for pending transactions.
- **[NOTE FOR UX]** Shared goals/family helper capabilities are v1.0, not MVP.
- **[NOTE FOR UX]** Audio explainers are a v1.0 candidate and must not be treated as an MVP dependency.
- **[NOTE FOR UX]** WCAG 2.2 AA is a strategy proposal; PRD requirement is WCAG AA.
