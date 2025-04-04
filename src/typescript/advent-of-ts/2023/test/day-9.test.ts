import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { Reverse } from "../day-9";

// test 1
type test_0_actual = Reverse<"rehsaD">;
type test_0_expected = "Dasher";

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type test_1_actual = Reverse<"recnaD">;
type test_1_expected = "Dancer";

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type test_2_actual = Reverse<"recnarP">;
type test_2_expected = "Prancer";

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

// test 4
type test_3_actual = Reverse<"nexiV">;
type test_3_expected = "Vixen";

type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;

// test 5
type test_4_actual = Reverse<"temoC">;
type test_4_expected = "Comet";

type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;

// test 6
type test_5_actual = Reverse<"dipuC">;
type test_5_expected = "Cupid";

type test_5 = Expect<Equal<test_5_expected, test_5_actual>>;

// test 7
type test_6_actual = Reverse<"rennoD">;
type test_6_expected = "Donner";

type test_6 = Expect<Equal<test_6_expected, test_6_actual>>;

// test 8
type test_7_actual = Reverse<"neztilB">;
type test_7_expected = "Blitzen";

type test_7 = Expect<Equal<test_7_expected, test_7_actual>>;

// test 9
type test_8_actual = Reverse<"hploduR">;
type test_8_expected = "Rudolph";

type test_8 = Expect<Equal<test_8_expected, test_8_actual>>;
