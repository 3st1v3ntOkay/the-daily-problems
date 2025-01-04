import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myIsNegativeNumber<T extends number> =
  `${T}` extends `${infer NegativeSymbol}${string}`
  ? NegativeSymbol extends "-"
  ? true
  : false
  : false;

// @jazelly
type IsNegativeNumber<
  T extends number,
  U extends T = T,
> =
  number extends T
  ? never
  : T extends U
  ? [U] extends [T]
  ? `${T}` extends `-${infer _}`
  ? true
  : false
  : never
  : never;

type cases = [
  Expect<Equal<IsNegativeNumber<0>, false>>,
  Expect<Equal<IsNegativeNumber<number>, never>>,
  Expect<Equal<IsNegativeNumber<-1 | -2>, never>>,
  Expect<Equal<IsNegativeNumber<-1>, true>>,
  Expect<Equal<IsNegativeNumber<-1.9>, true>>,
  Expect<Equal<IsNegativeNumber<-100_000_000>, true>>,
  Expect<Equal<IsNegativeNumber<1>, false>>,
  Expect<Equal<IsNegativeNumber<1.9>, false>>,
  Expect<Equal<IsNegativeNumber<100_000_000>, false>>,
];
