---
name: engineering-case-study
description: >-
  Turn a real piece of engineering work (a merged PR, a system you built, a migration) into a
  published engineering case study on the portfolio blog — in the style of the Spotify / Airbnb
  engineering blogs. Shows the author's engineering perspective and reasoning, includes real
  implementation details and honest metrics, and STRIPS ALL company/internal identifiers. Use when
  the user says "write a case study", "turn this PR into a blog post", "add an engineering post to
  my portfolio", "write up this migration/system", or similar.
allowed-tools: Read, Write, Edit, Bash, Grep, Glob, WebFetch, AskUserQuestion
---

# Engineering Case Study Writer

Turn something the user actually built into a portfolio blog post that reads like a top-tier
engineering blog (Spotify, Airbnb, Netflix, Stripe): a real problem, the reasoning behind the
solution, implementation details with genericized code, honest numbers, and takeaways other
engineers can steal.

The goal is to make **the author's engineering judgment** visible. A reader should finish thinking
"this person understands systems and makes good trade-offs" — not "this person shipped a feature."

**This skill lives inside the portfolio repo.** Work from the repo root (the directory containing
`app/` and `package.json`). Blog posts live at `app/blog/<slug>/page.mdx` and are registered in
`app/data.ts` (`BLOG_POSTS`).

---

## ⚠️ Rule 1 — No company / internal information. Ever.

This is a **public** portfolio. The post must be a pure *engineering* story with zero attributable
detail. Genericize everything before it hits the page:

| Don't publish | Publish instead |
|---|---|
| Employer / product / brand names | omit, or "a company", "the platform" |
| Internal repo names (e.g. `rocks-noob`, `fabbrica`) | "a Python monorepo", "the service" |
| Client / customer names & codenames | "a customer", "a large retailer" |
| Internal service/tool codenames | describe the *role*: "the config layer", "the scheduler" |
| CI hosts, container registries, S3 buckets, ARNs, account IDs | "our CI server", "our container registry" |
| Jira / Confluence / Slack links & channel names | omit, or "a CI/CD channel" |
| Ticket IDs, PR numbers, internal URLs | omit |

Concrete tech is fine and *encouraged* — GitHub Actions, Jenkins, PySpark, Docker, AWS services,
Spark, Airflow, Kafka, etc. Those are the substance. It's *identity* that gets stripped, not
technology.

**Before publishing, run the leak scan** (Step 6) and eyeball every hit. When in doubt, generalize.

## Rule 2 — Metrics must be real. Never invent numbers.

