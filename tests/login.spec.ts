import { LoginPage } from '../Pages/LoginPage';
import { test, expect } from '@playwright/test';

test('user should be able to login and see dashboard', async ({page}) => {
  const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('driving@biz.com', 'test01');
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()})


    test('user should not be able to login with invalid credentials', async ({page}) => {
      const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid@biz.com', 'invalid01');
        await expect(page.getByText('Password/email is invalid')).toBeVisible();
    });

test('user should not be able to login with empty credentials', async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto();
  await loginPage.login('','')
  await expect(page).toHaveURL(/sessions/);
});


test('user should not be able to login with empty email', async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto();
  await loginPage.login('','test01')
  await expect(page.getByText('Password/email is invalid')).toBeVisible();
  await expect(page).toHaveURL(/sessions/);
});

test('user should not be able to login with empty password', async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto();
  await loginPage.login('driving@biz.com','')
  await expect(page.getByText('Password/email is invalid')).toBeVisible();
  await expect(page).toHaveURL(/sessions/);
});


test('user should logout successfully', async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto();
  await loginPage.login('driving@biz.com', 'test01');
  await page.locator('#avatar').click();
await page.locator('#logout-link').click();
await expect(page).toHaveURL('https://whenwise.agileway.net/');});
