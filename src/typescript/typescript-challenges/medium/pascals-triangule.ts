import type { Equal, Expect } from '@type-challenges/utils'

type myPascal<
  N extends number,
  ArrRes extends [][] = [],
  Backup extends 0[] = [0]
> =
  ArrRes['length'] extends N
  ? myPascal<
    N, [
      ...ArrRes, myPascal<
        N,
        [...ArrRes, Backup['length']],
        [0]
      >
    ],
    [0]
  >
  : ArrRes;

// @E-uler
type Pascal<
  N extends number,
  _Result extends any[][] = [[1]]
> =
  _Result[`length`] extends N | 999
  ? _Result
  : Pascal<N, [..._Result, PileUp<Last<_Result>>]>;

type Last<T extends any[]> =
  T extends [...any, infer L]
  ? L
  : [];

type Counter<
  N extends number,
  _Result extends 1[] = []
> =
  _Result[`length`] extends N | 999
  ? _Result
  : Counter<N, [1, ..._Result]>;

type Add<
  A extends number,
  B extends number
> =
  [...Counter<A>, ...Counter<B>][`length`];

type PileUp<
  T extends number[],
  _Result extends any[] = [T[0]]
> =
  T extends [
    infer F extends number,
    infer S extends number,
    ...infer R extends number[]
  ]
  ? PileUp<[S, ...R], [..._Result, Add<F, S>]>
  : [..._Result, T[0]];

type cases = [
  Expect<
    Equal<
      Pascal<1>,
      [
        [1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<3>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<5>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<7>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >,
];
