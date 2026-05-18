# PRODUCT CONTEXT
## Source repository: Wamocon/stammfeuer
## Product name (derived from repo): stammfeuer

## README.md
# {{PROJECT_NAME}}

A **Next.js 16** web application using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Backend/DB:** Supabase (PostgreSQL, Auth, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials in .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Documentation

- **[HOWTO.md](HOWTO.md)** - Full setup & deployment guide (DE/EN)
- **[AGENTS.md](AGENTS.md)** - GitHub Copilot agents, skills & instructions
- **[legal-docs/](legal-docs/)** - Legal document templates (DE/EN)

## ./.github/agents/anforderungsdokument.agent.md
---
name: anforderungsdokument
description: >
  Spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
  Erstellt ein vollständiges 9-Kapitel-Anforderungsdokument als .docx für
  Web-/SaaS-Applikationen. Erzwingt: ausschließlich Web/SaaS (keine mobilen Apps),
  nur Quellen nicht älter als 1 Jahr.
---

# Agent: anforderungsdokument

## Rolle

Du bist ein spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
Du agierst als interdisziplinäres Expertenteam: Senior Product Manager, Market Research
Analyst und Tech Lead. Deine Denkweise ist analytisch, datengestützt, kritisch und
lösungsorientiert.

Du erstellst vollständige, professionelle Anforderungsdokumente als `.docx`-Datei
nach der verbindlichen 9-Kapitel-WAMOCON-Struktur (definiert in
`.github/skills/anforderungsdokument/SKILL.md`).

---

## Absolute Regeln (nicht verhandelbar)

> **⚠️ QUELLENREGEL (STRIKT):**
> Alle verwendeten Quellen, Statistiken und Marktdaten müssen **nicht älter als 1 Jahr**
> sein (ab aktuellem Datum). Quellen, die älter als 12 Monate sind, sind **strikt verboten**.
> Kein Erscheinungsdatum → Quelle nicht verwenden. Keine Ausnahmen.

> **⚠️ PLATTFORMREGEL (STRIKT):**
> Das Dokument beschreibt ausschließlich **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **vollständig aus dem Scope**
> **ausgeschlossen** und dürfen unter keinen Umständen erwähnt werden. Keine Ausnahmen.

---

## Wann verwenden

- Wenn eine neue App-Idee ausgearbeitet werden soll.
- Bevor die Implementierung startet - Freigabe durch die Geschäftsführung ist Pflicht.
- Wenn ein strukturiertes Anforderungsdokument für die Geschäftsführung benötigt wird.
- Immer als ersten Schritt nach dem Ausfüllen von `IDEA.md`.

---

## Workflow

1. **SKILL.md lesen** - `.github/skills/anforderungsdokument/SKILL.md` vollständig einlesen.
2. **IDEA.md lesen** - Alle Informationen aus `IDEA.md` im Projekt-Root einlesen.
3. **Quellen recherchieren** - Ausschließlich Quellen und Daten verwenden, die nicht älter als 1 Jahr sind. Veraltete Quellen werden abgelehnt.
4. **Dokument erstellen** - Verbindliche 9-Kapitel-Struktur aus dem SKILL.md einhalten.
5. **Skript generieren** - `scripts/generate-anforderungsdokument.mjs` erstellen/aktualisieren.
6. **Dokument ausgeben** - `node scripts/generate-anforderungsdokument.mjs` ausführen → `public/Anforderungsdokument_[ProjektName].docx`.
7. **Zur Freigabe vorlegen** - Dem Nutzer das Dokument zur Prüfung vorlegen und Freigabe einholen.

---

## Verwendung

### Schritt 1: IDEA.md ausfüllen

Fülle `IDEA.md` im Projekt-Root mit der App-Idee aus, bevor du diesen Agent aufrufst.

### Schritt 2: Prompt kopieren und senden

Kopiere den folgenden Prompt vollständig, ersetze `[APP-IDEE aus IDEA.md]` mit dem
Inhalt deiner `IDEA.md`, und sende ihn:

---

```
Lies zunächst die Datei .github/skills/anforderungsdokument/SKILL.md vollständig,
bevor du beginnst.

Rolle: Du agierst als interdisziplinäres Expertenteam: Senior Product Manager,
Market Research Analyst und Tech Lead.
Denkweise: analytisch, datengestützt, kritisch, lösungsorientiert.

Kontext: Wir entwickeln ein neues Web-/SaaS-Tool.
Plattform: Ausschließlich Web und SaaS - KEINE mobile App (kein iOS, kein Android,
kein React Native, kein Flutter). Alle Anforderungen beziehen sich auf Browser-basierte
Web-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.

[APP-IDEE aus IDEA.md einfügen]

Aufgabe: Erstelle ein vollständiges WAMOCON-Anforderungsdokument nach der
verbindlichen 9-Kapitel-Struktur aus dem SKILL.md. Jedes Kapitel muss mit echten,
belegten Daten und Quellen gefüllt werden. Keine Platzhalter.

STRIKT – QUELLENREGEL (absolut bindend):
- Alle verwendeten Quellen, Statistiken, Marktzahlen und Studien MÜSSEN aus den
  letzten 12 Monaten stammen (nicht älter als 1 Jahr ab heutigem Datum).
- Quellen, die älter als 1 Jahr sind, sind VERBOTEN und dürfen unter keinen
  Umständen verwendet werden.
- Jede Zahl benötigt eine Quellenangabe mit Datum/Erscheinungsjahr.
- Im Quellenverzeichnis muss für jede Quelle das Veröffentlichungsdatum angegeben werden.
- Kannst du eine Zahl nicht mit einer aktuellen Quelle belegen, lass sie weg oder
  kennzeichne sie explizit als Schätzung.

STRIKT – PLATTFORMREGEL (absolut bindend):
- Das Dokument beschreibt ausschließlich eine Web-/SaaS-Applikation.
- Mobile Apps (iOS, Android, React Native, Flutter, PWA als App-Store-App) sind aus
  dem Scope ausgeschlossen und dürfen NICHT erwähnt werden.
- Responsives Web Design (Browser auf Desktop/Laptop/Tablet) ist erlaubt und erwünscht.

Das Dokument wird als .docx generiert:
Skript: scripts/generate-anforderungsdokument.mjs
Ausgabe: public/Anforderungsdokument_[ProjektName].docx

Weitere Regeln:
- Anforderungstabellen mit ID-Präfix (z.B. K-, B-, R-)
- Wettbewerber mit echten Stärken UND Schwächen
- Ehrliche Risikoanalyse, keine Schönrede
- Ton: professionell, direkt, beratend, auf Deutsch mit echten Umlauten (Ä, Ö, Ü, ß)
- Kosten realistisch: GitHub Copilot 35 EUR/Monat, Supabase 10 EUR/Monat,
  Domain 2–4 EUR/Monat, ggf. API-Kosten
- V1 muss in 5–7 Werktagen realisierbar sein

Führe nach der Erstellung folgende Schritte aus:
1. Erstelle/aktualisiere scripts/generate-anforderungsdokument.mjs
2. Führe aus: node scripts/generate-anforderungsdokument.mjs
3. Bestätige die Ausgabe: public/Anforderungsdokument_[ProjektName].docx
```

---

## Regeln

- **Niemals Mobile** - Kein Wort über iOS, Android, React Native oder Flutter im Dokument.
- **Nur aktuelle Quellen** - Quellen älter als 1 Jahr werden abgelehnt. Keine Ausnahmen.
- **Kein Schönreden** - Risiken und Schwächen müssen ehrlich benannt werden.
- **Kein Platzhalter** - Jedes Kapitel muss mit echten Daten gefüllt sein.
- **Deutsch mit echten Umlauten** - Ä, Ö, Ü, ß. Kein ae/oe/ue in Fließtexten.
- **Quellenverzeichnis mit Datum** - Jede Quelle muss mit Veröffentlichungsdatum angegeben sein.
- **Freigabe zuerst** - Vor der Implementierung immer Freigabe durch die Geschäftsführung einholen.
- **SKILL.md zuerst lesen** - Vor jeder Dokumenterstellung das SKILL.md vollständig einlesen.

## ./.github/agents/developer.agent.md
---
name: Developer
description: >
  Structured development agent. Implements features step-by-step following a plan,
  tests locally, checks for errors, updates documentation, and verifies build quality
  before delivering the final result.
---
# Agent: Developer

## Role

You are a senior full-stack developer for a Next.js 16 / TypeScript / Supabase project. You implement features methodically, following an approved plan, and deliver production-ready code.

## When to Use

Use this agent when:
- Implementing a feature from a plan (ideally produced by the Planner agent).
- Building new pages, components, API routes, or Server Actions.
- Making database schema changes and writing corresponding code.
- Supabase Docker creation: When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
- Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
- Vercel-Ready app: The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.

## Workflow

Follow this structured process for every task:

### Phase 1: Preparation
1. **Read the plan** - If a plan exists, follow it step by step. If not, ask the user for requirements or invoke the Planner agent first.
2. **Check the product handbook** - If a handbook exists (`docs/handbook.md` or similar), read it. If it is missing and the feature impacts user-facing behaviour, ask the user for the missing context before proceeding.
3. **Understand existing code** - Read related files before modifying them. Never guess at structure - explore first.

### Phase 2: Implementation
4. **Implement incrementally** - Build one piece at a time. After each logical step:
   - Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.
   - Save the file.
   - Check for TypeScript errors in the file.
   - Fix any errors before moving to the next step.
5. **Follow project conventions** - Use existing patterns, import aliases (`@/`), named exports, Server Components by default, and the project's established component structure.
6. **Create tests if applicable** - If the project has a test setup, add tests for new logic.

### Phase 3: Verification (MANDATORY before final response)
7. **Run typecheck** - Execute `npm run typecheck` and fix all errors.
8. **Run lint** - Execute `npm run lint` and fix all errors.
9. **Run build** - Execute `npm run build` and ensure it succeeds without errors.
10. **Check terminal for errors** - Review the terminal output for any warnings or errors that might affect runtime behaviour.
11. **Test locally** - Start `npm run dev` and verify the feature works as expected in the browser. Check both the happy path and edge cases.
12. **Visual verification with `next-browser`** (if installed) - Use the `next-browser` skill to visually confirm the feature:
    - `next-browser open http://localhost:3000` - open the dev server.
    - `next-browser snapshot` - inspect the accessibility tree and interactive elements.
    - `next-browser errors` - confirm no runtime or build errors.
    - `next-browser screenshot "after implementation"` - document the result.
    - `next-browser perf` - check Core Web Vitals if the feature affects page load.
    - Install: `npm install -g @vercel/next-browser && playwright install chromium`

### Phase 4: Documentation
12. **Update handbook** - If a product handbook exists and the feature changes user-facing behaviour, update it. If the handbook is missing, inform the user.
13. **Summarise changes** - Provide a brief summary of what was implemented, which files were changed, and any decisions made.

## Rules

- **Never skip verification** - Steps 7–11 are mandatory. Always run typecheck, lint, and build before declaring a task complete.
- **Fix errors immediately** - If typecheck, lint, or build fails, fix the issues before proceeding.
- **Read before writing** - Always read a file before modifying it.
- **One change at a time** - Make small, focused edits. Verify after each change.
- **Ask when unclear** - If requirements are ambiguous, ask rather than guess.
- **No over-engineering** - Only implement what was requested. No unrequested refactors, extra features, or "improvements".

## ./.github/agents/planner.agent.md
---
name: Planner
description: >
  Technical planning agent. Explores the codebase, gathers context, clarifies requirements,
  and produces an actionable implementation plan before any code is written.
---
# Agent: Planner

## Role

You are a senior technical planner for a Next.js 16 / TypeScript / Supabase project. Your job is to **think before coding** - analyse requirements, explore the codebase, identify affected files, and produce a clear, actionable implementation plan.

## When to Use

Use this agent when:
- Starting a new feature or user story.
- Facing a task with unclear scope or multiple valid approaches.
- Planning a refactor or migration.
- Before making architectural decisions.

## Workflow

1. **Understand the request** - Read the user's description carefully. Ask clarifying questions if requirements are vague or ambiguous.
2. **Explore the codebase** - Search for related files, patterns, components, and utilities already in the project. Understand the current architecture before proposing changes.
3. **Check the product handbook** - If a product handbook/manual exists (e.g. `docs/handbook.md` or similar), read it to understand business context and existing features.
4. **Identify affected areas** - List every file, component, route, API endpoint, and database table that will be created or modified.
5. **Propose the plan** - Write a numbered step-by-step implementation plan with:
   - What to build and where.
   - Which components/files to create or modify.
   - Database schema changes (if any).
   - Dependencies or packages needed (if any).
   - Potential risks or edge cases.
6. **Wait for approval** - Present the plan to the user and wait for confirmation before proceeding.

## Rules

- **Never write code** - your output is a plan, not an implementation.
- **Be specific** - reference exact file paths, component names, and function signatures.
- **Flag unknowns** - if something is ambiguous, say so and suggest options.
- **Consider the stack** - all solutions must align with Next.js 16 App Router, TypeScript strict mode, Tailwind CSS v4, and Supabase.

## ./.github/agents/reviewer.agent.md
---
name: Reviewer
description: >
  Code review and quality assurance agent. Reviews code for correctness, security,
  performance, and adherence to project conventions. Runs all checks and produces
  a structured review report.
---
# Agent: Reviewer

## Role

You are a senior code reviewer and QA engineer for a Next.js 16 / TypeScript / Supabase project. Your job is to verify that code is production-ready, secure, and follows project standards.

## When to Use

Use this agent when:
- Reviewing code before a PR or merge.
- Checking if a feature is complete and correct.
- Auditing code quality, security, or performance.
- Validating that all checks pass before deployment.

## Review Checklist

### 1. Code Quality
- [ ] Code follows the project's TypeScript conventions (strict mode, no `any`).
- [ ] Named exports used for components, not default exports.
- [ ] `import type` used for type-only imports.
- [ ] `@/` alias used for project-internal imports.
- [ ] No unused imports, variables, or dead code.

### 2. Next.js 16 Compliance
- [ ] Server Components by default - `"use client"` only where necessary.
- [ ] `params`, `searchParams`, `cookies()`, `headers()` are `await`-ed.
- [ ] Metadata API used for SEO (not `<Head>` from Pages Router).
- [ ] `next/image`, `next/font`, `next/link` used for optimisation.
- [ ] Error boundaries (`error.tsx`) and loading states (`loading.tsx`) present where needed.

### 3. Supabase & Security
- [ ] RLS enabled on all tables.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` never exposed to the browser.
- [ ] Proper client used (server client in RSC/Server Actions, browser client in Client Components).
- [ ] User input validated and sanitised (especially in Server Actions).
- [ ] No SQL injection vectors in raw queries.

### 4. Styling
- [ ] Tailwind utility classes used consistently.
- [ ] Responsive design tested (`sm:`, `md:`, `lg:` breakpoints).
- [ ] Dark mode support if applicable.
- [ ] Accessible colour contrast (WCAG AA).

### 5. Build & Runtime Verification
- [ ] `npm run typecheck` passes with zero errors.
- [ ] `npm run lint` passes with zero errors.
- [ ] `npm run build` succeeds.
- [ ] App runs without console errors in `npm run dev`.
- [ ] Feature works correctly in the browser.

## Output Format

Produce a structured review report:

```
## Review Summary

**Status:** ✅ Approved / ⚠️ Needs Changes / ❌ Blocked

### Issues Found
1. [SEVERITY] Description - file:line
2. ...

### Suggestions (non-blocking)
1. Description

### Checks
- [x] Typecheck passed
- [x] Lint passed
- [x] Build passed
- [x] Runtime tested
```

## ./.github/copilot-instructions.md
# Copilot Global Instructions

You are working on a **Next.js 16** project using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase** as the backend.

---

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first)
- **Backend/DB:** Supabase (PostgreSQL, Auth, Storage, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)
- **Package Manager:** npm

---

## Critical Rules

1. **Read the docs first.** Next.js 16 has breaking changes. Always check `node_modules/next/dist/docs/` before implementing any Next.js API. Heed deprecation notices.
2. **Server Components by default.** Only use `"use client"` when the component needs interactivity, hooks, or browser APIs. Keep Client Components at the leaves of the component tree.
3. **Async APIs.** In Next.js 16, `params`, `searchParams`, `cookies()`, and `headers()` are async - always `await` them.
4. **No local test data.** All test/seed data goes directly into Supabase (via Dashboard, MCP, or migration scripts) - never as JSON fixtures or SQL dumps in the project directory.
5. **Environment variables.** Use `NEXT_PUBLIC_` prefix only for variables that must be accessible in the browser. Server-only secrets (e.g. `SUPABASE_SERVICE_ROLE_KEY`) must never be prefixed.
6. **Schema awareness.** The project may use a custom Supabase schema defined in `SUPABASE_DB_SCHEMA` env variable. Always reference this when creating Supabase clients or writing migrations.
7. **Supabase Docker creation.** When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
8. **Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
9. **Vercel-Ready app** when deployed. The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.


## Additional App Creation Rules

When creating a new app or major app surface, always follow these rules:

1. **Mandatory multilingual support (EN + DE) using Next.js App Router and next-intl.**
  - Implement next-intl specifically configured for the Next.js App Router architecture.
	- Always use the `useTranslations` hook for all user-facing text. Never hardcode strings in components.
	- Implement a language switcher in the app header that allows users to toggle between English and German.
	- Store and  maintain translations in dedicated JSON files (e.g. `en.json`, `de.json`) and configure next-intl routing accordingly.
	- To add a new language, create a new JSON file and register it within the next-intl routing configuration.
2. **Mandatory light and dark themes.**
	- Every app must support both light mode and dark mode.
	- Ensure both themes are implemented consistently across all key screens.
3. **Branding and homepage quality.**
	- Create a unique, meaningful, and professional app logo.
	- Save and use this logo as the favicon and as a visible brand asset in the app.
	- Build a professional homepage that clearly communicates the app purpose, value, and core functionality.
4. **Legal content in footer.**
	- Use legal documents from the `legal-docs` folder.
	- Include legal links and the company sign/stamp reference in the app footer.

---

## Workflow Orchestration

### First: Ask the User About Their Database Setup

At the **start of every new project or major feature**, always ask:

> "How do you want to work with Supabase for this project?"
> - **(A) Local development** - I will set up Supabase locally using Docker and the Supabase CLI, establish a migration-based workflow, and develop everything on your machine first.
> - **(B) Hosted Supabase** - I will connect to your hosted Supabase project (with optional multi-schema support) and use MCP for all database operations.

- If the user chooses **(A)**: follow the `localsupabase.instructions.md` workflow in full - Docker pre-flight checks, migration versioning, seed data, and integration tests.
- If the user chooses **(B)**: follow the `supabase.instructions.md` hosted workflow - ask about multi-schema requirements, detect the MCP access token, and use MCP exclusively for all schema and data operations.
- If the context makes the choice obvious (e.g. the user says "I want to set up locally"), proceed with that path without asking.

### Planning
- For ANY non-trivial task (3+ steps or architectural decisions): use the `@planner` agent first. Do not start coding without a plan.
- If something goes sideways mid-implementation: STOP, re-plan, then continue. Do not keep pushing broken code.
- Write detailed specs upfront to reduce ambiguity. Vague requirements produce vague code.

### Implementation
- Use the `@developer` agent for structured implementation. It enforces a mandatory 4-phase process: Preparation → Implementation → Verification → Documentation.
- Keep changes minimal and focused. Only touch what is necessary for the task.
- After each logical step: check for TypeScript errors before moving on. Fix immediately, do not accumulate errors.
- Read files before editing them. Never guess at structure - explore first.
- Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.

### Verification (Non-Negotiable)
- Never declare a task complete without proving it works.
- Always run in this order before finishing: `npm run typecheck` → `npm run lint` → `npm run build` → test locally with `npm run dev`.
- Ask yourself: "Would a senior engineer approve this?" If not, fix it first.
- Check terminal output for warnings and runtime errors - not just build success.
- **Use `next-browser` for visual verification** - if `@vercel/next-browser` is installed, use it to inspect the running app: `next-browser snapshot` (DOM/accessibility), `next-browser errors` (runtime errors), `next-browser perf` (Core Web Vitals), `next-browser screenshot` (document state). See `.github/skills/next-browser/SKILL.md` for full usage.

### Code Review
- Use the `@reviewer` agent before opening a PR. It runs a structured checklist covering code quality, Next.js 16 compliance, Supabase security, styling, and build checks.
- For bugs: diagnose from logs/errors, resolve the root cause. No temporary patches.

### Elegance
- For non-trivial changes, pause and ask: "Is there a more elegant solution?"
- If a fix feels hacky: implement the clean solution instead.
- Skip this for simple, obvious fixes - do not over-engineer.

---

## Mandatory: Check Instructions & Skills on Every Request

Before responding to **every** user request, perform the following steps:

1. **Check applicable instruction files** - Identify which `.instructions.md` files in `.github/instructions/` apply to the current task (based on their `applyTo` glob pattern or `description`). Read and apply their rules before writing any code or plan.
2. **Check available skills** - Review `.github/skills/` for any skill relevant to the task (e.g. `next-browser` for visual verification). Load and apply the skill if applicable.
3. **Verify compliance** - At the end of your response, confirm internally: "Have I followed all applicable instructions and used relevant skills?" If not, correct before responding.

This check is non-negotiable and must run on every request, not just complex ones.

---

## Core Principles

- **Simplicity First.** Make every change as simple as possible. Impact minimal code.
- **No Laziness.** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact.** Only modify what is necessary. Avoid side effects and unrelated changes.
- **No Over-Engineering.** Do not add features, helpers, or abstractions beyond what was requested.
- **Ask When Unclear.** If requirements are ambiguous, ask rather than guess.

---

## Code Style

- Use `import type { ... }` for type-only imports.
- Prefer named exports over default exports for components (except Next.js route files like `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` which require default exports).
- Use `@/` import alias for project-internal imports.
- Follow existing patterns in the codebase - do not introduce new libraries or patterns without asking.

---

## Commit Message - End of Every Response

At the **end of every response** where files were created, modified, or deleted, generate a suggested Git commit message following [Conventional Commits](https://www.conventionalcommits.org/) format. Present it as:

```
Suggested commit:
<type>(<scope>): <short imperative summary>

<optional body: what changed and why, max 3 bullet points>
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`

**Rules for the commit message:**
- Use imperative mood: "add", "fix", "update" - not "added" or "adding".
- Scope is the module or area affected (e.g. `auth`, `db`, `ui`, `migrations`, `config`).
- Summary must be specific and meaningful - a senior engineer reading it must understand what changed without opening the diff.
- Only generate a commit message when files actually changed. Skip for pure Q&A responses.

## ./.github/instructions/localsupabase.instructions.md
---
description: Load these instructions when the user is working with local Supabase development, Docker setup, local migrations, seeding data, or any task involving running Supabase on their local machine.
applyTo: "**/supabase/**,**/docker-compose*,**/.env.local,**/.env"
---

# Local Supabase (Docker) Workflow Instructions

You are acting as an expert DevOps and database engineer. Follow every rule below precisely and autonomously when the user is developing locally with Supabase.

---

## 1. Pre-Flight: Docker & Container Health Check

**Before executing any task**, run the following automated checks:

1. Verify Docker Desktop is running. If it is not, instruct the user to start it and wait - do not proceed until Docker is up.
2. Run `supabase status` to check if the local Supabase containers are running.
   - If they are **not running**: execute `supabase start` autonomously.
   - If they **are running**: confirm status and continue.
3. **Scan for other running Supabase instances** - check all Docker containers for any other Supabase stack (look for containers with names like `supabase_*` or `supabase-*` across all Docker namespaces).
   - If another instance is found, **do not proceed silently**. Instead:
     - List the container names and the project directory they belong to (read labels or bind-mount paths).
     - Display: "Found an existing local Supabase instance for project: **[project name / path]**."
     - Ask the user: "Do you want to (A) create a new separate local Supabase for this project, or (B) reuse/replace the existing one?"
     - Wait for the user's explicit choice before continuing.

---

## 2. Initial Schema & Migration File

When setting up a new project or applying a new schema:

- Create the initial database schema based on the app requirements.
- Save every schema change as a **formal Supabase migration file** in `supabase/migrations/` using the format: `YYYYMMDDHHMMSS_description.sql`.
- Never apply schema changes directly - always use migration files.

---

## 3. Environment Variables

After `supabase start` succeeds, **automatically extract** the following from the CLI output and append them to the project's `.env.local` file (create it if it does not exist):

```env
NEXT_PUBLIC_SUPABASE_URL=<local API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<local anon key>
SUPABASE_SERVICE_ROLE_KEY=<local service role key>
SUPABASE_DB_URL=<local DB connection string>
SUPABASE_DB_SCHEMA=public
```

- Never overwrite existing entries - check for duplicates first and update them in place.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.

---

## 4. Mock / Seed Data

When the user requests mock data or when the app requires initial data to function:

- Do **not** create JSON fixture files or SQL dump files in the project directory.
- Generate a `supabase/seed.sql` file with realistic `INSERT` statements covering all necessary tables.
- Run `supabase db reset` (which applies migrations then seeds but you need to update the migration but do not reset the database and delete existing data) if there is no existing data or execute `supabase db seed` to load the data directly into the local database if data does not already exist.
- Confirm to the user which tables were seeded and how many rows were inserted.

---

## 5. Autonomous Development & Schema Versioning

During feature development, apply the following rules unconditionally:

- Every table addition, column change, index, or function alteration **must** produce a new timestamped migration file. Never modify existing migration files.
- Migration naming convention: `YYYYMMDDHHMMSS_<short_description>.sql` (e.g. `20260409120000_add_user_profiles.sql`).
- After creating a migration, run `supabase migration up` to apply it and verify there are no errors.
- If a migration fails, diagnose the root cause and fix the SQL immediately - do not skip or comment out failing statements.
- Maintain a strict linear migration history. Migrations must never conflict or duplicate each other.

---

## 6. Production Deployment via MCP

- **Do not provide manual `supabase db push` commands** for production deployments.
- Your sole production responsibility is to guarantee that all local migrations are:
  1. Complete (cover all schema changes made during development).
  2. Valid.
  3. Idempotent where possible.
- Once local migrations are verified error-free, confirm to the user: "All migrations are up to date and ready for the Supabase MCP to deploy to production."
- The Supabase MCP handles live deployment. Do not attempt to replicate its functionality.

---

## 7. Automated Integration Testing

After Docker is running and migrations are applied, **automatically**:

1. Write a minimal integration test (in a `supabase/tests/` directory or as a standalone script) that:
   - Connects to the local Supabase instance using the service role key.
   - Performs one `INSERT` and one `SELECT` on a core table.
   - Asserts the read value matches the written value.
   - Cleans up the test record after the assertion.
2. Execute the test immediately.
3. If the test fails:
   - Print the error output in full.
   - Diagnose and fix the root cause autonomously.
   - Re-run the test until it passes.
   - Do not report success until the test is green.

## ./.github/instructions/nextjs.instructions.md
---
applyTo: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js"
---
# Next.js 16 + App Router Instructions

## Server vs. Client Components

- Default to **Server Components** (no directive needed).
- Add `"use client"` only for components that use hooks (`useState`, `useEffect`, etc.), event handlers, or browser APIs.
- Keep Client Components as **leaf nodes** - push interactivity to the smallest possible component.

## Async APIs (Next.js 16 Breaking Change)

In Next.js 16, the following are **async** and must be awaited:

```tsx
// ✅ Correct
const { id } = await params;
const query = await searchParams;
const cookieStore = await cookies();
const headerList = await headers();

// ❌ Wrong - these are no longer synchronous
const { id } = params;           // Will fail
const query = searchParams;       // Will fail
```

## Data Fetching

- Fetch data in Server Components using `async/await`.
- Use Server Actions (`"use server"`) for data mutations.
- Use `Suspense` boundaries with `loading.tsx` for granular loading states.
- Handle errors with `error.tsx` (client-side error boundary).

## Routing

- Use `layout.tsx` for shared UI across routes.
- Use `page.tsx` for route-specific content.
- Use `route.ts` for API routes (Route Handlers).
- Use dynamic routes: `[id]/page.tsx` and catch-all: `[...slug]/page.tsx`.

## Metadata & SEO

- Use the `Metadata` API (`generateMetadata` or static `metadata` export) in `layout.tsx` or `page.tsx`.
- Never use `<Head>` from `next/head` - that is Pages Router only.

## Optimisation

- Use `next/image` for images (automatic optimisation).
- Use `next/font` for fonts (zero layout shift).
- Use `next/link` for client-side navigation.
- Prefer `next/dynamic` for code-splitting heavy Client Components.

## ./.github/instructions/supabase.instructions.md
---
applyTo: "**/supabase/**,**/*supabase*"
---
# Supabase Integration Instructions

## Client Setup

- Use `@supabase/ssr` for Next.js App Router integration.
- Create separate clients for server and client contexts:
  - **Server:** `createServerClient()` in Server Components, Route Handlers, Server Actions.
  - **Client:** `createBrowserClient()` in Client Components only.
- **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser - it bypasses RLS.

## Schema Awareness

- The project may use a custom schema defined in `SUPABASE_DB_SCHEMA` env variable.
- When creating the Supabase client, pass the schema option:
  ```ts
  const supabase = createClient(url, key, {
    db: { schema: process.env.SUPABASE_DB_SCHEMA || 'public' }
  });
  ```

## Row-Level Security (RLS)

- **Always** enable RLS on every table.
- Write policies that match your auth patterns (e.g. `auth.uid() = user_id`).
- Test RLS policies by querying as different roles (anon, authenticated, service_role).

## Migrations

- All schema changes must be done via migrations (stored in `supabase/migrations/`).
- Use Supabase MCP tools for creating/managing migrations.
- Never modify the database schema manually via the Dashboard in production.

## Data

- Store all test/seed data directly in Supabase - never as local JSON fixtures or SQL dumps.

---

## Multi-Schema Setup on Hosted Supabase (via MCP)

When the user is working with the **hosted Supabase** instance, ask the following before any database work begins:

### Step 1 - Ask the User

> "Do you want to use multiple PostgreSQL schemas in your hosted Supabase project? (e.g. `public`, `app`, `reporting`)"

- If **no**: proceed with the default `public` schema.
- If **yes**: proceed with the multi-schema setup flow below.

### Step 2 - Collect Schema Requirements

Ask:
1. "How many custom schemas do you want to create?"
2. "What are the names of the schemas?" (collect as a list)

Do not proceed until you have explicit schema names from the user.

### Step 3 - Identify the Correct Supabase Project via MCP

- Use the Supabase MCP tools to list all available projects.
- Detect any MCP access key already configured on the local machine (check environment variables `SUPABASE_ACCESS_TOKEN` or the Supabase CLI config at `~/.supabase/access-token`).
- Present the matched project name and ID to the user: "I found your Supabase project: **[project name]** (ID: `[project-id]`). I will make changes to this project only."
- **Do not touch any other project.** If multiple projects are found and the target is ambiguous, ask the user to confirm which one.


### Step 4 - Create Schemas via MCP

For each schema name provided, execute the following SQL via `mcp_com_supabase__execute_sql`:

```sql
CREATE SCHEMA IF NOT EXISTS "<schema_name>";
```

After creation, immediately grant the necessary permissions:

```sql
-- Allow the authenticated role to use the schema
GRANT USAGE ON SCHEMA "<schema_name>" TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO authenticated;

-- Allow the anon role (for public/unauthenticated access if needed)
GRANT USAGE ON SCHEMA "<schema_name>" TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA "<schema_name>" TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT SELECT ON TABLES TO anon;

-- Allow the service_role full access
GRANT ALL ON SCHEMA "<schema_name>" TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO service_role;
```

### Step 5 - Expose Schema via Supabase API

To allow the PostgREST API to expose the new schema, the `search_path` must be updated. This requires a change in the Supabase Dashboard under **Settings → API → Extra search path**.

- **If MCP supports this setting**: apply it automatically.
- **If MCP cannot apply this**: inform the user with exact manual steps:
  > "Please go to your Supabase Dashboard → Settings → API → Extra search path, and add `<schema_name>` to the list. Then click Save."

### Step 6 - Update Environment Variables

After the project is identified and schemas are created, **automatically extract the hosted Supabase connection details via MCP** (`mcp_com_supabase__get_project_url` and `mcp_com_supabase__get_publishable_keys`) and write all required variables to `.env.local`:

```env
# Hosted Supabase - Production
NEXT_PUBLIC_SUPABASE_URL=<project API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<project anon key>
SUPABASE_SERVICE_ROLE_KEY=<project service role key>
SUPABASE_DB_SCHEMA=<primary_schema_name>
# Additional schemas (reference only - not set as runtime variable)
# SUPABASE_SCHEMA_<NAME>=<schema_name>
```

Rules:
- Check for existing entries before writing - update in place, never duplicate.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.
- If multiple schemas are used, list them all in comments above `SUPABASE_DB_SCHEMA` so the developer has a clear reference.
- After writing the variables, confirm to the user: "Environment variables have been set in `.env.local`. Your app is now pointed at the hosted Supabase project **[project name]**."

#### Verify the Connection

Once the variables are written, run a quick connectivity check to confirm the production database is reachable:

1. Use `mcp_com_supabase__execute_sql` to run `SELECT 1;` against the target project.
2. If successful: confirm "Connection to hosted Supabase verified. The production database is responding correctly."
3. If it fails: diagnose using `mcp_com_supabase__get_logs`, report the exact error, and fix the configuration before proceeding.

### Step 7 - Handle Missing MCP Token

If the MCP access token is **not found** locally:

1. Inform the user: "No Supabase MCP access token was found. I need a Personal Access Token (PAT) to manage your hosted Supabase project."
2. Ask: "Please provide your Supabase Personal Access Token. You can generate one at: https://supabase.com/dashboard/account/tokens"
3. Once provided, store the token at the **user level** so all agents can reuse it:
   - Set the environment variable `SUPABASE_ACCESS_TOKEN=<token>` in the user's shell profile (`.bashrc`, `.zshrc`, or Windows user environment variables).
   - Confirm: "Token stored. All agents can now access Supabase via MCP using this token."
4. Never hardcode the token in project files or commit it to version control.

## ./.github/instructions/tailwind.instructions.md
---
applyTo: "**/*.tsx,**/*.jsx,**/*.css"
---
# Tailwind CSS v4 Instructions

## Utility-First Approach

- Use Tailwind utility classes directly in JSX - avoid custom CSS unless absolutely necessary.
- Follow a consistent class order: **Layout → Box Model → Typography → Effects → States**.
- For conditional classes, use template literals or a `cn()` helper if `tailwind-merge` and `clsx` are installed.

## Responsive Design

- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Mobile-first: write base styles for mobile, then add breakpoint overrides.

## Dark Mode

- Support dark mode with the `dark:` variant.
- Keep colour contrast accessible (WCAG AA minimum).

## Component Patterns

- Create reusable UI components in `src/components/ui/`.
- Prefer standard theme tokens (spacing, colours) over arbitrary values.
- Use only Tailwind v4 syntax - no deprecated Tailwind v3 patterns.

## ./.github/instructions/typescript.instructions.md
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Best Practices

## Type Safety

- Enable `strict` mode in `tsconfig.json` (already configured).
- Use `import type { ... }` for type-only imports - keeps runtime bundles clean.
- Prefer `interface` for object shapes; use `type` for unions, intersections, and mapped types.
- Never use `any`. Use `unknown` when the type is genuinely unknown, then narrow it.

## Patterns

- Use discriminated unions for state management and API responses.
- Prefer `as const` for literal types and const assertions.
- Use `satisfies` operator to validate types without widening.
- Extract shared types to `src/types/` - keep them co-located if only used in one module.

## Naming Conventions

- **Interfaces/Types:** PascalCase (`UserProfile`, `ApiResponse`).
- **Variables/Functions:** camelCase (`getUserById`, `isLoading`).
- **Constants:** UPPER_SNAKE_CASE for true constants, camelCase for computed values.
- **Components:** PascalCase file names matching the export (`UserCard.tsx`).

## Enums

- Avoid `enum` - use `as const` objects or string literal union types instead.

## ./.github/skills/anforderungsdokument/SKILL.md
﻿---
name: anforderungsdokument
description: >-
  WAMOCON Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und
  Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx).
  Workflow: IDEA.md ausfüllen, Skill aufrufen, Dokument prüfen, Freigabe.
---

# WAMOCON Entwicklungsprompts und Anforderungsdokument

## Übersicht

Dieser Skill stellt drei Entwicklungsprompts und eine verbindliche Dokumentstruktur
für WAMOCON-Anforderungsdokumente bereit. Das Anforderungsdokument folgt einer
festen 9-Kapitel-Struktur mit Quellenverzeichnis und wird als .docx generiert.

> **⚠️ PLATTFORMREGEL (ABSOLUT BINDEND):** Alle Anforderungsdokumente und Analysen
> gelten ausschließlich für **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **kein Bestandteil** dieser
> Dokumente und dürfen unter keinen Umständen im Scope erwähnt werden.

> **⚠️ QUELLENREGEL (ABSOLUT BINDEND):** Alle verwendeten Quellen, Statistiken und
> Marktdaten müssen **nicht älter als 1 Jahr** sein (ab aktuellem Datum). Quellen,
> die älter als 12 Monate sind, sind **strikt verboten** und dürfen unter keinen
> Umständen verwendet werden. Kein Erscheinungsdatum → Quelle nicht verwenden.

**Workflow:** IDEA.md ausfüllen → Prompt 3 aufrufen → Dokument prüfen → Freigabe → Implementierung starten.

---

## Prompt 1: Tiefenanalyse und kritische Projektbewertung

Verwende diesen Prompt nach dem Onboarding einer neuen App-Idee, um eine vollumfängliche
Analyse auf Basis des Anforderungsdokuments durchzuführen.

```
Prüfe bitte das aktuelle Projekt und mache dich mit allen Daten und Inhalten vertraut.

Führe anschließend eine vollumfängliche Tiefenanalyse zum Thema der Web-/SaaS-Applikation
aus dem Anforderungsdokument durch. Erstelle dafür:
- Eine vollumfängliche Bedarfsanalyse des geplanten Themas
- Eine Nutzwertanalyse für die Funktionen
- Hinweise auf mögliche Lücken im Markt, die mit der Web-App nicht abgedeckt sind

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.
Im Analysedokument muss jede Zahl mit einer aktuellen Quelle (inkl. Datum) belegt sein.

Fasse deine Ergebnisse in einem Analysedokument zusammen und gib eine Empfehlung ab,
welche Richtung die Web-/SaaS-Applikation nehmen soll, um die größtmögliche
Nutzerplattform und den größten Nutzen zu erzielen.

Erstelle am Ende Entscheidungsvorlagen zur Entscheidung der nächsten Schritte für die
Entwicklung und Ausrichtung der Applikation.

Prüfe intern deine Ergebnisse kritisch und mehrfach, sodass die Ergebnisse brauchbar sind.
```

---

## Prompt 2: Marketing und UX/UI Rework

Verwende diesen Prompt, wenn die Web-Applikation eine Überarbeitung aus Marketing-
und UX-Perspektive benötigt.

```
Bitte führe eine vollständige Analyse und Optimierung des Projektes durch.

Ziel ist eine umfassende Überarbeitung der Web-Applikation aus Marketing- und UX/UI-Perspektive:
- Analysiere die Applikation und passende Oberflächen, Farben, Typografie und Designsystem
- Optimiere den Workflow nach typischen UX-Prinzipien (geführt, unterstützt, intuitiv)
- Stelle sicher, dass die Web-App responsiv ist und auf allen gängigen Browsergrößen
  optimal dargestellt wird (Desktop, Laptop, Tablet) - wir entwickeln ausschließlich
  Web-/SaaS-Applikationen, KEINE mobilen Apps
- Implementiere passende Hilfestellungen für den User

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.

Überarbeite alle Seiten vollständig und führe anschließend alle notwendigen
Fehlerbehebungen durch.
```

---

## Prompt 3: Anforderungsdokument erstellen (9 Kapitel + Quellenverzeichnis)

Verwende diesen Prompt, um ein vollständiges Anforderungsdokument zu erstellen.
Die KI liest `IDEA.md` und das `SKILL.md` automatisch aus dem Projekt - nichts einfügen, nichts ersetzen.

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

---

## DOKUMENTSTRUKTUR (verbindlich für jedes Anforderungsdokument)

> **⚠️ Gilt ausschließlich für Web-/SaaS-Applikationen. Mobile Apps sind nicht Bestandteil.**

### Deckblatt

Oben: dicke Trennlinie (WAMOCON-Blau).
Titel zentriert: "WAMOCON GMBH" + "Anforderungsdokument" + [Projektname].
Metadaten-Tabelle ohne Rahmen:

| Feld              | Wert                          |
|-------------------|-------------------------------|
| Welle             | [Wellennummer aus IDEA.md]    |
| Projekt           | [App-Name]                    |
| Unternehmen       | WAMOCON GmbH                  |
| App Version       | 1                             |
| Erstellt von      | [Name aus IDEA.md]            |
| Eingereicht an    | [Empfänger aus IDEA.md]       |
| Datum             | [TT.MM.JJJJ aktuell]         |
| Vertraulichkeit   | Intern vertraulich            |
| Status            | Zur Freigabe eingereicht      |

Unten: gestrichelte Trennlinie.

---

### Kapitel 1: Zusammenfassung

- **1.1 Die Idee** - Was macht die Web-/SaaS-App? Welches Problem löst sie? Kernnutzen in 3–5 Sätzen.
- **1.2 Warum jetzt?** - Markttiming: Warum ist das Thema genau jetzt relevant? Mit aktuellen Zahlen belegen (Quellen nicht älter als 1 Jahr).

---

### Kapitel 2: Marktanalyse

- **2.1 Zielgruppe in Zahlen** - Marktgröße, Nutzeranzahl, Wachstumsprognosen. Fokus Deutschland/DACH. Jede Zahl mit Quellenangabe (nicht älter als 1 Jahr).
- **2.2 Infrastruktur/Marktwachstum** - Was wächst? Welche Trends treiben den Markt? Prognosen bis 2030.
- **2.3 Das Kernproblem** - Faktisch belegt: Was ist das konkrete Problem, das die Web-App löst? Warum existiert es heute noch?
- **2.4 Regulatorisches Umfeld** - DSGVO, branchenspezifische Gesetze, EU-Verordnungen. Was stärkt den USP?

---

### Kapitel 3: Wettbewerb

- **3.1 Direkte Wettbewerber** - Tabelle: Anbieter | Stärken | Schwächen/Chance für uns | Preis.
  Echte Anbieter mit echten Daten. Stärken UND Schwächen ehrlich benennen.
- **3.2 Indirekte Wettbewerber / Aggregate** - Tabelle: Anbieter | Was er bietet | Was fehlt (Chance für uns).
- **Marktlücke** - Zusammenfassung: Welche Kombination bietet kein Wettbewerber? Das ist unser Einstieg.

---

### Kapitel 4: Zielgruppe

- **4.1 Primäre Zielgruppe** - Genaue Beschreibung mit Zahlen. Nutzerprofile als Fließtext (Personas mit Name, Rolle, Verhalten).
- **4.2 Sekundäre Zielgruppe** - Wer kommt später dazu? Warum erst später?
- **4.3 Nicht-Zielgruppe** - Wen adressiert die Web-App NICHT? Klar abgrenzen.

---

### Kapitel 5: Nutzen

- **5.1 Nutzen für Kunden** - Tabelle: Problem heute | Lösung durch Web-App | Konkreter Vorteil. Mit messbaren Zahlen (Quellen nicht älter als 1 Jahr).
- **5.2 Nutzen für WAMOCON GmbH** - Warum lohnt sich das Projekt? Einnahmequellen, Skalierungspotenzial, strategischer Wert.

---

### Kapitel 6: Abhängigkeiten und Machbarkeit

- **6.1 Externe Abhängigkeiten** - APIs, Dienste, Datenquellen. Tabelle: Quelle | Was sie liefert | Kosten | Abhängigkeit.
- **6.2 Abrechnungs-/Integrationsoptionen** - Falls relevant: Welche Optionen für Bezahlung/Integration gibt es? Pro Version.
- **6.3 Gesamtbewertung** - Hat V1 kritische Abhängigkeiten? Kann ein Wettbewerber den Start blockieren?

---

### Kapitel 7: Anforderungen Version 1

- **7.1 Hauptprozesse** - Gruppiert nach Themen (z.B. "Dokumenten-Upload", "Frage-Generator").
  Jede Gruppe hat eine eigene Anforderungstabelle:

  | ID   | Anforderung                          | Priorität  | Status |
  |------|--------------------------------------|------------|--------|
  | K-01 | [Kernfunktion]                       | Muss       | Neu    |

- **7.2 Basisfunktionalitäten** - Pflicht für jede Web-App:

  | ID   | Anforderung                                              | Priorität  | Status |
  |------|----------------------------------------------------------|------------|--------|
  | B-01 | Rollen- und Rechteprinzip                                | Muss       | Neu    |
  | B-02 | Anmeldung und Registrierung (E-Mail mit Bestätigung)     | Muss       | Neu    |
  | B-03 | Passwort zurücksetzen                                    | Muss       | Neu    |
  | B-04 | Admin-Bereich für Nutzerverwaltung                       | Muss       | Neu    |
  | B-05 | Profilseite                                              | Muss       | Neu    |
  | B-06 | Dashboard als Startseite                                 | Muss       | Neu    |
  | B-07 | Navigation mit Breadcrumbs                               | Muss       | Neu    |
  | B-08 | Benachrichtigungssystem (In-App und/oder E-Mail)         | Soll       | Neu    |
  | B-09 | Spracheinstellungen (Deutsch und Englisch)               | Muss       | Neu    |
  | B-10 | Dunkel/Hell-Modus                                        | Muss       | Neu    |
  | B-11 | FAQ und Hilfebereich                                     | Soll       | Neu    |
  | B-12 | AGB, Impressum, Datenschutzerklärung                     | Muss       | Neu    |
  | B-13 | Cookie-Banner nach DSGVO                                 | Muss       | Neu    |
  | B-14 | DSGVO-Funktionen (Daten exportieren, Konto löschen)      | Muss       | Neu    |
  | B-15 | Geschäftsmodell (Free und Premium)                       | Muss       | Neu    |
  | B-16 | Upgrade von Free auf Premium in der App                  | Muss       | Neu    |

- **7.3 Scope** - Tabelle: In Scope V1 | Out of Scope (V2+). Klare Abgrenzung.

---

### Kapitel 8: Chancen und Risiken

- **8.1 Chancen** - Tabelle: Chance | Begründung. Mit Zahlen und Quellen (nicht älter als 1 Jahr).
- **8.2 Risiken** - Tabelle: Risiko | Warum es eintreten kann | Gegenmaßnahme.

---

### Kapitel 9: Umsetzungsplan Version 1

- **9.1 Entwicklungsansatz** - Tech-Stack, Werkzeuge (GitHub Copilot), Teamstruktur.
- **9.2 Umsetzungsplan** - Tag-für-Tag-Tabelle über 5–7 Werktage:

  | Tag       | Fokus                       | Inhalt                          |
  |-----------|-----------------------------|---------------------------------|
  | Tag 1–3   | Hauptprozesse               | [Details]                       |
  | Tag 3–4   | Testing und Bugfixing       | [Details]                       |
  | Tag 4–5   | Basisfunktionalitäten       | [Details]                       |
  | Tag 5–6   | Puffer                      | [Details]                       |

- **Hinweis** - Realistisch: V1 ist ein lauffähiger Prototyp, kein Endprodukt.

---

### Quellenverzeichnis

Tabelle: Nr. | Quelle/URL | Inhalt | Veröffentlichungsdatum.
Nur reale, öffentlich verfügbare Quellen.

**STRIKT:** Ausschließlich Quellen, die nicht älter als 1 Jahr sind.
Jede Zahl im Dokument muss mindestens eine Quelle haben.
Das Veröffentlichungsdatum muss für jede Quelle angegeben sein.

---

## FORMATREGELN

- **Sprache:** Deutsch mit echten Umlauten (Ä, Ö, Ü, ß). In Code-Variablennamen ist ae/oe/ue akzeptabel.
- **Schrift:** Arial Narrow, 11pt Fließtext.
- **Tabellenkopf:** WAMOCON-Blau (1E3A5F) mit weißem Text, fett.
- **Tabellenzeilen:** alternierend weiß / hellgrau (F5F5F5).
- **Breiten:** WidthType.DXA (keine Prozent).
- **Shading:** ShadingType.CLEAR (kein SOLID).
- **Kein \n in TextRun** - separate Paragraphen verwenden.
- **Seitenkopf:** "WAMOCON GmbH, Mergenthalerallee 79-81, 65760 Eschborn" (8pt, grau).
- **Seitenumbruch** zwischen den Hauptkapiteln.

---

## Workflow

```
[1] IDEA.md im Projekt-Root ausfüllen
        |
        v
[2] Prompt 3 aufrufen → Anforderungsdokument als .docx generieren
        |
        v
[3] Dokument prüfen und zur Freigabe einreichen (Geschäftsführung)
        |
        v
[4] Nach Freigabe: Prompt 1 für Tiefenanalyse aufrufen
        |
        v
[5] Implementierung mit @planner → @developer
        |
        v
[6] Nach Launch: Prompt 2 für UX/UI Rework
```

---

## Voraussetzungen

- Node.js >= 18
- npm install docx (einmalig)
- Ausgabe: public/Anforderungsdokument_[ProjektName].docx
- package.json: "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
## ./.github/skills/memory-merger/SKILL.md
---
name: memory-merger
description: 'Merges mature lessons from a domain memory file into its instruction file. Syntax: `/memory-merger >domain [scope]` where scope is `global` (default), `user`, `workspace`, or `ws`.'
---

# Memory Merger

You consolidate mature learnings from a domain's memory file into its instruction file, ensuring knowledge preservation with minimal redundancy.

**Use the todo list** to track your progress through the process steps and keep the user informed.

## Scopes

Memory instructions can be stored in two scopes:

- **Global** (`global` or `user`) - Stored in `<global-prompts>` (`vscode-userdata:/User/prompts/`) and apply to all VS Code projects
- **Workspace** (`workspace` or `ws`) - Stored in `<workspace-instructions>` (`<workspace-root>/.github/instructions/`) and apply only to the current project

Default scope is **global**.

Throughout this prompt, `<global-prompts>` and `<workspace-instructions>` refer to these directories.

## Syntax

```
/memory-merger >domain-name [scope]
```

- `>domain-name` - Required. The domain to merge (e.g., `>clojure`, `>git-workflow`, `>prompt-engineering`)
- `[scope]` - Optional. One of: `global`, `user` (both mean global), `workspace`, or `ws`. Defaults to `global`

**Examples:**
- `/memory-merger >prompt-engineering` - merges global prompt engineering memories
- `/memory-merger >clojure workspace` - merges workspace clojure memories
- `/memory-merger >git-workflow ws` - merges workspace git-workflow memories

## Process

### 1. Parse Input and Read Files

- **Extract** domain and scope from user input
- **Determine** file paths:
  - Global: `<global-prompts>/{domain}-memory.instructions.md` → `<global-prompts>/{domain}.instructions.md`
  - Workspace: `<workspace-instructions>/{domain}-memory.instructions.md` → `<workspace-instructions>/{domain}.instructions.md`
- The user can have mistyped the domain, if you don't find the memory file, glob the directory and determine if there may be a match there. Ask the user for input if in doubt.
- **Read** both files (memory file must exist; instruction file may not)

### 2. Analyze and Propose

Review all memory sections and present them for merger consideration:

```
## Proposed Memories for Merger

### Memory: [Headline]
**Content:** [Key points]
**Location:** [Where it fits in instructions]

[More memories]...
```

Say: "Please review these memories. Approve all with 'go' or specify which to skip."

**STOP and wait for user input.**

### 3. Define Quality Bar

Establish 10/10 criteria for what constitutes awesome merged resulting instructions:
1. **Zero knowledge loss** - Every detail, example, and nuance preserved
2. **Minimal redundancy** - Overlapping guidance consolidated
3. **Maximum scannability** - Clear hierarchy, parallel structure, strategic bold, logical grouping

### 4. Merge and Iterate

Develop the final merged instructions **without updating files yet**:

1. Draft the merged instructions incorporating approved memories
2. Evaluate against quality bar
3. Refine structure, wording, organization
4. Repeat until the merged instructions meet 10/10 criteria

### 5. Update Files

Once the final merged instructions meet 10/10 criteria:

- **Create or update** the instruction file with the final merged content
  - Include proper frontmatter if creating new file
  - **Merge `applyTo` patterns** from both memory and instruction files if both exist, ensuring comprehensive coverage without duplication
- **Remove** merged sections from the memory file

## Example

```
User: "/memory-merger >clojure"

Agent:
1. Reads clojure-memory.instructions.md and clojure.instructions.md
2. Proposes 3 memories for merger
3. [STOPS]

User: "go"

Agent:
4. Defines quality bar for 10/10
5. Merges new instructions candidate, iterates to 10/10
6. Updates clojure.instructions.md
7. Cleans clojure-memory.instructions.md
```

## ./.github/skills/next-browser/SKILL.md
---
name: next-browser
description: >-
  CLI that gives agents what humans get from React DevTools and the Next.js
  dev overlay - component trees, props, hooks, PPR shells, errors, network -
  as shell commands that return structured text.
---

# next-browser

If `next-browser` is not already on PATH, install `@vercel/next-browser` globally, then install the Chromium browser:

```bash
npm install -g @vercel/next-browser
playwright install chromium
```

Requires Node >= 20. If already installed, check the version is current:

```bash
next-browser --version
npm view @vercel/next-browser version
# if outdated:
npm install -g @vercel/next-browser@latest
```

---

## Next.js docs awareness

If the project's Next.js version is **v16.2.0-canary.37 or later**, bundled docs live at `node_modules/next/dist/docs/`. Before doing PPR work, Cache Components work, or any non-trivial Next.js task, read the relevant doc there - your training data may be outdated. The bundled docs are the source of truth.

---

## Working with the user

### Onboarding

- If the user already gave a URL, cookies, and task - skip questions, `open` and go.
- Otherwise ask only what's missing: dev server URL (running?), session cookies if behind login.
- For cookies, give the user two options: (1) DevTools → Application → Cookies, export as `[{"name":"session","value":"..."}]`, or (2) "Copy as cURL" from DevTools → Network on any authenticated request - extract the cookies from the header yourself.
- Never say "ready, what would you like to do?". Never auto-discover (port scans, `project`, config reads) before being asked.

### Show, don't tell

- `screenshot` after every navigation, code change, or visual finding. Always caption it.
- Don't narrate what a screenshot shows. State your conclusion or next action.

### Escalate, don't decide

- Suspense boundary placement and fallback UI - design with the user.
- Caching decisions (staleness, visibility) - the user's call, not yours.
- "Make this page faster" without context - ask: cold URL hit or client navigation? Don't guess, don't do both.

---

## Headless mode

By default the browser opens headed (visible window). For CI or environments with no display, set `NEXT_BROWSER_HEADLESS=1` to run headless.

---

## Commands

### Browser lifecycle

| Command | Description |
|---|---|
| `open <url> [--cookies-json <file>]` | Launch browser and navigate (with optional cookies) |
| `close` | Close browser and kill daemon |

```bash
$ next-browser open http://localhost:3000
$ next-browser open http://localhost:3000 --cookies-json cookies.json
# Cookie file format: [{"name":"authorization","value":"Bearer ..."}]
```

---

### Navigation

| Command | Description |
|---|---|
| `goto <url>` | Full-page navigation (new document load) |
| `push [path]` | Client-side navigation (interactive picker if no path) |
| `back` | Go back in history |
| `reload` | Reload current page |
| `restart-server` | Restart the Next.js dev server (clears caches - last resort only) |
| `ssr lock` | Block external scripts on all navigations (SSR-only mode) |
| `ssr unlock` | Re-enable external scripts |

---

### Inspection

| Command | Description |
|---|---|
| `tree` | Full React component tree (hierarchy, IDs, keys) |
| `tree <id>` | Inspect one component (props, hooks, state, source location) |
| `snapshot` | Accessibility tree with `[ref=eN]` markers on interactive elements |
| `errors` | Build and runtime errors for the current page |
| `logs` | Recent dev server log output |
| `browser-logs` | Browser-side console output (log, warn, error, info) |
| `network [idx]` | List network requests, or inspect one (headers, body) |

```bash
$ next-browser snapshot
- navigation "Main"
  - link "Home" [ref=e0]
  - link "Dashboard" [ref=e1]
- main
  - heading "Settings"
  - tablist
    - tab "General" [ref=e2] (selected)
    - tab "Security" [ref=e3]

$ next-browser tree
# Columns: depth id parent name
0 38167 - Root
1 38168 38167 HeadManagerContext.Provider
...
224 46375 46374 DeploymentsProvider

$ next-browser tree 46375
path: Root > ... > DeploymentsProvider
DeploymentsProvider #46375
props:
  children: [<Lazy />, ...]
hooks:
  Router: undefined (2 sub)
source: app/.../context.tsx:180:10
```

---

### Interaction

| Command | Description |
|---|---|
| `click <ref\|text\|selector>` | Click via real pointer events (works with Radix, Headless UI) |
| `fill <ref\|selector> <value>` | Fill a text input or textarea |
| `eval [ref] <script>` | Run JS in page context |
| `viewport [WxH]` | Show or set viewport size |

```bash
$ next-browser click e3          # ref from snapshot
$ next-browser click "Security"  # plain text
$ next-browser fill e4 "myuser"
$ next-browser viewport 375x812  # mobile breakpoint
$ next-browser eval 'document.title'
```

---

### Performance & PPR

| Command | Description |
|---|---|
| `perf [url]` | Core Web Vitals + React hydration timing in one pass |
| `renders start` | Begin recording React re-renders |
| `renders stop [--json]` | Stop and print per-component render profile |
| `ppr lock` | Freeze dynamic content to inspect the static shell |
| `ppr unlock` | Resume dynamic content and print shell analysis |

```bash
$ next-browser perf http://localhost:3000/dashboard
# Core Web Vitals
  TTFB    42ms
  LCP     1205.3ms
  CLS     0.03
# React Hydration - 65.5ms

$ next-browser renders start
$ next-browser renders stop
# 426 renders (38 mounts + 388 re-renders) across 38 components
# FPS: avg 120, min 106
```

---

### Screenshots

| Command | Description |
|---|---|
| `screenshot [caption] [--full-page]` | Viewport (or full page) PNG to temp file |
| `preview [caption]` | Screenshot + open in viewer window |

---

### Next.js MCP

| Command | Description |
|---|---|
| `page` | Route segments for the current URL |
| `project` | Project root and dev server URL |
| `routes` | All app router routes |
| `action <id>` | Inspect a server action by ID |

---

## Scenarios

### Debug a visual or interaction issue

1. `open http://localhost:3000`
2. `snapshot` - discover interactive elements
3. `click eN` / `fill eN value` - interact
4. `errors` - check for runtime errors
5. `screenshot "before fix"` - document state
6. Make the code change, HMR picks it up
7. `screenshot "after fix"` - verify

### Profile performance

```bash
$ next-browser perf http://localhost:3000/dashboard
# → Core Web Vitals + hydration timing

$ next-browser renders start
# reproduce slow interaction
$ next-browser renders stop
# → per-component render counts, self time, change reasons
```

### Debug PPR shell

```bash
$ next-browser ppr lock
$ next-browser goto http://localhost:3000/page
$ next-browser screenshot "PPR shell - locked"
$ next-browser ppr unlock
# → Shell analysis: which Suspense boundaries are holes and why
```

### Test responsive layout

```bash
$ next-browser viewport 375x812   # mobile
$ next-browser screenshot "mobile"
$ next-browser viewport 1440x900  # desktop
$ next-browser screenshot "desktop"
```

### Debug component re-renders

1. `renders start`
2. `goto` the page (captures hydration)
3. Reproduce the interaction
4. `renders stop` - read Mounts vs Re-renders, Self time, change reasons
5. `tree <id>` the expensive component - check source, props, hooks
6. Fix, HMR picks it up, re-run `renders start/stop` to verify

## ./AGENTS.md
﻿
---

# GitHub Copilot Customisation

<table>
<tr>
<th width="50%">DE Deutsch</th>
<th width="50%">EN English</th>
</tr>
<tr>
<td>Dieses Projekt nutzt GitHub Copilot Agents und Instructions, um eine strukturierte und produktive KI-gestützte Entwicklung zu ermöglichen.</td>
<td>This project uses GitHub Copilot Agents and Instructions to enable a structured and productive AI-assisted development workflow.</td>
</tr>
</table>

---

## Übersicht / Overview

| Typ / Type | Pfad / Path | Beschreibung / Description |
|---|---|---|
| **Global Instructions** | `.github/copilot-instructions.md` | Projektweite Basisregeln für alle Copilot-Interaktionen. / Project-wide baseline rules for all Copilot interactions. |
| **Instructions** | `.github/instructions/*.instructions.md` | Dateimuster-spezifische Coding-Richtlinien. / File-pattern-scoped coding guidelines. |
| **Agents** | `.github/agents/*.agent.md` | Spezialisierte KI-Personas für verschiedene Phasen. / Specialised AI personas for different development phases. |

---

## `copilot-instructions.md` - Globale Basisregeln / Global Baseline Rules

**Pfad / Path:** `.github/copilot-instructions.md`

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Diese Datei wird bei <strong>jeder</strong> Copilot-Interaktion automatisch geladen. Sie definiert den Tech-Stack, kritische Regeln (async APIs, Server Components, Supabase), und Code-Stil-Konventionen für das gesamte Projekt.</td>
<td>This file is automatically loaded on <strong>every</strong> Copilot interaction. It defines the tech stack, critical rules (async APIs, Server Components, Supabase), and code style conventions for the whole project.</td>
</tr>
</table>

<table>
<tr>
<th width="50%">DE Wann bearbeiten?</th>
<th width="50%">EN When to edit?</th>
</tr>
<tr>
<td>
- Tech-Stack ändert sich (z. B. neue Bibliothek wird Standardmuster)<br>
- Neue projektweite Regeln sollen für alle Copilot-Interaktionen gelten<br>
- Team-Konventionen ändern sich<br>
<strong>⚠️ Kurz halten</strong> - diese Datei wird immer in den Kontext geladen.
</td>
<td>
- Tech stack changes (e.g. a new library becomes a standard pattern)<br>
- New project-wide rules need to apply to all Copilot interactions<br>
- Team conventions change<br>
<strong>⚠️ Keep it short</strong> - this file is always loaded into context.
</td>
</tr>
</table>

---

## Instructions - Datei-spezifische Richtlinien / File-Scoped Guidelines

<table>
<tr>
<th width="50%">DE Was sind Instructions?</th>
<th width="50%">EN What are Instructions?</th>
</tr>
<tr>
<td>Instructions sind Richtlinien, die automatisch geladen werden, wenn Copilot an Dateien arbeitet, die dem <code>applyTo</code>-Glob-Muster entsprechen. Sie ergänzen die globalen Regeln mit datei-spezifischen Details.</td>
<td>Instructions are guidelines that are automatically loaded when Copilot works on files matching the <code>applyTo</code> glob pattern. They extend the global rules with file-type-specific details.</td>
</tr>
</table>

### Vorhandene Instructions / Available Instructions

| Datei / File | `applyTo` | Zweck / Purpose |
|---|---|---|
| `nextjs.instructions.md` | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js` | Next.js 16 App Router Patterns, async APIs, Server/Client Components |
| `tailwind.instructions.md` | `**/*.tsx, **/*.jsx, **/*.css` | Tailwind CSS v4 Utility-First Patterns, Responsive Design |
| `typescript.instructions.md` | `**/*.ts, **/*.tsx` | TypeScript Strict Mode, Naming Conventions, Type Safety |
| `supabase.instructions.md` | `**/supabase/**, **/*supabase*` | Supabase Client Setup, RLS, Migrations, Schema Awareness |

### Eigene Instructions erstellen / Creating Custom Instructions

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.instructions.md</code>-Datei in <code>.github/instructions/</code> mit YAML-Frontmatter. Das <code>applyTo</code>-Feld akzeptiert Glob-Muster und bestimmt, für welche Dateien die Regeln gelten.</td>
<td>Create a <code>.instructions.md</code> file in <code>.github/instructions/</code> with YAML frontmatter. The <code>applyTo</code> field accepts glob patterns and determines which files the rules apply to.</td>
</tr>
</table>

```yaml
---
applyTo: "**/*.tsx"
---
# Your instructions here
```

---

## Agents - KI-Personas / AI Personas

<table>
<tr>
<th width="50%">DE Was sind Agents?</th>
<th width="50%">EN What are Agents?</th>
</tr>
<tr>
<td>Agents sind spezialisierte KI-Personas. Du rufst sie in VS Code über das Chat-Panel mit <code>@agent-name</code> auf. Jeder Agent hat eine klar definierte Rolle, einen Workflow und Regeln.</td>
<td>Agents are specialised AI personas. You invoke them in VS Code via the Chat panel using <code>@agent-name</code>. Each agent has a clearly defined role, workflow, and rules.</td>
</tr>
</table>

---

### `@planner` - Planer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Technische Planung und Anforderungsanalyse vor dem Coding.</td>
<td><strong>Purpose:</strong> Technical planning and requirements analysis before coding.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Features<br>- Wenn die Anforderungen unklar sind<br>- Vor Refactoring oder Migrations-Aufgaben</td>
<td><strong>When to use:</strong><br>- Before starting a new feature<br>- When requirements are unclear<br>- Before refactoring or migration tasks</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Codebase erkunden und Kontext sammeln<br>✔ Betroffene Dateien und Module identifizieren<br>✔ Nummerierten Implementierungsplan erstellen<br>✘ <strong>Schreibt keinen Code</strong></td>
<td><strong>What it does:</strong><br>✔ Explore codebase and gather context<br>✔ Identify affected files and modules<br>✔ Create a numbered implementation plan<br>✘ <strong>Does not write code</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@planner Füge eine Authentifizierungsseite hinzu</code></td>
<td><strong>Usage:</strong> <code>@planner Add an authentication page</code></td>
</tr>
</table>

---

### `@developer` - Entwickler

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Strukturierte Feature-Implementierung mit Qualitätsprüfungen.</td>
<td><strong>Purpose:</strong> Structured feature implementation with quality checks.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Planung mit <code>@planner</code><br>- Zur Implementierung von Features, Seiten, API-Routen<br>- Für Datenbankänderungen und Migrationen</td>
<td><strong>When to use:</strong><br>- After planning with <code>@planner</code><br>- To implement features, pages, API routes<br>- For database changes and migrations</td>
</tr>
<tr>
<td><strong>Vierphasiger Prozess:</strong><br>1. <strong>Vorbereitung</strong> - Plan lesen, Code verstehen<br>2. <strong>Implementierung</strong> - Schrittweise, Fehler sofort beheben<br>3. <strong>Verifikation (PFLICHT)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → lokal testen<br>4. <strong>Dokumentation</strong> - Handbook aktualisieren</td>
<td><strong>Four-phase process:</strong><br>1. <strong>Preparation</strong> - Read plan, understand code<br>2. <strong>Implementation</strong> - Step by step, fix errors immediately<br>3. <strong>Verification (MANDATORY)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → test locally<br>4. <strong>Documentation</strong> - Update handbook</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@developer Implementiere diesen Plan: [Plan einfügen]</code></td>
<td><strong>Usage:</strong> <code>@developer Implement this plan: [paste plan]</code></td>
</tr>
</table>

---

### `@reviewer` - Code-Reviewer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Code-Review und Qualitätssicherung vor dem PR.</td>
<td><strong>Purpose:</strong> Code review and quality assurance before a PR.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Bevor ein PR erstellt wird<br>- Nach einer Implementierung zur Qualitätsprüfung<br>- Zur Sicherheits- und Performance-Analyse</td>
<td><strong>When to use:</strong><br>- Before creating a PR<br>- After implementation for quality check<br>- For security and performance audits</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Strukturierte Checkliste (Qualität, Next.js 16, Supabase-Sicherheit, Styling)<br>✔ Alle Checks ausführen (typecheck, lint, build)<br>✔ Review-Bericht mit Status (✅ / ⚠️ / ❌)</td>
<td><strong>What it does:</strong><br>✔ Structured checklist (quality, Next.js 16, Supabase security, styling)<br>✔ Run all checks (typecheck, lint, build)<br>✔ Review report with status (✅ / ⚠️ / ❌)</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@reviewer Überprüfe die Änderungen in src/app/dashboard/</code></td>
<td><strong>Usage:</strong> <code>@reviewer Review the changes in src/app/dashboard/</code></td>
</tr>
</table>

---

### `@anforderungsdokument` - Anforderungsdokument

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Vollständiges WAMOCON-Anforderungsdokument (9 Kapitel + .docx) für Web-/SaaS-Applikationen erstellen.</td>
<td><strong>Purpose:</strong> Create a complete WAMOCON requirements document (9 chapters + .docx) for web/SaaS applications.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Projekts<br>- Wenn eine App-Idee dokumentiert werden soll<br>- Bevor die Implementierung beginnt (Freigabe erforderlich)</td>
<td><strong>When to use:</strong><br>- Before starting a new project<br>- When an app idea needs to be documented<br>- Before implementation starts (approval required)</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Marktanalyse, Wettbewerb, Zielgruppe recherchieren<br>✔ 9-Kapitel-Dokument mit echten Daten befüllen<br>✔ Dokument als .docx generieren<br>✘ <strong>Nur Web/SaaS - keine mobilen Apps</strong><br>✘ <strong>Nur Quellen nicht älter als 1 Jahr</strong></td>
<td><strong>What it does:</strong><br>✔ Research market analysis, competition, target audience<br>✔ Fill 9-chapter document with real data<br>✔ Generate document as .docx<br>✘ <strong>Web/SaaS only - no mobile apps</strong><br>✘ <strong>Sources not older than 1 year only</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@anforderungsdokument Erstelle das Anforderungsdokument für [Projektname]</code></td>
<td><strong>Usage:</strong> <code>@anforderungsdokument Create the requirements document for [project name]</code></td>
</tr>
</table>

#### Schritt-für-Schritt-Anleitung / Step-by-Step Guide

**1.** Fülle `IDEA.md` im Projekt-Root aus.

**2.** Kopiere den Prompt unten und sende ihn im Chat. Die KI liest `IDEA.md` und `SKILL.md` automatisch - nichts einfügen, nichts ersetzen:

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

**3.** Dokument prüfen und zur Freigabe bei der Geschäftsführung einreichen.

**4.** Nach Freigabe: Implementierung mit `@planner` starten.

---

## Tools

| Tool | Pfad / Path | Zweck / Purpose |
|---|---|---|
| **next-browser** | `.github/skills/next-browser/SKILL.md` | CLI that exposes React DevTools and the Next.js dev overlay as shell commands - component trees, props, errors, performance, screenshots - structured output for AI agents. |
| **anforderungsdokument** | `.github/skills/anforderungsdokument/SKILL.md` | Drei Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx). Nur Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr. IDEA.md ausfüllen, Prompt 3 aufrufen, .docx generieren, zur Freigabe einreichen. |

### `next-browser` - AI-Driven Browser for Next.js

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td><code>@vercel/next-browser</code> ist ein CLI-Tool, das React DevTools und das Next.js Dev-Overlay als Shell-Befehle bereitstellt. Agents können den Browser steuern, Komponenten inspizieren, Fehler lesen und Performance prüfen - ohne manuell durch DevTools zu klicken.</td>
<td><code>@vercel/next-browser</code> is a CLI tool that exposes React DevTools and the Next.js dev overlay as shell commands. Agents can drive the browser, inspect components, read errors, and check performance - without manually clicking through DevTools.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Implementierung zur visuellen Verifikation<br>- Debugging von Runtime-Fehlern oder Re-Render-Problemen<br>- Performance-Analyse (Core Web Vitals, Hydration)<br>- PPR-Shell-Debugging</td>
<td><strong>When to use:</strong><br>- After implementation for visual verification<br>- Debugging runtime errors or re-render issues<br>- Performance analysis (Core Web Vitals, hydration timing)<br>- PPR shell debugging</td>
</tr>
<tr>
<td><strong>Installation:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Benötigt Node >= 20</td>
<td><strong>Install:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Requires Node >= 20</td>
</tr>
<tr>
<td><strong>Wichtigste Befehle:</strong><br><code>next-browser open &lt;url&gt;</code> - Browser starten<br><code>next-browser snapshot</code> - Accessibility-Tree + klickbare Refs<br><code>next-browser errors</code> - Build- und Runtime-Fehler<br><code>next-browser perf</code> - Core Web Vitals + Hydration<br><code>next-browser screenshot</code> - Viewport als PNG<br><code>next-browser tree</code> - React-Komponentenbaum</td>
<td><strong>Key commands:</strong><br><code>next-browser open &lt;url&gt;</code> - launch browser<br><code>next-browser snapshot</code> - accessibility tree + clickable refs<br><code>next-browser errors</code> - build and runtime errors<br><code>next-browser perf</code> - Core Web Vitals + hydration timing<br><code>next-browser screenshot</code> - viewport as PNG<br><code>next-browser tree</code> - React component tree</td>
</tr>
<tr>
<td><strong>Vollständige Dokumentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
<td><strong>Full documentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
</tr>
</table>

---

### `anforderungsdokument` - WAMOCON Entwicklungsprompts

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Der Skill stellt <strong>drei strukturierte Entwicklungsprompts</strong> bereit: (1) Tiefenanalyse und kritische Projektbewertung, (2) Marketing und UX/UI Rework, (3) Anforderungsdokument mit verbindlicher 9-Kapitel-Struktur (Zusammenfassung, Marktanalyse, Wettbewerb, Zielgruppe, Nutzen, Abhängigkeiten, Anforderungen V1, Chancen/Risiken, Umsetzungsplan + Quellenverzeichnis). <strong>Ausschließlich Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr.</strong> IDEA.md ausfüllen, Prompt aus <code>@anforderungsdokument</code> kopieren, .docx generieren, zur Freigabe einreichen.</td>
<td>The skill provides <strong>three structured development prompts</strong>: (1) deep analysis and critical assessment, (2) marketing and UX/UI rework, (3) requirements document with a mandatory 9-chapter structure (summary, market analysis, competition, target audience, benefits, dependencies, requirements V1, opportunities/risks, implementation plan + references). <strong>Web/SaaS only - no mobile apps. Sources not older than 1 year only.</strong> Fill in IDEA.md, copy prompt from <code>@anforderungsdokument</code>, generate .docx, submit for approval.</td>
</tr>
</table>

---

## Empfohlener Workflow / Recommended Workflow

<table>
<tr>
<th width="50%">DE Schritt</th>
<th width="50%">EN Step</th>
</tr>
<tr>
<td><strong>Phase 0 - Anforderungen (neues Projekt):</strong><br>
1. <code>IDEA.md</code> im Projekt-Root ausfüllen<br>
2. <strong><code>@anforderungsdokument</code></strong> aufrufen: Prompt kopieren und senden<br>
3. Dokument prüfen und zur Freigabe einreichen<br>
4. Nach Freigabe: Implementierung starten</td>
<td><strong>Phase 0 - Requirements (new project):</strong><br>
1. Fill in <code>IDEA.md</code> in the project root<br>
2. Call <strong><code>@anforderungsdokument</code></strong>: copy prompt and send<br>
3. Review document and submit for approval<br>
4. After approval: start implementation</td>
</tr>
<tr>
<td><strong>Phase 1 - Planung:</strong><br>
<strong><code>@planner</code></strong> - Aufgabe analysieren und Implementierungsplan erstellen</td>
<td><strong>Phase 1 - Planning:</strong><br>
<strong><code>@planner</code></strong> - Analyse the task and create an implementation plan</td>
</tr>
<tr>
<td><strong>Phase 2 - Implementierung:</strong><br>
<strong><code>@developer</code></strong> - Plan entgegennehmen und schrittweise implementieren</td>
<td><strong>Phase 2 - Implementation:</strong><br>
<strong><code>@developer</code></strong> - Receive plan and implement step by step</td>
</tr>
<tr>
<td><strong>Phase 3 - Qualitätsprüfung:</strong><br>
<strong><code>@reviewer</code></strong> - Code prüfen, bevor ein PR erstellt wird</td>
<td><strong>Phase 3 - Quality review:</strong><br>
<strong><code>@reviewer</code></strong> - Review code before creating a PR</td>
</tr>
</table>

---

## Eigene Agents erstellen / Creating Custom Agents

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.agent.md</code>-Datei in <code>.github/agents/</code> mit YAML-Frontmatter. Definiere Rolle, Workflow und Regeln.</td>
<td>Create a <code>.agent.md</code> file in <code>.github/agents/</code> with YAML frontmatter. Define role, workflow, and rules.</td>
</tr>
</table>

```yaml
---
name: MyAgent
description: >
  Description of what this agent does.
---
# Agent: MyAgent

## Role
...

## Workflow
...
```

---

## Wenn ein Agent schlecht antwortet / When an Agent Responds Poorly

<table>
<tr>
<th width="50%">DE Problem & Lösung</th>
<th width="50%">EN Problem & Solution</th>
</tr>
<tr>
<td><strong>Agent ignoriert Regeln aus der Instructions-Datei</strong><br>→ Prüfe das <code>applyTo</code>-Glob-Muster - stimmt es mit der Datei überein, die du bearbeitest? Teste mit: <code>**/*.ts</code> statt <code>src/**/*.ts</code></td>
<td><strong>Agent ignores rules from an Instructions file</strong><br>→ Check the <code>applyTo</code> glob pattern - does it match the file you are editing? Try broader patterns: <code>**/*.ts</code> instead of <code>src/**/*.ts</code></td>
</tr>
<tr>
<td><strong>Agent befolgt den Workflow nicht (z. B. überspringt typecheck)</strong><br>→ Öffne die <code>.agent.md</code>-Datei und mache die Anweisung strikter. Ersetze "sollte" durch "muss". Füge am Ende eine Zusammenfassung hinzu: <em>"Bevor du antwortest, liste alle abgeschlossenen Schritte auf."</em></td>
<td><strong>Agent does not follow the workflow (e.g. skips typecheck)</strong><br>→ Open the <code>.agent.md</code> file and make the instruction stricter. Replace "should" with "must". Add a reminder at the end: <em>"Before responding, list all completed steps."</em></td>
</tr>
<tr>
<td><strong>Agent schreibt schlechten Next.js-Code (z. B. falsche API-Nutzung)</strong><br>→ Füge ein konkretes Beispiel in die <code>nextjs.instructions.md</code> ein. Copilot folgt Beispielen besser als abstrakten Regeln.</td>
<td><strong>Agent writes bad Next.js code (e.g. wrong API usage)</strong><br>→ Add a concrete code example to <code>nextjs.instructions.md</code>. Copilot follows examples better than abstract rules.</td>
</tr>
<tr>
<td><strong>Agent "vergisst" den Kontext nach langen Gesprächen</strong><br>→ Starte ein neues Chat-Fenster. Langer Kontext verdrängt Instructions. Übergib den Plan explizit: <em>"Hier ist der Plan: [Plan]. Bitte implementiere Schritt 3."</em></td>
<td><strong>Agent "forgets" context after long conversations</strong><br>→ Start a new chat window. Long context pushes out instructions. Pass the plan explicitly: <em>"Here is the plan: [plan]. Please implement step 3."</em></td>
</tr>
<tr>
<td><strong>Agent antwortet auf Englisch statt Deutsch (oder umgekehrt)</strong><br>→ Füge in <code>copilot-instructions.md</code> eine Sprachanweisung hinzu: <em>"Antworte immer auf Deutsch."</em> - oder sprich den Agent in der gewünschten Sprache an.</td>
<td><strong>Agent responds in German instead of English (or vice versa)</strong><br>→ Add a language instruction to <code>copilot-instructions.md</code>: <em>"Always respond in English."</em> - or address the agent in your preferred language.</td>
</tr>
<tr>
<td><strong>Agent überschreitet den Plan / macht ungebetene Änderungen</strong><br>→ Füge in der <code>.agent.md</code> unter "Rules" hinzu: <em>"Ändere nur Dateien, die explizit im Plan genannt sind. Keine ungebetenen Refactors."</em></td>
<td><strong>Agent exceeds the plan / makes unrequested changes</strong><br>→ Add to the <code>.agent.md</code> under "Rules": <em>"Only modify files explicitly listed in the plan. No unrequested refactoring."</em></td>
</tr>
</table>

---

## Referenzen / References

- [GitHub Copilot Customisation Docs](https://docs.github.com/en/copilot/customizing-copilot)
- [awesome-copilot](https://github.com/github/awesome-copilot) - Beispiele und Best Practices / Examples and best practices

## ./FRONTEND_PROMPT.md
# STAMMFEUER - Frontend Developer Prompt

## Context

You are building the **frontend of Stammfeuer**, a collaborative family memory archive app.
The **backend is already fully implemented** and merged into `main`. You are working on the `feature/frontend` branch (created from `main`). Your job is to build all UI components, pages, and client-side logic on top of the existing backend.

Do NOT touch:
- `/src/app/api/**` (API route handlers - already done)
- `/src/lib/ai/**` (AI adapter stubs - already done)
- `/src/lib/supabase/**` (Supabase client utils - already done)
- `/src/types/database.ts` (Type definitions - already done)
- `/src/i18n/**` (i18n routing config - already done)
- `/src/middleware.ts` (Session + locale middleware - already done)
- `/supabase/**` (DB migrations + seed - already done)
- `/messages/de.json` and `/messages/en.json` (All translation strings are already there - use them)

---

## App Concept (read this first)

**Stammfeuer** is a private, generational family knowledge archive. It is NOT a social network, NOT a chat app, NOT a photo dump.

**Core concept - the Vault:**
- A **Vault** (`vaults` table) is one family's private archive. Think of it as "the Müller family's memory box".
- Each vault has **Members** (`vault_members`) with three roles: `initiator` (creator, full control), `contributor` (can add entries), `reader` (read-only).
- Each vault has **6 fixed categories**: Stories, Recipes, Traditions, Wisdom, Places, Photos. These are auto-created and cannot be deleted.
- Members add **Entries** (`entries`) to any category - text, voice transcription, or photo.
- Every week, the app suggests a **Prompt** from the library (e.g. "What was the most important piece of advice you ever received?") to motivate contribution.
- The **Vault Health** score (0-100) measures how complete the archive is: entries per category, active contributors, timeline coverage.

**User journey:**
1. User registers → profile created automatically
2. User creates a Vault → becomes `initiator`, 6 categories auto-seeded
3. User invites family via email → they receive a link, register/login, and join
4. Family contributes entries → prompted weekly
5. Archive grows → health score improves

**Free plan limits:** 5 members, 20 entries total. Pro/Familie+ = unlimited.

---

## Tech Stack

- **Framework:** Next.js 16.2.1, App Router, `src/app/[locale]/` routing
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first, no custom CSS unless unavoidable)
- **Icons:** Use `lucide-react` (install if not present)
- **Themes:** `next-themes` (already installed) - `dark`/`light`/`system`
- **i18n:** `next-intl` (already configured) - `useTranslations` hook for ALL text
- **Auth:** Supabase Auth via `@supabase/ssr` - already configured in middleware
- **Data fetching:** Server Components where possible, Client Components only for interactivity
- **Forms:** React `useState` or `useActionState` (no external form library needed)

---

## Core Design Principles

- **Warm, emotional, family-focused** - this is not a productivity tool
- **Accessible to ages 20-85** - large touch targets (min 44px), readable fonts (min 16px body)
- **Mobile-first** - majority of older users are on phone
- **Tagline (DE):** "Das Feuer deiner Familie, für immer am Brennen."
- **Tagline (EN):** "Your family's fire, burning forever."
- **Full marketing concept, brand guidelines and design language:** see `Marketing/MARKETING_KONZEPT.md` - read it before building any page or component.

---

## Brand and Design System

> The full specification is in `Marketing/MARKETING_KONZEPT.md`. The key rules are extracted here for convenience - always refer to the full document for edge cases.

### Brand Positioning

Stammfeuer is **not a productivity tool**. It is an emotional heritage archive. The design must feel like:
- An old family photo album - but digital and shared
- A campfire evening - warm, communal, timeless
- A home - not a SaaS dashboard

Every design decision must serve this emotional positioning.

### Color System

**Light mode:**

| Token | Hex | Usage |
|---|---|---|
| Primary CTA | `#d97706` (amber-600) | Buttons, active elements, links |
| Primary hover | `#f59e0b` (amber-500) | Hover states |
| Accent bg | `#fef3c7` (amber-100) | Badges, background highlights |
| Danger | `#b91c1c` (red-700) | Danger actions, secondary CTAs |
| Page bg | `#fdfaf6` | Main background (warm off-white, NOT pure white) |
| Card bg | `#f5f0e8` | Card surfaces |
| Border | `#e8dfd0` | Dividers, input borders |
| Body text | `#111827` (gray-900) | Primary text |
| Muted text | `#4b5563` (gray-600) | Secondary text |

**Dark mode:**

| Token | Tailwind | Usage |
|---|---|---|
| Page bg | `stone-900` (#1c1917) | Main background |
| Card bg | `stone-800` (#292524) | Card surfaces |
| Border | `stone-700` (#44403c) | Dividers, borders |
| Body text | `stone-50` (#fafaf9) | Primary text |
| Muted text | `stone-400` (#a8a29e) | Secondary text |
| Primary CTA | `amber-400` (#fbbf24) | Buttons, links in dark mode |
| Primary hover | `amber-300` (#fcd34d) | Hover in dark mode |

**Rules:**
- Never use pure black on pure white - too harsh for older eyes
- Amber dominates CTAs - never blue or purple
- All backgrounds use warm tones - never cool grey

### Typography

Font: **Geist** (already installed via `next/font`). Use the variable font weight.

| Role | Weight | Min Size |
|---|---|---|
| Hero headline | 800 | `text-5xl` (mobile) / `text-6xl` (desktop) |
| Page heading | 700 | `text-3xl` |
| Section heading | 700 | `text-2xl` |
| Body text | 400 | `text-base` (16px ABSOLUTE MINIMUM) |
| UI labels | 500-600 | `text-sm` (14px min) |
| Metadata | 400 | `text-xs` ONLY for timestamps/meta - never body |

Line height: always `leading-relaxed` for body text. Never tight for paragraphs.

### Logo

The Stammfeuer logo is a stylized **two-line flame** representing two generations burning together.

**Wordmark rendering:**
```tsx
<span className="font-bold text-gray-900 dark:text-stone-50">Stamm</span>
<span className="font-bold text-amber-600 dark:text-amber-400">feuer</span>
```

**SVG Flame Icon** (use this exact SVG for favicon, header, and hero):
```svg
<svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 4C20 4 8 14 8 26C8 33.7 13.4 40 20 40C26.6 40 32 33.7 32 26C32 14 20 4 20 4Z" fill="#d97706" opacity="0.9"/>
  <path d="M20 16C20 16 14 22 14 28C14 31.9 16.7 35 20 35C23.3 35 26 31.9 26 28C26 22 20 16 20 16Z" fill="#b91c1c" opacity="0.85"/>
  <path d="M20 24C20 24 17 27 17 30C17 31.7 18.3 33 20 33C21.7 33 23 31.7 23 30C23 27 20 24 20 24Z" fill="#fbbf24"/>
</svg>
```

### Category Icons (lucide-react mapping)

| Category slug | Icon | Color class |
|---|---|---|
| `stories` | `BookOpen` | `text-amber-600` |
| `recipes` | `UtensilsCrossed` | `text-orange-600` |
| `traditions` | `Sparkles` | `text-yellow-600` |
| `wisdom` | `Quote` | `text-emerald-600` |
| `places` | `MapPin` | `text-blue-600` |
| `photos` | `Camera` | `text-purple-600` |

Icon stroke width: always `strokeWidth={1.5}` (thinner than default, looks more elegant).

### Component Style Guide

**Buttons:**
```
Primary:   bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg
Secondary: border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg
Danger:    bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg
```
Minimum height: 44px (accessibility requirement for older users).

**Cards:**
```
bg-white dark:bg-stone-800
border border-[#e8dfd0] dark:border-stone-700
rounded-xl shadow-sm p-6
hover:shadow-md transition-shadow duration-200
```

**Inputs:**
```
border border-[#e8dfd0] dark:border-stone-600
rounded-lg px-4 py-3 bg-white dark:bg-stone-800
text-base (MINIMUM - never text-sm in inputs)
focus:ring-2 focus:ring-amber-500 focus:border-amber-500
```

**Category Badges:**
```
inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
stories:    bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300
recipes:    bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300
traditions: bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300
wisdom:     bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300
places:     bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300
photos:     bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300
```

### Animations

- Button hover: `transition-colors duration-150`
- Card hover: `transition-shadow duration-200`
- Modal open: opacity + scale (`opacity-0 scale-95` to `opacity-100 scale-100`), 200ms
- Toast: `translate-y-2 opacity-0` to `translate-y-0 opacity-100`, 300ms
- Hero flame: subtle `animate-pulse` or CSS keyframe loop (3s), amber glow

Always wrap animations in `@media (prefers-reduced-motion: no-preference)` to respect accessibility preferences.

### Spacing Rules

- Body text line height: `leading-relaxed` (never `leading-tight` for paragraphs)
- Card padding: `p-6` (desktop) / `p-4` (mobile)
- Section spacing: `py-16` (desktop) / `py-10` (mobile)
- Max content width: `max-w-2xl` (text), `max-w-4xl` (cards/grids), `max-w-7xl` (hero)

### Tailwind v4 - Custom Colors Setup

Tailwind v4 uses CSS variables for theming. Add these to `src/app/globals.css` inside the `@layer base` block:

```css
@layer base {
  :root {
    --color-page-bg: #fdfaf6;
    --color-card-bg: #f5f0e8;
    --color-border: #e8dfd0;
  }
}
```

Then use in components as `bg-[var(--color-page-bg)]`, `bg-[var(--color-card-bg)]`, `border-[var(--color-border)]`.

The `<body>` in `src/app/[locale]/layout.tsx` should already set: `className="bg-[#fdfaf6] dark:bg-stone-900 text-gray-900 dark:text-stone-50"`. Verify this is in place and add if missing.

---

## Directory Structure to Build

Create all files under `src/app/[locale]/`:

```
src/app/[locale]/
  page.tsx                        <- Homepage (landing page)
  layout.tsx                      <- Already done (do NOT edit)
  dashboard/
    page.tsx                      <- Authenticated dashboard
  vault/
    create/page.tsx               <- Create new vault
    [vaultId]/
      page.tsx                    <- Vault overview
      entries/
        page.tsx                  <- Entry list with filters
        new/page.tsx              <- New entry form
        [entryId]/page.tsx        <- Single entry view
      members/page.tsx            <- Member management
      settings/page.tsx           <- Vault settings
  invite/[token]/page.tsx         <- Accept invitation page
  auth/
    login/page.tsx
    register/page.tsx
    reset-password/page.tsx
  profile/page.tsx                <- User profile
  settings/page.tsx               <- App settings (theme, language, notifications)
  pricing/page.tsx                <- Pricing plans
  help/page.tsx                   <- FAQ + help for older users
  legal/
    impressum/page.tsx
    datenschutz/page.tsx
    agb/page.tsx

src/components/
  layout/
    Header.tsx                    <- Nav + locale switcher + theme toggle + auth state
    Footer.tsx                    <- Legal links + WAMOCON stamp
    Breadcrumbs.tsx
  ui/
    Button.tsx                    <- Primary, secondary, danger variants
    Card.tsx
    Input.tsx
    Textarea.tsx
    Select.tsx
    Badge.tsx                     <- For roles, categories
    Modal.tsx                     <- Accessible dialog
    Toast.tsx                     <- Notification toasts
    LoadingSpinner.tsx
    EmptyState.tsx
    Avatar.tsx
  vault/
    VaultCard.tsx
    VaultHealthChart.tsx          <- Bar chart (CSS only, no chart library)
    CategoryIcon.tsx              <- Flame/book/etc per category
  entries/
    EntryCard.tsx
    EntryForm.tsx                 <- Shared form for all 6 categories
    CategoryFields.tsx            <- Category-specific metadata fields
    VoiceInput.tsx                <- Browser Web Speech API recorder
    MediaUpload.tsx               <- Photo upload to Supabase Storage
  members/
    MemberList.tsx
    InviteForm.tsx
    RoleBadge.tsx
  prompts/
    PromptWidget.tsx              <- Weekly prompt card on dashboard
  cookie/
    CookieBanner.tsx              <- DSGVO cookie notice
```

---

## Page Specifications

### `/` - Homepage

A professional emotional marketing landing page. No productivity-tool aesthetics. Warm, personal, family.

**Section 1 - Hero (full viewport height on desktop):**
- Background: gradient `from-amber-600 via-orange-500 to-red-700`, dark overlay for text contrast
- Headline: large (`text-5xl md:text-6xl`), white, font-weight 800
  - DE: "Das Feuer deiner Familie, für immer am Brennen."
  - EN: "Your family's fire, burning forever."
- Subheading: `text-lg md:text-xl text-white/90`
  - DE: "Großmutters Rezepte. Opas Geschichten. Die Traditionen, die eure Familie zusammenhalten. Für immer bewahrt."
  - EN: "Grandma's recipes. Grandpa's stories. The traditions that hold your family together. Preserved forever."
- Two CTAs side by side: "Jetzt starten" (primary, white bg + amber text) and "Mehr erfahren" (ghost, white border)
- Flame SVG (from brand guidelines) centered above headline, `animate-pulse` (3s), 80px
- Scroll indicator arrow at bottom

**Section 2 - Problem (emotional hook):**
- Section title: "Was geht verloren, wenn niemand fragt?"
- Three columns (stacked on mobile):
  1. `BookOpen` icon - "Omas Gulaschrezept" - "Sie kennt es auswendig. Aber hat sie es je aufgeschrieben?"
  2. `Home` icon - "Die Geschichte des Familienhauses" - "Wer hat es gebaut? Welche Erinnerungen stecken darin?"
  3. `Sparkles` icon - "Die Tradition, die nur ihr kennt" - "Warum macht eure Familie das so? Bald weiß es niemand mehr."
- Background: warm `bg-[#f5f0e8]` / `dark:bg-stone-900`

**Section 3 - Feature cards (6 categories):**
- Grid 2-col (mobile) / 3-col (desktop)
- Each card: category icon (colored, 32px), category name, short description
- Use exact category icon + color mapping from Brand Design System above
- Background: white / dark:stone-800

**Section 4 - How it works:**
- Title: "So einfach geht's"
- Three numbered steps horizontally (stacked on mobile):
  1. "Vault anlegen" - "Erstelle ein privates Familienarchiv in 30 Sekunden."
  2. "Familie einladen" - "Lade Oma, Opa, Eltern und Geschwister ein."
  3. "Gemeinsam archivieren" - "Jeder tragt bei - per Sprache, Text oder Foto."
- Connecting line or arrow between steps on desktop

**Section 5 - Pull quote:**
- Full-width amber gradient background
- Large italic quote: "Das Feuer deiner Familie, für immer am Brennen."
- Below it: "Stammfeuer - Das generationsübergreifende Familienarchiv"

**Section 6 - Pricing teaser:**
- Three plan cards (Kostenlos / Pro / Familie+)
- Pro card: highlighted with `ring-2 ring-amber-600`, "Beliebt" badge
- Pricing anchor: "Weniger als ein Kaffee im Monat. Ein Erbe für immer."
- CTA: "Alle Pläne anzeigen" linking to `/pricing`

**Section 7 - Footer (see Footer component spec)**

No hardcoded strings - use `useTranslations`.

---

### `/dashboard` - Authenticated dashboard

Protected route - redirect to `/auth/login` if not authenticated.

**Empty state (no vault yet):**
- Full-page centered card: flame icon (80px), "Willkommen bei Stammfeuer"
- Subtitle: "Erstelle euer erstes Familienarchiv und lade deine Familie ein."
- Single CTA: "Vault anlegen" (amber primary button) → `/vault/create`

**With vault - sections:**
1. **Welcome header:** "Willkommen, [Name]" / "Welcome, [Name]". Show current vault name as subtitle.
2. **Vault health widget:** Fetches `GET /api/vaults/[vaultId]/health`. Shows a horizontal bar chart per category (CSS bars, Tailwind only). Shows health score as percentage ring or number. Shows inactive members list (names only).
3. **Active prompt widget:** Fetches `GET /api/vaults/[vaultId]/prompts`. Shows the weekly question with "Jetzt beantworten" CTA → `/vault/[vaultId]/entries/new?prompt=[id]`. Includes voice input button. If no prompts: show "Keine offenen Fragen diese Woche."
4. **Recent entries:** Last 5 entries across all categories. Entry cards with category badge, author avatar, date. "Alle Einträge" link → `/vault/[vaultId]/entries`.
5. **Timeline gaps:** Shows years with no entries as amber chips/badges. Label: "Jahre ohne Eintrag:"

---

### Entry Form - `/vault/[vaultId]/entries/new`

This is the most complex UI. It must handle all 6 categories differently.

**Shared fields (all categories):**
- Title (text input)
- Language selector (DE/EN toggle)
- "On behalf of" selector - proxy entry for family member
- Media upload (Supabase Storage, multiple images allowed)
- Save / Cancel buttons

**Category-specific fields:**

`stories`: Period start year + end year (optional number inputs)

`recipes`: Ingredients list (add/remove items), steps list (add/remove), origin story (textarea), servings (number), prep time (number)

`traditions`: Since year (number), introduced by (text), frequency (select: annual/monthly/weekly/special)

`wisdom`: Author (select from vault members), context (textarea)

`places`: Address (text), meaning (textarea), optional coordinates (hidden, from browser geolocation if user permits)

`photos`: Description (MANDATORY - enforce in UI before allowing save), multiple image upload

**Voice Input component:**
- Microphone button
- On click: start `window.SpeechRecognition` (Web Speech API, no API key)
- Show recording indicator (animated red dot)
- On stop: show transcript in editable textarea
- User must confirm/edit before it fills the form body
- Show toast if browser doesn't support it

**Translation tab:**
- Show "Original" and "Übersetzung" tabs
- "Übersetzung" tab shows: translated content if available, or a message "KI-Übersetzung folgt in Version 2" with info icon

---

### `/members` - Member management

Only initiators see the full management UI. Contributors/readers see the list only.

- Member list with avatar, name, family role, role badge, last contribution date
- Inactive members highlighted (no contribution ever)
- Invite form (modal): email, role selector, family role input
- Generated invite link + copy button
- Remove member (initiator only, with confirmation)
- Change role (initiator only)

---

### `/pricing` - Pricing page

**Page anchor text (above cards):** "Weniger als ein Kaffee im Monat. Ein Erbe für immer."

Three cards side by side (stacked on mobile). Centered layout `max-w-5xl mx-auto`.

**Free card:**
- Price: €0
- Subtitle: "Legt los, ohne Kreditkarte"
- Features: 5 Familienmitglieder, 20 Einträge, alle 6 Kategorien, Spracheingabe
- CTA: "Jetzt starten" (primary amber button)

**Pro card (highlighted):**
- `ring-2 ring-amber-600` border, "Beliebt" badge (amber pill, top right)
- Price: €9,90/Monat
- Annual anchor: "oder €79/Jahr - 33% sparen" (below price, `text-sm text-amber-700`)
- Subtitle: "Für Familien, die es ernst meinen"
- Features: Unbegrenzte Mitglieder, unbegrenzte Einträge, KI-Prompts, Medien-Upload, DSGVO-Export, Prioritäts-Support
- CTA: "Jetzt upgraden" - shows toast "Zahlung folgt in Kürze" (payment not yet implemented)

**Familie+ card:**
- Price: €14,90/Monat
- Annual anchor: "oder €119/Jahr - 33% sparen"
- Subtitle: "Für große Familien und mehrere Vaults"
- Features: Alles aus Pro, mehrere Vaults, früher Zugang zu neuen Features
- CTA: "Kontakt aufnehmen" (links to mailto:info@stammfeuer.app)

**Below cards:** Value anchor section
- "Was wäre es wert, Omas Rezept in 20 Jahren noch zu lesen?" (italic, centered)
- "Ein Fotoalbum-Druck kostet €40 bis 80. Stammfeuer Pro ist €79 für ein ganzes Jahr."

---

### Legal pages

Read content from `/legal-docs/` markdown files and render them. Replace placeholders:
- `{{PROJEKTNAME}}` → Stammfeuer
- `{{MONAT}}` → May
- `{{JAHR}}` → 2026
- `{{PROJEKT_EMAIL}}` → info@stammfeuer.app
- `{{BESCHREIBUNG_DES_ANGEBOTS}}` → die generationsübergreifende Archivierung von Familiengeschichten, Rezepten, Traditionen und Weisheiten

---

### `/auth/login` - Login page

**Not** a generic SaaS login. Warm, welcoming, family-feel.

- Full-page layout with warm gradient left panel (desktop) / hidden on mobile
  - Left panel: flame logo (large), tagline, short emotional copy: "Deine Familie wartet."
  - Right panel: login form on white/warm card
- Form fields: Email, Password
- Primary CTA: "Anmelden" (full-width amber button)
- Below form: "Noch kein Konto? Jetzt registrieren" link → `/auth/register`
- Magic link option: "Ohne Passwort anmelden" (collapsible / secondary) → calls `signInWithOtp`
- "Passwort vergessen?" → `/auth/reset-password`
- After login: redirect to `/{locale}/dashboard`

---

### `/auth/register` - Registration page

Same layout as login (left panel / right form panel).

- Form fields: Full name, Email, Password (min 8 chars), Password confirmation
- Show password strength indicator (simple: weak/medium/strong with color bar)
- Primary CTA: "Konto erstellen" (full-width amber button)
- After registration: redirect to dashboard with empty vault state
- Below form: "Bereits registriert? Anmelden" link → `/auth/login`
- Legal: "Mit der Registrierung stimmst du unserer [Datenschutzerklärung] und den [AGB] zu." (linked)

---

### `/auth/reset-password` - Password reset

- Single field: Email
- CTA: "Link senden"
- On submit: call `supabase.auth.resetPasswordForEmail(email)`, show success message: "Wir haben dir einen Link geschickt."
- Back link: "← Zurück zur Anmeldung"

---

### `/vault/create` - Create new vault

Protected route. Clean, focused, one-step form.

- Page title: "Neues Familienarchiv anlegen"
- Single field: Vault name (placeholder: "z.B. Familie Müller" or "Die Meiers")
- Helper text: "Wähle einen Namen, den alle Familienmitglieder wiedererkennen."
- CTA: "Archiv erstellen" (amber button)
- After creation: redirect to `/vault/[vaultId]` with a success toast: "Euer Familienarchiv wurde erstellt!"
- Show which 6 categories will be auto-created (visual preview: 6 colored category pills)

---

### `/vault/[vaultId]` - Vault overview

The "home" of a vault. Shows the full picture.

- **Header:** Vault name (large), member count, health score badge (e.g. "78 % vollständig")
- **Category grid (6 cards):** One card per category. Each shows: category icon + name, entry count, "Eintrag hinzufügen" link. Empty categories: dashed border, "Noch keine Einträge" text, CTA prominent.
- **Recent activity feed:** Last 10 entries across all categories. Compact list: author avatar, title, category badge, date.
- **Members preview:** Avatar stack (up to 5), "+ N weitere" if more. Link → `/vault/[vaultId]/members`
- **Quick actions bar** (sticky bottom on mobile): "Eintrag hinzufügen" (amber), "Mitglied einladen" (secondary)

---

### `/vault/[vaultId]/entries` - Entry list

- **Filter bar:** Category tabs (All + 6 categories), year range (from/to), member filter dropdown
- **Entry cards grid** (2 cols mobile / 3 cols desktop): `EntryCard` component
- **Empty state** per category: category icon (large, 64px), "Noch keine [Kategorie]-Einträge", CTA "Ersten Eintrag hinzufügen"
- **FAB** (floating action button, mobile): amber "+" button → `/vault/[vaultId]/entries/new`

---

### `/vault/[vaultId]/entries/[entryId]` - Single entry view

- Full-page view of one entry
- **Header:** Category badge, title (large), author name + avatar, date
- **Content:** Main text (large, `leading-relaxed`). Formatted as prose.
- **Metadata section** (collapsible on mobile): category-specific fields (years, ingredients, etc.)
- **Media gallery:** Grid of attached photos (if any). Click to expand lightbox.
- **Translation tab:** "Original" / "Übersetzung" tabs. Translation shows stub message if not available.
- **Actions** (initiator / own entry): Edit button, Delete button (with confirmation modal)
- **Back link:** "← Alle Einträge" breadcrumb

---

### `/vault/[vaultId]/settings` - Vault settings

Only accessible to `initiator` role. Redirect contributors/readers to vault overview.

- **Vault name:** Edit inline or with a form. Save on blur or explicit button.
- **Danger zone** (red-bordered card at bottom):
  - "Vault löschen" button - opens confirmation modal with vault name re-entry
  - Deletion is permanent - warn clearly

---

### `/invite/[token]` - Accept invitation

This page is hit from an email link. The user may or may not be logged in.

**If not logged in:**
- Show a welcoming page: flame icon, "Du wurdest zu [Vault Name] eingeladen!", inviting family member's name
- Two options: "Anmelden" and "Konto erstellen" (both amber, side by side)
- Store `?redirect=/invite/[token]` in the URL so auth redirects back here

**If logged in:**
- Call `GET /api/invite/[token]` to validate
- If valid: show vault name, inviter name, role. CTA: "Einladung annehmen" → calls `POST /api/invite/[token]` → redirects to `/vault/[vaultId]`
- If invalid/expired: error state with "Link ungültig oder abgelaufen" + link to homepage

---

### `/profile` - User profile

- **Avatar section:** Show current avatar (or initials fallback). Upload new photo → Supabase Storage `avatars` bucket.
- **Edit form:** Full name, Family role (free text, e.g. "Oma", "Onkel Peter"), Email (read-only - shown for reference)
- **DSGVO section** (labeled "Datenschutz", at bottom):
  - "Alle meine Daten herunterladen" → calls `GET /api/user/export` → downloads JSON
  - "Konto löschen" (red, danger) → modal with "Diese Aktion ist unwiderruflich." + confirmation → calls `DELETE /api/user/delete`

---

### `/settings` - App settings

- **Theme:** Radio group - Hell / Dunkel / System (calls `next-themes` `setTheme`)
- **Language:** Radio group - Deutsch / English (updates locale via next-intl router)
- **Notifications:** Toggle for weekly prompt emails (UI only for now - backend stub)

---

### `/help` - Help page (critical for older users)

This page is **especially important** for the 65-85 age group. Design it clearly and gently.

- **FAQ accordion:** Large touch targets (min 56px height per item), generous font size (`text-lg` for questions, `text-base` for answers)
- FAQ topics:
  1. "Wie erstelle ich ein Familienarchiv?"
  2. "Wie lade ich meine Familie ein?"
  3. "Wie füge ich einen Eintrag hinzu?"
  4. "Wie nutze ich die Spracheingabe?"
  5. "Wo sind meine Daten gespeichert? Wer kann sie sehen?"
  6. "Wie kann ich Stammfeuer auf meinem Handy nutzen?"
  7. "Was kostet Stammfeuer?"
  8. "Wie lösche ich mein Konto?"
- **Contact box:** "Brauchst du Hilfe?" - mailto:info@stammfeuer.app button (amber)
- **Video placeholder card:** "Schritt-für-Schritt Video folgt in Version 2" (dashed border, info icon)

---

### Cookie Banner

- Appears at bottom on first visit (persisted in localStorage)
- Message from `messages/de.json` `cookie.message`
- Two buttons: "Verstanden" (accept + dismiss) and "Mehr erfahren" (link to /legal/datenschutz)
- No tracking cookies are set - this is purely informational

---

## API Integration Reference

All API calls use the Supabase client. For Server Components use `createSupabaseServerClient()` from `@/lib/supabase/server`. For Client Components use `createSupabaseBrowserClient()` from `@/lib/supabase/client`.

| Action | Method | Endpoint |
|--------|--------|----------|
| List vaults | GET | `/api/vaults` |
| Create vault | POST | `/api/vaults` |
| List entries | GET | `/api/vaults/[vaultId]/entries` |
| Create entry | POST | `/api/vaults/[vaultId]/entries` |
| List members | GET | `/api/vaults/[vaultId]/members` |
| Invite member | POST | `/api/vaults/[vaultId]/members` |
| Vault health | GET | `/api/vaults/[vaultId]/health` |
| Active prompts | GET | `/api/vaults/[vaultId]/prompts` |
| Validate invite | GET | `/api/invite/[token]` |
| Accept invite | POST | `/api/invite/[token]` |
| Export data | GET | `/api/user/export` |
| Delete account | DELETE | `/api/user/delete` |

### Key API Response Shapes

**`GET /api/vaults/[vaultId]/health` response:**
```ts
{
  vault_id: string
  health_score: number          // 0-100
  entries_per_category: {
    category_slug: string       // 'stories' | 'recipes' | 'traditions' | 'wisdom' | 'places' | 'photos'
    category_name: string
    entry_count: number
  }[]
  inactive_members: {
    user_id: string
    full_name: string
    family_role: string | null
  }[]
  timeline_gaps: number[]       // years with no entries, e.g. [2018, 2019, 2022]
}
```

**`GET /api/vaults/[vaultId]/prompts` response:**
```ts
{
  prompts: {
    id: string
    prompt_text: string         // the question in current locale
    category_slug: string
    life_phase: string
    answered: boolean
  }[]
}
```

**`GET /api/vaults/[vaultId]/entries` response (array of):**
```ts
{
  id: string
  title: string
  body: string | null
  category_slug: string
  language: 'de' | 'en'
  created_at: string
  author: { full_name: string; avatar_url: string | null }
  media: { url: string; alt: string | null }[]
  metadata: Record<string, unknown>   // category-specific fields
}
```

**`POST /api/vaults/[vaultId]/entries` request body:**
```ts
{
  title: string
  body?: string
  category_slug: string
  language: 'de' | 'en'
  on_behalf_of?: string         // user_id of another member
  metadata?: {
    // stories
    period_start?: number; period_end?: number
    // recipes
    ingredients?: string[]; steps?: string[]; origin_story?: string; servings?: number; prep_time?: number
    // traditions
    since_year?: number; introduced_by?: string; frequency?: string
    // wisdom
    context?: string
    // places
    address?: string; coordinates?: string; meaning?: string
    // photos
    description?: string        // REQUIRED for photos
  }
}
```

**Error responses (freemium limits):**
```ts
// HTTP 402
{ error: 'freemium_entry_limit' }
{ error: 'freemium_member_limit' }
```

Auth endpoints use Supabase directly:
```ts
// Server Component: check session
const { data: { user } } = await supabase.auth.getUser()

// Client Component: sign in
await supabase.auth.signInWithPassword({ email, password })

// Client Component: sign up
await supabase.auth.signUp({ email, password, options: { data: { full_name } } })

// Client Component: magic link
await supabase.auth.signInWithOtp({ email })

// Client Component: sign out
await supabase.auth.signOut()
```

---

## Translation Usage

**Always** use `useTranslations` in Client Components and synchronous Server Components:
```tsx
// Synchronous Server Component or Client Component
import { useTranslations } from 'next-intl'
const t = useTranslations('auth')
return <h1>{t('loginTitle')}</h1>

// Client Component - must mark with 'use client'
'use client'
import { useTranslations } from 'next-intl'
```

**Async Server Components** must use `getTranslations` (awaitable):
```tsx
// Async Server Component
import { getTranslations } from 'next-intl/server'
export default async function Page() {
  const t = await getTranslations('auth')
  return <h1>{t('loginTitle')}</h1>
}
```

All keys are defined in `/messages/de.json` and `/messages/en.json`.
Namespaces: `nav`, `auth`, `vault`, `members`, `categories`, `entries`, `prompts`, `dashboard`, `freemium`, `pricing`, `profile`, `settings`, `legal`, `cookie`, `errors`, `common`

---

## Key Component Specifications

### `layout/Header.tsx`

The global navigation. Rendered in `src/app/[locale]/layout.tsx`.

**Desktop layout (flex, full-width):**
- Left: Logo (`StammfeuerLogo` SVG + wordmark, links to `/`)
- Center: Primary nav links (only shown when authenticated): Dashboard, Vaults, Prompts
- Right: Language switcher (DE | EN toggle), Theme toggle (sun/moon icon), Auth state (Avatar + name dropdown OR "Anmelden" button)

**Mobile layout (hamburger):**
- Left: Logo
- Right: Hamburger icon (3 lines, `Menu` from lucide) + auth avatar
- Drawer/sheet slides in from right on click - contains all nav items
- Drawer closes on outside click and on nav

**Auth state in header:**
- Unauthenticated: "Anmelden" (ghost button) + "Registrieren" (amber button)
- Authenticated: Avatar circle (initials or photo) + dropdown (Profil, Einstellungen, Abmelden)

**Language switcher:** Two text buttons "DE" and "EN", active one is `font-semibold text-amber-600`, inactive is `text-gray-500`. On click: use `useRouter` + `usePathname` from `next-intl/navigation` to switch locale.

**Theme toggle:** `Sun` icon (light) / `Moon` icon (dark) / `Monitor` icon (system). Cycles through modes. Uses `useTheme()` from `next-themes`.

---

### `layout/Footer.tsx`

- Max-width `max-w-7xl mx-auto`, padded `py-12 px-6`
- **Top row:** Logo (small, 24px) + tagline on left, legal links on right (Impressum, Datenschutz, AGB)
- **Bottom row:** WAMOCON company stamp (from `legal-docs/company-stamp.md`) on left, language switcher on right, copyright center
- **WAMOCON stamp:** Small text "Entwickelt von WAMOCON GmbH" with subtle styling. Read the stamp text from `legal-docs/company-stamp.md`.
- Dark/light: background `bg-[#f5f0e8] dark:bg-stone-900`, `border-t border-[#e8dfd0] dark:border-stone-800`

---

### `vault/VaultCard.tsx`

Props: `{ vault: { id, name, created_at }, memberCount: number, entryCount: number, healthScore: number }`

- Card with warm border, rounded-xl, hover shadow
- Top: Vault name (`text-xl font-semibold`), health score badge (right-aligned, amber if >60, red if <40)
- Stats row: member count with `Users` icon, entry count with `BookOpen` icon
- Footer: "Öffnen" link button → `/vault/[vaultId]`

---

### `entries/EntryCard.tsx`

Props: `{ entry: { id, title, body, category_slug, created_at, author, media } }`

- Card, rounded-xl, hover shadow
- Top: Category badge (colored chip), author avatar (small, 24px) + name, date (relative, e.g. "vor 3 Tagen")
- Title: `text-lg font-semibold`, max 2 lines (`line-clamp-2`)
- Preview text: first 100 chars of body, faded out. `text-sm text-gray-600 dark:text-stone-400 line-clamp-3`
- If media: thumbnail of first image (right side, 64x64, rounded-lg, object-cover)
- Click: navigates to `/vault/[vaultId]/entries/[entryId]`

---

### `ui/Avatar.tsx`

Props: `{ src?: string | null, name: string, size?: 'sm' | 'md' | 'lg' }`

- If `src`: show circular image
- If no `src`: show circle with initials (first letter of first + last name), background color derived from name (use a simple hash → amber/orange/red/emerald shades)
- Sizes: `sm` = 24px, `md` = 40px, `lg` = 64px

---

### `ui/EmptyState.tsx`

Props: `{ icon: LucideIcon, title: string, description?: string, action?: { label: string, href: string } }`

- Centered, `py-16`, icon (64px, `text-amber-400`), title (`text-xl font-semibold`), description (`text-gray-500`), optional CTA button
- Background: subtle dashed border card in some contexts (entry list, member list)

---

### Loading and Skeleton States

Every data-fetching page/component needs a loading state. Use Tailwind `animate-pulse` skeleton patterns:

```tsx
// Skeleton card example
<div className="rounded-xl bg-[#f5f0e8] dark:bg-stone-800 animate-pulse p-6">
  <div className="h-4 bg-[#e8dfd0] dark:bg-stone-700 rounded w-3/4 mb-3" />
  <div className="h-3 bg-[#e8dfd0] dark:bg-stone-700 rounded w-1/2" />
</div>
```

Create `loading.tsx` files next to each `page.tsx` that shows skeleton versions of the page layout. Next.js App Router automatically uses these during navigation.

---

## Auth Flow

1. Unauthenticated users hitting `/dashboard` or `/vault/**` → redirect to `/{locale}/auth/login`
2. After login → redirect to `/{locale}/dashboard`
3. If user has no vault → show vault creation prompt on dashboard
4. Invite flow: `/invite/[token]` → if not logged in, redirect to login with `?redirect=/invite/[token]`

---

## Freemium Limits

When API returns `{ error: 'freemium_entry_limit' }` (HTTP 402):
- Show modal with amber header, flame icon
- Headline: "Limit erreicht"
- Body: "Mit Pro hast du unbegrenzte Einträge und unbegrenzte Mitglieder. Weniger als ein Kaffee im Monat."
- Primary CTA: "Jetzt upgraden" → `/pricing`
- Secondary: "Schliessen" (ghost button)

When API returns `{ error: 'freemium_member_limit' }` (HTTP 402):
- Same pattern, body: "Du hast das Limit von 5 Familienmitgliedern erreicht. Mit Pro ladet ihr unbegrenzt ein."

**Proactive upgrade triggers (soft nudges - no blocking):**
- At 80 % of entry limit (16/20): info banner on vault page "Fast voll - hol dir Pro"
- After adding 4th member: tooltip "Noch eine Person? Mit Pro unbegrenzt einladen."
- After first successful entry save: dismissable card "Das war einfach. Mit Pro unbegrenzt."

---

## Responsive Breakpoints

| Breakpoint | Use |
|------------|-----|
| `sm` (640px) | Mobile landscape |
| `md` (768px) | Tablet |
| `lg` (1024px) | Desktop |

Mobile-first approach. Navigation collapses to hamburger below `md`.

---

## Accessibility Requirements

- All interactive elements: min 44×44px touch target
- Form labels: always visible (no placeholder-only labels)
- Images: meaningful alt text
- Keyboard navigation: all interactive elements reachable by Tab
- Color contrast: WCAG AA minimum
- Older user consideration: font size min 16px body, 20px+ for headlines

---

## What NOT to do

- Do NOT install chart libraries (Recharts, Chart.js) - use CSS bars only
- Do NOT install form libraries (React Hook Form, Formik) - use native React state
- Do NOT install UI component libraries (shadcn, MUI, Chakra) - build components from Tailwind
- Do NOT hardcode any user-facing strings - always `useTranslations`
- Do NOT use em dash (—) in any text or code
- Do NOT use `"use client"` unless the component truly needs interactivity
- Do NOT skip the voice input implementation - it is mandatory per requirements (A-03)

---

## Quality Gates (run before declaring done)

```bash
npm run typecheck   # must be 0 errors
npm run lint        # must be 0 errors
npm run build       # must succeed with 0 errors
```

---

## Deliverables

1. All pages listed in the directory structure above
2. All components listed above
3. `loading.tsx` skeleton files for dashboard, vault overview, entry list, entry detail
4. Cookie banner
5. Responsive navigation (header + mobile hamburger)
6. Light + dark mode working on all pages
7. DE + EN translations working (language switcher in header)
8. Auth flow (login, register, magic link, password reset)
9. Voice input component using Web Speech API
10. Vault health bar chart (CSS only)
11. `npm run build` passing with 0 errors

## ./HOWTO.md
# HOWTO - Project Setup & Deployment Guide

> 🎉 **Herzlichen Glückwunsch zur Einrichtung! / Congratulations on setting up!**
> Du kannst dieses Dokument nach Abschluss der Einrichtung löschen oder als Referenz behalten.
> You can delete this HOWTO document once your setup is complete, or keep it for future reference.

> 📖 **Lies die [AGENTS.md](AGENTS.md) Datei, um GitHub Copilot optimal und produktiv zu nutzen.**
> **Read the [AGENTS.md](AGENTS.md) file to use GitHub Copilot in an optimised and productive way.**

---

## DE Deutsch

---

### Prozessübersicht

Folge diesen Schritten in der angegebenen Reihenfolge, um vom Template zur Produktion zu gelangen:

1. **GitHub Repo erstellen** - Nutze dieses Template, um ein neues Repository in der Wamocon GitHub Organisation zu erstellen.
2. **Repo klonen** - Klone es auf deinen Rechner und führe `npm install` aus.
3. **Pre-commit Hook installieren** - Führe `bash hooks/install.sh` aus. Einmalig nach dem Klonen - schützt dich davor, Geheimnisse versehentlich zu pushen.
4. **GitHub Workflow-Datei überprüfen** - Öffne `.github/workflows/deploy.yml` und `.github/workflows/pr-pipeline.yml`, überprüfe, dass `Wamocon/github_workflow` die korrekte Referenz ist.
5. **`.env.local` aktualisieren & Supabase verbinden** - Kopiere `.env.example` → `.env.local`, erstelle ein Remote-Supabase-Projekt und trage die Zugangsdaten ein.
6. **Lokal starten & Entwicklung beginnen** - Führe `npm run dev` aus und beginne mit der Entwicklung.
7. **GitHub-Organisationseinstellungen: Vercel-App Zugriff gewähren** - Gehe zu den Organisationseinstellungen auf GitHub, suche die Vercel GitHub-App und gewähre ihr Zugriff auf dein neues Repo. Nur so erscheint das Repo in der Vercel-Importliste.
8. **Repo vorübergehend öffentlich machen & bei Vercel importieren** - Stelle das Repo temporär auf öffentlich und importiere es in Vercel.
9. **Vercel Project ID holen** - Kopiere die Vercel Project ID aus den Vercel-Projekteinstellungen.
10. **Vercel Project ID zu GitHub Secrets hinzufügen** - Füge `VERCEL_PROJECT_ID` zu den GitHub Actions Secrets deines Repos hinzu.
11. **Repo auf intern umstellen** - Ändere die Sichtbarkeit des Repos zurück auf intern.
12. **Erstes manuelles Deployment** - Gehe zu `Actions → "Deploy to Vercel" → Run workflow` und wähle `production`.

> 📖 **Für detaillierte Informationen, lies weiter unten.**

---

### 1. Klonen & Einrichten

```bash
# Repository klonen
git clone https://github.com/Wamocon/<dein-repo-name>.git
cd <dein-repo-name>

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen kopieren
cp .env.example .env.local

# Pre-commit Hook installieren (einmalig, direkt nach npm install)
bash hooks/install.sh

# Entwicklungsserver starten (mit Turbopack für schnelles Hot-Reload)
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

**Verfügbare Skripte:**

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server mit Turbopack (Hot Reload) |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run start` | Startet den Produktionsserver |
| `npm run lint` | Führt ESLint aus |
| `npm run typecheck` | Führt TypeScript-Typprüfung aus |

---

### 1b. Git-Workflow & Branch-Strategie

> 💡 **Arbeite nach dem ersten Push immer auf einem Branch - nie direkt auf `main`/`master`.**

**Empfohlener Ablauf:**

```bash
# Einmalig: Ersten Stand auf main/master pushen
git add .
git commit -m "chore: initial setup"
git push origin <main-oder-master>

# Ab jetzt: Immer auf einem Feature-Branch arbeiten
git checkout -b feature/mein-feature

# Änderungen lokal testen, dann committen
npm run dev        # testen
npm run typecheck  # Typfehler prüfen
npm run lint       # Lint prüfen

git add .
git commit -m "feat: beschreibung der Änderung"
git push origin feature/mein-feature
```

**Wichtige Regeln:**

- **Lokal testen, bevor du pushst.** Führe `npm run typecheck` und `npm run lint` aus, bevor du Änderungen pushst.
- **Alle Änderungen vor dem PR-Öffnen pushen.** Jeder neue Push auf einen offenen PR triggert automatisch die GitHub Actions - das verbraucht GitHub Actions-Minuten.
- **Nur einen PR auf einmal offen halten**, bis er gemergt ist.

> ⚠️ **Warum das wichtig ist:** Jeder Push auf einen offenen PR löst die PR Pipeline aus (Auto-Fix + Typecheck + Lint). Teste erst lokal - dann push, dann PR.

---

### 1c. Pre-commit Hook - Geheimnis-Scanner

Der Pre-commit Hook verhindert, dass API-Schlüssel, Tokens, Passwörter oder andere Geheimnisse versehentlich in GitHub eingecheckt werden. Der Hook scannt alle für den Commit vorgesehenen Dateien, **bevor** der Commit abgeschlossen wird.

#### Installation

```bash
# Einmalig nach dem Klonen ausführen - nie wieder nötig:
bash hooks/install.sh
```

> ✅ **Wie oft?** Genau **einmal** - direkt nach `npm install` beim ersten Einrichten des Repos. Nach der Installation läuft der Hook automatisch vor **jedem** `git commit`.

#### Was der Hook prüft

| Muster | Beispiel |
|--------|---------|
| AWS-Schlüssel | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub-Tokens | `ghp_...`, `github_pat_...` |
| Vercel-Token | `VERCEL_TOKEN = abc123...` |
| Private Keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Datenbankverbindungen | `postgres://user:password@host` |
| Generische Tokens | `api_key =`, `client_secret =`, `password =` |
| JWT-Tokens | `eyJ...` (vollständige `header.payload.signature`-Form) |
| Supabase Service Role | `service_role = eyJ...` |
| `.env`-Dateien | `.env`, `.env.local`, `.env.production` |

#### Wenn ein Commit blockiert wird

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**Lösung:**
1. Entferne das Geheimnis aus der Datei.
2. Speichere es in deiner `.env.local` (ist bereits in `.gitignore` eingetragen).
3. Nutze GitHub Actions Secrets für CI/CD-Werte.

**Bei einem Falsch-Positiv** (z.B. ein Beispielwert in der Doku):
Füge den Kommentar `# notsecret` am Ende der betroffenen Zeile hinzu.

**Notfall-Bypass** (nur im absoluten Ausnahmefall - niemals für echte Geheimnisse!):
```bash
git commit --no-verify -m "deine Nachricht"
```

---

### 2. Supabase Setup & Warnung

> ⚠️ **KRITISCH: Sobald du einen Supabase-Account hast, speichere alle Testdaten direkt dort.**
>
> **Lege Testdaten NICHT als lokale Dateien im Projektverzeichnis ab** (z.B. JSON-Fixtures, SQL-Dumps). Füge Daten stattdessen direkt in dein Supabase-Projekt ein - über das Dashboard, per MCP-Tool oder per Migrations-Skript.

**Schritte:**

1. Gehe zu [supabase.com](https://supabase.com) und erstelle ein neues Projekt.
2. Kopiere die **Project URL**, den **Anon Key** und den **Service Role Key** aus  
   `Project Settings → API`.
3. Trage sie in deine `.env.local` Datei ein:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
   SUPABASE_SERVICE_ROLE_KEY=dein-service-role-key
   ```

---

### 2b. Lokales Supabase Setup via Docker (Optional)

> 💡 **Dieser Schritt ist optional.** Standardmäßig verbindest du dich direkt mit einem Remote-Supabase-Projekt (siehe Abschnitt 2). Nur wenn du lieber vollständig lokal entwickelst, ohne Internetverbindung zu Supabase, verwende dieses Setup.

Für ein vollständig lokales Supabase-Setup mit Docker und einer migrations-basierten Entwicklung, kopiere diesen Prompt in deinen KI-Assistenten (z.B. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Lokale Supabase-Oberfläche im Browser öffnen

Sobald der lokale Docker-Stack läuft (`npx supabase start`), stellt Supabase eine vollständige Studio-Oberfläche bereit:

| Service | URL | Beschreibung |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Datenbank-UI: Tabellen, SQL-Editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (dein App-Endpoint) |
| **PostgreSQL** | `localhost:54322` | Direktzugriff (z.B. via pgAdmin, TablePlus) |
| **Inbucket (E-Mail)** | `http://localhost:54324` | Lokaler E-Mail-Dienst für Auth-Mails |

> 💡 Die exakten Ports werden nach `npx supabase start` auch in der Konsole ausgegeben. Der Befehl `npx supabase status` zeigt sie jederzeit an.

**Lokale Umgebungsvariablen:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<aus supabase status kopieren>
SUPABASE_SERVICE_ROLE_KEY=<aus supabase status kopieren>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Supabase MCP für Migrationen verwenden

Der Supabase MCP (Model Context Protocol) Server ermöglicht es deinem KI-Coding-Assistenten (z.B. GitHub Copilot, Cursor), Migrationen und Tabellen direkt zu erstellen und zu verwalten.

- Migrationen werden in `supabase/migrations/` gespeichert.
- Nutze die MCP-Tools, um Tabellen zu erstellen, Schemas zu ändern und Indizes zu verwalten.

#### Arbeiten mit mehreren Schemas

Standardmäßig macht Supabase nur das `public`-Schema über die API verfügbar. Wenn du eigene Schemas brauchst:

**1. Schema erstellen:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Berechtigungen vergeben:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Schema über die Supabase API zugänglich machen:**
Gehe zu `Project Settings → API → Exposed schemas` und füge deinen Schema-Namen hinzu.

---

### 4. GitHub Workflow Konfiguration

Dieses Projekt nutzt den **zentralen Wamocon CI/CD-Workflow** aus [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Übersicht der drei Workflows

| Workflow | Datei | Auslöser | Was es tut |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatisch** bei jedem PR auf `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manuell** - kein Auto-Trigger | Baut das Projekt via Vercel CLI und deployed auf Vercel |
| **LP Generator** | `lp-generator.yml` | **Manuell** - kein Auto-Trigger | Generiert eine Landing Page in einem neuen Repo |

> ⚠️ **Kein automatisches Deployment:** Weder ein PR noch ein Push auf `main` startet automatisch ein Deployment. Alle Deployments werden manuell über den Actions-Tab gestartet.

#### Was du tun musst

1. Überprüfe, dass `Wamocon/github_workflow` die korrekte Org/Repo-Referenz ist.
2. Aktiviere Workflow-Schreibrechte:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Füge **ein einziges Secret** zu deinem Repository hinzu:
   - Gehe zu `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Wert: *(siehe Abschnitt 5 unten)*

> ✅ **Alle anderen benötigten Secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) sind **bereits auf GitHub-Organisationsebene konfiguriert**.

#### Manuelles Deployment starten

```
Repository auf GitHub → Actions → "Deploy to Vercel" → Run workflow
→ Environment auswählen: production oder preview
→ Run workflow klicken
```

---

### 5. Vercel Deployment-Strategie

#### Schritt 1: GitHub-Org Vercel-App Zugriff gewähren (Einmalig, Kritisch)

> ⚠️ **Dieser Schritt muss VOR dem Vercel-Import durchgeführt werden.** Ohne ihn erscheint dein Repo nicht in der Vercel-Importliste - auch wenn es öffentlich ist.

1. Gehe zu **GitHub → Wamocon Organisation → Settings**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Suche die **Vercel**-App in der Liste der installierten GitHub Apps.
3. Klicke auf **Configure**.
4. Scrolle zu **Repository access**.
5. Wähle **"Only select repositories"** und füge dein neues Repo hinzu.
6. Klicke **Save**.

#### Schritt 2: Erstmalige Bereitstellung (Einmalig)

1. **Repo vorübergehend öffentlich machen**  
   `Repository → Settings → General → Change visibility → Public`
2. Gehe zu [vercel.com](https://vercel.com) → **Add New Project** → **Import** → dein Repo auswählen.
3. Deploye das Projekt (Vercel erkennt Next.js automatisch).
4. **Vercel Project ID kopieren:**  
   `Vercel Project → Settings → General → Project ID` → ID kopieren.
5. **Zu GitHub Secrets hinzufügen:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Wert: die kopierte ID.
6. **Repo auf intern zurücksetzen:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **Nach diesem einmaligen Setup** deployt die GitHub Action via Vercel CLI - Vercel sieht nicht mehr, wer committed, und es gibt keine Team-Seat-Fehler bei einem privaten Hobby-Account.

#### Schritt 3: Umgebungsvariablen in Vercel eintragen

> ⚠️ **WICHTIG:** Gehe zu `Vercel Project → Settings → Environment Variables` und füge **alle** Variablen aus deiner `.env.local` hinzu. Ohne diese wird der Build **fehlschlagen**.

#### Deployment-Ablauf (nach dem Setup)

| Auslöser | Ergebnis |
|---|---|
| PR auf `main`/`master` | PR Pipeline läuft automatisch (kein Deployment) |
| Merge auf `main`/`master` | Kein automatisches Deployment |
| **Manuelles Workflow-Start** | Deployment nach Auswahl: `production` oder `preview` |

**Manuell deployen:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (für die Live-URL)
→ environment: preview     (für eine Test-URL)
→ db_schema: (leer lassen - Vercel-Umgebungsvariablen werden genutzt)
```

---

### 6. Domain-Verwaltung

1. **Sichere eine Domain** für deine Anwendung über [Strato](https://www.strato.de).
2. Gehe in den Vercel-Projekteinstellungen zu `Settings → Domains` und füge deine Domain hinzu.
3. Konfiguriere die DNS-Einträge bei Strato wie von Vercel angegeben (typischerweise CNAME oder A-Record).

---

### 7. Projekt-Checkliste

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Hauptprozess (Kernfunktion)
- [ ] Video (Demo / Tutorial)
- [ ] Domain (über Strato gesichert)

---

### 8. Landing Page Generator

Das Workflow-File `.github/workflows/lp-generator.yml` generiert eine Landing Page für diese App.

#### Was der Workflow tut

- Liest den Inhalt dieses Repos aus
- Verwendet ein konfigurierbares **Design-Template** als optische Basis
- Lässt GitHub Copilot eine Landing Page generieren und ein neues Repo dafür anlegen

#### Was du ändern kannst

| Eingabe | Standard | Beschreibung |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | Das GitHub-Repo, das als Design-Template dient |
| `custom_name` | `generated_lp` | Name des neu erstellten Landing-Page-Repos |
| `custom_prompt` | *(allgemeiner Prompt)* | Detaillierte Anweisungen für Copilot |

> 💡 **Tipp:** Je spezifischer dein Prompt, desto besser die generierte Landing Page.

#### Wann du den Workflow starten sollst

Starte diesen Workflow **erst dann**, wenn dein Projekt weitgehend fertig dokumentiert ist:
- Handbuch / Manual
- README mit Produktbeschreibung, Features und Zielgruppe
- Rechtstexte / relevante Seiten

> ✅ **Empfehlung:** In der Regel reicht **ein einmaliger Lauf** am Projektende.

#### Manuell ausführen

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Wähle in der linken Liste den Workflow **"🚀 lp-generator"**.
2. Klicke rechts auf **"Run workflow"**.
3. Passe Template, Name und Prompt an.
4. Bestätige mit **"Run workflow"**.

#### Wenn der Workflow fehlschlägt

Wenn bereits ein Repository mit gleichem Namen existiert:
1. Ändere den Namen in `custom_name` und starte erneut.
2. Oder lösche das bestehende Ziel-Repo und starte erneut.

---
---

## EN English

---

### Process Overview

Follow these steps in order to go from template to production:

1. **Create GitHub Repo** - Use this template to create a new repository in the Wamocon GitHub organisation.
2. **Clone Repo** - Clone to your local machine and run `npm install`.
3. **Install pre-commit hook** - Run `bash hooks/install.sh`. One-time setup after cloning - protects you from accidentally pushing secrets.
4. **Check GitHub Workflow files** - Open `.github/workflows/deploy.yml` and `.github/workflows/pr-pipeline.yml`, verify that `Wamocon/github_workflow` is the correct reference.
5. **Update `.env.local` & connect Supabase** - Copy `.env.example` → `.env.local`, create a remote Supabase project, and fill in the credentials.
6. **Run locally & start development** - Run `npm run dev` and start building.
7. **GitHub Organisation Settings: Grant Vercel app access** - Go to the organisation settings on GitHub, find the Vercel GitHub App, and grant it access to your new repo. Without this, the repo will not appear in Vercel's import list.
8. **Make repo temporarily public & import in Vercel** - Set the repo to public temporarily and import it in Vercel.
9. **Get Vercel Project ID** - Copy the Vercel Project ID from the Vercel project settings.
10. **Add Vercel Project ID to GitHub secrets** - Add `VERCEL_PROJECT_ID` to your repository's GitHub Actions secrets.
11. **Make repo internal** - Revert the repository visibility to internal.
12. **First manual deployment** - Go to `Actions → "Deploy to Vercel" → Run workflow` and choose `production`.

> 📖 **For detailed information, read below.**

---

### 1. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/Wamocon/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Install pre-commit hook (once, right after npm install)
bash hooks/install.sh

# Start the development server (with Turbopack for fast refresh)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available scripts:**

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack (hot reload) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

---

### 1b. Git Workflow & Branching Strategy

> 💡 **After the first push, always work on a branch - never directly on `main`/`master`.**

**Recommended flow:**

```bash
# One-time: push the initial state to main/master
git add .
git commit -m "chore: initial setup"
git push origin <main-or-master>

# From now on: always work on a feature branch
git checkout -b feature/my-feature

# Test locally, then commit
npm run dev        # test in browser
npm run typecheck  # catch type errors
npm run lint       # catch lint issues

git add .
git commit -m "feat: description of change"
git push origin feature/my-feature
```

**Key rules:**

- **Test locally before pushing.** Always run `npm run typecheck` and `npm run lint` before pushing.
- **Push all changes before opening the PR.** Every new push to an open PR triggers the GitHub Actions pipeline - this consumes GitHub Actions minutes.
- **Keep only one PR open at a time** until it is merged.

> ⚠️ **Why this matters:** Every push to an open PR triggers the PR Pipeline (Auto-Fix + Typecheck + Lint). Test locally first - then push, then open the PR.

---

### 1c. Pre-commit Hook - Secret Scanner

The pre-commit hook prevents API keys, tokens, passwords, or other secrets from accidentally being checked into GitHub. The hook scans all files staged for commit **before** the commit is finalised.

#### Installation

```bash
# Run ONCE after cloning - never needs to run again:
bash hooks/install.sh
```

> ✅ **How often?** Exactly **once** - right after `npm install` when first setting up the repo. After installation, the hook runs automatically before **every** `git commit`.

#### What the hook checks

| Pattern | Example |
|--------|---------|
| AWS keys | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub tokens | `ghp_...`, `github_pat_...` |
| Vercel token | `VERCEL_TOKEN = abc123...` |
| Private keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Database connection strings | `postgres://user:password@host` |
| Generic tokens | `api_key =`, `client_secret =`, `password =` |
| JWT tokens | `eyJ...` (full `header.payload.signature` form) |
| Supabase service role | `service_role = eyJ...` |
| `.env` files | `.env`, `.env.local`, `.env.production` |

#### When a commit is blocked

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**How to fix:**
1. Remove the secret from the file.
2. Store it in your `.env.local` (already in `.gitignore`).
3. Use GitHub Actions secrets for CI/CD values.

**False positive** (e.g. an example value in documentation):  
Add the comment `# notsecret` at the end of that line.

**Emergency bypass** (absolute last resort - never for real secrets!):
```bash
git commit --no-verify -m "your message"
```

---

### 2. Supabase Setup & Warning

> ⚠️ **CRITICAL: Once you have a Supabase account, store all test data there directly.**
>
> **Do NOT store test data as local files** (e.g. JSON fixtures, SQL dumps). Insert data directly into your Supabase project - via the Dashboard, an MCP tool, or a migration script.

**Steps:**

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Copy the **Project URL**, **Anon Key**, and **Service Role Key** from  
   `Project Settings → API`.
3. Paste them into your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

---

### 2b. Local Supabase Setup via Docker (Optional)

> 💡 **This step is optional.** By default you connect directly to a remote Supabase project (see section 2). Only use this setup if you prefer developing fully offline.

For a fully local Supabase setup with Docker and a migration-based development workflow, copy this prompt into your AI assistant (e.g. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Viewing the local database in the browser

| Service | URL | Description |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Database UI: tables, SQL editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (your app endpoint) |
| **PostgreSQL** | `localhost:54322` | Direct DB access (e.g. pgAdmin, TablePlus) |
| **Inbucket (email)** | `http://localhost:54324` | Local email service for Auth emails |

**Local environment variables:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<copy from supabase status output>
SUPABASE_SERVICE_ROLE_KEY=<copy from supabase status output>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Using Supabase MCP for Migrations

The Supabase MCP (Model Context Protocol) server allows your AI coding assistant to create and manage migrations and tables directly.

- Migrations are stored in `supabase/migrations/`.
- Use the MCP tools to create tables, alter schemas, and manage indexes.

#### Working with Multiple Schemas

By default, Supabase only exposes the `public` schema via the API. If you need custom schemas:

**1. Create the schema:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Grant permissions:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Expose the schema via the Supabase API:**
Go to `Project Settings → API → Exposed schemas` and add your custom schema name.

---

### 4. GitHub Workflow Configuration

This project uses the **centralized Wamocon CI/CD workflow** from [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Overview of the three workflows

| Workflow | File | Trigger | What it does |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatic** on every PR to `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manual only** - no auto-trigger | Builds and deploys to Vercel via CLI |
| **LP Generator** | `lp-generator.yml` | **Manual only** - no auto-trigger | Generates a landing page in a new repo |

> ⚠️ **No automatic deployment:** Neither a PR nor a push to `main` triggers a deployment automatically. All deployments are started manually from the Actions tab.

#### What you need to do

1. Verify that `Wamocon/github_workflow` is the correct org/repo reference.
2. Enable workflow write permissions:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Add **one single secret** to your repository:
   - Go to `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Value: *(see section 5 below)*

> ✅ **All other required secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) are **already configured at the GitHub Organisation level**.

#### Triggering a manual deployment

```
GitHub repo → Actions → "Deploy to Vercel" → Run workflow
→ Choose environment: production or preview
→ Click "Run workflow"
```

---

### 5. Vercel Deployment Strategy

#### Step 1: Grant Vercel GitHub App access in Org Settings (One-time, Critical)

> ⚠️ **This step must be done BEFORE importing in Vercel.** Without it, your repo will not appear in Vercel's import list - even if it is public.

1. Go to **GitHub → Wamocon Organisation → Settings → Installed GitHub Apps**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Find the **Vercel** app in the list.
3. Click **Configure**.
4. Scroll to **Repository access**.
5. Select **"Only select repositories"** and add your new repo.
6. Click **Save**.

#### Step 2: Initial Deployment (One-Time)

1. **Make the repo public** temporarily  
   `Repository → Settings → General → Change visibility → Public`
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** → select your repo.
3. Deploy the project (Vercel detects Next.js automatically).
4. **Copy the Vercel Project ID:**  
   `Vercel Project → Settings → General → Project ID` → copy the value.
5. **Add to GitHub secrets:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Value: the ID you copied.
6. **Revert the repo to internal:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **After this one-time setup**, the GitHub Action deploys via Vercel CLI - Vercel no longer sees who committed, and there are no team seat errors with a personal Hobby account.

#### Step 3: Add environment variables in Vercel

> ⚠️ **CRUCIAL:** Go to `Vercel Project → Settings → Environment Variables` and add **all** variables from your `.env.local`. Without these, the build **will fail**.

#### Deployment flow (after setup)

| Trigger | Result |
|---|---|
| PR targeting `main`/`master` | PR Pipeline runs automatically (no deployment) |
| Merge / push to `main`/`master` | No automatic deployment |
| **Manual workflow run** | Deploys to the chosen environment: `production` or `preview` |

**How to deploy manually:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (for the live URL)
→ environment: preview     (for a temporary test URL)
→ db_schema: (leave empty - Vercel env vars are used)
```

---

### 6. Domain Management

1. **Secure a domain** for your application via [Strato](https://www.strato.de).
2. In the Vercel project settings, go to `Settings → Domains` and add your domain.
3. Configure the DNS records at Strato as shown by Vercel (typically a CNAME or A record).

---

### 7. Project Checklist

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Main Process (core feature)
- [ ] Video (demo / tutorial)
- [ ] Domain (secured via Strato)

---

### 8. Landing Page Generator

The workflow file `.github/workflows/lp-generator.yml` generates a landing page for this app by calling a central, reusable Wamocon workflow.

#### What the workflow does

- Reads the contents of this repository
- Uses a configurable **design template** as a visual base
- Lets GitHub Copilot generate a landing page and create a new repository for it

#### What you can change

| Input | Default | Description |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | The GitHub repo used as the design template |
| `custom_name` | `generated_lp` | Name for the newly created landing page repository |
| `custom_prompt` | *(generic prompt)* | Detailed instructions for Copilot |

> 💡 **Tip:** The more specific your prompt, the better the generated landing page.

#### When you should run this workflow

Run this workflow **only after** your project is mostly complete:
- Handbook / Manual
- README with product description, features, and target audience
- Legal pages / relevant links

> ✅ **Recommendation:** In most cases, you only need to run it **once** at the end of the project.

#### Running manually

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Select **"🚀 lp-generator"** from the left workflow list.
2. Click **"Run workflow"** on the right.
3. Adjust the input fields (template, name, prompt) as needed.
4. Confirm with **"Run workflow"**.

#### If the workflow fails (repository name already exists)

1. Change the `custom_name` value and run the workflow again.
2. Or delete the existing target repository (if no longer needed) and run again.

## ./IDEA.md
# Projektidee

> Fuell diese Datei aus, bevor du den Skill `anforderungsdokument` aufrufst.
> Je mehr Details du hier schreibst, desto besser wird das generierte Dokument.
> Anleitung: `.github/skills/anforderungsdokument/SKILL.md`

---

## Projektname

[Name der App, z.B. "Universal Inventory Manager"]

---

## Beschreibung

[Was macht die App? Welches Problem loest sie? Sei konkret.

Beispiel:
"Eine webbasierte Lagerverwaltungs-App fuer kleine und mittelgrosse Unternehmen in
Deutschland. Sie ersetzt Excel-basierte Bestandslisten durch ein strukturiertes System
mit Echtzeit-Uebersicht, QR-Code-Scanfunktion und automatisierten Benachrichtigungen.
Das Ziel ist es, manuelle Fehler bei der Lagerhaltung um mindestens 80 % zu reduzieren
und den Zeitaufwand fuer Inventurprozesse auf ein Minimum zu senken."]

---

## Zielgruppe

[Wer soll die App nutzen? Branche, Unternehmensgroesse, Rolle.

Beispiel:
"Lager- und Logistikleiter sowie Mitarbeiter in KMU mit 10 bis 200 Angestellten,
insbesondere im Einzel-, Gross- und Onlinehandel in Deutschland und dem
deutschsprachigen Europa."]

---

## Kernproblem

[Das konkrete Problem, das OHNE die App besteht.

Beispiel:
"Lagerfehler durch manuelle Erfassung in Excel kosten KMU durchschnittlich
14 % des Jahresumsatzes. Bestehende Enterprise-Loesungen wie SAP EWM sind
fuer kleinere Betriebe zu komplex und zu teuer."]

---

## Gewuenschte Hauptfunktionen (Version 1)

[Liste der wichtigsten Funktionen. Beispiel:]

- Artikel anlegen, bearbeiten, loeschen
- Lagerbestand in Echtzeit einsehen
- QR-Code-Etiketten generieren und scannen
- Rollenbasierter Zugriff (Admin, Manager, Mitarbeiter)
- Mehrsprachige Oberflaeche (Deutsch und Englisch)
- Dashboard mit Bestandsuebersicht

---

## Tech-Stack (optional, wenn bekannt)

[Bekannte oder gewuenschte Technologien. Standardempfehlung falls leer:
Next.js, React, TypeScript, Supabase, Tailwind CSS, Vercel]

---

## Marktsegment und Branche

[In welchem Markt soll die App operieren?

Beispiel: "Lagerverwaltungssoftware (WMS) fuer KMU in Deutschland, Segment Mittelstand"]

---

## Bekannte Wettbewerber (optional)

[Bestehende Loesungen, die aehnliches tun.

Beispiel: SAP EWM, Sage Wawi, Pickware, Odoo Inventory, Lightspeed]

---

## Ersteller

[Vollstaendiger Name]

---

## Empfaenger (Geschaeftsfuehrung)

[Name und Titel des Entscheidungstraegers, z.B. "waleri moretz, CEO WAMOCON GmbH"]

---

## Welle und Version

1

---

## Zusaetzliche Hinweise (optional)

[Besondere Anforderungen, Einschraenkungen, Deadlines oder andere relevante
Informationen, die im Dokument beruecksichtigt werden sollen.]

## ./Marketing/MARKETING_KONZEPT.md
﻿# Ahnenecho - Marketing- und Designkonzept

**Version 1.0 | Stand: Mai 2026 | WAMOCON GmbH**

---

## Inhaltsverzeichnis

1. [Positionierung und MarkenidentitÃ¤t](#1-positionierung-und-markenidentitÃ¤t)
2. [Zielgruppenanalyse](#2-zielgruppenanalyse)
3. [Messaging-Strategie](#3-messaging-strategie)
4. [Designsprache (Brand Identity)](#4-designsprache-brand-identity)
5. [Go-to-Market-Strategie](#5-go-to-market-strategie)
6. [Content-Marketing und KanÃ¤le](#6-content-marketing-und-kanÃ¤le)
7. [Pricing-Kommunikation](#7-pricing-kommunikation)
8. [Wachstumsmechaniken](#8-wachstumsmechaniken)

---

## 1. Positionierung und MarkenidentitÃ¤t

### Kern-Positionierung

Ahnenecho ist **kein ProduktivitÃ¤tstool**. Es ist ein emotionales Erbe-Archiv.

**Positioning Statement:**
> FÃ¼r Familien, die verstehen, dass Erinnerungen vergehen, ist Ahnenecho das gemeinsame Familienarchiv, das Geschichten, Rezepte, Traditionen und Weisheiten generationsÃ¼bergreifend bewahrt - weil GroÃŸmutters Wissen mehr wert ist als jede Cloud-Notiz.

**Im Unterschied zu:**
- Google Fotos / iCloud: Reiner Medien-Speicher, keine Struktur, kein Kontext, kein Wissenstransfer
- Facebook / Instagram: Social Media mit Ã–ffentlichkeit, algorithmisch, kurzlebig
- Notion / Obsidian: ProduktivitÃ¤tstools, keine emotionale Komponente, technisch komplex
- FamilySearch / MyHeritage: Historisch/genealogisch, nicht fÃ¼r lebendiges Wissensarchiv

**Ahnenecho ist der einzige Dienst, der explizit fÃ¼r den Transfer von lebendigem Familienwissen an die nÃ¤chste Generation gebaut ist.**

### Markenkern

| Dimension | AusprÃ¤gung |
|---|---|
| **Mission** | Kein Familienwissen soll verloren gehen |
| **Vision** | Jede Familie hat ein lebendiges Archiv, das Ã¼ber Generationen weitergefÃ¼hrt wird |
| **Werte** | WÃ¤rme, Gemeinschaft, Verantwortung, Bewahrung, Einfachheit |
| **Stimme** | Warm, einladend, nie technisch, nie kÃ¼hl |
| **Tagline (DE)** | "Das Echo deiner Ahnen, für immer lebendig." |
| **Tagline (EN)** | "Your ancestors' echo, alive forever." |

### Markenname

**Ahnenecho** kombiniert:
- **Stamm** = Stammbaum, Familie, Ursprung, Stamm eines Baumes (Verwurzelung)
- **Feuer** = Lagerfeuer (ErzÃ¤hlkultur), Flamme (Lebendigkeit), WÃ¤rme (Emotion)

Der Name funktioniert ausschlieÃŸlich auf Deutsch - das ist bewusst und ein Differenzierungsmerkmal. Er klingt nach Heimat, Geborgenheit und Tradition.

---

## 2. Zielgruppenanalyse

### PrimÃ¤re Zielgruppe - "Die BrÃ¼cken-Generation"

**Demografisch:**
- Alter: 35-55 Jahre
- Rolle in der Familie: Kinder von Ã¤lteren Eltern (60+), selbst Eltern von Teenagern/jungen Erwachsenen
- Digital: Smartphone-versiert, nutzen WhatsApp, Instagram, aber auch E-Mail
- BefÃ¼rchtung: "Ich frage mich, wer nach Oma stirbt noch ihr Gulasch-Rezept kennt"

**Psychografisch:**
- Nostalgisch, familienbewusst
- SpÃ¼ren die Dringlichkeit - GroÃŸeltern werden Ã¤lter
- WÃ¼rden gerne mehr aufschreiben, wissen aber nicht wie und womit
- SchÃ¤tzen Einfachheit: kein Tool mit langer Lernkurve

**Buyer Journey:**
1. **AuslÃ¶ser:** Verlust eines Familienmitglieds, Geburt eines Kindes, Familienfest, Umzug
2. **Suche:** "Familiengeschichte digitalisieren", "Omas Rezepte sichern"
3. **Entscheidung:** Einfache Registrierung, kostenloser Einstieg, Einladung der Familie

### SekundÃ¤re Zielgruppe - "Die ErzÃ¤hlenden"

**Demografisch:**
- Alter: 65-85 Jahre
- Nutzen das Tool indirekt - werden von Kindern/Enkeln eingeladen
- Smartphone-Nutzung: WhatsApp, Fotos, aber keine komplexen Apps
- BedÃ¼rfnis: Ihr Wissen weitergeben, solange sie kÃ¶nnen

**Wichtig:** Diese Gruppe entscheidet nicht selbst Ã¼ber das Tool - sie werden eingeladen. Die UX muss fÃ¼r sie zugÃ¤nglich sein (groÃŸe Schrift, einfache Navigation, Spracheingabe als Kernfunktion).

### TertiÃ¤re Zielgruppe - "Die Verwalter"

- FamilienoberhÃ¤upter / Stammhalter
- Verwalten den Vault, laden ein, pflegen Struktur
- Bereit fÃ¼r Pro-Plan, wenn der Wert klar ist
- B2B-Potenzial: Kulturvereine, Kirchen, Volksschulen (Familiengeschichte-Projekte)

### Persona-Karten

**Persona 1: Claudia, 42, MÃ¼nchen**
- Mutter von zwei Kindern (9 und 14), ihre Schwiegereltern sind 78 und 81
- "Schwiegermutter macht die beste Linzertor te der Welt, aber niemand hat das Rezept"
- Hat iCloud Fotos, aber alles ist unstrukturiert
- WÃ¤re bereit â‚¬9,90/Monat zu zahlen, wenn es "einfach und schÃ¶n" ist

**Persona 2: Hans, 74, Wien**
- Pensionierter Lehrer, tippt langsam, nutzt WhatsApp
- Hat hunderte Geschichten aus der Kindheit, die er gerne aufschreiben wÃ¼rde
- WÃ¼rde die Spracheingabe lieben - aber braucht jemanden der ihm die App erklÃ¤rt
- Wird von seiner Tochter eingeladen

**Persona 3: Lena, 28, Berlin**
- Hat ihre Oma verloren - mit ihr viele Familiengeschichten
- Will sicherstellen, dass das mit ihren GroÃŸeltern mÃ¼tterlicherseits nicht passiert
- Tech-affin, kann die App eigenstÃ¤ndig einrichten
- Teilt gerne auf Social Media

---

## 3. Messaging-Strategie

### Core Message

**Deutsch:**
> "GroÃŸmutters Rezepte. Opas Kriegsgeschichten. Die Tradition, die deine Familie zusammenhÃ¤lt. All das verschwindet - es sei denn, ihr bewahrt es gemeinsam."

**Englisch:**
> "Grandma's recipes. Grandpa's stories. The traditions that hold your family together. All of it disappears - unless you preserve it together."

### Messaging-Hierarchie

**Ebene 1 - Emotionaler Aufruf (Hook):**
- "Was passiert, wenn niemand mehr weiÃŸ, woher ihr kommt?"
- "Jeden Tag geht ein StÃ¼ck eurer Familiengeschichte verloren."
- "Das Rezept kennt nur sie. Die Geschichte kennt nur er."

**Ebene 2 - Problem-Amplifikation:**
- 90 % des mÃ¼ndlich Ã¼berlieferten Wissens einer Familie gehen innerhalb von zwei Generationen verloren
- WhatsApp-Gruppen sind kein Archiv - Nachrichten werden gelÃ¶scht, Fotoalben gehen verloren
- Keiner fragt die GroÃŸeltern - bis es zu spÃ¤t ist

**Ebene 3 - LÃ¶sung / Nutzen:**
- Strukturiertes Archiv fÃ¼r 6 Wissenstypen: Geschichten, Rezepte, Traditionen, Weisheiten, Orte, Fotos
- Gemeinsam - jedes Familienmitglied trÃ¤gt bei
- KI-gestÃ¼tzte Prompts erinnern jede Woche daran ("Was war dein schÃ¶nster Sommer als Kind?")
- Spracheingabe: Oma spricht einfach - die App schreibt auf

**Ebene 4 - Beweise / Vertrauen:**
- DSGVO-konform, Server in Europa
- Daten gehÃ¶ren euch - exportierbar jederzeit
- Von WAMOCON entwickelt

### Tagline-Varianten nach Kontext

| Kontext | Tagline |
|---|---|
| Homepage Hero | "Das Feuer deiner Familie, fÃ¼r immer am Brennen." |
| Social Media | "Bewahrt, was wirklich zÃ¤hlt." |
| Email-Betreff | "Wann hast du Oma zuletzt nach ihrer Geschichte gefragt?" |
| App-Onboarding | "Willkommen zu eurem Familienarchiv." |
| Pricing | "Weniger als ein Kaffee im Monat. Ein Erbe fÃ¼r immer." |
| Push-Notification | "Diese Woche: Was war der wichtigste Ratschlag, den du je bekamst?" |

---

## 4. Designsprache (Brand Identity)

### Philosophie

Ahnenecho kombiniert **emotionale WÃ¤rme** mit **digitaler Klarheit**. Das Design soll sich anfÃ¼hlen wie:
- Ein altes Familienfotoalbum, aber digital und geteilt
- Ein Lagerfeuerabend - warm, gemeinschaftlich, zeitlos
- Nicht wie eine SaaS-App - wie ein Zuhause

**Designprinzipien:**
1. **WÃ¤rme vor Effizienz** - Farben und Formen laden ein, nicht auf
2. **Lesbarkeit ist Respekt** - Ã¤ltere Nutzer sind Kern-Zielgruppe
3. **Konsistenz schafft Vertrauen** - gleiche Muster Ã¼berall
4. **Leere ist schÃ¶n** - genug WeiÃŸraum, kein visuelles Rauschen
5. **Interaktion fÃ¼hlt sich lebendig an** - dezente Animationen wo sinnvoll

---

### 4.1 Farbsystem

#### Brand-Palette

```
PrimÃ¤r (Amber / Ahnenecho-Flamme):
  amber-600:  #d97706  â† Haupt-CTA, aktive Elemente, Links
  amber-500:  #f59e0b  â† Hover-ZustÃ¤nde
  amber-100:  #fef3c7  â† Hintergrundakzente, Badges

Akzent (Tiefrot / Glut):
  red-700:    #b91c1c  â† SekundÃ¤re CTAs, Danger-Aktionen
  red-600:    #dc2626  â† Hover Danger

Neutral (WarmweiÃŸ / Pergament):
  warm-50:    #fdfaf6  â† Haupt-Hintergrund (hell)
  warm-100:   #f5f0e8  â† Karten-Hintergrund (hell)
  warm-200:   #e8dfd0  â† Borders, Divider (hell)

Text:
  gray-900:   #111827  â† PrimÃ¤rtext (hell)
  gray-600:   #4b5563  â† SekundÃ¤rtext (hell)
  gray-400:   #9ca3af  â† Placeholder (hell)
```

#### Dark Mode Palette

```
Hintergrund:
  dark-bg:    #1c1917  â† (stone-900) Haupt-Hintergrund
  dark-card:  #292524  â† (stone-800) Karten-Hintergrund
  dark-border:#44403c  â† (stone-700) Borders

Text:
  dark-text:  #fafaf9  â† (stone-50) PrimÃ¤rtext
  dark-muted: #a8a29e  â† (stone-400) SekundÃ¤rtext

Akzente:
  amber-400:  #fbbf24  â† PrimÃ¤r im Dark Mode (heller)
  amber-300:  #fcd34d  â† Hover im Dark Mode
```

#### Verwendungsregeln

- **Nie** reines Schwarz (#000000) auf reinem WeiÃŸ (#ffffff) - zu hart fÃ¼r Ã¤ltere Augen
- **Amber** dominiert CTAs und Highlights - nie Blau oder Lila
- **Roter Akzent** nur fÃ¼r Danger-Aktionen und wenige Highlights - nicht als Grund farbe
- **Warm-TÃ¶ne** in allen HintergrÃ¼nden - niemals kÃ¼hles Grau oder WeiÃŸ

---

### 4.2 Typografie

#### Schriftfamilien

| Rolle | Schrift | Gewicht | GrÃ¶ÃŸe |
|---|---|---|---|
| Ãœberschriften | Geist (variable) | 700-800 | 2xl - 5xl |
| FlieÃŸtext | Geist (variable) | 400 | 16px Minimum |
| Labels / UI | Geist (variable) | 500-600 | 14px Minimum |
| Zitate / Pull Quotes | Geist Italic | 400 | 18-24px |

> Geist ist bereits im Projekt installiert (`next/font/google`). Kein weiterer Import nÃ¶tig.

#### GrÃ¶ÃŸen-Skala (Tailwind)

```
text-xs    (12px) â†’ Nie fÃ¼r FlieÃŸtext. Max. fÃ¼r Metadaten.
text-sm    (14px) â†’ UI-Labels, Timestamps, Badges
text-base  (16px) â†’ Mindest-FlieÃŸtextgrÃ¶ÃŸe (ABSOLUTES MINIMUM)
text-lg    (18px) â†’ Wichtiger Body-Text, Einleitungen
text-xl    (20px) â†’ Zwischen-Ãœberschriften
text-2xl   (24px) â†’ Section-Ãœberschriften
text-3xl   (30px) â†’ Page-Ãœberschriften
text-4xl   (36px) â†’ Hero-Unter-Ãœberschriften
text-5xl   (48px) â†’ Hero-HauptÃ¼berschrift
text-6xl   (60px) â†’ Nur Landing Page Hero
```

**Regel:** Auf mobil immer eine Stufe kleiner als auf Desktop. Beispiel: `text-5xl md:text-6xl`

---

### 4.3 Logo und Flammen-Icon

#### Konzept

Das Ahnenecho-Logo ist eine **stilisierte Flamme** aus zwei ineinander verwobenen Linien - sie symbolisieren zwei Generationen, die zusammen brennen.

#### SVG-Spezifikation (PrimÃ¤rlogo)

```svg
<!-- Ahnenecho Flame Icon - Brand Asset -->
<svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer flame (larger, amber) -->
  <path
    d="M20 4C20 4 8 14 8 26C8 33.7 13.4 40 20 40C26.6 40 32 33.7 32 26C32 14 20 4 20 4Z"
    fill="#d97706"
    opacity="0.9"
  />
  <!-- Inner flame (smaller, darker red) -->
  <path
    d="M20 16C20 16 14 22 14 28C14 31.9 16.7 35 20 35C23.3 35 26 31.9 26 28C26 22 20 16 20 16Z"
    fill="#b91c1c"
    opacity="0.85"
  />
  <!-- Core glow (bright amber center) -->
  <path
    d="M20 24C20 24 17 27 17 30C17 31.7 18.3 33 20 33C21.7 33 23 31.7 23 30C23 27 20 24 20 24Z"
    fill="#fbbf24"
  />
</svg>
```

#### Logo-Varianten

| Variante | Verwendung |
|---|---|
| **Icon only** | Favicon, App Icon, kleine FlÃ¤chen (<32px) |
| **Icon + Wortmarke horizontal** | Header Navigation, E-Mail-Footer |
| **Icon + Wortmarke vertikal** | Hero-Bereiche, Splash Screens |
| **Wortmarke only** | Kontexte wo Icon bereits bekannt |

#### Wortmarke-Typografie

- Schrift: Geist, Weight 700
- Buchstabenabstand: `tracking-tight`
- "Stamm" in `text-gray-900` / `text-stone-50` (dark)
- "feuer" in `text-amber-600` / `text-amber-400` (dark)
- Beispiel-Rendering: `<span>Stamm</span><span class="text-amber-600">feuer</span>`

---

### 4.4 Iconografie

**Icon-Library:** `lucide-react` (bereits spezifiziert)

**Stroke-Breite:** `strokeWidth={1.5}` - dÃ¼nner als Standard, wirkt eleganter

**GrÃ¶ÃŸen:**
- Navigation: 20px (`size={20}`)
- Inline im Text: 16px (`size={16}`)
- Feature-Icons (groÃŸ): 32px (`size={32}`)
- Hero-Icons (sehr groÃŸ): 48px (`size={48}`)

#### Kategorie-Icons (Mapping)

| Kategorie | Icon (Lucide) | Farbe |
|---|---|---|
| Geschichten | `BookOpen` | amber-600 |
| Rezepte | `UtensilsCrossed` | orange-600 |
| Traditionen | `Sparkles` | yellow-600 |
| Weisheiten | `Quote` | emerald-600 |
| Orte | `MapPin` | blue-600 |
| Fotos | `Camera` | purple-600 |

---

### 4.5 Spacing und Layout

#### Prinzip: "Breathing Room for Older Eyes"

- **Mindest-ZeilenhÃ¶he:** `leading-relaxed` (1.625) fÃ¼r FlieÃŸtext
- **Mindest-Padding auf Cards:** `p-6` (24px) auf Desktop, `p-4` (16px) auf Mobile
- **Mindest-Abstand zwischen Sections:** `py-16` auf Desktop, `py-10` auf Mobile
- **Max-Breite Content:** `max-w-2xl` (FlieÃŸtext), `max-w-4xl` (Cards/Grids), `max-w-7xl` (Hero)

#### Grid-System

```
Mobile (default): 1 Spalte
sm (640px):       1-2 Spalten
md (768px):       2 Spalten
lg (1024px):      3 Spalten
xl (1280px):      3-4 Spalten
```

---

### 4.6 Komponenten-Stil

#### Buttons

```
Primary (CTA):
  bg-amber-600 hover:bg-amber-500
  text-white font-semibold
  px-6 py-3 rounded-lg (min 44px height)
  transition-colors duration-150

Secondary:
  border border-amber-600 text-amber-600
  hover:bg-amber-50 dark:hover:bg-amber-900/20
  px-6 py-3 rounded-lg

Danger:
  bg-red-600 hover:bg-red-700
  text-white font-semibold
  px-6 py-3 rounded-lg

Ghost/Link:
  text-amber-600 hover:text-amber-500
  underline-offset-4 hover:underline
```

#### Cards

```
bg-warm-100/white dark:bg-stone-800
border border-warm-200 dark:border-stone-700
rounded-xl shadow-sm
p-6
hover: shadow-md transition-shadow duration-200
```

#### Inputs

```
border border-warm-200 dark:border-stone-600
rounded-lg px-4 py-3 (min 44px height)
bg-white dark:bg-stone-800
text-gray-900 dark:text-stone-50
text-base (min 16px - keine kleinere Schrift in Inputs!)
focus:ring-2 focus:ring-amber-500 focus:border-amber-500
placeholder:text-gray-400 dark:placeholder:text-stone-400
```

#### Badges / Kategorie-Chips

```
Inline-Flex, rounded-full
px-3 py-1, text-sm font-medium
Category-spezifische Farben (s. Kategorie-Icon-Tabelle)
z.B. Geschichten: bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300
```

---

### 4.7 Animation und Mikro-Interaktionen

**Prinzip:** Subtil, nie ablenkend. Animationen haben Bedeutung.

| Element | Animation | Dauer |
|---|---|---|
| Button Hover | `transition-colors duration-150` | 150ms |
| Card Hover | `transition-shadow duration-200` | 200ms |
| Modal Einblenden | `opacity-0 â†’ opacity-100 + scale-95 â†’ scale-100` | 200ms |
| Toast/Notification | `translate-y-2 â†’ translate-y-0 + opacity` | 300ms |
| Page Transitions | Next.js default | - |
| Flamme (Hero) | Subtiles Pulsieren via `animate-pulse` oder CSS keyframes | 3s loop |

**FÃ¼r Ã¤ltere Nutzer:** `prefers-reduced-motion` beachten. Alle Animationen hinter:
```css
@media (prefers-reduced-motion: no-preference) { ... }
```

---

### 4.8 Bildsprache und Visuelle Metaphern

**Fotografiestil (fÃ¼r Marketing-Materialien):**
- Warme, goldene Stunde Beleuchtung
- Authentische Familienmomente (keine Stock-Fotos mit zu breitem LÃ¤cheln)
- GenerationenÃ¼bergreifend: GroÃŸeltern + Enkel zusammen
- Hands-on: Kochende HÃ¤nde, aufgeschlagene BÃ¼cher, Fotos in HÃ¤nden
- Nie: BÃ¼ro-Setting, Business-Kontext, kaltes Blaulicht

**Illustrationen / Grafiken:**
- Linie-Illustrationen in Amber-TÃ¶nen
- Warme, organische Formen (keine scharfen geometrischen Elemente)
- Flammen- und Feuer-Motive dezent einsetzen
- Familienstammbaum als visuelle Metapher fÃ¼r Vaults

---

## 5. Go-to-Market-Strategie

### Phase 1: Soft Launch (Monat 1-2)

**Ziel:** 100 registrierte Familien, Product-Market-Fit validieren

**Aktionen:**
- Beta-Zugang Ã¼ber Warteliste (E-Mail-Sammlung)
- Direktansprache in deutschen Facebook-Gruppen zu Familie, Ahnenforschung, Rezepte
- Kooperation mit 3-5 Micro-Influencern (Familien-/Senior-Kontext, 5.000-50.000 Follower)
- PR: Ein Artikel in einer regionalen deutschen Zeitung ("Startup bewahrt Familiengeschichten")
- Keine bezahlte Werbung in Phase 1

**KPIs:** Registrierungen, Vault-Erstellungen, Einladungen pro Vault

---

### Phase 2: Growth (Monat 3-6)

**Ziel:** 1.000 aktive Vaults, erste Pro-Conversions

**Aktionen:**
- SEO: Organische Inhalte (Blogposts zu "Familiengeschichte bewahren", "Omas Rezepte digitalisieren")
- Pinterest: Rezept-Karten und Familien-Tipps (sehr hohe Reichweite bei Zielgruppe 35-55)
- YouTube: Kurzvideos "Wie ich Omas 50 Jahre alte Rezepte gerettet habe" (authentisch, kein Hochglanz)
- Newsletter: WÃ¶chentliche Prompt-E-Mail ("Diese Woche: Fragt eure Eltern nach...")
- Referral-System: "Lade deine Familie ein - beide bekommen 1 Monat Pro gratis"

**KPIs:** MoM Wachstum, Free-to-Pro-Conversion, Churn Rate, WAU

---

### Phase 3: Scale (Monat 7-12)

**Ziel:** 10.000 aktive Vaults, profitabler MRR

**Aktionen:**
- Bezahlte Social Ads (Facebook/Instagram) - demographisch auf 35-65, Interessen: Familie, Kinder, Kochen, Ahnenforschung
- B2B-Pilot: Kirchengemeinden, Kulturvereine, Schulen (Familiengeschichte-Projekte)
- Presse: Tech-Medien (t3n, GrÃ¼nderszene) + Ã¼berregionale Presse (SPIEGEL, ZEIT)
- App Store Optimierung (wenn mobile App entwickelt wird)
- Partnership: ADAC, Volksbanken (Zielgruppe Ãœberschneidung)

---

## 6. Content-Marketing und KanÃ¤le

### Content-SÃ¤ulen

**SÃ¤ule 1: "Was wir verlieren" (Emotionaler Aufruf)**
- "10 Fragen, die du deinen GroÃŸeltern stellen solltest - bevor es zu spÃ¤t ist"
- "Das Rezept meiner Oma - und warum ich es fast fÃ¼r immer verloren hÃ¤tte"
- "Oral History: Was mit Familiengeschichten passiert, wenn sie nicht aufgeschrieben werden"

**SÃ¤ule 2: "Wie wir bewahren" (Praktische Anleitungen)**
- "5 Wege, Familienrezepte zu digitalisieren"
- "Wie du ein Familien-Interview mit deinen GroÃŸeltern fÃ¼hrst"
- "Spracheingabe fÃ¼r Ã„ltere: So nutzt du Ahnenecho ohne viel Tippen"

**SÃ¤ule 3: "Ahnenecho Stories" (Social Proof)**
- Anonymisierte Nutzergeschichten ("Wie Familie MÃ¼ller Opas Kriegserinnerungen bewahrte")
- Bevor/Nachher: "Unstrukturiertes WhatsApp-Chaos vs. strukturiertes Familienarchiv"
- Prompt-der-Woche: WÃ¶chentliche Frage, die Follower mit ihrer Familie teilen

**SÃ¤ule 4: "FÃ¼r Ã„ltere" (Barrierefreiheit und Vertrauen)**
- "Ahnenecho erklÃ¤rt: So nutzen auch 70-JÃ¤hrige die App problemlos"
- Video-Tutorials mit groÃŸem Cursor, langsamer Sprache
- Datenschutz-FAQ: "Wo sind meine Daten? Wer hat Zugriff?"

---

### Kanal-Matrix

| Kanal | PrioritÃ¤t | Zielgruppe | Content-Format |
|---|---|---|---|
| **Organic SEO** | Hoch | 35-55, sucht aktiv | Blogposts, How-to, Long-form |
| **Pinterest** | Hoch | 35-60, Frauen | Rezept-Karten, Infografiken, Zitate |
| **Instagram** | Mittel | 28-45 | Reels, Stories, Zitat-Cards |
| **Facebook** | Mittel | 45-65 | Gruppen, Text-Posts, Videos |
| **YouTube** | Mittel | 40-70 | Tutorials, Story-Videos |
| **E-Mail Newsletter** | Hoch | Alle registrierten | WÃ¶chentliche Prompts, Updates |
| **PR** | Mittel | Breit | Pressemitteilungen, Interviews |
| **TikTok** | Niedrig | Unter 35 (SekundÃ¤r) | Kurzvideos "Oma erklÃ¤rt" |

---

## 7. Pricing-Kommunikation

### Preisarchitektur

| Plan | Preis | Monatlich | JÃ¤hrlich | Positionierung |
|---|---|---|---|---|
| **Kostenlos** | â‚¬0 | - | - | "Legt los, ohne Kreditkarte" |
| **Pro** | â‚¬9,90/Monat | oder â‚¬79/Jahr | (33% Ersparnis) | "FÃ¼r engagierte Familien" |
| **Familie+** | â‚¬14,90/Monat | oder â‚¬119/Jahr | (33% Ersparnis) | "FÃ¼r groÃŸe Familien" |

### Pricing-Messaging

**Free:**
> "Kostenlos starten. FÃ¼r immer. 5 Familienmitglieder, 20 EintrÃ¤ge - genug, um anzufangen."

**Pro:**
> "Weniger als ein Kaffee im Monat. Unbegrenzte EintrÃ¤ge, unbegrenzte Mitglieder, KI-Prompts, Export. FÃ¼r Familien, die es ernst meinen."

**Familie+:**
> "FÃ¼r groÃŸe Familien und mehrere Vault-Gruppen. PrioritÃ¤ts-Support und frÃ¼her Zugang zu neuen Features."

### Value Anchoring

- Vergleich: "Ein Kaffee kostet â‚¬3,50. Pro kostet â‚¬9,90 - fÃ¼r das Erbe eurer ganzen Familie."
- Vergleich: "Ein Fotoalbum-Druck kostet â‚¬40-80. Ahnenecho Pro ist â‚¬79 fÃ¼r ein ganzes Jahr."
- Emotion: "Was wÃ¤re es euch wert, Omas Rezept in 20 Jahren noch lesen zu kÃ¶nnen?"

### Upgrade-Trigger in der App

- Bei Erreichen von 80 % des Free-Limits: Banner "Fast voll - hol dir Pro"
- Nach erfolgreichem ersten Eintrag: "Das war einfach. Mit Pro unbegrenzt."
- Nach Einladung von 4 Mitgliedern: "Noch eine Person fehlt? Mit Pro unbegrenzt einladen."

---

## 8. Wachstumsmechaniken

### Viraler Loop

Ahnenecho ist inhÃ¤rent viral durch den Einladungs-Mechanismus:
1. User A registriert sich und erstellt einen Vault
2. User A lÃ¤dt Familie (5-15 Personen) ein
3. Jede Einladungs-E-Mail enthÃ¤lt Ahnenecho-Branding
4. Eingeladene sehen die App, teilen teilweise weiter

**Virality Coefficient Ziel: K > 1.2** (Jeder neue Nutzer bringt >1.2 weitere)

### Retention-Mechaniken

- **WÃ¶chentliche Prompts:** Aktive E-Mail / Push - erinnert an die App
- **"Diesen Monat fehlt noch:"** Dashboard-Widget mit Kategorie-LÃ¼cken
- **Geburtstag-Erinnerung:** "Heute hat [Familienmitglied] Geburtstag - schreib ihm eine Erinnerung"
- **JahresrÃ¼ckblick:** Automatisch generierte Zusammenfassung jedes Jahr (wie Spotify Wrapped)

### Referral-Programm

- "Lade deine Familie ein und erhalte 1 Monat Pro gratis"
- Jede erfolgreiche Einladung, die zur Registrierung fÃ¼hrt: +2 Wochen Pro
- Keine komplexe Mechanik - einfach und transparent

---

## Anhang: Marken-Checkliste

Verwende diese Checkliste bei jedem neuen UI-Element oder Marketing-Material:

- [ ] Farbe: Nur Warm-TÃ¶ne. Kein Blau, Lila oder Kaltgrau als Akzent.
- [ ] Schrift: Body-Text minimum 16px.
- [ ] Touch-Targets: Alle Buttons/Links minimum 44Ã—44px.
- [ ] Sprache: Warm, persÃ¶nlich, nie technisch. Keine Buzzwords.
- [ ] Strings: Alle UI-Texte Ã¼ber `useTranslations`, nie hart kodiert.
- [ ] Dark Mode: Jedes neue Element auf beiden Themes getestet.
- [ ] Barrierefreiheit: Alt-Text, ARIA-Labels, Keyboard-Navigation.
- [ ] Em-Dash (â€”): Niemals verwenden. Stattdessen Komma oder Satz trennen.
- [ ] Animation: `prefers-reduced-motion` respektiert.
- [ ] Kontrast: WCAG AA (4.5:1 fÃ¼r FlieÃŸtext, 3:1 fÃ¼r groÃŸe Schrift).


## ./legal-docs/agb.md
# Allgemeine Geschäftsbedingungen (AGB)

Stand: {{MONAT}} {{JAHR}}

## § 1 Geltungsbereich

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (nachfolgend „Anbieter"), gelten für alle Verträge über die Nutzung der Software-as-a-Service-Plattform {{PROJEKTNAME}} (nachfolgend „Plattform"), die über die Website {{DOMAIN}} bereitgestellt wird.

(2) Die Plattform richtet sich an Unternehmen und gewerbliche Nutzer (nachfolgend „Auftraggeber") sowie deren Benutzer (nachfolgend „Nutzer"). Es handelt sich um ein B2B-Angebot. Verbraucher im Sinne des § 13 BGB sind nicht Zielgruppe dieses Angebots.

(3) Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt deren Geltung ausdrücklich schriftlich zu.

## § 2 Vertragsschluss

(1) Die Darstellung der Plattform und ihrer Funktionen auf der Website stellt kein verbindliches Angebot im Sinne des § 145 BGB dar, sondern eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum).

(2) Der Auftraggeber gibt ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab, indem er den Registrierungsprozess auf der Plattform abschließt und diese AGB akzeptiert.

(3) Der Vertrag kommt zustande, wenn der Anbieter das Angebot des Auftraggebers durch Freischaltung des Zugangs annimmt.

## § 3 Leistungsbeschreibung

(1) Der Anbieter stellt dem Auftraggeber die Plattform als Software-as-a-Service (SaaS) über das Internet zur Verfügung.

(2) Der genaue Funktionsumfang ergibt sich aus der jeweils aktuellen Leistungsbeschreibung auf der Website.

(3) Der Anbieter ist berechtigt, die Plattform weiterzuentwickeln, zu erweitern und anzupassen. Wesentliche Einschränkungen des Funktionsumfangs werden dem Auftraggeber vorab mitgeteilt.

## § 4 Nutzungsrechte

(1) Der Anbieter räumt dem Auftraggeber für die Vertragslaufzeit ein einfaches, nicht übertragbares, nicht unterlizenzierbares Recht zur Nutzung der Plattform ein.

(2) Der Auftraggeber darf die Plattform nur für eigene betriebliche Zwecke nutzen.

## § 5 Pflichten des Auftraggebers

(1) Der Auftraggeber ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.

(2) Der Auftraggeber stellt sicher, dass die Nutzung der Plattform im Einklang mit geltendem Recht erfolgt.

## § 6 Verfügbarkeit

(1) Der Anbieter bemüht sich um eine Verfügbarkeit der Plattform von 99,5 % im Jahresmittel.

(2) Nicht als Ausfallzeit gelten geplante Wartungsarbeiten, die vorab angekündigt werden.

## § 7 Datenschutz

Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung des Anbieters und den Bestimmungen der DSGVO.

## § 8 Haftung

(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit.

(2) Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.

## § 9 Vertragslaufzeit und Kündigung

(1) Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von einem Monat zum Monatsende gekündigt werden.

(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

## § 10 Schlussbestimmungen

(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

(2) Gerichtsstand ist Eschborn, sofern der Auftraggeber Kaufmann ist.

(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.

---

> **Hinweis:** Dies ist ein Muster. Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen. Lass die AGB vor Veröffentlichung von einem Juristen prüfen.

## ./legal-docs/company-stamp.md
# Firmenstempel / Company Stamp

## Deutsch

### WAMOCON GmbH

**Geschäftsführer:** Dipl.-Ing. Waleri Moretz

**Anschrift:**
Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

**Kontakt:**
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com

**Registrierung:**
Handelsregister: Eschborn HRB 123666
USt-IdNr.: DE344930486

---

## English

### WAMOCON GmbH

**Managing Director:** Dipl.-Ing. Waleri Moretz

**Address:**
Mergenthalerallee 79 - 81
65760 Eschborn
Germany

**Contact:**
Phone: +49 6196 5838311
Email: info@wamocon.com

**Registration:**
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## ./legal-docs/datenschutzerklaerung.md
# Datenschutzerklärung

Stand: {{MONAT}} {{JAHR}}

## 1. Verantwortlicher

Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: {{PROJEKT_EMAIL}}
Geschäftsführer: Dipl.-Ing. Waleri Moretz
Handelsregister: Eschborn HRB 123666
USt-ID: DE344930486

## 2. Überblick über die Datenverarbeitung

Diese Datenschutzerklärung gilt für die Website und Webanwendung {{PROJEKTNAME}} ({{DOMAIN}}).

Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Plattform sowie unserer Inhalte und Leistungen erforderlich ist.

## 3. Rechtsgrundlagen der Verarbeitung

- **Einwilligung** – Art. 6 Abs. 1 lit. a DSGVO
- **Vertragserfüllung** – Art. 6 Abs. 1 lit. b DSGVO
- **Rechtliche Verpflichtung** – Art. 6 Abs. 1 lit. c DSGVO
- **Berechtigtes Interesse** – Art. 6 Abs. 1 lit. f DSGVO

## 4. Hosting und Infrastruktur

### Vercel Inc.
Die Website und Webanwendung werden über Vercel gehostet. Dabei verarbeitet Vercel technisch notwendige Verbindungsdaten (IP-Adresse, Zeitstempel, Browserinformationen). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

### Supabase Inc.
Für Datenbank, Authentifizierung, Dateispeicher und Teile der Backend-Infrastruktur nutzen wir Supabase. Verarbeitet werden Authentifizierungsdaten, Session-Informationen, Projektdaten sowie gespeicherte Medien. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

## 5. Erhebung personenbezogener Daten

### Registrierung und Nutzerkonto
Bei der Registrierung erheben wir: Name, E-Mail-Adresse und Passwort. Diese Daten sind zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO).

### Server-Logfiles
Bei jedem Zugriff auf unsere Plattform werden automatisch folgende Daten erfasst: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL, Browser-Typ und -Version. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

## 6. Cookies und Tracking

Die Plattform verwendet technisch notwendige Cookies für Session-Management und Authentifizierung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

## 7. Rechte der betroffenen Personen

Sie haben das Recht auf:
- **Auskunft** (Art. 15 DSGVO)
- **Berichtigung** (Art. 16 DSGVO)
- **Löschung** (Art. 17 DSGVO)
- **Einschränkung der Verarbeitung** (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** (Art. 21 DSGVO)
- **Widerruf** erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)
- **Beschwerde** bei einer Aufsichtsbehörde (Art. 77 DSGVO)

## 8. Datensicherheit

Wir setzen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.

## 9. Änderung der Datenschutzerklärung

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen der Plattform anzupassen.

---

> **Hinweis:** Dies ist ein Muster. Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen. Lass die Datenschutzerklärung vor Veröffentlichung von einem Juristen prüfen.

## ./legal-docs/impressum.md
# Impressum

Stand: {{MONAT}} {{JAHR}}

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

## Kontakt

Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: {{PROJEKT_EMAIL}}

## Vertretungsberechtigter Geschäftsführer

Dipl.-Ing. Waleri Moretz

## Registereintrag

Sitz der Gesellschaft: Eschborn
Handelsregister: Eschborn HRB 123666
Umsatzsteuer-Identifikationsnummer: DE344930486

## Angaben zum Angebot

{{PROJEKTNAME}} ist eine webbasierte Software-as-a-Service-Plattform für {{BESCHREIBUNG_DES_ANGEBOTS}}. Das Angebot richtet sich primär an Unternehmen und gewerbliche Nutzer.

---

> **Hinweis:** Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen.

## ./legal-docs/imprint.md
# Imprint (Legal Notice)

As of: {{MONTH}} {{YEAR}}

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Germany

## Contact

Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: {{PROJECT_EMAIL}}

## Authorized Managing Director

Dipl.-Ing. Waleri Moretz

## Registration

Registered Office: Eschborn
Commercial Register: Eschborn HRB 123666
VAT Identification Number: DE344930486

## About the Service

{{PROJECT_NAME}} is a web-based Software-as-a-Service platform for {{SERVICE_DESCRIPTION}}. The service is primarily aimed at businesses and commercial users.

---

> **Note:** Replace all `{{PLACEHOLDERS}}` with your project-specific information.

## ./legal-docs/privacy-policy.md
# Privacy Policy

As of: {{MONTH}} {{YEAR}}

## 1. Data Controller

The Data Controller as defined by the General Data Protection Regulation (GDPR) is:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn, Germany
Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: {{PROJECT_EMAIL}}
Managing Director: Dipl.-Ing. Waleri Moretz
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## 2. Overview of Data Processing

This Privacy Policy applies to the website and web application {{PROJECT_NAME}} ({{DOMAIN}}).

We process personal data of our users only insofar as this is necessary to provide a functional platform and our content and services.

## 3. Legal Basis for Processing

- **Consent** – Art. 6(1)(a) GDPR
- **Performance of Contract** – Art. 6(1)(b) GDPR
- **Legal Obligation** – Art. 6(1)(c) GDPR
- **Legitimate Interest** – Art. 6(1)(f) GDPR

## 4. Hosting and Infrastructure

### Vercel Inc.
The website and web application are hosted via Vercel. Vercel processes technically necessary connection data (IP address, timestamp, browser information). Legal basis: Art. 6(1)(f) GDPR.

### Supabase Inc.
We use Supabase for database, authentication, file storage, and parts of the backend infrastructure. Authentication data, session information, project data, and stored media are processed. Legal basis: Art. 6(1)(b) GDPR.

## 5. Collection of Personal Data

### Registration and User Account
During registration we collect: name, email address, and password. This data is necessary for the performance of the contract (Art. 6(1)(b) GDPR).

### Server Log Files
Each access to our platform automatically records: IP address, date and time, page accessed, referrer URL, browser type and version. Legal basis: Art. 6(1)(f) GDPR.

## 6. Cookies and Tracking

The platform uses technically necessary cookies for session management and authentication. Legal basis: Art. 6(1)(f) GDPR.

## 7. Rights of Data Subjects

You have the right to:
- **Access** (Art. 15 GDPR)
- **Rectification** (Art. 16 GDPR)
- **Erasure** (Art. 17 GDPR)
- **Restriction of processing** (Art. 18 GDPR)
- **Data portability** (Art. 20 GDPR)
- **Object** (Art. 21 GDPR)
- **Withdraw consent** (Art. 7(3) GDPR)
- **Lodge a complaint** with a supervisory authority (Art. 77 GDPR)

## 8. Data Security

We employ state-of-the-art technical and organisational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or access by unauthorised persons.

## 9. Changes to this Privacy Policy

We reserve the right to amend this Privacy Policy to reflect changes in the law or changes to the platform.

---

> **Note:** This is a template. Replace all `{{PLACEHOLDERS}}` with your project-specific information. Have the Privacy Policy reviewed by a lawyer before publication.

## ./legal-docs/terms-and-conditions.md
# Terms and Conditions

As of: {{MONTH}} {{YEAR}}

## § 1 Scope

(1) These Terms and Conditions (hereinafter "T&C") of WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (hereinafter "Provider"), apply to all contracts for the use of the Software-as-a-Service platform {{PROJECT_NAME}} (hereinafter "Platform"), provided via the website {{DOMAIN}}.

(2) The Platform is aimed at businesses and commercial users (hereinafter "Client") and their respective users (hereinafter "Users"). This is a B2B offering. Consumers within the meaning of § 13 BGB (German Civil Code) are not the target audience.

(3) Deviating, conflicting, or supplementary terms and conditions of the Client shall not become part of the contract unless the Provider expressly agrees in writing.

## § 2 Conclusion of Contract

(1) The presentation of the Platform and its features on the website does not constitute a binding offer within the meaning of § 145 BGB, but rather an invitation to submit an offer (invitatio ad offerendum).

(2) The Client submits a binding offer by completing the registration process on the Platform and accepting these T&C.

(3) The contract is concluded when the Provider accepts the Client's offer by activating access.

## § 3 Service Description

(1) The Provider makes the Platform available to the Client as Software-as-a-Service (SaaS) via the Internet.

(2) The precise scope of features is set out in the current service description on the website.

(3) The Provider is entitled to further develop, expand, and adapt the Platform. Material restrictions to the scope of features will be communicated to the Client in advance.

## § 4 Usage Rights

(1) The Provider grants the Client a simple, non-transferable, non-sublicensable right to use the Platform for the duration of the contract.

(2) The Client may only use the Platform for its own business purposes.

## § 5 Client Obligations

(1) The Client shall keep its access credentials confidential and protect them from third-party access.

(2) The Client shall ensure that use of the Platform complies with applicable law.

## § 6 Availability

(1) The Provider shall endeavour to maintain an annual average availability of 99.5%.

(2) Scheduled maintenance windows announced in advance shall not count as downtime.

## § 7 Data Protection

The processing of personal data is governed by the Provider's Privacy Policy and the provisions of the GDPR.

## § 8 Liability

(1) The Provider shall be fully liable for damages arising from injury to life, body, or health, as well as for intent and gross negligence.

(2) Otherwise, liability is limited to foreseeable, typically occurring damages.

## § 9 Contract Duration and Termination

(1) The contract is concluded for an indefinite period and may be terminated by either party with one month's notice to the end of a calendar month.

(2) The right to extraordinary termination for good cause remains unaffected.

## § 10 Final Provisions

(1) The law of the Federal Republic of Germany shall apply, excluding the UN Convention on Contracts for the International Sale of Goods.

(2) The place of jurisdiction is Eschborn, provided the Client is a merchant.

(3) Should individual provisions of these T&C be invalid, the validity of the remaining provisions shall remain unaffected.

---

> **Note:** This is a template. Replace all `{{PLACEHOLDERS}}` with your project-specific information. Have the T&C reviewed by a lawyer before publication.

## ./target_repo/.github/agents/anforderungsdokument.agent.md
---
name: anforderungsdokument
description: >
  Spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
  Erstellt ein vollständiges 9-Kapitel-Anforderungsdokument als .docx für
  Web-/SaaS-Applikationen. Erzwingt: ausschließlich Web/SaaS (keine mobilen Apps),
  nur Quellen nicht älter als 1 Jahr.
---

# Agent: anforderungsdokument

## Rolle

Du bist ein spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
Du agierst als interdisziplinäres Expertenteam: Senior Product Manager, Market Research
Analyst und Tech Lead. Deine Denkweise ist analytisch, datengestützt, kritisch und
lösungsorientiert.

Du erstellst vollständige, professionelle Anforderungsdokumente als `.docx`-Datei
nach der verbindlichen 9-Kapitel-WAMOCON-Struktur (definiert in
`.github/skills/anforderungsdokument/SKILL.md`).

---

## Absolute Regeln (nicht verhandelbar)

> **⚠️ QUELLENREGEL (STRIKT):**
> Alle verwendeten Quellen, Statistiken und Marktdaten müssen **nicht älter als 1 Jahr**
> sein (ab aktuellem Datum). Quellen, die älter als 12 Monate sind, sind **strikt verboten**.
> Kein Erscheinungsdatum → Quelle nicht verwenden. Keine Ausnahmen.

> **⚠️ PLATTFORMREGEL (STRIKT):**
> Das Dokument beschreibt ausschließlich **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **vollständig aus dem Scope**
> **ausgeschlossen** und dürfen unter keinen Umständen erwähnt werden. Keine Ausnahmen.

---

## Wann verwenden

- Wenn eine neue App-Idee ausgearbeitet werden soll.
- Bevor die Implementierung startet - Freigabe durch die Geschäftsführung ist Pflicht.
- Wenn ein strukturiertes Anforderungsdokument für die Geschäftsführung benötigt wird.
- Immer als ersten Schritt nach dem Ausfüllen von `IDEA.md`.

---

## Workflow

1. **SKILL.md lesen** - `.github/skills/anforderungsdokument/SKILL.md` vollständig einlesen.
2. **IDEA.md lesen** - Alle Informationen aus `IDEA.md` im Projekt-Root einlesen.
3. **Quellen recherchieren** - Ausschließlich Quellen und Daten verwenden, die nicht älter als 1 Jahr sind. Veraltete Quellen werden abgelehnt.
4. **Dokument erstellen** - Verbindliche 9-Kapitel-Struktur aus dem SKILL.md einhalten.
5. **Skript generieren** - `scripts/generate-anforderungsdokument.mjs` erstellen/aktualisieren.
6. **Dokument ausgeben** - `node scripts/generate-anforderungsdokument.mjs` ausführen → `public/Anforderungsdokument_[ProjektName].docx`.
7. **Zur Freigabe vorlegen** - Dem Nutzer das Dokument zur Prüfung vorlegen und Freigabe einholen.

---

## Verwendung

### Schritt 1: IDEA.md ausfüllen

Fülle `IDEA.md` im Projekt-Root mit der App-Idee aus, bevor du diesen Agent aufrufst.

### Schritt 2: Prompt kopieren und senden

Kopiere den folgenden Prompt vollständig, ersetze `[APP-IDEE aus IDEA.md]` mit dem
Inhalt deiner `IDEA.md`, und sende ihn:

---

```
Lies zunächst die Datei .github/skills/anforderungsdokument/SKILL.md vollständig,
bevor du beginnst.

Rolle: Du agierst als interdisziplinäres Expertenteam: Senior Product Manager,
Market Research Analyst und Tech Lead.
Denkweise: analytisch, datengestützt, kritisch, lösungsorientiert.

Kontext: Wir entwickeln ein neues Web-/SaaS-Tool.
Plattform: Ausschließlich Web und SaaS - KEINE mobile App (kein iOS, kein Android,
kein React Native, kein Flutter). Alle Anforderungen beziehen sich auf Browser-basierte
Web-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.

[APP-IDEE aus IDEA.md einfügen]

Aufgabe: Erstelle ein vollständiges WAMOCON-Anforderungsdokument nach der
verbindlichen 9-Kapitel-Struktur aus dem SKILL.md. Jedes Kapitel muss mit echten,
belegten Daten und Quellen gefüllt werden. Keine Platzhalter.

STRIKT – QUELLENREGEL (absolut bindend):
- Alle verwendeten Quellen, Statistiken, Marktzahlen und Studien MÜSSEN aus den
  letzten 12 Monaten stammen (nicht älter als 1 Jahr ab heutigem Datum).
- Quellen, die älter als 1 Jahr sind, sind VERBOTEN und dürfen unter keinen
  Umständen verwendet werden.
- Jede Zahl benötigt eine Quellenangabe mit Datum/Erscheinungsjahr.
- Im Quellenverzeichnis muss für jede Quelle das Veröffentlichungsdatum angegeben werden.
- Kannst du eine Zahl nicht mit einer aktuellen Quelle belegen, lass sie weg oder
  kennzeichne sie explizit als Schätzung.

STRIKT – PLATTFORMREGEL (absolut bindend):
- Das Dokument beschreibt ausschließlich eine Web-/SaaS-Applikation.
- Mobile Apps (iOS, Android, React Native, Flutter, PWA als App-Store-App) sind aus
  dem Scope ausgeschlossen und dürfen NICHT erwähnt werden.
- Responsives Web Design (Browser auf Desktop/Laptop/Tablet) ist erlaubt und erwünscht.

Das Dokument wird als .docx generiert:
Skript: scripts/generate-anforderungsdokument.mjs
Ausgabe: public/Anforderungsdokument_[ProjektName].docx

Weitere Regeln:
- Anforderungstabellen mit ID-Präfix (z.B. K-, B-, R-)
- Wettbewerber mit echten Stärken UND Schwächen
- Ehrliche Risikoanalyse, keine Schönrede
- Ton: professionell, direkt, beratend, auf Deutsch mit echten Umlauten (Ä, Ö, Ü, ß)
- Kosten realistisch: GitHub Copilot 35 EUR/Monat, Supabase 10 EUR/Monat,
  Domain 2–4 EUR/Monat, ggf. API-Kosten
- V1 muss in 5–7 Werktagen realisierbar sein

Führe nach der Erstellung folgende Schritte aus:
1. Erstelle/aktualisiere scripts/generate-anforderungsdokument.mjs
2. Führe aus: node scripts/generate-anforderungsdokument.mjs
3. Bestätige die Ausgabe: public/Anforderungsdokument_[ProjektName].docx
```

---

## Regeln

- **Niemals Mobile** - Kein Wort über iOS, Android, React Native oder Flutter im Dokument.
- **Nur aktuelle Quellen** - Quellen älter als 1 Jahr werden abgelehnt. Keine Ausnahmen.
- **Kein Schönreden** - Risiken und Schwächen müssen ehrlich benannt werden.
- **Kein Platzhalter** - Jedes Kapitel muss mit echten Daten gefüllt sein.
- **Deutsch mit echten Umlauten** - Ä, Ö, Ü, ß. Kein ae/oe/ue in Fließtexten.
- **Quellenverzeichnis mit Datum** - Jede Quelle muss mit Veröffentlichungsdatum angegeben sein.
- **Freigabe zuerst** - Vor der Implementierung immer Freigabe durch die Geschäftsführung einholen.
- **SKILL.md zuerst lesen** - Vor jeder Dokumenterstellung das SKILL.md vollständig einlesen.

## ./target_repo/.github/agents/developer.agent.md
---
name: Developer
description: >
  Structured development agent. Implements features step-by-step following a plan,
  tests locally, checks for errors, updates documentation, and verifies build quality
  before delivering the final result.
---
# Agent: Developer

## Role

You are a senior full-stack developer for a Next.js 16 / TypeScript / Supabase project. You implement features methodically, following an approved plan, and deliver production-ready code.

## When to Use

Use this agent when:
- Implementing a feature from a plan (ideally produced by the Planner agent).
- Building new pages, components, API routes, or Server Actions.
- Making database schema changes and writing corresponding code.
- Supabase Docker creation: When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
- Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
- Vercel-Ready app: The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.

## Workflow

Follow this structured process for every task:

### Phase 1: Preparation
1. **Read the plan** - If a plan exists, follow it step by step. If not, ask the user for requirements or invoke the Planner agent first.
2. **Check the product handbook** - If a handbook exists (`docs/handbook.md` or similar), read it. If it is missing and the feature impacts user-facing behaviour, ask the user for the missing context before proceeding.
3. **Understand existing code** - Read related files before modifying them. Never guess at structure - explore first.

### Phase 2: Implementation
4. **Implement incrementally** - Build one piece at a time. After each logical step:
   - Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.
   - Save the file.
   - Check for TypeScript errors in the file.
   - Fix any errors before moving to the next step.
5. **Follow project conventions** - Use existing patterns, import aliases (`@/`), named exports, Server Components by default, and the project's established component structure.
6. **Create tests if applicable** - If the project has a test setup, add tests for new logic.

### Phase 3: Verification (MANDATORY before final response)
7. **Run typecheck** - Execute `npm run typecheck` and fix all errors.
8. **Run lint** - Execute `npm run lint` and fix all errors.
9. **Run build** - Execute `npm run build` and ensure it succeeds without errors.
10. **Check terminal for errors** - Review the terminal output for any warnings or errors that might affect runtime behaviour.
11. **Test locally** - Start `npm run dev` and verify the feature works as expected in the browser. Check both the happy path and edge cases.
12. **Visual verification with `next-browser`** (if installed) - Use the `next-browser` skill to visually confirm the feature:
    - `next-browser open http://localhost:3000` - open the dev server.
    - `next-browser snapshot` - inspect the accessibility tree and interactive elements.
    - `next-browser errors` - confirm no runtime or build errors.
    - `next-browser screenshot "after implementation"` - document the result.
    - `next-browser perf` - check Core Web Vitals if the feature affects page load.
    - Install: `npm install -g @vercel/next-browser && playwright install chromium`

### Phase 4: Documentation
12. **Update handbook** - If a product handbook exists and the feature changes user-facing behaviour, update it. If the handbook is missing, inform the user.
13. **Summarise changes** - Provide a brief summary of what was implemented, which files were changed, and any decisions made.

## Rules

- **Never skip verification** - Steps 7–11 are mandatory. Always run typecheck, lint, and build before declaring a task complete.
- **Fix errors immediately** - If typecheck, lint, or build fails, fix the issues before proceeding.
- **Read before writing** - Always read a file before modifying it.
- **One change at a time** - Make small, focused edits. Verify after each change.
- **Ask when unclear** - If requirements are ambiguous, ask rather than guess.
- **No over-engineering** - Only implement what was requested. No unrequested refactors, extra features, or "improvements".

## ./target_repo/.github/agents/planner.agent.md
---
name: Planner
description: >
  Technical planning agent. Explores the codebase, gathers context, clarifies requirements,
  and produces an actionable implementation plan before any code is written.
---
# Agent: Planner

## Role

You are a senior technical planner for a Next.js 16 / TypeScript / Supabase project. Your job is to **think before coding** - analyse requirements, explore the codebase, identify affected files, and produce a clear, actionable implementation plan.

## When to Use

Use this agent when:
- Starting a new feature or user story.
- Facing a task with unclear scope or multiple valid approaches.
- Planning a refactor or migration.
- Before making architectural decisions.

## Workflow

1. **Understand the request** - Read the user's description carefully. Ask clarifying questions if requirements are vague or ambiguous.
2. **Explore the codebase** - Search for related files, patterns, components, and utilities already in the project. Understand the current architecture before proposing changes.
3. **Check the product handbook** - If a product handbook/manual exists (e.g. `docs/handbook.md` or similar), read it to understand business context and existing features.
4. **Identify affected areas** - List every file, component, route, API endpoint, and database table that will be created or modified.
5. **Propose the plan** - Write a numbered step-by-step implementation plan with:
   - What to build and where.
   - Which components/files to create or modify.
   - Database schema changes (if any).
   - Dependencies or packages needed (if any).
   - Potential risks or edge cases.
6. **Wait for approval** - Present the plan to the user and wait for confirmation before proceeding.

## Rules

- **Never write code** - your output is a plan, not an implementation.
- **Be specific** - reference exact file paths, component names, and function signatures.
- **Flag unknowns** - if something is ambiguous, say so and suggest options.
- **Consider the stack** - all solutions must align with Next.js 16 App Router, TypeScript strict mode, Tailwind CSS v4, and Supabase.

## ./target_repo/.github/agents/reviewer.agent.md
---
name: Reviewer
description: >
  Code review and quality assurance agent. Reviews code for correctness, security,
  performance, and adherence to project conventions. Runs all checks and produces
  a structured review report.
---
# Agent: Reviewer

## Role

You are a senior code reviewer and QA engineer for a Next.js 16 / TypeScript / Supabase project. Your job is to verify that code is production-ready, secure, and follows project standards.

## When to Use

Use this agent when:
- Reviewing code before a PR or merge.
- Checking if a feature is complete and correct.
- Auditing code quality, security, or performance.
- Validating that all checks pass before deployment.

## Review Checklist

### 1. Code Quality
- [ ] Code follows the project's TypeScript conventions (strict mode, no `any`).
- [ ] Named exports used for components, not default exports.
- [ ] `import type` used for type-only imports.
- [ ] `@/` alias used for project-internal imports.
- [ ] No unused imports, variables, or dead code.

### 2. Next.js 16 Compliance
- [ ] Server Components by default - `"use client"` only where necessary.
- [ ] `params`, `searchParams`, `cookies()`, `headers()` are `await`-ed.
- [ ] Metadata API used for SEO (not `<Head>` from Pages Router).
- [ ] `next/image`, `next/font`, `next/link` used for optimisation.
- [ ] Error boundaries (`error.tsx`) and loading states (`loading.tsx`) present where needed.

### 3. Supabase & Security
- [ ] RLS enabled on all tables.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` never exposed to the browser.
- [ ] Proper client used (server client in RSC/Server Actions, browser client in Client Components).
- [ ] User input validated and sanitised (especially in Server Actions).
- [ ] No SQL injection vectors in raw queries.

### 4. Styling
- [ ] Tailwind utility classes used consistently.
- [ ] Responsive design tested (`sm:`, `md:`, `lg:` breakpoints).
- [ ] Dark mode support if applicable.
- [ ] Accessible colour contrast (WCAG AA).

### 5. Build & Runtime Verification
- [ ] `npm run typecheck` passes with zero errors.
- [ ] `npm run lint` passes with zero errors.
- [ ] `npm run build` succeeds.
- [ ] App runs without console errors in `npm run dev`.
- [ ] Feature works correctly in the browser.

## Output Format

Produce a structured review report:

```
## Review Summary

**Status:** ✅ Approved / ⚠️ Needs Changes / ❌ Blocked

### Issues Found
1. [SEVERITY] Description - file:line
2. ...

### Suggestions (non-blocking)
1. Description

### Checks
- [x] Typecheck passed
- [x] Lint passed
- [x] Build passed
- [x] Runtime tested
```

## ./target_repo/.github/copilot-instructions.md
# Copilot Global Instructions

You are working on a **Next.js 16** project using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase** as the backend.

---

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first)
- **Backend/DB:** Supabase (PostgreSQL, Auth, Storage, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)
- **Package Manager:** npm

---

## Critical Rules

1. **Read the docs first.** Next.js 16 has breaking changes. Always check `node_modules/next/dist/docs/` before implementing any Next.js API. Heed deprecation notices.
2. **Server Components by default.** Only use `"use client"` when the component needs interactivity, hooks, or browser APIs. Keep Client Components at the leaves of the component tree.
3. **Async APIs.** In Next.js 16, `params`, `searchParams`, `cookies()`, and `headers()` are async - always `await` them.
4. **No local test data.** All test/seed data goes directly into Supabase (via Dashboard, MCP, or migration scripts) - never as JSON fixtures or SQL dumps in the project directory.
5. **Environment variables.** Use `NEXT_PUBLIC_` prefix only for variables that must be accessible in the browser. Server-only secrets (e.g. `SUPABASE_SERVICE_ROLE_KEY`) must never be prefixed.
6. **Schema awareness.** The project may use a custom Supabase schema defined in `SUPABASE_DB_SCHEMA` env variable. Always reference this when creating Supabase clients or writing migrations.
7. **Supabase Docker creation.** When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
8. **Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
9. **Vercel-Ready app** when deployed. The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.


## Additional App Creation Rules

When creating a new app or major app surface, always follow these rules:

1. **Mandatory multilingual support (EN + DE) using Next.js App Router and next-intl.**
  - Implement next-intl specifically configured for the Next.js App Router architecture.
	- Always use the `useTranslations` hook for all user-facing text. Never hardcode strings in components.
	- Implement a language switcher in the app header that allows users to toggle between English and German.
	- Store and  maintain translations in dedicated JSON files (e.g. `en.json`, `de.json`) and configure next-intl routing accordingly.
	- To add a new language, create a new JSON file and register it within the next-intl routing configuration.
2. **Mandatory light and dark themes.**
	- Every app must support both light mode and dark mode.
	- Ensure both themes are implemented consistently across all key screens.
3. **Branding and homepage quality.**
	- Create a unique, meaningful, and professional app logo.
	- Save and use this logo as the favicon and as a visible brand asset in the app.
	- Build a professional homepage that clearly communicates the app purpose, value, and core functionality.
4. **Legal content in footer.**
	- Use legal documents from the `legal-docs` folder.
	- Include legal links and the company sign/stamp reference in the app footer.

---

## Workflow Orchestration

### First: Ask the User About Their Database Setup

At the **start of every new project or major feature**, always ask:

> "How do you want to work with Supabase for this project?"
> - **(A) Local development** - I will set up Supabase locally using Docker and the Supabase CLI, establish a migration-based workflow, and develop everything on your machine first.
> - **(B) Hosted Supabase** - I will connect to your hosted Supabase project (with optional multi-schema support) and use MCP for all database operations.

- If the user chooses **(A)**: follow the `localsupabase.instructions.md` workflow in full - Docker pre-flight checks, migration versioning, seed data, and integration tests.
- If the user chooses **(B)**: follow the `supabase.instructions.md` hosted workflow - ask about multi-schema requirements, detect the MCP access token, and use MCP exclusively for all schema and data operations.
- If the context makes the choice obvious (e.g. the user says "I want to set up locally"), proceed with that path without asking.

### Planning
- For ANY non-trivial task (3+ steps or architectural decisions): use the `@planner` agent first. Do not start coding without a plan.
- If something goes sideways mid-implementation: STOP, re-plan, then continue. Do not keep pushing broken code.
- Write detailed specs upfront to reduce ambiguity. Vague requirements produce vague code.

### Implementation
- Use the `@developer` agent for structured implementation. It enforces a mandatory 4-phase process: Preparation → Implementation → Verification → Documentation.
- Keep changes minimal and focused. Only touch what is necessary for the task.
- After each logical step: check for TypeScript errors before moving on. Fix immediately, do not accumulate errors.
- Read files before editing them. Never guess at structure - explore first.
- Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.

### Verification (Non-Negotiable)
- Never declare a task complete without proving it works.
- Always run in this order before finishing: `npm run typecheck` → `npm run lint` → `npm run build` → test locally with `npm run dev`.
- Ask yourself: "Would a senior engineer approve this?" If not, fix it first.
- Check terminal output for warnings and runtime errors - not just build success.
- **Use `next-browser` for visual verification** - if `@vercel/next-browser` is installed, use it to inspect the running app: `next-browser snapshot` (DOM/accessibility), `next-browser errors` (runtime errors), `next-browser perf` (Core Web Vitals), `next-browser screenshot` (document state). See `.github/skills/next-browser/SKILL.md` for full usage.

### Code Review
- Use the `@reviewer` agent before opening a PR. It runs a structured checklist covering code quality, Next.js 16 compliance, Supabase security, styling, and build checks.
- For bugs: diagnose from logs/errors, resolve the root cause. No temporary patches.

### Elegance
- For non-trivial changes, pause and ask: "Is there a more elegant solution?"
- If a fix feels hacky: implement the clean solution instead.
- Skip this for simple, obvious fixes - do not over-engineer.

---

## Mandatory: Check Instructions & Skills on Every Request

Before responding to **every** user request, perform the following steps:

1. **Check applicable instruction files** - Identify which `.instructions.md` files in `.github/instructions/` apply to the current task (based on their `applyTo` glob pattern or `description`). Read and apply their rules before writing any code or plan.
2. **Check available skills** - Review `.github/skills/` for any skill relevant to the task (e.g. `next-browser` for visual verification). Load and apply the skill if applicable.
3. **Verify compliance** - At the end of your response, confirm internally: "Have I followed all applicable instructions and used relevant skills?" If not, correct before responding.

This check is non-negotiable and must run on every request, not just complex ones.

---

## Core Principles

- **Simplicity First.** Make every change as simple as possible. Impact minimal code.
- **No Laziness.** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact.** Only modify what is necessary. Avoid side effects and unrelated changes.
- **No Over-Engineering.** Do not add features, helpers, or abstractions beyond what was requested.
- **Ask When Unclear.** If requirements are ambiguous, ask rather than guess.

---

## Code Style

- Use `import type { ... }` for type-only imports.
- Prefer named exports over default exports for components (except Next.js route files like `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` which require default exports).
- Use `@/` import alias for project-internal imports.
- Follow existing patterns in the codebase - do not introduce new libraries or patterns without asking.

---

## Commit Message - End of Every Response

At the **end of every response** where files were created, modified, or deleted, generate a suggested Git commit message following [Conventional Commits](https://www.conventionalcommits.org/) format. Present it as:

```
Suggested commit:
<type>(<scope>): <short imperative summary>

<optional body: what changed and why, max 3 bullet points>
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`

**Rules for the commit message:**
- Use imperative mood: "add", "fix", "update" - not "added" or "adding".
- Scope is the module or area affected (e.g. `auth`, `db`, `ui`, `migrations`, `config`).
- Summary must be specific and meaningful - a senior engineer reading it must understand what changed without opening the diff.
- Only generate a commit message when files actually changed. Skip for pure Q&A responses.

## ./target_repo/.github/instructions/localsupabase.instructions.md
---
description: Load these instructions when the user is working with local Supabase development, Docker setup, local migrations, seeding data, or any task involving running Supabase on their local machine.
applyTo: "**/supabase/**,**/docker-compose*,**/.env.local,**/.env"
---

# Local Supabase (Docker) Workflow Instructions

You are acting as an expert DevOps and database engineer. Follow every rule below precisely and autonomously when the user is developing locally with Supabase.

---

## 1. Pre-Flight: Docker & Container Health Check

**Before executing any task**, run the following automated checks:

1. Verify Docker Desktop is running. If it is not, instruct the user to start it and wait - do not proceed until Docker is up.
2. Run `supabase status` to check if the local Supabase containers are running.
   - If they are **not running**: execute `supabase start` autonomously.
   - If they **are running**: confirm status and continue.
3. **Scan for other running Supabase instances** - check all Docker containers for any other Supabase stack (look for containers with names like `supabase_*` or `supabase-*` across all Docker namespaces).
   - If another instance is found, **do not proceed silently**. Instead:
     - List the container names and the project directory they belong to (read labels or bind-mount paths).
     - Display: "Found an existing local Supabase instance for project: **[project name / path]**."
     - Ask the user: "Do you want to (A) create a new separate local Supabase for this project, or (B) reuse/replace the existing one?"
     - Wait for the user's explicit choice before continuing.

---

## 2. Initial Schema & Migration File

When setting up a new project or applying a new schema:

- Create the initial database schema based on the app requirements.
- Save every schema change as a **formal Supabase migration file** in `supabase/migrations/` using the format: `YYYYMMDDHHMMSS_description.sql`.
- Never apply schema changes directly - always use migration files.

---

## 3. Environment Variables

After `supabase start` succeeds, **automatically extract** the following from the CLI output and append them to the project's `.env.local` file (create it if it does not exist):

```env
NEXT_PUBLIC_SUPABASE_URL=<local API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<local anon key>
SUPABASE_SERVICE_ROLE_KEY=<local service role key>
SUPABASE_DB_URL=<local DB connection string>
SUPABASE_DB_SCHEMA=public
```

- Never overwrite existing entries - check for duplicates first and update them in place.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.

---

## 4. Mock / Seed Data

When the user requests mock data or when the app requires initial data to function:

- Do **not** create JSON fixture files or SQL dump files in the project directory.
- Generate a `supabase/seed.sql` file with realistic `INSERT` statements covering all necessary tables.
- Run `supabase db reset` (which applies migrations then seeds but you need to update the migration but do not reset the database and delete existing data) if there is no existing data or execute `supabase db seed` to load the data directly into the local database if data does not already exist.
- Confirm to the user which tables were seeded and how many rows were inserted.

---

## 5. Autonomous Development & Schema Versioning

During feature development, apply the following rules unconditionally:

- Every table addition, column change, index, or function alteration **must** produce a new timestamped migration file. Never modify existing migration files.
- Migration naming convention: `YYYYMMDDHHMMSS_<short_description>.sql` (e.g. `20260409120000_add_user_profiles.sql`).
- After creating a migration, run `supabase migration up` to apply it and verify there are no errors.
- If a migration fails, diagnose the root cause and fix the SQL immediately - do not skip or comment out failing statements.
- Maintain a strict linear migration history. Migrations must never conflict or duplicate each other.

---

## 6. Production Deployment via MCP

- **Do not provide manual `supabase db push` commands** for production deployments.
- Your sole production responsibility is to guarantee that all local migrations are:
  1. Complete (cover all schema changes made during development).
  2. Valid.
  3. Idempotent where possible.
- Once local migrations are verified error-free, confirm to the user: "All migrations are up to date and ready for the Supabase MCP to deploy to production."
- The Supabase MCP handles live deployment. Do not attempt to replicate its functionality.

---

## 7. Automated Integration Testing

After Docker is running and migrations are applied, **automatically**:

1. Write a minimal integration test (in a `supabase/tests/` directory or as a standalone script) that:
   - Connects to the local Supabase instance using the service role key.
   - Performs one `INSERT` and one `SELECT` on a core table.
   - Asserts the read value matches the written value.
   - Cleans up the test record after the assertion.
2. Execute the test immediately.
3. If the test fails:
   - Print the error output in full.
   - Diagnose and fix the root cause autonomously.
   - Re-run the test until it passes.
   - Do not report success until the test is green.

## ./target_repo/.github/instructions/nextjs.instructions.md
---
applyTo: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js"
---
# Next.js 16 + App Router Instructions

## Server vs. Client Components

- Default to **Server Components** (no directive needed).
- Add `"use client"` only for components that use hooks (`useState`, `useEffect`, etc.), event handlers, or browser APIs.
- Keep Client Components as **leaf nodes** - push interactivity to the smallest possible component.

## Async APIs (Next.js 16 Breaking Change)

In Next.js 16, the following are **async** and must be awaited:

```tsx
// ✅ Correct
const { id } = await params;
const query = await searchParams;
const cookieStore = await cookies();
const headerList = await headers();

// ❌ Wrong - these are no longer synchronous
const { id } = params;           // Will fail
const query = searchParams;       // Will fail
```

## Data Fetching

- Fetch data in Server Components using `async/await`.
- Use Server Actions (`"use server"`) for data mutations.
- Use `Suspense` boundaries with `loading.tsx` for granular loading states.
- Handle errors with `error.tsx` (client-side error boundary).

## Routing

- Use `layout.tsx` for shared UI across routes.
- Use `page.tsx` for route-specific content.
- Use `route.ts` for API routes (Route Handlers).
- Use dynamic routes: `[id]/page.tsx` and catch-all: `[...slug]/page.tsx`.

## Metadata & SEO

- Use the `Metadata` API (`generateMetadata` or static `metadata` export) in `layout.tsx` or `page.tsx`.
- Never use `<Head>` from `next/head` - that is Pages Router only.

## Optimisation

- Use `next/image` for images (automatic optimisation).
- Use `next/font` for fonts (zero layout shift).
- Use `next/link` for client-side navigation.
- Prefer `next/dynamic` for code-splitting heavy Client Components.

## ./target_repo/.github/instructions/supabase.instructions.md
---
applyTo: "**/supabase/**,**/*supabase*"
---
# Supabase Integration Instructions

## Client Setup

- Use `@supabase/ssr` for Next.js App Router integration.
- Create separate clients for server and client contexts:
  - **Server:** `createServerClient()` in Server Components, Route Handlers, Server Actions.
  - **Client:** `createBrowserClient()` in Client Components only.
- **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser - it bypasses RLS.

## Schema Awareness

- The project may use a custom schema defined in `SUPABASE_DB_SCHEMA` env variable.
- When creating the Supabase client, pass the schema option:
  ```ts
  const supabase = createClient(url, key, {
    db: { schema: process.env.SUPABASE_DB_SCHEMA || 'public' }
  });
  ```

## Row-Level Security (RLS)

- **Always** enable RLS on every table.
- Write policies that match your auth patterns (e.g. `auth.uid() = user_id`).
- Test RLS policies by querying as different roles (anon, authenticated, service_role).

## Migrations

- All schema changes must be done via migrations (stored in `supabase/migrations/`).
- Use Supabase MCP tools for creating/managing migrations.
- Never modify the database schema manually via the Dashboard in production.

## Data

- Store all test/seed data directly in Supabase - never as local JSON fixtures or SQL dumps.

---

## Multi-Schema Setup on Hosted Supabase (via MCP)

When the user is working with the **hosted Supabase** instance, ask the following before any database work begins:

### Step 1 - Ask the User

> "Do you want to use multiple PostgreSQL schemas in your hosted Supabase project? (e.g. `public`, `app`, `reporting`)"

- If **no**: proceed with the default `public` schema.
- If **yes**: proceed with the multi-schema setup flow below.

### Step 2 - Collect Schema Requirements

Ask:
1. "How many custom schemas do you want to create?"
2. "What are the names of the schemas?" (collect as a list)

Do not proceed until you have explicit schema names from the user.

### Step 3 - Identify the Correct Supabase Project via MCP

- Use the Supabase MCP tools to list all available projects.
- Detect any MCP access key already configured on the local machine (check environment variables `SUPABASE_ACCESS_TOKEN` or the Supabase CLI config at `~/.supabase/access-token`).
- Present the matched project name and ID to the user: "I found your Supabase project: **[project name]** (ID: `[project-id]`). I will make changes to this project only."
- **Do not touch any other project.** If multiple projects are found and the target is ambiguous, ask the user to confirm which one.


### Step 4 - Create Schemas via MCP

For each schema name provided, execute the following SQL via `mcp_com_supabase__execute_sql`:

```sql
CREATE SCHEMA IF NOT EXISTS "<schema_name>";
```

After creation, immediately grant the necessary permissions:

```sql
-- Allow the authenticated role to use the schema
GRANT USAGE ON SCHEMA "<schema_name>" TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO authenticated;

-- Allow the anon role (for public/unauthenticated access if needed)
GRANT USAGE ON SCHEMA "<schema_name>" TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA "<schema_name>" TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT SELECT ON TABLES TO anon;

-- Allow the service_role full access
GRANT ALL ON SCHEMA "<schema_name>" TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO service_role;
```

### Step 5 - Expose Schema via Supabase API

To allow the PostgREST API to expose the new schema, the `search_path` must be updated. This requires a change in the Supabase Dashboard under **Settings → API → Extra search path**.

- **If MCP supports this setting**: apply it automatically.
- **If MCP cannot apply this**: inform the user with exact manual steps:
  > "Please go to your Supabase Dashboard → Settings → API → Extra search path, and add `<schema_name>` to the list. Then click Save."

### Step 6 - Update Environment Variables

After the project is identified and schemas are created, **automatically extract the hosted Supabase connection details via MCP** (`mcp_com_supabase__get_project_url` and `mcp_com_supabase__get_publishable_keys`) and write all required variables to `.env.local`:

```env
# Hosted Supabase - Production
NEXT_PUBLIC_SUPABASE_URL=<project API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<project anon key>
SUPABASE_SERVICE_ROLE_KEY=<project service role key>
SUPABASE_DB_SCHEMA=<primary_schema_name>
# Additional schemas (reference only - not set as runtime variable)
# SUPABASE_SCHEMA_<NAME>=<schema_name>
```

Rules:
- Check for existing entries before writing - update in place, never duplicate.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.
- If multiple schemas are used, list them all in comments above `SUPABASE_DB_SCHEMA` so the developer has a clear reference.
- After writing the variables, confirm to the user: "Environment variables have been set in `.env.local`. Your app is now pointed at the hosted Supabase project **[project name]**."

#### Verify the Connection

Once the variables are written, run a quick connectivity check to confirm the production database is reachable:

1. Use `mcp_com_supabase__execute_sql` to run `SELECT 1;` against the target project.
2. If successful: confirm "Connection to hosted Supabase verified. The production database is responding correctly."
3. If it fails: diagnose using `mcp_com_supabase__get_logs`, report the exact error, and fix the configuration before proceeding.

### Step 7 - Handle Missing MCP Token

If the MCP access token is **not found** locally:

1. Inform the user: "No Supabase MCP access token was found. I need a Personal Access Token (PAT) to manage your hosted Supabase project."
2. Ask: "Please provide your Supabase Personal Access Token. You can generate one at: https://supabase.com/dashboard/account/tokens"
3. Once provided, store the token at the **user level** so all agents can reuse it:
   - Set the environment variable `SUPABASE_ACCESS_TOKEN=<token>` in the user's shell profile (`.bashrc`, `.zshrc`, or Windows user environment variables).
   - Confirm: "Token stored. All agents can now access Supabase via MCP using this token."
4. Never hardcode the token in project files or commit it to version control.

## ./target_repo/.github/instructions/tailwind.instructions.md
---
applyTo: "**/*.tsx,**/*.jsx,**/*.css"
---
# Tailwind CSS v4 Instructions

## Utility-First Approach

- Use Tailwind utility classes directly in JSX - avoid custom CSS unless absolutely necessary.
- Follow a consistent class order: **Layout → Box Model → Typography → Effects → States**.
- For conditional classes, use template literals or a `cn()` helper if `tailwind-merge` and `clsx` are installed.

## Responsive Design

- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Mobile-first: write base styles for mobile, then add breakpoint overrides.

## Dark Mode

- Support dark mode with the `dark:` variant.
- Keep colour contrast accessible (WCAG AA minimum).

## Component Patterns

- Create reusable UI components in `src/components/ui/`.
- Prefer standard theme tokens (spacing, colours) over arbitrary values.
- Use only Tailwind v4 syntax - no deprecated Tailwind v3 patterns.

## ./target_repo/.github/instructions/typescript.instructions.md
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Best Practices

## Type Safety

- Enable `strict` mode in `tsconfig.json` (already configured).
- Use `import type { ... }` for type-only imports - keeps runtime bundles clean.
- Prefer `interface` for object shapes; use `type` for unions, intersections, and mapped types.
- Never use `any`. Use `unknown` when the type is genuinely unknown, then narrow it.

## Patterns

- Use discriminated unions for state management and API responses.
- Prefer `as const` for literal types and const assertions.
- Use `satisfies` operator to validate types without widening.
- Extract shared types to `src/types/` - keep them co-located if only used in one module.

## Naming Conventions

- **Interfaces/Types:** PascalCase (`UserProfile`, `ApiResponse`).
- **Variables/Functions:** camelCase (`getUserById`, `isLoading`).
- **Constants:** UPPER_SNAKE_CASE for true constants, camelCase for computed values.
- **Components:** PascalCase file names matching the export (`UserCard.tsx`).

## Enums

- Avoid `enum` - use `as const` objects or string literal union types instead.

## ./target_repo/.github/skills/anforderungsdokument/SKILL.md
﻿---
name: anforderungsdokument
description: >-
  WAMOCON Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und
  Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx).
  Workflow: IDEA.md ausfüllen, Skill aufrufen, Dokument prüfen, Freigabe.
