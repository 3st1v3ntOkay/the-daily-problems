type Last<T extends any[]> =
  T extends [...infer head, infer tail]
    ? tail
    : never;

// @ashi009: https://github.com/type-challenges/type-challenges/issues/100
type ashi009Last<T extends any[]> =
  [any, ...T][T["length"]];

// that "_" its so interesting - @zheeeng: https://github.com/type-challenges/type-challenges/issues/38
type zheeengLast<T extends any[]> =
  T extends [...infer _, infer L] ? L : never;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type cases2 = [
  Expect<Equal<ashi009Last<[2]>, 2>>,
  Expect<Equal<ashi009Last<[3, 2, 1]>, 1>>,
  Expect<Equal<ashi009Last<[() => 123, { a: string }]>, { a: string }>>,
]

type cases3 = [
  Expect<Equal<zheeengLast<[2]>, 2>>,
  Expect<Equal<zheeengLast<[3, 2, 1]>, 1>>,
  Expect<Equal<zheeengLast<[() => 123, { a: string }]>, { a: string }>>,
]