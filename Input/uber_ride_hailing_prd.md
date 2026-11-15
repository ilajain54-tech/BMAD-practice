# Product Requirements Document (PRD)

## Uber-style Ride-Hailing Platform

**Document status:** Draft for product, design, engineering, data,
operations, and compliance review\
**Version:** 1.0\
**Prepared:** 4 November 2026\
**Product:** On-demand ride-hailing marketplace (rider, driver, and
operations experiences)\
**Working assumption:** This PRD specifies a new ride-hailing product
inspired by the core Uber model. It is not an internal Uber document and
does not claim to describe Uber's proprietary systems.

------------------------------------------------------------------------

## 1. Executive summary

Build a reliable, safe, and easy-to-use ride-hailing platform that
connects people who need a trip with eligible drivers. Riders should be
able to set a pickup and destination, understand the expected price and
arrival time, request a ride, track the assigned driver, complete the
trip, pay, and rate the experience. Drivers should be able to register,
complete onboarding, go online, receive and accept trip requests,
navigate to pickup and destination, complete trips, and understand their
earnings. Operations teams need tools to monitor marketplace health,
resolve incidents, manage users and drivers, and configure service
rules.

The product is a three-sided marketplace:

1.  **Rider experience:** discover, book, track, pay for, and review a
    ride.
2.  **Driver experience:** onboard, become available, accept and fulfil
    trips, and receive earnings.
3.  **Operations platform:** maintain safety, quality, marketplace
    balance, support, compliance, and business controls.

The initial release should prioritize a dependable end-to-end standard
ride journey in one launch city, with a modular architecture that can
support additional vehicle categories, cities, payment methods, and
advanced marketplace capabilities later.

## 2. Product vision and principles

### Vision

Make everyday urban transportation dependable and accessible by matching
riders and drivers in real time, with transparent pricing and safety
built into every stage of the journey.

### Product principles

-   **Safety before growth:** safety controls, incident handling, and
    identity verification are launch requirements, not later
    enhancements.
-   **Trust through transparency:** show fare estimates, driver and
    vehicle details, trip status, and payment outcomes clearly.
-   **Reliability over feature count:** pickup accuracy, dispatch
    quality, and payment correctness matter more than a large feature
    catalogue.
-   **Low-friction journeys:** minimize steps for common rider and
    driver tasks.
-   **Fair marketplace outcomes:** avoid opaque or arbitrary driver
    allocation and provide understandable earnings information.
-   **Accessible by design:** support assistive technologies, readable
    contrast, localization, and low-bandwidth conditions.
-   **Privacy by default:** collect only necessary data, restrict
    access, and define retention periods.

## 3. Goals, non-goals, and success criteria

### 3.1 Product goals

1.  Allow a new rider to request a standard ride with a clear pickup,
    destination, fare estimate, and ETA.
2.  Match a request to an eligible nearby driver and communicate status
    changes in near real time.
3.  Support the full trip lifecycle from request through completion or
    cancellation.
4.  Enable drivers to manage availability, accept trips, navigate, and
    review earnings.
5.  Provide safe, auditable support and operational workflows.
6.  Support cashless payment at launch, with cash enabled only where
    local operations and regulation allow.
7.  Provide measurable service quality and marketplace health.

### 3.2 Non-goals for MVP

-   Food, grocery, parcel, or freight delivery.
-   Long-distance intercity booking.
-   Shared rides or multi-stop route optimization beyond a simple
    optional stop.
-   Autonomous vehicles.
-   Corporate travel management and invoicing.
-   Loyalty subscriptions, memberships, and complex promotions.
-   Full public transit planning.
-   Advanced driver financial products.
-   Multi-country rollout from day one.

### 3.3 North-star metric

**Completed rides per weekly active rider**, monitored alongside safety
and service-quality guardrails. Growth must not be optimized at the
expense of safety, cancellation rates, driver experience, or regulatory
compliance.

### 3.4 Key performance indicators

  -----------------------------------------------------------------------
  Area                    Metric                  Initial target /
                                                  measurement approach
  ----------------------- ----------------------- -----------------------
  Acquisition             Rider activation rate   \% of signed-up riders
                                                  completing first trip
                                                  within 7 days;
                                                  establish baseline in
                                                  pilot

  Conversion              Quote-to-request        Completed ride requests
                          conversion              / fare quotes; segment
                                                  by city, time, and
                                                  category

  Marketplace             Request fulfillment     Requests matched to a
                          rate                    driver / eligible
                                                  requests

  Speed                   Pickup ETA accuracy     Difference between
                                                  quoted and actual
                                                  pickup arrival time;
                                                  track median and P90

  Speed                   Time to match           Median and P90 from
                                                  request submission to
                                                  driver assignment

  Reliability             App/API availability    Target 99.9% monthly
                                                  for critical booking
                                                  and trip services after
                                                  stabilization

  Quality                 Rider cancellation rate Segment by cancellation
                                                  reason and lifecycle
                                                  stage

  Quality                 Driver cancellation     Segment by driver
                          rate                    cohort, pickup
                                                  distance, and wait time

  Experience              Rider rating            Average rating plus
                                                  distribution and
                                                  low-rating reason tags

  Supply                  Driver utilization      Time on-trip / eligible
                                                  online time; monitor
                                                  for unhealthy
                                                  over-utilization

  Earnings                Driver net earnings per Report transparently;
                          engaged hour            compare by market and
                                                  time band

  Safety                  Serious safety          Track rate per
                          incidents               completed trip and
                                                  response-time SLA;
                                                  never optimize by
                                                  suppressing reports

  Payments                Payment success rate    Successful
                                                  authorized/captured
                                                  payments / payment
                                                  attempts

  Support                 First response and      Track by issue severity
                          resolution time         and contact channel
  -----------------------------------------------------------------------

Targets should be finalized after baseline measurement and local market
research. Do not treat the suggested service availability target as a
substitute for a safety or compliance SLA.

## 4. Users and jobs to be done

### 4.1 Primary personas

**Rider** - Needs a ride from a known or current location to a
destination. - Wants a predictable pickup, understandable fare, and
confidence in driver identity. - May have limited connectivity, low
digital confidence, accessibility needs, or a preferred language.

