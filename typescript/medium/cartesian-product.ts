import type { Equal, Expect } from "@type-challenges/utils";

/*
  the order doesn't effect the result, example:

  this is
  [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']
  equal to
  [1, 'b'] | [1, 'a']  | [2, 'b'] | [2, 'a']
*/

type example = [
  Expect<Equal<
    [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b'],
    [1, 'b'] | [1, 'a'] | [2, 'b'] | [2, 'a']
  >>
];

type myCartesianProduct<
  T extends any,
  U extends any,
> =
  `${T}` extends `${infer mine}|${string}`
  ? never
  : never;

// @jiaowoxiaobala
type Union<T> =
  T extends T
  ? [T]
  : never;

type CartesianProduct<T, U> =
  T extends T
  ? [T, ...Union<U>]
  : never;

type cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
  Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>, [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>>,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
];

