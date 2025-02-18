import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { SantasFavoriteCookies } from "../day-1";

type test_0_actual = SantasFavoriteCookies;
type test_0_expected = "ginger-bread" | "chocolate-chip";

type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;