**Driver** - Wants to earn by choosing when to be available. - Needs
clear trip details, reliable navigation, predictable payout information,
and fast support. - Needs control over accepting or declining requests,
subject to marketplace policies.

**Operations/support agent** - Needs a trustworthy view of trip history,
user/driver status, payment state, and incident context. - Must resolve
issues with least-privilege access and an auditable action history.

**City/market manager** - Needs to configure service zones, vehicle
categories, pricing parameters, supply incentives, and operational rules
within approved governance.

### 4.2 Jobs to be done

-   When I need transportation, I want to compare a ride option's price
    and arrival time so I can choose confidently.
-   When I request a ride, I want to know whether a driver has accepted
    and where they are so I can coordinate pickup.
-   When I am driving, I want only the information necessary for the
    next safe action so I can focus on the road.
-   When a trip goes wrong, I want a clear way to get help and a timely,
    fair resolution.
-   When I earn from trips, I want to understand gross fare, platform
    fees, adjustments, and payout status.

## 5. Scope and release strategy

### 5.1 MVP scope

-   Rider account creation and authentication.
-   Location permission and manual pickup selection.
-   Destination search and map selection.
-   Standard ride quote with fare range/estimate and pickup ETA.
-   Ride request, driver matching, assignment, and trip tracking.
-   Driver registration, document submission, review, and activation.
-   Driver online/offline state and request acceptance/decline.
-   Pickup arrival, rider pickup confirmation, trip start, trip
    completion.
-   In-app payment using at least one locally supported digital payment
    method.
-   Digital receipt, trip history, and two-way ratings.
-   Basic cancellation and refund workflows.
-   Safety center with emergency contact / emergency assistance flow
    appropriate to launch market.
-   Rider and driver support entry points.
-   Operations console for trip lookup, account status, incident
    handling, and basic marketplace monitoring.
-   Analytics events, audit logs, fraud controls, and operational
    dashboards.

### 5.2 Post-MVP candidates

-   Cash payments where legally and operationally supported.
-   Multiple vehicle categories and accessibility-focused categories.
-   Scheduled rides.
-   Family or guest profiles.
-   Promo codes and referral programs.
-   Driver destination filters and other driver preferences, subject to
    marketplace fairness review.
-   Multiple stops, business profiles, subscriptions, and loyalty.
-   Advanced safety features such as trip anomaly detection and optional
    audio recording where lawful and consented.
-   More payment rails and automated payouts.
-   Multi-city and multi-region expansion.

### 5.3 Release gates

A city pilot may launch only after: - Legal and regulatory review is
signed off. - Driver supply, insurance, vehicle eligibility, and
document verification are operational. - Emergency escalation and
incident response have been rehearsed. - Payment reconciliation and
refunds have passed end-to-end testing. - Support coverage and
escalation ownership are staffed. - Critical security, privacy, and
accessibility issues are resolved. - Marketplace monitoring and rollback
procedures are active.

## 6. End-to-end user journeys

### 6.1 Rider journey

1.  Open app and authenticate or continue with an eligible existing
    session.
2.  Grant location permission or manually enter pickup.
3.  Enter destination and confirm pickup pin.
4.  View available ride type(s), estimated fare, and pickup ETA.
5.  Select ride and review cancellation / payment information.
6.  Submit request.
7.  View searching state; if no match is found, receive a clear outcome
    and retry options.
8.  On match, see driver name, photo, rating (if available), vehicle
    make/model/color, registration identifier, and live approach
    location.
9.  Contact driver through masked communication where supported.
10. Confirm pickup using a trip PIN or equivalent verification mechanism
    where enabled.
11. Track trip progress and access safety/support controls.
12. Receive completion summary, receipt, and payment status.
13. Rate driver and optionally select feedback tags.
14. Access trip details and support later from trip history.

### 6.2 Driver journey

1.  Install driver app and create account.
2.  Verify phone/email and submit identity, driving, vehicle, insurance,
    and other locally required documents.
3.  Complete checks and training required by the launch market.
4.  Receive approval or a clear rejection / resubmission reason.
5.  Go online after required permissions and vehicle status checks.
6.  Receive request card with pickup distance/time, destination or
    destination area as permitted, estimated trip duration, and earnings
    information as approved by market policy.
7.  Accept or decline within a defined response window.
8.  Navigate to pickup; update status to arrived.
9.  Verify rider / trip PIN where enabled; start trip.
10. Navigate to destination and complete trip.
11. View trip earnings, fees, adjustments, and payout status.
12. Rate rider and report safety or service concerns.

### 6.3 Support journey

1.  Agent searches by trip ID, rider, driver, or payment reference
    according to permissions.
2.  Agent sees a role-appropriate trip timeline and relevant system
    events.
3.  Agent selects a reason-coded resolution action (refund, fare review,
    account review, safety escalation, etc.).
4.  High-risk actions require approval or escalation.
5.  All reads of sensitive data and all material actions are audited.
6.  User receives a clear explanation and case reference.

## 7. Functional requirements

Priority definitions: **P0** = required for MVP launch; **P1** =
important, can follow shortly after MVP; **P2** = later enhancement.

### 7.1 Account and identity

  ----------------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance criteria
  ----------------- ----------------- ----------------- ----------------------
  ACC-01            Rider can         P0                Valid code creates or
                    register using a                    verifies account;
                    supported phone                     invalid/expired code
                    number and                          is rejected with retry
                    one-time                            guidance.
                    verification                        
                    code.                               

  ACC-02            Driver account    P0                Driver cannot go
                    has a separate                      online until all
                    onboarding and                      mandatory checks are
                    approval state.                     approved.

  ACC-03            Users can manage  P1                Changes are validated
                    profile name,                       and reflected in
                    photo where                         future eligible
                    applicable, and                     screens.
                    preferred                           
                    language.                           

  ACC-04            Authentication    P0                Expired/revoked
                    supports secure                     sessions cannot access
                    session renewal                     protected APIs.
                    and logout.                         

  ACC-05            Risk controls     P0                Rate limits,
                    limit OTP abuse,                    monitoring, and
                    account                             challenge/escalation
                    enumeration, and                    policies are testable.
                    suspicious signup                   
                    patterns.                           

  ACC-06            Users can request P1                Request is tracked;
                    account deletion                    retained records are
                    subject to legal                    restricted and
                    retention                           disclosed as required.
                    obligations.                        
  ----------------------------------------------------------------------------

