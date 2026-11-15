# UX Strategy: Long-Term Investing Platform for India

*Companion to PRD v1.1 | Prepared by: UX Director | Draft v1.1 — PRD-aligned | 15 November 2026*

**Revision note.** This revision makes the release boundaries explicit, separates PRD commitments from UX hypotheses, and adds safeguards for unapproved fees, RIA claims, personalized advice, stale market data, and status-dependent reassurance. It also aligns family access and roadmap phases to the PRD. The UX contracts in `_bmad-output/planning-artifacts/ux-designs/ux-BMAD-2026-11-15/` carry the screen-level behavior and provisional visual tokens.

## 1. Executive Summary

The PRD defines what we build. This document defines how it should *feel* and *behave*, and why those choices will win.

**Design thesis.** In a market where trading screens are commodities, the winning experience is the one that makes a nervous first-time investor feel safe enough to start and calm enough to stay. We are not designing a trading terminal. We are designing a financial habit.

**North star: the calmest money app in India.**

**Experience promise:** *At every moment you know what is happening, what it costs, and what to do next.*

**Where design decides the business.** Three moments carry most of the commercial outcome in the PRD:

1. **KYC completion.** The biggest drop-off. Every unexplained step costs us a customer.
2. **The first SIP.** The moment of maximum doubt. Clarity here creates the habit.
3. **The first market fall.** The moment most users decide whether to stay. Calm design here protects retention and AUM.

**Five UX differentiators**

| # | Differentiator | What it means in practice |
|---|---|---|
| 1 | Honest pricing UI | The advisory fee and fund costs are shown before commitment, in plain words |
| 2 | Goal-first mental model | Start from the user's goal where suitable; keep fund details and choice available and explain how each option fits the user's completed risk profile |
| 3 | Calm under volatility | Red screens and panic prompts are replaced with context |
| 4 | Hindi-first craft | Written and tested in Hindi, not translated from English |
| 5 | Human backup | A real person, in the user's language, one tap away |

**What we will not do.** No urgency, social-pressure counters, gamified trading, alarm-style loss cues, preselected consent, or hidden exits. The full ethical design charter is in Section 8. Product-specific behaviors below are design hypotheses or proposals unless the PRD explicitly requires them; compliance-sensitive details remain subject to counsel and compliance approval.

**Design readiness gates.** Production fee screens depend on the approved fee model and counsel wording. Regulatory identity and advice flows depend on confirmed RIA status and compliance rules. Market-fall messaging depends on an approved trigger, fresh data, and tested copy. Visual tokens remain provisional until brand and accessibility review.

## 2. Design Problem and Assumptions

**Problem statement.** How might we help a first-time investor in India, often wary of apps, short on jargon, and sometimes sharing decisions with family, complete KYC, start a small SIP, and keep it running through the first market fall?

**Working assumptions to validate (from PRD hypotheses H1 to H5)**

- KYC drop-off is driven by unclear steps and unexplained rejections, not by unwillingness.
- Users distrust apps that push risky products and respond to visible honesty.
- A Hindi interface lifts activation in Tier 2/3 cities.
- Users will accept a clear advisory fee if the value and the fee are both understandable.
- Calm guidance during falls reduces panic exits.

None of these is a fact yet. The research plan (Section 12) exists to confirm or kill each one.

## 3. Users and Contexts of Use

### 3.1 Design implications by persona

| Persona | Core emotion | Design implication |
|---|---|---|
| P1 Aarav, 24, metro | Curious, scared of losing money | Minimal steps, curated choices, instant answers to "what am I buying?" |
| P2 Sunita, 38, Tier 2 | Responsible, cautious, family-minded | Goals first, Hindi, trust cues; family access is a later capability (v1.0) |
| P3 Ramesh, 52, Tier 3 | Wary, low digital confidence | Large text, fewer screens, voice and call-back, helper access |
| P4 Meera, 45 (later) | Time-poor, fragmented | One-view dashboard (v1.0 and beyond) |

### 3.2 Real-world constraints we design for

