import type { Equal, Expect } from "@type-challenges/utils";

type myMergeAll<XS extends any[]> =
  XS extends [infer first, ...infer rest]
  ? first extends Record<string, any>
  ? {
    [key in keyof first]: first[key]
  } & myMergeAll<rest>
  : never
  : {};

// @omittee
type MergeAll<
  XS extends object[],
  Res extends object = {}
> =
  XS extends [infer L, ...infer R extends object[]]
  ? MergeAll<R, Omit<Res, keyof L> & {
    [p in keyof L]: p extends keyof Res ? L[p] | Res[p] : L[p]
  }>
  : Omit<Res, never>;

type cases = [
  Expect<Equal<MergeAll<[]>, {}>>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<
    MergeAll<[{ a: string }, { a: string }]>,
    { a: string }
  >
  >,
  Expect<Equal<
    MergeAll<[{}, { a: string }]>,
    { a: string }
  >
  >,
  Expect<Equal<
    MergeAll<[{ a: 1 }, { c: 2 }]>,
    { a: 1, c: 2 }
  >
  >,
  Expect<Equal<
    MergeAll<[{ a: 1, b: 2 }, { a: 2 }, { c: 3 }]>,
    { a: 1 | 2, b: 2, c: 3 }
  >
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
];
