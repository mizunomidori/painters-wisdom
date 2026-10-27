# Painters' Wisdom

Painters' Wisdom is a quiet, searchable archive of practical notes about
pigments, painting surfaces, materials, and studio practice.

Articles are Markdown files in `art_contents/` and `tech_contents/`; their
directory determines the category. The Next.js application in
`web-page/` reads them directly and exports the site as static HTML for GitHub
Pages.

## Project Layout

```text
painters-wisdom/
├── art_contents/    Art Markdown articles
├── tech_contents/   Tech Markdown articles
├── web-page/        Next.js application
└── README.md
```

## Local Development

```bash
cd web-page
npm ci
npm run dev
```

Open [http://localhost:3000/painters-wisdom](http://localhost:3000/painters-wisdom).
The `/painters-wisdom` path is required because it matches the GitHub Pages
deployment base path.

## Commands

Run these from `web-page/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check the application with ESLint |
| `npm run build` | Build and statically export the site |
| `npm run start` | Serve a production build locally |

## Adding Articles

1. Add an unprefixed `.md` file to `art_contents/` or `tech_contents/` to
   choose the collection.
2. Include front matter with at least `title` and `date`. Add `tags` when
   appropriate.
3. Run `npm run build` from `web-page/` to verify the new route.

Browse collections at `/art` and `/tech`. Article URLs follow the content
directory, for example `art_contents/Example.md` becomes
`/posts/art_contents/Example`.

To add another collection, add its ID, display label, content directory, and
description to `web-page/constants/index.ts`. The collection landing page,
navigation, and paginated routes are generated from that registry.

## Deployment

The app uses Next.js static export and is configured for the GitHub Pages
base path `/painters-wisdom`.
