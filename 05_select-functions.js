"use strict";
// Functions of different selections from the volonteers array
/*
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalUserDonation = void 0;
var _04_users_types_list_1 = require("./04_users-types-list");
function getUsersByGender(array, sex) {
    return array.filter(function (it) {
        return it.sex === sex;
    });
    //   return array.filter((it) => it.sex === "male"); // скорочений запис
    // console.log(`iterration ${index + 1}`, it.firstName);
    //   console.log(`one name`, array[1].secondName);
}
var maleArray = getUsersByGender(_04_users_types_list_1.volonteers, "male");
console.log("Volunteers men: ", maleArray);
// Create function getAllFemaleVetExperiencedUsers()
function getAllFemaleVetExperiencedUsers(array) {
    return array.filter(function (it) {
        return it.sex === "female" && it.isHasAnimalRescueExperience;
    });
    //   const femaleArray = getUsersByGender(usersArray, "female");
    //   return femaleArray.filter((it) => {
    //     return it.isHasAnimalRescueExperience;
    //   });
}
var allFemaleVetExperiencedUsers = getAllFemaleVetExperiencedUsers(_04_users_types_list_1.volonteers);
console.log("===>", allFemaleVetExperiencedUsers);
//Create function getTotalUserDonation()
// function getTotalUserDonation(array: Volonteers, id: string) {
//   const selectedUser = array.find((it) => {
//     return it.id === id;
//   });
//   const donations: DonationEntity[] = selectedUser?.donation;
//   const totalDonationSum = donations.reduce((acc, it) => acc + it.amount, 0);
//   return totalDonationSum;
// }
function getTotalUserDonation(array, id) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var user = array_1[_i];
        if (user.id === id) {
            var totalDonationSum = user.donation.reduce(function (acc, donation) { return acc + donation.amount; }, 0);
            return totalDonationSum;
        }
    }
    return 0; // Return 0 if user with specified id is not found
}
exports.getTotalUserDonation = getTotalUserDonation;
console.log("TOTAL: ", getTotalUserDonation(_04_users_types_list_1.volonteers, "diu498375395yui4uaewhuigkyawi"));
console.log("TOTAL: ", getTotalUserDonation(_04_users_types_list_1.volonteers, "diu498375395yui4uaewhuigkyawi"));
