---
status: draft
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - Input/PRD_Investing_Platform.md
---

# Long-Term Investing Platform for India - Epic Breakdown

## Overview

This working document will decompose the requirements from the supplied PRD into user-value-focused epics and implementable stories with acceptance criteria. The source PRD is marked Draft v1.1 for review. Story details that depend on unresolved RIA/legal, fee, or execution-rail decisions must retain explicit assumptions or dependencies.

## Requirements Inventory

### Functional Requirements

- **FR-01 — Language (P0):** Provide Hindi and English onboarding, UI, notifications, and support at launch; add languages from v1.0 based on usage data.
- **FR-02 — Onboarding / KYC (P0):** Support mobile OTP, PAN verification, DigiLocker Aadhaar, bank penny-drop, selfie/liveness, eSign, nominee capture, save-and-resume, and clear rejection reasons.
- **FR-03 — Profile (P0):** Provide plain-language risk profiling and a suitability rating.
- **FR-04 — Mutual funds (P0):** Provide curated lists, filters, fund details with a risk meter and “who is this for,” one-time and SIP orders from Rs 100–500, and direct plans.
- **FR-05 — SIP recovery (P0):** Provide pre-debit reminders, auto-retry, alternate date, and recovery prompts.
- **FR-06 — SIP flexibility (P0):** Allow step-up, pause, and resume without penalty.
- **FR-07 — Goals (P0):** Support goal creation, recommended SIP, progress tracking, and on-track indicator.
- **FR-08 — Transparency (P0):** Before commitment, show advisory fee, fund expenses, risk, and what could happen.
- **FR-09 — Market-fall guidance (P0):** Show calm in-app guidance during sharp falls, without prompting action, and include goal-progress context.
- **FR-10 — Payments (P0):** Support UPI, net banking, mandates, status tracking, and withdrawals.
- **FR-11 — Portfolio and reports (P0):** Show holdings, XIRR, asset allocation, statements, and capital-gains reports.
- **FR-12 — Notifications (P0):** Send push, SMS, and email notifications for orders, SIP debits, failures, and KYC status.
- **FR-13 — Support (P0):** Provide chat, vernacular call-back, assisted mode, ticket tracking, and human escalation.
- **FR-14 — Fee management (P0):** Calculate advisory fees within RIA fee limits; display, bill, and invoice fees.
- **FR-15 — Admin / Ops (P0):** Support KYC review, reconciliation, compliance dashboards, complaint management, and audit logs.
- **FR-16 — Family access (P1):** Provide view-only access for a trusted relative acting as nominee/helper, with shared goals.
- **FR-17 — Equity delivery (P1):** Through a partner broker or separate entity (not under the RIA licence), provide quotes, buy/sell delivery orders, and order status.
- **FR-18 — IPO (P1):** Support browsing, UPI applications, and allotment status.
- **FR-19 — Referral (P1):** Support invitations and rewards tied to continued SIPs.
- **FR-20 — Aggregation (P1):** Link an Account Aggregator for external holdings and net worth.
- **FR-21 — Advisory tier / Model B (P1):** Provide personalised fee-only planning and advice enabled by the RIA licence.
- **FR-22 — Other assets (P2):** Provide advice-led FDs, bonds, NPS, and digital gold; commission-based products only through a separate entity.
- **FR-23 — US stocks (P2):** Support international investing under LRS.
- **FR-24 — F&O, advanced charts, API (Out of scope):** Not planned.
- **FR-25 — RIA compliance (P0):** Manage client agreement and e-consent, risk-profile and suitability records, fee disclosure, advice audit trail, record retention, and principal-officer/certification tracking.

### NonFunctional Requirements

- **NFR-01 — Performance:** Cold start under 3 seconds on mid-range Android; order or SIP placement confirmation under 2 seconds; quote refresh under 1 second where equity is offered.
- **NFR-02 — Availability:** 99.9% or better during market hours (09:00–15:30 IST); disaster recovery with defined RTO/RPO as required by SEBI frameworks.
- **NFR-03 — Scalability:** Handle 10x spikes, including market falls, SIP dates, and IPO days.
- **NFR-04 — Security:** Encrypt data in transit and at rest; provide 2FA and device binding; manage secrets; perform regular VAPT and security monitoring.
- **NFR-05 — Compliance:** Meet applicable IA requirements for agreements, suitability, disclosures, fee limits, and record keeping; address cyber-resilience, CERT-In incident reporting, DPDP data handling, and mandated retention. Specific current obligations require counsel verification.
- **NFR-06 — Privacy:** Provide consent management, data minimisation, user data export, and deletion.
- **NFR-07 — Reliability:** Make payments and orders idempotent; run reconciliation jobs; degrade gracefully.
- **NFR-08 — Accessibility and reach:** Support low-RAM Android, low-bandwidth mode, large text, WCAG AA, and voice/assisted options.
- **NFR-09 — Localisation:** Launch in Hindi and English; support adding languages; format rupees and IST correctly.
- **NFR-10 — Observability:** Provide centralised logging, tracing, real-time alerts, and audit trails.

### Additional Requirements

- **Architecture input:** No architecture document was found or included. Technical stack, system boundaries, API contracts, data models, deployment design, vendor choices, and integration specifications remain undecided by this input set.
- **UX input:** No UX design contract was found or included. No separate UX-DRs are extracted; the source PRD’s interaction principles and screen requirements remain product requirements to be mapped during story design.
- **PRD constraints to preserve during decomposition:** Android-first, followed by iOS and web; calm non-gamified interaction; plain language; contextual disclosures; thumb-friendly interaction; three taps or fewer after onboarding; Hindi and English launch; RIA fee-only model; execution service itself free; equity and commission products require a partner or separate entity; F&O remains out of scope.
- **MVP scope boundary:** Include bilingual onboarding/full KYC, direct mutual funds (curated lists, one-time and SIP), risk profiling/suitability, SIP recovery/step-up/pause/resume, goal planner, pre-commit charge/advisory-fee disclosure, RIA compliance workflows, market-fall guidance, portfolio/XIRR/statements/tax reports, UPI/mandates/withdrawals, human/vernacular support, and admin/compliance console. Exclude equity trading and IPO (v1.0), F&O/advanced charts/API (not planned), Account Aggregator net worth (v1.0), US stocks/bonds/NPS/FDs (v1.5 or later), and social features.
- **Launch gate:** Public launch is after RIA registration approval. Counsel confirmation of entity structure, eligibility, fee limits and agreements; fee design; and permitted direct-plan execution rails remain open items and dependencies.
- **Success measures:** Track 6+ month active SIP users as the north star; activation/KYC, time to first SIP, SIP continuation and recovery, AUM/inflows, Tier 2/3 and Hindi reach, trust/complaints/support, post-market-fall exits, revenue/CAC/payback/fee acceptance, reliability, and critical compliance findings. PRD targets are explicitly illustrative placeholders.
- **Operational/compliance product obligations:** Support grievance visibility/redressal, segregation/disclosures for client funds and securities, two-factor authentication, device binding, audit trails, and marketing only with SEBI-verified partners and no performance promises, as specified in the PRD outside the numbered FR table.

### UX Design Requirements

No separate UX design document was supplied. The source PRD’s product interaction requirements are captured under Additional Requirements pending story decomposition.

### FR Coverage Map

FR-01: Epic 1 — Start in the user's language
FR-02: Epic 1 — Start in the user's language
FR-03: Epic 1 — Start in the user's language
FR-04: Epic 2 — Choose and invest in suitable direct mutual funds
FR-05: Epic 3 — Keep a savings habit on track
FR-06: Epic 3 — Keep a savings habit on track
FR-07: Epic 3 — Keep a savings habit on track
FR-08: Epic 2 — Choose and invest in suitable direct mutual funds
FR-09: Epic 3 — Keep a savings habit on track
FR-10: Epic 2 — Choose and invest in suitable direct mutual funds
FR-11: Epic 4 — Understand portfolio and investment outcomes
FR-12: Epic 4 — Understand portfolio and investment outcomes
FR-13: Epic 5 — Get human help and resolve issues
FR-14: Epic 2 — Choose and invest in suitable direct mutual funds
FR-15: Epic 6 — Run compliant customer and investment operations
FR-16: Epic 7 — Coordinate finances with a trusted family member
FR-17: Epic 8 — Invest in equity delivery through a permitted partner
FR-18: Epic 8 — Apply for IPOs through a permitted partner
FR-19: Epic 9 — Invite others and earn rewards for sustained investing
FR-20: Epic 10 — See external assets alongside investments
FR-21: Epic 11 — Get personalised fee-only financial advice
FR-22: Epic 12 — Access additional India investment products with appropriate advice
FR-23: Epic 13 — Invest internationally under LRS
FR-24: Excluded — F&O, advanced charts, and API are explicitly not planned; no delivery epic.
FR-25: Epic 1 and Epic 6 — Client-facing consent/suitability records in onboarding; ongoing advice records and principal-officer/certification oversight in operations.

## Epic List

### Epic 1: Start in the User's Language
A first-time investor can understand the service, complete onboarding and KYC, establish a suitable risk profile, and give required RIA consents in Hindi or English.
**FRs covered:** FR-01, FR-02, FR-03, FR-25 (client-facing consent and profile records)
**Release:** MVP
**Dependencies:** RIA-approved onboarding agreement, eligibility, KYC vendors, and final risk-profiling/suitability rules.

### Story 1.1: Choose a Language and View the Welcome Information

As a prospective investor,
I want to choose Hindi or English before onboarding,
So that I can understand the service and its disclosures in my preferred launch language.

**Acceptance Criteria:**

- **Given** I open the app for the first time, **when** the welcome screen appears, **then** I can choose Hindi or English before starting onboarding. [FR-01]
- **Given** I choose either supported language, **when** the welcome screen is displayed, **then** its labels, explanatory copy, and navigation controls appear in that language.
- **Given** the welcome screen is displayed, **when** I review the available trust information, **then** I can access the firm’s SEBI registration details and an explanation of how the platform makes money, as specified for the welcome screen in the PRD.
- **Given** I have selected a language, **when** I leave and return to the onboarding flow, **then** the selected language remains in effect.
- **Given** a required welcome-screen message has no approved translation in the selected language, **when** the screen is rendered, **then** the app does not silently show incomplete or misleading content and provides a clear fallback or blocks progression according to the approved localization policy.

- **Given** the app launches on a mid-range Android device, **when** it is cold-started, **then** the welcome screen is ready in under 3 seconds. [NFR-01]
- **Given** the app displays any monetary value or date/time, **when** it is rendered in the selected locale, **then** INR uses the approved Indian rupee format and times use IST; localization supports adding languages without changing stored data. [NFR-09]

**Policy dependency:** fallback behavior is not specified in the PRD.

### Story 1.2: Verify a Mobile Number to Start Onboarding

As a prospective investor,
I want to verify my mobile number with a one-time password,
So that I can securely begin and resume my onboarding.

**Acceptance Criteria:**

- **Given** I enter a valid mobile number, **when** I request verification, **then** the system sends a one-time password through the configured channel and shows that it was sent. [FR-02]
- **Given** I enter the current valid one-time password, **when** I submit it, **then** the mobile number is marked verified and I can continue onboarding.
- **Given** I enter an incorrect or expired code, **when** I submit it, **then** verification is denied, I see a clear error in my selected language, and I can request another code subject to the configured security limits.
- **Given** I request another code, **when** resend is allowed, **then** a new code is sent and previously issued codes are invalidated according to the configured authentication policy.
- **Given** verification cannot be completed because of a delivery or service failure, **when** I try to continue, **then** the app explains the issue and provides an available retry or support path without marking the number verified.
- **Given** my number is verified and I leave onboarding, **when** I return, **then** I can resume the onboarding session without repeating successful verification unless the security policy requires it.

- **Given** I authenticate from a new or untrusted device, **when** access is granted, **then** the approved second-factor check is completed and the device is bound according to the configured security policy; failed checks do not create an authenticated session. [NFR-04]

**Policy dependency:** OTP expiry, resend limits, attempt limits, and any re-verification triggers need security and product decisions.

### Story 1.3: Verify PAN Details

As an investor completing KYC,
I want my PAN details verified,
So that the platform can establish my identity for investing and compliance.

**Acceptance Criteria:**

- **Given** I have started onboarding, **when** I enter my PAN and submit it for verification, **then** the system validates the input format and submits it to the configured verification service. [FR-02]
- **Given** the verification service confirms the submitted PAN, **when** the result is returned, **then** the PAN verification status is recorded and I can proceed to the next KYC step.
- **Given** the verification service rejects the PAN or returns a mismatch, **when** the result is returned, **then** I see a clear explanation in my selected language and the PAN is not marked verified.
- **Given** the service is unavailable or returns an indeterminate result, **when** verification cannot be completed, **then** I see that verification is pending or unavailable, can retry or use the defined support path, and cannot proceed as if verification succeeded.
- **Given** a PAN verification result is received, **when** it is recorded, **then** the result is associated with my onboarding record and available to authorized compliance staff for review. [FR-15, FR-25]

**Policy/vendor dependency:** The authoritative data fields to compare, mismatch handling, manual review path, and user-visible rejection reasons depend on counsel-approved rules and provider capabilities.

### Story 1.4: Retrieve Aadhaar Identity Information through DigiLocker

As an investor completing KYC,
I want to provide Aadhaar identity information through DigiLocker,
So that I can complete identity verification using the stated KYC channel.

**Acceptance Criteria:**

