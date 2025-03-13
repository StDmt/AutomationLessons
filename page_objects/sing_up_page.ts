import { expect, type Locator, type Page } from "playwright/test";
export class SignUpPage {
    readonly page: Page;
    readonly first_name:Locator;
    readonly last_name:Locator;
    readonly new_username:Locator;
    readonly new_email:Locator;
    readonly new_password:Locator;
    readonly register_btn:Locator;
    constructor(page: Page) {
        this.page = page;
        this.first_name = page.locator('[id="new_user_first_name"]');
        this.last_name = page.locator('[id="new_user_last_name"]');
        this.new_username = page.locator('[id="new_user_username"]')
        this.new_email = page.locator('[id="new_user_email"]');
        this.new_password = page.locator('[id="new_user_password"]');
        this.register_btn = page.locator('input[value="Register"]');
    }
    async gotoUrl() {
        await this.page.goto('https://gitlab.testautomate.me/users/sign_up');
    }
    async signUp(first_name: string, last_name: string, new_username: string, new_email: string, new_password: string) {
        await this.first_name.fill(first_name);
        await this.last_name.fill(last_name);
        await this.new_username.fill(new_username);
        await this.new_email.fill(new_email);
        await this.new_password.fill(new_password);
        await this.register_btn.click();
    }
}
