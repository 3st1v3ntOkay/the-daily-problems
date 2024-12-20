import type { Equal, Expect } from "@type-challenges/utils";

type StringArray<T extends string> =
  T extends `${infer left}${infer right}`
  ? [left, ...StringArray<right>]
  : [T];

type myBitwiseXOR<
  S1 extends string,
  S2 extends string,
  S1Array extends string[] = StringArray<S1>,
  S2Array extends string[] = StringArray<S2>,
  ArrayRes extends string[] = []
> =
  S1Array extends [...infer leftS1, infer rightS1]
  ? S2Array extends [...infer leftS2, infer rightS2]
  ? rightS1 extends '0'
  ? rightS2 extends '0'
  ? myBitwiseXOR<'???', '???', ['???'], ['???'], ['1', ...ArrayRes]>
  : myBitwiseXOR<'???', '???', ['???'], ['???'], ['1', ...ArrayRes]>
  : rightS1 extends '1'
  ? rightS2 extends '1'
  ? myBitwiseXOR<'???', '???', ['???'], ['???'], ['0', ...ArrayRes]>
  : myBitwiseXOR<'???', '???', ['???'], ['???'], ['1', ...ArrayRes]>
  : never
  : '???'
  : '???';

// @Karamuto
type XORSingle<
  A extends string,
  B extends string
> = A extends B ? '0' : '1';

type Revert<S extends string> =
  S extends `${infer Start}${infer End}`
  ? `${Revert<End>}${Start}`
  : '';

type IterateXOR<
  S1 extends string,
  S2 extends string,
> =
  S1 extends `${infer Start1}${infer End1}`
  ? S2 extends `${infer Start2}${infer End2}`
  ? `${IterateXOR<End1, End2>}${XORSingle<Start1, Start2>}`
  : S1
  : S2;
  
type BitwiseXOR<
  S1 extends string,
  S2 extends string,
> =
  IterateXOR<Revert<S1>, Revert<S2>>;

type cases = [
  Expect<Equal<BitwiseXOR<'0', '1'>, '1'>>,
  Expect<Equal<BitwiseXOR<'1', '1'>, '0'>>,
  Expect<Equal<BitwiseXOR<'10', '1'>, '11'>>,
  Expect<Equal<BitwiseXOR<'110', '1'>, '111'>>,
  Expect<Equal<BitwiseXOR<'101', '11'>, '110'>>,
];
