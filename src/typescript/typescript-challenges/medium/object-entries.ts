type myObjectEntries<T extends Record<string, any>> =
  T extends infer name
  ? [keyof name, T[keyof name]]
  : never

// @stevenaces
type RemoveUndefined<T extends any> =
  [T] extends [undefined]
  ? T
  : Exclude<T, undefined>

type ObjectEntries<T extends Record<string, any>> = RemoveUndefined<{
  [K in keyof T]: {} extends Pick<T, K>
  ? [K, RemoveUndefined<T[K]>]
  : [K, T[K]]
}[keyof T]>

import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]