### 7.2 Location and destination search

  --------------------------------------------------------------------------
  ID                Requirement          Priority          Acceptance
                                                           criteria
  ----------------- -------------------- ----------------- -----------------
  LOC-01            Rider can grant or   P0                Denial does not
                    deny foreground                        block manual
                    location permission.                   pickup entry.

  LOC-02            App proposes current P0                UI displays
                    location as pickup                     location
                    when permission and                    confidence and
                    location accuracy                      lets rider adjust
                    allow.                                 the pin.

  LOC-03            Rider can search     P0                Search returns
                    addresses and points                   relevant results
                    of interest.                           with clear labels
                                                           and map context.

  LOC-04            Rider can move       P0                Confirmed
                    pickup pin and                         coordinates and
                    confirm the pickup                     formatted address
                    point.                                 are stored with
                                                           the request.

  LOC-05            App warns when       P0                User cannot
                    pickup/destination                     submit an
                    is outside service                     unsupported trip;
                    area.                                  alternatives are
                                                           explained.

  LOC-06            Driver location is   P0                Location updates
                    updated while online                   are
                    and during active                      authenticated,
                    trips, subject to                      timestamped, and
                    consent and policy.                    rate-limited.

  LOC-07            App handles GPS loss P0                Last update age
                    or stale location                      is represented;
                    gracefully.                            no false claim of
                                                           live accuracy is
                                                           shown.
  --------------------------------------------------------------------------

### 7.3 Fare quote and pricing

  ------------------------------------------------------------------------
  ID                Requirement        Priority          Acceptance
                                                         criteria
  ----------------- ------------------ ----------------- -----------------
  FARE-01           System calculates  P0                Quote includes
                    an upfront fare                      currency,
                    estimate before                      applicable
                    request.                             taxes/fees, and
                                                         estimate
                                                         validity.

  FARE-02           Quote is based on  P0                Inputs and
                    approved market                      pricing version
                    pricing                              are recorded for
                    configuration.                       audit and dispute
                                                         resolution.

  FARE-03           Rider sees         P0                No undisclosed
                    material                             mandatory fee is
                    surcharges or                        added after
                    dynamic pricing                      confirmation.
                    before confirming.                   

  FARE-04           Quote expires      P0                Expired quote
                    after a                              requires refresh
                    configurable                         before request.
                    period or material                   
                    route/market                         
                    change.                              

  FARE-05           Final fare can     P0                Receipt itemizes
                    differ only for                      the difference
                    disclosed,                           and reason.
                    policy-defined                       
                    reasons                              
                    (e.g. route/time                     
                    changes, tolls,                      
                    waiting, approved                    
                    adjustments).                        

  FARE-06           Operations can     P1                Changes are
                    configure pricing                    versioned,
                    by market and                        logged, and can
                    vehicle category                     be rolled back.
                    with role-based                      
                    approval.                            
  ------------------------------------------------------------------------

### 7.4 Booking and dispatch

  -----------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance
                                                        criteria
  ----------------- ----------------- ----------------- -----------------
  DSP-01            Rider can request P0                Request is
                    a selected ride                     idempotent;
                    option using a                      duplicate taps do
                    valid quote.                        not create
                                                        duplicate rides.

  DSP-02            Dispatch selects  P0                Ineligible,
                    eligible drivers                    offline, blocked,
                    using proximity,                    or
                    ETA, eligibility,                   already-engaged
                    availability, and                   drivers are
                    marketplace                         excluded.
                    rules.                              

  DSP-03            Driver receives a P0                Expired request
                    request card and                    cannot be
                    can accept or                       accepted.
                    decline within a                    
                    configurable                        
                    timeout.                            

  DSP-04            System assigns at P0                Concurrent
                    most one driver                     acceptance tests
                    to a ride.                          prove single
                                                        assignment.

  DSP-05            Rider receives    P0                Every request
                    clear searching,                    reaches a
                    matched,                            terminal or
                    no-driver, and                      active state; no
                    retry states.                       indefinite
                                                        spinner.

  DSP-06            Driver can cancel P0                Cancellation
                    with a reason                       reason and
                    code under                          lifecycle state
                    policy.                             are recorded.

  DSP-07            Rider can cancel  P0                Fee is applied
                    and sees any                        only according to
                    applicable fee                      disclosed market
                    before confirming                   policy.
                    cancellation.                       

  DSP-08            System supports   P1                Configuration
                    configurable                        changes are
                    dispatch radius                     versioned and
                    and                                 monitored.
                    retry/widening                      
                    strategy.                           

  DSP-09            Reassignment is   P1                Rider is informed
                    supported if                        and receives
                    driver cancels or                   updated ETA.
                    becomes                             
                    unavailable                         
                    before pickup.                      
  -----------------------------------------------------------------------

### 7.5 Trip lifecycle and tracking

Use an explicit state machine. Suggested states:

`DRAFT → QUOTED → REQUESTED → SEARCHING → MATCHED → DRIVER_EN_ROUTE → DRIVER_ARRIVED → IN_PROGRESS → COMPLETED`

