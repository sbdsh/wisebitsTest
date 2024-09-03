// import { test, expect } from '@playwright/test';


// test('check some', async ({ page }) => {
//   await page.goto('/');

//   const bestVideosSection = page.locator('[data-el-block="best"]').first();
//   const bestVideosThumbs = bestVideosSection.locator('[data-el="Thumb"]');

//   await bestVideosSection.scrollIntoViewIfNeeded();
//   await expect(bestVideosSection).toBeVisible();   

//   const count = await bestVideosThumbs.count();

//   if (count > 0) {
//     const randomIndex = Math.floor(Math.random() * count);
//     const randomChild = bestVideosThumbs.nth(randomIndex);
//     await randomChild.click();
//     await expect(page.locator('.video__wrap')).toBeVisible();
//   } else {
//     console.log('No child div elements found.');
//   }

//   const getFullVideoSection = page.locator('.video-purchase__menu').locator('.video-purchase__menu-title').getByText('Get full video').first();
//   const getFullVideoSection2 = page.locator('.video-purchase__menu_closed').locator('.video-purchase__menu-title').getByText('Get full video').first();

//   await expect(getFullVideoSection).toBeVisible();
//   await expect(getFullVideoSection2).toBeVisible();

//   const video = page.locator('.video__main').locator('video');
//   await expect(video).toBeVisible();

//   const isPlaying = await page.evaluate(() => {
//     const videoElement = document.querySelector('video');
//     return videoElement && !videoElement.paused && videoElement.currentTime > 0;
//   });

//   const isMuted = await page.evaluate(() => {
//     const videoElement = document.querySelector('video');
//     return videoElement ? videoElement.muted : false;
//   });

//   expect(isPlaying).toBe(true);
//   expect(isMuted).toBe(true);

// });

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { VideoPage } from '../pages/VideoPage';

test('check some', async ({ page }) => {
  const homePage = new HomePage(page);
  const videoPage = new VideoPage(page);

  await homePage.goto('/');

  const randomThumbnail = await homePage.getRandomVideoThumbnail();
  if (randomThumbnail) {
    await randomThumbnail.click();
  }

  await videoPage.checkVideoPurchaseMenuClosed();

  const isPlaying = await videoPage.isVideoPlaying();
  const isMuted = await videoPage.isVideoMuted();

  expect(isPlaying).toBe(true);
  expect(isMuted).toBe(true);
});