---

# WAMOCON Entwicklungsprompts und Anforderungsdokument

## Übersicht

Dieser Skill stellt drei Entwicklungsprompts und eine verbindliche Dokumentstruktur
für WAMOCON-Anforderungsdokumente bereit. Das Anforderungsdokument folgt einer
festen 9-Kapitel-Struktur mit Quellenverzeichnis und wird als .docx generiert.

> **⚠️ PLATTFORMREGEL (ABSOLUT BINDEND):** Alle Anforderungsdokumente und Analysen
> gelten ausschließlich für **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **kein Bestandteil** dieser
> Dokumente und dürfen unter keinen Umständen im Scope erwähnt werden.

> **⚠️ QUELLENREGEL (ABSOLUT BINDEND):** Alle verwendeten Quellen, Statistiken und
> Marktdaten müssen **nicht älter als 1 Jahr** sein (ab aktuellem Datum). Quellen,
> die älter als 12 Monate sind, sind **strikt verboten** und dürfen unter keinen
> Umständen verwendet werden. Kein Erscheinungsdatum → Quelle nicht verwenden.

**Workflow:** IDEA.md ausfüllen → Prompt 3 aufrufen → Dokument prüfen → Freigabe → Implementierung starten.

---

## Prompt 1: Tiefenanalyse und kritische Projektbewertung

