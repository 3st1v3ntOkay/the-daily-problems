// @me: trying to solve it
type myReplace<
  S extends string,
  From extends string,
  To extends string
> =
  S extends `${infer first}${infer rest}`
    ? first extends From
      ? `${To}${rest}`
      : myReplace<rest, From, To>
    : S;

// @hubvue: https://github.com/type-challenges/type-challenges/issues/407
type Replace<
  S extends string,
  From extends string,
  To extends string
> = 
  From extends '' 
    ? S 
    : S extends `${infer V}${From}${infer R}`
      ? `${V}${To}${R}`
      : S;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]