type myIsTuple<T extends any[]> =
  T extends T[number]
  ? true
  : T extends never
  ? false
  : true;

// @jiangshanmeta + @Lionad-Morotar 
type IsTuple<T> =
  [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
  ? false
  : true
  : false

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]