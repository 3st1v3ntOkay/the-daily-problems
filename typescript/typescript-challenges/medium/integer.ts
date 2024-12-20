import type { Equal, Expect } from '@type-challenges/utils';

type myInteger<
  T
> =
  T extends `${number}.${number}`
  ? never
  : T extends number
  ? T
  : never;

// @linjunc
type Integer<
  T extends string | number
> =
  number extends T
  ? never
  : `${T}` extends `${string}.${string}`
  ? never
  : T

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.00>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
];