- **Given** I reach Aadhaar verification, **when** I choose to continue through DigiLocker, **then** I’m shown the required consent and the information that will be requested or received before I authorize the flow. [FR-02, NFR-06]
- **Given** I authorize the DigiLocker flow, **when** DigiLocker returns verified identity information, **then** the onboarding record reflects successful Aadhaar identity retrieval and I can continue KYC.
- **Given** I decline consent or cancel the DigiLocker flow, **when** I return to the app, **then** Aadhaar verification remains incomplete and I’m told how to retry or get help.
- **Given** DigiLocker returns an error, incomplete information, or cannot be reached, **when** the response is processed, **then** the app does not mark Aadhaar verification successful and provides a clear retry or support path in my selected language.
- **Given** identity information is received, **when** it is stored or made available for review, **then** access is limited to authorized purposes and the handling follows the approved consent and retention policy. [NFR-05, NFR-06, FR-25]

**Policy/vendor dependency:** Consent wording, permitted data fields, masking, retention, and the exception path need counsel and integration-provider confirmation.

### Story 1.5: Verify a Bank Account with Penny-Drop

As an investor completing KYC,
I want to verify my bank account through the penny-drop process,
So that I can use a verified account for investment payments and withdrawals.

**Acceptance Criteria:**

- **Given** I provide the requested bank-account details, **when** I submit them for verification, **then** the app explains the verification step and sends the request to the configured penny-drop provider. [FR-02, FR-10]
- **Given** the provider confirms the account, **when** the result is returned, **then** the account is marked verified and linked to my onboarding profile.
- **Given** the provider reports a mismatch or rejects verification, **when** the result is returned, **then** the account remains unverified and I receive a clear explanation and a path to correct details or request help.
- **Given** the provider times out or returns an indeterminate result, **when** the app handles the response, **then** the account is not treated as verified and I can retry or use the defined support path.
- **Given** a bank account has been verified, **when** it is used later for payments or withdrawals, **then** the app displays enough account information for me to identify it while masking sensitive details according to the approved policy. [NFR-06]

**Policy/vendor dependency:** Required input fields, account/name matching thresholds, retry limits, masking, and whether a verified account can be changed need definition with the provider and counsel.

### Story 1.6: Complete Selfie and Liveness Verification

As an investor completing KYC,
I want to complete a selfie and liveness check,
So that the platform can complete the required identity-verification process.

**Acceptance Criteria:**

- **Given** I reach the selfie/liveness step, **when** I start it, **then** the app explains the purpose and provides the capture instructions in my selected language. [FR-02, FR-01]
- **Given** I provide the requested capture, **when** the configured verification service confirms liveness, **then** the verification result is recorded and I can continue onboarding.
- **Given** the capture is rejected or cannot be evaluated, **when** the result is returned, **then** I see a clear reason where available, the step remains incomplete, and I can retry subject to configured limits or request help.
- **Given** the service is unavailable or returns an indeterminate result, **when** verification cannot be completed, **then** the app does not treat the check as successful and explains how to retry or get support.
- **Given** a selfie or liveness result is received, **when** the result is retained or made available for review, **then** access and retention follow the approved privacy, security, and compliance policies. [NFR-04, NFR-05, NFR-06, FR-25]

**Policy/vendor dependency:** Capture requirements, pass/fail thresholds, retry limits, accessibility accommodations, manual review, and biometric data retention need vendor and counsel confirmation.

### Story 1.7: Review and e-Sign the Client Agreement

As an investor completing onboarding,
I want to review and e-sign the RIA client agreement and required consents,
So that I can understand and formally accept the terms before using advisory services.

**Acceptance Criteria:**

- **Given** I reach the agreement step, **when** the approved agreement is presented, **then** I can review the complete current version and its required disclosures in my selected language, or see a clear indication if an approved translation is unavailable. [FR-25, FR-01]
- **Given** I have reviewed the agreement, **when** I choose to accept and e-sign, **then** the configured eSign process is completed and I receive confirmation.
- **Given** I decline or abandon the eSign process, **when** I return to onboarding, **then** the agreement remains unsigned and the app explains that onboarding cannot proceed to services requiring that agreement.
- **Given** eSign succeeds, **when** the acceptance is recorded, **then** the system retains the signed artifact or authoritative evidence, agreement version, timestamp, and consent event in the compliance record. [FR-25, NFR-05, NFR-10]
- **Given** the agreement or eSign service is unavailable, **when** I try to complete acceptance, **then** the system does not mark consent as complete and provides an appropriate retry or support path.

**Counsel/vendor dependency:** Final agreement language, required disclosures, language availability, signing method, evidence fields, retention period, and any separate consents must be approved.

### Story 1.8: Provide Nominee Details

As an investor completing onboarding,
I want to provide nominee details,
So that my account records include the nominee information required by the product and applicable rules.

**Acceptance Criteria:**

- **Given** I reach the nominee step, **when** I open it, **then** the app explains why nominee information is requested and identifies which fields are required. [FR-02]
- **Given** nominee capture is configured as required, **when** I enter valid details and submit them, **then** the nominee information is saved to my onboarding record and the step is marked complete.
- **Given** I submit incomplete or invalid nominee information, **when** validation runs, **then** I see field-level guidance in my selected language and the information is not marked complete.
- **Given** I leave the nominee step before submission, **when** I resume onboarding, **then** I can continue from the saved progress without losing previously completed KYC steps.
- **Given** the approved policy allows an investor to proceed without nominating someone, **when** I choose that option, **then** the app records my choice and any required acknowledgement; if policy requires nomination, the app explains the requirement and does not mark the step complete without the necessary details. [FR-25]

**Policy dependency:** Whether nomination is mandatory, permissible nominee types, field set, validation, evidence/acknowledgement, and update rules require counsel and product decisions.

### Story 1.9: Save and Resume Onboarding

As an investor completing onboarding,
I want my progress saved so I can return later,
So that I can finish KYC without repeating steps I already completed.

**Acceptance Criteria:**

- **Given** I have started onboarding, **when** I complete a KYC step or leave the flow, **then** my completed-step status and eligible in-progress information are saved to my account. [FR-02]
- **Given** I return to onboarding after leaving, **when** I authenticate, **then** I see my current progress and can continue from the next incomplete step.
- **Given** a previously completed verification is no longer valid under the configured policy, **when** I resume, **then** the affected step is clearly identified and I’m asked to repeat only the necessary verification.
- **Given** I resume onboarding, **when** previously submitted personal information is displayed, **then** sensitive fields are masked or protected according to the approved privacy and security policy. [NFR-04, NFR-06]
- **Given** saving or loading progress fails, **when** the error occurs, **then** the app explains that progress may not have been saved and provides a retry path without falsely marking incomplete steps as complete.

**Policy dependency:** Which partial data may be saved, session expiry, re-authentication triggers, and verification validity periods need definition.

### Story 1.10: View KYC Status and Understand Rejection Reasons

As an investor completing KYC,
I want to see the status of each verification and understand why a check was rejected,
So that I know what to correct or how to get help.

**Acceptance Criteria:**

- **Given** I have started KYC, **when** I view onboarding progress, **then** each required verification step is shown with a clear state such as not started, in progress, complete, or needs attention. [FR-02]
- **Given** a KYC check is rejected, **when** the result is made available, **then** I’m shown a clear reason in my selected language and the next action I can take, where the provider or policy permits disclosure.
- **Given** a rejection can be corrected by resubmission, **when** I choose to retry, **then** I’m directed to the relevant step and the prior rejection remains available in the compliance record.
- **Given** a check is pending external review, **when** I view its status, **then** it is shown as pending rather than rejected or complete.
- **Given** the provider’s reason cannot be safely or lawfully shown verbatim, **when** the status is displayed, **then** the app presents an approved user-facing explanation and offers the appropriate support or escalation route. [FR-13, FR-15, FR-25]

**Policy/vendor dependency:** Rejection reason taxonomy, disclosure limits, manual review/escalation process, and status update timing need definition.

### Story 1.11: Complete a Plain-Language Risk Profile

As an investor preparing to invest,
I want to answer clear questions about my risk profile,
So that the platform can assess suitability before presenting investment guidance.

**Acceptance Criteria:**

- **Given** I reach risk profiling, **when** I start the assessment, **then** the questions and explanations are presented in my selected language using plain language. [FR-03, FR-01]
- **Given** I answer all required questions, **when** I submit the assessment, **then** the system calculates and records a risk-profile result using the approved assessment rules.
- **Given** required answers are missing or invalid, **when** I submit the assessment, **then** I’m shown what needs completion and no final risk result is recorded.
- **Given** the assessment is complete, **when** I review the result, **then** I can see my risk category and a plain-language explanation of what it means.
- **Given** I update my answers later, **when** the profile is recalculated, **then** the prior and current profile versions and their timestamps remain available for authorized compliance review. [FR-25]

**Policy dependency:** Assessment questions, scoring, risk categories, suitability rules, re-profiling triggers, and retention requirements need approval by product and compliance/counsel.

### Story 1.12: Review Suitability and See Onboarding Completion Status

As an investor who has completed the required onboarding steps,
I want to see my suitability outcome and whether my account is ready,
So that I know what I can do next and the platform retains a clear compliance record.

**Acceptance Criteria:**

- **Given** my risk profile has been assessed, **when** I view the result, **then** I see the resulting suitability status with a plain-language explanation. [FR-03]
- **Given** a suitability status requires follow-up or limits under the approved rules, **when** the result is displayed, **then** the required next step or applicable limitation is explained without presenting the account as fully ready.
- **Given** required KYC checks, agreement/consents, nominee step (as policy requires), and suitability assessment are complete, **when** all required external checks are approved, **then** my onboarding status is shown as complete.
- **Given** any required check remains pending, rejected, or incomplete, **when** I view onboarding status, **then** the account is not shown as complete and I can see the step requiring attention. [FR-02]
- **Given** the onboarding or suitability status changes, **when** the change is recorded, **then** its source, timestamp, outcome, and applicable rule/version are available in the compliance record for authorized review. [FR-25, NFR-10]

**Policy dependency:** Completion gates, suitability outcomes and resulting actions, required nominee status, external KYC approval states, and evidence/retention fields need compliance approval.

### Story 1.13: Export or Request Deletion of Personal Data

As an investor,
I want to request an export or deletion of my personal data,
So that I can exercise control over information held about me.

**Acceptance Criteria:**

- **Given** I am authenticated, **when** I request a data export, **then** the platform creates a readable export of the personal data eligible for disclosure under the approved policy and provides a secure way to retrieve it. [NFR-06]
- **Given** I request deletion, **when** the request is submitted, **then** the system verifies my identity, records the request, and shows its status and expected next step.
- **Given** some records must be retained for a legal or compliance obligation, **when** deletion is processed, **then** those records are restricted from ordinary use and retained only for the approved period; eligible data is deleted or anonymized according to policy. [NFR-05, NFR-06, FR-25]
- **Given** a request cannot be completed or requires manual review, **when** the status changes, **then** I receive a clear explanation and the request remains auditable.
- **Given** I download an export, **when** it is generated, **then** access is limited to me and the file is protected against unauthorized access.

**Compliance dependency:** Export scope, identity verification, response time, data categories, retention exceptions, deletion/anonymization method, and user communication require counsel/privacy approval.

### Story 1.14: Use Core Investing Flows with Accessibility Support

As an investor using assistive technology or a constrained Android device,
I want core investing flows to remain accessible and usable,
So that I can complete essential tasks in my preferred way and on my device.

**Acceptance Criteria:**

- **Given** I use a supported low-RAM Android device, **when** I complete onboarding, explore funds, review my portfolio, or contact support, **then** the app remains stable and does not lose entered progress because of memory pressure. [NFR-08]
- **Given** I use a low-bandwidth connection, **when** I complete an essential flow, **then** text and primary controls remain usable, nonessential media is deferred, and loading/failure states are clear.
- **Given** I increase text size or use a screen reader, **when** I navigate core screens, **then** content remains legible, controls have meaningful accessible names, focus order is usable, and status is not conveyed by color alone.
- **Given** supported app screens are evaluated against WCAG AA, **when** accessibility review is completed, **then** applicable criteria pass or documented exceptions have an owner and remediation plan.
- **Given** I need spoken or human assistance, **when** I request voice/assisted help, **then** the app exposes the approved voice-help or assisted-support path in my selected language. [FR-13]

**Product/UX dependency:** Supported device profile, exact WCAG scope, voice-help behavior, low-bandwidth fallback, and assisted-channel coverage require UX and accessibility review.

### Epic 2: Choose and Invest in Suitable Direct Mutual Funds
An investor can discover direct mutual funds, understand suitability, risks and charges, place a one-time or SIP investment, and see its payment and fee status.
**FRs covered:** FR-04, FR-08, FR-10, FR-14
**Release:** MVP
**Dependencies:** Counsel-approved fee design and permitted direct-plan execution rails; partner and payment-provider capabilities.

### Story 2.1: Browse Curated Mutual Fund Collections

As an investor exploring mutual funds,
I want to browse curated fund collections,
So that I can discover relevant direct-plan funds without needing to understand market jargon.

**Acceptance Criteria:**

- **Given** I open Explore, **when** the collections load, **then** I can view the available curated collections with plain-language names and descriptions. [FR-04]
- **Given** I select a collection, **when** its fund list is displayed, **then** each listed fund is identified as a direct plan and shows the key summary information selected for that collection.
- **Given** fund data is unavailable or stale, **when** I view a collection, **then** the app indicates that the information is unavailable or last updated and does not present missing values as current.
- **Given** a collection is empty or cannot load, **when** I open it, **then** I see a clear empty/error state and a way to return to Explore or retry.
- **Given** the app displays curated funds, **when** the collection content is published, **then** the collection’s inclusion rules and source are maintained for authorized review. [FR-15, FR-25]

**Product dependency:** The PRD does not define collection names, fund eligibility/inclusion rules, fund summary fields, or data freshness thresholds.

