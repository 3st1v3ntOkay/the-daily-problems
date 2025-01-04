type myTrunc<num extends number | string> =
  num extends `${infer n1}${infer n2}`
  ? n1 extends '.'
  ? Trunc<n2>
  : `${n1}${Trunc<n2>}`
  : num;

// @linjunc
type Trunc<S extends string | number> =
  `${S}` extends `${infer R}.${infer U}`
  ? R extends ''
    ? '0'
    : R
  : `${S}`

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<0.2>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'.3'>, '0'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]
