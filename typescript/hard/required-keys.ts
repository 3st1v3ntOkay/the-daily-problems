import type { Equal, Expect } from "@type-challenges/utils";

type Original<
  T extends object,
  K extends keyof T
> = {
    [P in K]: T[K]
  }

type OriginalRequired<
  T extends object,
  K extends keyof T
> = {
    [P in K]-?: T[K]
  }

type myRequiredKeys<
  T extends object
> =
  T extends 0
  ? {
    [key in keyof T as Original<T, key> extends OriginalRequired<T, key> ? never
    : key]: T[key]
  }
  : never;

// @abdurahmanus
type GetRequired<T extends object> = {
  [K in keyof T as { [key in K]?: any } extends { [key in K]: T[key] } ? never : K]: T[K]
}

type RequiredKeys<T extends object> = keyof GetRequired<T>;

type cases = [
  Expect<Equal<RequiredKeys<{ a: number, b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
];
