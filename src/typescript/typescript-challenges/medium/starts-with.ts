type myStartsWith<
  T extends string,
  U extends string
> =
  T extends `${infer firstT}${infer restT}`
  ? U extends `${infer firstU}${infer restU}`
  ? firstU extends ''
  ? firstT extends ''
  ? false
  : StartsWith<T, U>
  : firstT extends firstU
  ? StartsWith<restT, restU>
  : false
  : true
  : false

// how I forgot this hack, thanks @jiangshanmeta
type StartsWith<
  T extends string,
  U extends string
> =
  T extends `${U}${string}`
  ? true
  : false

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
  Expect<Equal<StartsWith<'', 'abc'>, false>>,
]