import { v4 as idgeneratorv4 } from "uuid";
// idgeneratorv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export class UserEntity {
  id: string;
  avatar: string;
  firstName: string;
  secondName: string;
  phone: string;
  address: string;
  country: string;
  sex: string;
  age: number;
  donation: { date: Date; amount: number }[];
  isHasDriverLicence: Boolean;
  isHasMedicalExperience: Boolean;
  isHasAnimalRescueExperience: Boolean;
  isHasVetExperience: Boolean;
  isHasPsychologicalExperience: Boolean;
  isAvailable: Boolean;
  isSelected: Boolean;

  constructor(
    avatar: string,
    firstName: string,
    secondName: string,
    phone: string,
    address: string,
    country: string,
    sex: string,
    age: number,
    donation: { date: Date; amount: number }[],
    isHasDriverLicence: boolean,
    isHasMedicalExperience: boolean,
    isHasAnimalRescueExperience: boolean,
    isHasVetExperience: boolean,
    isHasPsychologicalExperience: boolean,
    isAvailable: boolean,
    isSelected: boolean
  ) {
    this.id = this.generateUniqeID();
    this.avatar = avatar;
    this.firstName = firstName;
    this.secondName = secondName;
    this.phone = phone;
    this.address = address;
    this.country = country;
    this.sex = sex;
    this.age = age;
    this.donation = donation;
    this.isHasDriverLicence = isHasDriverLicence;
    this.isHasMedicalExperience = isHasMedicalExperience;
    this.isHasAnimalRescueExperience = isHasAnimalRescueExperience;
    this.isHasVetExperience = isHasVetExperience;
    this.isHasPsychologicalExperience = isHasPsychologicalExperience;
    this.isAvailable = isAvailable;
    this.isSelected = isSelected;
  }

  generateUniqeID() {
    return idgeneratorv4();
  }
}
