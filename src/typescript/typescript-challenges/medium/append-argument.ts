type Primitives = string | number | boolean | undefined | null | bigint | symbol;

// @ this is okay, but I don't know it throws me an error, research why
type AppendArgument<
  Fn extends (...args: any[]) => void,
  A extends Primitives
> =
  Fn extends (...args: infer values) => infer res
    ? (...args: [...values, A]) => res
    : never;

import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]