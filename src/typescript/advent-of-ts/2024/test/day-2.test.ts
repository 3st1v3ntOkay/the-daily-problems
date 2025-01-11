import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { Demand } from "../day-2";

type t0_actual = Demand;
type t0_expected = 900_000;

type t0 = Expect<Equal<t0_actual, t0_expected>>;

// @ts-expect-error
type e0 = Expect<Equal<Demand, number>>;
