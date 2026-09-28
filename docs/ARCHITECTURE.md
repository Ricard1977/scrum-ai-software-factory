# Architecture — Phase 1

## Components

1. **GitHub Adapter** — Issues, branches, PRs, Actions, tests and releases are the execution/traceability substrate.
2. **Project Registry** — machine-readable list of managed projects. It is the source for dynamic project discovery.
3. **Delivery Contracts** — PROJECT BLOCK and SCRUM HANDOFF define project identity and intake.
4. **Delivery Model** — workflow states, roles, DoR, DoD, dependencies, blockers and Product Owner escalation.
5. **Control Center** — independent responsive frontend that reads structured project data and presents global/project executive views.
6. **Fixtures/Test Harness** — fictitious projects used during Phase 1; no real product is onboarded.

## Isolation invariant

Every operational entity must carry a `project_id`. Reads and aggregations are scoped by that value. Cross-project aggregation is allowed only for executive global summaries and must preserve source project identity.

## Traceability chain

Product need → Handoff → Backlog item → Issue → Role → Branch → Commit → PR → Test → QA → Deploy → Acceptance → Done.

## Health

Health is rule-based rather than subjective:

- `HEALTHY`: no critical blocker and delivery progressing.
- `ATTENTION`: repeated errors, material risk or partial blockers.
- `BLOCKED`: critical impediment prevents the relevant delivery path.

A blocked project does not change the health of unrelated projects.

## Security

Secrets, tokens, API keys, passwords and credentials are never rendered in the Control Center or committed to source. Destructive production operations require explicit Product Owner authorization.
