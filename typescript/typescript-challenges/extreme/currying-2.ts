import type { Equal, Expect } from "@type-challenges/utils";

// Ver que es el tipo "unique"
// @teamchong
type Currying<
  T extends unknown[],
  R,
  Args extends unknown[] = [],
> =
  T extends [infer Head]
  ? (...args: [...Args, Head]) => R
  : T extends [infer Head, ...infer Tail]
  ? & ((...args: [...Args, Head]) => Currying<Tail, R>)
  & Currying<Tail, R, [...Args, Head]>
  : () => R;

declare function DynamicParamsCurrying<
  T extends unknown[],
  R,
>(fn: (...args: T) => R): Currying<T, R>;

const curried1 = DynamicParamsCurrying((a: string, b: number, c: boolean) => true);
const curried2 = DynamicParamsCurrying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true);

const curried1Return1 = curried1('123')(123)(true);
const curried1Return2 = curried1('123', 123)(false);
const curried1Return3 = curried1('123', 123, true);

const curried2Return1 = curried2('123')(123)(true)(false)(true)('123')(false);
const curried2Return2 = curried2('123', 123)(true, false)(true, '123')(false);
const curried2Return3 = curried2('123', 123)(true)(false)(true, '123', false);
const curried2Return4 = curried2('123', 123, true)(false, true, '123')(false);
const curried2Return5 = curried2('123', 123, true)(false)(true)('123')(false);
const curried2Return6 = curried2('123', 123, true, false)(true, '123', false);
const curried2Return7 = curried2('123', 123, true, false, true)('123', false);
const curried2Return8 = curried2('123', 123, true, false, true)('123')(false);
const curried2Return9 = curried2('123', 123, true, false, true, '123')(false);
const curried2Return10 = curried2('123', 123, true, false, true, '123', false);

// @ts-expect-error
const curried1ReturnWrong = curried1('123')(123)('wrong arg type');
// @ts-expect-error
const curried1ReturnWrong2 = curried1('123')()(123)(true);

type cases = [
  Expect<Equal<typeof curried1Return1, boolean>>,
  Expect<Equal<typeof curried1Return2, boolean>>,
  Expect<Equal<typeof curried1Return3, boolean>>,

  Expect<Equal<typeof curried2Return1, boolean>>,
  Expect<Equal<typeof curried2Return2, boolean>>,
  Expect<Equal<typeof curried2Return3, boolean>>,
  Expect<Equal<typeof curried2Return4, boolean>>,
  Expect<Equal<typeof curried2Return5, boolean>>,
  Expect<Equal<typeof curried2Return6, boolean>>,
  Expect<Equal<typeof curried2Return7, boolean>>,
  Expect<Equal<typeof curried2Return8, boolean>>,
  Expect<Equal<typeof curried2Return9, boolean>>,
  Expect<Equal<typeof curried2Return10, boolean>>,
];
