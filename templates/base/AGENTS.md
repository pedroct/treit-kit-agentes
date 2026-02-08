# AGENTS.md

This repository provides a Codex-ready dev tools kit with Skills, Agents, and Workflows.

## How to use
- Skills live in `.agents/skills/` (Codex project path).
- Agents live in `agents/` as persona briefs.
- Workflows live in `workflows/` and are invoked by slash command names.

## CLI
Scaffold a new kit:
- `npx @pedroct/kit-agentes init my-kit`

## Default behavior
- Detect the best agent(s) and skill(s) from the request.
- If a workflow command is present, follow its steps.
- Keep outputs concise and include file references.

## Domain focus
- Dev tools, integrations, data pipelines, and CI/CD.
- Stack priority: React/Next.js, Node.js, Python/FastAPI, Java/Spring.

## Available skills
- codex-foundations: Core operating rules for Codex in this repository.
- intelligent-routing: Choose agents and skills.
- planning-protocol: Create focused plans.
- feature-implementation: Implement features safely.
- systematic-debugging: Structured debugging.
- code-review: Review for risks and regressions.
- testing-strategy: Pick and add tests.
- documentation-templates: Standard docs.
- deployment-playbook: Safe deployment steps.
- integration-design: Build reliable external integrations.
- data-pipeline-ops: Design and operate data pipelines.
- cicd-automation: CI/CD workflows, caching, and releases.

## Available agents
- orchestrator
- frontend-specialist
- backend-specialist
- qa-engineer
- devops-engineer
- platform-engineer
- integrations-engineer
- data-pipeline-engineer
- security-auditor
- data-architect
- product-manager
- debugger

## Available workflows
- /brainstorm
- /plan
- /create
- /debug
- /review
- /test
- /deploy
- /ci
- /integrate
- /pipeline
- /status
- /orchestrate
- /docs
