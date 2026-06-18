import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ProfessionalPage } from '../Pages/ProfessionalPage';

test.describe('Professional CRUD', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('driving@biz.com', 'test01');
  });

  test('should show professionals list', async ({ page }) => {
    const pro = new ProfessionalPage(page);
    await pro.goto();
    await expect(page.getByRole('heading', { name: 'Professional' })).toBeVisible();
  });

  test('should navigate to new professional form', async ({ page }) => {
    const pro = new ProfessionalPage(page);
    await pro.goto();
    await pro.clickNew();
    await expect(page.getByRole('heading', { name: 'New Professional' })).toBeVisible();
  });

  test('should create a new professional', async ({ page }) => {
    const pro = new ProfessionalPage(page);
    await pro.goto();
    await pro.clickNew();
    await pro.fillForm('Test', 'User', 'testuser@biz.com');
    await pro.save();
    await expect(page).toHaveURL(/human_resources/);
  });

  test('should edit a professional', async ({ page }) => {
    const pro = new ProfessionalPage(page);
    await pro.goto();
    await pro.editFirst();
    await expect(page.getByRole('heading', { name: 'Edit Resource' })).toBeVisible();
  });

});