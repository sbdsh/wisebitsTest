import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class VideoPage extends BasePage {
  private videoPurchaseMenuClosed = this.page.locator('.video-purchase__menu_closed .video-purchase__menu-title:text("Get full video")').first();

  async checkVideoPurchaseMenuClosed() {
    await expect(this.videoPurchaseMenuClosed, 'Video purchase menu is not closed').toBeVisible();
  }

  async isVideoPresented() {
    return await this.page.evaluate(() => {
      const videoElement = document.querySelector('video');
      return videoElement !== null;
    });
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