import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type mySplit<
  S extends string,
  SEP extends string,
  ArrRes extends string[] = []
> =
  S extends `${infer first}${SEP}${infer rest}`
  ? mySplit<rest, SEP, [...ArrRes, first]>
  : ArrRes;

// @milletlovemouse
type Split<
  T extends string,
  SEP extends string = never
> =
  T extends `${infer P}${SEP}${infer L}`
  ? [P, ...Split<L, SEP>]
  : T extends `${infer _}`
  ? T extends SEP ? [] : [T]
  : string[];

type cases = [
  Expect<Equal<Split<"Hi! How are you?">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", "">, ["H", "i", "!", " ", "H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", "?"]>>,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"The sine in cosine", "in">, ["The s", "e ", " cos", "e"]>>,
  Expect<Equal<Split<"Never say never, forever and ever.", "ver">, ["Ne", " say ne", ", fore", " and e", "."]>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<"">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>,
];
