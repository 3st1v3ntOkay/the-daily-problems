import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import {
  compose,
  firstChar,
  firstItem,
  lowerCase,
  makeBox,
  makeTuple,
  upperCase,
} from "../day-17";

const t0 = compose(upperCase, makeTuple, makeBox)("hello!").value[0];

type t0_actual = typeof t0;
type t0_expected = "HELLO!";

type t0_test = Expect<Equal<t0_actual, t0_expected>>;

const t1 = compose(makeTuple, firstItem, makeBox)("hello!" as const).value;

type t1_actual = typeof t1;
type t1_expected = "hello!";

type t1_test = Expect<Equal<t1_actual, t1_expected>>;

const t2 = compose(upperCase, firstChar, lowerCase)("hello!");

type t2_actual = typeof t2;
type t2_expected = "h";

type t2_test = Expect<Equal<t2_actual, t2_expected>>;