- **Device:** Android first, including mid-range and lower-memory devices; use about 360dp as a layout test case, not a minimum-device requirement. iOS and web follow Android in the PRD sequence. Performance is a UX feature.
- **Network:** patchy 4G and occasional 3G. Every screen needs loading, retry and offline states.
- **Shared phones:** family members may use one device. Biometric lock and quick logout matter.
- **One-handed use:** primary actions live in the thumb zone.
- **App switching:** UPI and eSign hand users to other apps and back. Return-to-app and "payment pending" states must be flawless.
- **OTP fatigue:** SMS auto-read wherever possible. Never ask for the same OTP twice.
- **Glare and haste:** high contrast and generous touch targets.

## 4. Experience Principles

Each PRD vision principle is translated into design rules that reviewers can check.

| PRD principle | UX principle | Design rules (examples) |
|---|---|---|
| Habit over trades | **Design for the long game** | No trading-style speed cues. Reward continuity (SIP months completed), not activity |
| Plain over clever | **One idea per screen** | One primary action. Reading level around grade 6 to 8. No unexplained terms |
| Honest by default | **Show the cost before the commitment** | Fee, charges and risk appear before the button, never after |
| Local first | **Speak the user's language** | Hindi and English at launch, with equal craft. Lakh and crore formats |
| (UX addition) | **Calm is a feature** | Muted urgency, no alarm colours for market moves, context over numbers |
| (UX addition) | **Never leave them stuck** | Every error offers a fix and a human |
| (UX addition) | **Reversible and forgiving** | Pause, edit and withdraw are easy to find and never penalised |

## 5. Journey-Based Experience Strategy

The emotional curve below guides where we invest design effort.

| Stage | User feeling | Design goal | Key design move |
|---|---|---|---|
| Awareness | Curious, sceptical | Earn a first look | Honest message, no "get rich" language, SEBI-verified partners only |
| Consideration | "Is this safe?" | Prove safety before asking for data | Test browse and goal calculation before sign-up as a hypothesis; show approved registration details and "how we make money" |
| Onboarding / KYC | Impatient, anxious | Make progress visible and failure recoverable | Chapters, time estimates, save-and-resume, plain rejection reasons |
| First investment | Nervous, overwhelmed | Reduce choice, increase understanding | Goal-first flow, 3 curated options, pre-commit sheet |
| Weeks 1 to 4 | "Did it work?" | Confirm and set expectations | Instant confirmation, next debit date, pre-debit reminder, auto-retry |
| Months 2 to 6 | Anxious during dips | Prevent panic exits | Calm market-fall experience, goal-horizon view |
| Months 6 to 12 | Confident | Encourage growth without pressure | Annual step-up nudge tied to income changes |
| Advocacy | Trusting | Let them bring family in when available | Referral and family access are phase-gated to v1.0 (FR-16, FR-19) |

## 6. Information Architecture and Navigation

**Proposed primary navigation (bottom bar, four tabs; validate in concept testing)**

1. **Home:** portfolio summary, goals at a glance, next SIP date, one calm tip
2. **Goals:** create and track goals, on-track status, step-up suggestions
3. **Explore:** curated collections and fund search
4. **Portfolio:** holdings, XIRR, statements, tax reports

**Persistent elements**

- **Language toggle** (Hindi / English) in the header, remembered across sessions
- **"Need help?"** button in the header on every screen, opening chat, call-back or assisted mode
- **Profile** via avatar: KYC status, documents, fee and "how we make money", complaints; family access appears in v1.0 when enabled

**IA rules (design targets to validate)**

- Aim for three taps or fewer from Home to core actions, consistent with the PRD's interaction principle; validate task success and accessibility before treating this as a hard limit.
- Progressive disclosure: simple summary first, detail on demand.
- Search tolerates Hindi, English and Hinglish spellings.
- Equity, IPO and advanced products (v1.0 and later) arrive as new modules inside Explore, not as a redesign.

## 7. Critical Flows: Design Strategy

### 7.1 Onboarding and KYC

**Principle:** value before verification, and chapters instead of a form.

