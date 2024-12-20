import type { Equal, Expect } from "@type-challenges/utils";

type myCamelCase<
  S extends string,
  StrRes extends string = ''
> =
  S extends `${infer first}${infer rest}`
  ? first extends "_"
  ? `${StrRes}${myCamelCase<rest>}`
  : myCamelCase<rest, `${StrRes}${first}`>
  : Lowercase<StrRes>;

// @WisestCoder + @okatechnology
type IsGap<T extends string> =
  Uppercase<T> extends Lowercase<T>
  ? true
  : false;

type CamelCase<S extends string> =
  S extends Lowercase<S>
  ? S extends `${infer F}_${infer RF}${infer R}`
  ? RF extends '_'
  ? `${F}_${CamelCase<`_${R}`>}`
  : `${F}${IsGap<RF> extends true ? `_${RF}` : Uppercase<RF>}${CamelCase<R>}`
  : S
  : CamelCase<Lowercase<S>>

type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
  Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
  Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
  Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
];
