// problema typeof tuple/typeof tuple problem -> https://github.com/type-challenges/type-challenges/issues/538

import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type Tuple = readonly any[];
type Concat<
  T extends Tuple,
  U extends Tuple,
> =
  [...T, ...U];

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<["1", 2, "3"], [false, boolean, "4"]>, ["1", 2, "3", false, boolean, "4"]>>,
];

// @ts-expect-error
type error = Concat<null, undefined>;
