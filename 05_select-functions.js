"use strict";
// Functions of different selections from the volonteers array
/*
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()*/
Object.defineProperty(exports, "__esModule", { value: true });
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
function getTotalUserDonation(array, id) {
    var selectedUser = array.find(function (it) {
        return it.id === id;
    });
    var donations = selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.donation;
    var totalDonationSum = donations.reduce(function (acc, it) { return acc + it.amount; }, 0);
    return totalDonationSum;
}
console.log("TOTAL: ", getTotalUserDonation(_04_users_types_list_1.volonteers, "diu498375395yui4uaewhuigkyawi"));
