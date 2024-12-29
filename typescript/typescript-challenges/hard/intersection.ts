import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type RecursiveArray<
  Array extends number[],
  Result extends number[] = []
> =
  Array extends [
    infer first extends number,
    ...infer rest extends number[]
  ]
  ? Result[number] extends first
  ? RecursiveArray<rest>
  : RecursiveArray<rest, [...Result, first]>
  : Result;

type myIntersection<
  T extends number[][],
  Checker extends number[] = []
> =
  T extends [
    infer FArray extends number[],
    ...infer RArray extends number[][]
  ]
  ? FArray extends number
  ? myIntersection<RArray, [...Checker, FArray]>
  : myIntersection<RArray, [...Checker, RecursiveArray<FArray>]>
  : Checker["length"] extends 0
  ? never
  : Checker[number];

// @teamchong
type Intersection<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
  ? (Head extends unknown[]
    ? Head[number]
    : Head) & Intersection<Tail>
  : unknown;

type cases = [
  Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>,
];
