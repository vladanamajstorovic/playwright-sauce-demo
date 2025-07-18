import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe('InventoryPage functionality', () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage

    test.beforeEach('Page set up', async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage= new InventoryPage(page)
        await loginPage.goToLoginPage()
        await loginPage.inputUsername('standard_user')
        await loginPage.inputPassword('secret_sauce')
        await loginPage.clickOnLoginButton()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    })


    test('User can add to cart', async ({ page }) => {
        await inventoryPage.clickAddToCartButton()
        await expect(inventoryPage.shopingCartBadge).toBeVisible();
    })

    test('User can go to cart page', async ({ page }) => {
        await inventoryPage.clickShopingCart()
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
        await expect(inventoryPage.shopingCartBadge).toBeVisible();
    })


    test('User can logout', async ({ page }) => {
        await inventoryPage.clickBurgerMenuButton()
        await inventoryPage.clickLogoutButton()
        await expect(page).toHaveURL('https://www.saucedemo.com/')
        await expect(loginPage.usernameField).toBeVisible();
        await expect(loginPage.passwordField).toBeVisible();


    })



})