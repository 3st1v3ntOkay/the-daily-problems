import type { Equal, Expect } from "@type-challenges/utils";

type FilterOut<
  T extends any[],
  F extends unknown,
  ArrRes extends unknown[] = []
> =
  T extends [infer first, ...infer rest]
    ? [first] extends [F]
      ? FilterOut<rest, F, [...ArrRes]>
      : FilterOut<rest, F, [...ArrRes, first]>
    : ArrRes;

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
];
