import { test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
import { HomePage } from '../pages/HomePage';

setup('age and cookies accept', async ({ page }) => {
   const homePage = new HomePage(page);
   await homePage.goto('/');
   await homePage.acceptAgeAndCookies();
   await page.context().storageState({ path: STORAGE_STATE });
});