Alternative terminal states: `CANCELLED_BY_RIDER`,
`CANCELLED_BY_DRIVER`, `NO_DRIVER_FOUND`, `EXPIRED`, `PAYMENT_REVIEW`.

  -------------------------------------------------------------------------
  ID                Requirement         Priority          Acceptance
                                                          criteria
  ----------------- ------------------- ----------------- -----------------
  TRIP-01           Every trip          P0                Invalid
                    transition is                         transitions are
                    validated                             rejected and
                    server-side.                          logged.

  TRIP-02           Rider sees current  P0                Status updates
                    trip status and                       are delivered
                    last-updated time.                    through real-time
                                                          channel with
                                                          polling fallback.

  TRIP-03           Driver can mark     P0                Server checks
                    arrived, start, and                   assignment,
                    complete trip only                    proximity /
                    in valid sequence.                    verification
                                                          policy, and
                                                          state.

  TRIP-04           Pickup verification P0                Incorrect PIN
                    uses PIN or                           cannot start
                    equivalent                            trip; support
                    configurable                          override is
                    control.                              restricted and
                                                          audited.

  TRIP-05           Route and trip      P0                Records include
                    distance/duration                     source,
                    are recorded for                      timestamps, and
                    fare calculation                      data-quality
                    and support.                          flags.

  TRIP-06           Trip completion     P0                Completion and
                    triggers receipt                      payment events
                    and payment                           are idempotent.
                    finalization.                         

  TRIP-07           Rider can share     P1                Shared link is
                    trip status with a                    time-limited and
                    trusted contact                       exposes only
                    where supported.                      approved trip
                                                          information.
  -------------------------------------------------------------------------

### 7.6 Driver app and earnings

  -----------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance
                                                        criteria
  ----------------- ----------------- ----------------- -----------------
  DRV-01            Approved driver   P0                Online status
                    can toggle                          requires valid
                    online/offline.                     documents,
                                                        permissions, and
                                                        no blocking
                                                        restriction.

  DRV-02            Driver can view   P0                Details comply
                    request details                     with market
                    necessary to make                   policy and do not
                    an informed                         expose
                    decision.                           unnecessary rider
                                                        data.

  DRV-03            Driver can        P0                Correct
                    navigate to                         coordinates and
                    pickup and                          destination are
                    destination using                   passed securely.
                    in-app or                           
                    supported                           
                    external                            
                    navigation.                         

  DRV-04            Driver sees trip  P0                Gross fare,
                    earnings                            platform fee,
                    breakdown after                     adjustments, tips
                    completion.                         if supported, and
                                                        net amount
                                                        reconcile.

  DRV-05            Driver can view   P0                Each item has
                    trip history and                    stable reference
                    payout status.                      and status.

  DRV-06            Driver can report P0                Reports create
                    rider no-show,                      case records and
                    unsafe behavior,                    preserve relevant
                    or trip issue.                      trip context.

  DRV-07            Driver can pause  P1                No new requests
                    new requests                        are sent while
                    while completing                    unavailable.
                    an active trip.                     

  DRV-08            Driver can see    P1                Alerts are sent
                    document expiry                     before expiry
                    and renewal                         based on
                    requirements.                       configurable lead
                                                        times.
  -----------------------------------------------------------------------

### 7.7 Payments, receipts, and refunds

  -----------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance
                                                        criteria
  ----------------- ----------------- ----------------- -----------------
  PAY-01            Rider can add and P0                Payment provider
                    select an                           tokenization is
                    eligible payment                    used; raw card
                    method.                             data is not
                                                        stored by the
                                                        platform.

  PAY-02            System authorizes P0                Failure states
                    or otherwise                        are explicit and
                    validates payment                   recoverable.
                    according to                        
                    payment rail                        
                    before/at trip                      
                    completion.                         

  PAY-03            Payment capture   P0                Retries cannot
                    is idempotent and                   double-charge.
                    linked to trip                      
                    ID.                                 

  PAY-04            Rider receives an P0                Receipt includes
                    itemized digital                    fare components,
                    receipt.                            taxes/fees,
                                                        payment method
                                                        label, and trip
                                                        reference.

  PAY-05            Rider can report  P0                Case is linked to
                    an incorrect                        trip and
                    charge and                          transaction.
                    request review.                     

  PAY-06            Support can issue P0                Refund amount
                    permitted                           cannot exceed
                    full/partial                        eligible captured
                    refunds with                        amount; approval
                    reason codes.                       policy is
                                                        enforced.

  PAY-07            Finance can       P0                Daily
                    reconcile                           reconciliation
                    provider                            identifies
                    settlements,                        unmatched or
                    refunds, and                        delayed
                    driver balances.                    transactions.

  PAY-08            Cash support is   P1                Cash trip ledger
                    configurable by                     and driver
                    city and disabled                   collection
                    by default until                    workflow are
                    approved.                           tested before
                                                        enablement.
  -----------------------------------------------------------------------

### 7.8 Ratings and feedback

  -----------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance
                                                        criteria
  ----------------- ----------------- ----------------- -----------------
  RAT-01            Rider can rate    P0                One rating per
                    driver after trip                   eligible trip;
                    completion.                         edit window is
                                                        configurable.

  RAT-02            Driver can rate   P0                Rating is linked
                    rider after trip                    to trip and
                    completion.                         protected from
                                                        unauthorized
                                                        edits.

  RAT-03            Low ratings can   P1                Text is moderated
                    include                             and retained
                    structured                          under policy.
                    feedback tags and                   
                    optional text.                      

  RAT-04            Ratings are       P1                Anomaly review
                    monitored for                       and appeal
                    abuse,                              process exist.
                    retaliation, and                    
                    discriminatory                      
                    patterns.                           
  -----------------------------------------------------------------------

### 7.9 Safety, trust, and support

  -----------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance
                                                        criteria
  ----------------- ----------------- ----------------- -----------------
  SAFE-01           Rider and driver  P0                Available
                    can access an                       throughout active
                    in-trip safety                      trip with clear
                    entry point.                        emergency
                                                        guidance.

  SAFE-02           Emergency action  P0                City-specific
                    routes to the                       contact /
                    locally approved                    escalation is
                    emergency                           validated before
                    workflow.                           launch; no fake
                                                        emergency
                                                        dispatch promise.

  SAFE-03           Rider can share   P1                Sharing is
                    trip details with                   consent-based,
                    a trusted contact                   revocable, and
                    where supported.                    expires.

  SAFE-04           Safety incident   P0                Severity-based
                    reports are                         queue and
                    prioritized and                     escalation SLA
                    routed to trained                   are configured.
                    staff.                              

  SAFE-05           Platform          P0                Expired or
                    maintains driver                    revoked
                    identity,                           eligibility
                    vehicle, and                        blocks new trips.
                    document                            
                    verification                        
                    status.                             

  SAFE-06           Support can apply P0                Restriction has
                    temporary                           reason, owner,
                    restrictions                        expiry/review
                    during credible                     date, and appeal
                    high-risk                           path.
                    investigations.                     

  SAFE-07           Safety data       P0                Sensitive
                    access is                           evidence is not
                    restricted and                      visible to
                    audited.                            general support
                                                        roles.

  SUP-01            Rider and driver  P0                Contact creates a
                    can contact                         case with trip
                    support from trip                   context and
                    details.                            category.

  SUP-02            Support cases     P0                Full case history
                    have status,                        is retained.
                    priority, owner,                    
                    timestamps, and                     
                    resolution                          
                    reason.                             

  SUP-03            User receives     P1                Notifications
                    case                                contain no
                    acknowledgement                     sensitive details
                    and status                          on lock screen by
                    updates.                            default.
  -----------------------------------------------------------------------

