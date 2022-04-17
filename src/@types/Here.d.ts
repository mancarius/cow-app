export namespace Here {
  interface Address {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    countyCode: string;
    county: string;
    city: string;
    district: string;
    street: string;
    postalCode: string;
    houseNumber: string | number;
  }

  interface Item {
    title: string;
    id: string;
    language: string;
    resultType:
      | "houseNumber"
      | "locality"
      | "street"
      | "administrativeArea"
      | "intersection"
      | "postalCodePoint";
    houseNumberType?: "PA" | "interpolated";
    address: Address;
    highlights: Record<
      keyof Item,
      (
        | { start: number; end: number }
        | Record<keyof Address, { start: number; end: number }>[]
      )[]
    >;
  }

  interface AutocompleteResponse {
    items: Item[];
  }
}
