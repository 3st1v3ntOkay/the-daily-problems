import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { AnalyzeScope } from "../day-20";

// test 1
type t0_actual = AnalyzeScope<`
  let teddyBear = "standard_model";
`>;

type t0_expected = {
  declared: ["teddyBear"];
  used: [];
}

type t0 = Expect<Equal<t0_actual, t0_expected>>;

// test 2
type t1_actual = AnalyzeScope<`
  buildToy(teddyBear);
`>;

type t1_expected = {
  declared: [];
  used: ["teddyBear"];
}

type t1 = Expect<Equal<t1_actual, t1_expected>>;

// test 3
type t2_actual = AnalyzeScope<`
  let robotDog = "deluxe_model";
  assembleToy(robotDog);
`>;

type t2_expected = {
  declared: ["robotDog"];
  used: ["robotDog"];
}

type t2 = Expect<Equal<t2_actual, t2_expected>>;

// test 4
type t3_actual = AnalyzeScope<`
  let robotDog = "standard_model";
  const giftBox = "premium_wrap";
    var ribbon123 = "silk";
  
  \t
  wrapGift(giftBox);
  \r\n
      addRibbon(ribbon123);
`>;

type t3_expected = {
  declared: ["robotDog", "giftBox", "ribbon123"];
  used: ["giftBox", "ribbon123"];
}

type t3 = Expect<Equal<t3_actual, t3_expected>>;

// test 5
type t4_input = "\n\t\r \t\r ";
type t4_actual = AnalyzeScope<t4_input>;

type t4_expected = {
  declared: [];
  used: [];
}

type t4 = Expect<Equal<t4_actual, t4_expected>>;
