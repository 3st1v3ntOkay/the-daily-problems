import type { Equal, Expect } from "@type-challenges/utils";

type For<
  T extends number,
  NewArray extends number[],
  U,
  ResArray extends boolean[] = []
> =
  NewArray extends [
    infer first extends number,
    ...infer rest extends number[]
  ]
  ? `T + first` extends U
  ? For<T, rest, U, [...ResArray, true]>
  : For<T, rest, U, [...ResArray]>
  : ResArray;


type myTwoSum<
  T extends number[],
  U extends number,
  ResArray extends boolean[] = []
> =
  T extends [
    infer first extends number,
    ...infer rest extends number[]
  ]
  ? For<first, rest, U>['length'] extends true
  ? myTwoSum<rest, U, [...ResArray, true]>
  : myTwoSum<rest, U, [...ResArray]>
  : ResArray['length'] extends true
  ? true
  : false;

// @
type NumberToUnionArr<
  T extends number,
  R extends unknown[] = []
> =
  T extends T
  ? R['length'] extends T
  ? R
  : NumberToUnionArr<T, [...R, 0]>
  : never;

type SumUnion<
  T extends number[],
  R = never,
> =
  T['length'] extends 0 | 1
  ? R
  : T extends [
    infer A extends number,
    ...infer Rest extends number[]
  ]
  ? SumUnion<Rest, R | [
    ...NumberToUnionArr<A>,
    ...NumberToUnionArr<Rest[number]>
  ]['length']>
  : never;

type TwoSum<
  T extends number[],
  U extends number,
> =
  U extends SumUnion<T> ? true : false;

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>,
];
