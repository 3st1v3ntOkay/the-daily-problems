type myPartialByKeys<
  T extends Record<string, any>,
  K extends string
> = {
    [key in keyof T as T extends K
    ? `${keyof T}?`
    : key
    ]: T[key]
  }

// @Jcanno
type IntersectionToObj<
  T extends Record<string, any>
> = {
    [K in keyof T]: T[K]
  }

type PartialByKeys<
  T extends Record<string, any>,
  // thanks @Jicmou, I would think this was "K extends string"
  K extends keyof T = any
> = IntersectionToObj<{
  [P in keyof T as P extends K ? P : never]?: T[P]
} & {
    [P in Exclude<keyof T, K>]: T[P]
  }>

import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]