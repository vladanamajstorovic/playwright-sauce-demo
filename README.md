
Playwright Sauce Demo

This is a simple project to show how to set up Playwright tests with Sauce Labs and run them on multiple browsers.  
I used TypeScript and organized tests using the Page Object Model to keep things clean and reusable.
Website: https://www.saucedemo.com/

What’s inside
- Playwright test runner with basic setup  
- Tests in the `/tests` folder  
- Page objects in the `/pages` folder  
- Configured in `playwright.config.ts` to run browsers with UI (not headless)   
- Using `data-test` attributes for selectors with `getByTestId()`  
- Takes screenshots if tests fail  
- Supports Chromium, Firefox, and WebKit browsers

How to get started

Here’s how you can set this project up from scratch:
1. Initialize your project:

    ```bash
    npm init --yes
    ```
2. Install dependencies:

    ```bash
    npm install @playwright/test
    npm install prettier
    ```
3. Install the browsers Playwright needs:

    ```bash
    npx playwright install
    ```
4. Create a `.prettierrc` file in the root folder with this content:

    ```json
    {
      "semi": false,
      "singleQuote": true
    }
    ```
5. Create two folders:

    ```
    tests
    pages
    ```
6. Create the Playwright config file `playwright.config.ts` in the root with this setup:

    ```ts
    import { PlaywrightTestConfig } from '@playwright/test'

    const config: PlaywrightTestConfig = {
      timeout: 60000,
      retries: 0,
      use: {
        headless: false,
        viewport: {
          width: 1280,
          height: 720,
        },
        testIdAttribute: 'data-test',
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'only-on-failure',
      },
      projects: [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        },
        {
          name: 'Firefox',
          use: { browserName: 'firefox' },
        },
        {
          name: 'Webkit',
          use: { browserName: 'webkit' },
        },
      ],
    }

    export default config
    ```
    
7. Add these scripts to your `package.json` inside `"scripts" under `main``:

    ```json
    "tests:chrome": "npx playwright test --config=playwright.config.ts --project=Chromium",
    "tests:firefox": "npx playwright test --config=playwright.config.ts --project=Firefox",
    "tests:webkit": "npx playwright test --config=playwright.config.ts --project=Webkit",
    "tests:chrome:report": "npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html",
    "tests:firefox:report": "npx playwright test --config=playwright.config.ts --project=Firefox --reporter=html",
    "tests:webkit:report": "npx playwright test --config=playwright.config.ts --project=Webkit --reporter=html"
    ```
---
Running the tests

Run tests on specific browsers with these commands:

```bash
npm run tests:chrome
npm run tests:firefox
npm run tests:webkit
````

If you want to see a nice HTML report after running tests:

```bash
npm run tests:chrome:report
npm run tests:firefox:report
npm run tests:webkit:report
```

Reports will open in your browser so you can check test results easily.

---


A couple of tips

* If you want the browser to stay open after tests finish (for debugging), add this snippet to your tests:

```ts
test.afterEach(async () => {
  await new Promise(() => {})
})
```

* The config is set up to look for `data-test` attributes instead of the usual `data-testid` when using `page.getByTestId()`.

---


