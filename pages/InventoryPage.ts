import { expect, Locator, Page } from '@playwright/test'

export class InventoryPage {

   
    readonly page: Page
    readonly addToCartButton: Locator
    readonly burgerMenuButton: Locator
    readonly shopingCart: Locator
    readonly shopingCartBadge: Locator
    readonly logoutButton: Locator

    

    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.burgerMenuButton = page.locator('#react-burger-menu-btn')
        this.shopingCart = page.locator('#shopping_cart_container')
        this.shopingCartBadge= page.locator('.shopping_cart_badge')
        this.logoutButton=page.locator('#logout_sidebar_link')
    }



    async clickLogoutButton() {
        await this.logoutButton.click()
    }


    async clickAddToCartButton() {
        await this.addToCartButton.click()
    }

    async clickBurgerMenuButton() {
        await this.burgerMenuButton.click()
    }

     async clickShopingCart() {
        await this.shopingCart.click()
    }

    



}
