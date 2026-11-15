**PRODUCT REQUIREMENTS DOCUMENT**

**Long-Term Investing Platform for India**

Working title: \[Product Name TBD\]

*Vision: To make long-term investing a habit for every Indian family: simple, trustworthy, and in their own language.*

| **Item**                       | **Detail**                                                                                                        |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Document status**            | Draft v1.1 for review (updated with licensing and language decisions)                                             |
| **Date**                       | 14 November 2026                                                                                                  |
| **Revenue model (decided)**    | Model A: direct plans with a transparent advisory fee; Model B (personalised fee-only advisory) as a premium tier |
| **Licensing route (decided)**  | SEBI Registered Investment Adviser (non-individual), fee-only                                                     |
| **Launch languages (decided)** | Hindi and English                                                                                                 |
| **Open items**                 | Counsel confirmation of RIA structure, fee design, execution rails (see Section 2)                                |
| **Market data as of**          | October 2026 (NSE) and FY26 company disclosures                                                                   |

# 1. Executive Summary

This document defines the requirements for a mobile-first investing platform for Indian retail investors, informed by analysis of Groww, Zerodha, INDmoney and Angel One. The product is not a clone of a discount broker. It is built around one idea: customers who invest regularly for years are the most durable source of both customer wealth and company revenue.

### Why this direction

- Basic trading is a commodity. Free or near-free delivery trading is offered by every major player, so a new entrant cannot win on price or features alone.

- The market is consolidating. Groww, Angel One and Zerodha hold nearly 60% of NSE active clients, and total active clients fell in FY26.

- Zerodha's profit relies heavily on F&O, which regulators and tax changes are squeezing. That model is neither copyable nor safe to copy.

- SEBI's chief expects the next wave of retail broking to come from smaller towns and villages, which supports a local-language, Tier 2/3 focus.

### Product vision

**To make long-term investing a habit for every Indian family: simple, trustworthy, and in their own language.**

Supporting line: "We grow when our customers' wealth grows."

### Vision principles (used to accept or reject features)

1.  **Habit over trades.** Build for the 5-year SIP, not the daily trade.

2.  **Plain over clever.** No jargon and no dark patterns.

3.  **Honest by default.** Every charge and risk is shown before the user commits.

4.  **Local first.** Language, payment habits and support that fit Tier 2/3 users.

### The profit logic

Trust, then first SIP, then habit, then growing assets under management (AUM), then recurring revenue, then relevant cross-sell, then profit. Each step is measurable (Section 15).

# 2. Decisions, Assumptions and Open Items

## 2.1 Decided

| **Decision**         | **Outcome**                                                                                                       | **Rationale**                                                                                                                                  |
|----------------------|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Vision**           | Long-term investing habit for every Indian family                                                                 | Durable revenue, low regulatory risk, underserved segment                                                                                      |
| **Revenue model**    | Model A: direct plans plus a transparent advisory fee. Model B (personalised fee-only advisory) as a premium tier | Fits "we grow when you grow"; avoids commission conflicts that undermine trust                                                                 |
| **Licensing route**  | SEBI Registered Investment Adviser (RIA), non-individual entity, fee-only                                         | Only route consistent with Model A. An MFD registration earns commission on regular plans, which conflicts with the model and the trust vision |
| **Launch languages** | Hindi and English                                                                                                 | Covers the primary personas; lowest cost and risk. Add regional languages from v1.0 based on usage data                                        |
| **Primary personas** | First-time investors (metro) and family finance managers (Tier 2/3)                                               | Matches vision; active F&O traders are out of scope                                                                                            |
| **F&O**              | Out of scope for MVP and v1.0                                                                                     | Regulatory pressure; conflicts with the habit vision                                                                                           |

## 2.2 What the RIA decision means, and remaining open items

> **IMPORTANT: Consequences of choosing the RIA route**
>
> 1. Fee-only. An RIA cannot receive commission. Execution in direct plans is permitted under the RIA code, but no consideration may be taken for the execution service. So the fee we charge must be for planning, goal tracking and guidance, with execution itself free. VERIFY the exact wording with counsel.
>
> 2. Product breadth. Equity broking, margin funding and commission-based distribution (FDs, bonds, insurance) conflict with an RIA fee-only model. These must go through a partner or a separate entity, or be offered as advice only. The roadmap in Section 17 reflects this.
>
> 3. Rules are changing. SEBI has reformed RIA eligibility several times (net worth, qualifications, experience, fee limits, corporatisation threshold). Sources disagree on whether net worth is now replaced by a deposit. Confirm current rules before applying.
>
> 4. Core obligations: certified principal officer and associated persons, RIA-client agreement, risk profiling and suitability, disclosures, fee limits and record keeping. Product requirements FR-25 and Section 12 cover these.
>
> This is not legal advice. Engage securities-law counsel before applying.

