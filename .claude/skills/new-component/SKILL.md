---
name: new-component
allowed-tools: Bash(mkdir:*), Bash(ls:*), Write(*), Read(*), Edit(*), Glob(*), Grep(*)
description: Scaffold a new shared UI component with CSS module and test file.
applies_to: new component, scaffold component, add component, ui component
---

# New UI Component Scaffold

Scaffold a new shared UI primitive in `src/components/ui/`.

## Usage

```
/new-component <ComponentName>
```

## Instructions

### 1. Check Existing Patterns

Read an existing UI component for reference:
- `src/components/ui/GlassCard/GlassCard.tsx`
- `src/components/ui/GlassCard/GlassCard.module.css`
- `src/components/ui/GlassCard/tests/GlassCard.test.tsx`

### 2. Create the Files

**`src/components/ui/<ComponentName>/<ComponentName>.tsx`:**
- Export a named function component
- Accept `className` prop and merge with `classNames` utility
- Accept `children` and any component-specific props
- Use a TypeScript interface for props
- Import CSS module

**`src/components/ui/<ComponentName>/<ComponentName>.module.css`:**
- Base styles using design tokens from `src/styles/palette.css`
- Follow the glassmorphism aesthetic where appropriate

**`src/components/ui/<ComponentName>/tests/<ComponentName>.test.tsx`:**
- Use Vitest + React Testing Library
- Test: renders children
- Test: applies custom className
- Add component-specific tests

### 3. Output

After creating all files, list what was created and show a basic usage example.
