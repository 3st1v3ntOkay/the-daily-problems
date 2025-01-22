export type Address = {
  address: string;
  city: string
}

// @UeberTimei solution
export type PresentDeliveryList<T extends object> = {
  [key in keyof T]: Address;
}

// alternative solution
export type PresentDeliveryListAlt<T extends object> =
  Record<keyof T, Address>;
