import type { Equal, Expect } from '@type-challenges/utils';

type myFirstUniqueCharIndex<
  T extends string,
  Res extends number | number[] = -1,
> =
  T extends `${infer first}${infer rest}`
  ? first extends `${string}${rest}${string}`
  ? myFirstUniqueCharIndex<rest, [...Res, 0]>
  : 0
  : Res;

// @jiaowoxiaobala
type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = [],
> =
  T extends `${infer F}${infer R}`
  ? F extends U[number]
  ? FirstUniqueCharIndex<R, [...U, F]>
  : R extends `${string}${F}${string}`
  ? FirstUniqueCharIndex<R, [...U, F]>
  : U['length']
  : -1;

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
];
