# 🛒 GreenKart E2E Automation Framework

An enterprise-grade End-to-End (E2E) Test Automation Framework built with **Playwright** and **TypeScript**, showcasing modern automation design patterns, dependency-injected Page Objects, Data-Driven Testing (DDT), and Continuous Integration via **GitHub Actions**.

---

## 🌟 Key Architectural Features

* **Page Object Model (POM):** Strict separation of concerns between test specs and web UI interactions.
* **Playwright Custom Fixtures (`test.extend`):** Clean dependency injection pattern instantiating Page Objects on-demand, eliminating manual `new PageObject(page)` boilerplate and `beforeEach` anti-patterns.
* **Data-Driven Testing (DDT):** Fully decoupled test data driving test execution dynamically from structured JSON files (`test-data/orderData.json`).
* **Resilient Web-First Assertions:** Zero reliance on arbitrary sleeps; leverages native auto-waiting and dynamic polling assertions.
* **CI/CD Integration (GitHub Actions):** Cloud pipeline running tests headlessly on Ubuntu virtual machines with automated HTML report artifact archiving.
* **Multi-Project Execution:** Configured across desktop engines (Chromium, Firefox, WebKit) and branded browser channels.
* **Diagnostic Observability:** Auto-captures Playwright traces on first retry, failure screenshots, and full action video logs.

---

## 📂 Framework Directory Structure

```text
PlaywrightOCT2026/
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions CI pipeline configuration
├── fixtures/
│   └── pomFixtures.ts           # Custom test fixtures with dependency injection
├── pages/
│   ├── BasePage.ts              # Common navigation & interaction wrappers
│   ├── ProductsPage.ts          # GreenKart Catalog & Search POM
│   └── CheckoutPage.ts          # Cart, Promo Code & Order Submission POM
├── test-data/
│   └── orderData.json           # Externalized data for DDT execution
├── tests/
│   └── greenkart.spec.ts        # Data-driven E2E purchase journey test spec
├── playwright-report/           # Generated HTML test run dashboards
├── test-results/                # Test failure traces, videos, and screenshots
├── .gitignore                   # Ignores node_modules, reports, and local caches
├── package.json                 # Project dependencies & execution scripts
├── playwright.config.ts         # Central Playwright engine configuration
└── tsconfig.json                # TypeScript compiler configuration