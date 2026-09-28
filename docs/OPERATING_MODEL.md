# Operating Model

## Roles

- **Product Owner — Human:** needs, product priorities, business decisions and acceptance when required.
- **Delivery Orchestrator / Scrum Master — AI:** intake, PROJECT_ID resolution, backlog refinement, dependencies, coordination, blockers, traceability and executive reporting.
- **Tech Lead / Software Architect:** architecture, impact, security, technical integrity and debt.
- **Backend / Data Engineer:** APIs, data, integrations, migrations, persistence and pipelines.
- **Frontend / UX Engineer:** UI, navigation, responsive behaviour, accessibility and user states.
- **AI / Automation Engineer:** models, prompts, agents, evaluation, automation, fallback, cost and resilience when applicable.
- **QA / Test Engineer:** acceptance verification, functional/integration/regression tests, edge cases and evidence. Conceptually independent from implementation.
- **DevOps / Release Engineer:** CI/CD, environments, secrets, deployment, rollback, logs and releases.

## Work types

EPIC, FEATURE, USER_STORY, TASK, BUG, SPIKE, TECH_DEBT, IMPROVEMENT.

## Workflow states

BACKLOG → DISCOVERY → READY → IN_PROGRESS → CODE_REVIEW → QA → READY_FOR_ACCEPTANCE → DONE

Exceptional states: BLOCKED, NEEDS_PRODUCT_OWNER, FAILED, CANCELLED.

## Priorities

CRITICAL, HIGH, MEDIUM, LOW.

## Definition of Ready

A work item is READY when it has a PROJECT_ID, objective, sufficient scope, verifiable acceptance criteria, known dependencies, evaluated impact and identified repository. Minor technical details may be responsibly inferred.

## Definition of Done

When applicable: implementation complete; review complete; tests pass; acceptance criteria verified; integration validated; documentation updated; no known critical regression; deployment complete; evidence available; Product Owner acceptance obtained when required.

`CODE WRITTEN != DONE`.

## Product Owner escalation

Escalate only genuine product ambiguity, destructive/irreversible operations, required credentials, material costs, major scope changes or acceptance decisions. Routine technical decisions remain with the delivery team.

## Parallelism

Independent work should execute concurrently. Relationships are explicitly represented as `BLOCKS`, `BLOCKED_BY`, or `RELATED_TO`. A blocker in one PROJECT_ID must not stop unrelated projects.

## Honest execution states

PLANNED, QUEUED, RUNNING, BLOCKED, DONE. Never represent planned work as actively executing.
