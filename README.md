# Scrum AI Software Factory

Multi-project AI-assisted Scrum/Agile software delivery system and executive Scrum Control Center.

## Mission

Provide a reusable operating model where the Product Owner defines needs and priorities while the delivery system structures work, preserves project isolation, coordinates implementation, QA and CI/CD, and exposes executive status through a central Control Center.

## Core principles

- Strict project isolation through stable `PROJECT_ID` values.
- GitHub-backed traceability from need to Issue, branch, PR, test, QA, deployment and acceptance.
- Product Owner interruption only for genuine product, destructive, credential or material-cost decisions.
- `CODE WRITTEN != DONE`: verification and evidence are part of Done.
- No simulated background work: execution states must reflect reality.
- The Control Center is independent from managed products and discovers projects from the Project Registry.

## Phase 1

Phase 1 builds and validates the factory with fictitious projects only. Existing real projects are explicitly out of scope until Product Owner approval.

Initial architecture:

- `registry/` — central Project Registry.
- `contracts/` — Project Block and Scrum Handoff contracts.
- `docs/` — operating model, architecture, roles, workflows and governance.
- `.github/ISSUE_TEMPLATE/` — structured backlog templates.
- `control-center/` — responsive executive frontend.
- `.github/workflows/` — CI/QA automation.
- `fixtures/` — fictitious project/sprint data used to validate the factory.

## Status

`PHASE-1: IN PROGRESS`
