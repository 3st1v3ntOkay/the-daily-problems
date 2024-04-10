import type { Equal, Expect } from "@type-challenges/utils";

type myCapitalizeNestObjectKeys<
  T extends object,
> = {
    [key in keyof T as key extends `${infer word}`
    ? `${Capitalize<word>}`
    : never
    ]: T[key] extends [
      infer first extends object,
      ...infer rest
    ]
    ? myCapitalizeNestObjectKeys<first>
    : T[key];
  }

// @jiangshanmeta
type CapitalizeNestObjectKeys<T> =
  T extends readonly any[]
  ? {
    [K in keyof T]: CapitalizeNestObjectKeys<T[K]>;
  }
  : T extends Record<keyof any, any>
  ? {
    [K in keyof T as Capitalize<K & string>]: CapitalizeNestObjectKeys<T[K]>;
  }
  : T;

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type foo2 = {
  foo: string
}

type Foo2 = {
  Foo: string
}

type foo3 = {
  foo: string
  bars: [{
    foo: string
    foo2: string
  }]
}

type Foo3 = {
  Foo: string
  Bars: [{
    Foo: string
    Foo2: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
  Expect<Equal<Foo2, CapitalizeNestObjectKeys<foo2>>>,
  Expect<Equal<Foo3, CapitalizeNestObjectKeys<foo3>>>,
];
