import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { VideoPage } from '../pages/VideoPage';

test('check some', async ({ page }) => {
  const homePage = new HomePage(page);
  const videoPage = new VideoPage(page);

  await homePage.goto('/');

  const randomThumbnail = await homePage.getRandomVideoThumbnail();
  await randomThumbnail.click();

  await videoPage.checkVideoPurchaseMenuClosed();

  const isPresented = await videoPage.isVideoPresented();
  const isPlaying = await videoPage.isVideoPlaying();
  const isMuted = await videoPage.isVideoMuted();

  expect(isPresented, 'Video player is not presented.').toBe(true)
  expect(isPlaying, 'Video is not playing.').toBe(true);
  expect(isMuted, 'Video is not muted.').toBe(true);
});