import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

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

// same as get-required.ts but reversed
type GetOptional<T extends object> = {
  [key in keyof T as Original<T, key> extends OriginalRequired<T, key> ? never
  : key]: T[key]
}

type cases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
];
