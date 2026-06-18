import { Page } from '@playwright/test';

export class ProfessionalPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('/human_resources');
  }

  async clickNew() {
    await this.page.getByRole('link', { name: '+ NEW' }).click();
  }

  async fillForm(firstName: string, lastName: string, email: string) {
    await this.page.getByPlaceholder('First name').fill(firstName);
    await this.page.getByPlaceholder('Last name').fill(lastName);
    await this.page.getByPlaceholder('Email').fill(email);
  }

  async save() {
    await this.page.getByRole('button', { name: 'Create' }).click();
}
  async editFirst() {
    await this.page.goto('/human_resources/6/edit');
}
  async deleteFirst() {
    await this.page.locator('.delete-action').first().click();
  }
}