Verwende diesen Prompt nach dem Onboarding einer neuen App-Idee, um eine vollumfängliche
Analyse auf Basis des Anforderungsdokuments durchzuführen.

```
Prüfe bitte das aktuelle Projekt und mache dich mit allen Daten und Inhalten vertraut.

Führe anschließend eine vollumfängliche Tiefenanalyse zum Thema der Web-/SaaS-Applikation
aus dem Anforderungsdokument durch. Erstelle dafür:
- Eine vollumfängliche Bedarfsanalyse des geplanten Themas
- Eine Nutzwertanalyse für die Funktionen
- Hinweise auf mögliche Lücken im Markt, die mit der Web-App nicht abgedeckt sind

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.
Im Analysedokument muss jede Zahl mit einer aktuellen Quelle (inkl. Datum) belegt sein.

Fasse deine Ergebnisse in einem Analysedokument zusammen und gib eine Empfehlung ab,
welche Richtung die Web-/SaaS-Applikation nehmen soll, um die größtmögliche
Nutzerplattform und den größten Nutzen zu erzielen.

Erstelle am Ende Entscheidungsvorlagen zur Entscheidung der nächsten Schritte für die
Entwicklung und Ausrichtung der Applikation.

Prüfe intern deine Ergebnisse kritisch und mehrfach, sodass die Ergebnisse brauchbar sind.
```

