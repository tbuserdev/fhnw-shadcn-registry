# FHNW Base UI Registry on Vite

## Summary
- Replace the current Next.js registry template with a Vite React SPA that serves both the demo/docs homepage at `/` and static registry files at `/r/*.json` from one Cloudflare Pages deployment.
- Build the FHNW library on shadcn’s Base UI component model only. Do not use `@radix-ui/*` or `radix-ui` anywhere in the registry, demo app, or generated components.
- Recreate the FHNW Bootstrap look as a custom FHNW theme layer on top of shadcn Base UI patterns, using `fhnw-bootstrap-v5/css/fhnw.css` as the visual reference only.

## Key Changes
- App and hosting
  - Remove the Next app shell and replace it with a Vite SPA (`index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`).
  - Keep static registry output under `public/r` so `vite build` copies it into `dist/r` for Cloudflare Pages.
  - Root site stays lightweight: FHNW intro, install instructions, live previews, and direct links to registry JSON.
- shadcn/Base UI foundation
  - Reconfigure `components.json` for a Vite Base UI project, with `rsc: false` and a Base UI style baseline.
  - Use a Base UI style baseline that is closest to FHNW’s sharp geometry: `base-lyra`, then override tokens and component classes with FHNW styling.
  - Registry items must be authored against shadcn Base UI component patterns and APIs, not Radix wrappers.
- FHNW theme and registry
  - Add a foundational `style-fhnw` registry item that installs shared FHNW tokens and base CSS: colors, typography, borders, radii, focus states, spacing, and heading styles.
  - Publish a focused v1 component set under `registry/fhnw/*`: `button`, `input`, `textarea`, `select`, `checkbox`, `radio-group`, `card`, `alert`, `badge`, `tabs`, `accordion`, `site-header`.
  - Publish 2-3 FHNW demo blocks that depend on those primitives plus `style-fhnw`.
  - Remove the stock sample registry items and the current `new-york` sample content.
- Dependency policy
  - Allowed runtime dependencies: React, Base UI-related packages required by shadcn Base UI components, `class-variance-authority`, `clsx`, `tailwind-merge`, icons, and small utility packages.
  - Forbidden runtime dependencies: `@radix-ui/*`, `radix-ui`, Next.js-only packages, and Bootstrap JS.
  - Keep FHNW CSS as a reference source in the repo; do not ship the full Bootstrap stylesheet as a consumer dependency.

## Public Interfaces
- Registry namespace: `@fhnw`, served from `https://<domain>/r/{name}.json`.
- Consumer target: Vite/React/Tailwind v4 projects configured for shadcn Base UI.
- Default install flow:
  - `pnpm dlx shadcn@latest add @fhnw/style-fhnw`
  - `pnpm dlx shadcn@latest add @fhnw/button`
- Button/link guidance must follow Base UI semantics:
  - Use `Button` for real buttons.
  - Use `buttonVariants` on `<a>` for links styled like buttons, instead of Radix-style slotting patterns.

## Test Plan
- `pnpm registry:build` regenerates `public/r/*.json` with only FHNW Base UI items.
- `pnpm build` produces a static `dist` with the Vite app and registry JSON.
- Install `@fhnw/style-fhnw`, `@fhnw/button`, and one form block into a clean Vite + Tailwind v4 + shadcn Base UI fixture and verify there are no Radix imports.
- Verify the hosted app works with Cloudflare Pages static hosting and that `/r/*.json` is directly reachable.
- Visually compare the v1 components against FHNW CSS for typography, color, borders, spacing, hover/focus, and mobile layout.

## Assumptions
- “Base UI Version from shadcn” means using shadcn’s Base UI component implementations and conventions as the baseline for all authored registry items.
- This registry is Base UI-only in v1; dual Base UI/Radix variants are out of scope.
- Light theme only in v1.
- Cloudflare Pages build configuration remains:
  - Build command: `pnpm install --frozen-lockfile && pnpm registry:build && pnpm build`
  - Output directory: `dist`
