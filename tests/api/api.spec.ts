import { test, expect } from "@playwright/test";
import { createNewUser } from "../../helpers/UserModelAPI";
import { request } from "http";

test("Create new User API", async ({ request }) => {
  const user = createNewUser();
  const response = await request.post(
    "https://gitlab.testautomate.me/api/v4/users",
    {
      data: {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        skip_confirmation: true,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer FKzy_BpV5wAybKf7Z9JX",
      },
    }
  );
  expect(response.status()).toBe(201);
  expect((await response.json()).username).toBe(user.username);
});