---

## Prompt 2: Marketing und UX/UI Rework

Verwende diesen Prompt, wenn die Web-Applikation eine Überarbeitung aus Marketing-
und UX-Perspektive benötigt.

```
Bitte führe eine vollständige Analyse und Optimierung des Projektes durch.

Ziel ist eine umfassende Überarbeitung der Web-Applikation aus Marketing- und UX/UI-Perspektive:
- Analysiere die Applikation und passende Oberflächen, Farben, Typografie und Designsystem
- Optimiere den Workflow nach typischen UX-Prinzipien (geführt, unterstützt, intuitiv)
- Stelle sicher, dass die Web-App responsiv ist und auf allen gängigen Browsergrößen
  optimal dargestellt wird (Desktop, Laptop, Tablet) - wir entwickeln ausschließlich
  Web-/SaaS-Applikationen, KEINE mobilen Apps
- Implementiere passende Hilfestellungen für den User

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.

Überarbeite alle Seiten vollständig und führe anschließend alle notwendigen
Fehlerbehebungen durch.
```

---

## Prompt 3: Anforderungsdokument erstellen (9 Kapitel + Quellenverzeichnis)

Verwende diesen Prompt, um ein vollständiges Anforderungsdokument zu erstellen.
Die KI liest `IDEA.md` und das `SKILL.md` automatisch aus dem Projekt - nichts einfügen, nichts ersetzen.

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

