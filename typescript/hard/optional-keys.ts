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

type GetOptional<T extends object> = {
  [key in keyof T as Original<T, key> extends OriginalRequired<T, key> ? never
  : key]: T[key]
}

type OptionalKeys<T extends object> = keyof GetOptional<T>;

type cases = [
  Expect<Equal<OptionalKeys<{ a: number, b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]
