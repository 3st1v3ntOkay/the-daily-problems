import type { Equal, Expect } from "@type-challenges/utils";

type myBinaryToDecimal<
  S extends string,
  Decimal extends 0[] = []
> =
  S extends `${infer rest}${infer last}`
  ? last extends 0
    ? myBinaryToDecimal<rest, [...Decimal]>
    : myBinaryToDecimal<rest, [...Decimal, 0]>
  : Decimal['length'];

// @jiangshanmeta
type BinaryToDecimal<
  S extends string,
  Decimal extends 0[] = []
> =
  S extends `${infer first}${infer rest}`
  ? first extends '1'
    ? BinaryToDecimal<rest, [...Decimal, ...Decimal, 0]>
    : BinaryToDecimal<rest, [...Decimal, ...Decimal]>
  : Decimal['length'];

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
];
