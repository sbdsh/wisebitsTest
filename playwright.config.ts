import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  testDir: './tests',
  expect: {
    timeout: 200 * 1000,
  },
  fullyParallel: true,
  use: {
    baseURL: 'https://faphouse.com/',
    headless: false,
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    {
      name: 'tests',
      dependencies: ['setup'],
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        storageState: STORAGE_STATE,
      },
    },
  ],
});
