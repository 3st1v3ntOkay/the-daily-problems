// help from @meiguiyisenluo: https://github.com/type-challenges/type-challenges/issues/1721

type MyReadonly2<
  T extends Record<string, any>,
  K extends keyof T = keyof T
> = {
    readonly [key in keyof T as key extends K ? key : never]: T[key]
  } & {
    [key in keyof T as key extends K ? never : key]: T[key]
  }

import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}