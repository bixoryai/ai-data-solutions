# AI Data Solutions – Agent Guide

## Stack & Structure
- Multi-project monorepo of Create React App (CRA) dashboards and presentations grouped by solution domain, served from a static portal (`index.html`).【F:README.md†L7-L170】
- Each dashboard/presentation ships with local CRA toolchain (`react-scripts`) while the main portal is a static build served via a lightweight HTTP server script.【F:financial-analytics/dashboard-demo/package.json†L18-L22】【F:start-portal-server-npm.bat†L2-L14】

## Entry Points & Key Packages
- **Portal:** `index.html` at the repo root. Serve locally with `npx http-server -p 3000` (Windows helper provided).【F:README.md†L135-L170】【F:start-portal-server-npm.bat†L2-L14】
- **Dashboards/Presentations:** Each solution folder (e.g., `customer-analytics/dashboard-demo`, `financial-analytics/presentation`) contains a CRA app with standard `src/index.tsx|tsx` entry points and package-level scripts.【F:README.md†L135-L190】【F:customer-analytics/dashboard-demo/package.json†L18-L22】【F:financial-analytics/dashboard-demo/package.json†L18-L22】

## Toolchain & Commands
- **Node version:** GitHub Pages CI pins Node.js 16 for builds; use the same locally.【F:.github/workflows/deploy-github-pages.yml†L25-L29】
- **Install dependencies:** From each CRA package directory, run `npm ci` to mirror CI before `npm start`/`npm test`/`npm run build`.【F:.github/workflows/deploy-github-pages.yml†L35-L40】
- **Local development:** `npm start` launches the CRA dev server for the targeted dashboard/presentation.【F:customer-analytics/dashboard-demo/package.json†L18-L22】
- **Build (type-check):** `npm run build` performs production builds with type checking; CI currently builds `industry-analytics/dashboard-demo`.【F:.github/workflows/deploy-github-pages.yml†L34-L40】【F:financial-analytics/dashboard-demo/package.json†L18-L22】
- **Tests:** `npm test` uses CRA’s Jest runner (watch mode by default). Use `npm test -- --watchAll=false` when automation requires non-interactive execution.【F:financial-analytics/dashboard-demo/package.json†L18-L22】
- **Linting:** No dedicated lint scripts are defined; rely on CRA’s built-in ESLint that runs during `npm start`/`npm run build`.【F:financial-analytics/dashboard-demo/package.json†L24-L28】
- **Migrations/Seeding:** Not applicable; dashboards are client-only demos.【F:README.md†L7-L170】

## Agent Tasking Tips
- Prefer the smallest, reviewable diffs that keep feature scope tight.
- Add or update automated tests before (or alongside) behavior changes whenever feasible.
- Avoid changing public APIs or shared utilities without accompanying tests and documentation.

## Troubleshooting
- CRA tests start in watch mode; add `--watchAll=false` for CI-style runs to prevent hangs.【F:financial-analytics/dashboard-demo/package.json†L18-L22】
- Builds assume the `homepage` field may be rewritten during deployment; watch for GitHub Pages base path issues if editing workflows.【F:.github/workflows/deploy-github-pages.yml†L34-L40】
- Static portal depends on `http-server`; install via the provided script if `npx http-server` is missing.【F:start-portal-server-npm.bat†L5-L14】

## Security & Secrets
- No secrets are committed; supply any required environment variables through local `.env` files (create as needed—none are tracked in git). Keep credentials out of source control and review `.gitignore` before adding new files.【F:README.md†L133-L170】
- Follow principle of least privilege when configuring deployment automations or API access.
