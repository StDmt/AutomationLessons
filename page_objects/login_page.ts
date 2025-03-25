import { expect, type Locator, type Page } from "playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[id="user_login"]');
    this.password = page.locator('[id="user_password"]');
    this.signInButton = page.locator('text="Sign in"');
  }
  async gotoUrl() {
    await this.page.goto("https://gitlab.testautomate.me/users/sign_in");
  }
  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
  }
}