### 7.10 Notifications and communication

-   Push notifications for driver match, driver arrival, cancellation,
    trip completion, payment result, and critical account/document
    events.
-   In-app status updates are authoritative; push notifications are
    supplementary.
-   SMS fallback may be used for critical authentication or trip events
    based on local policy and consent.
-   Rider-driver calls/messages should use masked contact details where
    available.
-   Users can manage non-essential notification preferences.
-   Messages must not reveal full phone numbers, sensitive location
    history, or unnecessary personal data.

### 7.11 Operations and administration

  -------------------------------------------------------------------------
  ID                Requirement       Priority          Acceptance criteria
  ----------------- ----------------- ----------------- -------------------
  OPS-01            Authorized agent  P0                Search and fields
                    can search trips                    are
                    and view a                          permission-scoped
                    chronological                       and audited.
                    event timeline.                     

  OPS-02            Authorized staff  P0                Sensitive fields
                    can view                            are masked unless
                    rider/driver                        role requires
                    account status                      access.
                    and eligibility                     
                    flags.                              

  OPS-03            Support can       P0                Amount and action
                    cancel, refund,                     thresholds require
                    or adjust only                      approval when
                    within role                         exceeded.
                    limits.                             

  OPS-04            Operations can    P1                Changes are staged,
                    manage service                      approved,
                    zones and ride                      versioned, and
                    categories.                         reversible.

  OPS-05            Operations        P0                Metrics refresh at
                    dashboard shows                     a defined cadence
                    supply, demand,                     and show data
                    match rate, ETAs,                   freshness.
                    cancellations,                      
                    incidents, and                      
                    payment health.                     

  OPS-06            Admin actions are P0                Logs are
                    logged with                         tamper-resistant
                    actor, timestamp,                   and searchable by
                    reason,                             authorized
                    before/after                        auditors.
                    values, and                         
                    correlation ID.                     

  OPS-07            Staff access      P0                Role grants and
                    follows least                       revocations are
                    privilege and                       auditable.
                    periodic review.                    
  -------------------------------------------------------------------------

## 8. Business rules

1.  A trip must have one rider, one assigned driver at a time, one
    pickup, and one destination in MVP.
2.  A driver must be approved, online, eligible, and not already
    assigned to an incompatible active trip to receive a request.
3.  A ride request must reference a valid, unexpired quote and a
    supported service area.
4.  A driver assignment is atomic; two drivers must never be assigned to
    the same trip.
5.  Trip state transitions are server-authoritative.
6.  Cancellation fee rules must be displayed before confirmation and
    comply with local law.
7.  Fare changes must be explainable and represented on the receipt.
8.  Payment, refund, and payout ledgers must be append-only or otherwise
    auditable; corrections use adjustment entries rather than
    destructive edits.
9.  Driver document expiry or suspension blocks new trip assignment
    according to policy.
10. Safety incidents override ordinary support queues and are routed by
    severity.
11. Location access is limited to purposes and time windows disclosed to
    the user.
12. Pricing, dispatch, and eligibility rules must be configurable by
    market without requiring a client app release.

## 9. UX and content requirements

### 9.1 Rider app screens

-   Welcome, sign-in, OTP verification.
-   Home map with pickup and destination entry.
-   Search results and saved places.
-   Pickup pin confirmation.
-   Ride options / quote comparison.
-   Requesting / searching state.
-   Driver assigned and approaching map.
-   In-trip view with route, ETA, and safety access.
-   Completion, fare breakdown, payment result, and rating.
-   Trip history and trip detail.
-   Payment methods.
-   Help center and support case detail.
-   Profile, preferences, privacy, and notification settings.

### 9.2 Driver app screens

-   Signup and document capture.
-   Verification status and required actions.
-   Driver home / map with online toggle.
-   Incoming request card.
-   Pickup navigation and arrived state.
-   Rider verification / trip PIN.
-   In-trip navigation.
-   Trip completion and earnings breakdown.
-   Earnings, payout, and trip history.
-   Support, safety, documents, and account status.

### 9.3 UX standards

-   Every loading state has timeout handling and a useful recovery
    action.
-   Destructive actions require confirmation and explain consequences.
-   Use plain language; avoid internal marketplace terminology.
-   Display currency and units consistently with local conventions.
-   Support dynamic text size, screen readers, focus order, and
    sufficient contrast.
-   Do not rely on color alone to communicate status.
-   Show a timestamp or freshness indicator for live location when
    relevant.
-   Provide empty, error, offline, permission-denied, and no-results
    states for every major flow.

