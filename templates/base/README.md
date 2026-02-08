# Codex Dev Tools Kit

A Codex-first project template for dev tools teams, with Skills, Agents, and Workflows.

## Quick Start
1. Open this repo in Codex.
2. Ask for changes normally, or invoke a workflow like `/plan build X`.
3. Codex will load skills from `.agents/skills/` as needed.

## CLI

Use the CLI to scaffold a new kit from this template:

```bash
npx @pedroct/kit-agentes init my-kit
```

You can also install globally:

```bash
npm install -g @pedroct/kit-agentes
kit-agentes init my-kit
```

Options:
- `--force` overwrite an existing non-empty directory

## Release (npm)
1. Authenticate with npm:
   - Local: `npm login --scope=@pedroct --registry=https://registry.npmjs.org`
   - CI: set `NPM_TOKEN` in your CI secrets (used by `.npmrc`).
2. Bump version: `npm version patch|minor|major`
3. Publish: `npm publish` (uses `publishConfig.access=public`).

## Domain and stack
- Dev tools: integrations, data pipelines, and CI/CD.
- Stack: React/Next.js, Node.js, Python/FastAPI, Java/Spring.

## Structure
- `AGENTS.md` core instructions and registry of skills, agents, workflows.
- `.agents/skills/` Codex-compatible skills.
- `agents/` persona briefs.
- `workflows/` step-by-step procedures for slash commands.

## Add a skill
1. Create a folder under `.agents/skills/<skill-name>/`.
2. Add `SKILL.md` with YAML frontmatter containing `name` and `description`.
3. Keep instructions short and task focused.

## Notes
- Keep `.agents/skills/` tracked in git so Codex can read them.
- You can expand agents and workflows as your team evolves.
