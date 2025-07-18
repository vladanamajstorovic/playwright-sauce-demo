import { expect, Locator, Page } from '@playwright/test'

export class CartPage{

    readonly page: Page
    readonly continueShopingButton: Locator
    readonly checkoutButton: Locator
    readonly removeButton: Locator
    readonly shopingCartBadge: Locator
    readonly burgerMenuButton: Locator


    constructor(page: Page) {
        this.page = page
        this.continueShopingButton = page.locator('#continue-shopping')
        this.checkoutButton = page.locator('#checkout')
        this.removeButton = page.locator('.btn.btn_secondary.btn_small.cart_button')
        this.shopingCartBadge= page.locator('.shopping_cart_badge')
        this.burgerMenuButton=page.locator('#react-burger-menu-btn')
    }


    async clickContinueShoping() {
        await this.continueShopingButton.click()
    }

    async clickCheckOutButton() {
        await this.checkoutButton.click()
    }

    async clickRemoveButton() {
        await this.removeButton.click()
    }

    


     


}