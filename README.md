# Portfolio 2026

Hey! I'm **Alastair Lewis**, a Software Enginner based in Toronto. This is my personal portfolio site, a place to show off the projects I've worked on, my experience, and a bit about who I am.

## Public URL
The project is currently deployed on a Github page [here](https://alastair-lewis.github.io/portfolio-2026), and will be moved onto my personal domain in the near future.

## What's Inside

The site is a single-page portfolio with the following sections:

- **Hero**: A quick intro and call to action
- **About**: A bit about me and the tech I work with
- **Projects**: Highlights from my work at Shopify, Air Canada, and IBM
- **Experience**: Career timeline from IBM through to Shopify
- **Education**: Where I studied (Queen's University, B.Sc. Computing)
- **Contact**: Ways to get in touch

## Tech Stack

| Layer         | Tools                                      |
| ------------- | ------------------------------------------ |
| Framework     | React 18 + TypeScript 5.5                  |
| Build         | Vite 5                                     |
| Styling       | CSS Modules with custom design tokens      |
| i18n          | i18next (English + French)                 |
| Testing       | Vitest + React Testing Library + jest-dom  |
| Linting       | ESLint (flat config) + Prettier            |
| Package Mgr   | pnpm                                       |

## Getting Started

**Prerequisites:** Node 22+ and pnpm

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site will be available at `http://localhost:5173`.

## Scripts

| Command              | What it does                        |
| -------------------- | ----------------------------------- |
| `pnpm dev`           | Start the local dev server          |
| `pnpm build`         | Type-check and build for production |
| `pnpm preview`       | Preview the production build        |
| `pnpm test`          | Run the test suite                  |
| `pnpm test:watch`    | Run tests in watch mode             |
| `pnpm test:coverage` | Run tests with coverage report      |
| `pnpm lint`          | Lint the source code                |
| `pnpm format:check`  | Check formatting with Prettier      |

## Project Structure

```
src/
├── components/       # Feature sections (Hero, About, Projects, etc.)
│   └── ui/           # Shared primitives (Button, GlassCard, Tag, etc.)
├── data/             # Portfolio content data
├── i18n/             # i18next config + EN/FR locale files
├── styles/           # Global styles and design tokens
├── utils/            # Helper utilities
└── tests/            # Root test setup and App-level tests
```

Tests are co-located with their components (e.g. `Component/tests/Component.test.tsx`).

## Internationalization

The entire site is available in English and French. Click the language toggle in the nav to switch. All user-facing strings live in `src/i18n/locales/en.json` and `src/i18n/locales/fr.json`.

## Claude Code

This project includes a `.claude/` directory with project configuration for Claude Code. It defines coding conventions, project structure, and a set of custom skills that speed up common workflows:

| Skill              | What it does                                                  |
| ------------------ | ------------------------------------------------------------- |
| `/preflight`       | Runs lint, format check, and tests concurrently before a push |
| `/new-component`   | Scaffolds a UI primitive with CSS module and test file        |
| `/new-section`     | Scaffolds a portfolio section with component, CSS, tests, and i18n entries |
| `/issue-to-branch` | Creates a prefixed branch from a GitHub issue                 |
| `/create-issue`    | Turns a feature idea into a structured GitHub issue           |
| `/pr-description`  | Generates a PR description from the current diff              |

Project conventions (style rules, testing patterns, PR templates, etc.) live in `.claude/CLAUDE.md`.
