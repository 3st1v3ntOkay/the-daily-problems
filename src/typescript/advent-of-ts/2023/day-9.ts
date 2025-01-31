export type Reverse<
  TString extends string,
  Output extends string = ""
> =
  TString extends `${infer LastChar}${infer RestChars}`
  ? Reverse<RestChars, `${LastChar}${Output}`>
  : Output;