## 10. Non-functional requirements

  -----------------------------------------------------------------------
  Category                            Requirement
  ----------------------------------- -----------------------------------
  Availability                        Critical booking, dispatch, and
                                      trip services target 99.9% monthly
                                      availability after launch
                                      stabilization.

  Performance                         Common app interactions should feel
                                      responsive; define API p95/p99
                                      budgets during architecture design.
                                      Suggested starting target: p95
                                      under 500 ms for non-map core APIs,
                                      excluding third-party latency.

  Real-time                           Trip status and driver location
                                      should update with low latency;
                                      define market-specific freshness
                                      and fallback thresholds.

  Scalability                         Architecture should scale
                                      horizontally across city-level
                                      demand spikes and major events.

  Resilience                          Retry policies, circuit breakers,
                                      idempotency keys, queues, and
                                      graceful degradation for
                                      third-party outages.

  Security                            Encryption in transit and at rest,
                                      secrets management, secure SDLC,
                                      vulnerability scanning, and regular
                                      penetration testing.

  Privacy                             Data minimization, purpose
                                      limitation, retention schedules,
                                      access logging, deletion workflows,
                                      and consent management.

  Accessibility                       Target WCAG 2.2 AA for applicable
                                      web surfaces and platform
                                      accessibility guidance for mobile
                                      apps.

  Localization                        Externalize all user-facing
                                      strings; support local language,
                                      currency, number formats, and
                                      address formats.

  Observability                       Structured logs, metrics,
                                      distributed traces, correlation
                                      IDs, alerting, and service-level
                                      dashboards.

  Compatibility                       Publish supported OS/device matrix
                                      and graceful behavior for
                                      low-memory / low-connectivity
                                      devices.

  Data integrity                      Server-authoritative state,
                                      transactional booking/assignment,
                                      event deduplication, and
                                      reconciliation.
  -----------------------------------------------------------------------

## 11. High-level system architecture

This is a logical architecture proposal, not a mandated implementation.

### 11.1 Client applications

-   Rider mobile app.
-   Driver mobile app.
-   Operations web console.
-   Optional public/admin web surfaces.

### 11.2 Backend domains / services

-   Identity and access service.
-   Rider and driver profile service.
-   Driver onboarding and compliance service.
-   Geospatial and location ingestion service.
-   Places / geocoding adapter.
-   Fare quote and pricing service.
-   Booking and trip lifecycle service.
-   Dispatch and matching service.
-   Real-time gateway / notification service.
-   Payment orchestration and ledger service.
-   Ratings and feedback service.
-   Safety and incident management service.
-   Support case management service.
-   Operations configuration service.
-   Analytics / event pipeline.

### 11.3 External integrations

-   Maps, routing, geocoding, and traffic provider.
-   Payment gateway(s) and payout provider.
-   SMS / OTP and push notification providers.
-   Identity/document verification providers.
-   Background / compliance checks where legally permitted.
-   Customer support platform, if selected.
-   Fraud and device-risk signals, subject to privacy review.

### 11.4 Architecture requirements

-   All clients call authenticated APIs through an API gateway.
-   Critical state changes are validated by backend services.
-   Booking and driver assignment use transactional or equivalent
    concurrency-safe mechanisms.
-   Domain events are emitted for lifecycle transitions and consumed
    idempotently.
-   Payment ledger is separate from display-oriented trip summaries.
-   Location data has stricter retention and access controls than
    ordinary product analytics.
-   Third-party integrations are abstracted behind adapters to support
    provider changes.
-   Feature flags and market configuration support controlled rollout.

## 12. Core data entities

  -----------------------------------------------------------------------
  Entity                              Important fields (illustrative)
  ----------------------------------- -----------------------------------
  User                                user_id, role, name,
                                      verified_contact, status, locale,
                                      created_at

  RiderProfile                        user_id, default_payment_token_ref,
                                      preferences

  DriverProfile                       user_id, onboarding_status,
                                      eligibility_status, rating_summary

  DriverDocument                      document_id, driver_id, type,
                                      status, expiry_date, reviewer_id

  Vehicle                             vehicle_id, driver_id, category,
                                      make, model, color,
                                      registration_ref, status

  LocationPing                        actor_id, lat/lng, accuracy,
                                      heading, speed, timestamp, purpose

  Quote                               quote_id, rider_id, pickup,
                                      destination, route_ref,
                                      fare_components, currency,
                                      expires_at, pricing_version

  RideRequest                         request_id, quote_id, rider_id,
                                      status, requested_at

  Trip                                trip_id, rider_id, driver_id,
                                      pickup, destination, state,
                                      timestamps, route_ref

  TripEvent                           event_id, trip_id, event_type,
                                      actor, timestamp, metadata,
                                      correlation_id

  Payment                             payment_id, trip_id, provider_ref,
                                      amount, currency, state

  LedgerEntry                         entry_id, account_ref,
                                      transaction_ref, debit_credit,
                                      amount, currency, reason

  Rating                              rating_id, trip_id, rater_id,
                                      ratee_id, score, tags, created_at

  SupportCase                         case_id, trip_id, requester_id,
                                      category, severity, status,
                                      owner_id

  SafetyIncident                      incident_id, trip_id, severity,
                                      category, status,
                                      restricted_evidence_ref

  MarketConfig                        market_id, service_zones,
                                      categories, pricing_version,
                                      policy_version
  -----------------------------------------------------------------------

Exact schemas, indexes, event contracts, and retention periods are
engineering and legal design outputs.

## 13. Analytics and event instrumentation

### 13.1 Event naming

Use a consistent pattern such as `object_action` with a versioned
schema. Examples:

-   `rider_signup_started`
-   `rider_signup_completed`
-   `pickup_location_confirmed`
-   `destination_selected`
-   `fare_quote_viewed`
-   `ride_request_submitted`
-   `driver_match_found`
-   `driver_request_accepted`
-   `driver_arrived`
-   `trip_started`
-   `trip_completed`
-   `trip_cancelled`
-   `payment_authorized`
-   `payment_captured`
-   `refund_issued`
-   `rating_submitted`
-   `support_case_created`
-   `safety_incident_reported`

### 13.2 Required event properties

-   event_id, event_name, schema_version, event_timestamp.
-   anonymous/session ID where appropriate.
-   user_id and trip_id only where permitted and access-controlled.
-   market_id, app_version, platform, device class.
-   source surface and experiment/feature flag assignment.
-   outcome / reason code.
-   correlation ID for cross-service tracing.

Do not place raw phone numbers, full addresses, payment credentials,
identity document images, or sensitive free text in general analytics
events.

### 13.3 Funnels and dashboards

-   Signup → first quote → request → match → pickup → completion.
-   Driver signup → document submission → approval → first online
    session → first completed trip.
