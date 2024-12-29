import type {
  ExpectExtends,
  ExpectFalse,
  ExpectTrue,
} from "@type-challenges/utils";

type myPath<
  T extends object,

> =
  keyof T extends object
  ? myPath<T>
  : [keyof T];

type myOtherPath<T> = {
  [K in keyof T]: T[K] extends object
  ? myOtherPath<T[K]>
  : [K];
}[keyof T];

// @jiaowoxiaobala
type Path<T> = {
  [K in keyof T]: [K] | (T[K] extends object ? [K, ...Path<T[K]>] : never);
}[keyof T];

declare const example: {
  foo: {
    bar: {
      a: string
    }
    baz: {
      b: number
      c: number
    }
  }
}

type cases = [
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["a"]>>,
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["baz"]>, ["b"] | ["c"]>>,
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]>, ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]>>,
  ExpectFalse<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["z"]>>,
];
