import { UserInfo } from "firebase/auth";


declare namespace Host {
  interface Info {
    name: string;
    description: string;
    address: Address;
    contact: Contact;
    images: string[];
    tags: string[];
    spaces: Space[];
    openingDays: OpeningDays;
    id: string;
  }
  
  interface OpeningTimes {
    openingTime: string;
    closingTime: string;
  }
  
  interface OpeningDays {
    sunday: OpeningTimes[];
    monday: OpeningTimes[];
    tuesday: OpeningTimes[];
    wednesday: OpeningTimes[];
    thursday: OpeningTimes[];
    friday: OpeningTimes[];
    saturday: OpeningTimes[];
  }

  interface Contact extends UserInfo {}
  
  interface Space {
    type: string;
    description: string;
    spots: {
      total: 10;
      free: 4;
    };
    rateType: RateType;
    price: number;
    currency: string;
    optionals: string[];
    images: string[];
    host?: string;
    id: string;
  }

  enum RateType {
    hourly = "hourly",
    daily = "daily",
    montly = "montly",
  }
}
