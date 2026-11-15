---
name: Investing Platform (working title)
description: Provisional visual contract for a calm, accessible, long-term investing experience in India.
status: draft
sources:
  - ../../../../Input/PRD_Investing_Platform.md
  - ../../../../Input/UX_Strategy_Investing_Platform.md
updated: 2026-11-15
colors:
  canvas: '#F8F6F1'
  surface: '#FFFFFF'
  surface-subtle: '#EEEAE2'
  ink: '#17242E'
  ink-secondary: '#4B5962'
  border: '#727B7F'
  brand: '#214A5C'
  positive: '#28624F'
  negative: '#A33A35'
  focus: '#214A5C'
  canvas-dark: '#111A20'
  surface-dark: '#1B272E'
  surface-subtle-dark: '#26343B'
  ink-dark: '#F5F2EB'
  ink-secondary-dark: '#C1C9C8'
  border-dark: '#849092'
  brand-dark: '#A8CBD5'
  positive-dark: '#9DD3B5'
  negative-dark: '#FFAAA0'
  focus-dark: '#A8CBD5'
typography:
  display:
    fontFamily: 'Noto Sans'
    fontSize: '28px'
    fontWeight: '600'
    lineHeight: '1.25'
  title:
    fontFamily: 'Noto Sans'
    fontSize: '22px'
    fontWeight: '600'
    lineHeight: '1.35'
  body:
    fontFamily: 'Noto Sans'
    fontSize: '16px'
    fontWeight: '400'
    lineHeight: '1.55'
  label:
    fontFamily: 'Noto Sans'
    fontSize: '14px'
    fontWeight: '500'
    lineHeight: '1.45'
  numeric:
    fontFamily: 'Noto Sans'
    fontSize: '20px'
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  gutter-mobile: 16px
  gutter-tablet: 24px
  section: 32px
components:
  button-primary:
    background: '{colors.brand}'
    foreground: '{colors.surface}'
    radius: '{rounded.md}'
  button-secondary:
    background: '{colors.surface}'
    foreground: '{colors.brand}'
    border: '{colors.brand}'
    radius: '{rounded.md}'
  input:
    background: '{colors.surface}'
    foreground: '{colors.ink}'
    border: '{colors.border}'
    radius: '{rounded.sm}'
  card:
    background: '{colors.surface}'
    foreground: '{colors.ink}'
    border: '{colors.surface-subtle}'
    radius: '{rounded.md}'
  focus-ring:
    color: '{colors.focus}'
---

## Brand & Style

**Working direction, not an approved brand identity.** The PRD and strategy call for calm, warm, credible, and trustworthy. This draft uses a restrained blue-green anchor and warm neutral surfaces as a testable interpretation of that direction. Product name, exact palette, and brand voice remain open for user and brand review. Token colors are provisional; replace or approve them after Hindi/English accessibility checks.

The visual hierarchy favors plain explanations, visible costs, and meaningful next steps. Charts and portfolio values remain quiet. Movement is communicated with labels, signs, and icons as well as color. Avoid trading-floor urgency, ornamental wealth imagery, and celebratory treatment of financial risk.

## Colors

Frontmatter colors are provisional starting values, not researched brand decisions. `canvas` supports a warm, low-glare page; `surface` holds readable content; `brand` marks the primary action and navigation emphasis. `positive` and `negative` are state cues only and never carry meaning alone. Use `negative` for errors needing attention, not for ordinary market declines. Dark tokens form a complete dark theme; do not derive dark mode by inverting light colors.

Verify text and control contrast for every token pairing in both themes and both scripts before release. The design target is WCAG AA text contrast (4.5:1 for ordinary text, 3:1 for large text and essential non-text controls); the PRD calls for WCAG AA, and the strategy proposes WCAG 2.2 AA as a stretch target.

## Typography

Use a font family with complete Devanagari and Latin glyph coverage; Noto Sans is a provisional candidate, not a final vendor choice. Keep body text at least 16px/16sp at default scaling. Use the `numeric` role for monetary and performance values, with tabular numerals when supported. Test Hindi first for line height, wrapping, punctuation, and mixed-language terms. Respect system text scaling to 200% without clipping or hiding actions.

## Layout & Spacing

Use a single-column mobile layout with `gutter-mobile` on Android phones. The 360dp screen is a stress-test width, not a minimum-device requirement. Keep the main action reachable, allow long Hindi strings to wrap, and avoid fixed-height text containers. Tablet and later iOS/web layouts may use wider content columns while preserving reading order and clear action hierarchy.

The spacing scale is a 4px base with 8px rhythm for related elements. Use `section` between distinct task groups. Dense financial details should be progressively disclosed, never removed from required pre-commit review.

## Elevation & Depth

Prefer surface contrast and borders over stacked shadows. A modal or bottom sheet may use a restrained shadow to establish its layer. Do not use depth to imply that an investment is safer or more valuable.

## Shapes

Use `rounded.sm` for fields and compact controls, `rounded.md` for cards and sheets, and `rounded.lg` only for major grouped panels. `full` is reserved for small status chips and avatars, not primary buttons. Shapes should feel approachable without making a financial transaction feel playful.

## Components

| Component | Visual contract |
|---|---|
| Primary and secondary buttons | Use the matching button tokens. Text labels state the action; disabled state has readable text and a programmatic reason. |
| Input and OTP field | Use `input` tokens, persistent labels, visible focus, inline validation text, and adequate Hindi line height. OTP cells must read as one code to assistive technology. |
| Language selector | Show the language names in their own scripts where practical; never use flags as language identifiers. |
| KYC progress stepper | Show step name, current state, and progress text; color is supplementary. |
| Fund card | Show fund name, direct-plan status, category, approved risk indicator, and a short suitability explanation. Avoid performance-led visual emphasis. |
| Risk indicator | Pair label and plain-language explanation with any graphic; never use red/green alone. |
| Cost breakdown and pre-commit review | Keep advisory fee, fund expenses, other charges, risk, and next steps visible before the action. Separate values from estimates and disclose assumptions. |
| Goal card and progress visual | Show target, date, current value/as-of date, status text, and projection uncertainty. Do not encode “on track” by color alone. |
| Market context card | Use neutral surfaces and verified facts. No loss-red hero, flashing movement, or recovery imagery. |
| Status banner | Use success, pending, failure, or needs-attention label and icon/text together. Preserve the underlying transaction state. |
| Help entry point | Use an explicit “Need help?” label and accessible icon; no icon-only support action. |
| Bottom navigation | Show an explicit label and selected state for each destination; keep touch targets and Hindi labels readable. |
| Chart | Simple line or range visualization with labeled axes/period and text alternative. No candlesticks in MVP. |
| Tooltip / explainer | Use a recognizable labeled affordance and support keyboard/screen-reader access; required disclosures are not tooltip-only. |

## Do's and Don'ts

| Do | Don't |
|---|---|
| Use the selected language throughout each core flow. | Mix untranslated content into a completed localization. |
| Show fees, risk, and transaction status before and after commitment. | Use a color or animation as the sole explanation of status. |
| Keep primary actions obvious and reversible actions discoverable. | Hide pause, cancel, or withdraw behind pressure prompts. |
| Keep this palette provisional pending user and accessibility review. | Present provisional colors or type as an approved brand system. |
| Use restrained, purposeful motion and honor reduced-motion settings. | Celebrate buying, returns, or risk taking with confetti or streaks. |
