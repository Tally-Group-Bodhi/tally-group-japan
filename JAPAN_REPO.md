# Tally Group Japan site

This repository is **[tally-group-japan](https://github.com/Tally-Group-Bodhi/tally-group-japan)** — the Japan-only marketing site (root URLs, no region switcher).

- **Production:** [tally-group-japan.vercel.app](https://tally-group-japan.vercel.app)
- **Global source of JP pages:** [tallywebsite](https://github.com/Tally-Group-Bodhi/tallywebsite) (`src/app/jp/`)

## Sync from global TallyWebsite

When JP routes change in the main repo:

```bash
./scripts/sync-japan-from-global.sh /path/to/tallywebsite
```

Then review, commit, and push to `origin`.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` on Vercel (e.g. `https://www.tally.co.jp`). See `.env.example`.

## Remotes

| Remote | Repository |
|--------|------------|
| `origin` | tally-group-japan (this repo — push here) |
| `upstream` | tallywebsite (global site — pull JP content from here) |
