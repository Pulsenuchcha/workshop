import { type Locator, type Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly logoPage: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly failAlert: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoPage = page.getByTestId("logo");
    this.emailInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.failAlert = page.getByText("Login failed");
    this.okButton = page.getByText("OK")
  }

  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
  }

  async verifyLogo(){
    expect(this.logoPage).toBeVisible();
  }

  async fillLoginTextFieldEmail(email: string){
    await this.emailInput.fill(email);
  }

  async fillLoginTextFieldPassword(password: string){
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(){
    await this.loginButton.click();
  }

  async verifyfailAlert(){
    await expect(this.failAlert).toBeVisible();
  } 
  
}