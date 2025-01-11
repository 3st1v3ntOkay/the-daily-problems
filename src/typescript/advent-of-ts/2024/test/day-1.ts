import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { Demand } from "../day-1";

type t0_actual = Demand;
type t0_expected = number;

type t0 = Expect<Equal<t0_actual, t0_expected>>;
