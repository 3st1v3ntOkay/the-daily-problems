import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myUnionToIntersection<U> =
  U extends [infer first, ...infer rest]
  ? first & myUnionToIntersection<rest>
  : U extends [infer first, ...infer rest]
  ? first extends (...args: any[]) => any
  ? first & myUnionToIntersection<rest>
  : never
  : never;

// @zhaoyao91
type UnionToFunctionUnion<U> =
  U extends unknown
  ? (arg: U) => unknown
  : never;

type UnionToIntersection<U> =
  UnionToFunctionUnion<U> extends (arg: infer Arg) => unknown
  ? Arg
  : never;

type cases = [
  Expect<Equal<UnionToIntersection<
    "foo" | 42 | true>,
    "foo" & 42 & true
  >>,
  // Expect<Equal<UnionToIntersection<
  //   () => "foo" | (i: 42) => true>,
  //   () => "foo" & (i: 42) => true
  // >>,
  Expect<Equal<UnionToIntersection<
    (() => "foo") | ((i: 42) => true)>,
    (() => "foo") & ((i: 42) => true)
  >>,
];
