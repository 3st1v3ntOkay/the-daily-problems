import type { Equal, Expect } from "@type-challenges/utils";

type IsRequiredKey<
  T,
  K extends keyof T
> = {
  [key in keyof T as key extends K ? key : never]: T[key]
} extends {
    [key in keyof T as key extends K ? key : never]-?: T[key]
  }
  ? true
  : false

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b' | 'a'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: undefined }, 'b' | 'a'>, true>>,
];
