import { expect, test } from "@playwright/test";
import { ProductPage } from "../pageObject/productPage";
import { LoginPage } from "../pageObject/loginPage";
import * as data from "../data.json"
import { login } from "../common/login";


test.beforeEach(async ({ page }) => {
    await login(page);
})

test("Logout on product page", async ({ page }) => {
    const productPage = new ProductPage(page);
    const loginPage = new LoginPage(page);
  
    await productPage.verifyUrl();
    await productPage.verifyLogo();
    await loginPage.goTo(data.baseUrl);
  });