---

## DOKUMENTSTRUKTUR (verbindlich für jedes Anforderungsdokument)

> **⚠️ Gilt ausschließlich für Web-/SaaS-Applikationen. Mobile Apps sind nicht Bestandteil.**

### Deckblatt

Oben: dicke Trennlinie (WAMOCON-Blau).
Titel zentriert: "WAMOCON GMBH" + "Anforderungsdokument" + [Projektname].
Metadaten-Tabelle ohne Rahmen:

| Feld              | Wert                          |
|-------------------|-------------------------------|
| Welle             | [Wellennummer aus IDEA.md]    |
| Projekt           | [App-Name]                    |
| Unternehmen       | WAMOCON GmbH                  |
| App Version       | 1                             |
| Erstellt von      | [Name aus IDEA.md]            |
| Eingereicht an    | [Empfänger aus IDEA.md]       |
| Datum             | [TT.MM.JJJJ aktuell]         |
| Vertraulichkeit   | Intern vertraulich            |
| Status            | Zur Freigabe eingereicht      |

Unten: gestrichelte Trennlinie.

---

### Kapitel 1: Zusammenfassung

- **1.1 Die Idee** - Was macht die Web-/SaaS-App? Welches Problem löst sie? Kernnutzen in 3–5 Sätzen.
- **1.2 Warum jetzt?** - Markttiming: Warum ist das Thema genau jetzt relevant? Mit aktuellen Zahlen belegen (Quellen nicht älter als 1 Jahr).

