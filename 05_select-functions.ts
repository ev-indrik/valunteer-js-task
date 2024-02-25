// Functions of different selections from the volonteers array
/*

9. Create function orderUsersByAge()*/

// 01. Create function getUsersByGender()

import { Sex, Volonteers } from "./03_types";
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

// console.log("Volunteers men: ", maleArray);

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
// console.log("===>", allFemaleVetExperiencedUsers);

//Create function getTotalUserDonation()

// function getTotalUserDonation(array: Volonteers, id: string) {
//   const selectedUser = array.find((it) => {
//     return it.id === id;
//   });
//   const donations: DonationEntity[] = selectedUser?.donation;
//   const totalDonationSum = donations.reduce((acc, it) => acc + it.amount, 0);
//   return totalDonationSum;
// }

export function getTotalUserDonation(array: Volonteers, id: string): number {
  for (const user of array) {
    if (user.id === id) {
      const totalDonationSum = user.donation.reduce(
        (acc, donation) => acc + donation.amount,
        0
      );
      return totalDonationSum;
    }
  }
  return null; // Return 0 if user with specified id is not found
}

// console.log("TOTAL: ", getTotalUserDonation(volonteers, "vln01"));

// Create function selectUser()

function selectUser(arr: Volonteers, id: string): Volonteers {
  const mapArr = arr.map((it) => {
    if (it.id === id) {
      it.isSelected = true;
      return it;
    }
    return it;
  });
  return mapArr;
}

const modifiedArr = selectUser(volonteers, "vln03");
// console.log("NEW ARR: ", modifiedArr);

// Create function getTheYoungestUser()

function getTheYoungestUser(arr: Volonteers) {
  return arr.reduce((youngestUser, currentUser) => {
    // if (currentUser.age < youngestUser.age) {
    //   return currentUser;
    // } else {
    //   return youngestUser;
    // }
    return currentUser.age < youngestUser.age ? currentUser : youngestUser;
  }, arr[0]);
}

const theYoungestVol = getTheYoungestUser(volonteers);
// console.log("Little one: ", theYoungestVol);

// Create function getTotalDonationsAmount()
