# Kong UI Tests

UI automation tests for **Kong Manager** built with **Playwright + TypeScript**.

---

## Overview

* End-to-end UI tests
* Scalable project structure 
* Allure reporting
* CI-ready with GitHub Actions

---

## Project Structure

```
KONG-UI-TESTS
├── .github/workflows/          # GitHub Actions (CI)
│   └── playwright.yml
│
├── config/                     # Root-level environment config
│   └── env.local.ts
│
├── src/
│   ├── config/                 # Test configuration
│   ├── core/                   # Core helpers (base page, wrappers)
│   ├── fixtures/               # Playwright fixtures (auth, context)
│   ├── flows/                  # Business flows (high-level actions)
│   └── pages/                  # Page Objects
│
├── test-data/                  # Test data
│
├── tests/e2e/                  # E2E test specs
│   └── service/
│       └── service.create.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Prerequisites

* Node.js >= 18
* A running Kong Manager

Install dependencies:

```bash
npm install
npx playwright install
```

---

## Environment Configuration

Configure environment in:

```
config/env.local.ts
```

Example (local development):

```ts
export const env = {
  timeout: 30_000,
  headless: false,
  baseUrl: 'http://localhost:8002',
};
```

---

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run service tests only:

```bash
npx playwright test tests/e2e/service
```

UI mode (debug):

```bash
npx playwright test --ui
```

View report:

```bash
npx playwright show-report
```

---
