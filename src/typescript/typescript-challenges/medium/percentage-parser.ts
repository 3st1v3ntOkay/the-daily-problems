type Symbols = '-' | '+'
type Numbers = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Unit = '%'

type myPercentageParser<
  // Start
  A extends string,
  // Units
  // S extends string = '',
  // N extends string = '',
  // U extends string = '',
  // Result
  R extends string[] = ['', '', '']
> =
  A extends `${infer head}${infer rest}`
  ? head extends Symbols
  ? myPercentageParser<rest, [`${head}`]>
  : head extends Numbers
  ? myPercentageParser<rest, [`${head}`]>
  : head extends Unit
  ? myPercentageParser<rest, [`${head}`]>
  : never
  : R

// @Xieyongshen: https://github.com/type-challenges/type-challenges/issues/3788
type CheckSign<T extends string> =
  T extends Symbols
  ? T
  : '';

type CheckNumberAndUnit<T extends string> =
  T extends `${infer numbers}%`
  ? [`${numbers}`, Unit]
  : [`${T}`, ''];

type PercentageParser<A extends string> =
  A extends `${CheckSign<infer head>}${infer rest}`
  ? [head, ...CheckNumberAndUnit<rest>]
  : ['', ...CheckNumberAndUnit<A>];

import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]