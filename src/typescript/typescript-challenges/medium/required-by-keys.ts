type IntersectionToObj<
  T extends Record<string, any>
> = {
    [K in keyof T]: T[K]
  }

type RequiredByKeys<
  T extends Record<string, any>,
  K extends keyof T = any
> =
  // a little of help from @DevilTea
  IntersectionToObj<{
    [key in keyof T as key extends K ? never : key]: T[key]
  } & {
      [key in keyof T as key extends K ? key : never]-?: T[key]
    }>

import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
]