type myCombination<
  T extends string[],
  Array extends string[] = []
> =
  T extends [infer first, ...infer rest]
  ? myCombination<rest, [...Array, [first, rest][number]]>
  : Array[number];

type Combination<
  T extends string[],
  A = T[number],
  U = A
> =
  U extends infer I extends string
  ? I | `${I} ${Combination<[], Exclude<A, I>>}`
  : never;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>, 'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]