---

### Kapitel 2: Marktanalyse

- **2.1 Zielgruppe in Zahlen** - Marktgröße, Nutzeranzahl, Wachstumsprognosen. Fokus Deutschland/DACH. Jede Zahl mit Quellenangabe (nicht älter als 1 Jahr).
- **2.2 Infrastruktur/Marktwachstum** - Was wächst? Welche Trends treiben den Markt? Prognosen bis 2030.
- **2.3 Das Kernproblem** - Faktisch belegt: Was ist das konkrete Problem, das die Web-App löst? Warum existiert es heute noch?
- **2.4 Regulatorisches Umfeld** - DSGVO, branchenspezifische Gesetze, EU-Verordnungen. Was stärkt den USP?

---

### Kapitel 3: Wettbewerb

- **3.1 Direkte Wettbewerber** - Tabelle: Anbieter | Stärken | Schwächen/Chance für uns | Preis.
  Echte Anbieter mit echten Daten. Stärken UND Schwächen ehrlich benennen.
- **3.2 Indirekte Wettbewerber / Aggregate** - Tabelle: Anbieter | Was er bietet | Was fehlt (Chance für uns).
- **Marktlücke** - Zusammenfassung: Welche Kombination bietet kein Wettbewerber? Das ist unser Einstieg.