-   Quote conversion by fare band, ETA, pickup area, and time band.
-   Match rate and time to match by geospatial cell and time.
-   Cancellation by actor, lifecycle state, and reason.
-   Payment authorization/capture/refund and reconciliation.
-   Safety case volumes, severity, response times, and outcomes.
-   Driver earnings, utilization, and retention.
-   App crash-free sessions, API errors, and location freshness.

## 14. Experimentation and rollout

### 14.1 Experiment guardrails

Experiments involving price, dispatch, driver earnings, safety, or
eligibility require product, operations, legal/compliance, and analytics
review. Never run an experiment that withholds required safety controls
or creates undisclosed pricing.

### 14.2 Rollout stages

1.  Internal testing with synthetic trips and test payment instruments.
2.  Closed alpha with invited drivers and staff riders.
3.  Limited city pilot with capped demand and staffed support.
4.  Gradual expansion by service zone and time window.
5.  General availability after success and safety gates are met.

### 14.3 Rollback

-   Feature flags for high-risk capabilities.
-   Ability to disable new requests while allowing active trips to
    complete safely.
-   Payment and dispatch provider fallback / degraded mode procedures.
-   Documented incident commander, communications owner, and customer
    remediation process.

## 15. Risks, dependencies, and mitigations

  -----------------------------------------------------------------------
  Risk / dependency       Impact                  Mitigation
  ----------------------- ----------------------- -----------------------
  Insufficient driver     Low fulfillment and     Launch-zone supply
  supply                  long ETAs               planning, driver
                                                  acquisition, staged
                                                  demand, transparent
                                                  no-car outcome

  Inaccurate pickup pins  Cancellations and poor  Pin adjustment,
                          experience              landmarks, pickup
                                                  notes, geospatial
                                                  quality monitoring

  GPS / network           Stale tracking and      Freshness indicators,
  instability             dispatch errors         fallback polling,
                                                  offline-safe state
                                                  handling

  Payment provider outage Failed bookings or      Provider abstraction,
                          unsettled trips         retries,
                                                  reconciliation, clear
                                                  payment state

  Fraud and account abuse Financial loss and user Risk scoring, rate
                          harm                    limits, device signals,
                                                  manual review, appeals

  Safety incident         Severe user harm and    Prevention controls,
                          reputational/legal      rapid escalation,
                          impact                  trained response,
                                                  evidence governance

  Regulatory uncertainty  Launch delay or service Market-specific legal
                          suspension              review and compliance
                                                  checklist before pilot

  Driver document fraud   Safety and compliance   Verification partners,
                          exposure                manual review, expiry
                                                  monitoring

  Dynamic pricing         Loss of trust           Upfront disclosure,
  backlash                                        policy caps/controls,
                                                  explainability,
                                                  monitoring

  Support overload        Delayed resolution      Pilot caps,
                                                  self-service for
                                                  low-risk issues,
                                                  severity routing,
                                                  staffing model

  Map/provider dependency Core flow degradation   Abstraction, SLA
                                                  review, caching where
                                                  permitted, fallback
                                                  behavior
  -----------------------------------------------------------------------

## 16. Open questions and decisions required

These decisions must be closed before engineering estimates and launch
approval:

1.  **Launch geography:** Which city and service zones are in scope?
2.  **Legal model:** What local transport, aggregator, licensing,
    insurance, tax, and worker classification rules apply?
3.  **Ride categories:** Standard only, or additional vehicle types at
    launch?
4.  **Payments:** Which digital payment rails are supported? Is cash
    allowed?
5.  **Fare model:** Which base fare, distance, time, minimum fare, toll,
    waiting, cancellation, tax, and dynamic pricing rules apply?
6.  **Driver economics:** What commission / platform fee and payout
    cadence are approved?
7.  **Driver eligibility:** Which licenses, permits, vehicle
    age/condition, insurance, and checks are mandatory?
8.  **Safety operations:** What is the emergency workflow, staffing
    coverage, and incident response SLA?
9.  **Communication:** Which masked call, in-app messaging, SMS, and
    push providers are selected?
10. **Maps:** Which mapping provider offers sufficient local address and
    routing quality?
11. **Languages and accessibility:** Which languages and accessibility
    requirements are mandatory for launch?
12. **Support:** Which channels and operating hours are committed?
13. **Data residency and retention:** What jurisdiction-specific
    storage, deletion, and retention requirements apply?
14. **Commercial model:** What rider promotions, driver incentives, and
    marketplace subsidies are permitted?
15. **Service hours:** 24/7 or limited launch hours?

## 17. Acceptance and launch criteria

### 17.1 End-to-end functional acceptance

-   A verified rider can request a ride from an in-service pickup to an
    in-service destination.
-   A verified, eligible driver can receive and accept the request.
-   The rider sees the correct driver and vehicle details.
-   Driver and rider see consistent trip state.
-   Pickup verification works according to policy.
-   Driver can start and complete the trip in valid order.
-   Payment is processed once, receipt is generated, and ledger entries
    reconcile.
-   Rider and driver can rate the trip.
-   Rider and driver can reach support.
-   Operations can investigate the trip using an auditable event
    timeline.

### 17.2 Quality gates

-   No open P0 security, privacy, safety, or payment defects.
-   No known duplicate assignment or duplicate charge defect.
-   Critical API and app crash metrics meet agreed thresholds in load
    and soak tests.
-   Recovery from map, payment, notification, and real-time provider
    failures is tested.
-   Accessibility review completed for critical journeys.
-   Localization and legal copy reviewed for launch market.
-   Support, safety, finance, and operations runbooks approved.
-   Monitoring, alerts, on-call ownership, and rollback tested.

### 17.3 Pilot success review

At the end of the pilot, review: - Fulfillment and match-time trends. -
Pickup ETA accuracy. - Rider and driver cancellation reasons. -
Completed trips and repeat usage. - Driver utilization and net
earnings. - Payment success and reconciliation exceptions. - Support
contact rate and resolution time. - Safety reports and response
performance. - App reliability and third-party dependency health.

Scale only if product outcomes improve while safety, compliance, and
marketplace guardrails remain within approved limits.

