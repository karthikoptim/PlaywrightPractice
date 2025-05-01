const { test, expect } = require('@playwright/test')

test('input boxes', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html')

    await expect(await page.locator('#firstName')).toBeVisible()
    await expect(await page.locator('#lastName')).toBeEnabled()
    await page.locator('#firstName').fill('hdjsdvhsdhjb')
    await page.fill('#firstName', 'cards')

})



