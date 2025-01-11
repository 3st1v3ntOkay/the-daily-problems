import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type {
  Names,
} from "./data/day-12.data"

// @sgrishchenko
type NaughtyOrNice<
  T extends string,
  Result = "naughty",
> = T extends `${infer Head}${infer Rest}`
  ? NaughtyOrNice<Rest, Result extends "naughty" ? "nice" : "naughty">
  : Result;

type FormatNames<
  T extends [string, string, string][],
> = {
    [K in keyof T]: T[K] extends [
      infer Name extends string,
      string,
      `${infer Count extends number}`,
    ]
    ? {
      name: Name;
      count: Count;
      rating: NaughtyOrNice<Name>;
    }
    : never;
  }

type t0_actual = FormatNames<Names>["length"];
type t0_expected = 31682;

type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = FormatNames<Names>[0];
type t1_expected = {
  name: "Liam",
  count: 20802,
  rating: "naughty" // even number of characters in the name get "naughty"
}

type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = FormatNames<Names>[11194];
type t2_expected = {
  name: "Yanni",
  count: 19,
  rating: "nice" // odd number of characters in the name get "nice"
}

type t2 = Expect<Equal<t2_actual, t2_expected>>;

type t3_actual = FormatNames<Names>[2761];
type t3_expected = {
  name: "Petra",
  count: 148,
  rating: "nice"
}

type t3 = Expect<Equal<t3_actual, t3_expected>>;

type t4_actual = FormatNames<Names>[31680];
type t4_expected = {
  name: "Aala",
  count: 5,
  rating: "naughty"
}

type t4 = Expect<Equal<t4_actual, t4_expected>>;

type t5_actual = FormatNames<Names>[31681];
type t5_expected = {
  name: "Aagya",
  count: 5,
  rating: "nice"
}

type t5 = Expect<Equal<t5_actual, t5_expected>>;
