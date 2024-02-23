/*

TODO:
1. Create array of users with unique IDs  (use V4 unique Id generator), 
create at least 20 items.
2. Create function getAllMailUsers()
3. Create function getAllFemaleVetExperiencedUsers()
4. Create function getTotalUserDonation()
5. Create function selectUser()
6. Create function getTheYoungestUser()
7. Create function getTheOldestUser()
8. Create function getTotalDonationsAmount()
9. Create function orderUsersByAge()

*/

// Example array:

const usersArray = [
  {
    id: "123123123",
    avatar: "https://images.app.goo.gl/bMKufVqPCbb5AMA28",
    firstName: "Alex",
    secondName: "Lebrun",
    phone: "+234234234",
    address: "asdfasf asdfsdf",
    country: "Ukraine",
    sex: "male",
    age: 23,
    donation: [
      {
        date: "2024-01-10",
        amount: 100,
      },
      {
        date: "2024-02-12",
        amount: 120,
      },
      {
        date: "2024-01-12",
        amount: 1200,
      },
    ],
    isHasDriverLicence: true,
    isHasMedicalExperience: true,
    isHasAnimalRescueExperience: true,
    isHasVetExperience: false,
    isHasPsychologicalExperience: false,
    isAvailable: false,
    isSelected: false,
  },
];
