type myGreaterThan<
  major extends number,
  minor extends number
> =
  major extends minor
  ? true
  : minor extends major
  ? false
  : true;

// @linjunc
// type newArr<
//   T extends number,
//   A extends any[] = []
// > =
//   A['length'] extends T
//   ? A
//   : newArr<T, [...A, '']>

// type GreaterArr<
//   T extends any[],
//   U extends any[]
// > =
//   U extends [...T, ...any] ? false : true;

// type GreaterThan<
//   T extends number,
//   U extends number
// > =
//   GreaterArr<newArr<T>, newArr<U>>

// @hesoso
type GetSymbol<
  A extends string,
  B extends string,
  F extends any[] = []
> =
  `${F['length']}` extends A
  ? `${F['length']}` extends B ? '=' : '<'
  : `${F['length']}` extends B ? '>' : GetSymbol<A, B, [...F, 1]>;

type GreaterThan<
  T extends number | string,
  U extends number | string,
  S extends '>' | '<' | '=' = '='
> =
  `${T}` extends `${infer A}${infer R1}`
  ? `${U}` extends `${infer B}${infer R2}`
  ? GreaterThan<R1, R2, S extends '=' ? GetSymbol<A, B> : S> : true
  : `${U}` extends `${any}${any}` ? false : S extends '>' ? true : false;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]