Hard figures (hours saved, latency, throughput, %) must come from the user or a source you can cite.
If they're not available, **ask** (Step 2). If the user wants a derived figure, compute it from
stated assumptions and **show the math inline** so it's honest and checkable. Never double-count
(e.g. if a per-run reduction already contains a cached-step saving, don't add the step saving again).
If no real numbers exist, keep the results section qualitative rather than fabricating.

## Rule 3 — First person, the author's voice.

The author is the engineer who did the work. Write as "I" (or "we" for team efforts, but the
*decisions* are the author's). `metadata.authors` = the user's name. This is their perspective on
display.

---

## House style (Spotify / Airbnb engineering blog)

- **Open with tension, not a summary.** Lead with the problem and *why it hurt* — the pain a reader
  recognizes. Not "This post describes X." More like "Every developer paid a tax on every push."
- **Narrative arc, not a changelog.** context → the problem → what was tried / the decision →
  how it actually works → results → what we learned. The reader should feel the *why* before the *how*.
- **Show the reasoning and the trade-offs.** State the alternative you rejected and why. Judgment is
  the product here. "We could have X, but Y" beats a list of features.
- **Show, don't tell.** Real (genericized) code, config, or a small ASCII diagram beats prose.
  A 10-line YAML/py snippet that illustrates the key idea is worth three paragraphs.
- **Be honest about limits.** Name the irreducible floor, the thing you didn't fix, the cost you
  accepted. (e.g. "an hour of this pipeline is real Spark execution — you can't parallelize away
  work that has to happen.") Honesty reads as expertise; hype reads as junior.
- **Confident and teaching, never salesy.** Explain so another engineer could apply it. No
  buzzword soup, no "revolutionary."
- **Tight prose.** Short paragraphs. Cut throat-clearing. Every sentence earns its place.
- **Takeaways are transferable.** End with lessons that generalize beyond this exact system, so the
  post is useful to someone on a different stack.

### Title patterns that work
- Concrete + specific: "Retiring 375 Lines of Jenkins: Migrating a Monorepo to GitHub Actions"
- Idea-first: "One Codebase, Many Bots: Designing a Multi-Tenant Slack Assistant Framework"
- Avoid: vague ("Improving our CI"), clickbait, or anything with a company/product name.

### Post structure (default)
1. **Hook + problem** — the pain, the stakes, one paragraph of context.
2. **The starting point** — what existed and why its shape hurt (bullet the structural problems).
3. **The redesign / solution** — the interesting part. Subsections per key decision, each with a
   genericized snippet and the reasoning. This is where implementation depth lives.
4. **Results** — a metrics table + the math (only if numbers are real). Include an honest
   "why it's still X / what we didn't fix" note.
5. **Takeaways** — 4–6 transferable lessons.
6. A one-line closer that lands the point.

A ready-to-fill skeleton is in [templates/CASE_STUDY.mdx](templates/CASE_STUDY.mdx).

---

## Workflow

### Step 1 — Gather the real material
Read the actual source so the details are true, not guessed:
- A PR: `gh pr view <n> --repo <owner>/<repo> --json title,body,files,additions,deletions,url`
  then `gh pr diff <n> --repo <owner>/<repo>` (or `git show <merge-sha>:<path>` for a local checkout).
- A system/repo: read the README, the entry points, the config schema, the CI files.
Extract: the motivation, the before/after, the 3–6 decisions worth explaining, real code/config to
genericize, and any candidate metrics. Prefer reading over asking for things you can find yourself.

### Step 2 — Lock the metrics (real numbers)
If the story has quantifiable wins, get the real figures from the user: before/after (duration,
latency), volume (runs/day, requests/s), team size, maintenance hours. Ask concisely for what's
missing. Compute weekly/annual figures and plan to show the math. If none are available, plan a
qualitative results section — don't invent.

### Step 3 — Title + slug
Pick a title in house style and a kebab-case `slug`. `uid` = `blog-<slug>`.

### Step 4 — Write `app/blog/<slug>/page.mdx`
- Start with an `export const metadata = { title, description, authors: [{ name: '<user>' }] }`.
- Then an `# H1` matching the title, and the structured body. Real, genericized snippets in fenced
  code blocks. (MDX: no `<html>/<head>` wrappers; the blog layout provides prose styling.)

### Step 5 — Register in `app/data.ts`
Add a `BLOG_POSTS` entry **at the top** (newest first): `{ title, description, link: '/blog/<slug>', uid }`.
Keep the `description` consistent with `metadata.description`.

### Step 6 — Genericization leak scan (MANDATORY)
From the portfolio repo, scan the new post and eyeball every hit:

```bash
grep -rniE "invent|inventanalytics|rocks|noob|fabbrica|jenkins\.euwest1|inventkubernetes|azurecr|pokedex|onboardians|atlassian|confluence|jenkins-cluster|#[a-z-]*-cicd|amazonaws|arn:aws|NTT|BSH" \
  app/blog/<slug>/page.mdx && echo ">>> REVIEW HITS ABOVE <<<" || echo "clean"
```
Extend the pattern with any project-specific names (client codenames, service names, hosts) you saw
in Step 1. A hit isn't automatically fatal — but you must consciously generalize or confirm it's a
generic technology term.

### Step 7 — Build & verify
```bash
npm install   # only if node_modules is missing
npm run build 2>&1 | grep -E "Compiled|<slug>|Failed to compile|Error:"
```
Confirm the route `/blog/<slug>` is generated. To let the user review visually, offer to run
`npm run dev` (background) and probe `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/blog/<slug>`.

### Step 8 — Commit (only when the user asks; push only when asked)
Small, focused, conventional-prefix commits (`feat:` for a new post). End the message with:
`Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
Keep unrelated changes in separate commits. On the default branch this repo's history is
direct-to-`main`; follow the user's lead.

---

## Pre-publish checklist
- [ ] Zero company/internal identifiers (leak scan clean or every hit justified).
- [ ] Every hard number is real or a shown, non-double-counted calculation.
- [ ] At least one genericized code/config snippet illustrating the core idea.
- [ ] At least one stated trade-off / rejected alternative.
- [ ] An honest "limits / what we didn't fix" note where relevant.
- [ ] Takeaways generalize beyond this exact system.
- [ ] `metadata` + `data.ts` entry present and consistent; `npm run build` passes.

## Anti-patterns (reject these)
- A feature changelog with no reasoning or trade-offs.
- Marketing tone, superlatives, or "revolutionary" anything.
- Invented or unattributed metrics; double-counted savings.
- Any company/product/client/repo/host name slipping through.
- Wall-to-wall prose with no code, diagram, or concrete example.
