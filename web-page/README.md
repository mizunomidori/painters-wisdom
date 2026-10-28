# Wisdom Archive Web App

This directory contains the Next.js frontend for Wisdom Archive, which hosts
the Painters' Wisdom and Engineers' Wisdom collections. It uses the App
Router, Tailwind CSS, and static export. Article source files live in
`../contents/`.

## Getting Started

From this directory:

```bash
npm ci
npm run dev
```

Visit [http://localhost:3000/painters-wisdom](http://localhost:3000/painters-wisdom).
The base path is configured in `next.config.ts`, so the root URL
`http://localhost:3000/` intentionally returns 404.

## Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Build and statically export the site
npm run start    # Serve the production build
```

## Content

The app reads Markdown files recursively from `../contents/` during the build.
The directory determines which category an article appears in:

- `../contents/art/` for Art
- `../contents/tech/` for Tech

Category navigation and landing pages are generated from the category registry
in `constants/index.ts`. Each registry entry maps a category to its content
directory and brand, so add a directory and registry entry to introduce another
category.

Each article should provide front matter such as:

```yaml
---
title: Example article
date: 2024-11-01
tags:
  - paints
---
```

See the repository [README](../README.md) for the project overview and article
workflow.
