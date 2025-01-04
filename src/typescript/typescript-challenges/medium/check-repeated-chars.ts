type CheckRepeatedChars<
  T extends string,
> =
  T extends `${infer letter}${infer rest}`
  ? rest extends `${string}${letter}${string}` // some help here from @linjunc
  ? true
  : CheckRepeatedChars<rest>
  : false;

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
];
