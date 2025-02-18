import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import { survivalRatio } from "../day-4";

const start = survivalRatio(2009);
type t0_actual = typeof start;
type t0_expected = number;
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const now = survivalRatio(2024);
type t1_actual = typeof now;
type t1_expected = number;
type t1 = Expect<Equal<t1_actual, t1_expected>>;

// We can pass strings like `"2009 Q2"`:

const q1_2009 = survivalRatio("2009 Q1");
type t2_actual = typeof q1_2009;
type t2_expected = number;
type t2 = Expect<Equal<t2_actual, t2_expected>>;

const q2_2024 = survivalRatio("2024 Q2");
type t3_actual = typeof q2_2024;
type t3_expected = number;
type t3 = Expect<Equal<t3_actual, t3_expected>>;

// Other data types are not allowed by TypeScript:

// @ts-expect-error
survivalRatio(true);

// @ts-expect-error
survivalRatio([1]);

// @ts-expect-error
survivalRatio({ 1: 1 });
