// so close for the answer
type myZip<
  T extends any[],
  U extends any[],
  res extends any[] = []
> =
  T extends []
  ? []
  : U extends []
  ? []
  : T extends [infer firstT, ...infer restT]
  ? U extends [infer firstU, ...infer restU]
  ? myZip<[...restT], [...restU], [...res, [firstT, firstU]]>
  : res
  : res;

// @DevilTea
type Zip<
  A extends any[],
  B extends any[],
  L extends any[] = []
> =
  L['length'] extends A['length'] | B['length']
  ? L
  : Zip<A, B, [...L, [A[L['length']], B[L['length']]]]>;

// @ch3cknull
type OtherZip<
  T extends any[],
  U extends any[]
> =
  [T, U] extends [
    [infer L, ...infer RestT],
    [infer R, ...infer RestU]
  ]
  ? [[L, R], ...Zip<RestT, RestU>]
  : [];

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]