import type { Equal, Expect } from '@type-challenges/utils';

type myHanoi<
  N extends number,
  From = 'A',
  To = 'B',
  Intermediate = 'C',
  Counter extends number[] = [],
  Res extends string[][] = []
> =
  N extends Counter['length']
  ? Res
  : myHanoi<N, From, To, Intermediate, [...Res, []]>;

// @
type Hanoi<
  N extends number,
  From = 'A',
  To = 'B',
  Intermediate = 'C',
  Counter extends 1[] = []
> =
  N extends Counter['length']
  ? []
  : [
    ...Hanoi<
      N,
      From,
      Intermediate,
      To,
      [...Counter, 1]
    >,
    [From, To],
    ...Hanoi<
      N,
      Intermediate,
      To,
      From,
      [...Counter, 1]
    >
  ];

type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  Expect<Equal<Hanoi<3>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
  Expect<Equal<Hanoi<5>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
];
