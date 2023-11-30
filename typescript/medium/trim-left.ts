// @hiroyaiizuka: https://github.com/type-challenges/type-challenges/issues/346
type ToDelete = ' ' | '\n' | '\t';

type TrimLeft<S extends string> =
  S extends `${ToDelete}${infer str}`
    ? TrimLeft<str>
    : S;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]