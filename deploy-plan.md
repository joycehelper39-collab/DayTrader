# DayTrader Deployment Plan

## Goal
Publish the Complete Day Trading Course site via GitHub Pages so marketing can start driving traffic immediately.

## Steps
1. **Audit repo & ignore artifacts** – add a `.gitignore` so `node_modules/`, `_site/`, and cache files don’t pollute commits.
2. **Create GitHub Actions workflow** – automate build (npm ci + npm run build) and deploy `_site/` to Pages.
3. **Commit + push** – initial site commit plus workflow commit to `origin/main`.
4. **Enable GitHub Pages** – call the Pages API to enable workflow-based deploys and confirm live URL.
5. **Verify deployment** – wait for Actions run to finish, then curl the published site to confirm 200 OK.
