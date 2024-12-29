import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

// my try
type T1<
  Num extends string | number | bigint,
  ArrayNumber extends 0[] = [],
> =
  `${ArrayNumber["length"]}` extends `${Num}`
  ? ArrayNumber
  : T1<Num, [...ArrayNumber, 0]>;

type mySum<
  A extends string | number | bigint,
  B extends string | number | bigint,
  AP extends 0[] = T1<A>,
  BP extends 0[] = T1<B>,
> =
  `${[...AP, ...BP]["length"]}`;

// @uid11
type NumberLike = string | number | bigint;

/**
 * ToString<3> = "3".
 */
type ToString<N extends NumberLike> = `${N}`;

/**
 * Split<"foo"> = ["f", "o", "o"].
 */
type Split<S extends string> =
  S extends `${infer Letter}${infer Rest}`
  ? [Letter, ...Split<Rest>]
  : [];

/**
 * SumMod10[2][3] = 5.
 * SumMod10[7][4] = 1.
 */
type SumMod10 = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
];

/**
 * TenOfSumOfTwoDigits[2][3] = 0.
 * TenOfSumOfTwoDigits[4][8] = 1.
 */
type TenOfSumOfTwoDigits = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

type Digit = ToString<SumMod10[0][number]>;

type Tuple = readonly Digit[];

/**
 * Last<["2", "3"]> = "3".
 */
type Last<T extends Tuple> =
  T extends []
  ? 0
  : T extends [...infer Head, infer Element]
  ? Element extends Digit
  ? Element
  : "0"
  : "0";

/**
 * Pop<["2", "3", "4"]> = ["2", "3"].
 */
type Pop<T extends Tuple> =
  T extends [...infer Head, infer Last]
  ? Head
  : [];

/**
 * Join<["1", "2"]> = "12".
 */
type Join<T extends Tuple> =
  T extends [] ? "" : `${Join<Pop<T>>}${Last<T>}`;

/**
 * TenOfSum<T, A, B> = (T + A + B) > 9 ? 1 : 0.
 */
type TenOfSum<
  Ten extends 0 | 1,
  A extends Digit,
  B extends Digit
> = TenOfSumOfTwoDigits[A][B] extends 1
  ? 1
  : [SumMod10[A][B], Ten] extends [9, 1]
  ? 1
  : 0;

/**
 * TuplesAreEmpty<[], []> = true.
 * TuplesAreEmpty<[], ["1"]> = false.
 */
type TuplesAreEmpty<
  A extends Tuple,
  B extends Tuple
> =
  A extends []
  ? B extends []
  ? true
  : false
  : false;

/**
 * SumOfTuple<["2", "3"], ["9"]> = ["3", "2"].
 */
type SumOfTuple<
  A extends Tuple,
  B extends Tuple,
  Ten extends 0 | 1 = 0,
  Result extends Tuple = [],
> =
  TuplesAreEmpty<A, B> extends true
  ? Ten extends 1
  ? ["1", ...Result]
  : Result
  : SumOfTuple<
    Pop<A>,
    Pop<B>,
    TenOfSum<Ten, Last<A>, Last<B>>,
    [ToString<SumMod10[Ten][SumMod10[Last<A>][Last<B>]]>, ...Result]
  >;

/**
 * Sum<112, 82> = "194".
 */
type Sum<A extends NumberLike, B extends NumberLike> = Join<
  SumOfTuple<Split<ToString<A>>, Split<ToString<B>>>
>;

type cases = [
  Expect<Equal<Sum<2, 3>, "5">>,
  Expect<Equal<Sum<"13", "21">, "34">>,
  Expect<Equal<Sum<"328", 7>, "335">>,
  Expect<Equal<Sum<1_000_000_000_000n, "123">, "1000000000123">>,
  Expect<Equal<Sum<9999, 1>, "10000">>,
  Expect<Equal<Sum<4325234, "39532">, "4364766">>,
  Expect<Equal<Sum<728, 0>, "728">>,
  Expect<Equal<Sum<"0", 213>, "213">>,
  Expect<Equal<Sum<0, "0">, "0">>,
];
