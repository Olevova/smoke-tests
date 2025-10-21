import { Page, Locator, expect } from '@playwright/test';
import { TIMEOUTS } from '../utils/config';

export class FormMixin {
  protected page: Page;
  cancelButton: Locator;
  formContainer: Locator;
  protected formHeader: Locator;

  constructor(page: Page, formSelector: string, headerText: string) {
    this.page = page;
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.formContainer = page.locator(formSelector);
    this.formHeader = page.getByRole('paragraph').filter({ hasText: headerText });
  }

  async openForm(triggerButton: Locator){
    await triggerButton.click();
    await expect(this.formHeader).toBeVisible({ timeout: TIMEOUTS.DEFAULT });
  }

  async cancelFormCreation(){
    await expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
    // await expect(this.formContainer).toBeHidden({ timeout: TIMEOUTS.DEFAULT });
    await expect(this.formContainer).not.toBeVisible({ timeout: TIMEOUTS.DEFAULT });
    
  }

  async verifyFormHeader(expectedText: string){
    await expect(this.formHeader).toHaveText(expectedText);
  }
}