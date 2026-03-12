# FHNW Visual Contract

Last updated: March 12, 2026

## Purpose

This contract defines the non-negotiable visual rules for the FHNW shadcn registry.
It is derived from the live FHNW Styleguide V5 website, not from component-by-component guesswork.
Agents should treat this file as the source of truth before editing any registry component.

## Official reference set

Primary source:

- https://web.fhnw.ch/fhnw-styleguide-v5/

Pages reviewed on March 12, 2026:

- https://web.fhnw.ch/fhnw-styleguide-v5/basic-elements/colors/
- https://web.fhnw.ch/fhnw-styleguide-v5/basic-elements/typography/
- https://web.fhnw.ch/fhnw-styleguide-v5/basic-elements/formulare/
- https://web.fhnw.ch/fhnw-styleguide-v5/basic-elements/webdienst-header/
- https://web.fhnw.ch/fhnw-styleguide-v5/basic-elements/webdienst-footer/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/buttons/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/alerts/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/dropdown/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/navtabs/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/pagination/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/spinner/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/progressbar/
- https://web.fhnw.ch/fhnw-styleguide-v5/components/accordion/

Captured local screenshots:

- `./.playwright-cli/page-2026-03-12T13-37-30-073Z.png`
- `./.playwright-cli/page-2026-03-12T13-37-58-473Z.png`
- `./.playwright-cli/page-2026-03-12T13-38-16-817Z.png`
- `./.playwright-cli/page-2026-03-12T13-39-01-711Z.png`
- `./.playwright-cli/page-2026-03-12T13-39-43-120Z.png`
- `./.playwright-cli/page-2026-03-12T13-40-02-731Z.png`
- `./.playwright-cli/page-2026-03-12T13-40-57-703Z.png`
- `./.playwright-cli/page-2026-03-12T13-41-15-882Z.png`
- `./.playwright-cli/page-2026-03-12T13-41-37-344Z.png`
- `./.playwright-cli/page-2026-03-12T13-42-09-916Z.png`
- `./.playwright-cli/page-2026-03-12T13-42-42-172Z.png`

## Non-negotiable design rules

### 1. Overall visual language

- FHNW V5 is flat, restrained, and high-contrast.
- Corners are square. Default radius is `0px`.
- Default shadows are absent. Do not add generic card, menu, modal, or button shadows unless the official styleguide clearly shows one.
- Black, yellow, muted gray, and off-white carry the system. Avoid generic Tailwind blues, slates, or rounded UI defaults.

### 2. Typography

- Primary font family is `Inter`.
- Default body text is `16px / 24px` in `#4c4c4c`.
- Headings are black.
- Component-level headings should default to semibold, compact, and flat, not oversized marketing typography.
- The typography page also uses ultra-light display treatment for some `h1` examples, but that is page-level editorial styling, not the default component recipe.

### 3. Core palette

Use these values for component work unless a specific component page proves otherwise:

- `--fhnw-black`: `#000000`
- `--fhnw-white`: `#ffffff`
- `--fhnw-body`: `#4c4c4c`
- `--fhnw-secondary`: `#fde703`
- `--fhnw-highlight`: `#fef387`
- `--fhnw-success`: `#28a745`
- `--fhnw-danger`: `#df305b`
- `--fhnw-info`: `#dee2e6`
- `--fhnw-light`: `#f1f1ee`
- `--fhnw-field-bg`: `#f7f7f5`
- `--fhnw-border`: `#deded9`
- `--fhnw-muted-strong`: `#767573`
- `--fhnw-progress-track`: `#e9ecef`
- `--fhnw-checkbox-border`: `#bebdb9`

Notes:

- The live site exposes Bootstrap variables, but component-level rendering often uses FHNW-specific overrides. Match rendered output, not generic Bootstrap defaults.
- Warning surfaces sit in the FHNW yellow family. Prefer the live component rendering over raw Bootstrap token names when the two differ.

### 4. Geometry and spacing

- Default component radius: `0px`
- Default field and pagination border width: `2px`
- Default button and alert border width: `0px`
- Common spacing unit in components: `16px`
- Accordion trigger/content padding: `16px 20px`
- Alert padding: `24px`
- Default field height: `60px`
- Spinner size: `32px` with `4px` stroke
- Progressbar height: `24px`

### 5. Focus and interaction behavior

- Do not use the generic blue shadcn focus ring.
- Inputs do not gain a glow or ring on focus.
- Inputs shift from `#f7f7f5` to white on focus while keeping square geometry.
- Buttons stay flat on focus. No glow, no shadow, no rounded ring treatment.
- Checked checkbox and radio states are black fill with no blue focus halo.
- Hover behavior is subtle. Prefer slight color adjustment over adding shadow, scale, or animated flourish.

## Canonical component recipes

### Buttons

Observed on the live buttons page:

