import type { Equal, Expect } from "@type-challenges/utils"

type myTriangular<
  N extends number,
  Arr extends number[] = [],
  Count extends number[] = [],
> =
  N extends Count['length']
  ? myTriangular<N, [...Arr, myTriangular<N, [...Arr, 0]>], [...Count, 0]>
  : Arr['length'];

// @JavanShen
type Triangular<
  N extends number,
  P extends number[] = [],
  A extends number[] = []
> =
  // N extends P['length'] same but I have some mental gap where how you set that instruction can give you other results
  P['length'] extends N
  ? A['length']
  : Triangular<N, [0, ...P], [...A, ...P, 0]>;

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
];
