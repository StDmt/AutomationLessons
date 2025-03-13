import { test, expect } from  '@playwright/test';
import { SignUpPage } from '../page_objects/sing_up_page';
import { WelcomePage } from '../page_objects/welcome_page';

test("SignUp", async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.gotoUrl()
    await signUpPage.signUp('Dmytro', 'Stiahar', 'dstia', 'dstia@gmail.com', 'zxc123');
    await expect(page).toHaveURL('https://gitlab.testautomate.me/users/sign_up/welcome');
})
test ("SelectRole", async ({ page }) => {
    const signUpPage = new WelcomePage(page);
    await signUpPage.gotoUrl()
    await signUpPage.selectRole('software_developer', 'A different reason');
    await expect(page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
}
)