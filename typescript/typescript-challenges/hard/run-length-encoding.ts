import type { Equal, Expect } from "@type-challenges/utils";

type Number<
  T extends string,
  ArrNum extends 0[] = []
> =
  ArrNum['length'] extends T['length']
  ? ArrNum['length']
  : Number<T, [...ArrNum, 0]>;

namespace myRLE {
  export type Encode<
    S extends string,
    EncodeRes extends string = '',
  > =
    S extends `${infer first}${infer rest}`
    ? rest extends `${infer prev}${first}${infer rest}`
    ? Encode<rest, `${EncodeRes}${Number<`${prev}${first}`>}${first}`>
    : never
    : EncodeRes;

  export type Decode<S extends string> =
    S extends `${infer digit}${infer letter}${infer rest}`
    ? never
    : never;
}

// @Sun79
namespace RLE {
  type EncodeHelper<
    S extends string,
    P extends string = '',
    L extends 1[] = [],
  > =
    S extends `${infer F}${infer R}`
    ? F extends P
    ? EncodeHelper<R, P, [1, ...L]>
    : P extends ''
    ? EncodeHelper<R, F, [1]>
    : L['length'] extends 1
    ? `${P}${EncodeHelper<R, F, [1]>}`
    : `${L['length']}${P}${EncodeHelper<R, F, [1]>}`
    : P extends ''
    ? ''
    : L['length'] extends 1
    ? P
    : `${L['length']}${P}`;

  export type Encode<S extends string> = EncodeHelper<S>;

  type DecodeHelper<
    S extends string,
    L extends string = '',
  > =
    S extends `${infer F}${infer R}`
    ? F extends `${number}`
    ? DecodeHelper<R, `${L}${F}`>
    : `${Repeat<F, L extends '' ? '1' : L>}${DecodeHelper<R, ''>}`
    : '';

  type Repeat<
    S extends string,
    L extends string,
    C extends 1[] = [],
  > =
    `${C['length']}` extends L
    ? ''
    : `${S}${Repeat<S, L, [1, ...C]>}`;

  export type Decode<S extends string> = DecodeHelper<S>;
}

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,
  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>,
];
