import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class ProjectPage extends BasePage {

    private projNavigation: NavigationMixin;
    private projForm: FormMixin;


constructor(page:Page){
    super(page);
    this.projNavigation = new NavigationMixin(page, 'Projects', 'Create Project' );
    this.projForm = new FormMixin(page, SELECTORS.FORMS.PROJECT, 'Create Project');
}

async goToProjectPage(url:string){
 await this.projNavigation.navigateToSection(url);
}

async openCreateProjectForm() {
  await this.projForm.openForm(this.projNavigation.createButton);
}

async cancelProjectCreation() {
 await this.projForm.cancelFormCreation();
}


async verifyProjectFormSnapshot() {
  await expect(this.projForm.formContainer).toMatchAriaSnapshot(`
    - button:
      - img
    - paragraph: Create Project
    - text: Project Name
    - textbox "Project Name"
    - textbox "Code"
    - 'textbox "Project #"'
    - text: Address
    - textbox "Street address, P.O. box."
    - textbox "Apartment, suite, unit, building, floor, etc."
    - textbox "City"
    - paragraph: Select State
    - img
    - textbox "ZIP Code"
    - text: Client Name
    - combobox "Client Name"
    - text: Estimated period Start Date
    - textbox "MM.DD.YY"
    - button:
      - img
    - text: End Date
    - textbox "MM.DD.YY"
    - button:
      - img
    - button "Cancel"
    - button "Next"
  `);
}

}