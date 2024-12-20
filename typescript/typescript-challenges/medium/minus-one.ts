//  Improved Inference for infer Types in Template String Types: https://devblogs.microsoft.com/typescript/announcing-typescript-4-8-beta/#improved-inference-for-infer-types-in-template-string-types

// @elias-prine: https://github.com/type-challenges/type-challenges/issues/13507
// @AspectLeft: https://github.com/type-challenges/type-challenges/issues/13507
type ParseInt<T extends string> =
  T extends `${infer Digit extends number}`
  ? Digit
  : never;

type ReverseString<S extends string> =
  S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : '';

type RemoveLeadingZeros<S extends string> =
  S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
  ? RemoveLeadingZeros<R>
  : S;

type InternalMinusOne<
  S extends string
> =
  S extends `${infer Digit extends number}${infer Rest}`
  ? Digit extends 0
  ? `9${InternalMinusOne<Rest>}`
  : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
  : never;

type InternalPlusOne<S extends string> = S extends "9"
  ? "01"
  : S extends `${infer Digit extends number}${infer Rest }`
  ? Digit extends 9
  ? `0${ InternalPlusOne<Rest> }`
    : `${ [1, 2, 3, 4, 5, 6, 7, 8, 9][Digit] }${ Rest }`
  : never;

type PutSign<S extends string> = `-${S}`;

type MinusOne<T extends number> =
  T extends 0
  ? -1
  : `${T}` extends `-${infer Abs}`
  ? ParseInt<PutSign<ReverseString<InternalPlusOne<ReverseString<`${ Abs }`>>>>>
  : ParseInt<
    RemoveLeadingZeros<
      ReverseString<
        InternalMinusOne<ReverseString<`${T}`>>
      >
    >
  >

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]