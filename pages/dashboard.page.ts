import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {

  readonly openProjects: Locator;
  readonly myOpenTasks: Locator;
  readonly activity: Locator;
  readonly colorBoardsParagraph: Locator;
  readonly seeAllProjects: Locator;

  constructor(page: Page) {
    super(page);
    this.openProjects = page.getByText('Open Projects See All Projects', { exact: true });
    this.myOpenTasks = page.getByText('My Open Tasks See All Tasks', { exact: true });
    this.activity = page.getByText('Activity');
    this.colorBoardsParagraph = page.getByRole('paragraph').filter({ hasText: 'Color Boards' });
  }


  async verifyAllWidgets() {
    await expect(this.openProjects).toBeVisible();
    await expect(this.myOpenTasks).toBeVisible();
    await expect(this.activity).toBeVisible();
    await expect(this.colorBoardsParagraph).toBeVisible();
  }

  }