import { v4 as idgeneratorv4 } from "uuid";

type DonationEntity = {
  date: Date;
  amount: number;
};

export type VolonteerEntity = {
  id: string;
  avatar: string;
  firstName: string;
  secondName: string;
  phone: string;
  address: string;
  country: string;
  sex: string;
  age: number;
  donation: DonationEntity[];
  isHasDriverLicence: Boolean;
  isHasMedicalExperience: Boolean;
  isHasAnimalRescueExperience: Boolean;
  isHasVetExperience: Boolean;
  isHasPsychologicalExperience: Boolean;
  isAvailable: Boolean;
  isSelected: Boolean;
};

type VolonteersDb = VolonteerEntity[];
