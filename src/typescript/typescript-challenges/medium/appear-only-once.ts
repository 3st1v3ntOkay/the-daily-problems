import type { Equal, Expect } from '@type-challenges/utils';

type myFindEles<
  T extends any[],
  Array extends any[] = []
> =
  T extends [infer first, ...infer rest]
  ? first extends [...rest, ...Array][number] // "1" | "2" ...
  ? myFindEles<rest, Array>
  : myFindEles<rest, [...Array, first]>
  : Array;

// @linjunc, I change the inputs he named to be more descriptive, "U" for Once and "O" for Many
type FindEles<
  T extends any[],
  Once extends any[] = [],
  Many extends any[] = [],
> =
  T extends [infer F, ...infer Rest]
  ? F extends [...Rest, ...Many][number]
  ? FindEles<Rest, Once, [...Many, F]>
  : FindEles<Rest, [...Once, F], [...Many, F]>
  : Once;

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
];
