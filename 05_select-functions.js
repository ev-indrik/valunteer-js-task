"use strict";
// Functions of different selections from the volonteers array
/*
4. Create function getTotalUserDonation()
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
var maleArray = getUsersByGender(_04_users_types_list_1.usersArray, "male");
console.log("Volunteers men: ", maleArray);
// Create function getAllFemaleVetExperiencedUsers()
function getAllFemaleVetExperiencedUsers() {
    //   return array.filter((it) => {
    //     return it.sex === "female" && it.isHasAnimalRescueExperience === true;
    //   });
    var femaleArray = getUsersByGender(_04_users_types_list_1.usersArray, "female");
    return femaleArray.filter(function (it) {
        return it.isHasAnimalRescueExperience === true;
    });
}
var allFemaleVetExperiencedUsers = getAllFemaleVetExperiencedUsers();
console.log("===>", allFemaleVetExperiencedUsers);
