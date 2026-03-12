# FHNW Base UI Registry

FHNW component registry for shadcn Base UI projects.

## What it contains

- A Vite React SPA for the registry homepage and live previews
- Static registry JSON under `public/r`
- FHNW-themed Base UI primitives and installable demo blocks
- FHNW Bootstrap v5 assets kept in-repo as a visual reference only

## Development

```bash
pnpm install
pnpm registry:build
pnpm dev
```

## Production build

```bash
pnpm registry:build
pnpm build
```

Cloudflare Pages output directory: `dist`
