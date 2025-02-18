import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { DecipherNaughtyList } from "../day-14";

// test 1
type test_0_actual = DecipherNaughtyList<"timmy/jimmy">;
type test_0_expected = "jimmy" | "timmy";

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type test_1_actual = DecipherNaughtyList<"elliot">;
type test_1_expected = "elliot";

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type test_2_actual = DecipherNaughtyList<"melkey/prime/theo/trash">;
type test_2_expected = "melkey" | "prime" | "theo" | "trash";

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
