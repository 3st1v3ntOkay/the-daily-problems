// @santoshi solution
type Prettify<T> = {
  [K in keyof T]: Prettify<T[K]>
}

type Trim<T extends string, U extends string = " " | "\t" | "\n" | ","> = T extends
  | `${infer F}${U}`
  | `${U}${infer F}`
  ? Trim<F>
  : T;

export type Parse<
  T extends string,
  _Trimmed extends string = Trim<T>
> = Prettify<
  _Trimmed extends `{${infer U}}`
  ? ParseObjectContent<U>
  : _Trimmed extends `[${infer U}]`
  ? ParseArrayContent<U>
  : _Trimmed extends `${infer P extends number | boolean | null}`
  ? P
  : ParseString<_Trimmed>
>;

type EscapeCharMap = {
  r: "\r";
  n: "\n";
  b: "\b";
  f: "\f"
}

type HandleEscapeChar<
  T extends string,
  _Res extends string = "",
> = T extends `${infer F}\\${infer Char extends keyof EscapeCharMap}${infer R}`
  ? HandleEscapeChar<R, `${_Res}${F}${EscapeCharMap[Char]}`>
  : `${_Res}${T}`;

type ParseString<T extends string> =
  T extends `"${infer U}"`
  ? HandleEscapeChar<U>
  : T;

// parses string between "[" and "]"
type ParseArrayContent<
  T extends string,
  _Acc extends any[] = [],
  _Trimmed extends string = Trim<T>,
> = _Trimmed extends `{${infer F}}${infer R}` // checks for nested objects. Should do the same for nested arrays, but test cases don't have them
  ? ParseArrayContent<R, [..._Acc, ParseObjectContent<F>]>
  : _Trimmed extends `${infer F},${infer R}`
  ? ParseArrayContent<R, [..._Acc, Parse<F>]>
  : Parse<_Trimmed> extends ""
  ? _Acc
  : [..._Acc, Parse<_Trimmed>];

// parses string between "{" and "}"
type ParseObjectContent<
  T extends string,
  _Acc extends Record<PropertyKey, any> = {},
  _Trimmed extends string = Trim<T>,
> = _Trimmed extends `${infer K}:${infer V}`
  ? Trim<V> extends `[${infer V}]${infer R}` // checks for nested arrays. Should do the same for nested objects, but test cases don't have them
  ? ParseObjectContent<
    R,
    _Acc & {
      [Key in K as ParseString<Key>]: ParseArrayContent<V>;
    }
  >
  : V extends `${infer V},${infer R}`
  ? ParseObjectContent<R, _Acc & { [Key in K as ParseString<Key>]: Parse<V> }>
  : _Acc & {
    [Key in K as ParseString<Key>]: Parse<V>;
  }
  : _Acc;
