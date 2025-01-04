import type { Equal, Expect } from "@type-challenges/utils";

type myTranspose<
  M extends number[][],
  Res extends number[][] = []
> =
  M extends [
    infer a1 extends number[],
    infer a2 extends number[],
    ...infer rest extends number[][]
  ]
  ? a1 extends [infer first1 extends number, ...infer rest1 extends number[]]
  ? myTranspose<rest, [[...Res, first1]]>
  : Res
  : []

// @linjunc
type Temp<
  M extends number[][],
  I extends number
> =
  M extends [
    infer F extends number[],
    ...infer Res extends number[][]
  ]
  ? [F[I], ...Temp<Res, I>]
  : [];

type Transpose<
  M extends number[][],
  Res extends number[][] = [],
> =
  M extends [infer F extends number[], ...any]
  ? F['length'] extends Res['length']
  ? []
  : [Temp<M, Res['length']>, ...Transpose<M, [...Res, any]>]
  : [];

type cases = [
  Expect<Equal<Transpose<[]>, []>>,
  Expect<Equal<Transpose<[[1]]>, [[1]]>>,
  Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
  Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
  Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]>>,
];
