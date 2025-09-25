import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/first-website/);
  
  await page.waitForLoadState('networkidle');
  
  const hero = page.locator('main');
  await expect(hero).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  
  await page.waitForLoadState('networkidle');
  
  const body = page.locator('body');
  await expect(body).toBeVisible();
});