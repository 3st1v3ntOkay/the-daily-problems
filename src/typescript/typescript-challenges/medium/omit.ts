// Key Remapping via as: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

type MyOmit<
  T extends Record<string, any>,
  K extends string
> = {
  [key in keyof T as key extends K ? never: key]: T[key]
}

// @antfu: https://github.com/type-challenges/type-challenges/issues/4
type AntfuExclude<KeyT, Key> =  
  KeyT extends Key ? never : KeyT;

type AntfuOmit<
  T,
  K extends keyof T
> = {
  [key in AntfuExclude<keyof T, K>]: T[key]
}

// @tauqeernasir: https://github.com/type-challenges/type-challenges/issues/825
type TauqeernasirOmit<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

type cases2 = [
  Expect<Equal<Expected1, AntfuOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, AntfuOmit<Todo, 'description' | 'completed'>>>,
]

type cases3 = [
  Expect<Equal<Expected1, TauqeernasirOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, TauqeernasirOmit<Todo, 'description' | 'completed'>>>,
]


// @ts-expect-error
// type error = MyOmit<Todo, 'description' | 'invalid'>
type error2 = AntfuOmit<Todo, 'description' | 'invalid'>
// type error3 = TauqeernasirOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}