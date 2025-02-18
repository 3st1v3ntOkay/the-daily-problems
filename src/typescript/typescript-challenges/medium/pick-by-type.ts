// no words, so close and so far
type myPickByType<
  T extends Record<string, any>,
  U extends any
> = {
    [key in keyof T as T[key]]: T[key] extends U
    ? T[key]
    : never
  }

// @Roka20012
type PickByType<
  T extends Record<string, any>,
  U extends any
> = {
    [key in keyof T as T[key] extends U
    ? key
    : never
    ]: T[key]
  }

import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]