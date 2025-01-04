type myJoin<
  T extends string[],
  U extends string | number,
  Array extends number[] = [],
  Res extends string[] = [],
> =
  T["length"] extends Array["length"]
  ? Res
  : myJoin<T, U, [...Array, 0], [...Res, `${T[Array["length"]]}`, `${U}`]>;

// @linjunc
type Join<
  T extends string[],
  U extends string | number,
> =
  T extends [infer L extends string, ...infer R extends string[]]
  ? R['length'] extends 0
  ? L
  : `${L}${U}${Join<R, U>}`
  : '';

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
  Expect<Equal<Join<[], 'u'>, ''>>,
];
