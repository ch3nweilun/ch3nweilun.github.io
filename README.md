# AI/Data Academic Homepage

A replaceable Astro template for a research-focused GitHub Pages homepage with an AI/Data/Network Lab visual style.

## What To Edit

Most placeholder content lives in:

```text
src/data/site.ts
```

Edit these exports to personalize the site:

- `profile`: name, role, affiliation, location, email, summary, keywords.
- `researchAreas`: research direction cards.
- `publications`: paper entries with PDF, Code, BibTeX, DOI, and arXiv slots.
- `projects`: research prototypes, systems, and demos.
- `cvGroups`: education, service, awards, and other CV blocks.
- `contactLinks`: scholarly profiles and contact links.
- `blogPosts`: optional research-note previews.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Build

```bash
npm run build
npm run preview
```

`npm run build` generates the static site in `dist/`.

## GitHub Pages Deployment

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main`; `.github/workflows/deploy.yml` builds and deploys the site.

## Custom Domain Or Repository Pages

If the site is deployed at `https://username.github.io/repository-name/`, add a `base` value in `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/repository-name/',
});
```

For `https://username.github.io/`, the current config is enough.
