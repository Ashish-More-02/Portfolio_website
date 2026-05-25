# Portfolio — Ashish More

Personal portfolio site for **Ashish More**, a Full Stack Software Engineer. Built as a single-page React app with a clean, theme-aware design and a single source of truth for content.

Live sections: Hero, About, Skills, Experience, Projects, Resume, Contact.

## Tech stack

- **React 19** + **Vite 8** — UI and dev/build tooling
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — styling
- **Fontsource** — Inter Variable + JetBrains Mono, self-hosted
- **ESLint 10** — with `react-hooks` and `react-refresh` plugins

No router, no backend — everything is a section on one page.

## Getting started

```bash
# install
npm install

# run dev server (http://localhost:5173)
npm run dev

# production build → dist/
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

Requires Node 20+ (Vite 8 requirement).

## Project structure

```
.
├── index.html              # entry HTML + meta tags
├── public/
│   ├── favicon.svg
│   ├── icons.svg           # sprite of inline SVG icons
│   └── resume-06.pdf       # served at /resume-06.pdf
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # composes the page sections
│   ├── index.css           # Tailwind + globals
│   ├── App.css
│   ├── components/         # Navbar, Hero, About, Skills, Experience,
│   │                       # Projects, Resume, Contact, Footer, Icon
│   ├── data/portfolio.js   # all content lives here
│   ├── hooks/useTheme.js   # light/dark theme toggle + persistence
│   └── assets/
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Editing content

All copy — profile info, stats, skills, experience, projects, education — lives in [src/data/portfolio.js](src/data/portfolio.js). Update that file to change what the site displays; you should not need to touch component JSX for normal content edits.

Key exports:

- `profile` — name, title, tagline, email, phone, location, social links, `resumeUrl`
- `stats` — small metric cards on the hero / about section
- `skillGroups` — grouped skill chips
- `experiences` — work history with highlight bullets
- `featuredProjects` — project cards with stack + link
- `education` — degrees / schools

To swap the resume, drop a new PDF into [public/](public/) and update `profile.resumeUrl`.

## Theming

Light/dark mode is handled by [src/hooks/useTheme.js](src/hooks/useTheme.js). The toggle lives in the navbar and the choice is persisted to `localStorage`.

## Deployment

The build output is a fully static site in `dist/`. Deploy it to any static host:

- **Vercel / Netlify** — import the repo, framework preset “Vite”, build command `npm run build`, publish directory `dist`
- **GitHub Pages** — push `dist/` to the `gh-pages` branch, or use an action
- **Cloudflare Pages / S3 + CloudFront** — upload the contents of `dist/`

No environment variables or runtime config are required.

## License

Personal project — content (copy, resume, project descriptions) is © Ashish More. The scaffolding code is free to reference; please don't redeploy the site as-is under your own name.
