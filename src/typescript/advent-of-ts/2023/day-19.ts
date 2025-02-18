import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type Options = ["🛹", "🚲", "🛴", "🏄"];

type SetItems<
  Input extends number,
  Symbol extends unknown,
  Counter extends 0[] = [],
  Output extends unknown[] = [],
> =
  Counter extends Input
  ? SetItems<
    Input,
    Symbol,
    [...Counter, 0],
    [...Output, Symbol]
  >
  : Output;

type MyRebuild<
  Input extends number[],
  Storage extends unknown[] = [],
  Counter extends number = 0
> =
  Input extends [
    infer First extends number,
    ...infer Rest extends number[]
  ]
  ? Counter extends 3
  ? MyRebuild<
    Rest,
    [...Storage, ...SetItems<First, Options[Counter]>],
    0
  >
  : MyRebuild<
    Rest,
    [...Storage, ...SetItems<First, Options[Counter]>]
  >
  : Storage;

// @satohshi
type Gifts = ["🛹", "🚲", "🛴", "🏄"];
type GiftLooper<T extends number> = [1, 2, 3, 0][T];

type Rebuild<
  T extends Array<number>,
  I extends number = 0,
  Acc extends Array<Gifts[number]> = [],
  Cur extends Array<Gifts[number]> = [],
> =
  T extends [
    infer Q extends number,
    ...infer Rest extends number[],
  ]
  ? Q extends Cur["length"]
  ? Rebuild<Rest, GiftLooper<I>, [...Acc, ...Cur]>
  : Rebuild<T, I, Acc, [...Cur, Gifts[I]]>
  : Acc;

// test 1
type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
type test_0_expected = [
  "🛹", "🛹",
  "🚲",
  "🛴", "🛴", "🛴",
  "🏄", "🏄", "🏄",
  "🛹",
  "🚲",
  "🛴", "🛴",
];

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
type test_1_expected = [
  "🛹", "🛹", "🛹",
  "🚲", "🚲", "🚲",
  "🛴", "🛴",
  "🏄",
  "🛹", "🛹",
  "🚲",
  "🛴", "🛴"
];

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
type test_2_expected = [
  "🛹", "🛹",
  "🚲", "🚲", "🚲",
  "🛴", "🛴", "🛴",
  "🏄", "🏄", "🏄", "🏄", "🏄",
  "🛹",
  "🚲",
  "🛴", "🛴",
];

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
