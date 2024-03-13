import type { Equal, Expect, ExpectFalse } from "@type-challenges/utils";

type myPermutationsOfTuple<
  T extends unknown[],
  Res extends unknown[] = []
> =
  T extends [infer first, ...infer rest]
  ? myPermutationsOfTuple<rest, ['?'] | [first, ...rest]>
  : Res;

// @jiangshanmeta
type Insert<
  T extends unknown[],
  U
> =
  T extends [infer F, ...infer L]
  ? [F, U, ...L] | [F, ...Insert<L, U>]
  : [U];

type PermutationsOfTuple<
  T extends unknown[],
  R extends unknown[] = []
> =
  T extends [infer F, ...infer L]
  ? PermutationsOfTuple<L, Insert<R, F> | [F, ...R]>
  : R;

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[1, number, unknown]>, [unknown]>>,
];
