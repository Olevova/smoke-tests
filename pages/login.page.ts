import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { User } from "../utils/users";
import {TIMEOUTS} from '../utils/config'

export default class LoginPage extends BasePage {
  private loginForm: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitBtn: Locator;
  private profileUserBtn: Locator;
  private profileLink: Locator;
  private logOutLink: Locator;
  private loginHeading: Locator;
  private versionText: Locator;
  private rememberMe: Locator;
  private forgotPassword: Locator;
  private forgotPasswordPage: Locator;
  // page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loginForm = page.locator("form");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.rememberMe = page.locator("#rememberMe");
    this.submitBtn = page.locator("#btn-submit");
    this.profileUserBtn = page.locator("#profileUserBtn");
    this.profileLink = page.getByRole("link", { name: "My Profile" });
    this.forgotPassword = page.getByRole("link", { name: "Forgot Password?" });
    this.logOutLink = page.getByRole("button", { name: "Log out" });
    this.loginHeading = page.getByRole("heading", { name: "Welcome to Color Job" });
    this.versionText = page.locator(".versions-wrapper .version-text");
    this.forgotPasswordPage = page.locator("app-forgot-password");
  }

  async fillLoginForm(params: User) {
    await this.emailInput.fill(params.email);
    await this.passwordInput.fill(params.password);
    if (params.check) {
      await this.rememberMe.check({ force: true });
    }
  }

  async submitLogin() {
    await this.submitBtn.click();
  }

  async performAuthentication(params: User) {
    await this.navigateToPage("/login");
    await this.waitForPageLoad();
    await expect(this.versionText).toHaveText(/^V[\dA-Za-z.\-]+$/, { timeout: TIMEOUTS.LONG});
    await this.fillLoginForm(params);
    await this.page.waitForTimeout(500);
    await this.submitLogin();
    await expect(this.page).toHaveURL(/dashboard|\/$/, { timeout: TIMEOUTS.LONG });
    await expect(this.profileUserBtn).toBeVisible();
    await expect(this.profileUserBtn).toHaveText(params.name);
  }

  async checkUserMenu() {
    await this.profileUserBtn.click();
    await expect(this.profileLink).toBeVisible();
    await expect(this.logOutLink).toBeVisible();
    await expect(this.logOutLink).toHaveText("Log out", { timeout: TIMEOUTS.DEFAULT});
  }

  async logOut() {
    await this.logOutLink.click();
    await expect(this.page).toHaveURL(/\/login$/, { timeout: TIMEOUTS.DEFAULT });
    await expect(this.loginHeading).toHaveText("Welcome to Color Job", { timeout: TIMEOUTS.DEFAULT });
  }

  async openForgotPasswordPage() {
    await this.navigateToPage("/login");
    await this.forgotPassword.click();
    await expect(this.forgotPasswordPage).toMatchAriaSnapshot(`
    - img
    - heading "Forgot Password" [level=1]
    - text: Email
    - textbox "Email"
    - button "Submit"
    - link "Cancel":
      - /url: /login
    `);
  }
}
