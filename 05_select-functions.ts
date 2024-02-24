// Functions of different selections from the volonteers array
/*2. Create function getAllMailUsers()
3. Create function getAllFemaleVetExperiencedUsers()
4. Create function getTotalUserDonation()
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()*/

import { Sex, VolonteersDb } from "./03_types";
import { usersArray } from "./04_users-types-list";

function getUsersByGender(array: VolonteersDb, sex: Sex) {
  return array.filter((it) => {
    return it.sex === "male";
  });
  //   return array.filter((it) => it.sex === "male"); // скорочений запис

  // console.log(`iterration ${index + 1}`, it.firstName);
  //   console.log(`one name`, array[1].secondName);
}
const maleArray = getUsersByGender(usersArray, "male");

console.log("Volunteers men: ", maleArray);
