import type { Equal, Expect } from "@type-challenges/utils";

type myPublicType<T extends object> = {
  [key in keyof T]: key extends `${infer symb}${infer rest}`
  ? symb extends `_`
  ? never
  : T[key]
  : never;
}

// @E-uler
type PublicType<T extends object> = {
  [P in keyof T as P extends `_${any}` ? never : P]: T[P]
}

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
];
