import { BasePage } from "./BasePage";
import { Page } from "playwright/test";

export class HomePage extends BasePage {
   private cwcText = this.page.locator('#cw-title');
   private cookiesButton = this.page.locator('#cwc-accept');
   private videoThumbs = this.page.locator('[data-el="Thumb"]');

   constructor(page: Page) {
      super(page);
   }

   async acceptAgeAndCookies() {
      if (await this.cwcText.isVisible()) {
         await this.cwcText.click()
      }
      if (await this.cookiesButton.isVisible()) {
         await this.cookiesButton.click()
      }
   }

   async getRandomVideoThumbnail() {
      const count = await this.videoThumbs.count();
      const randomIndex = Math.floor(Math.random() * count);
      return this.videoThumbs.nth(randomIndex);
   }
}