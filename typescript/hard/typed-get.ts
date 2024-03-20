import type { Equal, Expect } from "@type-challenges/utils";

type myGet<
  T,
  K extends string
> =
  K extends keyof T
  ? T[K]
  : K extends `${infer first}.${infer rest}`
  ? typeof first extends object
  ? myGet<rest, K>
  : T[K]
  : K extends keyof T
  ? T[K]
  : never;

// @chbro
type Get<
  T extends Record<string, any>,
  K extends string
> =
  K extends keyof T
  ? T[K]
  : K extends `${infer A}.${infer B}`
  ? A extends keyof T ? Get<T[A], B> : never
  : K extends keyof T ? T[K] : never;

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar', count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,
  Expect<Equal<Get<Data, 'no.existed'>, never>>,
];

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  'foo.baz': false
  hello: 'world'
}
