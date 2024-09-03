import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
   const { baseURL } = config.projects[0].use;
   const browser = await chromium.launch();
   const page = await browser.newPage();
   await page.goto(baseURL!);
   await page.locator('id=cookie-wall').click();
 }
 
 export default globalSetup;