import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type {
  Apply,
  ApplyAll,
  Cap,
  Extends,
  Filter,
  Push,
} from "../day-23";

// test 1
type t0_actual = Apply<Cap, "hello">;
type t0_expected = "Hello";

type t0 = Expect<Equal<t0_actual, t0_expected>>;

// test 2
type t1_actual = Apply<

  Apply<Push, "world">,
  ["hello"]
>;

type t1_expected = ["hello", "world"];

type t1 = Expect<Equal<t1_actual, t1_expected>>;

// test 3
type t2_actual = Apply<

  Apply<ApplyAll, Cap>,
  Apply<Apply<Push, "world">, ["hello"]>
>;

type t2_expected = ["Hello", "World"];

type t2 = Expect<Equal<t2_actual, t2_expected>>;

// test 4
type t3_actual = Apply<
  Apply<Filter, Apply<Extends, number>>,
  [1, "foo", 2, 3, "bar", true]
>;

type t3_expected = [1, 2, 3];

type t3 = Expect<Equal<t3_actual, t3_expected>>;

// test 5
type Station1 = Apply<Cap, "robot">;

type Station2 = Apply<Apply<Push, Station1>, ["Tablet", "teddy bear"]>;

type Station3 = Apply<
  Apply<Filter, Apply<Extends, Apply<Cap, string>>>,
  Station2
>;

type t4_actual = Station3;
type t4_expected = ["Tablet", "Robot"];

type t4 = Expect<Equal<t4_actual, t4_expected>>;
