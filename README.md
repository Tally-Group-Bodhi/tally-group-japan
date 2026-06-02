# Tally Group — Japan marketing site

Japan-only Next.js site: Japanese homepage at `/`, clean URLs (no `/jp` prefix), no region switcher.

Content pages live under [`src/app/(marketing)/`](src/app/(marketing)/). When updating from the global TallyWebsite repo, sync from `src/app/jp/` — see [JAPAN_REPO.md](JAPAN_REPO.md).

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the Japan production domain (e.g. `https://www.tally.co.jp`), then `npm run build`.

## Sync from global repo

```bash
./scripts/sync-japan-from-global.sh /path/to/TallyWebsite
```
