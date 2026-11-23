@AGENTS.md

## Full send

Agents may run this repo unattended: prove a change, file the PR, babysit it and merge it.

### Commands

Use bun, never npm.

| Step      | Command                          |
| --------- | -------------------------------- |
| Install   | `bun install --frozen-lockfile`  |
| Typecheck | `bun run typecheck`              |
| Lint      | `bun run lint`                   |
| Test      | `bun run test`                   |
| Build     | `bun run build`                  |
| Dev       | `bun run dev`                    |

CI (`.github/workflows/ci.yml`, job `ci`) runs install, typecheck, lint, test and build on every pull request and every push to `main`. Run the same commands locally before pushing.

### Viewing the app

`bun run dev` serves the site at http://localhost:3000 (bound to `0.0.0.0`, so it is also reachable on the machine's LAN address). There is no login, database or seed data. Pages: `/`, `/contact`, plus `/robots.txt` and `/sitemap.xml`. The project and certificate cards come from `public/display.json`.

### What a merge to `main` does

The Vercel GitHub integration deploys every push to `main` to production. Pull requests get Vercel preview deployments.

Auto-deploying to production on merge is approved for full send. Mooshay105: "I trust the AI so whatever allows the AI to make changes without me". Agents may merge once the merge gate passes.

The `main` ruleset requires a pull request and a green `ci` check on an up-to-date branch, and blocks force-pushes and deletion. Merge with a merge commit (the method used by earlier PRs). Never use `--admin` or any other bypass.

### Never touch

- Secrets and env files: `.env*`, `.vercel/`, Vercel project settings and environment variables.
- GitHub repo settings, rulesets and branch protection, unless the task explicitly asks.
- The `main` branch directly: no direct pushes, no force-pushes.
- Personal details on the site (name, birth date in `src/utills/age.ts`, contact links) unless the task is about them.
- `LICENSE`.

There is no database, migrations or production data in this repo.
