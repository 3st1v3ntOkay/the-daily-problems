type myLookUp<
  U,
  T extends string
> =
  U['type'] extends T
    ? U
    : never;

// @ashi009: https://github.com/type-challenges/type-challenges/issues/149
type ashi009LookUp<
  U,
  T extends string
> =
  U extends { type: T }
    ? U
    : never;

// @stevenaces: https://github.com/type-challenges/type-challenges/issues/75
type colginLookUp<U extends { type: string }, T> =
  U extends U
    ? U["type"] extends T
      ? U
      : never
    : never;

// @fsubal: https://github.com/type-challenges/type-challenges/issues/75
type fsubalLookUp<U, T extends string> = {
  [K in T]: U extends { type: T } ? U : never
}[T]

import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<ashi009LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<ashi009LookUp<Animal, 'cat'>, Cat>>,
]

type cases2 = [
  Expect<Equal<colginLookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<colginLookUp<Animal, 'cat'>, Cat>>,
]

type cases3 = [
  Expect<Equal<fsubalLookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<fsubalLookUp<Animal, 'cat'>, Cat>>,
]