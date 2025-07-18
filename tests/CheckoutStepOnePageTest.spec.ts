import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage'

test.describe('Checkout step one functionality', () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    let cartPage: CartPage
    let checkoutStepOnePage: CheckoutStepOnePage

    test.beforeEach('Page set up', async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage= new InventoryPage(page)
        cartPage= new CartPage(page)
        checkoutStepOnePage= new CheckoutStepOnePage(page)
        await loginPage.goToLoginPage()
        await loginPage.inputUsername('standard_user')
        await loginPage.inputPassword('secret_sauce')
        await loginPage.clickOnLoginButton()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    })

     test('User can fillout the checkout form', async ({ page }) => {
        await inventoryPage.clickShopingCart()
        await cartPage.clickCheckOutButton()
        await checkoutStepOnePage.addFirstnameToCheckoutForm('Ana')
        await checkoutStepOnePage.addLastnameToCheckoutForm('Popa')
        await checkoutStepOnePage.addZipcodeToCheckoutForm('11000')
        await checkoutStepOnePage.clickToContinueButton()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
        
    
    })


    test('User cannot continue to the next page without checkout form', async ({ page }) => {
        await inventoryPage.clickShopingCart()
        await cartPage.clickCheckOutButton()
        await checkoutStepOnePage.clickToContinueButton()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await expect(checkoutStepOnePage.errorButton).toBeVisible; 

        
    
    })

})