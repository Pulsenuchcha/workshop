import { test} from "@playwright/test";
import { ProductPage } from "../pageObject/productPage"
import * as data from "../data.json";
import { login } from "../common/login";


test.beforeEach(async ({ page }) => {
    await login(page);
})


test("Add laptop to basket", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.verifyUrl();
    await productPage.verifyLogo();
    await productPage.verifyProduct();
    await productPage.clickAddProductButton();
})

test("Add laptop and headphone in the basket", async ({page})=> {
    const productPage = new ProductPage(page);

    await productPage.verifyUrl();
    await productPage.verifyLogo();
    await productPage.verifyProduct();
    await productPage.clickAddProductButton();

} );
  


