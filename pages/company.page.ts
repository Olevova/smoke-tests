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
 await this.form.openForm(this.navigation.createButton);
}

async cancelCompanyCreation() {
 await this.form.cancelFormCreation();
}

async verifyCompanyFormSnapshot() {
  await expect(this.form.formContainer).toMatchAriaSnapshot();
}

}