import type {
  Equal,
  Expect,
} from "@type-challenges/utils";


/** The core parser type **/
export type Parse<A extends Parser, B> = ReturnType<A & { 0?: B }>;

/** Tries each parser in order until one succeeds **/
export interface Choice {
  <G extends readonly Parser[]>(g: this extends { 0?: infer G extends readonly Parser[] } ? G : G): DoChoice<typeof g>;
}

interface DoChoice<G extends readonly Parser[]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S)
    : string extends typeof s ? MaybeResult : DoneChoice<G, typeof s>;
}

type DoneChoice<G, S extends string> = G extends readonly [infer H extends Parser, ...infer T]
  ? [ParseResult<H, S>] extends [Ok<`${infer R}`, infer Data>]
  ? Ok<R, Data>
  : DoneChoice<T, S>
  : Err<S>;

/** Matches the end of input **/
export interface EOF {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneEOF<typeof s>;
}

type DoneEOF<S extends string> = S extends "" ? Ok<"", ""> : Err<S>;

/** Matches exactly one character/token **/
export interface Just {
  <J extends Parser | readonly unknown[] | string>(j: this extends { 0?: infer J extends Parser | readonly unknown[] | string } ? J : J)
    : DoJust<typeof j>;
}

interface DoJust<J extends Parser | readonly unknown[] | string> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneJust<J, typeof s>;
}

type DoneJust<J, S extends string> = S extends `${infer H}${infer T}`
  ? [J] extends [Parser]
  ? Parse<J, H> extends Ok<string> ? Ok<T, H> : Err<S>
  : [J] extends [readonly unknown[]]
  ? [H] extends [J[number]] ? Ok<T, H> : Err<S>
  : [H] extends [J] ? Ok<T, H> : Err<S>
  : Err<S>;

/** Matches the left parser **/
export interface Left {
  <D extends readonly [Parser, Parser]>(d: this extends { 0?: infer D extends readonly [Parser, Parser] } ? D : D): DoLeft<typeof d>;
}

interface DoLeft<D extends readonly [Parser, Parser]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneLeft<D, typeof s>;
}

type DoneLeft<D extends readonly [Parser, Parser], S extends string>
  = [ParseResult<D[0], S>] extends [Ok<`${infer R1}`, infer D1>]
  ? [ParseResult<D[1], R1>] extends [Ok<`${infer R2}`>] ? Ok<R2, D1> : Err<S>
  : Err<S>;

/** Matches zero or more of the parser **/
export interface Many0 { <P extends Parser>(p: this extends { 0?: infer P extends Parser } ? P : P): DoMany0<typeof p> }

interface DoMany0<P extends Parser> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneMany0<P, Ok<typeof s, []>>;
}

type DoneMany0<P extends Parser, O extends Ok<string, unknown[]>>
  = [ParseResult<P, O["rest"]>] extends [Ok<`${infer Rest}`, infer Data>]
  ? DoneMany0<P, Ok<Rest, [...O["data"], Data]>>
  : O;

/** Matches one or more of the parser **/
export interface Many1 {
  <P extends Parser>(p: this extends { 0?: infer P extends Parser } ? P : P): DoMany1<typeof p>
}

interface DoMany1<P extends Parser> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneMany1<P, typeof s>;
}

type DoneMany1<P extends Parser, S extends string>
  = [ParseResult<P, S>] extends [Ok<`${infer Rest}`, infer Data>]
  ? string extends Rest ? Err<S> : DoneMany0<P, Ok<Rest, [Data]>>
  : Err<S>;

/** Maps the parsed data using the provided mapper **/
export interface MapResult {
  <M extends readonly [Parser, ...Mapper[]]>(m: this extends { 0?: infer M extends readonly [Parser, ...Mapper[]] } ? M : M): DoMapResult<typeof m>;
}

interface DoMapResult<M extends readonly [Parser, ...Mapper[]]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneMapResult<M, typeof s>;
}

type DoneMapResult<M extends readonly [Parser, ...Mapper[]], S extends string>
  = M extends readonly [infer P extends Parser, ...infer M extends Mapper[]]
  ? [ParseResult<P, S>] extends [Ok<`${infer R}`, infer D>] ? DoneMapResultRest<Ok<R, D>, M> : Err<S>
  : Err<S>;

type DoneMapResultRest<Result extends MaybeResult, M extends readonly Mapper[]> = Result extends { success: true }
  ? M extends readonly [infer H extends Mapper, ...infer T extends Mapper[]]
  ? DoneMapResultRest<Ok<Result["rest"], ReturnType<({ data: Result["data"] } & H)["map"]>>, T>
  : Result
  : never;

/** A mapper is a function that transforms the parsed data **/
interface Mapper {
  data: unknown;
  map: Parser;
}

