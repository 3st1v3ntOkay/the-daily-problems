import type { Equal, Expect } from "@type-challenges/utils";

type myIsAny<T extends unknown> =
  T extends any
  ? true
  : false;

// @B2D1
type IsAny<T> =
  0 extends (1 & T)
  ? true
  : false;

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
];