- Primary button: black fill, white text, square edges, no shadow, `16px` padding.
- Secondary button: FHNW yellow fill, black text, square edges, no shadow, `16px` padding.
- Small buttons: `4px 16px`
- Large buttons remain flat and square, with larger text and/or padding.
- "Outline" buttons are visually much closer to text emphasis than bordered pills. Do not invent boxed, rounded, shadcn-style outline buttons.
- Link-like actions should look restrained and integrated, not like standard blue browser links unless the styleguide explicitly shows a content link.

### Inputs, textarea, select

Observed on the forms page:

- Background: `#f7f7f5` by default
- Focus background: white
- Border: `2px solid #deded9`
- Text color: black in the control, body gray in labels
- Height: `60px` for standard single-line fields
- Radius: `0px`
- No glow, no ring, no shadow

### Checkbox and radio

Observed on the forms page:

- Unchecked checkbox uses a light neutral fill with darker neutral border.
- Checked checkbox becomes solid black.
- Checked radio becomes solid black with circular geometry.
- Labels remain body-colored and flat.

### Alerts

Observed on the alerts page:

- Alerts are solid or softly tinted blocks.
- No rounded corners.
- No visible border treatment.
- Padding is generous: `24px`.
- Primary: black background with white text.
- Secondary: yellow background with black text.
- Success: green background with white text.
- Danger: FHNW magenta-red background with white text.
- Info: cool light gray background with black text.
- Light: `#f1f1ee` background.

### Accordion

Observed on the accordion page and component behavior:

- Closed trigger background is muted light gray.
- Trigger text is semibold and body-colored.
- Trigger and body padding are `16px 20px`.
- Open state must use the FHNW highlight yellow.
- Avoid extra rounded wrappers, card chrome, or spacious gaps between items.

### Dropdown

Observed on the dropdown page:

- Trigger is commonly a yellow button treatment.
- Menu background is FHNW yellow.
- Menu radius is `0px`.
- Menu shadow is absent.
- Menu items use compact `8px` padding.
- Do not render white dropdown cards with rounded corners or floating shadow.

### Navigation tabs

Observed on the nav-tabs page:

- Tabs are flat text labels.
- Active tab is black and semibold.
- Inactive tabs are gray.
- Active state is expressed with a yellow underline bar, not a filled pill and not a black underline.
- Avoid bordered tab pills, rounded tabs, or animated panel transitions that are not present in the styleguide.

### Pagination

Observed on the pagination page:

- Links use `2px` neutral borders.
- Default page background is white.
- Active page background is FHNW yellow.
- Geometry is square.
- Typography stays body-sized.
- Do not render black active pages or rounded pagination chips.

### Spinner

Observed on the spinner page:

- `32px` square box
- `4px` border
- Uses current text color for the stroke
- Right border is transparent
- Flat presentation, no framing container needed unless the usage context requires one

### Progressbar

Observed on the progressbar page:

- Track height: `24px`
- Track background: `#e9ecef`
- Fill background: `#767573`
- Fill text: white, `12px`
- No rounded caps
- Striped and animated variants must preserve the same base geometry

### Header and footer shell

Observed on the webdienst header and footer pages:

- Webdienst header nav bar is FHNW yellow, fixed, and `60px` tall.
- Branding is black on yellow.
- Search and utility actions stay flat and square.
- Footer is black with muted gray text, compact columns, and understated underlined links.
- Do not improvise glossy header bars, elevated navigation, or oversized footer cards.

## Rules for registry authors and agents

### Required implementation discipline

- Build shared recipes first. Do not restyle each component from scratch.
- A component may only use raw utility classes when those classes are already part of the approved FHNW recipe.
- If a needed treatment is missing, add a shared recipe or token first, then consume it.

### Disallowed by default

- `rounded-*`
- `shadow-*`
- `focus:ring-*`
- `ring-*`
- `bg-blue-*`
- `text-blue-*`
- `bg-slate-*`
- `text-slate-*`
- ad hoc gray scales that are not part of the FHNW palette

### Required states in docs examples

Every registry preview must demonstrate the canonical state, not a random state:

- Accordion: first item open
- Dropdown: menu open
- Pagination: active page visible
- Tabs: active underline visible
- Checkbox and radio: checked state visible
- Spinner and progressbar: default scale visible

## Acceptance checklist

A component is not done until all of the following pass:

1. It uses the shared FHNW tokens and recipes instead of ad hoc local styling.
2. Its default, hover, focus, open, active, disabled, and checked states match the official site behavior.
3. It avoids rounded corners, generic shadows, and blue focus treatment unless the official site explicitly shows them.
4. Its docs example shows the intended canonical state.
5. A side-by-side visual review against the official FHNW page shows no obvious drift in color, spacing, geometry, or state treatment.

## Corrections to earlier assumptions

The official site analysis invalidates several easy-to-make assumptions:

- Outline buttons are not generic bordered shadcn outline buttons.
- Inputs do not use blue focus rings.
- Dropdown menus are yellow, flat, and shadowless.
- Pagination active state is yellow, not black.
- FHNW consistency depends more on square geometry and restrained states than on copying a few hex values.
