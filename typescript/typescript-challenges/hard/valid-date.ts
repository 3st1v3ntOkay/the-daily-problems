import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type TwentyEight = "02";
type Thirty = "04" | "06" | "09" | "11";
type ThirtyOne = "01" | "03" | "05" | "07" | "08" | "10" | "12";

type myValidDate<T extends string> =
  T extends `${infer M1}${infer M2}${infer D1}${infer D2}`
  ? `${M1}${M2}` extends TwentyEight
  ? `${D1}${D2}` extends "29"
  ? false
  : true
  : `${M1}${M2}` extends Thirty
  ? `${D1}${D2}` extends "31"
  ? false
  : true
  : `${M1}${M2}` extends ThirtyOne
  ? `${D1}${D2}` extends "32"
  ? false
  : true
  : false
  : false;

// @LoTwT
type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type MM = `0${Num}` | `1${0 | 1 | 2}`;

type AllDate =
  | `${MM}${`${0}${Num}` | `${1}${0 | Num}` | `2${0 | Exclude<Num, 9>}`}`
  | `${Exclude<MM, "02">}${29 | 30}`
  | `${Exclude<MM, "02" | "04" | "06" | "09" | "11">}${31}`


type ValidDate<T extends string> =
  T extends AllDate ? true : false;

type cases = [
  Expect<Equal<ValidDate<"0102">, true>>,
  Expect<Equal<ValidDate<"0131">, true>>,
  Expect<Equal<ValidDate<"1231">, true>>,
  Expect<Equal<ValidDate<"0229">, false>>,
  Expect<Equal<ValidDate<"0100">, false>>,
  Expect<Equal<ValidDate<"0132">, false>>,
  Expect<Equal<ValidDate<"1301">, false>>,
  Expect<Equal<ValidDate<"0123">, true>>,
  Expect<Equal<ValidDate<"01234">, false>>,
  Expect<Equal<ValidDate<"">, false>>,
];
