import type { Equal, Expect } from '@type-challenges/utils'

type myFindAll<
  T extends string,
  P extends string,
  Result extends number[] = []
> =
  T extends `${infer first}${P}${infer rest}`
  ? myFindAll<
    rest,
    P,
    [...Result, [`${first}${P}`]['length']]
  >
  : Result;

// @drylint
type FindAll<
  T extends string,
  P extends string,
  Before extends number[] = [],
  Result extends number[] = [],
> =
  P extends ''
  ? []
  : T extends `${infer _First}${infer Rest}`
  ? T extends `${P}${infer _Rest}`
  ? FindAll<Rest, P, [...Before, 0], [...Result, Before['length']]>
  : FindAll<Rest, P, [...Before, 0], Result>
  : Result;

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
];
