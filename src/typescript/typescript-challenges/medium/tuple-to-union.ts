// thanks @mattpopcock for the tip: https://www.youtube.com/watch?v=8HoOxOd86M4&t=418s
type TupleToUnion<T extends any[]> = T[number];

// @antfu: https://github.com/type-challenges/type-challenges/issues/7
type AntfuTupleToUnion<T> = T extends Array<infer items> ? items : never;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
];

type cases2 = [
  Expect<Equal<AntfuTupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<AntfuTupleToUnion<[123]>, 123>>,
];
