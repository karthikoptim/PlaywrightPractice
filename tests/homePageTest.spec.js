const { test, expect } = require('@playwright/test');

test('home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = page.title() //title of the web page
    console.log('page title is ', pageTitle);
    const pageurl = page.url()
    console.log(pageurl)
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.close()
})