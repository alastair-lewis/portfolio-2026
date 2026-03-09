# Alastair Lewis -- Portfolio 2026

Personal portfolio site built with React 18, TypeScript, and Vite 5. Features a coral-reef glass-morphism aesthetic.

## Stack

| Concern | Choice |
|---|---|
| Bundler | Vite 5 |
| UI | React 18 + TypeScript |
| Styles | CSS Modules + `palette.css` design tokens |
| Deploy | GitHub Actions to GitHub Pages |
| Package manager | pnpm |
| Linting | ESLint v9 flat config |
| Formatting | Prettier 3 |
| Testing | Vitest + React Testing Library |

## Getting started

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:5173
pnpm dev

# Type-check + build for production
pnpm build

# Preview the production build
pnpm preview
```

## Code quality

```bash
# Lint
pnpm lint

# Auto-fix lint issues
pnpm lint:fix

# Format all src files
pnpm format

# Check formatting without writing
pnpm format:check

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## Project structure

```
src/
  components/
    ui/           # Atomic primitives (Button, GlassCard, Tag, SectionHeader, LanguageToggle)
    BackgroundFX/ # Animated blob + bubble background
    Nav/          # Fixed pill navigation
    Hero/         # Landing section
    Projects/     # Concept project cards
    Experience/   # Vertical timeline
    Education/    # Two-column grid
    About/        # Bio + stack
    Contact/      # Links
    Footer/       # Copyright
  styles/
    palette.css   # All CSS custom properties + global reset
  data/
    types.ts      # TypeScript interfaces
    portfolio.ts  # Static content (experience, projects, education)
  utils/
    classNames.ts # Class name composition utility
  tests/
    setup.ts      # Vitest + jest-dom setup
```

## Updating content

All site content lives in `src/data/portfolio.ts`. Update the `projects`, `experience`, and `education` arrays there. TypeScript will catch any structural issues at build time.

## Deploying to GitHub Pages

1. In your GitHub repository settings, go to **Pages** and set the source to **GitHub Actions**.
2. Push to `main` -- the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
3. The site will be live at `https://alastair-lewis.github.io/portfolio-2026/`.
