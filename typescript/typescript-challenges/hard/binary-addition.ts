import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type Bit = 1 | 0;

type myBinaryAdd<
  A extends Bit[],
  B extends Bit[],
  BinaryArray extends Bit[] = [],
  Trigger extends Bit = 1,
> =
  A extends [
    ...infer beforeA extends Bit[],
    infer lastA extends Bit
  ]
  ? B extends [
    ...infer beforeB extends Bit[],
    infer lastB extends Bit
  ]
  ? lastA extends lastB
  ? myBinaryAdd<beforeA, beforeB, [...BinaryArray, Trigger, 0]>
  : myBinaryAdd<beforeA, beforeB, [...BinaryArray, 1]>
  : never
  : BinaryArray;

// @Sun79
type BinaryAdd<
  A extends Bit[],
  B extends Bit[],
  _Carry extends Bit = 0,
> =
  A["length"] extends 0
  ? _Carry extends 1
  ? [1]
  : []
  : [A, B] extends [
    [
      ...infer RestA extends Bit[],
      infer LastA extends Bit
    ],
    [
      ...infer RestB extends Bit[],
      infer LastB extends Bit
    ]
  ]
  ? [
    ...BinaryAdd<RestA, RestB, Carry<[LastA, LastB, _Carry]>>,
    XOr<_Carry, XOr<LastA, LastB>>
  ]
  : never;

type XOr<A extends Bit, B extends Bit> =
  A extends B ? 0 : 1;

type Carry<T extends Bit[]> =
  Reject<T, 0>["length"] extends 0 | 1 ? 0 : 1;

type Reject<T extends any[], K> =
  T extends [infer Head, ...infer Rest]
  ? Head extends K
  ? Reject<Rest, K>
  : [Head, ...Reject<Rest, K>]
  : [];

type cases = [
  Expect<Equal<
    BinaryAdd<[1], [1]>,
    [1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[0], [1]>,
    [1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 0], [0, 0, 1]>,
    [1, 1, 1]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>,
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  >>,
  Expect<Equal<
    BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
    [1, 0, 0, 1, 1, 1, 0, 1, 0]
  >>,
];
