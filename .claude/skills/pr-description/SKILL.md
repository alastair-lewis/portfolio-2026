---
name: pr-description
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Bash(git status:*), Bash(git remote:*), Bash(gh pr edit:*), Bash(gh pr view:*), Bash(gh issue view:*), Grep(*), Read(*)
description: Generate a PR description from a GitHub PR link or branch name, using the project PR template.
applies_to: pull request, pr, pr description, github
---

# PR Description Generator

Generate a PR description from a GitHub PR link or branch name.

## Usage

```
/pr-description <PR_URL or branch_name>
```

## Instructions

When invoked, perform the following steps:

### 1. Get the Diff

**If given a PR URL:**
```bash
gh pr view <PR_NUMBER> --json headRefName,baseRefName
gh pr diff <PR_NUMBER>
```

**If given a branch name:**
```bash
git diff main...<branch_name>
```

If no argument is provided, use the current branch:
```bash
git branch --show-current
git diff main...HEAD
```

### 2. Analyze the Changes

Read the diff carefully and identify:
- What files were changed
- The purpose of the changes
- Any linked issues (look for issue references in commit messages or existing PR body)
- Before/after behavior differences

### 3. Generate the PR Description

Use this exact structure:

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
  - Add sub-bullets for each test if necessary

### 🧪 How to Test

1. Step-by-step instructions
2. Expected behavior at each step

### 💡 Why Make This Change?

<Explain the motivation and reasoning behind the changes>
```

### 4. Guidelines

- **TL;DR**: 1-2 sentences. Focus on WHAT changed and WHY.
- **Summary of Changes**: Group by file or logical component. Bold headers with file names.
- **How to Test**: Be specific with steps and expected outcomes.
- **Why Make This Change**: Explain the problem and why this approach was chosen.
- **Before/After tables**: Only include if there are visual or behavioral changes worth showing.
- **Tests section**: Only include if test files were modified.
- **Issue Links**: Look for patterns like `#1234` or issue URLs in commits/branch names.
- If UI changes are detected but no images available, add `<ADD BEFORE/AFTER SCREENSHOT>` placeholders.

### 5. Output

Present the generated PR description in a markdown code block so it can be easily copied.

If the PR already exists, ask if the user wants to update it directly using:
```bash
gh pr edit <PR_NUMBER> --body "..."
```
