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

Output directory: `dist`

## GitHub Pages

This repo includes a deployment workflow at [.github/workflows/deploy-pages.yml](/Users/timbuser/Documents/FHNW/fhnw-shadcn-registry/.github/workflows/deploy-pages.yml).

To publish it:

1. Push the repository to GitHub.
2. Open repository settings and go to Pages.
3. Set the source to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The workflow computes the correct Vite base path automatically for:

- `https://<user>.github.io/`
- `https://<user>.github.io/<repo>/`
