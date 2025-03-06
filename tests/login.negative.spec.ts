import { test, expect, Locator } from  '@playwright/test'

test("Login Page", async ({ page }) => {
    await page.goto("https://gitlab.testautomate.me/users/sign_in")
    const emailId:Locator = await page.locator ('#user_login');
    const passwordId:Locator = await page.locator ('#user_password');
    const signInButton:Locator = await page.locator ("text=Sign in");

    await emailId.fill("dstiahar@gmail.com")
    await passwordId.fill("zxcv123a");
    await signInButton.click();
    await expect(page.locator("text=Invalid login or password")).toBeVisible();
})
