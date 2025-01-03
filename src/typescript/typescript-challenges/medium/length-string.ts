// some help from @okatechnology: https://github.com/type-challenges/type-challenges/issues/359
type LengthOfString<
  S extends string,
  Lenght extends string[] = []
> =
  S extends `${infer str}${infer rest}`
  ? LengthOfString<rest, [...Lenght, str]>
  : Lenght["length"];

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
