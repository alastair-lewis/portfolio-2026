---
name: new-section
allowed-tools: Bash(mkdir:*), Bash(ls:*), Write(*), Read(*), Edit(*), Glob(*), Grep(*)
description: Scaffold a new portfolio section with component, CSS module, test file, and i18n entries.
applies_to: new section, scaffold section, add section
---

# New Section Scaffold

Scaffold a new portfolio section following existing project conventions.

## Usage

```
/new-section <SectionName>
```

## Instructions

### 1. Check Existing Patterns

Read an existing section for reference:
- `src/components/About/About.tsx`
- `src/components/About/About.module.css`
- `src/components/About/tests/About.test.tsx`
- `src/i18n/locales/en.json`
- `src/i18n/locales/fr.json`

### 2. Create the Files

Create the following files using the conventions from existing sections:

**`src/components/<SectionName>/<SectionName>.tsx`:**
- Import `SectionHeader` and `GlassCard` from `../ui/`
- Import CSS module
- Export a named function component
- Use `<section id="<lowercase-name>">` with `aria-labelledby`
- Wrap content in `.inner` div with max-width
- Use `SectionHeader` with `label`, `title`, and `id` props

**`src/components/<SectionName>/<SectionName>.module.css`:**
- Include `.section` with padding and z-index
- Include `.inner` with max-width and margin auto
- Follow existing token usage from `src/styles/palette.css`

**`src/components/<SectionName>/tests/<SectionName>.test.tsx`:**
- Use Vitest + React Testing Library
- Test: renders the section heading
- Test: renders the section inside the correct id element
- Add any section-specific tests

**i18n entries:**
- Add a new key block in `src/i18n/locales/en.json` with `label` and `title`
- Add matching French translations in `src/i18n/locales/fr.json`

### 3. Output

After creating all files, list what was created and remind the user to:
- Add the component to `src/App.tsx`
- Fill in the actual content and translations
