import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myUnbox<
  T extends any,
  Proof extends number = 0,
> =
  T extends string | number | boolean
  ? T
  : T extends (string | number | boolean)[]
  ? "???"
  : T extends string[] | number[] | boolean[]
  ? "???"
  : T extends [string | number | boolean]
  ? "???"
  : T extends Promise<string | number | boolean>
  ? "???"
  : T extends () => infer NextValue
  ? NextValue extends () => any
  ? myUnbox<NextValue>
  : NextValue
  : never

// @Sun79
type Unbox<
  T,
  Depth = 0,
  Count extends any[] = [1],
> =
  T extends ((...args: any[]) => infer R) | (infer R)[] | Promise<infer R>
  ? Count["length"] extends Depth
  ? R
  : Unbox<R, Depth, [...Count, 1]>
  : T;

type cases = [
  // Base cases
  Expect<Equal<Unbox<number>, number>>,
  Expect<Equal<Unbox<boolean>, boolean>>,
  Expect<Equal<Unbox<string>, string>>,
  Expect<Equal<Unbox<() => number>, number>>,
  Expect<Equal<Unbox<() => number | string>, number | string>>,
  Expect<Equal<Unbox<number[]>, number>>,
  Expect<Equal<Unbox<(number | string)[]>, number | string>>,
  Expect<Equal<Unbox<[number]>, number>>,
  Expect<Equal<Unbox<Promise<number>>, number>>,

  // Bonus: Recursion
  Expect<Equal<Unbox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

  // Bonus: Recusion levels
  Expect<Equal<Unbox<() => () => () => () => number, 0>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 1>, () => () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 2>, () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 3>, () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 4>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 5>, number>>,
  Expect<Equal<Unbox<number[][][][], 0>, number>>,
  Expect<Equal<Unbox<number[][][][], 1>, number[][][]>>,
  Expect<Equal<Unbox<number[][][][], 2>, number[][]>>,
  Expect<Equal<Unbox<number[][][][], 3>, number[]>>,
  Expect<Equal<Unbox<number[][][][], 4>, number>>,
  Expect<Equal<Unbox<number[][][][], 5>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 0>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 1>, [[[number]]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 2>, [[number]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 3>, [number]>>,
  Expect<Equal<Unbox<[[[[number]]]], 4>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 5>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 0>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 1>, Promise<Promise<number>>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 2>, Promise<number>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 3>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 4>, number>>,
];
