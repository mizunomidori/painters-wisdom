# Wisdom Archive

Wisdom Archive brings together two independently browsable collections:
Painters' Wisdom for art and studio practice, and Engineers' Wisdom for
software, technology, and engineering knowledge.

Articles are Markdown files in category directories under `contents/`. Their
directory determines the category. The Next.js application in
`web-page/` reads them directly and exports the site as static HTML for GitHub
Pages.

## Project Layout

```text
painters-wisdom/
├── contents/
│   ├── art/          Art Markdown articles
│   └── tech/         Technology Markdown articles
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

1. Add a Markdown file to `contents/art/` or `contents/tech/` to choose the
   collection. Filenames do not need category prefixes.
2. Include front matter with at least `title` and `date`. Add `tags` when
   appropriate.
3. Run `npm run build` from `web-page/` to verify the new route.

Browse collections at `/art` and `/tech`. Article URLs follow the category
directory, for example `contents/art/Example.md` becomes `/posts/art/Example`.

To add another collection, add its ID, display label, directory, brand, and
description to `web-page/constants/index.ts`. Homepage shelves, indexes,
navigation, and paginated routes are generated from that registry.

## Deployment

The app uses Next.js static export and is configured for the GitHub Pages
base path `/painters-wisdom`.
