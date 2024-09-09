import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
   private cwcText = this.page.locator('#cw-title');
   private cookiesButton = this.page.locator('#cwc-accept');
   private videoThumbs = this.page.locator('[data-el="Thumb"]');

   async acceptAgeAndCookies() {
      await this.cwcText.click()
      await this.cookiesButton.click()
   }

   async getRandomVideoThumbnail() {
      const count = await this.videoThumbs.count();
      const randomIndex = Math.floor(Math.random() * count);
      return this.videoThumbs.nth(randomIndex);
   }
}