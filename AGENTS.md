OpenAIQ Frontend — AGENTS.md

Scope

- Applies to the entire repository. A deeper AGENTS.md (if present) overrides within its subtree.

Core Conventions

- Keep changes minimal, typed, and consistent with the existing structure.
- Prefer simple, accessible UI and avoid unnecessary abstractions.

Tech Stack

- React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (style: "new-york"), Clerk, react-router-dom.

Directory & Routing

- Pages mirror URL paths under `src/pages` using folder-based routes with `index.tsx`.
  - Examples: `/` → `src/pages/index.tsx`, `/devices` → `src/pages/devices/index.tsx`, `/devices/new` → `src/pages/devices/new.tsx`.
- Keep a not-found page at `src/pages/404.tsx`.

Authentication (Clerk)

- Use in-app embedded auth routes (no redirects to accounts.dev).
- Configure `ClerkProvider` with local routes (e.g., sign-in/sign-up paths) and use `SignedIn`, `SignedOut`, and `RedirectToSignIn` for guards.

UI Components (shadcn/ui)

- Add UI components via shadcn CLI only — do not copy/paste component code.
- Import components from `@/components/ui/...`. Avoid modifying generated component files unless necessary.

Styling

- Use Tailwind utility classes. Avoid adding new global CSS without discussion.

TypeScript

- Strict settings are enabled. With `verbatimModuleSyntax`, import types using `import type { ... }`.
- Respect the alias `@` → `src`.

Scripts

- Scripts: `npm run dev`, `npm run build`, `npm run lint`.

Do / Don’t

- Do: follow URL-mirrored page structure; use shadcn CLI; keep auth embedded; keep PRs focused.
- Don’t: commit secrets; add vendor UI manually; bypass routing/auth conventions.
