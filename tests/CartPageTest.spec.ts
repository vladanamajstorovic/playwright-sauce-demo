import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'

test.describe('CartPage functionality', () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    let cartPage: CartPage

    test.beforeEach('Page set up', async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage= new InventoryPage(page)
        cartPage= new CartPage(page)
        await loginPage.goToLoginPage()
        await loginPage.inputUsername('standard_user')
        await loginPage.inputPassword('secret_sauce')
        await loginPage.clickOnLoginButton()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    })

     test('User can remove from cart', async ({ page }) => {
        await cartPage.clickRemoveButton();
        await expect(cartPage.shopingCartBadge).toHaveCount(0); 
    })

    test('User can continue shopping', async ({ page }) => {
        await cartPage.clickContinueShoping()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(inventoryPage.addToCartButton).toBeVisible();
        
        
    })

     test('User can go to checkout page', async ({ page }) => {
        await cartPage.clickCheckOutButton()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
        await expect(inventoryPage.addToCartButton).toBeVisible();
        
        
    })







})