---

### Kapitel 4: Zielgruppe

- **4.1 Primäre Zielgruppe** - Genaue Beschreibung mit Zahlen. Nutzerprofile als Fließtext (Personas mit Name, Rolle, Verhalten).
- **4.2 Sekundäre Zielgruppe** - Wer kommt später dazu? Warum erst später?
- **4.3 Nicht-Zielgruppe** - Wen adressiert die Web-App NICHT? Klar abgrenzen.

---

### Kapitel 5: Nutzen

- **5.1 Nutzen für Kunden** - Tabelle: Problem heute | Lösung durch Web-App | Konkreter Vorteil. Mit messbaren Zahlen (Quellen nicht älter als 1 Jahr).
- **5.2 Nutzen für WAMOCON GmbH** - Warum lohnt sich das Projekt? Einnahmequellen, Skalierungspotenzial, strategischer Wert.

---

### Kapitel 6: Abhängigkeiten und Machbarkeit

- **6.1 Externe Abhängigkeiten** - APIs, Dienste, Datenquellen. Tabelle: Quelle | Was sie liefert | Kosten | Abhängigkeit.
- **6.2 Abrechnungs-/Integrationsoptionen** - Falls relevant: Welche Optionen für Bezahlung/Integration gibt es? Pro Version.
- **6.3 Gesamtbewertung** - Hat V1 kritische Abhängigkeiten? Kann ein Wettbewerber den Start blockieren?

---

### Kapitel 7: Anforderungen Version 1

- **7.1 Hauptprozesse** - Gruppiert nach Themen (z.B. "Dokumenten-Upload", "Frage-Generator").
  Jede Gruppe hat eine eigene Anforderungstabelle:

  | ID   | Anforderung                          | Priorität  | Status |
  |------|--------------------------------------|------------|--------|
  | K-01 | [Kernfunktion]                       | Muss       | Neu    |

- **7.2 Basisfunktionalitäten** - Pflicht für jede Web-App:

  | ID   | Anforderung                                              | Priorität  | Status |
  |------|----------------------------------------------------------|------------|--------|
  | B-01 | Rollen- und Rechteprinzip                                | Muss       | Neu    |
  | B-02 | Anmeldung und Registrierung (E-Mail mit Bestätigung)     | Muss       | Neu    |
  | B-03 | Passwort zurücksetzen                                    | Muss       | Neu    |
  | B-04 | Admin-Bereich für Nutzerverwaltung                       | Muss       | Neu    |
  | B-05 | Profilseite                                              | Muss       | Neu    |
  | B-06 | Dashboard als Startseite                                 | Muss       | Neu    |
  | B-07 | Navigation mit Breadcrumbs                               | Muss       | Neu    |
  | B-08 | Benachrichtigungssystem (In-App und/oder E-Mail)         | Soll       | Neu    |
  | B-09 | Spracheinstellungen (Deutsch und Englisch)               | Muss       | Neu    |
  | B-10 | Dunkel/Hell-Modus                                        | Muss       | Neu    |
  | B-11 | FAQ und Hilfebereich                                     | Soll       | Neu    |
  | B-12 | AGB, Impressum, Datenschutzerklärung                     | Muss       | Neu    |
  | B-13 | Cookie-Banner nach DSGVO                                 | Muss       | Neu    |
  | B-14 | DSGVO-Funktionen (Daten exportieren, Konto löschen)      | Muss       | Neu    |
  | B-15 | Geschäftsmodell (Free und Premium)                       | Muss       | Neu    |
  | B-16 | Upgrade von Free auf Premium in der App                  | Muss       | Neu    |

- **7.3 Scope** - Tabelle: In Scope V1 | Out of Scope (V2+). Klare Abgrenzung.

---

### Kapitel 8: Chancen und Risiken

- **8.1 Chancen** - Tabelle: Chance | Begründung. Mit Zahlen und Quellen (nicht älter als 1 Jahr).
- **8.2 Risiken** - Tabelle: Risiko | Warum es eintreten kann | Gegenmaßnahme.

---

### Kapitel 9: Umsetzungsplan Version 1

- **9.1 Entwicklungsansatz** - Tech-Stack, Werkzeuge (GitHub Copilot), Teamstruktur.
- **9.2 Umsetzungsplan** - Tag-für-Tag-Tabelle über 5–7 Werktage:

  | Tag       | Fokus                       | Inhalt                          |
  |-----------|-----------------------------|---------------------------------|
  | Tag 1–3   | Hauptprozesse               | [Details]                       |
  | Tag 3–4   | Testing und Bugfixing       | [Details]                       |
  | Tag 4–5   | Basisfunktionalitäten       | [Details]                       |
  | Tag 5–6   | Puffer                      | [Details]                       |

- **Hinweis** - Realistisch: V1 ist ein lauffähiger Prototyp, kein Endprodukt.

---

### Quellenverzeichnis

Tabelle: Nr. | Quelle/URL | Inhalt | Veröffentlichungsdatum.
Nur reale, öffentlich verfügbare Quellen.

**STRIKT:** Ausschließlich Quellen, die nicht älter als 1 Jahr sind.
Jede Zahl im Dokument muss mindestens eine Quelle haben.
Das Veröffentlichungsdatum muss für jede Quelle angegeben sein.

---

## FORMATREGELN

- **Sprache:** Deutsch mit echten Umlauten (Ä, Ö, Ü, ß). In Code-Variablennamen ist ae/oe/ue akzeptabel.
- **Schrift:** Arial Narrow, 11pt Fließtext.
- **Tabellenkopf:** WAMOCON-Blau (1E3A5F) mit weißem Text, fett.
- **Tabellenzeilen:** alternierend weiß / hellgrau (F5F5F5).
- **Breiten:** WidthType.DXA (keine Prozent).
- **Shading:** ShadingType.CLEAR (kein SOLID).
- **Kein \n in TextRun** - separate Paragraphen verwenden.
- **Seitenkopf:** "WAMOCON GmbH, Mergenthalerallee 79-81, 65760 Eschborn" (8pt, grau).
- **Seitenumbruch** zwischen den Hauptkapiteln.

---

## Workflow

```
[1] IDEA.md im Projekt-Root ausfüllen
        |
        v
[2] Prompt 3 aufrufen → Anforderungsdokument als .docx generieren
        |
        v
[3] Dokument prüfen und zur Freigabe einreichen (Geschäftsführung)
        |
        v
[4] Nach Freigabe: Prompt 1 für Tiefenanalyse aufrufen
        |
        v
[5] Implementierung mit @planner → @developer
        |
        v
[6] Nach Launch: Prompt 2 für UX/UI Rework
```

---

## Voraussetzungen

- Node.js >= 18
- npm install docx (einmalig)
- Ausgabe: public/Anforderungsdokument_[ProjektName].docx
- package.json: "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
## ./target_repo/.github/skills/memory-merger/SKILL.md
---
name: memory-merger
description: 'Merges mature lessons from a domain memory file into its instruction file. Syntax: `/memory-merger >domain [scope]` where scope is `global` (default), `user`, `workspace`, or `ws`.'
---

# Memory Merger

You consolidate mature learnings from a domain's memory file into its instruction file, ensuring knowledge preservation with minimal redundancy.

**Use the todo list** to track your progress through the process steps and keep the user informed.

## Scopes

Memory instructions can be stored in two scopes:

- **Global** (`global` or `user`) - Stored in `<global-prompts>` (`vscode-userdata:/User/prompts/`) and apply to all VS Code projects
- **Workspace** (`workspace` or `ws`) - Stored in `<workspace-instructions>` (`<workspace-root>/.github/instructions/`) and apply only to the current project

Default scope is **global**.

Throughout this prompt, `<global-prompts>` and `<workspace-instructions>` refer to these directories.

## Syntax

```
/memory-merger >domain-name [scope]
```

- `>domain-name` - Required. The domain to merge (e.g., `>clojure`, `>git-workflow`, `>prompt-engineering`)
- `[scope]` - Optional. One of: `global`, `user` (both mean global), `workspace`, or `ws`. Defaults to `global`

**Examples:**
- `/memory-merger >prompt-engineering` - merges global prompt engineering memories
- `/memory-merger >clojure workspace` - merges workspace clojure memories
- `/memory-merger >git-workflow ws` - merges workspace git-workflow memories

## Process

### 1. Parse Input and Read Files

- **Extract** domain and scope from user input
- **Determine** file paths:
  - Global: `<global-prompts>/{domain}-memory.instructions.md` → `<global-prompts>/{domain}.instructions.md`
  - Workspace: `<workspace-instructions>/{domain}-memory.instructions.md` → `<workspace-instructions>/{domain}.instructions.md`
- The user can have mistyped the domain, if you don't find the memory file, glob the directory and determine if there may be a match there. Ask the user for input if in doubt.
- **Read** both files (memory file must exist; instruction file may not)

### 2. Analyze and Propose

Review all memory sections and present them for merger consideration:

```
## Proposed Memories for Merger

### Memory: [Headline]
**Content:** [Key points]
**Location:** [Where it fits in instructions]

[More memories]...
```

Say: "Please review these memories. Approve all with 'go' or specify which to skip."

**STOP and wait for user input.**

### 3. Define Quality Bar

Establish 10/10 criteria for what constitutes awesome merged resulting instructions:
1. **Zero knowledge loss** - Every detail, example, and nuance preserved
2. **Minimal redundancy** - Overlapping guidance consolidated
3. **Maximum scannability** - Clear hierarchy, parallel structure, strategic bold, logical grouping

### 4. Merge and Iterate

Develop the final merged instructions **without updating files yet**:

1. Draft the merged instructions incorporating approved memories
2. Evaluate against quality bar
3. Refine structure, wording, organization
4. Repeat until the merged instructions meet 10/10 criteria

### 5. Update Files

Once the final merged instructions meet 10/10 criteria:

- **Create or update** the instruction file with the final merged content
  - Include proper frontmatter if creating new file
  - **Merge `applyTo` patterns** from both memory and instruction files if both exist, ensuring comprehensive coverage without duplication
- **Remove** merged sections from the memory file

## Example

```
User: "/memory-merger >clojure"

Agent:
1. Reads clojure-memory.instructions.md and clojure.instructions.md
2. Proposes 3 memories for merger
3. [STOPS]

User: "go"

Agent:
4. Defines quality bar for 10/10
5. Merges new instructions candidate, iterates to 10/10
6. Updates clojure.instructions.md
7. Cleans clojure-memory.instructions.md
```

## ./target_repo/.github/skills/next-browser/SKILL.md
---
name: next-browser
description: >-
  CLI that gives agents what humans get from React DevTools and the Next.js
  dev overlay - component trees, props, hooks, PPR shells, errors, network -
  as shell commands that return structured text.
---

# next-browser

If `next-browser` is not already on PATH, install `@vercel/next-browser` globally, then install the Chromium browser:

```bash
npm install -g @vercel/next-browser
playwright install chromium
```

Requires Node >= 20. If already installed, check the version is current:

```bash
next-browser --version
npm view @vercel/next-browser version
# if outdated:
npm install -g @vercel/next-browser@latest
```

---

## Next.js docs awareness

If the project's Next.js version is **v16.2.0-canary.37 or later**, bundled docs live at `node_modules/next/dist/docs/`. Before doing PPR work, Cache Components work, or any non-trivial Next.js task, read the relevant doc there - your training data may be outdated. The bundled docs are the source of truth.

---

## Working with the user

### Onboarding

- If the user already gave a URL, cookies, and task - skip questions, `open` and go.
- Otherwise ask only what's missing: dev server URL (running?), session cookies if behind login.
- For cookies, give the user two options: (1) DevTools → Application → Cookies, export as `[{"name":"session","value":"..."}]`, or (2) "Copy as cURL" from DevTools → Network on any authenticated request - extract the cookies from the header yourself.
- Never say "ready, what would you like to do?". Never auto-discover (port scans, `project`, config reads) before being asked.

### Show, don't tell

- `screenshot` after every navigation, code change, or visual finding. Always caption it.
- Don't narrate what a screenshot shows. State your conclusion or next action.

### Escalate, don't decide

- Suspense boundary placement and fallback UI - design with the user.
- Caching decisions (staleness, visibility) - the user's call, not yours.
- "Make this page faster" without context - ask: cold URL hit or client navigation? Don't guess, don't do both.

---

## Headless mode

By default the browser opens headed (visible window). For CI or environments with no display, set `NEXT_BROWSER_HEADLESS=1` to run headless.

---

## Commands

### Browser lifecycle

| Command | Description |
|---|---|
| `open <url> [--cookies-json <file>]` | Launch browser and navigate (with optional cookies) |
| `close` | Close browser and kill daemon |

```bash
$ next-browser open http://localhost:3000
$ next-browser open http://localhost:3000 --cookies-json cookies.json
# Cookie file format: [{"name":"authorization","value":"Bearer ..."}]
```

---

### Navigation

| Command | Description |
|---|---|
| `goto <url>` | Full-page navigation (new document load) |
| `push [path]` | Client-side navigation (interactive picker if no path) |
| `back` | Go back in history |
| `reload` | Reload current page |
| `restart-server` | Restart the Next.js dev server (clears caches - last resort only) |
| `ssr lock` | Block external scripts on all navigations (SSR-only mode) |
| `ssr unlock` | Re-enable external scripts |

---

### Inspection

| Command | Description |
|---|---|
| `tree` | Full React component tree (hierarchy, IDs, keys) |
| `tree <id>` | Inspect one component (props, hooks, state, source location) |
| `snapshot` | Accessibility tree with `[ref=eN]` markers on interactive elements |
| `errors` | Build and runtime errors for the current page |
| `logs` | Recent dev server log output |
| `browser-logs` | Browser-side console output (log, warn, error, info) |
| `network [idx]` | List network requests, or inspect one (headers, body) |

```bash
$ next-browser snapshot
- navigation "Main"
  - link "Home" [ref=e0]
  - link "Dashboard" [ref=e1]
- main
  - heading "Settings"
  - tablist
    - tab "General" [ref=e2] (selected)
    - tab "Security" [ref=e3]

$ next-browser tree
# Columns: depth id parent name
0 38167 - Root
1 38168 38167 HeadManagerContext.Provider
...
224 46375 46374 DeploymentsProvider

$ next-browser tree 46375
path: Root > ... > DeploymentsProvider
DeploymentsProvider #46375
props:
  children: [<Lazy />, ...]
hooks:
  Router: undefined (2 sub)
source: app/.../context.tsx:180:10
```

---

### Interaction

| Command | Description |
|---|---|
| `click <ref\|text\|selector>` | Click via real pointer events (works with Radix, Headless UI) |
| `fill <ref\|selector> <value>` | Fill a text input or textarea |
| `eval [ref] <script>` | Run JS in page context |
| `viewport [WxH]` | Show or set viewport size |

```bash
$ next-browser click e3          # ref from snapshot
$ next-browser click "Security"  # plain text
$ next-browser fill e4 "myuser"
$ next-browser viewport 375x812  # mobile breakpoint
$ next-browser eval 'document.title'
```

---

### Performance & PPR

| Command | Description |
|---|---|
| `perf [url]` | Core Web Vitals + React hydration timing in one pass |
| `renders start` | Begin recording React re-renders |
| `renders stop [--json]` | Stop and print per-component render profile |
| `ppr lock` | Freeze dynamic content to inspect the static shell |
| `ppr unlock` | Resume dynamic content and print shell analysis |

```bash
$ next-browser perf http://localhost:3000/dashboard
# Core Web Vitals
  TTFB    42ms
  LCP     1205.3ms
  CLS     0.03
# React Hydration - 65.5ms

$ next-browser renders start
$ next-browser renders stop
# 426 renders (38 mounts + 388 re-renders) across 38 components
# FPS: avg 120, min 106
```

---

### Screenshots

| Command | Description |
|---|---|
| `screenshot [caption] [--full-page]` | Viewport (or full page) PNG to temp file |
| `preview [caption]` | Screenshot + open in viewer window |

---

### Next.js MCP

| Command | Description |
|---|---|
| `page` | Route segments for the current URL |
| `project` | Project root and dev server URL |
| `routes` | All app router routes |
| `action <id>` | Inspect a server action by ID |

---

## Scenarios

### Debug a visual or interaction issue

1. `open http://localhost:3000`
2. `snapshot` - discover interactive elements
3. `click eN` / `fill eN value` - interact
4. `errors` - check for runtime errors
5. `screenshot "before fix"` - document state
6. Make the code change, HMR picks it up
7. `screenshot "after fix"` - verify

### Profile performance

```bash
$ next-browser perf http://localhost:3000/dashboard
# → Core Web Vitals + hydration timing

$ next-browser renders start
# reproduce slow interaction
$ next-browser renders stop
# → per-component render counts, self time, change reasons
```

### Debug PPR shell

```bash
$ next-browser ppr lock
$ next-browser goto http://localhost:3000/page
$ next-browser screenshot "PPR shell - locked"
$ next-browser ppr unlock
# → Shell analysis: which Suspense boundaries are holes and why
```

### Test responsive layout

```bash
$ next-browser viewport 375x812   # mobile
$ next-browser screenshot "mobile"
$ next-browser viewport 1440x900  # desktop
$ next-browser screenshot "desktop"
```

### Debug component re-renders

1. `renders start`
2. `goto` the page (captures hydration)
3. Reproduce the interaction
4. `renders stop` - read Mounts vs Re-renders, Self time, change reasons
5. `tree <id>` the expensive component - check source, props, hooks
6. Fix, HMR picks it up, re-run `renders start/stop` to verify

## ./target_repo/AGENTS.md
﻿
---

# GitHub Copilot Customisation

<table>
<tr>
<th width="50%">DE Deutsch</th>
<th width="50%">EN English</th>
</tr>
<tr>
<td>Dieses Projekt nutzt GitHub Copilot Agents und Instructions, um eine strukturierte und produktive KI-gestützte Entwicklung zu ermöglichen.</td>
<td>This project uses GitHub Copilot Agents and Instructions to enable a structured and productive AI-assisted development workflow.</td>
</tr>
</table>

---

## Übersicht / Overview

| Typ / Type | Pfad / Path | Beschreibung / Description |
|---|---|---|
| **Global Instructions** | `.github/copilot-instructions.md` | Projektweite Basisregeln für alle Copilot-Interaktionen. / Project-wide baseline rules for all Copilot interactions. |
| **Instructions** | `.github/instructions/*.instructions.md` | Dateimuster-spezifische Coding-Richtlinien. / File-pattern-scoped coding guidelines. |
| **Agents** | `.github/agents/*.agent.md` | Spezialisierte KI-Personas für verschiedene Phasen. / Specialised AI personas for different development phases. |

---

## `copilot-instructions.md` - Globale Basisregeln / Global Baseline Rules

**Pfad / Path:** `.github/copilot-instructions.md`

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Diese Datei wird bei <strong>jeder</strong> Copilot-Interaktion automatisch geladen. Sie definiert den Tech-Stack, kritische Regeln (async APIs, Server Components, Supabase), und Code-Stil-Konventionen für das gesamte Projekt.</td>
<td>This file is automatically loaded on <strong>every</strong> Copilot interaction. It defines the tech stack, critical rules (async APIs, Server Components, Supabase), and code style conventions for the whole project.</td>
</tr>
</table>

<table>
<tr>
<th width="50%">DE Wann bearbeiten?</th>
<th width="50%">EN When to edit?</th>
</tr>
<tr>
<td>
- Tech-Stack ändert sich (z. B. neue Bibliothek wird Standardmuster)<br>
- Neue projektweite Regeln sollen für alle Copilot-Interaktionen gelten<br>
- Team-Konventionen ändern sich<br>
<strong>⚠️ Kurz halten</strong> - diese Datei wird immer in den Kontext geladen.
</td>
<td>
- Tech stack changes (e.g. a new library becomes a standard pattern)<br>
- New project-wide rules need to apply to all Copilot interactions<br>
- Team conventions change<br>
<strong>⚠️ Keep it short</strong> - this file is always loaded into context.
</td>
</tr>
</table>

---

## Instructions - Datei-spezifische Richtlinien / File-Scoped Guidelines

<table>
<tr>
<th width="50%">DE Was sind Instructions?</th>
<th width="50%">EN What are Instructions?</th>
</tr>
<tr>
<td>Instructions sind Richtlinien, die automatisch geladen werden, wenn Copilot an Dateien arbeitet, die dem <code>applyTo</code>-Glob-Muster entsprechen. Sie ergänzen die globalen Regeln mit datei-spezifischen Details.</td>
<td>Instructions are guidelines that are automatically loaded when Copilot works on files matching the <code>applyTo</code> glob pattern. They extend the global rules with file-type-specific details.</td>
</tr>
</table>

### Vorhandene Instructions / Available Instructions

| Datei / File | `applyTo` | Zweck / Purpose |
|---|---|---|
| `nextjs.instructions.md` | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js` | Next.js 16 App Router Patterns, async APIs, Server/Client Components |
| `tailwind.instructions.md` | `**/*.tsx, **/*.jsx, **/*.css` | Tailwind CSS v4 Utility-First Patterns, Responsive Design |
| `typescript.instructions.md` | `**/*.ts, **/*.tsx` | TypeScript Strict Mode, Naming Conventions, Type Safety |
| `supabase.instructions.md` | `**/supabase/**, **/*supabase*` | Supabase Client Setup, RLS, Migrations, Schema Awareness |

### Eigene Instructions erstellen / Creating Custom Instructions

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.instructions.md</code>-Datei in <code>.github/instructions/</code> mit YAML-Frontmatter. Das <code>applyTo</code>-Feld akzeptiert Glob-Muster und bestimmt, für welche Dateien die Regeln gelten.</td>
<td>Create a <code>.instructions.md</code> file in <code>.github/instructions/</code> with YAML frontmatter. The <code>applyTo</code> field accepts glob patterns and determines which files the rules apply to.</td>
</tr>
</table>

```yaml
---
applyTo: "**/*.tsx"
---
# Your instructions here
```

---

## Agents - KI-Personas / AI Personas

<table>
<tr>
<th width="50%">DE Was sind Agents?</th>
<th width="50%">EN What are Agents?</th>
</tr>
<tr>
<td>Agents sind spezialisierte KI-Personas. Du rufst sie in VS Code über das Chat-Panel mit <code>@agent-name</code> auf. Jeder Agent hat eine klar definierte Rolle, einen Workflow und Regeln.</td>
<td>Agents are specialised AI personas. You invoke them in VS Code via the Chat panel using <code>@agent-name</code>. Each agent has a clearly defined role, workflow, and rules.</td>
</tr>
</table>

---

### `@planner` - Planer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Technische Planung und Anforderungsanalyse vor dem Coding.</td>
<td><strong>Purpose:</strong> Technical planning and requirements analysis before coding.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Features<br>- Wenn die Anforderungen unklar sind<br>- Vor Refactoring oder Migrations-Aufgaben</td>
<td><strong>When to use:</strong><br>- Before starting a new feature<br>- When requirements are unclear<br>- Before refactoring or migration tasks</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Codebase erkunden und Kontext sammeln<br>✔ Betroffene Dateien und Module identifizieren<br>✔ Nummerierten Implementierungsplan erstellen<br>✘ <strong>Schreibt keinen Code</strong></td>
<td><strong>What it does:</strong><br>✔ Explore codebase and gather context<br>✔ Identify affected files and modules<br>✔ Create a numbered implementation plan<br>✘ <strong>Does not write code</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@planner Füge eine Authentifizierungsseite hinzu</code></td>
<td><strong>Usage:</strong> <code>@planner Add an authentication page</code></td>
</tr>
</table>

---

### `@developer` - Entwickler

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Strukturierte Feature-Implementierung mit Qualitätsprüfungen.</td>
<td><strong>Purpose:</strong> Structured feature implementation with quality checks.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Planung mit <code>@planner</code><br>- Zur Implementierung von Features, Seiten, API-Routen<br>- Für Datenbankänderungen und Migrationen</td>
<td><strong>When to use:</strong><br>- After planning with <code>@planner</code><br>- To implement features, pages, API routes<br>- For database changes and migrations</td>
</tr>
<tr>
<td><strong>Vierphasiger Prozess:</strong><br>1. <strong>Vorbereitung</strong> - Plan lesen, Code verstehen<br>2. <strong>Implementierung</strong> - Schrittweise, Fehler sofort beheben<br>3. <strong>Verifikation (PFLICHT)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → lokal testen<br>4. <strong>Dokumentation</strong> - Handbook aktualisieren</td>
<td><strong>Four-phase process:</strong><br>1. <strong>Preparation</strong> - Read plan, understand code<br>2. <strong>Implementation</strong> - Step by step, fix errors immediately<br>3. <strong>Verification (MANDATORY)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → test locally<br>4. <strong>Documentation</strong> - Update handbook</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@developer Implementiere diesen Plan: [Plan einfügen]</code></td>
<td><strong>Usage:</strong> <code>@developer Implement this plan: [paste plan]</code></td>
</tr>
</table>

---

### `@reviewer` - Code-Reviewer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Code-Review und Qualitätssicherung vor dem PR.</td>
<td><strong>Purpose:</strong> Code review and quality assurance before a PR.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Bevor ein PR erstellt wird<br>- Nach einer Implementierung zur Qualitätsprüfung<br>- Zur Sicherheits- und Performance-Analyse</td>
<td><strong>When to use:</strong><br>- Before creating a PR<br>- After implementation for quality check<br>- For security and performance audits</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Strukturierte Checkliste (Qualität, Next.js 16, Supabase-Sicherheit, Styling)<br>✔ Alle Checks ausführen (typecheck, lint, build)<br>✔ Review-Bericht mit Status (✅ / ⚠️ / ❌)</td>
<td><strong>What it does:</strong><br>✔ Structured checklist (quality, Next.js 16, Supabase security, styling)<br>✔ Run all checks (typecheck, lint, build)<br>✔ Review report with status (✅ / ⚠️ / ❌)</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@reviewer Überprüfe die Änderungen in src/app/dashboard/</code></td>
<td><strong>Usage:</strong> <code>@reviewer Review the changes in src/app/dashboard/</code></td>
</tr>
</table>

---

### `@anforderungsdokument` - Anforderungsdokument

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Vollständiges WAMOCON-Anforderungsdokument (9 Kapitel + .docx) für Web-/SaaS-Applikationen erstellen.</td>
<td><strong>Purpose:</strong> Create a complete WAMOCON requirements document (9 chapters + .docx) for web/SaaS applications.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Projekts<br>- Wenn eine App-Idee dokumentiert werden soll<br>- Bevor die Implementierung beginnt (Freigabe erforderlich)</td>
<td><strong>When to use:</strong><br>- Before starting a new project<br>- When an app idea needs to be documented<br>- Before implementation starts (approval required)</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Marktanalyse, Wettbewerb, Zielgruppe recherchieren<br>✔ 9-Kapitel-Dokument mit echten Daten befüllen<br>✔ Dokument als .docx generieren<br>✘ <strong>Nur Web/SaaS - keine mobilen Apps</strong><br>✘ <strong>Nur Quellen nicht älter als 1 Jahr</strong></td>
<td><strong>What it does:</strong><br>✔ Research market analysis, competition, target audience<br>✔ Fill 9-chapter document with real data<br>✔ Generate document as .docx<br>✘ <strong>Web/SaaS only - no mobile apps</strong><br>✘ <strong>Sources not older than 1 year only</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@anforderungsdokument Erstelle das Anforderungsdokument für [Projektname]</code></td>
<td><strong>Usage:</strong> <code>@anforderungsdokument Create the requirements document for [project name]</code></td>
</tr>
</table>

#### Schritt-für-Schritt-Anleitung / Step-by-Step Guide

**1.** Fülle `IDEA.md` im Projekt-Root aus.

**2.** Kopiere den Prompt unten und sende ihn im Chat. Die KI liest `IDEA.md` und `SKILL.md` automatisch - nichts einfügen, nichts ersetzen:

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

**3.** Dokument prüfen und zur Freigabe bei der Geschäftsführung einreichen.

**4.** Nach Freigabe: Implementierung mit `@planner` starten.

---

## Tools

| Tool | Pfad / Path | Zweck / Purpose |
|---|---|---|
| **next-browser** | `.github/skills/next-browser/SKILL.md` | CLI that exposes React DevTools and the Next.js dev overlay as shell commands - component trees, props, errors, performance, screenshots - structured output for AI agents. |
| **anforderungsdokument** | `.github/skills/anforderungsdokument/SKILL.md` | Drei Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx). Nur Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr. IDEA.md ausfüllen, Prompt 3 aufrufen, .docx generieren, zur Freigabe einreichen. |

### `next-browser` - AI-Driven Browser for Next.js

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td><code>@vercel/next-browser</code> ist ein CLI-Tool, das React DevTools und das Next.js Dev-Overlay als Shell-Befehle bereitstellt. Agents können den Browser steuern, Komponenten inspizieren, Fehler lesen und Performance prüfen - ohne manuell durch DevTools zu klicken.</td>
<td><code>@vercel/next-browser</code> is a CLI tool that exposes React DevTools and the Next.js dev overlay as shell commands. Agents can drive the browser, inspect components, read errors, and check performance - without manually clicking through DevTools.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Implementierung zur visuellen Verifikation<br>- Debugging von Runtime-Fehlern oder Re-Render-Problemen<br>- Performance-Analyse (Core Web Vitals, Hydration)<br>- PPR-Shell-Debugging</td>
<td><strong>When to use:</strong><br>- After implementation for visual verification<br>- Debugging runtime errors or re-render issues<br>- Performance analysis (Core Web Vitals, hydration timing)<br>- PPR shell debugging</td>
</tr>
<tr>
<td><strong>Installation:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Benötigt Node >= 20</td>
<td><strong>Install:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Requires Node >= 20</td>
</tr>
<tr>
<td><strong>Wichtigste Befehle:</strong><br><code>next-browser open &lt;url&gt;</code> - Browser starten<br><code>next-browser snapshot</code> - Accessibility-Tree + klickbare Refs<br><code>next-browser errors</code> - Build- und Runtime-Fehler<br><code>next-browser perf</code> - Core Web Vitals + Hydration<br><code>next-browser screenshot</code> - Viewport als PNG<br><code>next-browser tree</code> - React-Komponentenbaum</td>
<td><strong>Key commands:</strong><br><code>next-browser open &lt;url&gt;</code> - launch browser<br><code>next-browser snapshot</code> - accessibility tree + clickable refs<br><code>next-browser errors</code> - build and runtime errors<br><code>next-browser perf</code> - Core Web Vitals + hydration timing<br><code>next-browser screenshot</code> - viewport as PNG<br><code>next-browser tree</code> - React component tree</td>
</tr>
<tr>
<td><strong>Vollständige Dokumentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
<td><strong>Full documentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
</tr>
</table>

---

### `anforderungsdokument` - WAMOCON Entwicklungsprompts

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Der Skill stellt <strong>drei strukturierte Entwicklungsprompts</strong> bereit: (1) Tiefenanalyse und kritische Projektbewertung, (2) Marketing und UX/UI Rework, (3) Anforderungsdokument mit verbindlicher 9-Kapitel-Struktur (Zusammenfassung, Marktanalyse, Wettbewerb, Zielgruppe, Nutzen, Abhängigkeiten, Anforderungen V1, Chancen/Risiken, Umsetzungsplan + Quellenverzeichnis). <strong>Ausschließlich Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr.</strong> IDEA.md ausfüllen, Prompt aus <code>@anforderungsdokument</code> kopieren, .docx generieren, zur Freigabe einreichen.</td>
<td>The skill provides <strong>three structured development prompts</strong>: (1) deep analysis and critical assessment, (2) marketing and UX/UI rework, (3) requirements document with a mandatory 9-chapter structure (summary, market analysis, competition, target audience, benefits, dependencies, requirements V1, opportunities/risks, implementation plan + references). <strong>Web/SaaS only - no mobile apps. Sources not older than 1 year only.</strong> Fill in IDEA.md, copy prompt from <code>@anforderungsdokument</code>, generate .docx, submit for approval.</td>
</tr>
</table>

---

## Empfohlener Workflow / Recommended Workflow

<table>
<tr>
<th width="50%">DE Schritt</th>
<th width="50%">EN Step</th>
</tr>
<tr>
<td><strong>Phase 0 - Anforderungen (neues Projekt):</strong><br>
1. <code>IDEA.md</code> im Projekt-Root ausfüllen<br>
2. <strong><code>@anforderungsdokument</code></strong> aufrufen: Prompt kopieren und senden<br>
3. Dokument prüfen und zur Freigabe einreichen<br>
4. Nach Freigabe: Implementierung starten</td>
<td><strong>Phase 0 - Requirements (new project):</strong><br>
1. Fill in <code>IDEA.md</code> in the project root<br>
2. Call <strong><code>@anforderungsdokument</code></strong>: copy prompt and send<br>
3. Review document and submit for approval<br>
4. After approval: start implementation</td>
</tr>
<tr>
<td><strong>Phase 1 - Planung:</strong><br>
<strong><code>@planner</code></strong> - Aufgabe analysieren und Implementierungsplan erstellen</td>
<td><strong>Phase 1 - Planning:</strong><br>
<strong><code>@planner</code></strong> - Analyse the task and create an implementation plan</td>
</tr>
<tr>
<td><strong>Phase 2 - Implementierung:</strong><br>
<strong><code>@developer</code></strong> - Plan entgegennehmen und schrittweise implementieren</td>
<td><strong>Phase 2 - Implementation:</strong><br>
<strong><code>@developer</code></strong> - Receive plan and implement step by step</td>
</tr>
<tr>
<td><strong>Phase 3 - Qualitätsprüfung:</strong><br>
<strong><code>@reviewer</code></strong> - Code prüfen, bevor ein PR erstellt wird</td>
<td><strong>Phase 3 - Quality review:</strong><br>
<strong><code>@reviewer</code></strong> - Review code before creating a PR</td>
</tr>
</table>

---

## Eigene Agents erstellen / Creating Custom Agents

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.agent.md</code>-Datei in <code>.github/agents/</code> mit YAML-Frontmatter. Definiere Rolle, Workflow und Regeln.</td>
<td>Create a <code>.agent.md</code> file in <code>.github/agents/</code> with YAML frontmatter. Define role, workflow, and rules.</td>
</tr>
</table>

```yaml
---
name: MyAgent
description: >
  Description of what this agent does.
---
# Agent: MyAgent

## Role
...

