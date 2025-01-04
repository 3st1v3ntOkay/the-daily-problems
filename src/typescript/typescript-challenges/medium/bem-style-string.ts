type myBEM<
  B extends string,
  E extends string[],
  M extends string[]
> =
  B extends string
  ? E extends [infer element, ...infer r1]
  ? M extends [infer modifier, ...infer r2]
  ? `${B}__${element}--${modifier}` | BEM<B, r1, r2>
  : `${B}__${element}` | BEM<B, r1, []>
  : M extends [infer modifier, ...infer r3]
  ? `${B}--${modifier}` | BEM<B, [], r3>
  : `${B}`
  : ''

// @linjunc
type IsNever<T extends string> =
  [T] extends [never]
  ? true
  : false;

type IsUnion<T extends string> =
  IsNever<T> extends true
  ? ""
  : T;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> =
  `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`;

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>,
]