- **Just-in-time sign-up [HYPOTHESIS].** Let users browse, read fund explainers and try a goal calculator before account creation, if product, security and compliance review permits. Ask for a phone number when the user chooses to start onboarding; do not imply an order can be placed before required KYC and suitability steps.
- **Readiness screen.** "Keep these ready: PAN, your Aadhaar-linked phone, your bank account. About 8 minutes."
- **Five short chapters** with a visible progress bar and time left: Identity (PAN), Address (DigiLocker), Bank, Selfie, Sign (eSign). Nominee is collected with a skip-with-declaration option where regulation allows (verify with counsel).
- **Save and resume.** Progress is saved at every step. Users can return via SMS link; WhatsApp reminders only with explicit opt-in.
- **Third-party hand-offs.** DigiLocker and eSign screens are not ours. We prepare users before the hand-off ("You will see a government screen. This is normal.") and handle the return gracefully.
- **Rejection design.** Every rejection states, in plain language, what went wrong and the single next action. Example: "The name on your PAN and bank account are different. Upload a cancelled cheque, or request a call-back."
- **Assisted onboarding.** A call-back agent can guide a user through the flow in Hindi or English.
- **Targets (illustrative, not user-facing promises):** 60% completion and median under 10 minutes as listed in the PRD. Measure by step and cohort; validate the baseline and define whether the timing begins at onboarding or first SIP before using it as an operational target.

### 7.2 First SIP (goal-first)