## Workflow
...
```

---

## Wenn ein Agent schlecht antwortet / When an Agent Responds Poorly

<table>
<tr>
<th width="50%">DE Problem & Lösung</th>
<th width="50%">EN Problem & Solution</th>
</tr>
<tr>
<td><strong>Agent ignoriert Regeln aus der Instructions-Datei</strong><br>→ Prüfe das <code>applyTo</code>-Glob-Muster - stimmt es mit der Datei überein, die du bearbeitest? Teste mit: <code>**/*.ts</code> statt <code>src/**/*.ts</code></td>
<td><strong>Agent ignores rules from an Instructions file</strong><br>→ Check the <code>applyTo</code> glob pattern - does it match the file you are editing? Try broader patterns: <code>**/*.ts</code> instead of <code>src/**/*.ts</code></td>
</tr>
<tr>
<td><strong>Agent befolgt den Workflow nicht (z. B. überspringt typecheck)</strong><br>→ Öffne die <code>.agent.md</code>-Datei und mache die Anweisung strikter. Ersetze "sollte" durch "muss". Füge am Ende eine Zusammenfassung hinzu: <em>"Bevor du antwortest, liste alle abgeschlossenen Schritte auf."</em></td>
<td><strong>Agent does not follow the workflow (e.g. skips typecheck)</strong><br>→ Open the <code>.agent.md</code> file and make the instruction stricter. Replace "should" with "must". Add a reminder at the end: <em>"Before responding, list all completed steps."</em></td>
</tr>
<tr>
<td><strong>Agent schreibt schlechten Next.js-Code (z. B. falsche API-Nutzung)</strong><br>→ Füge ein konkretes Beispiel in die <code>nextjs.instructions.md</code> ein. Copilot folgt Beispielen besser als abstrakten Regeln.</td>
<td><strong>Agent writes bad Next.js code (e.g. wrong API usage)</strong><br>→ Add a concrete code example to <code>nextjs.instructions.md</code>. Copilot follows examples better than abstract rules.</td>
</tr>
<tr>
<td><strong>Agent "vergisst" den Kontext nach langen Gesprächen</strong><br>→ Starte ein neues Chat-Fenster. Langer Kontext verdrängt Instructions. Übergib den Plan explizit: <em>"Hier ist der Plan: [Plan]. Bitte implementiere Schritt 3."</em></td>
<td><strong>Agent "forgets" context after long conversations</strong><br>→ Start a new chat window. Long context pushes out instructions. Pass the plan explicitly: <em>"Here is the plan: [plan]. Please implement step 3."</em></td>
</tr>
<tr>
<td><strong>Agent antwortet auf Englisch statt Deutsch (oder umgekehrt)</strong><br>→ Füge in <code>copilot-instructions.md</code> eine Sprachanweisung hinzu: <em>"Antworte immer auf Deutsch."</em> - oder sprich den Agent in der gewünschten Sprache an.</td>
<td><strong>Agent responds in German instead of English (or vice versa)</strong><br>→ Add a language instruction to <code>copilot-instructions.md</code>: <em>"Always respond in English."</em> - or address the agent in your preferred language.</td>
</tr>
<tr>
<td><strong>Agent überschreitet den Plan / macht ungebetene Änderungen</strong><br>→ Füge in der <code>.agent.md</code> unter "Rules" hinzu: <em>"Ändere nur Dateien, die explizit im Plan genannt sind. Keine ungebetenen Refactors."</em></td>
<td><strong>Agent exceeds the plan / makes unrequested changes</strong><br>→ Add to the <code>.agent.md</code> under "Rules": <em>"Only modify files explicitly listed in the plan. No unrequested refactoring."</em></td>
</tr>
</table>

---

## Referenzen / References

- [GitHub Copilot Customisation Docs](https://docs.github.com/en/copilot/customizing-copilot)
- [awesome-copilot](https://github.com/github/awesome-copilot) - Beispiele und Best Practices / Examples and best practices

## ./target_repo/FRONTEND_PROMPT.md
# STAMMFEUER - Frontend Developer Prompt

## Context

You are building the **frontend of Stammfeuer**, a collaborative family memory archive app.
The **backend is already fully implemented** and merged into `main`. You are working on the `feature/frontend` branch (created from `main`). Your job is to build all UI components, pages, and client-side logic on top of the existing backend.

Do NOT touch:
- `/src/app/api/**` (API route handlers - already done)
- `/src/lib/ai/**` (AI adapter stubs - already done)
- `/src/lib/supabase/**` (Supabase client utils - already done)
- `/src/types/database.ts` (Type definitions - already done)
- `/src/i18n/**` (i18n routing config - already done)
- `/src/middleware.ts` (Session + locale middleware - already done)
- `/supabase/**` (DB migrations + seed - already done)
- `/messages/de.json` and `/messages/en.json` (All translation strings are already there - use them)

---

## App Concept (read this first)

**Stammfeuer** is a private, generational family knowledge archive. It is NOT a social network, NOT a chat app, NOT a photo dump.

**Core concept - the Vault:**
- A **Vault** (`vaults` table) is one family's private archive. Think of it as "the Müller family's memory box".
- Each vault has **Members** (`vault_members`) with three roles: `initiator` (creator, full control), `contributor` (can add entries), `reader` (read-only).
- Each vault has **6 fixed categories**: Stories, Recipes, Traditions, Wisdom, Places, Photos. These are auto-created and cannot be deleted.
- Members add **Entries** (`entries`) to any category - text, voice transcription, or photo.
- Every week, the app suggests a **Prompt** from the library (e.g. "What was the most important piece of advice you ever received?") to motivate contribution.
- The **Vault Health** score (0-100) measures how complete the archive is: entries per category, active contributors, timeline coverage.

**User journey:**
1. User registers → profile created automatically
2. User creates a Vault → becomes `initiator`, 6 categories auto-seeded
3. User invites family via email → they receive a link, register/login, and join
4. Family contributes entries → prompted weekly
5. Archive grows → health score improves

**Free plan limits:** 5 members, 20 entries total. Pro/Familie+ = unlimited.

---

## Tech Stack

- **Framework:** Next.js 16.2.1, App Router, `src/app/[locale]/` routing
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first, no custom CSS unless unavoidable)
- **Icons:** Use `lucide-react` (install if not present)
- **Themes:** `next-themes` (already installed) - `dark`/`light`/`system`
- **i18n:** `next-intl` (already configured) - `useTranslations` hook for ALL text
- **Auth:** Supabase Auth via `@supabase/ssr` - already configured in middleware
- **Data fetching:** Server Components where possible, Client Components only for interactivity
- **Forms:** React `useState` or `useActionState` (no external form library needed)

---

## Core Design Principles

- **Warm, emotional, family-focused** - this is not a productivity tool
- **Accessible to ages 20-85** - large touch targets (min 44px), readable fonts (min 16px body)
- **Mobile-first** - majority of older users are on phone
- **Tagline (DE):** "Das Feuer deiner Familie, für immer am Brennen."
- **Tagline (EN):** "Your family's fire, burning forever."
- **Full marketing concept, brand guidelines and design language:** see `Marketing/MARKETING_KONZEPT.md` - read it before building any page or component.

---

## Brand and Design System

> The full specification is in `Marketing/MARKETING_KONZEPT.md`. The key rules are extracted here for convenience - always refer to the full document for edge cases.

### Brand Positioning

Stammfeuer is **not a productivity tool**. It is an emotional heritage archive. The design must feel like:
- An old family photo album - but digital and shared
- A campfire evening - warm, communal, timeless
- A home - not a SaaS dashboard

Every design decision must serve this emotional positioning.

### Color System

**Light mode:**

| Token | Hex | Usage |
|---|---|---|
| Primary CTA | `#d97706` (amber-600) | Buttons, active elements, links |
| Primary hover | `#f59e0b` (amber-500) | Hover states |
| Accent bg | `#fef3c7` (amber-100) | Badges, background highlights |
| Danger | `#b91c1c` (red-700) | Danger actions, secondary CTAs |
| Page bg | `#fdfaf6` | Main background (warm off-white, NOT pure white) |
| Card bg | `#f5f0e8` | Card surfaces |
| Border | `#e8dfd0` | Dividers, input borders |
| Body text | `#111827` (gray-900) | Primary text |
| Muted text | `#4b5563` (gray-600) | Secondary text |

**Dark mode:**

| Token | Tailwind | Usage |
|---|---|---|
| Page bg | `stone-900` (#1c1917) | Main background |
| Card bg | `stone-800` (#292524) | Card surfaces |
| Border | `stone-700` (#44403c) | Dividers, borders |
| Body text | `stone-50` (#fafaf9) | Primary text |
| Muted text | `stone-400` (#a8a29e) | Secondary text |
| Primary CTA | `amber-400` (#fbbf24) | Buttons, links in dark mode |
| Primary hover | `amber-300` (#fcd34d) | Hover in dark mode |

**Rules:**
- Never use pure black on pure white - too harsh for older eyes
- Amber dominates CTAs - never blue or purple
- All backgrounds use warm tones - never cool grey

### Typography

Font: **Geist** (already installed via `next/font`). Use the variable font weight.

| Role | Weight | Min Size |
|---|---|---|
| Hero headline | 800 | `text-5xl` (mobile) / `text-6xl` (desktop) |
| Page heading | 700 | `text-3xl` |
| Section heading | 700 | `text-2xl` |
| Body text | 400 | `text-base` (16px ABSOLUTE MINIMUM) |
| UI labels | 500-600 | `text-sm` (14px min) |
| Metadata | 400 | `text-xs` ONLY for timestamps/meta - never body |

Line height: always `leading-relaxed` for body text. Never tight for paragraphs.

### Logo

The Stammfeuer logo is a stylized **two-line flame** representing two generations burning together.

**Wordmark rendering:**
```tsx
<span className="font-bold text-gray-900 dark:text-stone-50">Stamm</span>
<span className="font-bold text-amber-600 dark:text-amber-400">feuer</span>
```

**SVG Flame Icon** (use this exact SVG for favicon, header, and hero):
```svg
<svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 4C20 4 8 14 8 26C8 33.7 13.4 40 20 40C26.6 40 32 33.7 32 26C32 14 20 4 20 4Z" fill="#d97706" opacity="0.9"/>
  <path d="M20 16C20 16 14 22 14 28C14 31.9 16.7 35 20 35C23.3 35 26 31.9 26 28C26 22 20 16 20 16Z" fill="#b91c1c" opacity="0.85"/>
  <path d="M20 24C20 24 17 27 17 30C17 31.7 18.3 33 20 33C21.7 33 23 31.7 23 30C23 27 20 24 20 24Z" fill="#fbbf24"/>
</svg>
```

### Category Icons (lucide-react mapping)

| Category slug | Icon | Color class |
|---|---|---|
| `stories` | `BookOpen` | `text-amber-600` |
| `recipes` | `UtensilsCrossed` | `text-orange-600` |
| `traditions` | `Sparkles` | `text-yellow-600` |
| `wisdom` | `Quote` | `text-emerald-600` |
| `places` | `MapPin` | `text-blue-600` |
| `photos` | `Camera` | `text-purple-600` |

Icon stroke width: always `strokeWidth={1.5}` (thinner than default, looks more elegant).

### Component Style Guide

**Buttons:**
```
Primary:   bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg
Secondary: border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg
Danger:    bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg
```
Minimum height: 44px (accessibility requirement for older users).

**Cards:**
```
bg-white dark:bg-stone-800
border border-[#e8dfd0] dark:border-stone-700
rounded-xl shadow-sm p-6
hover:shadow-md transition-shadow duration-200
```

**Inputs:**
```
border border-[#e8dfd0] dark:border-stone-600
rounded-lg px-4 py-3 bg-white dark:bg-stone-800
text-base (MINIMUM - never text-sm in inputs)
focus:ring-2 focus:ring-amber-500 focus:border-amber-500
```

**Category Badges:**
```
inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
stories:    bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300
recipes:    bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300
traditions: bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300
wisdom:     bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300
places:     bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300
photos:     bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300
```

### Animations

- Button hover: `transition-colors duration-150`
- Card hover: `transition-shadow duration-200`
- Modal open: opacity + scale (`opacity-0 scale-95` to `opacity-100 scale-100`), 200ms
- Toast: `translate-y-2 opacity-0` to `translate-y-0 opacity-100`, 300ms
- Hero flame: subtle `animate-pulse` or CSS keyframe loop (3s), amber glow

Always wrap animations in `@media (prefers-reduced-motion: no-preference)` to respect accessibility preferences.

### Spacing Rules

- Body text line height: `leading-relaxed` (never `leading-tight` for paragraphs)
- Card padding: `p-6` (desktop) / `p-4` (mobile)
- Section spacing: `py-16` (desktop) / `py-10` (mobile)
- Max content width: `max-w-2xl` (text), `max-w-4xl` (cards/grids), `max-w-7xl` (hero)

### Tailwind v4 - Custom Colors Setup

Tailwind v4 uses CSS variables for theming. Add these to `src/app/globals.css` inside the `@layer base` block:

```css
@layer base {
  :root {
    --color-page-bg: #fdfaf6;
    --color-card-bg: #f5f0e8;
    --color-border: #e8dfd0;
  }
}
```

Then use in components as `bg-[var(--color-page-bg)]`, `bg-[var(--color-card-bg)]`, `border-[var(--color-border)]`.

The `<body>` in `src/app/[locale]/layout.tsx` should already set: `className="bg-[#fdfaf6] dark:bg-stone-900 text-gray-900 dark:text-stone-50"`. Verify this is in place and add if missing.

---

## Directory Structure to Build

Create all files under `src/app/[locale]/`:

```
src/app/[locale]/
  page.tsx                        <- Homepage (landing page)
  layout.tsx                      <- Already done (do NOT edit)
  dashboard/
    page.tsx                      <- Authenticated dashboard
  vault/
    create/page.tsx               <- Create new vault
    [vaultId]/
      page.tsx                    <- Vault overview
      entries/
        page.tsx                  <- Entry list with filters
        new/page.tsx              <- New entry form
        [entryId]/page.tsx        <- Single entry view
      members/page.tsx            <- Member management
      settings/page.tsx           <- Vault settings
  invite/[token]/page.tsx         <- Accept invitation page
  auth/
    login/page.tsx
    register/page.tsx
    reset-password/page.tsx
  profile/page.tsx                <- User profile
  settings/page.tsx               <- App settings (theme, language, notifications)
  pricing/page.tsx                <- Pricing plans
  help/page.tsx                   <- FAQ + help for older users
  legal/
    impressum/page.tsx
    datenschutz/page.tsx
    agb/page.tsx

src/components/
  layout/
    Header.tsx                    <- Nav + locale switcher + theme toggle + auth state
    Footer.tsx                    <- Legal links + WAMOCON stamp
    Breadcrumbs.tsx
  ui/
    Button.tsx                    <- Primary, secondary, danger variants
    Card.tsx
    Input.tsx
    Textarea.tsx
    Select.tsx
    Badge.tsx                     <- For roles, categories
    Modal.tsx                     <- Accessible dialog
    Toast.tsx                     <- Notification toasts
    LoadingSpinner.tsx
    EmptyState.tsx
    Avatar.tsx
  vault/
    VaultCard.tsx
    VaultHealthChart.tsx          <- Bar chart (CSS only, no chart library)
    CategoryIcon.tsx              <- Flame/book/etc per category
  entries/
    EntryCard.tsx
    EntryForm.tsx                 <- Shared form for all 6 categories
    CategoryFields.tsx            <- Category-specific metadata fields
    VoiceInput.tsx                <- Browser Web Speech API recorder
    MediaUpload.tsx               <- Photo upload to Supabase Storage
  members/
    MemberList.tsx
    InviteForm.tsx
    RoleBadge.tsx
  prompts/
    PromptWidget.tsx              <- Weekly prompt card on dashboard
  cookie/
    CookieBanner.tsx              <- DSGVO cookie notice
```

---

## Page Specifications

### `/` - Homepage

A professional emotional marketing landing page. No productivity-tool aesthetics. Warm, personal, family.

**Section 1 - Hero (full viewport height on desktop):**
- Background: gradient `from-amber-600 via-orange-500 to-red-700`, dark overlay for text contrast
- Headline: large (`text-5xl md:text-6xl`), white, font-weight 800
  - DE: "Das Feuer deiner Familie, für immer am Brennen."
  - EN: "Your family's fire, burning forever."
- Subheading: `text-lg md:text-xl text-white/90`
  - DE: "Großmutters Rezepte. Opas Geschichten. Die Traditionen, die eure Familie zusammenhalten. Für immer bewahrt."
  - EN: "Grandma's recipes. Grandpa's stories. The traditions that hold your family together. Preserved forever."
- Two CTAs side by side: "Jetzt starten" (primary, white bg + amber text) and "Mehr erfahren" (ghost, white border)
- Flame SVG (from brand guidelines) centered above headline, `animate-pulse` (3s), 80px
- Scroll indicator arrow at bottom

**Section 2 - Problem (emotional hook):**
- Section title: "Was geht verloren, wenn niemand fragt?"
- Three columns (stacked on mobile):
  1. `BookOpen` icon - "Omas Gulaschrezept" - "Sie kennt es auswendig. Aber hat sie es je aufgeschrieben?"
  2. `Home` icon - "Die Geschichte des Familienhauses" - "Wer hat es gebaut? Welche Erinnerungen stecken darin?"
  3. `Sparkles` icon - "Die Tradition, die nur ihr kennt" - "Warum macht eure Familie das so? Bald weiß es niemand mehr."
- Background: warm `bg-[#f5f0e8]` / `dark:bg-stone-900`

**Section 3 - Feature cards (6 categories):**
- Grid 2-col (mobile) / 3-col (desktop)
- Each card: category icon (colored, 32px), category name, short description
- Use exact category icon + color mapping from Brand Design System above
- Background: white / dark:stone-800

**Section 4 - How it works:**
- Title: "So einfach geht's"
- Three numbered steps horizontally (stacked on mobile):
  1. "Vault anlegen" - "Erstelle ein privates Familienarchiv in 30 Sekunden."
  2. "Familie einladen" - "Lade Oma, Opa, Eltern und Geschwister ein."
  3. "Gemeinsam archivieren" - "Jeder tragt bei - per Sprache, Text oder Foto."
- Connecting line or arrow between steps on desktop

**Section 5 - Pull quote:**
- Full-width amber gradient background
- Large italic quote: "Das Feuer deiner Familie, für immer am Brennen."
- Below it: "Stammfeuer - Das generationsübergreifende Familienarchiv"

**Section 6 - Pricing teaser:**
- Three plan cards (Kostenlos / Pro / Familie+)
- Pro card: highlighted with `ring-2 ring-amber-600`, "Beliebt" badge
- Pricing anchor: "Weniger als ein Kaffee im Monat. Ein Erbe für immer."
- CTA: "Alle Pläne anzeigen" linking to `/pricing`

**Section 7 - Footer (see Footer component spec)**

No hardcoded strings - use `useTranslations`.

---

### `/dashboard` - Authenticated dashboard

Protected route - redirect to `/auth/login` if not authenticated.

**Empty state (no vault yet):**
- Full-page centered card: flame icon (80px), "Willkommen bei Stammfeuer"
- Subtitle: "Erstelle euer erstes Familienarchiv und lade deine Familie ein."
- Single CTA: "Vault anlegen" (amber primary button) → `/vault/create`

**With vault - sections:**
1. **Welcome header:** "Willkommen, [Name]" / "Welcome, [Name]". Show current vault name as subtitle.
2. **Vault health widget:** Fetches `GET /api/vaults/[vaultId]/health`. Shows a horizontal bar chart per category (CSS bars, Tailwind only). Shows health score as percentage ring or number. Shows inactive members list (names only).
3. **Active prompt widget:** Fetches `GET /api/vaults/[vaultId]/prompts`. Shows the weekly question with "Jetzt beantworten" CTA → `/vault/[vaultId]/entries/new?prompt=[id]`. Includes voice input button. If no prompts: show "Keine offenen Fragen diese Woche."
4. **Recent entries:** Last 5 entries across all categories. Entry cards with category badge, author avatar, date. "Alle Einträge" link → `/vault/[vaultId]/entries`.
5. **Timeline gaps:** Shows years with no entries as amber chips/badges. Label: "Jahre ohne Eintrag:"

---

### Entry Form - `/vault/[vaultId]/entries/new`

This is the most complex UI. It must handle all 6 categories differently.

**Shared fields (all categories):**
- Title (text input)
- Language selector (DE/EN toggle)
- "On behalf of" selector - proxy entry for family member
- Media upload (Supabase Storage, multiple images allowed)
- Save / Cancel buttons

**Category-specific fields:**

`stories`: Period start year + end year (optional number inputs)

`recipes`: Ingredients list (add/remove items), steps list (add/remove), origin story (textarea), servings (number), prep time (number)

`traditions`: Since year (number), introduced by (text), frequency (select: annual/monthly/weekly/special)

`wisdom`: Author (select from vault members), context (textarea)

`places`: Address (text), meaning (textarea), optional coordinates (hidden, from browser geolocation if user permits)

`photos`: Description (MANDATORY - enforce in UI before allowing save), multiple image upload

**Voice Input component:**
- Microphone button
- On click: start `window.SpeechRecognition` (Web Speech API, no API key)
- Show recording indicator (animated red dot)
- On stop: show transcript in editable textarea
- User must confirm/edit before it fills the form body
- Show toast if browser doesn't support it

**Translation tab:**
- Show "Original" and "Übersetzung" tabs
- "Übersetzung" tab shows: translated content if available, or a message "KI-Übersetzung folgt in Version 2" with info icon

---

### `/members` - Member management

Only initiators see the full management UI. Contributors/readers see the list only.

- Member list with avatar, name, family role, role badge, last contribution date
- Inactive members highlighted (no contribution ever)
- Invite form (modal): email, role selector, family role input
- Generated invite link + copy button
- Remove member (initiator only, with confirmation)
- Change role (initiator only)

---

### `/pricing` - Pricing page

**Page anchor text (above cards):** "Weniger als ein Kaffee im Monat. Ein Erbe für immer."

Three cards side by side (stacked on mobile). Centered layout `max-w-5xl mx-auto`.

**Free card:**
- Price: €0
- Subtitle: "Legt los, ohne Kreditkarte"
- Features: 5 Familienmitglieder, 20 Einträge, alle 6 Kategorien, Spracheingabe
- CTA: "Jetzt starten" (primary amber button)

**Pro card (highlighted):**
- `ring-2 ring-amber-600` border, "Beliebt" badge (amber pill, top right)
- Price: €9,90/Monat
- Annual anchor: "oder €79/Jahr - 33% sparen" (below price, `text-sm text-amber-700`)
- Subtitle: "Für Familien, die es ernst meinen"
- Features: Unbegrenzte Mitglieder, unbegrenzte Einträge, KI-Prompts, Medien-Upload, DSGVO-Export, Prioritäts-Support
- CTA: "Jetzt upgraden" - shows toast "Zahlung folgt in Kürze" (payment not yet implemented)

**Familie+ card:**
- Price: €14,90/Monat
- Annual anchor: "oder €119/Jahr - 33% sparen"
- Subtitle: "Für große Familien und mehrere Vaults"
- Features: Alles aus Pro, mehrere Vaults, früher Zugang zu neuen Features
- CTA: "Kontakt aufnehmen" (links to mailto:info@stammfeuer.app)

**Below cards:** Value anchor section
- "Was wäre es wert, Omas Rezept in 20 Jahren noch zu lesen?" (italic, centered)
- "Ein Fotoalbum-Druck kostet €40 bis 80. Stammfeuer Pro ist €79 für ein ganzes Jahr."

---

### Legal pages

Read content from `/legal-docs/` markdown files and render them. Replace placeholders:
- `{{PROJEKTNAME}}` → Stammfeuer
- `{{MONAT}}` → May
- `{{JAHR}}` → 2026
- `{{PROJEKT_EMAIL}}` → info@stammfeuer.app
- `{{BESCHREIBUNG_DES_ANGEBOTS}}` → die generationsübergreifende Archivierung von Familiengeschichten, Rezepten, Traditionen und Weisheiten

---

### `/auth/login` - Login page

**Not** a generic SaaS login. Warm, welcoming, family-feel.

- Full-page layout with warm gradient left panel (desktop) / hidden on mobile
  - Left panel: flame logo (large), tagline, short emotional copy: "Deine Familie wartet."
  - Right panel: login form on white/warm card
- Form fields: Email, Password
- Primary CTA: "Anmelden" (full-width amber button)
- Below form: "Noch kein Konto? Jetzt registrieren" link → `/auth/register`
- Magic link option: "Ohne Passwort anmelden" (collapsible / secondary) → calls `signInWithOtp`
- "Passwort vergessen?" → `/auth/reset-password`
- After login: redirect to `/{locale}/dashboard`

---

### `/auth/register` - Registration page

Same layout as login (left panel / right form panel).

- Form fields: Full name, Email, Password (min 8 chars), Password confirmation
- Show password strength indicator (simple: weak/medium/strong with color bar)
- Primary CTA: "Konto erstellen" (full-width amber button)
- After registration: redirect to dashboard with empty vault state
- Below form: "Bereits registriert? Anmelden" link → `/auth/login`
- Legal: "Mit der Registrierung stimmst du unserer [Datenschutzerklärung] und den [AGB] zu." (linked)

---

### `/auth/reset-password` - Password reset

- Single field: Email
- CTA: "Link senden"
- On submit: call `supabase.auth.resetPasswordForEmail(email)`, show success message: "Wir haben dir einen Link geschickt."
- Back link: "← Zurück zur Anmeldung"

---

### `/vault/create` - Create new vault

Protected route. Clean, focused, one-step form.

- Page title: "Neues Familienarchiv anlegen"
- Single field: Vault name (placeholder: "z.B. Familie Müller" or "Die Meiers")
- Helper text: "Wähle einen Namen, den alle Familienmitglieder wiedererkennen."
- CTA: "Archiv erstellen" (amber button)
- After creation: redirect to `/vault/[vaultId]` with a success toast: "Euer Familienarchiv wurde erstellt!"
- Show which 6 categories will be auto-created (visual preview: 6 colored category pills)

---

### `/vault/[vaultId]` - Vault overview

The "home" of a vault. Shows the full picture.

- **Header:** Vault name (large), member count, health score badge (e.g. "78 % vollständig")
- **Category grid (6 cards):** One card per category. Each shows: category icon + name, entry count, "Eintrag hinzufügen" link. Empty categories: dashed border, "Noch keine Einträge" text, CTA prominent.
- **Recent activity feed:** Last 10 entries across all categories. Compact list: author avatar, title, category badge, date.
- **Members preview:** Avatar stack (up to 5), "+ N weitere" if more. Link → `/vault/[vaultId]/members`
- **Quick actions bar** (sticky bottom on mobile): "Eintrag hinzufügen" (amber), "Mitglied einladen" (secondary)

---

### `/vault/[vaultId]/entries` - Entry list

- **Filter bar:** Category tabs (All + 6 categories), year range (from/to), member filter dropdown
- **Entry cards grid** (2 cols mobile / 3 cols desktop): `EntryCard` component
- **Empty state** per category: category icon (large, 64px), "Noch keine [Kategorie]-Einträge", CTA "Ersten Eintrag hinzufügen"
- **FAB** (floating action button, mobile): amber "+" button → `/vault/[vaultId]/entries/new`

---

### `/vault/[vaultId]/entries/[entryId]` - Single entry view

- Full-page view of one entry
- **Header:** Category badge, title (large), author name + avatar, date
- **Content:** Main text (large, `leading-relaxed`). Formatted as prose.
- **Metadata section** (collapsible on mobile): category-specific fields (years, ingredients, etc.)
- **Media gallery:** Grid of attached photos (if any). Click to expand lightbox.
- **Translation tab:** "Original" / "Übersetzung" tabs. Translation shows stub message if not available.
- **Actions** (initiator / own entry): Edit button, Delete button (with confirmation modal)
- **Back link:** "← Alle Einträge" breadcrumb

---

### `/vault/[vaultId]/settings` - Vault settings

Only accessible to `initiator` role. Redirect contributors/readers to vault overview.

- **Vault name:** Edit inline or with a form. Save on blur or explicit button.
- **Danger zone** (red-bordered card at bottom):
  - "Vault löschen" button - opens confirmation modal with vault name re-entry
  - Deletion is permanent - warn clearly

---

### `/invite/[token]` - Accept invitation

This page is hit from an email link. The user may or may not be logged in.

**If not logged in:**
- Show a welcoming page: flame icon, "Du wurdest zu [Vault Name] eingeladen!", inviting family member's name
- Two options: "Anmelden" and "Konto erstellen" (both amber, side by side)
- Store `?redirect=/invite/[token]` in the URL so auth redirects back here

**If logged in:**
- Call `GET /api/invite/[token]` to validate
- If valid: show vault name, inviter name, role. CTA: "Einladung annehmen" → calls `POST /api/invite/[token]` → redirects to `/vault/[vaultId]`
- If invalid/expired: error state with "Link ungültig oder abgelaufen" + link to homepage

---

### `/profile` - User profile

- **Avatar section:** Show current avatar (or initials fallback). Upload new photo → Supabase Storage `avatars` bucket.
- **Edit form:** Full name, Family role (free text, e.g. "Oma", "Onkel Peter"), Email (read-only - shown for reference)
- **DSGVO section** (labeled "Datenschutz", at bottom):
  - "Alle meine Daten herunterladen" → calls `GET /api/user/export` → downloads JSON
  - "Konto löschen" (red, danger) → modal with "Diese Aktion ist unwiderruflich." + confirmation → calls `DELETE /api/user/delete`

---

### `/settings` - App settings

- **Theme:** Radio group - Hell / Dunkel / System (calls `next-themes` `setTheme`)
- **Language:** Radio group - Deutsch / English (updates locale via next-intl router)
- **Notifications:** Toggle for weekly prompt emails (UI only for now - backend stub)

---

### `/help` - Help page (critical for older users)

This page is **especially important** for the 65-85 age group. Design it clearly and gently.

- **FAQ accordion:** Large touch targets (min 56px height per item), generous font size (`text-lg` for questions, `text-base` for answers)
- FAQ topics:
  1. "Wie erstelle ich ein Familienarchiv?"
  2. "Wie lade ich meine Familie ein?"
  3. "Wie füge ich einen Eintrag hinzu?"
  4. "Wie nutze ich die Spracheingabe?"
  5. "Wo sind meine Daten gespeichert? Wer kann sie sehen?"
  6. "Wie kann ich Stammfeuer auf meinem Handy nutzen?"
  7. "Was kostet Stammfeuer?"
  8. "Wie lösche ich mein Konto?"
- **Contact box:** "Brauchst du Hilfe?" - mailto:info@stammfeuer.app button (amber)
- **Video placeholder card:** "Schritt-für-Schritt Video folgt in Version 2" (dashed border, info icon)

---

### Cookie Banner

- Appears at bottom on first visit (persisted in localStorage)
- Message from `messages/de.json` `cookie.message`
- Two buttons: "Verstanden" (accept + dismiss) and "Mehr erfahren" (link to /legal/datenschutz)
- No tracking cookies are set - this is purely informational

---

## API Integration Reference

All API calls use the Supabase client. For Server Components use `createSupabaseServerClient()` from `@/lib/supabase/server`. For Client Components use `createSupabaseBrowserClient()` from `@/lib/supabase/client`.

| Action | Method | Endpoint |
|--------|--------|----------|
| List vaults | GET | `/api/vaults` |
| Create vault | POST | `/api/vaults` |
| List entries | GET | `/api/vaults/[vaultId]/entries` |
| Create entry | POST | `/api/vaults/[vaultId]/entries` |
| List members | GET | `/api/vaults/[vaultId]/members` |
| Invite member | POST | `/api/vaults/[vaultId]/members` |
| Vault health | GET | `/api/vaults/[vaultId]/health` |
| Active prompts | GET | `/api/vaults/[vaultId]/prompts` |
| Validate invite | GET | `/api/invite/[token]` |
| Accept invite | POST | `/api/invite/[token]` |
| Export data | GET | `/api/user/export` |
| Delete account | DELETE | `/api/user/delete` |

### Key API Response Shapes

**`GET /api/vaults/[vaultId]/health` response:**
```ts
{
  vault_id: string
  health_score: number          // 0-100
  entries_per_category: {
    category_slug: string       // 'stories' | 'recipes' | 'traditions' | 'wisdom' | 'places' | 'photos'
    category_name: string
    entry_count: number
  }[]
  inactive_members: {
    user_id: string
    full_name: string
    family_role: string | null
  }[]
  timeline_gaps: number[]       // years with no entries, e.g. [2018, 2019, 2022]
}
```

**`GET /api/vaults/[vaultId]/prompts` response:**
```ts
{
  prompts: {
    id: string
    prompt_text: string         // the question in current locale
    category_slug: string
    life_phase: string
    answered: boolean
  }[]
}
```

**`GET /api/vaults/[vaultId]/entries` response (array of):**
```ts
{
  id: string
  title: string
  body: string | null
  category_slug: string
  language: 'de' | 'en'
  created_at: string
  author: { full_name: string; avatar_url: string | null }
  media: { url: string; alt: string | null }[]
  metadata: Record<string, unknown>   // category-specific fields
}
```

**`POST /api/vaults/[vaultId]/entries` request body:**
```ts
{
  title: string
  body?: string
  category_slug: string
  language: 'de' | 'en'
  on_behalf_of?: string         // user_id of another member
  metadata?: {
    // stories
    period_start?: number; period_end?: number
    // recipes
    ingredients?: string[]; steps?: string[]; origin_story?: string; servings?: number; prep_time?: number
    // traditions
    since_year?: number; introduced_by?: string; frequency?: string
    // wisdom
    context?: string
    // places
    address?: string; coordinates?: string; meaning?: string
    // photos
    description?: string        // REQUIRED for photos
  }
}
```

**Error responses (freemium limits):**
```ts
// HTTP 402
{ error: 'freemium_entry_limit' }
{ error: 'freemium_member_limit' }
```

Auth endpoints use Supabase directly:
```ts
// Server Component: check session
const { data: { user } } = await supabase.auth.getUser()

// Client Component: sign in
await supabase.auth.signInWithPassword({ email, password })

// Client Component: sign up
await supabase.auth.signUp({ email, password, options: { data: { full_name } } })

// Client Component: magic link
await supabase.auth.signInWithOtp({ email })

// Client Component: sign out
await supabase.auth.signOut()
```

---

## Translation Usage

**Always** use `useTranslations` in Client Components and synchronous Server Components:
```tsx
// Synchronous Server Component or Client Component
import { useTranslations } from 'next-intl'
const t = useTranslations('auth')
return <h1>{t('loginTitle')}</h1>

// Client Component - must mark with 'use client'
'use client'
import { useTranslations } from 'next-intl'
```

**Async Server Components** must use `getTranslations` (awaitable):
```tsx
// Async Server Component
import { getTranslations } from 'next-intl/server'
export default async function Page() {
  const t = await getTranslations('auth')
  return <h1>{t('loginTitle')}</h1>
}
```

All keys are defined in `/messages/de.json` and `/messages/en.json`.
Namespaces: `nav`, `auth`, `vault`, `members`, `categories`, `entries`, `prompts`, `dashboard`, `freemium`, `pricing`, `profile`, `settings`, `legal`, `cookie`, `errors`, `common`

---

## Key Component Specifications

### `layout/Header.tsx`

The global navigation. Rendered in `src/app/[locale]/layout.tsx`.

**Desktop layout (flex, full-width):**
- Left: Logo (`StammfeuerLogo` SVG + wordmark, links to `/`)
- Center: Primary nav links (only shown when authenticated): Dashboard, Vaults, Prompts
- Right: Language switcher (DE | EN toggle), Theme toggle (sun/moon icon), Auth state (Avatar + name dropdown OR "Anmelden" button)

**Mobile layout (hamburger):**
- Left: Logo
- Right: Hamburger icon (3 lines, `Menu` from lucide) + auth avatar
- Drawer/sheet slides in from right on click - contains all nav items
- Drawer closes on outside click and on nav

**Auth state in header:**
- Unauthenticated: "Anmelden" (ghost button) + "Registrieren" (amber button)
- Authenticated: Avatar circle (initials or photo) + dropdown (Profil, Einstellungen, Abmelden)

**Language switcher:** Two text buttons "DE" and "EN", active one is `font-semibold text-amber-600`, inactive is `text-gray-500`. On click: use `useRouter` + `usePathname` from `next-intl/navigation` to switch locale.

**Theme toggle:** `Sun` icon (light) / `Moon` icon (dark) / `Monitor` icon (system). Cycles through modes. Uses `useTheme()` from `next-themes`.

---

### `layout/Footer.tsx`

- Max-width `max-w-7xl mx-auto`, padded `py-12 px-6`
- **Top row:** Logo (small, 24px) + tagline on left, legal links on right (Impressum, Datenschutz, AGB)
- **Bottom row:** WAMOCON company stamp (from `legal-docs/company-stamp.md`) on left, language switcher on right, copyright center
- **WAMOCON stamp:** Small text "Entwickelt von WAMOCON GmbH" with subtle styling. Read the stamp text from `legal-docs/company-stamp.md`.
- Dark/light: background `bg-[#f5f0e8] dark:bg-stone-900`, `border-t border-[#e8dfd0] dark:border-stone-800`

---

### `vault/VaultCard.tsx`

Props: `{ vault: { id, name, created_at }, memberCount: number, entryCount: number, healthScore: number }`

- Card with warm border, rounded-xl, hover shadow
- Top: Vault name (`text-xl font-semibold`), health score badge (right-aligned, amber if >60, red if <40)
- Stats row: member count with `Users` icon, entry count with `BookOpen` icon
- Footer: "Öffnen" link button → `/vault/[vaultId]`

---

### `entries/EntryCard.tsx`

Props: `{ entry: { id, title, body, category_slug, created_at, author, media } }`

- Card, rounded-xl, hover shadow
- Top: Category badge (colored chip), author avatar (small, 24px) + name, date (relative, e.g. "vor 3 Tagen")
- Title: `text-lg font-semibold`, max 2 lines (`line-clamp-2`)
- Preview text: first 100 chars of body, faded out. `text-sm text-gray-600 dark:text-stone-400 line-clamp-3`
- If media: thumbnail of first image (right side, 64x64, rounded-lg, object-cover)
- Click: navigates to `/vault/[vaultId]/entries/[entryId]`

---

### `ui/Avatar.tsx`

Props: `{ src?: string | null, name: string, size?: 'sm' | 'md' | 'lg' }`

- If `src`: show circular image
- If no `src`: show circle with initials (first letter of first + last name), background color derived from name (use a simple hash → amber/orange/red/emerald shades)
- Sizes: `sm` = 24px, `md` = 40px, `lg` = 64px

---

### `ui/EmptyState.tsx`

Props: `{ icon: LucideIcon, title: string, description?: string, action?: { label: string, href: string } }`

- Centered, `py-16`, icon (64px, `text-amber-400`), title (`text-xl font-semibold`), description (`text-gray-500`), optional CTA button
- Background: subtle dashed border card in some contexts (entry list, member list)

---

### Loading and Skeleton States

Every data-fetching page/component needs a loading state. Use Tailwind `animate-pulse` skeleton patterns:

```tsx
// Skeleton card example
<div className="rounded-xl bg-[#f5f0e8] dark:bg-stone-800 animate-pulse p-6">
  <div className="h-4 bg-[#e8dfd0] dark:bg-stone-700 rounded w-3/4 mb-3" />
  <div className="h-3 bg-[#e8dfd0] dark:bg-stone-700 rounded w-1/2" />
</div>
```

Create `loading.tsx` files next to each `page.tsx` that shows skeleton versions of the page layout. Next.js App Router automatically uses these during navigation.

---

## Auth Flow

1. Unauthenticated users hitting `/dashboard` or `/vault/**` → redirect to `/{locale}/auth/login`
2. After login → redirect to `/{locale}/dashboard`
3. If user has no vault → show vault creation prompt on dashboard
4. Invite flow: `/invite/[token]` → if not logged in, redirect to login with `?redirect=/invite/[token]`

---

## Freemium Limits

When API returns `{ error: 'freemium_entry_limit' }` (HTTP 402):
- Show modal with amber header, flame icon
- Headline: "Limit erreicht"
- Body: "Mit Pro hast du unbegrenzte Einträge und unbegrenzte Mitglieder. Weniger als ein Kaffee im Monat."
- Primary CTA: "Jetzt upgraden" → `/pricing`
- Secondary: "Schliessen" (ghost button)

When API returns `{ error: 'freemium_member_limit' }` (HTTP 402):
- Same pattern, body: "Du hast das Limit von 5 Familienmitgliedern erreicht. Mit Pro ladet ihr unbegrenzt ein."

**Proactive upgrade triggers (soft nudges - no blocking):**
- At 80 % of entry limit (16/20): info banner on vault page "Fast voll - hol dir Pro"
- After adding 4th member: tooltip "Noch eine Person? Mit Pro unbegrenzt einladen."
- After first successful entry save: dismissable card "Das war einfach. Mit Pro unbegrenzt."

---

## Responsive Breakpoints

| Breakpoint | Use |
|------------|-----|
| `sm` (640px) | Mobile landscape |
| `md` (768px) | Tablet |
| `lg` (1024px) | Desktop |

Mobile-first approach. Navigation collapses to hamburger below `md`.

---

## Accessibility Requirements

- All interactive elements: min 44×44px touch target
- Form labels: always visible (no placeholder-only labels)
- Images: meaningful alt text
- Keyboard navigation: all interactive elements reachable by Tab
- Color contrast: WCAG AA minimum
- Older user consideration: font size min 16px body, 20px+ for headlines

---

## What NOT to do

- Do NOT install chart libraries (Recharts, Chart.js) - use CSS bars only
- Do NOT install form libraries (React Hook Form, Formik) - use native React state
- Do NOT install UI component libraries (shadcn, MUI, Chakra) - build components from Tailwind
- Do NOT hardcode any user-facing strings - always `useTranslations`
- Do NOT use em dash (—) in any text or code
- Do NOT use `"use client"` unless the component truly needs interactivity
- Do NOT skip the voice input implementation - it is mandatory per requirements (A-03)

---

## Quality Gates (run before declaring done)

```bash
npm run typecheck   # must be 0 errors
npm run lint        # must be 0 errors
npm run build       # must succeed with 0 errors
```

---

## Deliverables

1. All pages listed in the directory structure above
2. All components listed above
3. `loading.tsx` skeleton files for dashboard, vault overview, entry list, entry detail
4. Cookie banner
5. Responsive navigation (header + mobile hamburger)
6. Light + dark mode working on all pages
7. DE + EN translations working (language switcher in header)
8. Auth flow (login, register, magic link, password reset)
9. Voice input component using Web Speech API
10. Vault health bar chart (CSS only)
11. `npm run build` passing with 0 errors

## package.json
{
  "name": "ahnenecho",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit",
    "verify": "npm run typecheck && npm run lint && npm run build",
    "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
  },
  "dependencies": {
    "@supabase/ssr": "^0.10.3",
    "@supabase/supabase-js": "^2.105.4",
    "@xyflow/react": "^12.10.2",
    "docx": "^9.6.1",
    "lucide-react": "^1.16.0",
    "next": "16.2.1",
    "next-intl": "^4.12.0",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

