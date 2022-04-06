import { UserInfo } from "firebase/auth";


export namespace Host {
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
    spots: 10;
    rateType: RateType;
    price: number;
    currency: string;
    services: string[];
    images: string[];
    host: string;
    id: string;
  }

  enum RateType {
    hourly = "hourly",
    daily = "daily",
    montly = "montly",
  }

  interface Filters {
    address: string;
    date?: {
      start: number;
      end: number;
    };
    timeSlot?: {
      start: string;
      end: string;
    };
    tags: Host.Info["tags"];
  }

  interface SearchResult extends Omit<Host.Info, "spaces"> {}
}