### Story 2.2: Filter the Mutual Fund Catalogue

As an investor exploring mutual funds,
I want to narrow the catalogue using fund filters,
So that I can compare a manageable set of funds that match my needs.

**Acceptance Criteria:**

- **Given** I’m viewing the fund catalogue, **when** I open filters, **then** I can select from the product-approved filters supported by the fund data. [FR-04]
- **Given** I select one or more filters, **when** I apply them, **then** the results include only funds matching all selected criteria.
- **Given** I have active filters, **when** I view the results, **then** I can see which filters are active and remove an individual filter or clear them all.
- **Given** no funds match the selected filters, **when** results load, **then** I see a no-results state and can change or clear the filters.
- **Given** the catalogue or filter data cannot load, **when** the request fails, **then** the app explains the issue and provides a retry path.

**Product dependency:** Filter dimensions, values, combination rules, ordering, and source data are not defined in the PRD.

### Story 2.3: Review Mutual-Fund Details before Investing

As an investor considering a mutual fund,
I want to review its purpose, risk, costs, and performance information in plain language,
So that I can make an informed choice before investing.

**Acceptance Criteria:**

- **Given** I open a fund’s detail page, **when** the page loads, **then** I see a plain-language fund summary and the fund category and plan are clearly identified. [FR-04]
- **Given** the fund has an approved risk classification, **when** I view the detail page, **then** the risk meter and its meaning are displayed using the authoritative, current classification source.
- **Given** the fund has approved suitability guidance, **when** I view the detail page, **then** I can see “who this is for” information in plain language.
- **Given** charges and performance information are available, **when** I view the detail page, **then** applicable fund expenses and the approved historical chart are shown with labels that distinguish cost from past performance.
- **Given** a required data element is missing or stale, **when** the detail page loads, **then** the app identifies that the information is unavailable or its last updated time rather than presenting it as current.

**Product/compliance dependency:** Summary content, suitability explanation, risk source/update cadence, chart periods and methodology, expense fields, and required performance disclaimers need definition and approval.

### Story 2.4: Search Mutual Funds

As an investor exploring mutual funds,
I want to search the available fund catalogue,
So that I can find a fund by its name or other supported search terms.

**Acceptance Criteria:**

- **Given** I’m viewing Explore, **when** I enter a search term, **then** the app shows matching funds from the available direct-plan catalogue. [FR-04]
- **Given** matching results are shown, **when** I open a result, **then** I reach the detail view for that fund.
- **Given** no funds match my search, **when** results load, **then** I see a clear no-results message and can edit or clear the search.
- **Given** the catalogue cannot be searched because data or service is unavailable, **when** the request fails, **then** the app explains the issue and provides a retry path.
- **Given** I search in Hindi or English, **when** I enter supported text, **then** the search experience and result messaging remain in my selected app language. [FR-01]

**Product/vendor dependency:** Searchable fields, matching behavior, tokenization for Hindi/English, and catalogue update frequency are not defined in the PRD.

### Story 2.5: Check Fund Suitability against the Investor Profile

As an investor considering a mutual fund,
I want the platform to assess the fund against my recorded risk profile,
So that I understand whether it is suitable for me before I commit.

**Acceptance Criteria:**

- **Given** I have a current risk profile and select a fund, **when** suitability is assessed, **then** the platform evaluates the fund using the approved suitability rules. [FR-03, FR-04]
- **Given** the fund is assessed as suitable, **when** I view the result, **then** the app shows a plain-language explanation of the suitability result.
- **Given** the fund is assessed as unsuitable or requires additional action, **when** I view the result, **then** the app explains the result and follows the approved rule for whether I may continue, must complete an additional step, or cannot proceed.
- **Given** I have no current risk profile or it has expired under the configured rules, **when** I attempt to proceed, **then** the app directs me to complete or update the profile before the suitability result is treated as current.
- **Given** a suitability assessment is completed, **when** it is recorded, **then** the fund, profile version, rules version, result, and timestamp are available in the compliance record. [FR-25]

**Policy dependency:** Suitability data, matching logic, profile freshness, restrictions or override process, disclosures, and audit fields require compliance approval.

### Story 2.6: Calculate and Control Advisory Fees

As a customer of the investing platform,
I want advisory fees calculated under the approved fee schedule and within applicable limits,
So that I’m charged transparently and in accordance with the RIA model.

**Acceptance Criteria:**

- **Given** an approved advisory fee schedule is configured, **when** a fee is calculated for an eligible customer or service period, **then** the calculation uses the applicable schedule and produces a reviewable breakdown. [FR-14]
- **Given** the calculated fee would exceed an applicable RIA fee limit, **when** the calculation is processed, **then** the amount is capped or rejected according to the approved compliance rule and cannot be billed above the limit.
- **Given** no approved fee schedule or required input is available, **when** a fee is requested, **then** the system does not invent an amount or create a billable fee and raises an operational exception.
- **Given** a fee calculation is completed, **when** it is stored, **then** the customer, service period, calculation inputs, fee-schedule version, applicable limit, and result are available for audit. [FR-25]
- **Given** the fee relates to execution, **when** it is evaluated for billing, **then** the execution service itself is not charged, consistent with the PRD’s fee-only RIA model.

**Counsel/product dependency:** Fee basis, schedule, billing frequency, tax treatment, fee caps, waivers/refunds, and separation between advice and execution charges need confirmation.

### Story 2.7: Review All Investment Charges and Risks before Committing

As an investor placing an order,
I want to see the advisory fee, fund expenses, risks, and possible outcomes before committing,
So that I understand what I’m paying and what could happen to my investment.

**Acceptance Criteria:**

- **Given** I have entered a valid one-time or SIP order, **when** I reach the final review step, **then** I see the advisory fee, applicable fund expenses, order amount, and payment/debit information in one clear summary. [FR-08]
- **Given** I review the risk information, **when** the disclosure is shown, **then** it explains the relevant investment risks and possible outcomes in plain language in my selected language. [FR-01, FR-08]
- **Given** I change the fund, amount, frequency, or other fee-affecting order detail, **when** the review screen updates, **then** the charges and risk information reflect the current order details before commitment.
- **Given** the applicable fee or required risk disclosure cannot be calculated or displayed, **when** I reach final review, **then** the app identifies the missing information and does not present the order as ready to commit.
- **Given** I choose to commit after reviewing the disclosures, **when** I confirm the order, **then** the system records the disclosure version and confirmation event with the order. [FR-25]

**Product/compliance dependency:** Disclosure wording, calculation source, what counts as an applicable charge, required acknowledgement, risk presentation, and retention fields need approval.

### Story 2.8: Place and Pay for a One-Time Direct Mutual-Fund Investment

As an investor,
I want to place and pay for a one-time investment in an eligible direct mutual fund,
So that I can complete an investment with a clear order and payment status.

**Acceptance Criteria:**

- **Given** I have selected a fund, passed suitability checks, and entered a valid amount, **when** I review the order, **then** the fund is identified as a direct plan and the amount, advisory fee, fund expenses, risk and possible outcomes are shown before I commit. [FR-04, FR-08]
- **Given** I enter an amount below the configured minimum or outside provider limits, **when** I try to continue, **then** the app explains the issue and does not submit the order.
- **Given** I confirm the order, **when** the execution rail accepts, rejects, or leaves it pending, **then** I see the authoritative status and a reference for tracking. [FR-10, FR-12]
- **Given** I reach payment, **when** I choose a supported method, **then** the configured UPI and/or net-banking options are shown and the provider authorization is linked to the correct order. [FR-10]
- **Given** payment succeeds, fails, is cancelled, or remains pending, **when** the provider result is returned, **then** order and payment statuses are shown separately and the app does not present an unpaid order as funded.
- **Given** a callback is delayed/duplicated or I retry after an uncertain response, **when** the transaction is processed, **then** existing order/payment state is checked and unintended duplicate orders or collections are prevented. [NFR-07]
- **Given** the payment or execution service fails, **when** I view the order, **then** I see its last confirmed state, the failure/pending status, and a safe next action.

- **Given** I confirm the one-time order, **when** the submission request is sent, **then** the app acknowledges receipt or shows a pending state within 2 seconds; a final execution status may arrive later and is shown only after provider confirmation. [NFR-01]

**Dependency/ambiguity:** Execution rail, provider/payment methods, supported order statuses, amount limits including the unresolved ?Rs 100-500? floor, and treatment of failed/pending orders need confirmation.

### Story 2.9: Set Up a SIP and Authorize Its Recurring Payment Mandate

As an investor,
I want to set up a SIP and authorize its recurring payment mandate,
So that scheduled investments can be collected through the selected payment rail.

**Acceptance Criteria:**

- **Given** I have selected a fund and passed suitability checks, **when** I set up a SIP, **then** I can enter an amount, choose a supported schedule, and see the configured minimum and first debit date. [FR-04]
- **Given** I enter an unsupported amount or schedule, **when** I continue, **then** the app explains the issue and does not submit the SIP instruction.
- **Given** I review the SIP, **when** I reach confirmation, **then** the app identifies the direct plan and shows the amount, schedule, advisory fee, fund expenses, risk, possible outcomes, mandate limit/terms, and payment timing before commitment. [FR-08, FR-10]
- **Given** a mandate is required, **when** I choose UPI AutoPay or eNACH and authorize through the provider, **then** the mandate status and SIP instruction status are recorded separately and linked to the correct SIP.
- **Given** the execution rail accepts, rejects, or leaves the SIP/mandate pending, **when** the result is returned, **then** I see the actual states and the SIP is not described as active for automatic debit until the required mandate is confirmed.
- **Given** I decline, fail, or time out during authorization, **when** I return to the app, **then** the mandate remains unauthorized and I see the next step without a false success state.
- **Given** callbacks are duplicated or I retry after an uncertain response, **when** the request is processed, **then** duplicate SIP instructions or active mandates are prevented. [NFR-07]

- **Given** I confirm SIP placement, **when** the setup request is sent, **then** the app acknowledges receipt or shows a pending state within 2 seconds; the SIP is not shown as active until provider and mandate requirements are confirmed. [NFR-01]

**Dependency/ambiguity:** Supported schedules, amount floor (including the unresolved ?Rs 100-500?), rail, mandate limits/terms, first-debit behavior, readiness rules, and provider statuses need confirmation.

### Story 2.10: Request a Mutual-Fund Withdrawal

As an investor with mutual-fund holdings,
I want to request a withdrawal to my verified bank account,
So that I can access my money and track when it will be paid.

**Acceptance Criteria:**

- **Given** my account has eligible mutual-fund units, **when** I start a withdrawal, **then** the app retrieves eligible holdings through the execution rail and lets me select a holding and enter a supported amount or unit quantity within the available balance. [FR-10]
- **Given** I enter an amount or quantity outside the supported redemption limits, **when** I continue, **then** the app explains the issue and does not submit the request.
- **Given** I review a valid withdrawal, **when** pre-submission information is available, **then** the app shows the selected holding, redemption amount/units, destination verified bank account, applicable charges or exit conditions, and expected timing where the rail provides it.
- **Given** I confirm the withdrawal, **when** the execution rail accepts, rejects, or leaves it pending, **then** the corresponding status and reference are shown. [FR-12]
- **Given** a withdrawal request is retried after a timeout, **when** the platform processes it, **then** it checks the existing request and prevents an unintended duplicate redemption. [NFR-07]
- **Given** redemption or payout fails or remains pending, **when** I view its status, **then** I can see the current state and the available next step without the app indicating that funds have been paid.

**Dependency:** Eligible holdings, redemption limits, exit-load/charge data, destination-account rules, execution-rail statuses, and payout-time estimates depend on provider capabilities and approved product rules.

### Story 2.11: View an Itemized Advisory-Fee Invoice

As a customer,
I want to view and retrieve an invoice for an advisory fee,
So that I can understand what the fee covers and keep a record for my finances.

**Acceptance Criteria:**

- **Given** an advisory fee is billed, **when** its invoice is generated, **then** it identifies the billed service, service period, fee amount, applicable taxes or adjustments, issue date, and invoice reference as approved by finance and counsel. [FR-14]
- **Given** an invoice is available, **when** I open my billing history, **then** I can view it in my selected language where an approved translation exists and retrieve a durable copy.
- **Given** a fee is adjusted, waived, refunded, or corrected, **when** the billing record changes, **then** the invoice or credit record reflects the approved adjustment and retains its relationship to the original.
- **Given** invoice generation fails, **when** a fee is billed, **then** the system records the exception and does not silently mark the invoice as delivered.
- **Given** an invoice is accessed, **when** it is displayed or downloaded, **then** access is limited to the customer and authorized personnel, and the artifact follows the approved retention policy. [NFR-05, NFR-06, FR-25]

**Finance/counsel dependency:** Mandatory invoice fields, tax/credit note treatment, language requirements, delivery channels, and retention period need confirmation.

### Story 2.12: Pay an Advisory Fee and Track Its Status

As a customer with an advisory-fee invoice,
I want to pay the billed amount using an approved payment method and see its status,
So that I can settle the fee and confirm the payment was recorded.

**Acceptance Criteria:**

- **Given** I have an unpaid invoice, **when** I choose to pay, **then** the app shows the amount due and the payment methods approved for fee collection. [FR-14, FR-10]
- **Given** I authorize payment, **when** the provider confirms success, **then** the invoice is marked paid and the payment reference is available to me.
- **Given** payment is pending, fails, or is cancelled, **when** the provider returns the result, **then** the invoice remains unpaid until confirmed and I see the status and available next step.
- **Given** I retry after a delayed response, **when** the system processes the retry, **then** it checks the existing transaction and prevents duplicate collection. [NFR-07]
- **Given** payment records are reconciled, **when** a mismatch or unresolved transaction is found, **then** it is surfaced to authorized operations staff for review. [FR-15]

