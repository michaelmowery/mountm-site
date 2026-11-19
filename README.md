# mountm.tech

Portfolio site for Mount M Technologies, LLC. Static site built with [Astro](https://astro.build), published on GitHub Pages at https://mountm.tech.

## Add or edit a project

Each project is one Markdown file in `src/content/projects/`. The fields are checked in `src/content.config.ts`:

- `status`: `Live`, `Coming soon` or `Past work`
- `category`: `App`, `Game`, `Website` or `Client work`
- `featured: true` puts it on the home page
- `image`: a file in `public/img/work/`

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. `public/CNAME` sets the custom domain.
