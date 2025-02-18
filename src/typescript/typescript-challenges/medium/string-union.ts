type myStringToUnion<
  T extends string,
  arr extends string[] = []
> =
  T extends ''
  ? never
  : T extends `${infer first}${infer rest}`
    ? myStringToUnion<rest, [first]>
    : arr[number]

// @uid11: https://github.com/type-challenges/type-challenges/issues/537
type StringToUnion<T extends string> =
  T extends `${infer Letter}${infer Rest}`
    ? Letter | StringToUnion<Rest>
    : never;

type Roles = RolesArray[number];

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
