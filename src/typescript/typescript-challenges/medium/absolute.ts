type myAbsolute<T extends number | string | bigint> =
  `${T}` extends `${infer minus}${infer num}`
    ? minus extends '-'
      ? `${num}`
      : `${T}`
    : never;

// @zhoudailin: https://github.com/type-challenges/type-challenges/issues/10386
type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer U}` ? U : `${T}`

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
]