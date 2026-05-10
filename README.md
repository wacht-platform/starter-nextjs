# Wacht Starter · Next.js

A minimal Next.js 16 app with [Wacht](https://wacht.dev) authentication wired in.

## What's included

- `middleware.ts` — `wachtMiddleware` with `/account(.*)` protected
- `app/layout.tsx` — `DeploymentProvider` + `DeploymentInitialized`
- `app/page.tsx` — `SignedIn` / `SignedOut` controls, hosted sign-in
- `app/account/page.tsx` — server component reading auth via `auth(await headers())`
- `app/api/me/route.ts` — route handler using `requireAuth()`

## Quick start

```bash
pnpm install
cp .env.local.example .env.local   # fill in your Wacht keys
pnpm dev
```

Open http://localhost:3000 and click **Sign in** to run through the hosted flow.

## Wacht Bench

This starter is bootstrapped via the `wacht` CLI:

```bash
wacht init --starter nextjs
```

Run `wacht init` inside this directory afterwards to add `.wacht/bench.json`, `AGENTS.md`, and the bootstrap guide for editor agents.

## Docs

- [Quickstart](https://wacht.dev/docs/sdks/nextjs/quickstart)
- [Middleware](https://wacht.dev/docs/sdks/nextjs/middleware)
- [Server-side auth](https://wacht.dev/docs/sdks/nextjs/server-side)
