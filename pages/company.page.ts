import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class CompanyPage extends BasePage {

    private navigation: NavigationMixin;
    private form: FormMixin;

constructor(page:Page){
    super(page);
    this.navigation = new NavigationMixin(page, 'Companies', 'Create Company');
    this.form = new FormMixin(page, SELECTORS.FORMS.COMPANY, 'Create Company'  )
}

async goToCompaniesPage(url:string){
   await this.navigation.navigateToSection(url);

}

async goToCompanyPageBySidebarLink(){
  await this.navigation.clickSidebarLink();
}

async openCompanyForm() {
  this.form.openForm(this.navigation.createButton);
}

async cancelCompanyCreation() {
  this.form.cancelFormCreation();
}

async verifyCompanyFormSnapshot() {
  await expect(this.form.formContainer).toMatchAriaSnapshot(`
    - paragraph: Create Company
    - text: Company Name
    - textbox "Company Name"
    - text: Address
    - textbox "Street address, P.O. box."
    - textbox "Apartment, suite, unit, building, floor, etc."
    - textbox "City"
    - paragraph: Select State
    - img
    - textbox "ZIP Code"
    - text: Phone Number
    - button "+1":
      - img
      - img
    - textbox /\\(\\d+\\) \\d+-\\d+/
    - text: Email
    - textbox "Email"
    - text: Company Plan
    - paragraph: Select Company Plan
    - img
    - text: Number of users
    - textbox "Number of users" [disabled]
    - text: Subdomain Name
    - textbox "Subdomain Name"
    - text: Type
    - paragraph: Select Company Type
    - img
  `);
}

}