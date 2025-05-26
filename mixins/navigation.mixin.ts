import { Page, Locator, expect } from '@playwright/test';
import { TIMEOUTS } from '../utils/config';

export class NavigationMixin {
  protected page: Page;
  sideBarLink: Locator;
  createButton: Locator;

  constructor(page: Page, linkName: string, buttonName: string) {
    this.page = page;
    this.sideBarLink = page.getByRole('link', { name: linkName, exact: true });
    this.createButton = page.getByRole('button', { name: buttonName });
  }

  async navigateToSection(url: string){
    await this.page.goto(url);
    await this.sideBarLink.click();
    await expect(this.createButton).toBeVisible({ timeout: TIMEOUTS.DEFAULT});
  }

  async clickSidebarLink(){
    await this.sideBarLink.click();
    await expect(this.createButton).toBeVisible({ timeout: TIMEOUTS.DEFAULT});
  }
}