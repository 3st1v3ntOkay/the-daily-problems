import type { Equal, Expect } from '@type-challenges/utils'

type Filter<
  T extends any[],
  P,
  ArrayRes extends unknown[] = []
> =
  T extends [infer first, ...infer rest]
  ? first extends P
  ? Filter<rest, P, [...ArrayRes, first]>
  : Filter<rest, P, ArrayRes> // thanks @linjunc here
  : ArrayRes;

type Falsy = false | 0 | '' | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
];
