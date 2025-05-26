import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class MyTaskPage extends BasePage {

    private myTaskNavigation: NavigationMixin;
    private taskForm: FormMixin;


constructor(page:Page){
    super(page);
    this.myTaskNavigation = new NavigationMixin(page, 'My tasks', 'Create Task' );
    this.taskForm = new FormMixin(page, SELECTORS.FORMS.TASK, 'Create Task');
}

async goToMyTaskPage(url:string){
  this.myTaskNavigation.navigateToSection(url);
}

async openCreateTaskForm() {
  this.taskForm.openForm(this.myTaskNavigation.createButton);
}

async cancelTaskCreation() {
  this.taskForm.cancelFormCreation();
}

async verifyTaskFormSnapshot() {
  await expect(this.taskForm.formContainer).toMatchAriaSnapshot(`
    - paragraph: Create Task
    - text: Task Name
    - textbox "Task Name"
    - text: Status
    - paragraph: To Do
    - img
    - text: Type
    - paragraph:
      - img
      - text: Project Tasks
    - img
    - text: Project
    - paragraph: Select Project
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
    `);
}

}