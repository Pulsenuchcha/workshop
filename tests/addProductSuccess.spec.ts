import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObject/loginPage";
import { ProductPage } from "../pageObject/productPage"
import * as data from "../data.json";
import { login } from "../common/login";

test.beforeEach(async ({ page }) => {
    await login(page);
})

test("Add products to basket", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.verifyUrl();
    await productPage.verifyLogo();
    await productPage.verifyProduct();
    await productPage.clickAddProductButton();
 

})


