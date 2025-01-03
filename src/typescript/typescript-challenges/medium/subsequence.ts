type mySubsequence<
  T extends any[],
  Array extends any[] = [[]]
> =
  T extends [infer first, ...infer rest]
  ? mySubsequence<rest, [...Array, [first]]>
  : Array[number];

// @jiangshanmeta
type Subsequence<
  T extends any[],
  Prefix extends any[] = []
> =
  T extends [infer F, ...infer R]
  ? Subsequence<R, Prefix | [...Prefix, F]>
  : Prefix;

// @linjunc
type Subsequence2<T extends any[]> = 
  T extends [infer F, ...infer Rest]
    ? [F, ...Subsequence<Rest>] | Subsequence<Rest>
    : T;

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
];
