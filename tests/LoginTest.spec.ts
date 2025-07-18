import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

test.describe('Login functionality', () => {
    let loginPage: LoginPage

    test.beforeEach('Page set up', async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goToLoginPage()
    })


    test('User can log in', async ({ page }) => {
        await loginPage.inputUsername('standard_user')
        await loginPage.inputPassword('secret_sauce')
        await loginPage.clickOnLoginButton()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

})