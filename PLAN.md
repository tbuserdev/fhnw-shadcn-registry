## Plan: Bootstrap-Free Visual Parity + Docs Overhaul (v3 — Post-Audit)

> Last visual audit: 12. März 2026 via Chrome MCP inspection of `http://localhost:5173/docs`

---

## Current Status

**All `fhnw-bootstrap.css` imports have been removed.** Every registry component now imports only `fhnw-components.css` (or `icons.css` — pending fix below). The migration structure is complete, but a visual audit reveals ~10 components with incorrect Tailwind values that don't match the FHNW Bootstrap 5 reference. The issues are documented below.

---

## Confirmed Working (no changes needed)

| Component | Status |
|---|---|
| `button.tsx` | ✅ Visual match |
| `badge.tsx` | ✅ Visual match |
| `card.tsx` | ✅ Visual match |
| `input.tsx` | ✅ Visual match |
| `textarea.tsx` | ✅ Visual match |
| `select.tsx` | ✅ Visual match |
| `modal.tsx` | ✅ Trigger matches |
| `offcanvas.tsx` | ✅ Trigger matches |
| `collapse.tsx` | ✅ Works functionally |
| `breadcrumb.tsx` | ✅ Close match (/ separator vs ▶) |
| `images.tsx` | ✅ Matches |
| `videos.tsx` | ✅ Matches |
| `tables.tsx` | ✅ Matches |
| `teaser.tsx` | ✅ Renders correctly |
| `testimonial.tsx` | ✅ Layout correct |
| `tooltip.tsx` | ✅ Trigger matches |
| `popover.tsx` | ✅ Pre-opened state shown correctly |
| `site-header.tsx` | ✅ Already pure Tailwind |
| `nav-tabs.tsx` | Re-export of tabs.tsx — fixed when tabs is fixed |

---

## Issues Found — Ordered by Priority

### P0 — Broken / Not Rendering

#### Fix 1: `carousel.tsx` — Invisible (zero height container)

**Root cause:** `CarouselItem` applies `absolute inset-0` to ALL items regardless of active state. Since all children are absolutely positioned, the parent container collapses to zero height.

**Fix:**
- Active item: `relative w-full` (defines container height)
- Inactive item: `absolute inset-0 opacity-0 pointer-events-none`
- Both: `transition-opacity duration-500`
- Also fix image classes in `Docs.tsx`: `className="d-block w-100"` → `className="block w-full"`

#### Fix 2: `icons.tsx` — Icons not showing

**Root cause:** `icons.tsx` imports `./fhnw-components.css` instead of `./icons.css`. The `icons.css` file exists and has all the mask-image definitions, but it's never imported.

**Fix:** Change `import "./fhnw-components.css"` → `import "./icons.css"` in `icons.tsx`.

---

### P1 — Wrong FHNW Colors / Visual Mismatch

#### Fix 3: `alert.tsx` — Wrong color system

**Current:** Uses generic Tailwind colors with visible borders (blue, red, yellow, cyan etc.) — looks like shadcn default alerts, not FHNW Bootstrap.

**Fix — rewrite `alertVariants`:**
```ts
const alertVariants = cva("relative px-6 py-6 mb-4 text-base", {
  variants: {
    variant: {
      default:      "bg-black/[0.08] text-black",
      primary:      "bg-black/[0.08] text-black",
      secondary:    "bg-[#fde703]/30 text-black",
      success:      "bg-[#28a745]/15 text-[#0a3622]",
      destructive:  "bg-[#df305b]/15 text-[#58151c]",
      danger:       "bg-[#df305b]/15 text-[#58151c]",
      warning:      "bg-[#fbd100]/20 text-black",
      info:         "bg-[#dee2e6] text-black",
      light:        "bg-[#f1f1ee] text-black",
      dark:         "bg-[#dee2e6]/70 text-black",
    },
  },
  defaultVariants: { variant: "default" },
});
```
- Remove `rounded border` from the base class (Bootstrap alerts have no border or radius)
- `AlertTitle`: `font-semibold mb-1 text-[1.1em]`

#### Fix 4: `accordion.tsx` — Wrong colors, missing open state, no caret icon

**Current issues:**
- `Accordion` root: `space-y-2` adds gaps between items — should be `divide-y divide-border` or no wrapper class
- `AccordionItem`: `border border-border` wraps item — should be only `border-b border-border`
- `AccordionTrigger`: `bg-gray-100 hover:bg-gray-200 focus:ring-blue-400` — not FHNW colors
- Open state: no yellow background applied to open trigger
- No caret icon that rotates on open

**Fix:**
- `Accordion` root: remove `space-y-2`, add no wrapper class (or just `""`)
- `AccordionItem`: replace `border border-border` → `border-b border-border`
- `AccordionTrigger` closed: `w-full flex items-center justify-between px-5 py-4 text-left bg-muted text-foreground font-semibold hover:bg-[#deded9] focus-visible:outline-none transition-colors`
- `AccordionTrigger` open: append `bg-[#fef387] hover:bg-[#fef387]` when `context.isOpen`
- Add Phosphor `CaretDownIcon` as last element in trigger: `<CaretDownIcon className={cn("size-4 shrink-0 transition-transform duration-200", context.isOpen && "rotate-180")} />`
- `AccordionContent` animation: `max-h-0 overflow-hidden transition-[max-height] duration-300` closed, `max-h-[500px]` open (or use `hidden`/`block` for reliability)
- Content inner div: `px-5 py-4`