**Product/finance dependency:** Whether customers pay manually or via an authorized recurring arrangement, supported rails, due dates, reminders, refunds, and late-fee policy require decisions. No late fee is assumed.

### Epic 3: Keep a Savings Habit on Track
An investor can set a goal and SIP plan, recover missed payments, adjust contributions, and receive calm goal-based guidance during market falls.
**FRs covered:** FR-05, FR-06, FR-07, FR-09
**Release:** MVP
**Dependencies:** Goal projection assumptions and market-fall trigger/content policy need product definition; SIP/payment rail capabilities.

### Story 3.1: Create an Investment Goal

As an investor,
I want to create a goal with a target and timeline,
So that I can connect my investments to a financial purpose.

**Acceptance Criteria:**

- **Given** I open Goals, **when** I start creating a goal, **then** I can provide the goal information required by the approved product flow, including a goal name, target amount, and target date. [FR-07]
- **Given** I submit valid goal details, **when** the goal is saved, **then** it appears in my goals list with its name, target amount, and target date.
- **Given** I omit a required value or enter an unsupported value, **when** I try to save, **then** the app identifies what needs correction and does not create an incomplete goal.
- **Given** the goal cannot be saved because of a service failure, **when** the request fails, **then** I see an error and can retry without creating duplicate goals.
- **Given** a goal is created, **when** I view it later, **then** its details remain associated with my account and are shown in my selected language. [FR-01, NFR-09]

**Product dependency:** Goal types, required fields, date/amount limits, editing/deletion behavior, and whether goals may be shared require product definition.

### Story 3.2: View a Recommended SIP for a Goal

As an investor with a goal,
I want to see a suggested SIP amount for my target and timeline,
So that I can understand a possible regular contribution toward the goal.

**Acceptance Criteria:**

- **Given** I have entered a valid goal target amount and date, **when** the goal plan is calculated, **then** I see a suggested SIP amount using the approved projection method. [FR-07]
- **Given** a suggested amount is shown, **when** I review it, **then** the app explains the assumptions and uncertainty in plain language and does not present projected returns as guaranteed.
- **Given** I want to contribute a different amount, **when** I edit the suggested SIP, **then** the app updates any displayed projection based on the new amount and clearly shows the revised result.
- **Given** the calculation cannot be completed because an input or approved assumption is missing, **when** the goal plan is displayed, **then** the app explains that it cannot provide a recommendation and identifies what is needed.
- **Given** I view the suggested SIP, **when** I choose to proceed, **then** I can continue to the SIP setup flow without the app creating or authorizing an investment automatically.

**Product/compliance dependency:** Calculation formula, return/inflation assumptions, rounding, disclaimer language, and whether the output is a recommendation or an illustrative estimate need approval.

### Story 3.3: Track Progress and See Whether a Goal Is on Track

As an investor with an active goal,
I want to see my progress toward the target and whether I’m on track,
So that I can understand how my investments compare with my plan.

**Acceptance Criteria:**

- **Given** a goal is linked to eligible investment holdings, **when** I open the goal, **then** I see the current value, target amount, target date, and progress toward the target using available data. [FR-07]
- **Given** progress data is available, **when** the goal status is calculated, **then** I see an on-track status based on the approved method and a plain-language explanation of what it means.
- **Given** the investment data is delayed or unavailable, **when** the goal is displayed, **then** the app indicates the data’s status or last updated time and avoids presenting a stale status as current.
- **Given** a goal has no linked holdings or sufficient history, **when** I view it, **then** the app shows that progress or on-track status is not yet available and explains what information is needed.
- **Given** the goal target, date, linked investments, or contributions change, **when** progress is recalculated, **then** the displayed values and status reflect the current inputs and calculation version.

**Product dependency:** Goal-to-holding linkage, valuation timing, progress formula, on-track thresholds, and statuses for paused or missed SIPs need definition.

### Story 3.4: Receive a Pre-Debit SIP Reminder

As an investor with an active SIP,
I want to be reminded before a scheduled debit,
So that I know when a contribution is coming and can take action if needed.

**Acceptance Criteria:**

- **Given** an active SIP has an upcoming scheduled debit, **when** the configured reminder time is reached, **then** I receive a reminder through the enabled notification channel(s). [FR-05, FR-12]
- **Given** I receive a reminder, **when** I view it, **then** it identifies the SIP, expected amount, and scheduled debit date.
- **Given** an SIP has been paused, cancelled, or its next debit date has changed before the reminder is sent, **when** the reminder job runs, **then** it uses the current SIP status/date and does not send a misleading reminder for an obsolete debit.
- **Given** a reminder cannot be delivered through one channel, **when** delivery fails, **then** the failure is recorded and the system follows the configured channel fallback policy where one exists.
- **Given** notification language preferences are available, **when** the reminder is sent, **then** its content uses my selected language. [FR-01]

**Product dependency:** Reminder lead time, supported channels, user preferences, fallback policy, and treatment of time-zone/date changes need definition.

### Story 3.5: Retry an Eligible Failed SIP Debit

As an investor with an active SIP,
I want eligible failed debits to be retried automatically,
So that a temporary payment failure doesn’t immediately break my investing habit.

**Acceptance Criteria:**

- **Given** a scheduled SIP debit fails, **when** the payment provider returns a failure reason, **then** the system determines whether the failure is retryable using the approved policy. [FR-05]
- **Given** the failure is retryable, **when** the configured retry time arrives, **then** the system submits a retry for the same SIP and records the attempt and result.
- **Given** the failure is non-retryable or the retry limit has been reached, **when** the failure is processed, **then** no automatic retry is submitted and the SIP is marked for recovery action.
- **Given** a retry is scheduled or submitted, **when** the original transaction status changes or a callback is duplicated, **then** the system checks the latest state and prevents duplicate debits. [NFR-07]
- **Given** a retry succeeds or fails, **when** the result is received, **then** the SIP debit status and the investor’s notification/recovery state are updated accurately. [FR-12]

**Provider/policy dependency:** Retryable failure codes, number and timing of attempts, mandate checks, duplicate detection, and customer notification rules need definition.

### Story 3.6: Recover a Failed SIP Debit

As an investor whose SIP debit failed,
I want a clear recovery prompt and the option to choose a supported alternate debit date,
So that I can decide how to continue my planned investment.

**Acceptance Criteria:**

- **Given** a SIP debit has failed and no automatic retry will resolve it, **when** I open the app or the recovery message, **then** I see which SIP failed, the debit date, the available reason, and clear recovery actions. [FR-05]
- **Given** the execution rail supports an alternate date, **when** I choose to reschedule, **then** I can select from the supported dates and review the changed debit timing before confirming.
- **Given** I confirm an alternate date, **when** the provider accepts the change, **then** the SIP schedule/status is updated and I receive confirmation.
- **Given** the provider rejects the alternate date or the service is unavailable, **when** the change fails, **then** the original SIP state is preserved, the error is explained, and I can retry or get help.
- **Given** no alternate date is supported, **when** I open recovery options, **then** the app explains this and offers the other approved recovery action without implying the debit will occur.

**Product/vendor dependency:** Available alternate dates, rescheduling limits, effect on future SIP dates, retry interaction, and approved recovery actions need definition.

### Story 3.7: Increase an SIP Amount through Step-Up

As an investor with an active SIP,
I want to schedule an increase to my contribution,
So that I can gradually invest more as my circumstances change.

**Acceptance Criteria:**

- **Given** I have an active SIP, **when** I choose step-up, **then** I can enter a supported increase amount or rate and the effective date/frequency allowed by the execution rail. [FR-06]
- **Given** I enter valid step-up details, **when** I review the change, **then** I see the current and future SIP amount, when the increase takes effect, and any applicable mandate or payment limit impact.
- **Given** I confirm the step-up, **when** the execution rail accepts the instruction, **then** the updated future schedule and its status are shown to me.
- **Given** the step-up is rejected, unsupported, or pending, **when** the result is returned, **then** the app shows the accurate status and does not represent the new amount as active until confirmed.
- **Given** I retry after an uncertain response, **when** the change request is processed, **then** the system checks the existing request and avoids duplicate increases. [NFR-07]

**Product/vendor dependency:** Supported increase type, amount/rate limits, effective timing, mandate-capacity changes, and treatment of existing SIPs need definition.

### Story 3.8: Pause or Resume an SIP without Penalty

As an investor with an active SIP,
I want to pause contributions and resume them later without a penalty,
So that I can adjust contributions when my circumstances change.

**Acceptance Criteria:**

- **Given** I have an active SIP, **when** I choose to pause it, **then** I can review the effective date and any debit that is already in flight before confirming. [FR-06]
- **Given** I confirm a pause, **when** the execution rail accepts it, **then** the SIP status changes to paused, future scheduled debits are suppressed from the effective date, and no pause penalty is charged.
- **Given** a pause request is rejected or pending, **when** I view the SIP, **then** the app displays the actual status and does not imply the pause has taken effect.
- **Given** I have a paused SIP, **when** I choose to resume, **then** I can review the next debit date and amount before confirming the resume.
- **Given** the resume is accepted, **when** the provider confirms, **then** the SIP returns to active with the confirmed schedule; if a valid mandate is required but unavailable, the app explains the next required step.
- **Given** I retry a pause or resume after an uncertain response, **when** the request is processed, **then** duplicate schedule changes are prevented. [NFR-07]

**Product/vendor dependency:** Pause duration/limits, effective-date rules, in-flight debit treatment, resumed schedule, and confirmation statuses depend on product and execution-rail behavior.

### Story 3.9: Receive Calm, Goal-Aware Guidance during a Market Fall

As an investor with active investments,
I want calm context about my goals during a sharp market fall,
So that I can understand the change without being pushed into a panic decision.

**Acceptance Criteria:**

- **Given** an approved market-fall condition is met, **when** I open the app, **then** I can see a calm in-app message with relevant market context and my goal progress where available. [FR-09]
- **Given** guidance is shown, **when** I read it, **then** it uses plain language, avoids alarmist or promotional wording, and does not prompt me to buy or sell.
- **Given** the message references market movement or my portfolio, **when** it is displayed, **then** the data source and timestamp are available and stale or unavailable data is identified.
- **Given** no suitable goal or portfolio context is available, **when** guidance is shown, **then** the app presents general approved context without implying that it reflects my personal circumstances.
- **Given** the market condition no longer meets the approved trigger, **when** the app determines whether to show the message, **then** it follows the configured display and repeat rules rather than repeatedly interrupting me.

**Product/compliance dependency:** Sharp-fall trigger, data source, content approval, repeat/suppression behavior, and any relationship to existing market-fall advice policies need definition.

### Epic 4: Understand Portfolio and Investment Outcomes
An investor can review holdings, returns, allocation, transaction status, statements and tax-relevant reports, and receive important account notifications.
**FRs covered:** FR-11, FR-12
**Release:** MVP
**Dependencies:** Data availability and calculation/reporting rules from execution partners and compliance review.

### Story 4.1: View Portfolio Holdings

As an investor,
I want to see my mutual-fund holdings in one portfolio view,
So that I can understand what I own and its current value.

**Acceptance Criteria:**

- **Given** I have investment holdings, **when** I open Portfolio, **then** I see each holding with the fund name, units or quantity where available, invested amount, current value, and valuation status. [FR-11]
- **Given** a holding’s valuation is delayed or unavailable, **when** the portfolio is displayed, **then** the app identifies the data’s status or last updated time rather than presenting it as current.
- **Given** I have no holdings, **when** I open Portfolio, **then** I see a clear empty state and a path to Explore.
- **Given** holdings data is still loading or cannot be retrieved, **when** the portfolio opens, **then** I see an appropriate loading or error state and can retry.
- **Given** holdings are retrieved, **when** they are displayed, **then** only investments belonging to my account are included and sensitive account information is protected. [NFR-06]

**Data dependency:** Source of truth for holdings, units, valuation source/frequency, treatment of pending orders, and portfolio refresh timing depend on the execution rail and provider.

### Story 4.2: View Portfolio Returns as XIRR

As an investor,
I want to see the time-weighted effect of my dated investments and withdrawals expressed as XIRR,
So that I can understand my portfolio’s historical return in a consistent way.

**Acceptance Criteria:**

- **Given** my account has sufficient dated cash-flow and valuation data, **when** I view portfolio performance, **then** the app displays the calculated XIRR for the defined portfolio and period. [FR-11]
- **Given** an XIRR value is shown, **when** I review it, **then** the calculation period, “as of” date, and an explanation that historical returns are not guaranteed future returns are visible.
- **Given** data is insufficient or the calculation cannot produce a valid result, **when** I view performance, **then** the app explains that XIRR is unavailable rather than showing a misleading value.
- **Given** a transaction or valuation is corrected, **when** performance is recalculated, **then** the displayed XIRR reflects the corrected data and updated “as of” date.
- **Given** portfolio and XIRR data are retrieved, **when** they are shown, **then** they correspond to the authenticated account and follow the approved calculation and data-quality rules.

**Product/data dependency:** XIRR scope (portfolio vs individual holding), cash-flow inclusion, handling of pending/reversed transactions, valuation timestamp, period selection, and rounding need definition.

### Story 4.3: View Portfolio Asset Allocation

As an investor,
I want to see how my mutual-fund holdings are distributed across asset categories,
So that I can understand the overall composition of my investments.

**Acceptance Criteria:**

