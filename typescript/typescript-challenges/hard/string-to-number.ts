import type { Equal, Expect } from "@type-challenges/utils";

type Symbs = "@" | "_" | "$" | "%"

type myToNumber<
  S extends string,
  ArrRes extends 0[] = []
> =
  S extends `${number}${Symbs}`
  ? never
  : `${ArrRes['length']}` extends S // little help from @bre30kra69cs
  ? ArrRes['length']
  : myToNumber<S, [...ArrRes, 0]>;

// @jiaaoMario
type ToNumber<S extends string> =
  S extends `${infer N extends number}`
  ? N
  : never;

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
];
