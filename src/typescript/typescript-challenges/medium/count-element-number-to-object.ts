import type { Equal, Expect } from '@type-challenges/utils';

type myCountElementNumberToObject<
  T extends any[],
  Many extends any[] = [],
  Res extends Object = {},
> =
  T extends [infer first, ...infer rest]
  ? first extends [...rest, ...Many]
  ? never
  : never
  : Res;

// @HugeLetters
type TupleElementNumberToObject<
  T,
  O extends Record<PropertyKey, any[]> = {}
> =
  T extends [infer F, ...infer R]
  ? TupleElementNumberToObject<
    R, [F] extends [PropertyKey]
    ? Omit<O, F> & { [K in F]: K extends keyof O ? [...O[K], F] : [F] }
    : TupleElementNumberToObject<F, O>
  >
  : O;

type CountElementNumberToObject<
  T,
  O extends Record<PropertyKey, any[]> = TupleElementNumberToObject<T>
> = {
    [K in keyof O]: O[K]['length'];
  }

type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
];