- **Given** I have holdings with allocation data, **when** I open the allocation view, **then** I see the distribution by the product-approved asset categories with values and percentages. [FR-11]
- **Given** a category’s data is unavailable or a holding cannot be classified, **when** allocation is displayed, **then** the app identifies the unclassified or unavailable portion rather than silently omitting it.
- **Given** allocation percentages are displayed, **when** I review them, **then** the denominator and “as of” date are clear and the displayed categories reconcile to the total according to approved rounding rules.
- **Given** holdings data is delayed, **when** allocation is displayed, **then** the view shows the last updated time or indicates that allocation is unavailable.
- **Given** I have no holdings, **when** I open allocation, **then** I see a clear empty state rather than a misleading zero-allocation chart.

**Product/data dependency:** Asset categories, look-through vs fund-level allocation, valuation basis, treatment of unknown data, display format, and rounding need definition.

### Story 4.4: View and Download an Account Statement

As an investor,
I want to view and download a statement for my account and a selected period,
So that I can keep a record of my investments and transactions.

**Acceptance Criteria:**

- **Given** statements are available for my account, **when** I open statements, **then** I can see the available statement periods and select one to view. [FR-11]
- **Given** I select a period, **when** the statement is generated or retrieved, **then** it identifies the account and period and includes the approved holdings and transaction information for that period.
- **Given** the statement is ready, **when** I choose download, **then** I receive a readable file in the supported format.
- **Given** statement data is incomplete or generation fails, **when** I request the statement, **then** the app reports the issue and does not present an incomplete artifact as final.
- **Given** a statement is accessed or downloaded, **when** the request is processed, **then** only the authenticated account owner and authorized personnel can access it, and it follows the approved retention policy. [NFR-06, FR-25]

**Product/compliance dependency:** Statement periods, required fields, file format, availability delay, language, retention, and whether statements come from the platform or execution partner need definition.

### Story 4.5: View and Download a Capital-Gains Report

As an investor,
I want a capital-gains report for a selected financial year,
So that I can review investment transactions relevant to my tax preparation.

**Acceptance Criteria:**

- **Given** transaction data is available for my account, **when** I select a financial year, **then** the app generates or retrieves a capital-gains report for that period. [FR-11]
- **Given** a report is ready, **when** I view it, **then** it lists the approved transaction and gain/loss fields with the source and “as of” date.
- **Given** I download the report, **when** the file is prepared, **then** it is readable and contains the same data and calculation version shown in the app.
- **Given** required transaction data is missing, pending, or corrected, **when** I request the report, **then** the app identifies the limitation and does not present the report as complete without an approved data-quality status.
- **Given** the tax report is accessed, **when** I view or download it, **then** access is limited to my account and authorized personnel and the artifact follows the approved retention policy. [NFR-06, FR-25]

**Tax/data dependency:** Tax classifications, calculation methodology, financial-year boundaries, required fields, correction/reissue process, partner data feeds, and appropriate disclaimer language need tax and compliance review.

### Story 4.6: Receive Investment-Order Status Notifications

As an investor,
I want to be notified when an investment order’s status changes,
So that I know whether it is accepted, pending, rejected, or completed.

**Acceptance Criteria:**

- **Given** an order status changes, **when** the updated status is confirmed by the source system, **then** the platform sends a notification through the configured push, SMS, or email channel(s). [FR-12]
- **Given** I receive an order notification, **when** I open it, **then** it identifies the order and shows its current status and the next step where one is available.
- **Given** an order-status event is duplicated or retried, **when** notifications are processed, **then** the platform avoids sending duplicate messages for the same status event.
- **Given** a notification channel is unavailable or delivery fails, **when** the delivery result is returned, **then** the failure is logged and the configured fallback policy is applied if available.
- **Given** notifications are sent, **when** their content is composed, **then** it uses the customer’s language preference and avoids exposing sensitive financial or personal information in an unsecured message. [FR-01, NFR-04, NFR-06, NFR-10]

**Product dependency:** Which statuses trigger notifications, channel preferences/consent rules, fallback behavior, delivery timing, and message content need definition.

### Story 4.7: Receive SIP Debit Notifications

As an investor with an active SIP,
I want to be notified when a scheduled debit is processed,
So that I know whether the contribution was collected.

**Acceptance Criteria:**

- **Given** a scheduled SIP debit is processed, **when** the source system confirms its result, **then** I receive a notification through the configured push, SMS, or email channel(s). [FR-12]
- **Given** a debit succeeds, **when** I view the notification, **then** it identifies the SIP and debit date and confirms the result.
- **Given** the debit is pending, **when** I view the notification, **then** it is clearly marked pending and not described as successful.
- **Given** a debit event is retried or duplicated, **when** notifications are generated, **then** the same event does not result in duplicate messages.
- **Given** a notification is delivered, **when** its content is composed, **then** it uses my selected language and does not expose sensitive payment details in an unsecured channel. [FR-01, NFR-04, NFR-06]

**Product dependency:** Which debit outcomes trigger notifications, channel rules, content, delivery timing, and relationship to the pre-debit reminder need definition.

### Story 4.8: Receive Failed-Debit and KYC-Status Notifications

As an investor,
I want to be told when a SIP debit fails or my KYC status changes,
So that I can take the appropriate next step without repeatedly checking the app.

**Acceptance Criteria:**

- **Given** a SIP debit failure is confirmed, **when** the platform processes the event, **then** I receive a notification through the configured push, SMS, or email channel(s) with the failed debit date and a safe path to recovery. [FR-12, FR-05]
- **Given** my KYC status changes to pending, complete, rejected, or needs attention, **when** the status is confirmed, **then** I receive a notification and can securely open the app to view details. [FR-12, FR-02]
- **Given** a failure or KYC event is duplicated or retried, **when** notifications are processed, **then** I do not receive duplicate messages for the same status event.
- **Given** sensitive rejection details or identity information exist, **when** a notification is sent through an external channel, **then** it does not expose those details; the app directs me to authenticate to view the approved explanation. [NFR-04, NFR-06]
- **Given** a message is sent, **when** its content is composed, **then** it uses my selected language and logs delivery status for operational support. [FR-01, NFR-10]

**Product/compliance dependency:** Notification status taxonomy, disclosure-safe message content, delivery channel rules, fallbacks, and deep-link behavior need definition.

### Epic 5: Get Human Help and Resolve Issues
An investor can ask for help in their language, use assisted support, track a request, and reach a human when self-service is insufficient.
**FRs covered:** FR-13
**Release:** MVP
**Dependencies:** Support operating hours, channels, languages, escalation ownership and service levels need definition.

### Story 5.1: Start a Support Chat

As an investor who needs help,
I want to start a support chat in my selected language,
So that I can explain my issue and receive assistance.

**Acceptance Criteria:**

- **Given** I open Support, **when** chat is available, **then** I can start a conversation in Hindi or English. [FR-13, FR-01]
- **Given** I start a chat, **when** I submit a message, **then** it is associated with my account and a support conversation reference is provided.
- **Given** chat is unavailable or no agent is available, **when** I try to start a conversation, **then** the app explains availability and offers an alternative support route such as a call-back or ticket.
- **Given** I share account details in chat, **when** the conversation is stored or viewed, **then** access is limited to authorized support staff and handling follows the privacy policy. [NFR-06]
- **Given** a chat message cannot be sent, **when** the service returns an error, **then** I see that it was not sent and can retry or use another support channel.

**Product dependency:** Chat operating hours, live vs asynchronous model, supported languages, response service levels, identity verification for account-specific requests, and retention need definition.

### Story 5.2: Request a Vernacular Support Call-Back

As an investor who prefers speaking to someone,
I want to request a call-back in Hindi or English,
So that I can resolve my issue through a conversation in my preferred language.

**Acceptance Criteria:**

- **Given** I choose call-back support, **when** I submit a request, **then** I can select Hindi or English and provide the contact details and issue information required by the approved flow. [FR-13, FR-01]
- **Given** my request is submitted, **when** it is accepted, **then** I see confirmation and the expected call-back window if one is available.
- **Given** call-back support is unavailable for my selected language or time, **when** I submit the request, **then** the app explains the limitation and offers another support route.
- **Given** a call-back request cannot be submitted, **when** the service fails, **then** I see that no request was created and can retry or use another channel.
- **Given** a support agent calls me about an account-specific issue, **when** the call begins, **then** the support process follows the approved identity-verification policy before disclosing protected account information. [NFR-06]

**Product/operations dependency:** Available languages, operating hours, queueing, response window, contact detail source, callback attempt policy, and identity-verification process need definition.

### Story 5.3: Use Assisted Mode during an App Flow

As an investor who needs help using the app,
I want a support agent to guide me through an eligible flow,
So that I can complete it with assistance while keeping control of my account.

**Acceptance Criteria:**

- **Given** I am in an eligible flow and request assistance, **when** assisted mode starts, **then** the app connects me to the available support channel in my selected language or explains when help is unavailable. [FR-13, FR-01]
- **Given** an agent is assisting me, **when** account-specific information is needed, **then** the agent can access only the minimum information allowed by my authorization and support policy.
- **Given** an action could submit an order, change account details, authorize payment, or provide consent, **when** it is needed during assisted mode, **then** I must review and perform or explicitly authorize it in the authenticated app; the support agent cannot silently complete it on my behalf.
- **Given** the assisted session ends or times out, **when** the session is closed, **then** the agent’s access ends and the session outcome is recorded according to the approved audit and retention policy. [NFR-04, NFR-06, FR-25]
- **Given** the assistance channel disconnects, **when** the session is interrupted, **then** my in-progress state is preserved where supported and I can reconnect or continue without the agent’s session remaining active.

**Product/security dependency:** Eligible app flows, user consent, agent permissions, identity verification, session timeout, recording/audit rules, and data visibility need definition.

### Story 5.4: Track a Support Request

As an investor who has contacted support,
I want a reference and current status for my request,
So that I know it has been received and can follow its progress.

**Acceptance Criteria:**

- **Given** a support interaction creates a ticket, **when** it is accepted, **then** I receive a unique reference and can view the ticket in my support history. [FR-13]
- **Given** a ticket exists, **when** I open it, **then** I see its current status, submission time, issue summary, and any response or next step made available to me.
- **Given** the support team updates a ticket, **when** the update is saved, **then** I can see the latest status and response in the ticket history.
- **Given** a ticket cannot be created or loaded, **when** the service fails, **then** the app explains the issue and provides a retry or alternate support route.
- **Given** I view a ticket, **when** its contents are retrieved, **then** only tickets associated with my account are visible and protected information is handled under the approved privacy/retention policy. [NFR-06]

**Operations dependency:** Ticket status lifecycle, ticket creation from chat/callback, response ownership, closure/reopen rules, and customer update method need definition.

### Story 5.5: Escalate a Support Issue to a Human

As an investor whose issue needs more help,
I want to ask for a human support agent,
So that I can get assistance for a problem that cannot be resolved through the current support interaction.

**Acceptance Criteria:**

- **Given** I’m using an eligible support channel, **when** I request a human agent, **then** the system offers the available human support route in my selected language. [FR-13, FR-01]
- **Given** a human agent is available, **when** my request is accepted, **then** the issue summary and prior interaction context are made available to the agent according to the approved access policy, so I do not need to repeat the issue unnecessarily.
- **Given** no human agent is available, **when** I request escalation, **then** the app explains availability, provides a queue/call-back/ticket option where supported, and gives a reference if a request is created.
- **Given** the handoff fails, **when** the support channel returns an error, **then** my original request and context remain available and I can retry or use another support channel.
- **Given** an agent accesses my account-specific support context, **when** the handoff occurs, **then** access follows identity-verification, least-privilege, and audit policies. [NFR-04, NFR-06, FR-25]

**Operations dependency:** Eligible channels, agent availability/queue behavior, language routing, context-sharing rules, and escalation service levels need definition.

### Epic 6: Run Compliant Customer and Investment Operations
Operations and compliance staff can review KYC, reconcile activity, handle complaints, monitor obligations, and retrieve auditable records.
**FRs covered:** FR-15, FR-25 (ongoing advice audit trail, retention, principal-officer and certification tracking)
**Release:** MVP
**Dependencies:** Counsel confirmation of applicable current RIA, cyber-resilience, privacy, retention, grievance and reporting obligations; operational procedures.

### Story 6.1: Review KYC Cases in an Operations Queue

As an authorized KYC operations staff member,
I want to review pending KYC cases and their verification results,
So that I can resolve cases that require manual attention.

**Acceptance Criteria:**

- **Given** I have the required operations role, **when** I open the KYC queue, **then** I see cases awaiting review with their status, submission time, and review reason. [FR-15]
- **Given** I open a KYC case, **when** the case details load, **then** I can review the verification results and only the personal information needed for that review.
- **Given** a case requires a decision, **when** I approve, reject, or request additional information, **then** I must record an outcome and reason according to the configured workflow.
- **Given** a decision is saved, **when** the customer-facing status is updated, **then** the result and approved rejection/next-step explanation are available to the onboarding flow. [FR-02]
- **Given** I do not have the required role or the case is outside my permitted scope, **when** I try to access or change it, **then** access is denied and the attempt is logged. [NFR-04, FR-25]

**Compliance/operations dependency:** Staff roles, manual-review criteria, decision authority, escalation/second review rules, required evidence, and customer-visible reason taxonomy need definition.

### Story 6.2: Reconcile Investment and Payment Activity

As an operations staff member,
I want internal order/payment records compared with provider records,
So that discrepancies can be identified and resolved before they harm customer accounts.

**Acceptance Criteria:**

- **Given** internal records and provider records are available for a reconciliation period, **when** the reconciliation job runs, **then** matching transactions are linked using the approved identifiers and rules. [FR-15]
- **Given** a transaction is unmatched, has a value/date mismatch, or has conflicting statuses, **when** reconciliation completes, **then** it is placed in an exception queue with the discrepancy details and source references.
- **Given** a reconciliation job is retried, **when** the same source data is processed again, **then** existing matches and exceptions are not duplicated. [NFR-07]
- **Given** an authorized operations user resolves an exception, **when** they record the resolution, **then** the action, reason, source records, user, and timestamp are retained for audit. [FR-25]
- **Given** a job fails or source data is unavailable, **when** the run ends, **then** its status and error are visible to authorized operations staff and the system does not show the period as fully reconciled.

