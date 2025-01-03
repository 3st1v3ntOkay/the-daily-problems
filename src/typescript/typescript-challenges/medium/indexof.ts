type Types = string | boolean | number;
type myIndexOf<
  T extends number[],
  U extends Types,
  res extends string[] = []
> =
  T extends [infer first, ...infer rest]
  ? first extends U
  ? res['length']
  : IndexOf<rest, U, [...res, '']>
  : -1;

// @linjunc + WangZiChu199910252255
type IsEqual<T, U> = U extends T ? T extends U ? true : false : false;

type IndexOf<
  T,
  U,
  Count extends any[] = []
> =
  T extends [infer L, ...infer R]
  ? IsEqual<L, U> extends true
  ? Count['length'] extends 0
  ? '-1'
  : Count['length']
  : IndexOf<R, U, [...Count, 0]>
  : -1;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]