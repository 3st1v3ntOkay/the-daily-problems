type Syms = ' ' | '\n' | '\t';

type myTrimRight<S extends string> =
  S extends `${infer rest}${infer last}`
  ? last extends Syms
  ? TrimRight<rest>
  : S
  : S;

// @teamchong
type TrimRight<S extends string> =
  S extends `${infer rest}${Syms}`
  ? TrimRight<rest>
  : S

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]