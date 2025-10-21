import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {

  readonly openProjects: Locator;
  readonly myOpenTasks: Locator;
  readonly activity: Locator;
  readonly colorBoardsParagraph: Locator;
  // readonly seeAllProjects: Locator;
  readonly projectsParagraph:Locator;
  readonly openTasksParagraph:Locator;

  constructor(page: Page) {
    super(page);
    this.openProjects = page.getByText('Open Projects See All Projects', { exact: true });
    this.myOpenTasks = page.getByText('My Open Tasks See All Tasks', { exact: true });
    this.activity = page.getByText('Activity');
    this.colorBoardsParagraph = page.locator('app-dashboard').getByText('Color Boards', { exact: true });
    this.projectsParagraph =  page.getByText('Open Projects', { exact: true });
    this.openTasksParagraph =  page.getByText('Open Projects', { exact: true });
  }


  async verifyAllWidgets() {
    await expect(this.openProjects).toBeVisible();
    await expect(this.myOpenTasks).toBeVisible();
    await expect(this.activity).toBeVisible();
    await expect(this.projectsParagraph).toBeVisible();
    await expect(this.openTasksParagraph).toBeVisible();
  }

  }