/** Matches zero or one of the parser **/
export interface Maybe {
  <P extends Parser>(p: this extends { 0?: infer P extends Parser } ? P : P): DoMaybe<typeof p>
}

interface DoMaybe<P extends Parser> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneMaybe<P, typeof s>;
}

type DoneMaybe<P extends Parser, S extends string> = [ParseResult<P, S>] extends [Ok<`${infer R}`, infer D>] ? Ok<R, D> : Ok<S, "">;

/** A result type for parsers that may fail **/
interface MaybeResult {
  data: unknown;
  rest: string;
  success: boolean;
}

/** Matches none of the characters/tokens **/
export interface NoneOf {
  <N extends Parser | readonly unknown[] | string>(n: this extends { 0?: infer N extends Parser | readonly unknown[] | string } ? N : N)
    : DoNoneOf<typeof n>;
}

interface DoNoneOf<N extends Parser | readonly unknown[] | string> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s
    ? MaybeResult
    : DoneNoneOf<N, typeof s>;
}

type DoneNoneOf<N, S extends string> = S extends `${infer H}${infer T}`
  ? [N] extends [Parser]
  ? Parse<N, H> extends Ok<string> ? Err<S> : Ok<T, H>
  : [N] extends [readonly unknown[]]
  ? [H] extends [N[number]] ? Err<S> : Ok<T, H>
  : [H] extends [N] ? Err<S> : Ok<T, H>
  : Err<S>;

/** Matches two parsers in sequence **/
export interface Pair {
  <D extends readonly [Parser, Parser]>(d: this extends { 0?: infer D extends readonly [Parser, Parser] } ? D : D): DoPair<typeof d>;
}

interface DoPair<D extends readonly [Parser, Parser]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s
    ? MaybeResult
    : DonePair<D, typeof s>;
}

type DonePair<D extends readonly [Parser, Parser], S extends string>
  = [ParseResult<D[0], S>] extends [Ok<`${infer R1}`, infer D1>]
  ? [ParseResult<D[1], R1>] extends [Ok<`${infer R2}`, infer D2>] ? Ok<R2, [D1, D2]> : Err<S>
  : Err<S>;

/** A parser is a function that attempts to parse an input string **/
type Parser = (...args: any) => any;

/** Matches the right parser **/
export interface Right {
  <D extends readonly [Parser, Parser]>(d: this extends { 0?: infer D extends readonly [Parser, Parser] } ? D : D): DoRight<typeof d>;
}

interface DoRight<D extends readonly [Parser, Parser]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneRight<D, typeof s>;
}

type DoneRight<D extends readonly [Parser, Parser], S extends string>
  = [ParseResult<D[0], S>] extends [Ok<`${infer R1}`, any>]
  ? [ParseResult<D[1], R1>] extends [Ok<`${infer R2}`, infer D2>] ? Ok<R2, D2> : Err<S>
  : Err<S>;

/** Matches zero or more of the parser separated by the separator parser **/
export interface SepBy0 {
  <D extends readonly [Parser, Parser]>(d: this extends { 0?: infer D extends readonly [Parser, Parser] } ? D : D): DoSepBy0<typeof d>;
}

interface DoSepBy0<D extends readonly [Parser, Parser]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s ? MaybeResult : DoneSepBy0<D, typeof s>;
}

type DoneSepBy0<D extends readonly [Parser, Parser], S extends string>
  = [ParseResult<D[0], S>] extends [Ok<`${infer Rest}`, infer Data>] ? DoneSepBy0Rest<D, Ok<Rest, [Data]>> : Ok<S, []>;

type DoneSepBy0Rest<P extends readonly [Parser, Parser], O extends Ok<string, unknown[]>>
  = [ParseResult<P[1], O["rest"]>] extends [Ok<`${infer R1}`>]
  ? [ParseResult<P[0], R1>] extends [Ok<`${infer R2}`, infer D2>] ? DoneSepBy0Rest<P, Ok<R2, [...O["data"], D2]>> : O
  : O;

/** Matches two parsers in sequence **/
export interface Seq {
  <G extends readonly Parser[]>(g: this extends { 0?: infer G extends readonly Parser[] } ? G : G): DoSeq<typeof g>;
}

interface DoSeq<G extends readonly Parser[]> {
  <S extends string>(s: this extends { 0?: `${infer S}` } ? S : S): string extends typeof s
    ? MaybeResult
    : DoneSeq<G, Ok<typeof s, []>, typeof s>;
}

type DoneSeq<G extends readonly Parser[], O extends Ok<string, unknown[]>, S extends string>
  = G extends readonly [infer H extends Parser, ...infer T extends Parser[]]
  ? [ParseResult<H, O["rest"]>] extends [Ok<`${infer Rest}`, infer Data>] ? DoneSeq<T, Ok<Rest, [...O["data"], Data]>, S> : Err<S>
  : O;

