// it doesn't work but I was so close, or I think so 😗
type myIsNever<T> =
  // typeof T????
  T extends never
  ? true
  : false

// Distributive Conditional Types: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// @preventdefault: https://github.com/type-challenges/type-challenges/issues/1081
type IsNever<T> =
  [T] extends [never] ? true : false;
  // string[] | number[] -> (string | number)[]

// @ChiuMungZitAlexander: https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]