Also fix in `Docs.tsx`: Add `defaultValue="item-1"` to the Accordion example so the preview shows the open state.

#### Fix 5: `tabs.tsx` — Active tab underline is black, should be FHNW yellow

**Current:** `isActive && "border-b-2 border-black"` — black underline

**Fix:** Change to `isActive && "border-b-2 border-[#fde703] font-semibold"` (FHNW yellow underline)
- Base trigger: remove `focus:ring-blue-400`, replace with `focus-visible:outline-none`
- `TabsContent`: change from opacity transition to `hidden`/`block`: `hidden` when inactive, `block` when active (simplier, accessible)
- `TabsList`: `flex border-b border-border` — retain the bottom border on the list

#### Fix 6: `pagination.tsx` — Active page is black, should be yellow

**Current:** `isActive && "border-black bg-black text-white"` — black active page

**Fix:** `isActive && "bg-[#fde703] border-[#fde703] text-black"`
- Base link: `border-gray-300` → `border-[#deded9]`; add `border-2` for Bootstrap-matched thick border; `rounded` → remove radius (`--radius: 0px`); `px-3 py-[0.375rem]`; `text-sm` → `text-base`
- Focus: `focus-visible:outline-none` (remove blue ring)

#### Fix 7: `dropdown.tsx` — Menu background is white, should be yellow

**Current:** `DropdownMenuContent` has `bg-white border border-gray-300 rounded shadow-lg` — generic

**Fix:**
- `DropdownMenuContent`: `min-w-[10rem] bg-[#fde703] py-[10px] px-[5px] list-none m-0 shadow-none` (no border, no rounded)
- `DropdownMenuItem`: `hover:bg-black/10` (not `hover:bg-gray-100`)
- `DropdownMenuLink`: same
- `DropdownMenuTrigger`: add `<CaretDownIcon className="size-4" />` Phosphor icon as last child
- Also in `Docs.tsx` — the dropdown preview renders with `defaultOpen` — verify it sets `defaultOpen={true}` so it shows open

#### Fix 8: `radio-group.tsx` — Checked state shows yellow fill instead of black

**Current:** `data-checked:bg-secondary` applies `background-color: var(--secondary)` = `#fde703` (yellow)
Indicator dot: `bg-black` = black dot inside yellow fill = barely visible.

**Fix:**
- Change `data-checked:bg-secondary` → `data-checked:bg-black` (dark fill)
- Change indicator dot `bg-black` → `bg-white` (white dot inside dark fill)

---

### P2 — Wrong Dimensions / Sizing

#### Fix 9: `loading-spinner.tsx` — Wrong centering and spinner style

**Current:**
- Padding: `p-7` — too small, should be `p-[3rem]` to match Bootstrap
- Spinner: `border-4 border-gray-300 border-t-black` — uses colored-top approach; Bootstrap uses `border-r-transparent` approach
- Spinner is visually smaller and positioned at top-left of the preview container

**Fix:**
- Container: `flex justify-center items-center p-[3rem]`
- Spinner: `inline-block size-8 rounded-full border-[0.25em] border-current border-r-transparent animate-spin align-[-0.125em]`
- `variant="default"`: no color class (inherits foreground)
- `variant="white"`: container `bg-black`, spinner `text-white`

#### Fix 10: `progressbar.tsx` — Too short, wrong colors

**Current:** `Progress` container `h-2` (8px), `bg-gray-200`, `rounded` — Bootstrap progress is 24px tall, muted background, no radius.

**Fix:**
- `Progress`: `w-full overflow-hidden bg-[#f1f1ee] h-6` (remove `rounded`)
- `ProgressBar` fill: `h-full flex items-center justify-center text-white text-xs font-medium bg-[#767573] transition-[width]`
- `striped`: `bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]` — use custom class `fhnw-progress-striped` already referenced in the component; define it in `fhnw-components.css`
- `animated`: `animate-[progress-bar-stripes_1s_linear_infinite_reverse]` already referenced; add styles to `fhnw-components.css`

---

### P3 — Docs.tsx Fixes

#### Fix 11: `Docs.tsx` — Accordion example should default to open

Add `defaultValue="item-1"` to the `<Accordion>` in the docs example so the preview shows item 1 in its open (yellow) state matching the Bootstrap reference.

#### Fix 12: `Docs.tsx` — Carousel image className uses Bootstrap classes

Change `className="d-block w-100"` → `className="block w-full"` on both `<img>` elements inside the `<Carousel>` example.

#### Fix 13: `back-to-top.tsx` — Missing icon content

The `<BackToTop>` component's `<a>` element has no children. The Button appears as a black circle with no visible arrow. Add `<ArrowUpIcon className="size-5" />` from `@phosphor-icons/react` as the default child content (or render it unconditionally inside the component when children is undefined).

---

### P4 — CSS Companion File Additions

#### Fix 14: `fhnw-components.css` — Add progress bar utility classes

The `progressbar.tsx` already uses class names `fhnw-progress-striped` and `fhnw-progress-animated`, but these are not defined in `fhnw-components.css`. Add:

