# PROJECT BLOCK Contract

Every work request entering the factory must resolve to one stable project identity.

```text
[PROJECT BLOCK]
PROJECT_ID:
PROJECT_NAME:
GITHUB_REPOSITORY:
ENVIRONMENT:
WORK_TYPE:
PRIORITY:
[/PROJECT BLOCK]
```

## Rules

1. `PROJECT_ID` is immutable after onboarding.
2. Context, backlog, code, tests, releases and metrics from different PROJECT_ID values must never be mixed.
3. If PROJECT_ID is missing but uniquely inferable, the Delivery Orchestrator may resolve it.
4. If two or more projects are plausible, only that work item is blocked for Product Owner clarification.
5. Ambiguity in one project never blocks unrelated projects.
