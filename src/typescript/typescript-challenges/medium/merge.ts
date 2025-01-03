// useful help from @uid11: https://github.com/type-challenges/type-challenges/issues/608
type uid11Merge<
  F extends Record<string, Primitive>,
  S extends Record<string, Primitive>
> = {
    [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never
  }

// @Haya4Taka: https://github.com/type-challenges/type-challenges/issues/6296
type Haya4TakaMerge<
  F extends Record<string, Primitive>,
  S extends Record<string, Primitive>
> = {
    [k in keyof (F & S)]: k extends keyof S ? S[k] : (F & S)[k]
  }

import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<uid11Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

type cases2 = [
  Expect<Equal<Haya4TakaMerge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]