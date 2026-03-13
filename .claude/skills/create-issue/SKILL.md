---
name: create-issue
allowed-tools: Bash(gh issue create:*), Bash(gh label list:*), Bash(git log:*), Bash(git branch:*), Bash(ls:*), Glob(*), Grep(*), Read(*)
description: Investigate a feature idea and create a concise GitHub issue with summary, details, files to change, and open questions.
applies_to: create issue, new issue, feature request, write issue, github issue
---

# Create Issue from Feature Description

Take a high-level feature description, investigate the codebase, and create a well-structured GitHub issue.

## Usage

```
/create-issue <feature description>
```

## Instructions

### 1. Investigate the Codebase

Based on the feature description, explore the codebase to understand:
- Which existing components, data files, and styles are relevant
- What patterns are already established for similar functionality
- What new files would need to be created
- What existing files would need modification
- Any dependencies or prerequisites

### 2. Draft the Issue

Use this exact structure:

```markdown
## 📌 Summary
<One to two sentences describing the feature and its purpose>

## 📝 Details
<Concise breakdown of what needs to happen. Use bullet points. Include specifics like component names, data structures, and behavioral expectations. Keep it actionable.>

## 📂 Files to Add/Modify

**New files:**
- `path/to/new/file.tsx` - <brief purpose>

**Modified files:**
- `path/to/existing/file.tsx` - <what changes>

## ❓ Open Questions
<List any ambiguities, decisions that need input, or unknowns. Remove this section entirely if there are none.>
```

### 3. Guidelines

- Keep it concise. Each section should be scannable in seconds.
- Be specific about file paths and component names.
- In Details, focus on what needs to happen, not how to implement it.
- Only include Open Questions if there are genuine ambiguities. Don't pad it.
- Apply appropriate labels based on the feature type (bug, enhancement, etc.).

### 4. Create the Issue

Present the draft to the user for review. Once approved, create it:
```bash
gh issue create --title "<concise title>" --body "..." --label "<label>"
```

Return the issue URL when done.