/** Helpers **/
interface Ok<Rest extends string, Data = unknown> extends MaybeResult {
  data: Data;
  rest: Rest;
  success: true;
}

interface Err<Rest extends string> extends MaybeResult {
  data: "";
  rest: Rest;
  success: false;
}

type ParseResult<A extends Parser, B> = A extends (...args: any) => MaybeResult
  ? Parse<A, B>
  : Parse<Parse<A, B>, B>;

/** Alternative versions **/
type ParseFn = <A extends Parser, B>(a: A, b: B) => Parse<A, B>;

type ParseResultFn = <A extends Parser, B>(a: A, b: B) => ParseResult<A, B>;

// test 1
type t0_actual = Parse<JSONParser, '"hello"'>["data"];
type t0_expected = "hello";
type t0 = Expect<Equal<t0_actual, t0_expected>>;

// test 2
type t1_actual = Parse<JSONParser, '"hello\nworld"'>["data"];
type t1_expected = "hello\nworld";
type t1 = Expect<Equal<t1_actual, t1_expected>>;

// test 3
type t2_actual = Parse<JSONParser, '{"hello": "world"}'>["data"];
type t2_expected = { hello: "world" };
type t2 = Expect<Equal<t2_actual, t2_expected>>;

// test 4
type t3_actual = Parse<JSONParser, '[1, "hello", null, 4, "world"]'>["data"];
type t3_expected = [1, "hello", null, 4, "world"];
type t3 = Expect<Equal<t3_actual, t3_expected>>;

// test 5
type t4_actual = Parse<JSONParser, '{ "a": { "b": "c" } }'>["data"];
type t4_expected = { a: { b: "c" } };
type t4 = Expect<Equal<t4_actual, t4_expected>>;

// test 6
type t5_actual = Parse<
  JSONParser,
  '[{ "foo": "bar" }, { "foo": "baz" }, { "foo": 123 }]'
>["data"];
type t5_expected = [{ foo: "bar" }, { foo: "baz" }, { foo: 123 }];
type t5 = Expect<Equal<t5_actual, t5_expected>>;

// test 7
type t6_actual = Parse<JSONParser, "[1, 2, 3">["success"];
type t6_expected = false;
type t6 = Expect<Equal<t6_actual, t6_expected>>;

// test 8
type t7_actual = Parse<JSONParser, "{ foo: 123 }">["success"];
type t7_expected = false;
type t7 = Expect<Equal<t7_actual, t7_expected>>;

// test 9
type t8_actual = Parse<JSONParser, "{">["success"];
type t8_expected = false;
type t8 = Expect<Equal<t8_actual, t8_expected>>;

// test 10
type t9_actual = Parse<JSONParser, "[1, 2, 3,]">["success"];
type t9_expected = false;
type t9 = Expect<Equal<t9_actual, t9_expected>>;

// test 11
type t10_actual = Parse<JSONParser, "\\,">["success"];
type t10_expected = false;
type t10 = Expect<Equal<t10_actual, t10_expected>>;

// base parsers
type Whitespace = " " | "\t" | "\n";

type Whitespace0 = Parse<Many0, Parse<Just, Whitespace>>;

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Digits0 = Parse<Many0, Parse<Just, Digit>>;
type Digits1 = Parse<Many1, Parse<Just, Digit>>;

type Between<L extends Parser, R extends Parser, P extends Parser> = Parse<
  Left,
  [Parse<Right, [L, P]>, R]
>;

type Str<
  T extends string,
  Acc extends Parser[] = [],
> = T extends `${infer Head}${infer Rest}`
  ? Str<Rest, [...Acc, Parse<Just, Head>]>
  : Parse<MapResult, [Parse<Seq, Acc>, Join]>;

type Padded<P extends Parser> = Parse<Left, [P, Whitespace0]>;

type Sym<T extends string> = Padded<Str<T>>;

type JSONParser = Between<Whitespace0, EOF, JSONValueParser>;

type JSONValueParser = () => Padded<
  Parse<
    Choice,
    [
      JSONNullParser,
      JSONBooleanParser,
      JSONStringParser,
      JSONNumberParser,
      JSONArrayParser,
      JSONObjectParser,
    ]
  >
>;

// `null`
type JSONNullParser = Parse<MapResult, [Str<"null">, ToLiteral<null>]>;

// boolean
type JSONBooleanParser = Parse<
  Choice,
  [
    Parse<MapResult, [Str<"true">, ToLiteral<true>]>,
    Parse<MapResult, [Str<"false">, ToLiteral<false>]>,
  ]
>;

