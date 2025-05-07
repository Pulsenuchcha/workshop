import { expect, test } from "@playwright/test";
import { LoginPage } from "../pageObject/loginPage";
import * as data from "../data.json";



test("Login with wrong email and password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo(data.baseUrl);
  await loginPage.verifyLogo();
  await loginPage.fillLoginTextFieldEmail(data.loginFail.email)
  await loginPage.fillLoginTextFieldPassword(data.loginFail.password); 
  await loginPage.clickLoginButton();
  await loginPage.verifyfailAlert();
});