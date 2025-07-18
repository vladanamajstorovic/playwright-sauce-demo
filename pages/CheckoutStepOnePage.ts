
import { expect, Locator, Page } from '@playwright/test'

export class CheckoutStepOnePage {

   
    readonly page: Page
    readonly firstNameTab: Locator
    readonly lastNameTab: Locator
    readonly zipCodeTab: Locator
    readonly continueButton: Locator
    readonly cancelButton: Locator
    readonly errorButton: Locator



    constructor(page: Page) {
        this.page = page
        this.firstNameTab = page.locator('#first-name')
        this.lastNameTab = page.locator('#last-name')
        this.zipCodeTab = page.locator('#postal-code')
        this.continueButton= page.locator('#continue')
        this.cancelButton=page.locator('#cancel')
        this.errorButton=page.locator('.error-button')
    }



    async addFirstnameToCheckoutForm(firstname: string) {
        await this.firstNameTab.fill(firstname); 
    }
     async addLastnameToCheckoutForm(lastname: string) {
        await this.lastNameTab.fill(lastname); 
    }

    async addZipcodeToCheckoutForm(zipcode: string) {
        await this.zipCodeTab.fill(zipcode); 
    }

    async clickToContinueButton() {
        await this.continueButton.click(); 
    }

    async clickToCancelButton() {
        await this.cancelButton.click(); 
    }

    


}