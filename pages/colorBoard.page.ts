import { Page, Locator, expect } from '@playwright/test';
import {BasePage} from './base.page';
import { User } from '../utils/users';
import { NavigationMixin } from '../mixins/navigation.mixin';
import { FormMixin } from '../mixins/form.mixin';
import { SELECTORS } from '../utils/config';

export default class ColorBoardPage extends BasePage {

    // private sideBarLinkColorBoard: Locator;
    // private createColorBoardBtn: Locator;
    // private cancelCreationBtn: Locator;
    // private formColorBoardHeader: Locator;
    // private colorBoardForm: Locator;

    private colorBoardNavigation: NavigationMixin;
    private colorBoardForm: FormMixin;

constructor(page:Page){
    super(page);
    this.colorBoardNavigation = new NavigationMixin(page, 'Color Boards', 'Create Color Board');
    this.colorBoardForm = new FormMixin(page, SELECTORS.FORMS.COLOR_BOARD, 'Create Color Board');
    // this.sideBarLinkColorBoard = page.getByRole('link', { name: 'Color Boards', exact: true });
    // this.createColorBoardBtn = page.getByRole('button', { name: 'Create Color Board' });
    // this.cancelCreationBtn = page.getByRole('button', { name: 'Cancel' });
    // this.formColorBoardHeader = page.getByRole('paragraph').filter({ hasText: 'Create Color Board'});
    // this.colorBoardForm = page.locator('app-board-form');
}

async goToColorBoardPage(url:string){
  await this.colorBoardNavigation.navigateToSection(url);
  //  await this.navigateToPage(url);
  //  await this.sideBarLinkColorBoard.click();
  //  await expect(this.createColorBoardBtn).toBeVisible(); 
}

async openCreateColorBoardForm() {
await this.colorBoardForm.openForm(this.colorBoardNavigation.createButton);
//   await this.createColorBoardBtn.click();
//   await expect(this.formHeader).toBeVisible();
//   await expect(this.formColorBoardHeader).toHaveText('Create Color Board');
}

async cancelColorBoardCreation() {
await this.colorBoardForm.cancelFormCreation();
//   await this.cancelCreationBtn.click();
//   await expect(this.colorBoardForm).toBeHidden();
// }

}

}