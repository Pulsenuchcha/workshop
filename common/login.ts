import { Page } from "@playwright/test";
import { LoginPage } from "../pageObject/loginPage";
import * as data from "../data.json";

export async function login(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.goTo(data.baseUrl);
  await loginPage.verifyLogo();
  await loginPage.fillLoginTextFieldEmail(data.login.email);
  await loginPage.fillLoginTextFieldPassword(data.login.password);
  await loginPage.clickLoginButton();
}

