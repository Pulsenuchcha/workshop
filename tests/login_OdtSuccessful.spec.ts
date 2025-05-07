import { test } from "@playwright/test";
import { LoginPage } from "../pageObject/loginPage";
import * as data from "../data.json";
import { ProductPage } from "../pageObject/productPage";


test("Login with correct email and password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goTo(data.baseUrl);
  await loginPage.verifyLogo();
  await loginPage.fillLoginTextFieldEmail(data.login.email)
  await loginPage.fillLoginTextFieldPassword(data.login.password); 
  await loginPage.clickLoginButton();
  await productPage.verifyUrl();
});