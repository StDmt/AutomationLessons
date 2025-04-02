import {faker} from '@faker-js/faker';

export interface UserModelAPI {
  name: string;
  username: string;
  email: string;
  password: string;
  skip_confirmation: boolean;
}
    
export function createNewUser(): UserModelAPI {
  return {
    name: faker.person.fullName(),
    username: faker.internet.username(),
    email:  faker.internet.email(),
    password: faker.internet.password(),
    skip_confirmation: true
  };
}
