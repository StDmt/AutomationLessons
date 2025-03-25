import { expect, type Locator, type Page } from "playwright/test";
export class WelcomePage {
  readonly page: Page;
  readonly role_dropdown: Locator;
  readonly gitLab_because_dropdown: Locator;
  readonly getStarted: Locator;
  constructor(page: Page) {
    this.page = page;
    this.role_dropdown = page.locator('[data-qa-selector="role_dropdown"]');
    this.gitLab_because_dropdown = page.locator(
      '[id="user_registration_objective"]'
    );
    this.getStarted = page.locator('[data-qa-selector="get_started_button"]');
  }
  async gotoUrl() {
    await this.page.goto(
      "https://gitlab.testautomate.me/users/sign_up/welcome"
    );
  }
  async selectRole(role: string, reason: string) {
    await this.role_dropdown.selectOption(role);
    await this.gitLab_because_dropdown.selectOption(reason);
    await expect(this.role_dropdown).toHaveValue(role);
    await expect(this.gitLab_because_dropdown).toHaveValue(reason);
    await this.getStarted.click();
  }
}