## 18. Suggested delivery workstreams

  -----------------------------------------------------------------------
  Workstream                          Main deliverables
  ----------------------------------- -----------------------------------
  Rider experience                    Rider app flows, quote, request,
                                      tracking, payment, receipt, rating

  Driver experience                   Onboarding, availability, request
                                      handling, navigation, trip
                                      completion, earnings

  Marketplace platform                Quote, dispatch, trip state
                                      machine, location, notifications

  Payments and finance                Payment orchestration, ledger,
                                      refunds, payout and reconciliation

  Safety and support                  Safety entry points, incident
                                      workflow, support tooling,
                                      escalation runbooks

  Operations and compliance           Admin console, market
                                      configuration, driver eligibility,
                                      audit

  Data and experimentation            Event taxonomy, dashboards, funnel
                                      analysis, experiment framework

  Quality and reliability             Test automation, load testing,
                                      observability, incident and
                                      rollback readiness
  -----------------------------------------------------------------------

## 19. Recommended MVP prioritization

**Must ship (P0):** authentication, rider pickup/destination, fare
quote, booking, dispatch, driver approval and online state, trip state
machine, location tracking, pickup verification, digital payment,
receipt, cancellation, safety escalation, support, operations trip
lookup, audit logs, and core analytics.

**Should ship soon (P1):** richer profile/preferences, scheduled rides,
trusted-contact trip sharing, document expiry alerts, advanced dispatch
controls, structured feedback, and expanded operations configuration.

**Could ship later (P2):** loyalty, subscriptions, multiple stops,
corporate profiles, shared rides, advanced personalization, and
additional mobility products.

## 20. Glossary

-   **ETA:** Estimated time of arrival.
-   **Dispatch:** Process of selecting and offering a ride request to an
    eligible driver.
-   **Fulfillment rate:** Share of eligible ride requests that receive a
    driver match.
-   **Marketplace:** The supply of available drivers and demand from
    riders.
-   **Quote:** Time-limited estimate of the fare and pickup/trip
    information before booking.
-   **Trip:** The accepted ride from pickup through completion or
    cancellation.
-   **P0/P1/P2:** Priority levels: launch-critical, important, and later
    enhancement.
-   **Idempotency:** A guarantee that retrying the same operation does
    not create duplicate side effects.

------------------------------------------------------------------------

## Appendix A --- Example trip state transition rules

  -----------------------------------------------------------------------
  Current state           Allowed next state(s)   Initiator / guard
  ----------------------- ----------------------- -----------------------
  DRAFT                   QUOTED, EXPIRED         Rider / quote
                                                  validation

  QUOTED                  REQUESTED, EXPIRED      Rider / quote still
                                                  valid

  REQUESTED               SEARCHING,              Backend / rider
                          CANCELLED_BY_RIDER      

  SEARCHING               MATCHED,                Dispatch / rider
                          NO_DRIVER_FOUND,        
                          CANCELLED_BY_RIDER      

  MATCHED                 DRIVER_EN_ROUTE,        Driver / policy
                          CANCELLED_BY_DRIVER,    
                          CANCELLED_BY_RIDER      

  DRIVER_EN_ROUTE         DRIVER_ARRIVED,         Driver / policy
                          CANCELLED_BY_DRIVER,    
                          CANCELLED_BY_RIDER      

  DRIVER_ARRIVED          IN_PROGRESS,            Driver / pickup
                          CANCELLED_BY_DRIVER,    verification
                          CANCELLED_BY_RIDER      

  IN_PROGRESS             COMPLETED,              Driver / backend
                          PAYMENT_REVIEW          validation

  COMPLETED               (terminal)              Backend

  CANCELLED\_\*           (terminal)              Backend

  NO_DRIVER_FOUND         (terminal)              Backend

  EXPIRED                 (terminal)              Backend
  -----------------------------------------------------------------------

Every transition should include actor, timestamp, reason code where
applicable, request/correlation ID, and policy version.

## Appendix B --- Example critical test scenarios

1.  Rider denies location permission and manually enters pickup.
2.  Pickup is outside service zone.
3.  Quote expires while rider is reviewing it.
4.  Rider taps request repeatedly due to slow network.
5.  Two drivers attempt to accept the same request concurrently.
6.  Driver loses connectivity after accepting.
7.  Driver location becomes stale while approaching pickup.
8.  Rider cancels before match, after match, and after driver arrival.
9.  Driver reports rider no-show under configured waiting policy.
10. Incorrect pickup PIN is entered repeatedly.
11. Driver attempts to start trip before arrival / verification.
12. Driver app restarts during an active trip.
13. Payment authorization fails before trip; payment capture fails after
    completion.
14. Payment provider sends duplicate or delayed webhook.
15. Refund is retried after timeout.
16. Support agent without permission attempts to view sensitive safety
    evidence.
17. Driver document expires while online.
18. Emergency assistance is initiated in each supported market
    configuration.
19. Map provider is unavailable during quote or active trip.
20. Rider and driver apps show conflicting state after delayed events.

## Appendix C --- PRD ownership and sign-off

  -----------------------------------------------------------------------
  Role                    Responsibility          Sign-off
  ----------------------- ----------------------- -----------------------
  Product manager         Scope, priorities,      Pending
                          requirements, success   
                          metrics                 

  Design lead             User flows, interaction Pending
                          design, accessibility   

  Engineering lead        Architecture,           Pending
                          feasibility, estimates, 
                          reliability             

  Data/analytics lead     Event taxonomy, KPI     Pending
                          definitions, dashboards 

  Operations lead         Driver operations,      Pending
                          support, city readiness 

  Safety lead             Safety controls,        Pending
                          incident response,      
                          escalation              

  Legal/compliance        Regulatory, privacy,    Pending
                          insurance, consumer     
                          disclosures             

  Finance/payments        Payment rails, ledger,  Pending
                          reconciliation, payout  
  -----------------------------------------------------------------------

**Document note:** This PRD is a comprehensive starting point. Before
implementation, convert the open questions into explicit market
decisions, validate the workflows with riders and drivers, and attach
approved designs, API contracts, data-retention schedules, and
launch-market legal requirements.
