import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class MyTaskPage extends BasePage {

    private myTaskNavigation: NavigationMixin;
    private taskForm: FormMixin;
    private sideBarTaskPage: Locator;

constructor(page:Page){
    super(page);
    this.myTaskNavigation = new NavigationMixin(page, 'My tasks', 'Create Task' );
    this.taskForm = new FormMixin(page, SELECTORS.FORMS.TASK, 'Create Task');
    this.sideBarTaskPage = page.locator('#linkMyTask')
}

async goToMyTaskPage(url:string){
  // this.myTaskNavigation.navigateToSection(url);
  await this.navigateToPage(url);
  await this.sideBarTaskPage.click();
}

async openCreateTaskForm() {
 await this.taskForm.openForm(this.myTaskNavigation.createButton);
}

async cancelTaskCreation() {
 await this.taskForm.cancelFormCreation();
}

async verifyTaskFormSnapshot() {
  await expect(this.taskForm.formContainer).toMatchAriaSnapshot(`
    - button:
      - img
    - paragraph: Create Task
    - text: Task Name
    - textbox "Task Name"
    - text: Status
    - paragraph: To Do
    - img
    - text: Project
    - paragraph: Select Project
    - img
    - text: Type
    - paragraph:
      - img
      - text: Project Task
    - img
    - text: Assign Member
    - paragraph: Select Member
    - img
    - text: Priority (Optional)
    - paragraph: Priority
    - img
    - text: Due Date (Optional)
    - textbox "MM.DD.YY"
    - button:
      - img
    - text: Description (Optional)
    - textbox "Description"
    - text: Add Files (Optional)
    - img
    - paragraph: Drop your document here, or click to browse
    - paragraph: /Max size [\\d,.]+[bkmBKM]+\\./
    - list
    - button "Cancel"
    - button "Create Task"
  `);
}
}