# Portfolio 2026 - Claude Project Preferences

## Project Overview

Personal portfolio site for Alastair Lewis, Senior Software Engineer at Shopify. Built with React, TypeScript, and Vite.

## Tech Stack

- React 18 + TypeScript 5.5 + Vite 5
- CSS Modules with design tokens in `src/styles/palette.css`
- i18next for internationalization (English + French)
- pnpm as package manager
- Node 22+

## Project Structure

```
src/
├── components/       # Feature sections (About, Hero, Experience, etc.)
│   └── ui/           # Shared primitives (Button, GlassCard, Tag, etc.)
├── data/             # Content data (portfolio.ts)
├── i18n/             # i18next config + locale JSON files
├── styles/           # Global styles and design tokens
├── utils/            # Helper utilities
└── tests/            # Root test setup and App-level tests
```

## Conventions

### Code Style
- Prettier: single quotes, no bracket spacing, trailing commas
- ESLint flat config with TypeScript, React hooks, and JSX a11y plugins
- Run `pnpm lint` and `pnpm format:check` before committing

### Testing
- Vitest + React Testing Library + jest-dom
- Tests are co-located: `Component/tests/Component.test.tsx`
- Use role-based and accessible selectors (screen.getByRole, getByText)
- Run tests: `pnpm test`

### CSS
- CSS Modules (`.module.css`) per component
- Design tokens defined in `src/styles/palette.css` (spacing, colors, typography, radii)
- Dark theme with glassmorphism aesthetic
- Do not use inline styles or CSS-in-JS

### Git
- Branch prefixes: `feat/`, `fix/`, `chore/`, `docs/`
- Base branch: `main`
- Do not include `Co-Authored-By` lines in commits
- Keep commit messages concise and conventional-commit style

### Pull Requests

Use this structure for PR descriptions:

```markdown
### Closes: <ISSUE_LINK if found, otherwise remove this section>

### 📝 TL;DR
<One to two sentences summarizing what this PR does and why>

### 📋 Summary of Changes

**<File or Component name (no path)> (`file.ts`):**
- Change 1
- Change 2

**Tests (`tests.test.ts`):**
- What test coverage was added
  - Add sub-bullets for each test if nessesary

### 🧪 How to Test

1. Step-by-step instructions
2. Expected behavior at each step

### 💡 Why Make This Change?

<Explain the motivation and reasoning behind the changes>
```

Guidelines:
- **TL;DR**: 1-2 sentences. Focus on WHAT changed and WHY.
- **Summary of Changes**: Group by file or logical component. Bold headers with file names.
- **How to Test**: Be specific with steps and expected outcomes.
- **Why Make This Change**: Explain the problem and why this approach was chosen.
- **Before/After tables**: Only include if there are visual or behavioral changes.
- **Tests section**: Only include if test files were modified.

### i18n
- All user-facing strings should have entries in both `src/i18n/locales/en.json` and `src/i18n/locales/fr.json`
- Component copy lives in locale files; component TSX references translation keys

## Do Not

- Use em-dashes in copy
- Skip tests when making component changes
- Push directly to `main`
