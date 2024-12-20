// no-explicit-any: 
type Falsy = null | undefined | Primitive | never | unknown | any

type myIsUnion<T> =
  T extends [T][number]
  ? true
  : [T] extends [Falsy]
  ? false
  : true

// dive in deep with this because it has a lot of ineresting things -> @bencor: https://github.com/type-challenges/type-challenges/issues/1140
type IsUnionImpl<T, C extends T = T> =
  (T extends T
    ? C extends T
    ? true
    : unknown
    : never) extends true
  ? false : true;

type IsUnion<T> =
  IsUnionImpl<T>;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
  // Expect<Equal<IsUnion<(() => any)|(() => 15)>, true >>, <- error
]