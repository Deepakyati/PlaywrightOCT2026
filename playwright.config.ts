import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // 1. Execution Timeouts
  timeout: 30 * 1000, // Total timeout per single test (30s)
  expect: {
    timeout: 5 * 1000, // Timeout for web-first assertions like toBeVisible() (5s)
  },

  // 2. Parallelism & Retries
  fullyParallel: true,
  retries: 1, // Automatically retry a failing test once before marking it failed
  workers: 2, // Maximum number of concurrent worker processes

  // 3. Reporters
  reporter: [
    ['list'], // Clean, line-by-line CLI progress
    ['html', { open: 'never' }], // Generate interactive HTML report without auto-popping browser
  ],

  // 4. Shared Settings for All Projects
  use: {
    baseURL: 'https://rahulshettyacademy.com/seleniumPractise/',
    headless: !!process.env.CI ? true : false, // Runs headless on GitHub, headed locally
    actionTimeout: 10 * 1000, // Max wait time for clicks, fills, etc.
    
    // Artifact Collection
    trace: 'on-first-retry', // Collect complete execution timeline trace only if a test fails and retries
    screenshot: 'only-on-failure', // Take a snapshot only when a test fails
    video: 'retain-on-failure', // Record video only when a test fails
  },

  // 5. Configured Browser Projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
