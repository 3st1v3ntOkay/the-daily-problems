type myLastIndexOf<
  T,
  U,
> =
  T extends [...infer first, infer last]
  ? last extends U
  ? first["length"]
  : LastIndexOf<first, U>
  : -1;

// @WisestCoder
type IsEqual<T, U> =
  U extends T
  ? T extends U
  ? true
  : false
  : false;

type LastIndexOf<
  T extends any[],
  U
> =
  T extends [...infer L, infer R]
  ? IsEqual<R, U> extends true
  ? L['length']
  : LastIndexOf<L, U>
  : -1;

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
];
