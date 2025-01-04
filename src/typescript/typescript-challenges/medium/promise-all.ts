// @ahejlsberg - Variadic tuple types #39094: https://github.com/microsoft/TypeScript/pull/39094

// @jinxin0112
// declare function PromiseAll<T extends any[]>(values: readonly [...T]):
//   Promise<{
//     [key in keyof T]: T[key] extends Promise<infer R>
//       ? R
//       : T[key];
//   }>

// @diraneyya
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [key in keyof T]: Awaited<T[key]>
}>
// about how works Awaited<T>: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements
// more info: https://github.com/microsoft/TypeScript/pull/45350

// @HersanKuang
// declare function PromiseAll<T extends any[]>(values: readonly [...T]):
//   Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] extends number ? T[K] : number }>

import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]
