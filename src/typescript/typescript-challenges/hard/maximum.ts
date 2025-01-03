import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type NumberLength<
  Indicator extends number,
  Length extends 0[] = []
> =
  Length["length"] extends Indicator
  ? Length
  : NumberLength<Indicator, [...Length, 0]>;

type Bigger<
  T extends 0[][],
  Backup extends 0[] = [],
  Big extends 0[] = []
> =
  T extends [
    infer first extends 0[],
    ...infer rest extends 0[][]
  ]
  ? Backup["length"] extends 0
  ? Bigger<rest, first, []>
  : first["length"] extends Backup["length"]
  ? Bigger<rest, first, first>
  : Bigger<rest, first, Backup>
  : Big["length"] extends 0
  ? never
  : Big["length"];

type myMaximum<
  T extends any[],
  Content extends 0[][] = []
> =
  T extends [
    infer first extends number,
    ...infer rest
  ]
  ? myMaximum<rest, [...Content, NumberLength<first>]>
  : Bigger<Content>;

// @m7yue
type NumberToArr<
  N extends number,
  TArr extends unknown[] = []
>
  = TArr["length"] extends N
  ? TArr
  : NumberToArr<N, [...TArr, unknown]>;

type Compare<
  A extends number,
  B extends number,
  F extends -1 | 1 = 1
> =
  NumberToArr<A> extends [...NumberToArr<B>, ...infer _]
  ? F extends 1 ? A : B
  : F extends 1 ? B : A

type GetMax<A extends number, B extends number> = Compare<A, B, 1>;

type Maximum<T extends number[]>
  = T["length"] extends 0
  ? never
  : T["length"] extends 1
  ? T[0]
  : T extends [infer A extends number, infer B extends number, ...infer Rest extends number[]]
  ? Maximum<[GetMax<A, B>, ...Rest]>
  : never

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1, 3]>, 3>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
];
