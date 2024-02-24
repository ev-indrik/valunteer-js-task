// Functions of different selections from the volonteers array
/*
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()*/

// 01. Create function getUsersByGender()

import { DonationEntity, Sex, Volonteers } from "./03_types";
import { volonteers } from "./04_users-types-list";

function getUsersByGender(array: Volonteers, sex: Sex) {
  return array.filter((it) => {
    return it.sex === sex;
  });
  //   return array.filter((it) => it.sex === "male"); // скорочений запис

  // console.log(`iterration ${index + 1}`, it.firstName);
  //   console.log(`one name`, array[1].secondName);
}
const maleArray = getUsersByGender(volonteers, "male");

console.log("Volunteers men: ", maleArray);

// Create function getAllFemaleVetExperiencedUsers()

function getAllFemaleVetExperiencedUsers(array: Volonteers) {
  return array.filter((it) => {
    return it.sex === "female" && it.isHasAnimalRescueExperience;
  });
  //   const femaleArray = getUsersByGender(usersArray, "female");
  //   return femaleArray.filter((it) => {
  //     return it.isHasAnimalRescueExperience;
  //   });
}

const allFemaleVetExperiencedUsers =
  getAllFemaleVetExperiencedUsers(volonteers);
console.log("===>", allFemaleVetExperiencedUsers);

//Create function getTotalUserDonation()

function getTotalUserDonation(array: Volonteers, id: string) {
  const selectedUser = array.find((it) => {
    return it.id === id;
  });
  const donations: DonationEntity[] = selectedUser?.donation;
  const totalDonationSum = donations.reduce((acc, it) => acc + it.amount, 0);
  return totalDonationSum;
}

console.log(
  "TOTAL: ",
  getTotalUserDonation(volonteers, "diu498375395yui4uaewhuigkyawi")
);
