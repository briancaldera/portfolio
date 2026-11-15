# AGENTS.md

Personal portfolio for Brian Caldera: Astro 5 + React 19 islands + Tailwind v3, deployed to Netlify (badge in README). No tests, no CI.

## Package manager: pnpm

- Use **pnpm**, not npm. Both lockfiles are tracked, but `pnpm-lock.yaml` is current and `node_modules` is pnpm-installed; `package-lock.json` is legacy and not maintained.
- `pnpm dev` (localhost:4321), `pnpm build`, `pnpm preview` — all verified working.

## pnpm supply-chain constraints (pnpm-workspace.yaml)

- `minimumReleaseAge: 20160` — installing a version published in the last **14 days** fails. If adding/updating a dependency errors with no obvious cause, pin an older version.
- `strictDepBuilds` + `onlyBuiltDependencies` — packages with install scripts (currently `esbuild`, `sharp`) must be allowlisted there or install fails.
- `trustPolicy: no-downgrade` blocks downgrading dependency trust.

## Commands without npm scripts

There is no `lint`/`format`/`check` script. Use:

- `pnpm exec eslint .` — flat config, only `recommended` rules.
- `pnpm exec prettier --write .` — plugins: `prettier-plugin-astro` + `prettier-plugin-tailwindcss` (Astro + Tailwind class sorting).
- `pnpm exec astro check` — **not set up**: prompts interactively to install `@astrojs/check` on first run. Add it as a devDependency before relying on typecheck.

## Structure

- Components follow atomic design: `src/components/atoms/`, `molecules/`, `organisms/`.
- Two separate layouts/sites:
  - Root site (`src/pages/index.astro`) → `BaseLayout.astro`.
  - "Tu Bolívar Hoy" sub-site (`src/pages/tubolivarhoy/*`) → `TuBolivarHoyLayout.astro` + `src/layouts/tu-bolivar-hoy.css`. That CSS file defines the shadcn-style HSL variables (`--primary`, `--card`, `--radius`, …) that `tailwind.config.ts` colors reference — keep the two in sync.
- Path alias `@/*` → `src/*`; TS extends `astro/tsconfigs/strict`.
- Tailwind is wired via the `@astrojs/tailwind` integration (v3, config in `tailwind.config.ts`), not the Vite plugin.

## Don't touch

- `public/ads.txt` and `public/app-ads.txt` (AdSense), and the `adsbygoogle` script tag in `BaseLayout.astro` — monetization, hand-managed.
