import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myDropString<
  S extends string,
  R extends string
> =
  S extends `${infer FPart}${R}${infer rest}`
  ? `${FPart}${myDropString<rest, R>}`
  : S;

// @pandanoir
type DropString<
  S extends string,
  R extends string
> =
  S extends `${infer x}${infer xs}`
  ? R extends `${string}${x}${string}`
  ? DropString<xs, R>
  : `${x}${DropString<xs, R>}`
  : "";

type cases = [
  Expect<Equal<DropString<"butter fly!", "">, "butter fly!">>,
  Expect<Equal<DropString<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropString<"butter fly!", "but">, "er fly!">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">>,
  Expect<Equal<DropString<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "tub">, "     e r f l y ! ">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>,
];
