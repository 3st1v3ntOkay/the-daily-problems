// my try
type OwnGetRoute<
  T extends string,
  Output extends [string, number][] = [],
  Counter extends 0[] = [],
> =
  T extends `${infer Place}-${infer Rest}`
  ? Place extends "-"
  ? OwnGetRoute<
    Rest,
    [[Place, Counter["length"]]],
    [...Counter, 0]
  >
  : OwnGetRoute<
    Rest,
    [[Place, Counter["length"]]],
    []
  >
  : Output;

export type GetRoute<
  T extends string,
  _Result extends [string, number][] = [],
  _Acc extends "-"[] = [],
  _Count extends number = _Result["length"] extends 0 ? 0 : _Acc["length"],
> =
  T extends ""
  ? _Result
  : T extends `-${infer A}`
  ? GetRoute<A, _Result, [..._Acc, "-"]>
  : T extends `${infer B}-${infer C}`
  ? GetRoute<C, [..._Result, [B, _Count]], ["-"]>
  : [..._Result, [T, _Count]];
