---
name: preflight
allowed-tools: Bash(pnpm lint:*), Bash(pnpm format:*), Bash(pnpm test:*), Bash(npx vitest:*), Bash(pnpm run:*), Bash(git status:*), Bash(git diff:*)
description: Run lint, format check, and tests before pushing.
applies_to: preflight, pre-flight, check, sanity check, before push
---

# Preflight Check

Run all checks before pushing to ensure code quality.

## Usage

```
/preflight
```

## Instructions

### 1. Show Current State

```bash
git status
git diff --stat
```

### 2. Run All Checks in Parallel

Run these three commands concurrently:
- `pnpm lint`
- `pnpm format:check`
- `pnpm test`

### 3. Report Results

Summarize with a clear pass/fail for each:
- Lint: ✅ / ❌
- Format: ✅ / ❌
- Tests: ✅ / ❌ (include count of passed/failed)

If any check fails, show the relevant errors and suggest fixes.

If all pass, confirm the branch is ready to push.