**Operations/vendor dependency:** Reconciliation cadence, source systems, matching keys/tolerances, exception ownership, escalation, and resolution authority need definition.

### Story 6.3: View the Compliance Operations Dashboard

As an authorized compliance staff member,
I want a dashboard of compliance work and unresolved exceptions,
So that I can identify obligations and issues needing attention.

**Acceptance Criteria:**

- **Given** I have the required compliance role, **when** I open the dashboard, **then** I see the approved summary indicators for open KYC reviews, reconciliation exceptions, complaints, and other compliance work. [FR-15]
- **Given** an item is due or overdue under an approved workflow, **when** it appears on the dashboard, **then** its status and due information are clear.
- **Given** a summary indicator is selected, **when** I open it, **then** I can reach the underlying records I am authorized to view.
- **Given** dashboard data is stale or unavailable, **when** the page is displayed, **then** the last updated time or data limitation is visible and the dashboard does not imply all work is current.
- **Given** a user lacks the appropriate role, **when** they request dashboard or underlying data, **then** access is denied and the attempt is logged. [NFR-04, FR-25]

**Compliance dependency:** Dashboard metrics, risk/priority definitions, due-date rules, role access, alert thresholds, and applicable regulatory obligations require counsel/compliance definition.

### Story 6.4: Manage Customer Complaints and Grievance Cases

As a grievance operations staff member,
I want complaints recorded, assigned, tracked, and resolved in one case record,
So that customers receive a response and the organization can meet its grievance obligations.

**Acceptance Criteria:**

- **Given** a complaint is received through an approved channel, **when** it is recorded, **then** it receives a unique reference, received date, source, category, owner, and current status. [FR-15]
- **Given** a complaint has an applicable resolution deadline, **when** it is assigned or updated, **then** the due date is calculated from the approved rule and surfaced before it becomes overdue.
- **Given** an authorized staff member works the complaint, **when** they add a response, status change, or resolution, **then** the action, author, timestamp, and supporting record are retained in the case history.
- **Given** a complaint requires escalation or external grievance handling, **when** an approved workflow calls for it, **then** the case records the escalation and relevant reference/status, including applicable SCORES/ODR visibility or process information.
- **Given** the complaint is resolved, **when** closure is recorded, **then** the resolution and customer communication outcome are retained and the case remains available for audit. [FR-25]

**Compliance/operations dependency:** Complaint categories, intake sources, deadlines, escalation path, customer updates, SCORES/ODR processes, and retention rules need counsel and operations confirmation.

### Story 6.5: Review Advice and Operations Audit Trails

As an authorized compliance reviewer,
I want to search and review records of advice and operational actions,
So that I can reconstruct what occurred for a customer or compliance event.

**Acceptance Criteria:**

- **Given** I have the required compliance role, **when** I search for an authorized customer or case, **then** I can retrieve the available advice, suitability, consent, fee-disclosure, KYC, complaint, and reconciliation events relevant to that record. [FR-25, FR-15]
- **Given** an event is displayed, **when** I review it, **then** its event type, timestamp, actor or system source, related record, and outcome are identifiable.
- **Given** I attempt to change or delete a recorded audit event, **when** the request is processed, **then** the system prevents unauthorized alteration and records any permitted correction as a separate traceable event.
- **Given** I export or view audit information, **when** the request is processed, **then** access is role-limited, logged, and restricted to the scope I’m authorized to review. [NFR-04, NFR-10]
- **Given** an audit source is unavailable or a requested record is outside retention, **when** I search, **then** the result clearly identifies the limitation rather than implying the audit trail is complete.

**Compliance dependency:** Required event types/fields, access roles, correction process, retention periods, export formats, and audit integrity controls need counsel and control-owner approval.

### Story 6.6: Apply Retention Rules to Compliance Records

As an authorized records administrator,
I want records retained, placed on hold, and disposed of according to approved rules,
So that the organization can meet its recordkeeping obligations while honoring privacy requirements.

**Acceptance Criteria:**

- **Given** an approved retention schedule exists for a record category, **when** a record is created or reaches a retention milestone, **then** its category, retention start date, and scheduled review/disposal date are assigned according to that schedule. [FR-25, NFR-05]
- **Given** a record is subject to a legal or regulatory hold, **when** its retention status is updated, **then** disposal is suspended until an authorized release of the hold is recorded.
- **Given** a record reaches the end of its retention period and has no active hold, **when** the approved disposition workflow runs, **then** the record is deleted or anonymized as required by its category and policy, and the disposition is auditable.
- **Given** a customer requests data deletion, **when** the request is reviewed, **then** data eligible for deletion is handled under the approved privacy process and records required for legal/compliance retention are retained with the required restriction.
- **Given** a retention or disposition action fails, **when** the system detects the failure, **then** the record is surfaced for authorized review and is not reported as successfully disposed.

**Compliance dependency:** Record categories, retention periods, start events, hold authority, deletion/anonymization method, customer request handling, and evidence retention need counsel confirmation.

### Story 6.7: Track Principal-Officer and Certification Status

As a compliance administrator,
I want to maintain principal-officer and associated-person certification records,
So that I can monitor eligibility and renewal needs for the advisory business.

**Acceptance Criteria:**

- **Given** I have the required compliance role, **when** I create or update an officer/person record, **then** I can record the role, required certification(s), issue/expiry dates, and supporting evidence defined by the approved policy. [FR-25]
- **Given** a certification is current, expiring, expired, or missing, **when** I view the compliance dashboard or record, **then** its status is clearly shown.
- **Given** a certification is approaching expiry under the configured reminder rule, **when** the reminder condition is met, **then** the responsible authorized staff are notified.
- **Given** certification evidence or status is changed, **when** the update is saved, **then** the prior value, new value, actor, timestamp, and evidence reference are retained in the audit trail.
- **Given** a user lacks the compliance role, **when** they access or modify certification records, **then** access is denied and the attempt is logged. [NFR-04, NFR-10]

**Compliance dependency:** Roles/personnel in scope, qualification/certification requirements, evidence fields, validity periods, reminder timing, and escalation for expired credentials must be set from confirmed SEBI and counsel guidance.

### Story 6.8: Monitor Platform Health, Performance, and Capacity

As an operations staff member,
I want to monitor service health, performance, and capacity against approved targets,
So that I can identify disruptions and protect critical investing journeys.

**Acceptance Criteria:**

- **Given** service metrics are available, **when** I view operations health, **then** I can see availability during 09:00-15:30 IST against the 99.9% target, cold-start/order/quote performance, error rates, and last-updated time. [NFR-01, NFR-02]
- **Given** the service approaches or breaches an approved availability or performance threshold, **when** monitoring detects it, **then** an actionable real-time alert is routed to the configured on-call owner and the event is logged.
- **Given** a peak-load scenario reaches 10x the agreed baseline, **when** core onboarding, order, SIP, payment, and status paths are exercised, **then** they meet approved performance limits or degrade safely without duplicate transactions or false success. [NFR-03, NFR-07]
- **Given** an incident occurs, **when** operations reviews it, **then** correlated logs and traces identify the affected request path without exposing secrets or unnecessary personal data. [NFR-10, NFR-04]
- **Given** a disaster-recovery plan is configured, **when** recovery is tested, **then** approved RTO/RPO values are recorded, recovery evidence is retained, and failures are assigned for remediation. [NFR-02, NFR-10]

**Architecture/operations dependency:** Monitoring stack, baseline traffic definition, exact latency/error thresholds, RTO/RPO values, on-call ownership, and recovery cadence need architecture and counsel confirmation.

### Story 6.9: Maintain Security Controls and Vulnerability Readiness

As a security operations owner,
I want to monitor required security controls and vulnerability findings,
So that customer information and transaction flows remain protected.

**Acceptance Criteria:**

- **Given** sensitive data is stored or transmitted, **when** the platform processes it, **then** encryption at rest and in transit is enforced and secrets are obtained from the approved secrets-management mechanism, not embedded in application code or logs. [NFR-04]
- **Given** a scheduled or release-triggered VAPT is completed, **when** findings are recorded, **then** each finding has a severity, owner, due date, and remediation/exception status; release-blocking findings follow the approved security policy. [NFR-04]
- **Given** suspicious access or a security-control failure is detected, **when** monitoring raises an event, **then** it alerts the responsible owner, preserves event evidence, and creates a traceable incident record. [NFR-04, NFR-10]
- **Given** a user accesses a protected operation, **when** authorization is evaluated, **then** identity and device-binding controls are enforced and denied attempts are logged. [NFR-04, FR-25]

**Security dependency:** Encryption/key-management standards, VAPT cadence and severity policy, alert rules, exception approval, and access-control review need architecture/security-owner approval.

### Story 6.10: Respond to Security and Privacy Incidents

As a compliance and security incident owner,
I want incidents classified, contained, documented, and reported through an approved workflow,
So that customer impact is limited and applicable reporting duties are met.

**Acceptance Criteria:**

- **Given** a suspected security or personal-data incident is detected, **when** it is reported, **then** the incident receives a reference, severity, owner, detection time, affected systems/data scope, and response status. [NFR-05, NFR-10]
- **Given** an incident is confirmed, **when** the response process begins, **then** containment, evidence preservation, impact assessment, privacy review, and recovery actions are recorded with actors and timestamps.
- **Given** an incident may trigger a regulatory notification, **when** it is assessed, **then** the system surfaces the applicable counsel-approved reporting rule and deadline, including CERT-In where applicable, and records decision and submission evidence. [NFR-05]
- **Given** the incident involves personal data, **when** it is assessed, **then** response follows the approved DPDP/privacy process, including any required customer communication and access restriction. [NFR-05, NFR-06]
- **Given** an incident is closed, **when** closure is approved, **then** resolution, root cause, remediation owner, and lessons/actions are retained under the approved record schedule. [FR-25]

**Counsel dependency:** Incident thresholds, statutory timelines, CERT-In and SEBI reporting duties, DPDP response steps, and customer-notification requirements need current counsel confirmation.

### Epic 7: Coordinate Finances with a Trusted Family Member
An investor can grant a trusted relative limited, view-only access to relevant account information and shared goals.
**FRs covered:** FR-16
**Release:** v1.0
**Dependencies:** Consent, authorization, revocation, nominee/helper boundaries and privacy rules.

### Story 7.1: Invite a Trusted Relative

As an investor,
I want to invite a trusted relative to view selected account information,
So that they can help me stay informed about shared financial goals.

**Acceptance Criteria:**

- **Given** I’m an eligible account holder, **when** I start a family-access invitation, **then** I can provide the relative’s contact information and see what access the invitation is intended to grant. [FR-16]
- **Given** I submit a valid invitation, **when** the system sends it, **then** the invitation is associated with my account and its status is visible to me.
- **Given** the relative accepts the invitation through the approved verification flow, **when** identity and authorization checks pass, **then** the relationship is linked to my account with the approved view-only role.
- **Given** an invitation is invalid, expired, or cannot be delivered, **when** the result is known, **then** I’m shown its status and can correct or resend it according to the configured policy.
- **Given** an invitation is pending, **when** I choose to cancel it, **then** it can no longer be accepted.

**Product/privacy dependency:** Eligible inviter/recipient types, invitation verification, expiry/resend policy, whether the invitee must be a nominee, and the precise scope shown after acceptance need definition.

### Story 7.2: View Shared Account Information with Read-Only Access

As an invited family member,
I want to view the account information the investor has shared with me,
So that I can support their financial planning without being able to transact on their behalf.

**Acceptance Criteria:**

- **Given** I have accepted an invitation and passed the required verification, **when** I open the shared account view, **then** I can see only the information the investor authorized, such as the selected portfolio summary and shared goals. [FR-16]
- **Given** I have view-only access, **when** I use the shared view, **then** I cannot place orders, change account details, authorize payments, or alter the investor’s goals or settings.
- **Given** the investor changes the information they share, **when** I next view the account, **then** access reflects the updated authorization.
- **Given** the investor revokes my access, **when** the revocation takes effect, **then** I can no longer access the shared account information.
- **Given** I have access to a shared account, **when** I view it, **then** my identity is clearly distinguished from the account holder and data is protected under the approved privacy and security policy. [NFR-04, NFR-06]

**Product/privacy dependency:** Exact data visible to a relative, freshness, export/screenshot controls, and revocation timing need definition.

### Story 7.3: Share and Manage Access to Selected Goals

As an investor,
I want to share selected financial goals with an invited relative,
So that we can review progress together while I keep other goals private.

**Acceptance Criteria:**

- **Given** I have an active family-access relationship, **when** I choose a goal to share, **then** I can see what goal details the relative will be able to view before I confirm. [FR-16]
- **Given** I confirm sharing, **when** the relative opens the shared view, **then** the selected goal and its approved progress information are visible to them.
- **Given** a goal is not shared, **when** the relative views my account, **then** that goal and its details are not exposed.
- **Given** I stop sharing a goal, **when** the change takes effect, **then** the relative can no longer access that goal’s details while other authorized shared information remains available.
- **Given** a shared goal’s target or progress changes, **when** the relative views it, **then** the shared view reflects the updated information and its last-updated status.

**Product/privacy dependency:** Goal fields visible to relatives, edit rights (currently view-only per FR-16), notifications on changes, and revocation propagation timing need definition.

