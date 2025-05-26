import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class UserPage extends BasePage {

    private userForm: FormMixin;
    private userNavigation: NavigationMixin;
    // private sideBarUserLink: Locator;
    // private inviteUserBtn: Locator;
    // private cancelCreationBtn: Locator;
    // private formInviteUserHeader: Locator;
    // private userForm: Locator;

constructor(page:Page){
    super(page);
    this.userForm = new FormMixin(page,SELECTORS.FORMS.USER_INVITE, 'Invite new user Available' );
    this.userNavigation = new NavigationMixin(page, "Users", 'Invite new user');
    // this.sideBarUserLink = page.getByRole('link', { name: 'Users', exact: true });
    // this.inviteUserBtn = page.getByRole('button', { name: 'Invite new user' });
    // this.cancelCreationBtn = page.getByRole('button', { name: 'Cancel' });
    // this.formInviteUserHeader =  page.getByText('Invite new user Available');
    // this.userForm = page.locator('app-invite-user-form');
}

async goToInviteUserPage(url:string){
      await this.userNavigation.navigateToSection(url)
  //  await this.navigateToPage(url);
  //  await this.sideBarUserLink.click();
  //  await expect(this.inviteUserBtn).toBeVisible(); 
}

async openInviteUserForm() {
  await this.userForm.openForm(this.userNavigation.createButton);
  // await this.inviteUserBtn.click();
//   await expect(this.formHeader).toBeVisible();
  // await expect(this.formInviteUserHeader).toBeVisible();
}

async cancelUserInvitation() {
  await this.userForm.cancelFormCreation();
  // await this.cancelCreationBtn.click();
  // await expect(this.userForm).toBeHidden();
}


}