// Index Signatures: https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

type myRemoveIndexSignature<T> = {
  [keyT in keyof T]: keyT extends `[key: any]: any`
  ? never
  : T[keyT]
}

// interesting advice @ianbunag: https://github.com/type-challenges/type-challenges/issues/3542
type advice1<Type extends Record<string, unknown>> = {
  [
  Key in keyof Type
  as Key extends `${infer ConcreteKey}` ? ConcreteKey : never
  ]: Type[Key]
}

// @ZhanghaoH: https://github.com/type-challenges/type-challenges/issues/13328
// type RemoveIndexSignature<T> = {
//   [k in keyof T as string extends k
//   ? never
//   : number extends k
//   ? never
//   : symbol extends k
//   ? never
//   : k]: T[k]
// }

// @alexfung888: https://github.com/type-challenges/type-challenges/issues/14662
type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K
  ? never
  : K extends P
  ? K
  : never]: T[K]
}

import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]