### Epic 8: Invest in Equity Delivery and Apply for IPOs
An eligible investor can access equity delivery and IPO workflows through the correctly licensed partner or separate entity, with order/application status.
**FRs covered:** FR-17, FR-18
**Release:** v1.0
**Dependencies:** Separate partner/entity and counsel-approved role, data, payment, disclosure and service boundaries. These capabilities are outside the RIA execution service.

### Story 8.1: View Equity Quotes through the Authorized Partner

As an eligible investor,
I want to view equity quotes supplied through the authorized partner,
So that I can review a security’s current market information before deciding what to do.

**Acceptance Criteria:**

- **Given** I have access to the partner-enabled equity service, **when** I open an eligible security, **then** I see the quote fields supported by the partner and licensed data source. [FR-17]
- **Given** quote information is displayed, **when** I review it, **then** the data source and timestamp or delayed-data status are clear.
- **Given** quote data is stale or unavailable, **when** I view the security, **then** the app identifies the limitation and does not present it as a live quote.
- **Given** I do not have the required partner account or eligibility, **when** I attempt to access equity service, **then** the app explains the prerequisite and provides the approved next step.
- **Given** the equity service is unavailable, **when** a quote cannot load, **then** I see an error and can retry without the app displaying a stale quote as current.

**Partner/compliance dependency:** Partner, account-linking/eligibility journey, quote fields, market-data license, delays, charges, and required disclosures need confirmation.

- **Given** a licensed quote source is available, **when** I refresh an equity quote, **then** the quote update is displayed within 1 second and retains its source and timestamp. [NFR-01]

### Story 8.2: Place an Equity-Delivery Buy Order through the Partner

As an eligible investor,
I want to place a buy order for an equity security through the authorized partner,
So that I can invest in delivery holdings using the partner’s regulated service.

**Acceptance Criteria:**

- **Given** I have an eligible, linked partner account and select a security, **when** I start a buy order, **then** I can enter order details supported by the partner and review the estimated consideration and applicable charges. [FR-17]
- **Given** I review the order, **when** I confirm submission, **then** the app clearly identifies the partner providing the execution service and any required disclosures before sending the order.
- **Given** the partner accepts, rejects, or leaves the order pending, **when** a response is received, **then** I see the partner’s actual order status and reference.
- **Given** the partner response is delayed and I retry, **when** the system processes the retry, **then** it checks the original request and prevents an unintended duplicate order. [NFR-07]
- **Given** I am not eligible, my partner link is inactive, or the partner service is unavailable, **when** I try to submit, **then** the app explains the issue and does not imply an order was placed.

**Partner/compliance dependency:** Supported order types/fields, eligibility and funds checks, price/charge calculation, required disclosures, and cancellation/edit behavior must be defined with the partner and counsel.

### Story 8.3: Place an Equity-Delivery Sell Order through the Partner

As an eligible investor,
I want to place a sell order for an equity holding through the authorized partner,
So that I can sell delivery holdings and track the resulting order.

**Acceptance Criteria:**

- **Given** I have an eligible, linked partner account and select a holding, **when** I start a sell order, **then** the app shows the available holding information and lets me enter a sell quantity supported by the partner. [FR-17]
- **Given** I enter a quantity exceeding the available or sellable amount, **when** I try to continue, **then** the app explains the issue and does not submit the order.
- **Given** I review a valid sell order, **when** I confirm submission, **then** I see the relevant estimated charges/settlement information and partner identity/disclosures before the order is sent.
- **Given** the partner accepts, rejects, or leaves the order pending, **when** a response is received, **then** I see the actual status and reference from the partner.
- **Given** a response is delayed and I retry, **when** the system processes the retry, **then** it checks the existing request and prevents an unintended duplicate sell order. [NFR-07]

**Partner/compliance dependency:** Sellable quantity, order types, settlement/charge disclosures, restrictions, and cancellation/edit behavior depend on partner capabilities and counsel-approved boundaries.

### Story 8.4: Track Equity-Order Status

As an investor with equity orders,
I want to review each order’s latest status and history,
So that I can tell whether it was accepted, executed, rejected, or remains pending.

**Acceptance Criteria:**

- **Given** I have submitted an equity order, **when** I open order history, **then** I can see the order’s security, side, submitted details, partner reference, and latest status. [FR-17]
- **Given** the partner reports a status change, **when** the app refreshes or receives the update, **then** the latest partner-confirmed status and update time are shown.
- **Given** a status is pending or unavailable, **when** I view the order, **then** the app distinguishes pending, unknown, and final outcomes and does not imply completion.
- **Given** the order status cannot be refreshed because the partner is unavailable, **when** I view the order, **then** the last-known status and timestamp are identified and I can retry.
- **Given** I view order history, **when** records are retrieved, **then** I see only orders for my linked account and access is protected according to the approved partner/privacy arrangement. [NFR-06]

**Partner dependency:** Status taxonomy, update latency, history retention, display fields, and refresh/retry rules need confirmation with the partner.

### Story 8.5: Browse Available IPOs

As an eligible investor,
I want to browse open and upcoming IPOs,
So that I can review the offer information before deciding whether to apply.

**Acceptance Criteria:**

- **Given** IPO data is available, **when** I open the IPO section, **then** I can see the offers available through the authorized partner and their application status (upcoming, open, or closed). [FR-18]
- **Given** I select an IPO, **when** its details load, **then** I see the offer information provided by the authoritative source, including application dates and other approved key terms.
- **Given** the IPO source data is delayed or unavailable, **when** the offers are displayed, **then** the app shows the data source/update status and does not represent stale offers as open.
- **Given** there are no open or upcoming offers, **when** I open the section, **then** I see a clear empty state.
- **Given** I am not eligible or have not completed the required partner setup, **when** I attempt to proceed from an offer, **then** the app explains the prerequisite.

**Partner/compliance dependency:** Offer fields, source/update timing, eligibility checks, risk wording/disclosures, and exact open/closed state mapping need confirmation.

### Story 8.6: Apply for an IPO Using UPI

As an eligible investor,
I want to submit an IPO application and authorize the payment mandate through UPI,
So that my application is submitted through the authorized partner.

**Acceptance Criteria:**

- **Given** an IPO is open and I meet the partner’s eligibility requirements, **when** I start an application, **then** I can enter the application details supported by the offer and partner. [FR-18]
- **Given** I review the application, **when** I proceed, **then** the app shows the selected offer, bid/application details, amount or mandate limit, and required disclosures before submission.
- **Given** I confirm, **when** the application is submitted to the partner and a UPI mandate is requested, **then** the app shows the partner’s application status and the UPI authorization status separately.
- **Given** I decline, fail, or time out during UPI authorization, **when** the result is returned, **then** the application is not represented as fully submitted or funded unless the partner confirms that state.
- **Given** the partner response or UPI callback is delayed or duplicated, **when** it is processed, **then** the system retrieves the existing application/mandate state and prevents duplicate applications. [NFR-07]
- **Given** the offer closes or eligibility changes before submission, **when** I attempt to submit, **then** the app does not submit an invalid application and explains the outcome.

**Partner/compliance dependency:** Application fields, lot/bid rules, eligibility, UPI mandate lifecycle, confirmation semantics, withdrawal/cancellation behavior, and deadline handling need confirmation.

### Story 8.7: View IPO Allotment Status

As an investor who applied for an IPO,
I want to see the allotment result and application status,
So that I know whether shares were allotted and what happened to my application.

**Acceptance Criteria:**

- **Given** I have an IPO application, **when** the partner or authoritative source publishes an update, **then** I can view the latest application and allotment status. [FR-18]
- **Given** an allotment result is available, **when** I open the application, **then** the app shows the allotted quantity or that no allotment was made, using the source’s confirmed data.
- **Given** the result is pending or the source is unavailable, **when** I view the application, **then** it is shown as pending/unknown with an update time and is not described as final.
- **Given** multiple applications exist, **when** I view IPO history, **then** each result is associated with the correct offer and partner reference.
- **Given** status data is refreshed more than once, **when** updates are processed, **then** the latest authoritative result is shown without duplicate allotment records.

**Partner dependency:** Allotment source, status mapping, publication timing, refund/blocked-fund state, and history retention need confirmation.

### Epic 9: Invite Others and Earn Rewards for Sustained Investing
An investor can invite another person and understand eligible rewards tied to continued SIP activity.
**FRs covered:** FR-19
**Release:** v1.0
**Dependencies:** Reward eligibility, fraud controls, disclosures, and compliant referral/marketing rules.

### Story 9.1: Create and Share a Referral Invitation

As an investor,
I want to invite someone using a referral link or code,
So that they can learn about the platform and join through my invitation.

**Acceptance Criteria:**

- **Given** I am eligible to refer, **when** I open referrals, **then** I can create or retrieve a referral link/code and see the approved reward terms. [FR-19]
- **Given** I share the invitation, **when** the recipient opens it, **then** it identifies the referring campaign without exposing my account or financial details.
- **Given** a recipient signs up, **when** referral attribution is accepted under the configured rules, **then** the referral record is linked to the inviter and invitee without duplicating attribution.
- **Given** the referral link is invalid, expired, or unavailable, **when** it is opened, **then** the app explains the issue and provides the approved next step.
- **Given** referral messages are shared, **when** promotional content is generated, **then** it follows approved disclosure and marketing rules and contains no performance promise.

**Product/compliance dependency:** Eligible users, referral attribution window, channels, program terms, limits, fraud controls, and marketing disclosures need definition.

### Story 9.2: Track referral qualification and reward

As an investor who made a referral,
I want to see whether the referral qualifies and what reward is due,
So that I understand how rewards depend on continued SIP activity.

**Acceptance Criteria:**

- **Given** an invitee is attributed to my referral, **when** I open referral history, **then** I can see the referral’s current status without accessing the invitee’s private account information. [FR-19]
- **Given** the invitee starts and continues an eligible SIP, **when** the configured qualification conditions are met, **then** the referral status updates and the applicable reward is calculated under the approved program rules.
- **Given** qualification conditions are not met, **when** I view the referral, **then** I see that the reward is not yet earned or is ineligible, using approved user-facing reasons.
- **Given** a reward is approved, **when** it is issued, **then** I can see its value/type, status, and issuance date; a failed issuance is surfaced for operations review.
- **Given** suspected duplicate or abusive referral activity is detected, **when** it is reviewed, **then** reward issuance follows the approved fraud-control process and is auditable. [FR-15, FR-25]

**Product/compliance dependency:** Continued-SIP threshold, evaluation period, reward type/value, caps, reversals, tax treatment, anti-fraud rules, and disclosures need approval.

### Epic 10: See External Assets Alongside Investments
An investor can consent to link an Account Aggregator and view eligible external holdings and net worth alongside platform investments.
**FRs covered:** FR-20
**Release:** v1.0
**Dependencies:** Account Aggregator ecosystem participation, consent/data scope, refresh behavior, and security/privacy review.

### Story 10.1: Give Account Aggregator consent and link an account

As an investor,
I want to securely consent to linking an external financial account through an Account Aggregator,
So that I can include eligible external holdings in my financial overview.

**Acceptance Criteria:**

- **Given** I choose to link an external account, **when** the Account Aggregator journey begins, **then** I can review the requested data categories, purpose, and consent duration before authorizing access. [FR-20, NFR-06]
- **Given** I authorize a link, **when** the AA/provider confirms it, **then** the linked account and consent status are shown in my profile.
- **Given** I decline, cancel, or the link fails, **when** I return to the app, **then** no active consent is recorded and the failure or next step is clear.
- **Given** I revoke consent, **when** the revocation is confirmed, **then** future data fetches stop and the consent status reflects revocation.
- **Given** link status changes, **when** the event is recorded, **then** the consent version, timestamp, provider reference, and status are auditable. [FR-25]

**Partner/privacy dependency:** AA participant, supported account types, data scope, consent period, refresh permission, revocation semantics, and retention/deletion behavior need confirmation.

### Story 10.2: Fetch and refresh external financial data

As an investor with a linked external account,
I want the platform to fetch and refresh the data I consented to share,
So that my external holdings view reflects the latest available information.

**Acceptance Criteria:**

- **Given** an active consent exists, **when** an authorized fetch is initiated, **then** the system requests only the data categories and period covered by that consent. [FR-20]
- **Given** the provider returns data, **when** it is processed, **then** records are associated with the correct linked account and retain their source and as-of date.
- **Given** a fetch fails, is partial, or returns stale data, **when** the result is displayed, **then** the limitation and last successful update are clear and missing data is not shown as zero.
- **Given** consent is revoked or expired, **when** a refresh is attempted, **then** no new data is fetched and the user is asked to renew consent where supported.
- **Given** a fetch is retried, **when** the same provider response is processed more than once, **then** duplicate external records are not created. [NFR-07]

**Partner/data dependency:** Fetch cadence, supported formats, account types, historical range, deduplication keys, error codes, and stale-data threshold need definition.

### Story 10.3: View external holdings and aggregated net worth

As an investor,
I want to view my linked external holdings alongside platform investments,
So that I can understand my broader financial position in one place.

**Acceptance Criteria:**

- **Given** external data has been successfully fetched, **when** I open my financial overview, **then** I can distinguish external holdings from investments held through the platform. [FR-20]
- **Given** the overview shows a total or net-worth figure, **when** I review it, **then** its included accounts, as-of dates, and any unavailable data are clear.
- **Given** an external account is stale, disconnected, or has incomplete holdings, **when** the overview is displayed, **then** the status is visible and incomplete data is not presented as a complete total.
- **Given** I disconnect or revoke an account, **when** I view the overview, **then** its inclusion follows the approved data-retention and consent policy and its disconnected status is clear.
- **Given** aggregated values are calculated, **when** they are displayed, **then** source currencies and any currency conversion basis are identified where applicable.