1. "What are you saving for?" with goal cards (child's education, home, retirement, emergency fund, custom).
2. Amount and time horizon with a simple slider and a monthly figure that updates live.
3. A suggested SIP amount and a short curated set of suitable funds, each with a one-line "who this is for". **Three options is a concept-test starting point, not a product limit**; selection must respect the completed risk profile, suitability rules, available catalogue and user control.
4. **Pre-commit review** (below).
5. Mandate setup (UPI AutoPay or eNACH) with clear explanation of what is being authorised.
6. Confirmation that states the first debit date, the next steps and how to pause.

**Pre-commit review.** Show this information before the user confirms:

- *You pay:* the approved advisory fee and basis, fund expense ratio, and any other applicable charge. Use a clearly labeled placeholder until the fee design, taxes and wording are approved; do not ship illustrative amounts as real prices.
- *Risk in plain words:* the approved risk meter and explanation, and any historical range only when data, period, methodology and compliance-approved disclaimer are defined
- *What happens next:* debit date, how to pause, how to withdraw
- *Who we are:* the applicable registered entity and registration details, plus grievance route, displayed as approved by counsel and compliance. Do not imply registration is active before it is.

### 7.3 SIP failure and recovery

- Reminder two days before debit with the amount and bank.
- On failure, explain the known reason and show a message that matches the confirmed SIP status. Offer supported fixes, such as retrying, choosing another date, or changing the bank.
- Escalation to a human if two attempts fail.
- Track recovery rate as a core UX metric.

### 7.4 The market-fall experience

This is the signature moment of the product.

- **Trigger:** a defined drop in portfolio value or index over a short window. Thresholds to be set with research and compliance.
- **Home screen change:** avoid an alarm-style loss hero. A calm context card may explain verified market movement and show the customer's actual goal horizon and portfolio context. Copy such as "your goal is years away" is shown only when that is true for the selected goal; never imply that a loss is harmless or that recovery is assured.
- **Behaviour:** no alarm colours, no sell prompt, and no push notification designed to amplify fear. Offer a concise, optional explanation in accessible text; audio is a candidate enhancement and must be validated and scheduled against the PRD roadmap.
- **User control:** pause or withdraw remains available and visible. We inform; we never block.
- **Guardrails:** copy is reviewed by compliance. No predictions of recovery. No misleading reassurance. We test that the message reduces panic exits without feeling patronising.

### 7.5 Goals

- Goal cards show a progress ring and a status of "On track" or "Needs attention". Avoid the word "behind".
- Projections appear as a **range**, not a single number, with an honest label.
- Step-up prompts connect to life events (salary change, new year), not arbitrary timers.
- Shared goals and view-only family access are v1.0 capabilities (FR-16), with explicit consent, scoped visibility and revocation. MVP goal views remain private to the account owner.

### 7.6 Support and assisted mode

- A "Need help?" entry point is available on core journeys in the user's chosen language; exact persistent placement should be usability-tested on small screens.
- Options: chat, schedule a call-back, assisted mode where an agent stays on the line while the user completes a step.
- Support never asks for passwords or OTPs. The app says so openly.
- Show a first-response-time promise only after Support Operations has defined and can meet the service level.

### 7.7 Withdrawal

- Easy to find, clear on timing, tax impact and charges before confirmation.
- Withdrawal is not a failure state. Copy is neutral and respectful. A gentle "pause instead?" option appears once, never as a barrier.

## 8. Trust by Design

### 8.1 Trust architecture

| Layer | What the user sees |
|---|---|
| Identity | Correct entity name, applicable SEBI RIA registration details and grievance route on required screens, using counsel/compliance-approved placement and wording; do not imply registration is active before approval. |
| Safety | Biometric lock, plain-language security notes ("We never ask for your OTP or password") |
| Transparency | Fee shown before commitment and in the portfolio/billing view; periodic summaries are a candidate placement; a "How we make money" page |
| Reversibility | Pause and withdraw clearly available |
| Human presence | Named support, call-back, assisted mode |
| Proof | Only compliant, real evidence. Testimonials and performance claims are restricted for advisers, so confirm advertisement rules before using any |

### 8.2 The fee display

The advisory fee is the most sensitive UI element in the product, because rivals offer free execution. It must read as clearly as a price tag:

- Wording: use an approved, fee-design-specific explanation that distinguishes free execution from any fee for planning and guidance. Any rupee-amount example is a content prototype only; do not publish until fee basis, taxes, eligibility and counsel/compliance wording are confirmed.
- Shown at required decision and account moments: onboarding, before commitment, and portfolio/billing. Monthly and annual summaries are candidate placements subject to product and compliance review.
- A "What do I get for this?" explainer is available beside the fee. A fee calculator is a candidate pattern pending product and counsel approval.
- Pricing comprehension is tested directly (Section 12).

### 8.3 Ethical design charter (banned patterns)

- Artificial urgency (timers, "only 2 left", "last chance")
- Social-pressure counters ("X people invested today")
- Pre-ticked consents and bundled add-ons
- Confirm-shaming ("No, I don't want to grow my money")
- Hidden or hard-to-find cancel, pause or withdraw
- Gamified trading (streaks, confetti, leaderboards)
- Alarm colours and flashing for market movement
- Dark-pattern notifications that provoke action

Every design review includes an ethics check against this list. Any exception needs written approval from the UX Director and compliance.

## 9. Language and Content Strategy

**Languages at launch:** Hindi and English, written and tested with native speakers. Language selection is available at onboarding and remains easy to change. Additional regional languages are a v1.0 roadmap item in the PRD, based on usage and readiness.

**Voice and tone:** a trusted elder cousin who works in finance. Warm, direct, never preachy, never salesy. Simple Hindi, not formal "Shuddh" Hindi. Common English words such as SIP, fund and bank stay as they are, with a short Hindi explanation on first use.

**Rules**

- Reading level about grade 6 to 8. One idea per sentence.
- Numbers use the Indian system (â‚¹1,00,000; lakh and crore). Test Western versus Devanagari numerals with users, starting from Western digits as the working default.
- Dates as DD/MM/YYYY. Currency always with â‚¹.
- Every financial term has a tap-to-explain tooltip.
- Error messages say what happened, why, and what to do.

**Microcopy examples (English illustrations; Hindi versions to be written and tested natively)**

| Instead of | Write |
|---|---|
| "Mandate registration failed" | "Your bank did not approve the monthly payment. Try another bank or date." |
| "NAV" | "Price of one unit of the fund today" |
| Generic loss headline | Context based on verified market data and the selected goal actual horizon; never imply recovery or minimize a loss |
| "Expense ratio" | "Yearly cost charged by the fund" |
| "KYC rejected" | "We could not match your name. Here is how to fix it in 2 minutes." |

**Audio and voice (v1.0):** short spoken explainers for key screens, supporting P3 and low-literacy users.

## 10. Visual and Interaction Design Direction

**Mood:** calm, warm, credible. Closer to a trusted bank branch than a trading floor.

- **Colour.** A deep, steady base colour with warm neutral backgrounds. Avoid the red-green binary for performance. Show direction with an arrow, a sign and text, not colour alone. Reserve red for errors that need action, never for market losses.
- **Typography.** A highly legible family with excellent Devanagari support and matched Latin styles (for example, Noto Sans family or a comparable pair). Body text at least 16sp. Tabular figures for amounts. Devanagari needs extra line height, so layouts are tested in Hindi first.
- **Imagery and illustration.** Real, regional, human. Avoid rupee-rain, rockets and stock-photo traders.
- **Charts.** Simple line charts with minimal axes. Goal projections as ranges. No candlesticks in the MVP.
- **Motion.** Subtle and purposeful. A quiet acknowledgement on completion is fine; celebration of risk-taking is not. Respect reduced-motion settings.
- **Density.** One primary action per screen, generous spacing, clear hierarchy.
- **Dark mode.** Supported from launch, with the same contrast standards.

## 11. Accessibility and Inclusion

- WCAG AA is the PRD baseline. WCAG 2.2 AA is the proposed design target, subject to product acceptance and verification against applicable requirements; test critical flows in both languages.
- Touch targets at least 48dp. Text scales to 200% without breaking layouts.
- Contrast of at least 4.5:1 for text. Never rely on colour alone.
- Full TalkBack support, including Hindi labels.
- Low-literacy aids: icons with labels, audio explainers (v1.0), assisted mode.
- Low-bandwidth and low-RAM mode: skeleton loading, light images, a small app size target, graceful offline states.
- Inclusive imagery and examples across gender, age, region and occupation.
- Family helper access designed with explicit consent and clear boundaries (view-only).

## 12. Research and Validation Plan

| Phase | Timing (aligned to PRD) | Activities | Output |
|---|---|---|---|
| Discovery | Months 0 to 2 | Contextual interviews and home visits in Tier 2/3 cities, competitor usability benchmarking (onboarding time and friction), app-review mining, Hindi card sorting | Validated personas and journey maps, prioritised problem list |
| Concept | Months 2 to 4 | Concept tests: goal-first versus fund-first flow, fee-display comprehension tests, terminology tests in Hindi and English, clickable prototype tests of KYC | Chosen concepts, fee-display pattern, content glossary |
| Build | Months 4 to 8 | Sprint usability tests (5 users per language per round), accessibility audits, unmoderated task tests on real devices and slow networks | Fixes before each release |
| Closed beta | Months 8 to 10 | Funnel analytics, diary study of the first SIP months, simulated market-fall tests | Launch readiness and tuning |
| Post-launch | Continuous | A/B tests with guardrails, support-ticket mining, quarterly usability benchmarks | Iteration backlog |

**Test rules.** Always include Tier 2/3 and first-time participants. Test on low-end Android devices. Test in Hindi and English with equal rigour.

## 13. UX Measurement Framework

Targets are illustrative and need calibration against baseline research.

| Area | Metric | Illustrative target | Ties to PRD |
|---|---|---|---|
| Onboarding | KYC completion; drop-off by step; unassisted completion rate | 60%; tracked per step; 50%+ | Activation |
| Speed | Median time to first SIP | Under 10 minutes | Activation |
| Comprehension | Share of testers who can explain the fee and the risk after viewing | 80%+ | Trust |
| Usability | SUS score; task success on core tasks | 75+; 90%+ | Satisfaction |
| Effort | Customer Effort Score on support and recovery flows | Improving each release | Retention |
| Recovery | SIP failure recovery rate | 60%+ | Habit |
| Behaviour | Panic-exit rate after a market fall, with and without the calm experience | Lower than control | Retention and AUM |
| Reach | Share of sessions in Hindi; Tier 2/3 activation | Tracked | Reach |
| Support | Contacts per 1,000 new users; first-response time | Tracked; set response target after Operations defines its service level | Trust |
| Accessibility | Audit pass rate; TalkBack task success | 100% of critical flows | Inclusion |

**Experiment guardrails.** We do not A/B test urgency tactics. Tests that touch risk, fee or market-fall messaging need compliance sign-off. A "win" that raises conversion but lowers comprehension or increases complaints is a loss.

## 14. Design System and Operations

- **Foundations:** design tokens for colour, type, spacing, elevation and motion, with light and dark themes and language-aware typography.
- **Core components:** buttons, inputs, OTP field, progress stepper, goal card, fund card with risk meter, pre-commit sheet, status banners (success, pending, failed), empty and error states, bottom sheet, language toggle, help entry point, tooltip, chart components.
- **Content design library:** approved terms, microcopy patterns, and legal and disclosure snippets reviewed by compliance.
- **Localisation-ready:** components tolerate longer Hindi strings and taller Devanagari lines.
- **Governance:** design reviews at three gates (concept, hi-fi, pre-release), each with the ethics check, an accessibility check and a compliance check for any financial copy.
- **Indicative design team for MVP:** UX Director (or Head of Design), two product designers, one Hindi and English content designer, one UX researcher, one visual and design-system designer, with access to an accessibility specialist and a compliance partner.

## 15. Design Roadmap (aligned to the PRD timeline)

| Months | Focus | Deliverables |
|---|---|---|
| 0 to 2 | Research and strategy | Discovery findings, validated personas, experience principles, content glossary |
| 2 to 4 | Concept and foundations | IA, wireframes, clickable KYC and first-SIP prototypes, visual direction, design system v0.1, fee-display pattern |
| 4 to 8 | Design and build support | Hi-fi screens, full component library, accessibility audits, Hindi and English content, motion specs |
| 8 to 10 | Beta and polish | Usability fixes, market-fall tuning, launch kit |
| 10-16 | v1.0 | Premium advice, family access, aggregation, referral, additional regional languages, equity delivery and IPOs through approved partner/entity arrangements |
| 16-24 | v1.5 | Advice-led FDs, bonds, NPS and digital gold, subject to approved structure; other roadmap items per PRD |
| 24+ | v2.0 | Margin funding and lending through a separate regulated partner, US stocks and advisory expansion, subject to approvals |

Registration timing for the RIA licence is on the critical path. Design work in the first four months is not blocked by it, so we use that window to research and prototype.

## 16. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Hindi feels translated, not native | Lost trust and activation | Native content designer, user-tested glossary, Hindi-first layout testing |
| Calm messaging feels paternalistic or misleading | Backlash, compliance risk | Always show user control, compliance review, test for perceived honesty |
| Fee not understood or resented | Low conversion | Comprehension testing, "what you get" explainer, free tier option |
| Third-party screens (DigiLocker, eSign, UPI) break flow | KYC and payment drop-off | Pre-hand-off preparation, robust return handling, monitoring per vendor |
| Compliance wording reduces clarity | Confusing screens | Pre-approved plain-language disclosure patterns, early counsel involvement |
| Poor performance on low-end Android | Abandonment | Device lab, performance budgets, low-bandwidth mode |
| Design debt from rushing to launch | Inconsistent experience | Design system from day one, gate reviews |

## 17. Open Decisions

1. Brand name and personality, which drives tone and visual identity. Any neutral visual tokens in the UX design contract are provisional placeholders for validation, not a chosen brand palette.
2. Final fee design and how it is displayed (depends on counsel and pricing research).
3. Market-fall trigger thresholds and approved wording.
4. Western versus Devanagari numerals for Hindi users.
5. Scope of assisted mode (call-back only, or live screen guidance) and WhatsApp usage with consent.
6. Whether nominee capture can be deferred in the MVP flow, subject to regulation.
7. Exact regulatory display requirements (registration number, disclosures, advertising limits).

## 18. Design Review Checklist (use at every gate)

- Does the screen have one clear primary action?
- Is every cost and risk visible before the commitment?
- Can a first-time Hindi-speaking user understand every sentence?
- Is there a fix and a human for every error?
- Does it pass the ethical design charter?
- Does it work on a low-end Android over a slow network?
- Is it accessible (contrast, targets, screen reader, text scaling)?
- Has compliance reviewed any financial wording?

*This is a design strategy draft, not legal or financial advice. Regulatory display, advertising and disclosure requirements must be confirmed with qualified counsel.*

