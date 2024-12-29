import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myTyper<
  F,
  S
> =
  S extends `${infer first}${infer rest}`
  ? rest extends ""
  ? first
  : `${first}${F}${myTyper<F, rest>}`
  : "";

declare function myjoin<
  First,
  Second
>(delimiter: First): (...parts: Second[]) => myTyper<First, Second>

// @uid11
type Tuple = readonly string[];

type Tail<T extends Tuple> =
  T extends readonly [infer Head, ...infer Rest]
  ? Rest
  : [];

type Join<
  T extends Tuple,
  Separator extends string
> =
  T extends readonly []
  ? ""
  : T extends readonly [infer Head]
  ? Head
  : `${T[0]}${Separator}${Join<Tail<T>, Separator>}`;

declare function join<D extends string>(delimiter: D): <P extends Tuple>(...parts: P) => Join<P, D>;

// Edge cases
const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

// Regular cases
const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type cases = [
  Expect<Equal<typeof noCharsOutput, "">>,
  Expect<Equal<typeof oneCharOutput, "a">>,
  Expect<Equal<typeof noDelimiterOutput, "abc">>,
  Expect<Equal<typeof twoCharOutput, "a-b">>,
  Expect<Equal<typeof hyphenOutput, "a-b-c">>,
  Expect<Equal<typeof hashOutput, "a#b#c">>,
  Expect<Equal<typeof longOutput, "a-b-c-d-e-f-g-h">>,
];
