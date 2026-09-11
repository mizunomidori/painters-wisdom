# Painters' Wisdom

Painters' Wisdom is a quiet, searchable archive of practical notes about
pigments, painting surfaces, materials, and studio practice.

Articles are Markdown files in `contents/`. The Next.js application in
`web-page/` reads them directly and exports the site as static HTML for GitHub
Pages.

## Project Layout

```text
painters-wisdom/
├── contents/        Markdown articles grouped by category
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

1. Add a `.md` file under `contents/columns/`, `contents/paints/`, or
	`contents/supports/`.
2. Include front matter with at least `title` and `date`. Add `tags` when
	appropriate.
3. Run `npm run build` from `web-page/` to verify the new route.

The article URL follows its path under `contents/`, for example:
`contents/paints/Example.md` becomes `/posts/paints/Example`.

## Deployment

The app uses Next.js static export and is configured for the GitHub Pages
base path `/painters-wisdom`.
