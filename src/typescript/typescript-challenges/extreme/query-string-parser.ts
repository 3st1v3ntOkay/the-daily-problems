import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myParseQueryString<Query extends string> =
  Query extends `${infer FirstKey}&${infer restKeys}`
  ? FirstKey extends `${infer Key}=${infer Value}`
  ? {
    "set the Key here": Value
  } & myParseQueryString<restKeys>
  : {
    "set the FirstKey here": true
  } & myParseQueryString<restKeys>
  : {};

// @MajorLift
type ParseQueryString<S extends string> =
  S extends ""
  ? {}
  : MergeParams<SplitParams<S>>;

// e.g. "k1=v1&k2=v2&k2=v3&k1" => ["k1=v1", "k2=v2", "k2=v3", "k1"]
type SplitParams<S extends string> =
  S extends `${infer E}&${infer Rest}`
  ? [E, ...SplitParams<Rest>]
  : [S];

// e.g. ["k1=v1", "k2=v2", "k2=v3", "k1"] 
// => { k1: "v1" } => { k1: "v1", k2: ["v2", "v3"] } => { k1: ["v1", true], k2: ["v2", "v3"] }
type MergeParams<
  T extends string[],
  M = {}
> =
  T extends [infer E, ...infer Rest extends string[]]
  ? E extends `${infer K}=${infer V}`
  ? MergeParams<Rest, SetProperty<M, K, V>>
  : E extends `${infer K}`
  ? MergeParams<Rest, SetProperty<M, K>>
  : never
  : M;

// e.g. {} => { K: V }, { K: V1 } => { K: [V1, V] }, { K1: V1 } => { K1: V1, K: V }
type SetProperty<
  T,
  K extends PropertyKey,
  V extends any = true
> = {
    [P in keyof T | K]: P extends K
    ? P extends keyof T // duplicate key exists
    ? T[P] extends V ? T[P] // duplicate k-v pair: no change
    : T[P] extends any[] // existing value is a tuple
    // append new value only if it doesn"t already exist in the tuple 
    ? V extends T[P][number] ? T[P] : [...T[P], V]
    : [T[P], V] // reassign value to tuple initialized with existing and new value
    : V // no duplicate key -> assign new k-v pair
    : P extends keyof T
    ? T[P]
    : never;
  }

type cases = [
  Expect<Equal<ParseQueryString<"">, {}>>,
  Expect<Equal<ParseQueryString<"k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k2">, { k1: true, k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1">, { k1: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v2">, { k1: ["v1", "v2"] }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v2">, { k1: "v1", k2: "v2" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v2&k1=v2">, { k1: ["v1", "v2"], k2: "v2" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2">, { k1: "v1", k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v1">, { k1: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v2&k1=v1">, { k1: ["v1", "v2"] }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v1&k1=v2&k1=v1">, { k1: ["v1", "v2"], k2: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v2&k1=v2&k1=v3">, { k1: ["v1", "v2", "v3"], k2: "v2" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1">, { k1: ["v1", true] }>>,
  Expect<Equal<ParseQueryString<"k1&k1=v1">, { k1: [true, "v1"] }>>,
];
