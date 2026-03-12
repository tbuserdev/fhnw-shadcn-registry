## Plan: Contract-First FHNW Visual Parity (v4)

Last updated: March 12, 2026

## Direction

The old plan was too component-local. It solved drift with one-off fixes instead of fixing the system that allows drift.

The registry now moves to a contract-first workflow:

1. Encode the FHNW visual rules in [`VISUAL_CONTRACT.md`](./VISUAL_CONTRACT.md).
2. Build shared recipes and tokens from that contract.
3. Refactor components to consume those recipes.
4. Verify against the official FHNW site with side-by-side visual review.

## Source of truth

The contract is derived from the live FHNW styleguide, reviewed on March 12, 2026:

- colors
- typography
- forms
- webdienst header
- webdienst footer
- buttons
- alerts
- dropdown
- nav-tabs
- pagination
- spinner
- progressbar
- accordion

This plan supersedes earlier assumptions whenever the live site proves otherwise.

## What the live site changed in our understanding

- Outline buttons are not generic boxed shadcn outline buttons.
- Inputs do not use blue focus rings.
- Dropdown menus are yellow, flat, and shadowless.
- Pagination active state is yellow, not black.
- FHNW consistency depends as much on square geometry and restrained interaction states as on color tokens.

## Current repo risks

The repo still allows visual drift because many components define local ad hoc classes instead of consuming shared FHNW recipes.

Current examples of drift-prone patterns:

- generic focus rings such as `focus:ring-blue-400`
- generic `gray-*` and `slate-*` colors
- `rounded-*` usage in FHNW components
- `shadow-*` usage on flat FHNW surfaces
- per-component color decisions that bypass the FHNW token set

## Workstreams

### P0: System fixes first

These are required before trusting any visual parity claims:

- Create shared FHNW recipes for:
  - primary action
  - secondary action
  - field
  - checkbox and radio
  - flat overlay
  - tab trigger
  - pagination link
  - alert surface
- Remove disallowed raw styling from component implementations unless explicitly permitted by the contract.
- Add a simple grep-based audit to flag:
  - `rounded-`
  - `shadow-`
  - `focus:ring-`
  - `ring-`
  - `bg-blue-`
  - `text-blue-`
  - `bg-slate-`
  - `text-slate-`

### P1: Primitive parity

Refactor these first because other components build on their patterns:

- `button.tsx`
- `input.tsx`
- `textarea.tsx`
- `select.tsx`
- `label.tsx`
- `checkbox.tsx`
- `radio-group.tsx`
- `tabs.tsx`
- `pagination.tsx`

Required outcomes:

- square geometry
- correct FHNW palette
- no blue focus ring
- canonical active and checked states visible in docs

### P2: Feedback and overlays

Refactor next:

- `accordion.tsx`
- `alert.tsx`
- `dropdown.tsx`
- `modal.tsx`
- `offcanvas.tsx`
- `popover.tsx`
- `tooltip.tsx`
- `loading-spinner.tsx`
- `progressbar.tsx`

Required outcomes:

- flat surfaces
- correct open and active states
- no generic shadows unless the official site requires them
- correct spacing and dimensions from the contract

### P3: Content and display components

Then refactor:

- `card.tsx`
- `teaser.tsx`
- `testimonial.tsx`
- `carousel.tsx`
- `images.tsx`
- `videos.tsx`
- `tables.tsx`
- `breadcrumb.tsx`
- `back-to-top.tsx`
- `site-header.tsx`

Required outcomes:

- contract-compliant surfaces and spacing
- corrected rendering bugs
- no regressions in docs previews

### P4: Docs parity and verification

The docs page must become the review surface, not just a demo page.

Required updates:

- Show canonical states by default:
  - accordion open
  - dropdown open
  - active tab visible
  - active pagination visible
  - checked radio and checkbox visible
- Remove Bootstrap-only class names from React examples.
- Keep the Bootstrap iframe preview adjacent to the React implementation for manual review.

## Known implementation tasks that remain valid

These tasks still belong in the backlog, but they now sit under the contract-first workflow:

- `carousel.tsx`: fix zero-height rendering by giving the active item layout ownership
- `icons.tsx`: ensure `icons.css` is imported
- `back-to-top.tsx`: provide visible default icon content
- `fhnw-components.css`: keep progressbar and arrow helper classes in sync with component usage

## Verification gates

No component is "done" until all gates pass:

1. Contract gate
   - The implementation follows [`VISUAL_CONTRACT.md`](./VISUAL_CONTRACT.md).

2. Code gate
   - No unapproved raw styling shortcuts remain in the component.

3. State gate
   - Default, hover, focus, open, active, disabled, and checked states match the official FHNW behavior.

4. Docs gate
   - The docs example shows the canonical state instead of a random neutral state.

5. Visual gate
   - Side-by-side review against the official FHNW page shows no obvious drift in geometry, spacing, palette, or interaction treatment.

## Immediate next execution order

1. Extract shared FHNW recipes from the contract.
2. Refactor `button`, `input`, `checkbox`, `radio-group`, `tabs`, and `pagination`.
3. Refactor `accordion`, `alert`, `dropdown`, `spinner`, and `progressbar`.
4. Fix known rendering issues in `carousel`, `icons`, and `back-to-top`.
5. Update `Docs.tsx` examples so review states are always visible.
6. Run a final side-by-side audit against the official styleguide pages.
