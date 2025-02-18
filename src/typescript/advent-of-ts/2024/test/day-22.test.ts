import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { Parse } from "../day-22";

// test 1
type t0_actual = Parse<
  `{
    "a": 1, 
    "b": false, 
    "c": [
      true,
      false,
      "hello",
      {
        "a": "b",
        "b": false
      },
    ],
    "nil": null,
  }`
>;

type t0_expected = {
  a: 1
  b: false
  c: [true, false, "hello", {
    a: "b"
    b: false
  }]
  nil: null
}

type t0 = Expect<Equal<t0_actual, t0_expected>>;

// test 2
type t1_actual = Parse<"1">
type t1_expected = 1;

type t1 = Expect<Equal<t1_actual, t1_expected>>;

// test 3
type t2_actual = Parse<"{}">
type t2_expected = {};

type t2 = Expect<Equal<t2_actual, t2_expected>>;

// test 4
type t3_actual = Parse<"[]">
type t3_expected = [];

type t3 = Expect<Equal<t3_actual, t3_expected>>;

// test 5
type t4_actual = Parse<"[1]">;
type t4_expected = [1];

type t4 = Expect<Equal<t4_actual, t4_expected>>;

// test 6
type t5_actual = Parse<"true">
type t5_expected = true;

type t5 = Expect<Equal<t5_actual, t5_expected>>;

// test 7
type t6_actual = Parse<`["Hello", true, false, null]`>;
type t6_expected = ["Hello", true, false, null];

type t6 = Expect<Equal<t6_actual, t6_expected>>;

// test 8
type t7_actual = Parse<`{
  "hello\\r\\n\\b\\f": "world",
}`>;

type t7_expected = {
  "hello\r\n\b\f": "world",
}

type t7 = Expect<Equal<t7_actual, t7_expected>>;

// test 9
type t8_actual = Parse<`{ 1: "world" }`>;

type t8_expected = {
  1: "world"
}

type t8 = Expect<Equal<t8_actual, t8_expected>>;

// test 10
type t9_actual = Parse<`{
  "altitude": 123,
  "warnings": [
    "low_fuel",\t\n
    "strong_winds",
  ],
}`>;

type t9_expected = {
  altitude: 123;
  warnings: ["low_fuel", "strong_winds"];
}

type t9 = Expect<Equal<t9_actual, t9_expected>>;
