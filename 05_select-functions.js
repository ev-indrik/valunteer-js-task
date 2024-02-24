"use strict";
// Functions of different selections from the volonteers array
/*2. Create function getAllMailUsers()
3. Create function getAllFemaleVetExperiencedUsers()
4. Create function getTotalUserDonation()
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()*/
Object.defineProperty(exports, "__esModule", { value: true });
var _04_users_types_list_1 = require("./04_users-types-list");
function getUsersByGender(array, sex) {
    return array.filter(function (it, index) {
        return it.sex === "male";
        // console.log(`iterration ${index + 1}`, it.firstName);
    });
    //   console.log(`one name`, array[1].secondName);
}
var maleArray = getUsersByGender(_04_users_types_list_1.usersArray, "male");
console.log("Volunteers men: ", maleArray);
