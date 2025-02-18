type myUnique<
  T extends any[],
  Result extends any[] = [],
> =
  T extends [infer one, infer two, ...infer rest]
  ? one extends two
  ? Unique<rest, [...Result, one]>
  : Unique<rest, [...Result, one, two]>
  : Result;

// @linjunc
type IsEqual<T, U> =
  U extends T
  ? T extends U
  ? true
  : false
  : false;

type Includes<T, U> = U extends [infer F, ...infer Rest]
  ? Equal<F, T> extends true
  ? true
  : Includes<T, Rest>
  : false;

type Unique<T, U extends any[] = []> =
  T extends [infer R, ...infer F]
  ? Includes<R, U> extends true
  ? Unique<F, [...U]>
  : Unique<F, [...U, R]>
  : U;

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
];