**Product/data dependency:** Net-worth calculation, included asset/liability classes, valuation date, currency conversion, treatment after consent revocation, and display hierarchy need definition.

### Epic 11: Get Personalised Fee-Only Financial Advice
An eligible customer can receive personalised planning and advice through the premium fee-only advisory tier.
**FRs covered:** FR-21
**Release:** v1.0
**Dependencies:** Confirmed RIA permissions, advisor capacity, suitability workflow, advice recordkeeping, service boundaries, and approved pricing.

### Story 11.1: Enroll in the premium advisory service

As an eligible investor,
I want to understand and enroll in the premium fee-only advisory service,
So that I know what planning support is included and what it costs before I agree.

**Acceptance Criteria:**

- **Given** the premium advisory tier is available to me, **when** I review it, **then** I see its scope, service boundaries, fee basis, applicable taxes, and cancellation/renewal terms approved for the service. [FR-21, FR-14]
- **Given** I choose to enroll, **when** I accept the applicable advisory agreement and disclosures, **then** the acceptance is recorded with the agreement version, timestamp, and consent evidence. [FR-25]
- **Given** I decline or the service is unavailable to my account, **when** I leave enrollment, **then** I am not represented as enrolled and no premium fee is initiated.
- **Given** the RIA permission or fee schedule is not approved/configured, **when** enrollment is attempted, **then** enrollment is blocked and the user is shown an availability message.
- **Given** enrollment succeeds, **when** I view my account, **then** I can see the service status, fee schedule, and next service step.

**Counsel/product dependency:** RIA permissions, eligible clientele, service scope, pricing, agreement, renewal/cancellation, payment, and advisor capacity must be confirmed.

### Story 11.2: Provide information for a personalised financial plan

As an enrolled advisory customer,
I want to provide goals, financial context, and preferences to my adviser,
So that the advice I receive can reflect my circumstances.

**Acceptance Criteria:**

- **Given** I start an advisory planning intake, **when** I provide requested information, **then** the form explains why each required category is needed and collects only the approved minimum. [FR-21, NFR-06]
- **Given** required information is missing, **when** I submit the intake, **then** I see what remains incomplete and the adviser cannot treat the plan as based on complete information.
- **Given** I submit my information, **when** it is stored, **then** it is associated with my advisory case and accessible only to authorized personnel.
- **Given** I update information or consent, **when** the changes are saved, **then** the current version and prior material changes are retained according to policy.
- **Given** the intake is submitted, **when** it is ready for adviser review, **then** I can see its status and any next step.

**Product/compliance dependency:** Intake fields, data sources, financial suitability process, consent, update cadence, and advisor review status need definition.

### Story 11.3: Schedule and attend a personalised advice session

As an enrolled advisory customer,
I want to schedule an advice session with a qualified adviser,
So that I can discuss my goals and receive personalised guidance.

**Acceptance Criteria:**

- **Given** an adviser is available, **when** I request a session, **then** I can select from available times and the supported session formats/languages.
- **Given** I book a session, **when** it is confirmed, **then** I receive the appointment details and a reference.
- **Given** I reschedule or cancel within the allowed policy, **when** the change is accepted, **then** the appointment status and any applicable fee/service effect are shown accurately.
- **Given** no appointment is available or the booking service fails, **when** I request a session, **then** I see the issue and an available next step without a false confirmation.
- **Given** an advice session occurs, **when** the adviser records advice or follow-up, **then** the record is associated with the customer and retained in the advice audit trail. [FR-25]

**Operations dependency:** Adviser qualifications, capacity, language coverage, session formats, cancellation rules, recording/documentation standards, and service levels need definition.

### Story 11.4: Receive and review a personalised advice plan

As an enrolled advisory customer,
I want to receive a written plan with recommendations and rationale,
So that I can understand the advice and decide what actions to take.

**Acceptance Criteria:**

- **Given** an adviser has completed the planning review, **when** the plan is issued, **then** I can access the recommendations, rationale, assumptions, risks, fees, and date/version of the plan. [FR-21]
- **Given** an action is suggested, **when** I review it, **then** the plan distinguishes advice from execution and does not imply an investment was placed without my separate authorization.
- **Given** an adviser updates or replaces a plan, **when** the new version is issued, **then** I can identify the current version and the prior version remains available to authorized compliance reviewers. [FR-25]
- **Given** a plan cannot be completed because information is missing or suitability review is incomplete, **when** I view the service status, **then** I see the outstanding requirement rather than an incomplete plan presented as final.
- **Given** I access the plan, **when** it is viewed or downloaded, **then** it is protected under the approved privacy and retention policy. [NFR-06]

**Compliance dependency:** Required plan contents, suitability and approval process, disclosures, review frequency, record retention, and permitted implementation pathways need counsel/compliance approval.

### Epic 12: Access Additional India Investment Products with Appropriate Advice
A customer can access advice-led FDs, bonds, NPS and digital gold under a structure that preserves required separation for any commission-based distribution.
**FRs covered:** FR-22
**Release:** v1.5
**Dependencies:** Product-specific permissions, partner/separate-entity structure, disclosures, execution and servicing arrangements.

### Story 12.1: Discover advice-led India investment products

As an investor,
I want to browse eligible FDs, bonds, NPS, and digital-gold options,
So that I can understand the additional investment choices available through the platform.

**Acceptance Criteria:**

- **Given** one or more additional product categories are enabled, **when** I open Explore, **then** I see only products available through the approved entity/partner structure and their category is clear. [FR-22]
- **Given** I open a product detail, **when** the information loads, **then** I see the provider, key terms, risks, fees/charges, and product-specific disclosures available from approved sources.
- **Given** product information is stale, incomplete, or unavailable, **when** it is displayed, **then** its source/update status is shown and the app does not imply that unavailable details are current.
- **Given** a category is not available to me or has not been enabled, **when** I try to access it, **then** the app explains the limitation and does not present it as orderable.

**Product/compliance dependency:** Which products launch, licensed entity, partner, supported product terms, risks, fees, eligibility, and data sources need product and counsel confirmation.

### Story 12.2: Receive suitability-checked advice for an additional product

As an investor considering an additional product,
I want to receive advice appropriate to my profile and the product’s risks,
So that I understand whether it fits my circumstances before acting.

**Acceptance Criteria:**

- **Given** a product is advice-led, **when** I request guidance, **then** the platform uses the approved customer profile and product-specific suitability rules. [FR-22, FR-21]
- **Given** suitability information is incomplete or the product is unsuitable under approved rules, **when** I view the result, **then** the app explains the limitation and follows the approved next step.
- **Given** advice is provided, **when** it is recorded, **then** product, profile/rule version, rationale, disclosure, adviser/source, and timestamp are retained in the advice audit trail. [FR-25]
- **Given** commission may apply through a separate entity, **when** the product is presented, **then** the entity relationship and compensation arrangement are disclosed before the investor proceeds.
- **Given** the product cannot be legally offered through the approved structure, **when** an investor requests it, **then** the app does not route an order through the RIA service.

**Counsel/product dependency:** Advice permissions, product suitability rules, commission/fee disclosures, entity segregation, and permitted recommendations need confirmation.

### Story 12.3: Place an order for an enabled additional product

As an eligible investor,
I want to submit an order for an enabled additional product through its authorized provider,
So that I can act on an informed decision using the permitted service path.

**Acceptance Criteria:**

- **Given** I meet product and provider eligibility requirements, **when** I start an order, **then** I can enter only the fields and amounts supported for that product.
- **Given** I review an order, **when** I reach confirmation, **then** I see the provider/entity, product terms, applicable fees/commission, payment details, and required risks/disclosures before submitting. [FR-08, FR-22]
- **Given** I confirm, **when** the provider accepts, rejects, or leaves the order pending, **then** I see the authoritative status and reference.
- **Given** a response is delayed or retried, **when** the order is processed, **then** duplicate orders are prevented and the latest known status remains clear. [NFR-07]
- **Given** the provider, legal entity, or required disclosure is not configured, **when** I attempt to order, **then** submission is blocked and no false success is shown.

**Partner/compliance dependency:** Product-specific transaction fields, payments, execution, order statuses, cancellation, customer support, commission entity, and confirmations need separate approval per product.

### Story 12.4: View additional-product holdings and records

As an investor who holds an additional product,
I want to view its holding status and related records,
So that I can track my position and retrieve the relevant documents.

**Acceptance Criteria:**

- **Given** the provider reports a holding or transaction, **when** I open the relevant product view, **then** I see the latest provider-confirmed status, key holding details, and as-of date.
- **Given** the provider data is stale, incomplete, or unavailable, **when** the holding is displayed, **then** the limitation is visible and missing information is not presented as zero/current.
- **Given** product documents or transaction confirmations are available, **when** I open records, **then** I can retrieve documents associated with my account and the correct product.
- **Given** a transaction status changes, **when** the platform receives the update, **then** the holding and record history reflect it without duplicating the transaction.
- **Given** I access records, **when** they are displayed or downloaded, **then** access is limited to my account and records follow approved retention rules. [NFR-06, FR-25]

**Provider/data dependency:** Supported holding fields, statement feeds, update cadence, document formats, corrections, and per-product retention need definition.

### Epic 13: Invest Internationally Under LRS
A customer can access US-stock investing through a compliant international-investing journey and understand its funding, FX, tax and regulatory implications.
**FRs covered:** FR-23
**Release:** v1.5 or later (exact release not specified in the roadmap)
**Dependencies:** LRS/legal and tax review, permitted provider/partner, funding and custody model, disclosures, data and support processes.

### Story 13.1: Review LRS eligibility and international-investing disclosures

As an investor interested in US stocks,
I want to understand eligibility, funding, currency, tax, and regulatory considerations,
So that I can decide whether to proceed with international investing.

**Acceptance Criteria:**

- **Given** international investing is enabled, **when** I open the service, **then** the app explains the provider/entity, LRS context, supported customer eligibility, and required disclosures before onboarding. [FR-23]
- **Given** eligibility requires information or documentation, **when** I begin the flow, **then** I can provide the approved details and see any incomplete requirements.
- **Given** I am ineligible or the provider is unavailable, **when** I attempt to proceed, **then** the app explains the outcome and does not enable funding or orders.
- **Given** disclosures are accepted, **when** consent is recorded, **then** the disclosure version, timestamp, customer, and relevant provider are retained for audit. [FR-25]
- **Given** legal, tax, or funding requirements change, **when** the service rules are updated, **then** affected customers are required to review any updated disclosures before continuing where policy requires.

**Counsel/provider dependency:** LRS eligibility, remittance limits/process, tax reporting, foreign asset restrictions, provider/custody model, and required consents need current legal/tax confirmation.

### Story 13.2: Browse eligible US stocks and review market information

As an eligible international-investing customer,
I want to browse supported US stocks and their market information,
So that I can research available securities before deciding whether to invest.

**Acceptance Criteria:**

- **Given** my international account is active, **when** I browse securities, **then** I see only instruments supported by the authorized provider. [FR-23]
- **Given** a security is displayed, **when** I review its market information, **then** the quote source, timestamp/delay, currency, and available trading status are clear.
- **Given** quote data is stale, unavailable, or the security is not tradable, **when** I view it, **then** the app identifies the condition and prevents an invalid order flow.
- **Given** the provider service is unavailable, **when** I search or open a security, **then** I see an error/retry state and stale data is not presented as current.
- **Given** I search in the selected app language, **when** supported, **then** the navigation and explanatory content remain localized while official security identifiers/names are preserved.

**Provider/data dependency:** Tradable universe, quote licensing/delay, market hours, currency presentation, instrument identifiers, and risk disclosures need definition.

### Story 13.3: Fund an international account through the approved LRS flow

As an eligible international-investing customer,
I want to fund my account through an approved remittance flow,
So that I can place orders within permitted LRS and provider limits.

**Acceptance Criteria:**

- **Given** my account is eligible and required documentation is complete, **when** I start a funding request, **then** I can enter the amount and required remittance details supported by the provider.
- **Given** I review the funding request, **when** I reach confirmation, **then** I see the INR amount, estimated foreign-currency amount/rate where available, charges, applicable limits, and required declarations before authorization. [FR-23]
- **Given** I authorize the request, **when** the provider or bank accepts, rejects, or leaves it pending, **then** the app displays the authoritative status and reference.
- **Given** the exchange rate or charges change before settlement, **when** the provider confirms final values, **then** the updated values and their timestamps are recorded and shown.
- **Given** a request is retried after a delayed response, **when** the platform processes it, **then** it checks existing state and prevents duplicate remittances. [NFR-07]

**Counsel/provider dependency:** Remittance channel, customer declarations, LRS limit calculation, exchange-rate source, fees/taxes, cancellations/refunds, and settlement timing need confirmation.

### Story 13.4: Place and track a US-stock order

As an eligible international-investing customer,
I want to place a supported buy or sell order and track its status,
So that I can manage international investments through the authorized provider.

**Acceptance Criteria:**

- **Given** I have available settled funds or eligible holdings, **when** I start a buy or sell order, **then** I can enter order fields supported by the provider and review estimated consideration, currency, charges, and relevant risks. [FR-23]
- **Given** I review the order, **when** I confirm, **then** the app identifies the executing provider and required disclosures before submission.
- **Given** the provider accepts, rejects, executes, or leaves an order pending, **when** a response arrives, **then** I see the authoritative status, reference, and update time.
- **Given** a response is delayed or duplicated, **when** order processing retries, **then** the system prevents duplicate orders and retains a consistent status history. [NFR-07]
- **Given** I view holdings or reports, **when** international positions are shown, **then** original currency and any converted value/as-of rate are distinguished.

**Provider/counsel dependency:** Order types, market hours, settlement/custody, fractional share support, currency conversion, taxation, reporting, and complaint/support path require confirmation.

