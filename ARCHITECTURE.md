# Architecture

This kit uses three layers:

1. Skills
2. Agents
3. Workflows

## Skills
Skills are reusable instruction sets in `.agents/skills/`. Codex loads them when a task matches their description.

## Agents
Agent profiles in `agents/` describe specialist roles. They are lightweight and meant to guide tone, scope, and deliverables.

## Workflows
Workflow files in `workflows/` define repeatable procedures. Use them by invoking their slash command name in a request.

## Domain focus
- Dev tools with integrations, data pipelines, and CI/CD as critical flows.
- Multi-stack support: React/Next.js, Node.js, Python/FastAPI, Java/Spring.

## Extension rules
- Keep skills small and focused.
- Prefer adding a new skill over bloating an existing one.
- Update `AGENTS.md` when you add or rename items.
