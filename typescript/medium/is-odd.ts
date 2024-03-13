import type { Equal, Expect } from '@type-challenges/utils';

type OddNumbers = 1 | 3 | 5 | 7 | 9;

type myIsOdd<
  T extends number,
  ArrNums extends string[] = []
> =
  T extends `${infer first}${infer rest}`
  ? ArrNums[number] extends OddNumbers
  ? true
  : myIsOdd<rest, [...ArrNums, first]>
  : never;

// @omittee
type IsOdd<T extends number> =
  `${T}` extends `${number | ''}${OddNumbers}`
  ? true
  : false;

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
];
