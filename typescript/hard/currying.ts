import type { Equal, Expect } from "@type-challenges/utils";

type Curry<T extends any[]> =
  T extends [infer first, ...infer rest]
  ? (`${first}`) => Curry<rest>
  : true;

declare function myCurrying(fn: (...args: any[]) => any): boolean;

// @antfu
type FirstAsTuple<T> =
  T extends [any, ...infer R]
  ? T extends [...infer F, ...R]
  ? F
  : never
  : never;

type Curried<T> =
  T extends (...args: infer Args) => infer Return
  ? Args['length'] extends 1 | 0
  ? T
  : Args extends [any, ...infer Rest]
  ? (...args: FirstAsTuple<Args>) => Curried<(...rest: Rest) => Return>
  : never
  : never;

declare function Currying<T extends Function>(fn: T): Curried<T>

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1,
    (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2,
    (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
];
