import type { Equal, Expect } from "@type-challenges/utils";

type myGetRequired<T extends object> = {
  [key in keyof T as T extends `?` ? key : never]: T[key]
}

// @yizhiyuyou + mini modifications not super necessary
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

type GetRequired<T extends object> = {
  [K in keyof T as Original<T, K> extends OriginalRequired<T, K>
  ? K
  : never]: T[K]
}

type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
];
