import { UserEntity } from "./01_user-entity_form";

const user01 = new UserEntity(
  "https://www.flaticon.com/free-icon/man_4140061",
  "John",
  "Smith",
  "+380004548774",
  "Street, town",
  "Sweden",
  "man",
  32,
  [
    { date: new Date("2023-08-11"), amount: 320 },
    { date: new Date(), amount: 8400 },
  ],
  true,
  true,
  true,
  true,
  false,
  true,
  true
);

console.log(user01);
