---
"@rune/cli": minor
---

Initial implementation of the `@rune/cli` core package, establishing the execution flow, modular structure, and fixing monorepo type-checking issues.

- **Architecture:** Implemented the core execution flow, separating the binary wrapper (`bin/cli.ts`) from the public runtime entry point (`source/index.ts`) and internal initialization logic (`source/bootstrap.ts`).
- **Modular Structure:** Established the modular scaffolding, including directories and initial type definitions for `commands`, `plugins`, `types`, and `utilities`.
- **Infrastructure (Type Checking Fix):** Resolved monorepo implicit declaration errors by:
  - Implementing dedicated `tsconfig.json` for the `@rune/cli` package, which extends the root configuration.
  - Changing the root `typecheck` script to recursively run checks on individual packages (`pnpm --recursive run typecheck`).
  - Narrowed the `engines.node` requirement in `packages/cli/package.json` to the Node.js 20 major release line.
- **Dependency Catalog:** Configured pnpm Catalogs for shared development dependencies ( `tsdown`, `@types/node`).
- **Bug Fix:** Fixed an issue in the command runner logic that prevented positional arguments from being correctly parsed and passed to command handlers.
- **Developer Experience (DX):** Added GitHub Actions workflow (`pull-request-title.yml`) to enforce Conventional Commit standards on PR titles.
