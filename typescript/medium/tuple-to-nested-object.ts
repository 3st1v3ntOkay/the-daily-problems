type myTupleToNestedObject<
  T extends any[],
  U extends any
> =
  T extends [infer first, ...infer rest]
  ? {
      `${first}`: TupleToNestedObject<rest, U>
    }
    : U;

// @jiangshanmeta
type TupleToNestedObject<
  T extends any[],
  U extends any
> =
  T extends [infer first, ...infer rest]
  ? {
    // first & string === first extends string ? first : never
    [key in first & string]: TupleToNestedObject<rest, U>
  }
  : U;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]