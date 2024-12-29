import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myFormat<T extends string> =
  T extends `${infer part1}%${infer rest}`
  ? never
  : string;

// @myNameIsDu
interface MapDict {
  s: string;
  d: number;
}

type Format<T extends string> =
  T extends `${string}%${infer M}${infer R}`
  ? M extends keyof MapDict
  ? (x: MapDict[M]) => Format<R>
  : Format<R>
  : string;

type cases = [
  Expect<Equal<Format<"abc">, string>>,
  Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
  Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%%dbc">, string>>,
  Expect<Equal<Format<"a%%%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>,
];