```css
/* Progress Bar Striped */
.fhnw-progress-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

/* Progress Bar Animated */
.fhnw-progress-animated {
  animation: progress-bar-stripes 1s linear infinite reverse;
}
```

#### Fix 15: `fhnw-components.css` — Tooltip and popover arrow directional variants

The `.fhnw-tooltip-arrow` and `.fhnw-popover-arrow` classes exist but have no directional border values. The border-triangle approach needs data-placement variants:

```css
/* Tooltip arrows by placement */
.fhnw-tooltip-arrow[data-placement="top"] {
  bottom: -6px; left: 50%; transform: translateX(-50%);
  border-width: 6px 6px 0;
  border-color: #000 transparent transparent transparent;
}
.fhnw-tooltip-arrow[data-placement="bottom"] {
  top: -6px; left: 50%; transform: translateX(-50%);
  border-width: 0 6px 6px;
  border-color: transparent transparent #000 transparent;
}
/* etc. for start/end placements */

/* Popover arrows by placement */
.fhnw-popover-arrow[data-placement="bottom"] {
  top: -8px; left: 50%; transform: translateX(-50%);
  border-width: 0 8px 8px;
  border-color: transparent transparent #000 transparent;
}
/* etc. */
```

---

## Verification Checklist (after all fixes)

