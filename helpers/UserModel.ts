import { faker } from "@faker-js/faker";

export class NewUser {
  first_name: string;
  last_name: string;
  new_username: string;
  new_email: string;
  new_password: string;
  role: string;
  reason: string;
  constructor() {
    this.first_name = faker.person.firstName();
    this.last_name = faker.person.lastName();
    this.new_username = faker.internet.username();
    this.new_email = faker.internet.email();
    this.new_password = faker.internet.password();
    this.role = faker.helpers.arrayElement([
      "Software Developer",
      "Development Team Lead",
      "DevOps Engineer",
      "Systems Administrator",
      "Security Analyst",
      "Data Analyst",
      "Product Manager",
      "Product Designer",
      "Other",
    ]);
    this.reason = faker.helpers.arrayElement([
      "I want to store my code",
      "I want to explore GitLab to see if it’s worth switching to",
      "I want to learn the basics of Git",
      "I want to move my repository to GitLab from somewhere else",
      "I want to use GitLab CI with my existing repository",
      "A different reason"
    ]);
  }
}
