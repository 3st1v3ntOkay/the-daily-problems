import type { Equal, Expect } from "@type-challenges/utils";

type CheckRepeatedTuple<T extends unknown[]> =
  T extends [infer first, ...infer rest]
  ? first extends rest[number]
    ? true
    : CheckRepeatedTuple<rest>
  : false;

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
];
