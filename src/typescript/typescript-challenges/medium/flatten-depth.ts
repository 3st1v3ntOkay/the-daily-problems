type myFlattenDepth<
  T extends any[],
  Times extends number = 1
> =
  T extends [infer first, ...infer rest]
  ? Times extends 0
  ? T
  : first extends any[]
  ? [...first, ...myFlattenDepth<rest /** how decrease the number of 1????? */>]
  : [first, ...myFlattenDepth<rest /** how decrease the number of 1????? */>]
  : T;

// @Gu-Miao
type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> =
  U['length'] extends S
  ? T
  : T extends [infer first, ...infer rest]
  ? first extends any[]
  ? [...FlattenDepth<first, S, [...U, 1]>, ...FlattenDepth<rest, S, U>]
  : [first, ...FlattenDepth<rest, S, U>]
  : T

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]