| **#** | **Open item**                    | **Options / detail**                                                                                                                            | **Owner / due**                         |
|--------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| 1      | Confirm RIA structure            | Entity type (non-individual), principal officer qualification and NISM certification, deposit or net worth, fee limits, client agreement format | Founder + counsel, before build starts  |
| 2      | Fee design                       | Flat annual subscription \| small % of AUM (capped, within RIA fee limits) \| hybrid with a free tier. Validate with pricing research.          | Product + finance                       |
| 3      | Execution rails for direct plans | Routes available to an RIA to execute direct-plan orders (for example BSE StAR MF or MFU through a permitted arrangement)                       | Tech + counsel                          |
| 4      | Structure for post-MVP products  | Partner broker or separate entity for equity delivery, margin funding and commission-based products                                             | Founder + counsel, before v1.0 planning |
| 5      | Product name and brand           | Trust-led, non-"get rich" positioning                                                                                                           | Founder + brand                         |
| 6      | Funding and runway               | Plan for losses in the first 2-3 years; RIA registration time sits on the critical path                                                         | Founder + finance                       |

# 3. Market Analysis

## 3.1 Market size and structure

| **Indicator**                     | **Value**                                      | **Source / note**          |
|-----------------------------------|------------------------------------------------|----------------------------|
| **Groww active NSE clients**      | ~1.37 crore (29.4% share), Oct 2026            | NSE data via press reports |
| **Angel One active NSE clients**  | ~69.98 lakh, Oct 2026 (now #2)                | NSE data via press reports |
| **Zerodha active NSE clients**    | ~67.59 lakh, Oct 2026 (now #3)                | NSE data via press reports |
| **Industry active clients**       | ~4.59 crore, Oct 2026 (down 0.5% in the month) | Press reports on NSE data  |
| **FY26 change in active clients** | Fell from 4.92 crore to 4.57 crore             | Press reports on NSE data  |
| **Top-3 concentration**           | Nearly 60% of NSE active clients               | Press reports on NSE data  |

*Note: "active" means a client who has traded on the NSE at least once in the preceding 12 months. It under-counts SIP-only mutual fund investors, which is the segment this product targets. Segment sizing for SIP investors needs primary research.*

## 3.2 Key takeaways

- Do not compete head-on for traders. The incumbents are entrenched and F&O economics are weakening.

- Growth is in first-time investors, Tier 2/3 cities, vernacular users and long-term SIP investors.

- Trust is a real differentiator in a market where cross-selling and speculation prompts are common.

## 3.3 Regulatory environment

| **Regulation / change**                                                                                       | **Implication for the product**                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SEBI (Stock Brokers) Regulations, 2026, notified 7 Jan 2026                                                   | Stronger governance, risk profiling and suitability expectations for broker-type businesses                                                                                    |
| Retail algo trading framework, fully mandatory from 1 Apr 2026                                                | Relevant only if an API/algo product is offered later (out of scope now)                                                                                                       |
| Higher STT on F&O and 50% cash margin rule (from 1 Apr 2026)                                                  | Further reduces F&O profitability; supports staying out of F&O                                                                                                                 |
| SEBI enforcement on unregistered advisers, misleading finfluencers, verified labels and validated UPI handles | Marketing must use SEBI-verified partners only; display registration details clearly                                                                                           |
| SEBI (Investment Advisers) Regulations, 2013, as amended (reformed in 2024-2025)                              | Governs our chosen RIA licence: qualifications, client agreement, fee limits, conduct and segregation. Eligibility rules have changed recently, so verify current requirements |
| Technical glitch and cyber-resilience frameworks; CERT-In incident reporting; DPDP Act                        | Drives non-functional requirements (Section 12). Verify current obligations with counsel.                                                                                      |

# 4. Competitor Analysis

|                         | **Groww**                                                              | **Zerodha**                                   | **INDmoney**                                               | **Angel One**                                         |
|-------------------------|------------------------------------------------------------------------|-----------------------------------------------|------------------------------------------------------------|-------------------------------------------------------|
| **Positioning**         | Simple, beginner-friendly all-in-one                                   | Low-cost, reliable, trader and education led  | "Super money app": track plus invest                       | Wide-reach discount broker with research and advisory |
| **Scale**               | #1 by active clients                                                  | #3 and losing clients                        | Reported 1 crore+ registered users                         | #2 by active clients                                 |
| **Strengths**           | UX, brand, MF plus stocks                                              | Reliability, Kite, Coin, Varsity, ecosystem   | Net-worth tracker, US stocks, family view, free tax filing | Distribution, research, large registered base         |
| **Weaknesses**          | Fewer pro tools                                                        | Dated UX; no aggregation; F&O-dependent       | Breadth risks cross-selling of unsuitable products         | Upselling; revenue hit by F&O curbs                   |
| **Delivery brokerage**  | Sources conflict (zero vs Rs 20 or 0.1%). VERIFY on Groww pricing page | Rs 0                                          | n/a (INDstocks separate)                                   | Rs 0                                                  |
| **Intraday / F&O**      | Rs 20 per order                                                        | Rs 20 or 0.03%                                | Via INDstocks                                              | Rs 20 flat (varies by plan)                           |
| **Account maintenance** | Rs 0                                                                   | Rs 300/yr (after first year per some sources) | Rs 0                                                       | Rs 0                                                  |

*Pricing changes often. Re-verify every competitor figure on the official site before publishing or using in marketing.*

## 4.1 White space

- Trust and transparency: an app known for not pushing risky products.

- Vernacular-first experience for Tier 2/3 and first-time investors.

- Goal-based, habit-oriented investing for salaried families.

- Honest guidance during market falls, when users are most likely to panic-exit.

# 5. Revenue Model and Profitability

## 5.1 What Zerodha teaches

- Zerodha's FY26 net profit was about Rs 4,283 crore on broadly flat revenue (reported at roughly Rs 8,500 crore; one outlet gives a lower figure, so treat revenue as approximate).

- Broking was about 44% of FY26 revenue and interest income about 32%; F&O was about 85% of its broking revenue. Broking revenue fell about 10% in FY26.

- It took about 16 years of scale and low costs to reach these margins. A new entrant should plan for losses first and not expect Zerodha-like margins early.

## 5.2 Chosen model: Model A, under an RIA licence, with Model B as a premium tier

| **Element**                         | **Description**                                                                                                                                                                                                                                                                             | **Status**       |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| **Core: direct mutual funds**       | Zero commission on funds. Execution in direct plans is free. Users always see exact fund charges.                                                                                                                                                                                           | MVP              |
| **Advisory fee (Model A)**          | A transparent fee for planning, goal tracking and guidance, not for execution. Design options: flat annual subscription, small % of AUM (capped), or hybrid with a free tier below an AUM threshold. Must stay within RIA fee limits. Illustrative only; validate through pricing research. | MVP (design TBD) |
| **Premium advisory tier (Model B)** | Personalised fee-only planning and portfolio advice. The RIA licence enables this from the start, so it can launch in v1.0 rather than "later".                                                                                                                                             | v1.0             |
| **Equity delivery**                 | Cannot sit under the RIA licence. Offer through a partner broker or a separate entity. Fee structure TBD.                                                                                                                                                                                   | v1.0 via partner |
| **Margin funding, lending**         | Separate regulated partner or entity. Not under the RIA.                                                                                                                                                                                                                                    | v2.0, TBD        |
| **FDs, bonds, insurance**           | Commission-based distribution conflicts with the fee-only model. Offer as advice with execution through direct or partner routes, or via a separate entity.                                                                                                                                 | v1.5, TBD        |
| **F&O brokerage**                   | Not planned.                                                                                                                                                                                                                                                                                | Out of scope     |

## 5.3 Fee principles (trust requirements)

- Execution is free. The fee pays for planning and guidance, and says so.

- The fee is shown in plain language before the first purchase and in the portfolio view.

- No fee on market-fall actions such as pausing a SIP.

- Never recommend a product because it pays the company more. Under an RIA there is no commission to be tempted by.

- Publish a simple "how we make money" page.

## 5.4 Unit economics (to be modelled)

Revenue per user per year is approximately: advisory fee income, plus later fee income on AUM, plus cross-sell margin. Costs include customer acquisition, KYC and payments, support, technology and compliance. A financial model with real assumptions (users, average SIP size, retention, fee design, CAC) is required before fundraising. The success metrics in Section 15 are the inputs to that model.

# 6. User Research Plan

No primary research has been done. The hypotheses below must be validated before the build is locked.

| **Method**                  | **Sample**                                            | **Goal**                                                                                   |
|-----------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **In-depth interviews**     | 25-30 across personas, including Tier 2/3             | Jobs to be done, trust barriers, language preference, how decisions are made in the family |
| **Survey**                  | 500+                                                  | Segment size, willingness to pay an advisory fee, willingness to switch                    |
| **App-store review mining** | 5,000+ reviews of Groww, Zerodha, INDmoney, Angel One | Pain points: outages, support, KYC delays, upselling                                       |
| **Usability tests**         | 10 on competitor flows                                | Onboarding drop-off points                                                                 |
| **Pricing research**        | 100+                                                  | Acceptable fee level and structure for Model A                                             |

| **ID** | **Hypothesis**                                                                                                                                    | **How to test**                     |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| H1     | First-time users abandon KYC because steps and rejections are unclear.                                                                            | Funnel analysis in beta; interviews |
| H2     | Users distrust apps that push F&O or unsuitable products.                                                                                         | Interviews; review mining           |
| H3     | A Hindi UI materially increases activation in Tier 2/3.                                                                                           | A/B test Hindi vs English in beta   |
| H4     | Users will accept a clear advisory fee on direct plans in return for planning, transparency and guidance, given that rivals offer execution free. | Pricing research; fake-door tests   |
| H5     | Calm in-app guidance during market falls reduces panic exits.                                                                                     | Cohort comparison in beta           |

# 7. User Personas

| **Persona**                     | **Profile**                                                                              | **Goals**                                | **Pain points**                                       | **Needs**                                                              |
|---------------------------------|------------------------------------------------------------------------------------------|------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------|
| **P1: Aarav, 24 (Primary)**     | First-time investor, salaried, metro, Rs 40k/month income                                | Start small (Rs 500 SIP), build wealth   | Fear of loss; jargon; too many choices                | 5-minute onboarding, curated funds, plain-language explanations        |
| **P2: Sunita, 38 (Primary)**    | Family finance manager, Tier 2 city, holds FDs, LIC, a few funds; prefers Hindi/regional | Child's education, home, family security | Distrust of apps; language barrier; spouse co-decides | Goal planner, vernacular UI, trust signals, human support, family view |
| **P3: Ramesh, 52 (Secondary)**  | Small-town business owner, savings in FDs and gold                                       | Beat inflation without risk of loss      | Low digital confidence; relies on a trusted person    | Assisted mode, voice/call-back help, helper access for a relative      |
| **P4: Meera, 45 (Later, v1.5)** | Affluent consolidator, assets across banks, brokers, NPS                                 | One view of all assets                   | Fragmentation                                         | Net-worth aggregation, advice                                          |
| **Not targeted: Rohan, 29**     | Active F&O trader                                                                        | Speed, leverage                          | n/a                                                   | Out of scope for MVP and v1.0                                          |

# 8. User Journey

## 8.1 Primary journey: Aarav (P1), first-time investor

| **Stage**                      | **What the user does**                                    | **Feeling and risk**                                        | **Product response**                                                            | **Metric**                         |
|--------------------------------|-----------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------|
| **1. Awareness**               | Sees a friend's referral or short video on starting a SIP | Curious but wary; low trust in apps                         | Honest messaging; no "get rich" claims; SEBI-verified partners only             | Install rate                       |
| **2. Consideration**           | Browses the app before signing up                         | "Is this safe?" Risk of early PAN request                   | Browse first; show registration, fund protection, charges and how we make money | Browse-to-signup rate              |
| **3. Onboarding / KYC**        | OTP, PAN, DigiLocker, selfie, bank link, eSign            | Impatient; biggest drop-off point; rejection with no reason | Progress bar, save-and-resume, instant reason and fix for rejections            | KYC completion; time taken         |
| **4. First investment**        | Chooses a fund and sets a Rs 500 SIP                      | Nervous; too many choices                                   | Curated list, risk meter, "who is this for", pre-commit charge screen           | Time to first SIP                  |
| **5. Settling in (weeks 1-4)** | First SIP debit                                           | "Did it work?" Failed debit risk                            | Instant confirmation, pre-debit reminder, auto-retry                            | First-debit success rate           |
| **6. Habit (months 2-6)**      | Sees small gains, then a market dip                       | Anxious; panic-exit risk                                    | Calm market-fall message, no push to act, goal-progress view                    | SIP continuation; exits after dips |
| **7. Growth (months 6-12)**    | Raises SIP with salary                                    | Confident; may forget to step up                            | Annual step-up nudge, on-track view                                             | Step-up adoption; AUM per user     |
| **8. Expansion and advocacy**  | Adds goals, invites family                                | Trusting; dislikes feeling upsold                           | Suggest only relevant products; family referral                                 | Referrals; cross-sell acceptance   |

## 8.2 Variant journey: Sunita (P2), Tier 2 vernacular user

| **Stage**            | **What is different**                                                 | **Product response**                                  |
|----------------------|-----------------------------------------------------------------------|-------------------------------------------------------|
| **Awareness**        | Trust comes from family, local advisers and regional-language content | Regional content, community and employer partnerships |
| **Onboarding**       | Prefers Hindi; unsure about eSign and photos                          | Full vernacular flow, voice help, call-back           |
| **First investment** | Thinks in goals, not funds                                            | "Child's education in 12 years" flow selects the SIP  |
| **Habit**            | Spouse often co-decides                                               | Family view-only access, shared goal progress         |
| **Support**          | Wants to talk to a person                                             | Vernacular call-back and assisted mode                |

## 8.3 Moments that matter

1.  **KYC rejection:** explaining why and how to fix it keeps the user.

2.  **First failed SIP debit:** smooth recovery builds trust; a bad experience causes churn.

3.  **First market fall:** calm guidance is where the habit vision is won or lost.

4.  **Support request:** a fast answer in the user's language is the strongest trust signal.

5.  **Withdrawal:** an easy, clear withdrawal builds trust and encourages reinvestment.

# 9. Strategy

**Positioning:** The investing app you can trust: simple, goal-based and in your language.

## 9.1 Strategic wedge

Goal-based SIP and mutual fund investing with a vernacular experience for first-time and Tier 2/3 investors. Not pursued: trader tools (against the vision) and net-worth-first positioning (competes directly with INDmoney).

## 9.2 Go-to-market

- Family and friend referral loops with rewards tied to continued SIPs, not just signups.

- Regional-language educational content and partnerships with employers, colleges and cooperatives.

- SEBI-verified finfluencers only; no performance promises.

- Assisted onboarding via call-back for users who need help.

## 9.3 Licensing and regulatory route

> **DECIDED: SEBI Registered Investment Adviser (non-individual), fee-only**
>
> Consistent with Model A and the trust vision. Details of eligibility, deposit or net worth, and fee limits to be confirmed with counsel (Section 2.2).

| **Route considered**                        | **Assessment**                                                                                                                                                               | **Decision**     |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| **SEBI Investment Adviser (RIA), fee-only** | Fits Model A and Model B; clear trust story. Registration and conduct obligations; cannot earn commission; broking and commission products need a partner or separate entity | Chosen           |
| **MFD (AMFI ARN) only**                     | Light and fast, but earns on regular plans only. Conflicts with Model A and the trust vision                                                                                 | Rejected         |
| **Partner with a licensed broker**          | Right way to offer equity delivery later without breaching RIA separation                                                                                                    | Planned for v1.0 |
| **Full broker plus DP**                     | Capital-heavy and conflicts with fee-only advisory in one entity                                                                                                             | Not planned      |

*Ask counsel to confirm how the RIA entity and any future broker/distribution entity must be separated.*

# 10. Non-Negotiable Features

Without these, the product cannot launch or cannot be trusted.

### Regulatory and trust

- SEBI-compliant KYC (PAN, Aadhaar/DigiLocker, KRA/CKYC, eSign)

- Segregation of client funds and securities, with clear disclosures

- Grievance redressal (SCORES/ODR visibility; resolution within the regulatory timeline)

- Two-factor authentication, device binding and audit trails

- Risk profiling and suitability checks

- RIA-client agreement, fee disclosure and e-consent at onboarding

- Pre-commit screen showing all charges, the advisory fee and the risk

### Core investing

- Direct mutual funds with SIP (from Rs 100-500), lumpsum, switch, SWP

- Payments: UPI, net banking, mandates (UPI AutoPay / eNACH) and withdrawals

- Portfolio view with returns (XIRR), holdings and transaction history

- Statements and tax reports (capital gains)

- Notifications for orders, SIP debits and failures

### Habit and experience (specific to this vision)

- Hindi and English UI and support

- SIP failure recovery, step-up and pause/resume

- Goal planner with progress tracking

- Calm market-fall guidance

- Human support (chat, call-back, assisted mode)

# 11. Functional Requirements

| **ID** | **Module**                | **Requirement**                                                                                                                                                          | **Priority** |
|--------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| FR-01  | Language                  | Hindi and English onboarding, UI, notifications and support at launch; additional languages from v1.0 based on usage data                                                | P0           |
| FR-02  | Onboarding / KYC          | Mobile OTP, PAN verification, DigiLocker Aadhaar, bank penny-drop, selfie/liveness, eSign, nominee; save-and-resume; clear rejection reasons                             | P0           |
| FR-03  | Profile                   | Plain-language risk profiling and suitability rating                                                                                                                     | P0           |
| FR-04  | Mutual funds              | Curated lists, filters, fund detail with risk meter and "who is this for"; one-time and SIP orders from Rs 100-500; direct plans                                         | P0           |
| FR-05  | SIP recovery              | Pre-debit reminder, auto-retry, alternate date, recovery prompts                                                                                                         | P0           |
| FR-06  | SIP flexibility           | Step-up, pause and resume without penalty                                                                                                                                | P0           |
| FR-07  | Goals                     | Goal creation, recommended SIP, progress tracking, on-track indicator                                                                                                    | P0           |
| FR-08  | Transparency              | Pre-commit screen: advisory fee, fund expenses, risk, what could happen                                                                                                  | P0           |
| FR-09  | Market-fall guidance      | Calm in-app message during sharp falls; no prompt to act; goal-progress context                                                                                          | P0           |
| FR-10  | Payments                  | UPI, net banking, mandates, status tracking, withdrawals                                                                                                                 | P0           |
| FR-11  | Portfolio and reports     | Holdings, XIRR, asset allocation, statements, capital gains reports                                                                                                      | P0           |
| FR-12  | Notifications             | Push, SMS and email for orders, SIP debits, failures and KYC status                                                                                                      | P0           |
| FR-13  | Support                   | Chat, vernacular call-back, assisted mode, ticket tracking, human escalation                                                                                             | P0           |
| FR-14  | Fee management            | Advisory fee calculation within RIA fee limits, display, billing and invoices                                                                                            | P0           |
| FR-15  | Admin / Ops               | KYC review, reconciliation, compliance dashboards, complaint management, audit logs                                                                                      | P0           |
| FR-16  | Family access             | Nominee/helper view-only access for a trusted relative; shared goals                                                                                                     | P1           |
| FR-17  | Equity delivery           | Via partner broker or separate entity (not under the RIA licence): quotes, buy/sell delivery orders, order status                                                        | P1           |
| FR-18  | IPO                       | Browse, apply via UPI, allotment status                                                                                                                                  | P1           |
| FR-19  | Referral                  | Invite and reward tied to continued SIPs                                                                                                                                 | P1           |
| FR-20  | Aggregation               | Account Aggregator link for external holdings and net worth                                                                                                              | P1           |
| FR-21  | Advisory tier (Model B)   | Personalised fee-only planning and advice, enabled by the RIA licence                                                                                                    | P1           |
| FR-22  | Other assets              | FDs, bonds, NPS, digital gold: advice-led; commission-based products only via a separate entity                                                                          | P2           |
| FR-23  | US stocks                 | International investing (LRS)                                                                                                                                            | P2           |
| FR-24  | F&O, advanced charts, API | Not planned                                                                                                                                                              | Out of scope |
| FR-25  | RIA compliance            | Client agreement and e-consent, risk profile and suitability records, fee disclosure, advice audit trail, record retention, principal officer and certification tracking | P0           |

# 12. Non-Functional Requirements

| **Category**                | **Requirement**                                                                                                                                                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Performance**             | Cold start under 3 s on mid-range Android; order or SIP placement confirmation under 2 s; quote refresh under 1 s (where equity is offered)                                                                                                             |
| **Availability**            | 99.9% or better during market hours (9:00-15:30 IST); disaster recovery with defined RTO/RPO as required by SEBI frameworks                                                                                                                             |
| **Scalability**             | Handle 10x spikes (for example market crashes, SIP dates, IPO days)                                                                                                                                                                                     |
| **Security**                | Encryption in transit and at rest, 2FA, device binding, secrets management, regular VAPT, security monitoring                                                                                                                                           |
| **Compliance**              | SEBI (Investment Advisers) Regulations (client agreement, suitability, disclosures, fee limits, record keeping), cyber-resilience requirements, CERT-In incident reporting, DPDP Act data handling, records retention as mandated. VERIFY with counsel. |
| **Privacy**                 | Consent management, data minimisation, user data export and deletion                                                                                                                                                                                    |
| **Reliability**             | Idempotent payments and orders, reconciliation jobs, graceful degradation                                                                                                                                                                               |
| **Accessibility and reach** | Works on low-RAM Android, low-bandwidth mode, large-text mode, WCAG AA, voice/assisted options                                                                                                                                                          |
| **Localisation**            | Hindi and English at launch; architecture supports adding languages; Rs formatting, IST                                                                                                                                                                 |
| **Observability**           | Centralised logging, tracing, real-time alerts and audit trails                                                                                                                                                                                         |

# 13. Interactive Platform and Interface

**Platforms:** Android first (largest share of Indian retail users), then iOS and web.

**Design principles:** calm, not casino-like; plain language; no gamified risk-taking; disclosures in context; thumb-friendly; invest in three taps or fewer after onboarding.

## 13.1 Key screens

| **Screen**                  | **Purpose**                           | **Key elements**                                                   |
|-----------------------------|---------------------------------------|--------------------------------------------------------------------|
| **Language and welcome**    | Set language first (Hindi or English) | Language picker, SEBI registration and "how we make money" link    |
| **Onboarding / KYC wizard** | Complete KYC with minimal friction    | Progress bar, save-and-resume, help button, rejection reasons      |
| **Home**                    | Daily view                            | Portfolio summary, goals, next SIP date, calm tips                 |
| **Explore**                 | Find funds                            | Curated collections ("starter", "tax-saving"), filters, search     |
| **Fund detail**             | Informed choice                       | Plain summary, risk meter, "who is this for", charges, chart       |
| **Order / SIP flow**        | Commit with confidence                | Amount, advisory fee and charges breakup, risk note, confirmation  |
| **Goals**                   | Plan outcomes                         | Goal setup, projected vs target, on-track status                   |
| **Market-fall screen**      | Reduce panic exits                    | Calm message, context, goal progress, option to pause SIP (no fee) |
| **Portfolio and reports**   | Review and tax                        | Holdings, XIRR, statements, capital gains                          |
| **Profile and support**     | Help and trust                        | KYC status, documents, call-back, complaints, family access        |

Interaction features: biometric login, dark mode, home-screen widgets, deep links, guided tours, "explain this in simple words" tooltips and voice help.

# 14. Technical Feasibility

**Verdict:** feasible with a build-plus-partner approach. Licensing and compliance effort will outweigh engineering effort.

| **Layer**              | **Approach**                                                                                       |
|------------------------|----------------------------------------------------------------------------------------------------|
| **Client apps**        | React Native or Flutter; Android first; multi-language framework                                   |
| **Backend**            | Microservices (Node, Java or Go), Kubernetes, managed Postgres plus Redis, event streaming (Kafka) |
| **Mutual fund rails**  | BSE StAR MF or MFU platform, RTA integrations, AMC data feeds                                      |
| **Equity (v1.0)**      | Partner broker APIs or an OMS/RMS vendor; licensed market data via vendor                          |
| **KYC**                | DigiLocker, KRA/CKYC, eSign and liveness vendors                                                   |
| **Payments**           | UPI through a payment aggregator; mandate providers (UPI AutoPay, eNACH)                           |
| **Aggregation**        | RBI-regulated Account Aggregator ecosystem (v1.0)                                                  |
| **Support tooling**    | Ticketing, vernacular call-back, chat                                                              |
| **Cloud and security** | India-region hosting, WAF, key management, SIEM                                                    |

**Key risks:** licensing timelines, uptime on peak days, vendor dependencies, fraud and AML, KYC cost and drop-off.

**Indicative MVP team:** about 15-20 people (mobile 4, backend 5, QA 2, DevOps and security 2, design 2, product 1, compliance and operations 3). Planning estimate only.

# 15. Success Metrics

*Targets are illustrative placeholders to be calibrated after research and financial modelling.*

| **Layer**       | **Metric**                                                     | **Illustrative target**       |
|-----------------|----------------------------------------------------------------|-------------------------------|
| **North star**  | Users with an active SIP for 6+ months                         | Grows month on month          |
| **Activation**  | KYC completion rate; time to first SIP                         | 60%; under 10 minutes median  |
| **Habit**       | SIP continuation at 6 and 12 months; SIP failure recovery rate | 75% and 65%; 60%              |
| **Growth**      | AUM; monthly SIP inflow; step-up adoption                      | Track monthly                 |
| **Reach**       | Share of users from Tier 2/3; share using Hindi                | 40%+; 50%+                    |
| **Trust**       | NPS; complaints per 1,000 users; support resolution within SLA | 40+; falling; 95%             |
| **Behaviour**   | Share of users who exit after a market fall                    | Lower than industry benchmark |
| **Business**    | Revenue per user; CAC; payback period; fee acceptance rate     | Set in financial model        |
| **Reliability** | Uptime in market hours; payment and order failure rate         | 99.9%; under 0.1%             |
| **Compliance**  | Critical audit findings                                        | Zero                          |

Deliberately not tracked: trade counts, daily active traders, F&O volume.

# 16. MVP Definition

**Goal:** prove that first-time and Tier 2/3 users will complete KYC, start a SIP, accept the fee model, and still be investing six months later.

## 16.1 In scope

- Hindi and English onboarding and full KYC

- Direct mutual funds with curated lists, one-time and SIP orders

- Risk profiling and suitability

- SIP recovery, step-up, pause/resume

- Goal planner

- Pre-commit charge and advisory fee screen

- RIA compliance workflows (client agreement, suitability records, fee disclosure)

- Market-fall guidance

- Portfolio, XIRR, statements and tax reports

- UPI payments, mandates and withdrawals

- Human and vernacular support

- Admin and compliance console

## 16.2 Out of scope for MVP

- Equity trading and IPO (v1.0)

- F&O, advanced charts, API (not planned)

- Account Aggregator net worth (v1.0)

- US stocks, bonds, NPS, FDs (v1.5 or later)

- Social features

## 16.3 Indicative timeline

| **Phase**         | **Duration**                       | **Key outputs**                                                                                                                                         |
|-------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Foundation**    | Months 0-4                         | Counsel opinion, RIA registration application (principal officer certification, entity setup), execution-rail contracts, research, architecture, design |
| **Build**         | Months 4-8                         | Core app, KYC, mutual fund rails, payments, admin console                                                                                               |
| **Closed beta**   | Months 8-10                        | Test cohorts, funnel and retention data, fee-acceptance tests                                                                                           |
| **Public launch** | Month 10+ (after RIA registration) | Phased rollout by language and region                                                                                                                   |

*RIA registration is on the critical path. Launch cannot happen before SEBI approval, so the dates above are indicative.*

# 17. Final Product and Roadmap

| **Release** | **Timing**   | **Scope**                                                                                                                                                                                          |
|-------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **MVP**     | Months 0-10  | Section 16                                                                                                                                                                                         |
| **v1.0**    | Months 10-16 | Premium advisory tier (Model B), family access, Account Aggregator net worth, referral engine, additional regional languages, equity delivery and IPOs through a partner broker or separate entity |
| **v1.5**    | Months 16-24 | Advice-led FDs, bonds, NPS and digital gold (commission-based products only via a separate entity), smart alerts, tax-harvesting nudges, AI assistant for plain-language questions                 |
| **v2.0**    | Months 24+   | Margin funding and lending through a separate regulated partner, US stocks, wealth and advisory tier expansion                                                                                     |

End state: one trusted app where a family plans goals, invests monthly in its own language, sees all its money in one place, and gets fee-only guidance when it matters.

# 18. Risks and Mitigations

| **Risk**                                                             | **Impact**                | **Mitigation**                                                                                     |
|----------------------------------------------------------------------|---------------------------|----------------------------------------------------------------------------------------------------|
| **RIA registration delay or rule changes**                           | Launch delay              | Counsel opinion first; start registration early; build timeline buffer; track SEBI reforms         |
| **RIA cannot take commission, limiting product breadth**             | Revenue and product scope | Partner or separate entity for broking and commission products; fee-only is a trust differentiator |
| **Users reject an advisory fee because rivals offer free execution** | Revenue shortfall         | Pricing research; free tier; clear value from guidance; test in beta                               |
| **High CAC in a shrinking active-client market**                     | Unit economics            | Referral loops, regional partnerships, focus on retention                                          |
| **Regulatory change**                                                | Rework                    | Compliance owner; modular design; avoid F&O dependence                                             |
| **Outages on volatile days**                                         | Trust loss                | Load testing, DR, status page, incident playbooks                                                  |
| **Hindi content and translation quality**                            | Activation loss           | Native review, user testing in both languages                                                      |
| **Long path to profitability**                                       | Funding risk              | Plan for losses for 2-3 years; milestone-based funding                                             |
| **Unverified competitor data**                                       | Wrong positioning         | Re-verify pricing and user counts before launch                                                    |

# 19. Sources and Data Notes

Market and company figures were gathered in November 2026 from press reports and company disclosures. Re-verify before external use.

- NSE active-client data (October 2026) via Business Standard, YourStory, Free Press Journal, Inc42 and StartupFeed reports.

- FY26 NSE active-client decline: Business Today and Moneycontrol reports (April 2026).

- SEBI (Stock Brokers) Regulations, 2026: KPMG flash news, SCC Online and Mondaq summaries (January 2026).

- SEBI chief remarks on small-town growth and enforcement measures: Business Today (25 October 2026).

- Retail algo trading framework and April 2026 rule changes (STT, margin): Business Standard and exchange circular summaries.

- Zerodha FY26 results and revenue mix: YourStory, Inc42, The Tribune, Moneycontrol-based reports (August 2026).

- Competitor features and pricing: company websites and comparison sites. Sources conflict on some Groww charges; verify on official pages.

- SEBI Investment Adviser regulations and reforms: Morningstar India, Business Standard, Moneylife, Cafemutual and law-firm or adviser summaries. These disagree on current net worth, deposit and fee-limit rules, so confirm against SEBI notifications.

- INDmoney features and user base: company site and independent reviews (The Tribune, 2026).

*Disclaimer: This document is a product planning draft. It is not legal, financial or investment advice. Regulatory and licensing positions must be confirmed with qualified counsel.*
