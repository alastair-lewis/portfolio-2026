---
name: issue-to-branch
allowed-tools: Bash(gh issue view:*), Bash(git checkout:*), Bash(git branch:*), Bash(git pull:*), Bash(git status:*), Read(*), Grep(*)
description: Create a properly prefixed branch from a GitHub issue and get started on implementation.
applies_to: issue, branch, start issue, begin issue, work on issue
---

# Issue to Branch

Create a branch from a GitHub issue and prepare to start work.

## Usage

```
/issue-to-branch <issue_number>
```

## Instructions

### 1. Read the Issue

```bash
gh issue view <issue_number>
```

### 2. Determine Branch Prefix

Based on the issue labels and content:
- `bug` label or fix-related -> `fix/`
- `enhancement` or feature-related -> `feat/`
- `documentation` label -> `docs/`
- Maintenance/tooling -> `chore/`

### 3. Generate Branch Name

Create a short, descriptive kebab-case branch name:
- Format: `<prefix>/<short-description>`
- Example: `fix/education-test-dates`, `feat/add-contact-form`
- Keep it under 50 characters

### 4. Create the Branch

```bash
git checkout main
git pull
git checkout -b <branch_name>
```

### 5. Output

Summarize:
- The issue title and key requirements
- The branch name created
- Suggest an approach for implementation
- Ask the user if they'd like to proceed with implementation
