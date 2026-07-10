# Grand Theft Auto VI

## Mission
Create implementation-ready, token-driven UI guidance for Grand Theft Auto VI that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Grand Theft Auto VI
- URL: https://www.rockstargames.com/VI
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=ArtDecoMedium`, `font.family.stack=ArtDecoMedium, ArtDecoMedium Fallback`, `font.size.base=18px`, `font.weight.base=500`, `font.lineHeight.base=25.2px`
- Typography scale: `font.size.xs=13.5px`, `font.size.sm=15.75px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20.25px`, `font.size.2xl=27px`, `font.size.3xl=45px`, `font.size.4xl=63px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#ccc2f5`, `color.text.tertiary=#fff9cb`, `color.text.inverse=#070810`, `color.surface.base=#000000`, `color.surface.muted=#2c3868`, `color.surface.raised=#243152`, `color.surface.strong=#111117`
- Spacing scale: `space.1=15.75px`, `space.2=27px`, `space.3=31.5px`, `space.4=45px`, `space.5=54px`, `space.6=58.5px`
- Radius/shadow/motion tokens: `radius.xs=31.5px`, `radius.sm=1000px`, `radius.md=9999px` | `shadow.1=rgba(255, 179, 199, 0.404) 0px 2px 71.1614px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (41), links (20), inputs (8), navigation (2), lists (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