1. `grep -r "fhnw-bootstrap.css" registry/` → zero results ✅ (already passing)
2. `grep -r "import.*bootstrap" registry/` → only `icons.css` in `icons.tsx`
3. Visual spot-checks on `pnpm dev` `/docs`:
   - **Accordion**: gray closed, yellow open (#fef387), caret rotates ☐
   - **Alert**: no border, correct subtle-tint backgrounds ☐
   - **Tabs**: yellow underline on active tab ☐
   - **Pagination**: yellow active page ☐
   - **Dropdown**: yellow menu background ☐
   - **Carousel**: renders images, controls work ☐
   - **Radio**: black fill + white dot on checked ☐
   - **Loading Spinner**: centered, correct border style ☐
   - **Progressbar**: h-6, muted bg, gray fill ☐
   - **Icons**: social icons render using mask-image ☐
   - **Back-to-top**: upward arrow visible in button ☐
4. `pnpm registry:build` → no errors ☐
5. `pnpm build` → no TypeScript errors ☐

---

## Out of Scope (deferred)

- Docs sidebar, copy buttons, component playground (Phase 15–17 from v2 plan)
- Dark mode support
- Offcanvas/Modal interactive click-through UX testing
- Tooltip/Popover arrow pixel-perfect positioning (functional, just not arrow-positioned yet)

---

## Plan: Bootstrap-Free Visual Parity + Docs Overhaul (v2 — original, superseded)

**Core mandate:** All 22 registry components that currently `import "./fhnw-bootstrap.css"` must have that import removed. Zero Bootstrap class names (`btn-*`, `alert-*`, `accordion-*`, etc.) anywhere in the registry. Visual output must remain **pixel-comparable** to the FHNW Bootstrap 5 theme using only Tailwind utilities and a minimal custom CSS complement.

---

### The Three-Layer Styling Strategy

1. **Tailwind utility classes** — covers ~90% of all component styling
2. **CSS custom properties** — FHNW brand tokens already in index.css (`--primary: #000`, `--secondary: #fde703`, `--muted: #f1f1ee`, `--border: #deded9`, `--radius: 0px`)
3. **`fhnw-components.css` in the `style-fhnw` registry item** — the remaining ~10% that Tailwind cannot express: `@keyframes` for spinner/progress animations, tooltip/popover arrow pseudo-elements (`::before`/`::after` triangles), offcanvas slide transition, teaser hover scale

---

### Phase 0 — Audit & Create the CSS Companion File

**Step 0A.** Full audit: `grep -r "fhnw-bootstrap.css" registry/` — confirms 22 files to fix. These are the only 22 files that need bootstrap import removal.

**Step 0B.** Create `registry/fhnw/ui/fhnw-components.css` — a new, purpose-built FHNW CSS file containing *only* what Tailwind cannot do:
- `@keyframes spinner-border { to { transform: rotate(360deg); } }` (for loading-spinner)
- `@keyframes progress-bar-stripes { from { background-position-x: 1rem; } }` (for animated progress bar)
- `.fhnw-tooltip-arrow` and `.fhnw-popover-arrow` CSS triangle pseudo-elements (tooltip/popover arrows)
- `.fhnw-offcanvas-slide` transition rules for offcanvas open/close animation
- Teaser `.group:hover img` scale effect (if not achievable via Tailwind group-hover)
- This file is **not Bootstrap** — it is purpose-written FHNW CSS

**Step 0C.** Add `@import "./fhnw-components.css"` to index.css so the docs app picks it up.

**Step 0D.** Update the `style-fhnw` registry item to include `fhnw-components.css` as a registered CSS file, so consumers who run `pnpm dlx shadcn add @fhnw/style-fhnw` receive it.

---

### Phase 1 — Structural/Media Components (Tier 1: simplest swaps)

**Step 1A. `videos.tsx`** — remove import; replace `ratio ratio-16x9` with Tailwind `aspect-video block w-full` on the wrapper `<div>`. Direct Tailwind equivalent exists.

**Step 1B. `images.tsx`** — remove import; replace `img-fluid` → `max-w-full h-auto`; `figure` → `inline-block`; `figure-img img-fluid` → `max-w-full h-auto mb-2`; `figure-caption` → `mt-1 text-[0.875em] text-[#6c757d]`.

**Step 1C. `tables.tsx`** — remove import; replace `table` class with Tailwind table styling. Add `striped` and `hover` boolean props:
- Base table: `w-full caption-bottom text-sm text-foreground border-collapse [&_th]:px-3 [&_th]:py-3 [&_th]:font-semibold [&_td]:px-3 [&_td]:py-3 [&_tr]:border-b [&_tr]:border-border`
- `striped` prop: `[&_tbody_tr:nth-child(odd)]:bg-[#f7f7f5]`
- `hover` prop: `[&_tbody_tr:hover]:bg-[#f1f1ee]`
- `TableResponsive`: `overflow-x-auto`

---

### Phase 2 — Form Components (Tier 2: Tailwind values corrected to match FHNW Bootstrap exactly)

**Step 2A. `input.tsx`** — keep Base UI `InputPrimitive`; remove custom Tailwind; replace with FHNW Bootstrap-matched values:
`w-full px-4 py-4 text-base text-black bg-[#f7f7f5] border-2 border-[#deded9] outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-black focus:bg-white focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)] disabled:cursor-not-allowed disabled:opacity-50`

**Step 2B. `textarea.tsx`** — same padding/border/focus values as Input. Add `min-h-[calc(1.5*3em+2rem)] resize-y`.

**Step 2C. `select.tsx`** — Keep Base UI `SelectPrimitive`; no Bootstrap. Trigger: `w-full flex items-center justify-between px-4 py-4 text-base text-black bg-[#f7f7f5] border-2 border-[#deded9] outline-none focus:border-black focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)]`; remove Base UI animation classes from popup; SelectContent popup: `bg-white border-0 shadow-[0_18px_40px_rgba(0,0,0,0.12)]`; SelectItem: `px-4 py-1 text-base text-black hover:bg-black/10`; SelectSeparator: `mx-4 my-1 h-px bg-border`.

**Step 2D. `checkbox.tsx`** — keep Base UI `CheckboxPrimitive`; replace Tailwind: `size-5 shrink-0 border-2 border-[#888] bg-transparent cursor-pointer transition-colors outline-none data-checked:bg-black data-checked:border-black focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)] disabled:cursor-not-allowed disabled:opacity-50`; indicator (checkmark): `text-white size-3.5`.

**Step 2E. `radio-group.tsx`** — same as checkbox but `rounded-full`; indicator dot: `size-2.5 rounded-full bg-white`.

**Step 2F. `label.tsx`** — `inline-block text-base text-black mb-0`.

---

### Phase 3 — Card Component (Tier 2: Bootstrap structure in Tailwind)

**Step 3A. `card.tsx`** — remove import; replace each sub-component:
- `Card`: `relative flex flex-col min-w-0 bg-white border border-black/[0.125]`
- `CardHeader`: `px-4 py-2 bg-black/[0.03] border-b border-black/[0.125]`
- `CardTitle`: rendered as `<h5>`, class `mb-2 text-black font-semibold m-0`
- `CardDescription`: `text-sm text-[#6c757d] -mt-1`
- `CardContent`: `p-4`
- `CardFooter`: `px-4 py-2 bg-black/[0.03] border-t border-black/[0.125]`

⚠️ The blocks use `CardHeader className="bg-muted"` — this will override the default header bg. Must be verified visually after this change.

---

### Phase 4 — Button & Badge (Tier 2: full rewrite of Bootstrap variant system)

**Step 4A. `button.tsx`** — remove import; completely rewrite `buttonVariants` cva with Tailwind:
- Base shared classes: `inline-flex items-center justify-center whitespace-nowrap text-base font-semibold leading-[1.5] cursor-pointer transition-colors no-underline disabled:opacity-50 disabled:cursor-not-allowed`
- `default`: `bg-black text-white hover:bg-black/85`
- `secondary`: `bg-[#fde703] text-black hover:bg-[#e5cf02]`
- `outline`: `border border-black bg-transparent text-black hover:bg-black hover:text-white`
- `ghost`: `bg-[#f1f1ee] text-black hover:bg-[#deded9]`
- `link`: `bg-transparent text-foreground underline hover:text-black`
- Size default: `px-3 py-[0.375rem]`; sm: `px-2 py-1 text-sm`; lg: `px-4 py-2 text-xl`; icon: `size-9`
- `ButtonGroup`: `inline-flex` (Bootstrap btn-group is just flex)

**Step 4B. `badge.tsx`** — remove import; rewrite `badgeVariants`:
- Base: `inline-block px-[0.65em] py-[0.35em] text-[0.75em] font-bold leading-none text-center whitespace-nowrap align-baseline`
- All color variants using raw FHNW hex values (primary: `bg-black text-white`; secondary: `bg-[#fde703] text-black`; danger: `bg-[#df305b] text-white`; warning: `bg-[#fbd100] text-black`; success: `bg-[#28a745] text-white`; etc.)

---

### Phase 5 — Alert

**Step 5A. `alert.tsx`** — remove import; rewrite `alertVariants` with FHNW Bootstrap-derived subtle backgrounds:
- Base: `relative px-6 py-6 mb-4 text-base`
- `primary/default`: `bg-black/[0.08] text-black`
- `secondary`: `bg-[#fde703]/[0.3] text-black`
- `success`: `bg-[#28a745]/[0.15] text-[#0a3622]`
- `destructive/danger`: `bg-[#df305b]/[0.15] text-[#58151c]`
- `warning`: `bg-[#fbd100]/[0.2] text-black`
- `info`: `bg-[#dee2e6] text-black`
- `light`: `bg-[#f1f1ee] text-black`
- `dark`: `bg-[#dee2e6]/70 text-black`
- `AlertTitle`: `font-semibold mb-1 text-[1.1em]`

---

### Phase 6 — Accordion, Tabs, Breadcrumb, Pagination

**Step 6A. `accordion.tsx`** — remove import; rewrite:
- `Accordion` div: no class
- `AccordionItem` div: `border-b border-border`
- `AccordionTrigger` button (closed): `w-full flex items-center justify-between px-5 py-4 text-left text-foreground bg-muted font-semibold hover:bg-[#deded9] focus-visible:outline-none transition-colors`
- `AccordionTrigger` button (open): override with `bg-[#fef387] text-black` (FHNW highlight)
- Add Phosphor `CaretDownIcon` in the trigger that rotates `rotate-180` when open
- `AccordionContent` (closed): `hidden`; (open): `block` — or animated via `overflow-hidden` + inline CSS height if smooth transition is desired
- `AccordionContent` inner div: `px-5 py-4`

**Step 6B. `tabs.tsx`** — remove import; rewrite:
- `TabsList` (`<ul>`): `flex gap-0 list-none m-0 p-0 border-b-0`
- `TabsTrigger` button: `px-4 py-2 text-base text-black bg-transparent border-0 cursor-pointer no-underline hover:bg-muted transition-colors border-b-2 border-transparent`
- Active: override to `bg-white border-b-2 border-[#fde703] font-semibold`
- `TabsContent`: `hidden` when inactive, `block` when active

**Step 6C. `breadcrumb.tsx`** — remove import; rewrite:
- `BreadcrumbList` (`<ol>`): `flex flex-wrap items-center gap-0 list-none m-0 p-0 text-[0.9575rem]`
- `BreadcrumbItem` (`<li>`): `flex items-center [&:not(:first-child)]:before:content-['/'] [&:not(:first-child)]:before:px-2 [&:not(:first-child)]:before:text-muted-foreground`
- `BreadcrumbLink`: `text-foreground underline hover:text-black`
- `BreadcrumbPage`: `text-black font-semibold`

**Step 6D. `pagination.tsx`** — remove import; rewrite:
- `PaginationContent` (`<ul>`): `flex gap-0 list-none m-0 p-0`
- `PaginationLink` (`<a>`): `flex items-center justify-center px-3 py-[0.375rem] border-2 border-border bg-white text-black no-underline hover:bg-muted cursor-pointer transition-colors`
- When `isActive`: `bg-[#fde703] border-[#fde703]`

---

### Phase 7 — Overlay Components (Modal, Offcanvas, Dropdown, Collapse)

**Step 7A. `modal.tsx`** — remove import and all Bootstrap class names; rewrite with Tailwind:
- `ModalTrigger`: use `buttonVariants({ variant: "default" })` from button.tsx instead of hardcoded `btn btn-primary`
- Backdrop: `fixed inset-0 bg-black/50 z-[1040]`
- Wrapper: `fixed inset-0 z-[1050] flex justify-center overflow-y-auto overflow-x-hidden p-4`; centered: `items-center`, non-centered: `items-start`
- Dialog container: `relative w-full max-w-[500px] mx-auto`
- Content box: `relative flex flex-col bg-white`
- `ModalHeader`: `flex items-center justify-between px-4 py-4`
- `ModalBody`: `px-4 py-4`
- `ModalFooter`: `flex flex-wrap items-center justify-end gap-2 px-4 py-3`
- `ModalTitle` (`<h4>`): `text-xl font-semibold text-black m-0`
- `ModalClose`: Phosphor `XIcon`, styled `bg-transparent border-0 p-1 text-black opacity-50 hover:opacity-100 cursor-pointer`

**Step 7B. `offcanvas.tsx`** — remove import; rewrite:
- Backdrop: `fixed inset-0 bg-black/50 z-[1040]`
- Panel: `fixed z-[1050] flex flex-col bg-white shadow-lg`; placement classes via mapping (`offcanvas-end` → `top-0 right-0 h-full w-[400px]`)
- Slide animation: add a CSS transition rule in `fhnw-components.css` for `[data-placement="end"]:not([data-open])` → `translateX(100%)` and `[data-placement="end"][data-open]` → `translateX(0)`. The component sets `data-open` and `data-placement` attributes.

**Step 7C. `dropdown.tsx`** — remove import and Bootstrap classes; rewrite:
- `DropdownMenuTrigger`: use `buttonVariants({ variant: "secondary" })` + append Phosphor `CaretDownIcon` icon
- `DropdownMenuContent` (`<ul>`): `absolute z-[1000] min-w-[10rem] bg-[#fde703] py-[10px] px-[5px] list-none m-0 shadow-none` (FHNW uses yellow dropdown menus)
- `DropdownMenuItem`: `block w-full px-4 py-[0.25rem] text-base text-black bg-transparent border-0 text-left cursor-pointer hover:bg-black/10 outline-none`
- `DropdownMenuLink`: same as item but `<a>` element, `no-underline`
- `DropdownMenuDivider`: `my-1 border-t border-black/15`
- `DropdownMenuHeader` (`<h6>`): `px-4 py-2 text-sm text-muted-foreground font-normal m-0`

**Step 7D. `collapse.tsx`** — remove import; replace:
- `CollapseContent` div: closed = `hidden`; open = `block`
- `CollapseTrigger`: use `buttonVariants({ variant: "default" })` instead of `btn btn-primary`

---

### Phase 8 — Tooltip, Popover (with arrow CSS in `fhnw-components.css`)

**Step 8A. `tooltip.tsx`** — remove import and Bootstrap classes:
- Tooltip div: `fixed z-[1080] bg-black text-white text-sm px-2 py-1 max-w-[200px]`
- Add `data-placement={placement}` attribute to the tooltip div
- Arrow: a small `<span>` element with class `fhnw-tooltip-arrow` — styled in `fhnw-components.css` as rotated square or CSS border-triangle
- Wrapper span: just `inline-flex`

**Step 8B. `popover.tsx`** — remove import and Bootstrap classes:
- Popover div: `fixed z-[1080] bg-white max-w-[276px] shadow-[0_0_40px_rgba(0,0,0,0.12)]`; add `data-placement` attribute
- `PopoverHeader` (`<h3>`): `px-4 py-2 bg-black text-white text-base font-semibold m-0`
- `PopoverBody`: `px-4 py-4 text-base text-foreground`
- Arrow span: `fhnw-popover-arrow` class + styled in `fhnw-components.css`

---

### Phase 9 — Progress, Spinner, Back-to-top

**Step 9A. `progressbar.tsx`** — remove import; rewrite:
- `Progress` container: `w-full overflow-hidden bg-[#f1f1ee] h-6`
- `ProgressBar` fill: `h-full flex items-center justify-center text-white text-xs font-medium bg-[#767573] transition-[width]`
- `striped` prop: adds `bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,...)] bg-[length:1rem_1rem]`
- `animated` prop: adds `animate-[progress-bar-stripes_1s_linear_infinite_reverse]` — the `@keyframes progress-bar-stripes` animation is defined in `fhnw-components.css`

**Step 9B. `loading-spinner.tsx`** — remove import; fix `p-7` → `p-[3rem]`; rewrite:
- Container: `flex justify-center items-center p-[3rem]`
- Spinner element: `inline-block size-8 rounded-full border-[0.25em] border-current border-r-transparent animate-spin align-middle` — Tailwind's built-in `animate-spin` is a drop-in for the Bootstrap spinner animation
- `variant="white"`: container gets `bg-black`; spinner gets `text-white`

**Step 9C. `back-to-top.tsx`** — remove import; replace empty `<a>` + Bootstrap CSS arrow with explicit Phosphor `ArrowUpIcon` inside:
- Add `<ArrowUpIcon className="size-5" />` as child
- Style the `<a>`: `fixed bottom-10 right-[2%] z-[5000] flex size-[50px] items-center justify-center rounded-full bg-black text-white transition-opacity duration-300`
- Visible state: `opacity-40 pointer-events-auto hover:opacity-100`
- Hidden state: `opacity-0 pointer-events-none`

---

### Phase 10 — Carousel

**Step 10A. `carousel.tsx`** — remove import; full Tailwind rewrite:
- Outer div: `relative overflow-hidden`
- Indicators container: `absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10 list-none m-0`; each button: `size-2 rounded-full bg-white/50 border-0 cursor-pointer`; active: `bg-white`
- Inner div: `relative`
- `CarouselItem` (when `fade=true`): Active: `opacity-100 relative`; Inactive: `opacity-0 absolute inset-0`; both: `transition-opacity duration-600`
- Control prev button: `absolute left-2 top-1/2 -translate-y-1/2 z-10 flex size-10 items-center justify-center bg-black/30 text-white hover:bg-black/50 cursor-pointer border-0 transition-colors` + Phosphor `CaretLeftIcon`
- Control next button: same with `right-2` + `CaretRightIcon`
- `CarouselCaption` div: `absolute bottom-0 inset-x-0 px-8 py-8 bg-gradient-to-t from-black/70 to-transparent text-white`

---

### Phase 11 — FHNW-Specific Components (Teaser, Testimonial, Icons)

**Step 11A. `teaser.tsx`** — remove import; fix `col-xs-12` → `col-12` (Tailwind: `w-full`); rewrite Bootstrap grid to Tailwind:
- Container: `relative flex flex-col bg-white mb-4 group overflow-hidden` (drop Bootstrap grid — columns are managed at the usage site)
- Image wrapper: `overflow-hidden`; Image: `w-full transition-transform duration-300 group-hover:scale-105`
- `small` subtitle: `block mb-2 text-sm text-[#767573] font-medium`
- `h2` title: `text-xl font-semibold text-black mb-2`
- Paragraph: `text-sm text-[#767573] m-0`
- After arrow: Replace CSS pseudo-element with Phosphor `ArrowRightIcon` at the bottom of card-body

**Step 11B. `testimonial.tsx`** — remove import; replace Bootstrap grid + custom `.quote`/`.author` classes with Tailwind:
- Container div: `flex flex-col md:flex-row gap-6 mt-8`
- Image column div: `w-full md:w-1/3 shrink-0`
- Text column div: `flex flex-col justify-center`
- Quote `<p>`: `text-xl italic text-foreground leading-relaxed` — the `«` and `»` quotes rendered directly in JSX text (not via CSS `content:`)
- Author `<p>`: `font-semibold text-black mt-2`

**Step 11C. `icons.tsx`** (special case — cannot be pure Tailwind):
- Create `registry/fhnw/ui/icons.css` — a new file containing ONLY the FHNW icon mask definitions extracted from `fhnw-bootstrap.css` (`.icon__linkedin--md`, `.social__icons`, etc.)
- In `icons.tsx`: replace `import "./fhnw-bootstrap.css"` with `import "./icons.css"`
- This component is now Bootstrap-free; it only depends on its own dedicated CSS file
- The `icons.json` registry item includes `icons.css` as a file dep alongside the component

---

### Phase 12 — Nav-Tabs (auto-fixed) & Site-Header (no change)

**Step 12A. `nav-tabs.tsx`** — re-exports tabs.tsx directly; once tabs.tsx is fixed in Phase 6B, this is automatically correct. No independent work needed.

**Step 12B. `site-header.tsx`** — already 100% pure Tailwind, no Bootstrap import. **No changes.**

---

### Phase 13 — Verify & Update Blocks

**Step 13A.** After all component rewrites are complete:
- `study-form.tsx` — verify Input, Textarea, Select, Checkbox, RadioGroup all render with correct Bootstrap-matched styling. `CardHeader className="bg-muted"` should still override the header bg correctly.
- `programme-showcase.tsx` — verify Card structure with new `card-body` 1rem padding; gradient `className` override on Card still works
- `campus-faq.tsx` — verify accordion yellow-highlight on open state, yellow tab underline on active tab, alert subtle-background colors

---

### Phase 14 — Docs Comparison Update

**Step 14A.** The `BootstrapPreview` iframe still loads `fhnw.min.css` — **unchanged**, it is the visual reference.

**Step 14B.** Update Docs.tsx Card example's `reactComponent` to match the now-Bootstrap-structure card (use `CardContent` alone for the simple example, no `CardHeader`).

**Step 14C.** Add a callout/note at the top of the Docs page: *"React components are Bootstrap-free — identical visual output, zero Bootstrap dependency."*

---

### Phase 15 — Docs & Playground Improvements

**Step 15A. `src/components/ComponentSidebar.tsx`** (new) — sticky left nav on lg+ screens, `IntersectionObserver` active-section highlighting, search filtering, 7 category groups, `Cmd/Ctrl+K` focus shortcut.

**Step 15B.** Update Docs.tsx layout — two-column: sidebar (w-64) + main content. Mobile: horizontal chip bar. Show component count dynamically.

**Step 15C. `src/components/CopyButton.tsx`** (new) — clipboard copy with 1.5s "Copied!" feedback, used for install commands and code panels.

**Step 15D. Code/Preview toggle** — "Preview | Code" tab switcher on each React panel; code panel shows syntax-highlighted JSX string via lazy-loaded highlight.js; CopyButton inside code panel.

**Step 15E. Component status badges** — `status: "stable" | "new" | "beta"` field per component config, shown as a `<Badge>` next to the heading.

**Step 15F. Category section dividers** — visual section separators in the main content area matching sidebar categories.

**Step 15G. `BootstrapPreview.tsx` improvements** — min-height 120px on iframe container; loading spinner while iframe loads; inject `padding: 1.5rem` into the iframe document.

**Step 15H. Fullscreen preview** — expand icon on each comparison card opening a modal showing the full side-by-side comparison at full width.

---

### Phase 16 — Interactive Prop Playground

**Step 16A. `src/components/ComponentPlayground.tsx`** (new) — collapsible accordion below supported components; Button playground (variant + size + label input), Badge playground (variant), Alert playground (variant + editable title/description), Card playground (toggle header/footer).

---

### Phase 17 — Home Page

**Step 17A.** Mini component showcase strip in hero (6-8 rendered components in grid).
**Step 17B.** Component gallery section below install instructions (grid of all component names with category chips, count badge, links to `/docs#id`).
**Step 17C.** Better Quick-Start terminal panel with CopyButton on each command.

---

### Relevant Files

Critical to rewrite (remove Bootstrap, add Tailwind):
- button.tsx — Phase 4A
- badge.tsx — Phase 4B
- alert.tsx — Phase 5A
- accordion.tsx — Phase 6A
- tabs.tsx — Phase 6B
- breadcrumb.tsx — Phase 6C
- pagination.tsx — Phase 6D
- modal.tsx — Phase 7A
- offcanvas.tsx — Phase 7B
- dropdown.tsx — Phase 7C
- collapse.tsx — Phase 7D
- tooltip.tsx — Phase 8A
- popover.tsx — Phase 8B
- progressbar.tsx — Phase 9A
- loading-spinner.tsx — Phase 9B
- back-to-top.tsx — Phase 9C
- carousel.tsx — Phase 10A
- teaser.tsx — Phase 11A
- testimonial.tsx — Phase 11B
- images.tsx — Phase 1B
- videos.tsx — Phase 1A
- tables.tsx — Phase 1C
- input.tsx — Phase 2A
- textarea.tsx — Phase 2B
- select.tsx — Phase 2C
- checkbox.tsx — Phase 2D
- radio-group.tsx — Phase 2E
- label.tsx — Phase 2F
- card.tsx — Phase 3A
- icons.tsx — Phase 11C

New files to create:
- `registry/fhnw/ui/fhnw-components.css` — keyframes + pseudo-element arrow CSS
- `registry/fhnw/ui/icons.css` — FHNW icon mask definitions (extracted from fhnw-bootstrap.css)
- `src/components/ComponentSidebar.tsx`
- `src/components/CopyButton.tsx`
- `src/components/ComponentPlayground.tsx`

Verify after changes:
- study-form.tsx
- programme-showcase.tsx
- campus-faq.tsx
- Docs.tsx
- index.css

---

### Verification

1. `grep -r "fhnw-bootstrap.css" registry/` → **zero results** (all imports removed)
2. `grep -r "import.*bootstrap" registry/` → only `icons.css` reference within `icons.tsx`
3. `pnpm dev` → `/docs` — side-by-side comparison: for **every** component, React panel visually matches Bootstrap iframe panel. Specific spot-checks:
   - **Button**: correct black primary, yellow secondary, transparent outline with black 1px border; hover states correct
   - **Badge**: all 8 variants match Bootstrap badge colors/sizes
   - **Alert**: each variant has the correct subtle background tint and correct text color, padding matches Bootstrap 1.5rem
   - **Accordion**: closed state = gray bg `#f1f1ee`, open state = FHNW yellow `#fef387`, icon rotates
   - **Tabs**: active tab has bottom yellow border `#fde703`, no outer box border
   - **Dropdown**: **yellow background** dropdown menu (FHNW-specific, must be preserved)
   - **Form controls**: gray background `#f7f7f5`, black focus border, correct blue shadow ring
   - **Checkbox**: dark fill with white checkmark on checked (not yellow fill)
   - **Radio**: dark fill circle with white dot
   - **Card**: correct Bootstrap card padding (1rem body), header/footer `#f8f9fa`-equivalent bg
   - **Spinner**: correct spin animation, correct size
   - **Carousel**: fade transition, correct chevron controls with Phosphor icons
   - **Tooltip/Popover**: arrow triangle correctly pointing toward the trigger
   - **Modal/Offcanvas**: backdrop, smooth transitions
4. `pnpm registry:build` → no errors, all 35 JSON files regenerated correctly
5. `pnpm build` → no TypeScript errors, clean dist
6. All three blocks render correctly after component changes
7. Docs sidebar, search, copy buttons, code panels all work
8. No `fhnw-bootstrap.css` shipped to consumers through any registry item JSON

---

### Decisions & Scope

- **`fhnw-bootstrap.css` stays in the repo** as a visual reference and for the `BootstrapPreview` iframe — NOT imported by any component after this work
- **`icons.css`** is the one allowed non-Tailwind CSS in component imports — it is a FHNW icon asset, not Bootstrap
- **`fhnw-components.css`** contains only FHNW-specific CSS not expressible in Tailwind — no Bootstrap, no external deps
- **Dropdown yellow background** (`#fde703`) is intentional FHNW branding — preserved
- **Checkbox/Radio checked color**: changes from yellow to black fill + white indicator (Bootstrap-faithful). This is a visual behavior change — confirm with stakeholders if yellow checked state was intentional
- **`nav-tabs.tsx`** is a re-export alias — auto-fixed when tabs.tsx is updated
- **Dark mode**: Out of scope (light-only per PLAN.md)
- **Blocks use Tailwind for their own layout only** (grid/flex) — this is correct and unchanged

**Further Considerations**

1. **Offcanvas slide animation**: Offcanvas needs a CSS transition between `translateX(100%)` and `translateX(0)`. Tailwind doesn't transition between arbitrary transform values unless the element is in the DOM both before and after the state change. *Option A:* Add `data-open` attribute and `transition-transform` + `translate-x-full`/`translate-x-0` Tailwind classes (recommended — avoids `fhnw-components.css` for this). *Option B:* CSS in `fhnw-components.css`. Recommend Option A since Tailwind v4 handles this well.

2. **Carousel animation without Bootstrap JS**: The current carousel correctly manages active index in React state. The fade transition approach (`opacity-0`/`opacity-100` + `absolute inset-0`) works well in Tailwind. If Bootstrap shows a cross-fade (both slides visible during transition with opacity), this needs careful absolute positioning setup — worth testing as a visual regression.

3. **Tooltip/Popover arrow complexity**: The CSS border-triangle trick for arrows uses pseudo-elements with zero-width/height borders. In Tailwind this can be done with `[&::before]:` variants or a rotated square approach. The `fhnw-components.css` approach is the cleanest for maintainability. Alternatively, use a small inline `<span>` with explicit rotation that avoids pseudo-elements entirely.