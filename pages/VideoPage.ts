import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class VideoPage extends BasePage {
   private videoPurchaseMenuClosed = this.page.locator('.video-purchase__menu_closed .video-purchase__menu-title:text("Get full video")').first();
   private videoElement = this.page.locator('.video__main video');
 
   constructor(page: Page) {
     super(page);
   }
 
   async checkVideoPurchaseMenuClosed() {
     await expect(this.videoPurchaseMenuClosed).toBeVisible();
   }
 
   async isVideoPlaying() {
     return await this.page.evaluate(() => {
       const videoElement = document.querySelector('video');
       return videoElement && !videoElement.paused && videoElement.currentTime > 0;
     });
   }
 
   async isVideoMuted() {
     return await this.page.evaluate(() => {
       const videoElement = document.querySelector('video');
       return videoElement ? videoElement.muted : false;
     });
   }
}