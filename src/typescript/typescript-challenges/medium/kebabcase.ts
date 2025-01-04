// help from @turtleflyer: https://github.com/type-challenges/type-challenges/issues/664
type KebabCase<
  S extends string
> =
  S extends `${infer head}${infer rest}`
    ? rest extends Uncapitalize<rest>
      ? `${Uncapitalize<head>}${KebabCase<rest>}`
      : `${Uncapitalize<head>}-${KebabCase<rest>}`
    : S;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]