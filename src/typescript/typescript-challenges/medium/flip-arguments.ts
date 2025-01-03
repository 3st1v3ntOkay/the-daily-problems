// This was my failed idea
type myFlipArguments<T extends (...args: any[]) => void> =
  T extends (
    ...[infer left, ...infer mid, infer right]: infer typ
    ) => infer retrn
  ? (left: typeof right, ...FlipArguments<mid>, right: typeof left) => retrn
  : T;

// @389103326
type FlipArguments<T extends (...args: any[]) => void> =
    T extends (...args: infer tp) => infer rtn
    // I called one friend created before
    ? (...args: Reverse<tp>) => rtn
    : never;

import type { Equal, Expect } from '@type-challenges/utils'
import { Reverse } from './reverse';

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]