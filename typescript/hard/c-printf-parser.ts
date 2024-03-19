import type { Equal, Expect } from "@type-challenges/utils";

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type Result<
  Check extends string,
  Obj extends object
> = {
    [key in keyof Obj as key extends Check ? key : never]: Obj[key]
  }

type myParsePrintFormat<
  T extends string,
  ArrRes extends string[] = []
> =
  T extends `${string}%${infer check}`
  ? check extends '%'
  ? myParsePrintFormat<check>
  : Result<check, ControlsMap>
  : ArrRes;

// @uid11
type ParsePrintFormat<S extends string> =
  S extends `${infer Start}%${infer Letter}${infer Rest}`
  ? (Letter extends keyof ControlsMap
    ? [ControlsMap[Letter], ...ParsePrintFormat<Rest>]
    : ParsePrintFormat<Rest>)
  : [];

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
];
