import { test, expect } from "@playwright/test";
import { SignUpPage } from "../page_objects/sing_up_page";
import { WelcomePage } from "../page_objects/welcome_page";
import { NewUser } from "../helpers/UserModel";
import * as fs from "fs";

test("SignUp", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const welcomePage = new WelcomePage(page);
  const newUser = new NewUser();
  await signUpPage.gotoUrl();
  await signUpPage.signUp(
    newUser.first_name,
    newUser.last_name,
    newUser.new_email,
    newUser.new_password,
    newUser.new_username
  );
  await welcomePage.gotoUrl();
 await welcomePage.selectRole(newUser.role, newUser.reason);
  await expect(page).toHaveURL(
  "https://gitlab.testautomate.me/dashboard/projects"
 );
  const newUserData = {username: newUser.new_username,
    password: newUser.new_password
  };
  fs.writeFileSync('./user_data/user.json', JSON.stringify(newUserData, null, 2));
  console.log("User data saved to ./user_data/user.json")
});
