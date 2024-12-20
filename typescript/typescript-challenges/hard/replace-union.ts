import type { Equal, Expect } from "@type-challenges/utils";

type myUnionReplace<
  T,
  U extends [any, any][],
  ContentRes extends any[] = []
> =
  U extends [
    infer first,
    ...infer rest extends [any, any][]
  ]
  ? first extends [
    infer currentValue,
    infer newValue
  ]
  ? currentValue extends T
  ? myUnionReplace<T, rest, [...ContentRes, newValue]>
  : myUnionReplace<T, rest>
  : never
  : ContentRes[number];

// @jiaowoxiaobala + some modifications of how I had thought it
type UnionReplace<T, U extends [any, any][]> =
U extends [
  infer First extends [any, any],
  ...infer Rest extends [any, any][]
]
  ? First extends [infer currentValue, infer newValue]
    ? UnionReplace<T extends currentValue ? newValue : T, Rest>
    : never
  : T;

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<
    number | string, [[string, null]]>,
    number | null>
  >,

  // string -> null
  Expect<Equal<UnionReplace<
    number | string, [[string, null], [Date, Function]]>,
    number | null>
  >,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<
    Function | Date | object, [[Date, string], [Function, undefined]]>,
    undefined | string | object>
  >,
];
