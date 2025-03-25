import { test, expect } from "@playwright/test";
import { LoginPage } from "../page_objects/login_page";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login("dstiahar@gmail.com", "zxc123");
  await expect(page.locator("text=Invalid login or password")).toBeVisible();
});
