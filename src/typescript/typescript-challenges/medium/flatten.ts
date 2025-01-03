// type Primitive = string | number | bigint | boolean | symbol | null | undefined

// type Flatten<
//   T extends Array<Primitive>,
//   T extends Primitive[]
// > = 
//   T extends [infer first, ...infer rest]
//     ? first extends Primitive[]
//       ? Flatten<[...first, ...rest], T>
//       : never
//     : []

// 你的答案
type Flatten<T> =
  T extends [infer F, ...infer R]
    ? F extends unknown[]
      ? [...Flatten<F>, ...Flatten<R>]
      : [Flatten<F>, ...Flatten<R>]
    : T

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>