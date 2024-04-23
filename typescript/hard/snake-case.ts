import type { Equal, Expect } from "@type-challenges/utils";

type Mayus = "N"; // just testing with a letter

type mySnakeCase<T extends string> =
  T extends `${infer firstWord}${Mayus}${infer restWord}`
  ? `${firstWord}_${Lowercase<Mayus>}${mySnakeCase<restWord>}`
  : T;

// @bigcreate
type SnakeCase<T> =
  T extends `${infer A}${infer R}`
  ? Uppercase<A> extends A
  ? `_${Lowercase<A>}${SnakeCase<R>}`
  : `${A}${SnakeCase<R>}`
  : T;

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<Equal<SnakeCase<'getElementById' | 'getElementByClassNames'>, 'get_element_by_id' | 'get_element_by_class_names'>>,
];