// string
type JSONStringParser = Parse<
  MapResult,
  [
    Between<
      Parse<Just, '"'>,
      Parse<Just, '"'>,
      Parse<
        Many0,
        Parse<
          Choice,
          [
            Parse<NoneOf, '"' | "\\">,
            Parse<
              Right,
              [
                Parse<Just, "\\">,
                Parse<
                  Choice,
                  [
                    Parse<Just, "\\">,
                    Parse<Just, "/">,
                    Parse<Just, '"'>,
                    Parse<MapResult, [Parse<Just, "b">, ToLiteral<"\u0008">]>,
                    Parse<MapResult, [Parse<Just, "f">, ToLiteral<"\u000c">]>,
                    Parse<MapResult, [Parse<Just, "n">, ToLiteral<"\n">]>,
                    Parse<MapResult, [Parse<Just, "r">, ToLiteral<"\r">]>,
                    Parse<MapResult, [Parse<Just, "t">, ToLiteral<"\t">]>,
                  ]
                >,
              ]
            >,
          ]
        >
      >
    >,
    Join,
  ]
>;

// number
type JSONNumberParser = Parse<
  MapResult,
  [
    Parse<
      Seq,
      [
        Parse<Maybe, Parse<Just, "-">>,
        Parse<
          Choice,
          [
            Parse<Just, "0">,
            Parse<Pair, [Parse<Just, Exclude<Digit, "0">>, Digits0]>,
          ]
        >,
        Parse<Maybe, Parse<Pair, [Parse<Just, ".">, Digits1]>>,
      ]
    >,
    UnwrapMaybe,
    Flatten,
    Join,
    StringToNumber,
  ]
>;

// array
type JSONArrayParser = Between<
  Sym<"[">,
  Sym<"]">,
  Parse<SepBy0, [JSONValueParser, Sym<",">]>
>;

// object
type JSONObjectParser = Between<
  Sym<"{">,
  Sym<"}">,
  Parse<
    MapResult,
    [
      Parse<
        SepBy0,
        [
          Parse<
            MapResult,
            [
              Parse<
                Pair,
                [
                  Parse<Left, [Padded<JSONStringParser>, Sym<":">]>,
                  JSONValueParser,
                ]
              >,
              MakeObject,
            ]
          >,
          Sym<",">,
        ]
      >,
      IntersectAll,
    ]
  >
>;

// mappers
interface ToLiteral<T> extends Mapper {
  map: () => T;
}

interface Flatten extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends unknown[] ? DoFlatten<typeof data> : never;
}

type DoFlatten<Array extends readonly unknown[]> = Array extends [
  infer Head,
  ...infer Rest,
]
  ? Head extends readonly unknown[]
  ? [...DoFlatten<Head>, ...DoFlatten<Rest>]
  : [Head, ...DoFlatten<Rest>]
  : [];

interface UnwrapMaybe extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends unknown[] ? DoUnwrapMaybe<typeof data> : never;
}

type DoUnwrapMaybe<
  T extends unknown[],
  Acc extends unknown[] = [],
> = T extends [infer Head, ...infer Rest]
  ? DoUnwrapMaybe<
    Rest,
    Head extends MaybeResult
    ? Head extends { success: true; data: infer Data }
    ? [...Acc, Data]
    : Acc
    : [...Acc, Head]
  >
  : Acc;

interface StringToNumber extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends string ? DoStringToNumber<typeof data> : never;
}

type DoStringToNumber<T extends string> = T extends `${infer N extends number}`
  ? N
  : never;

interface MakeObject extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends [PropertyKey, unknown]
    ? { [Key in (typeof data)[0]]: (typeof data)[1] }
    : never;
}

interface IntersectAll extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends object[] ? DoIntersectAll<typeof data> : never;
}

type DoIntersectAll<T extends object[], Acc extends object = {}> = T extends [
  infer Head,
  ...infer Rest extends object[],
]
  ? DoIntersectAll<Rest, Acc & Head>
  : Omit<Acc, never>;

export interface Join extends Mapper {
  map: (
    data: this["data"],
  ) => typeof data extends string[] ? DoJoin<typeof data> : never;
}

type DoJoin<T extends string[], Acc extends string = ""> = T extends [
  infer Head extends string,
  ...infer Rest extends string[],
]
  ? DoJoin<Rest, `${Acc}${Head}`>
  : Acc;

type DigitParser = Parse<Just, Digit>;
type IntParser = Parse<
  MapResult,
  [Parse<Many1, DigitParser>, Join, StringToNumber]
>;

type t11_actual = Parse<IntParser, "123.4ff">;
type t11_expected = {
  data: 123;
  rest: ".4ff";
  success: true;
};
type t11 = Expect<Equal<t11_actual, t11_expected>>;
