import { Page } from "@playwright/test";

export class BasePage {
    page:Page

    constructor(page:Page){
        this.page = page;
    }

    async navigateToPage(url: string){
        console.log(url);
        
        await this.page.goto(url);
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('load');
    }
}