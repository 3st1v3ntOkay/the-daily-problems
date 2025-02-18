type myWithout<
  T extends number[],
  U extends number[] | number
> =
  T extends [infer first, ...infer rest]
  ? U extends number
  ? first extends U
  ? Without<rest, U>
  : [first, ...Without<rest, U>]
  : U extends [infer firstU, ...infer restU]
  ? first extends firstU
  ? Without<restU, U>
  : [firstU, ...Without<restU, U>]
  : T
  : T

// @linjunc
type Union<T> = T extends number[] ? T[number] : T;

type Without<T, U> =
  T extends [infer first, ...infer rest]
  ? first extends Union<U>
  ? Without<rest, U>
  : [first, ...Without<rest, U>]
  : T

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]