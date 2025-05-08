import { type Locator, type Page, expect } from "@playwright/test";

export class ProductPage {
    readonly page: Page
    readonly odtLogo: Locator
    readonly logoutButton: Locator
    readonly basketButton: Locator
    readonly pageTitle: Locator
    readonly productLaptop: Locator
    readonly addProductButton: Locator
    readonly btnss: Locator

    constructor(page: Page) {
        this.page = page;
        this.odtLogo = page.getByTestId("odt-logo");
        this.logoutButton = page.getByTestId("logout");
        this.basketButton = page.getByTestId("icon-cart");
        this.pageTitle = page.getByTestId("page-title");
        this.productLaptop = page.getByTestId("product-5");
        this.addProductButton = page.getByTestId("add-cart-button");
        this.btnss = this.productLaptop.getByTestId("add-cart-button");
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL("https://workshop-saucedemo.vercel.app/products");
        
    }

    async verifyLogo() {
        expect(this.odtLogo).toBeVisible();
    }

    async verifyProduct(){
        expect(this.productLaptop).toBeVisible();
    }

    async clickAddProductButton() {
        await this.btnss.click();
    }

    async clickBasketButton(){
        await this.basketButton.click();
    }
    async clickLogoutButton(){
        await this.logoutButton.click();
    }

}