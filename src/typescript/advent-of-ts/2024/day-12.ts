// @sgrishchenko
type NaughtyOrNice<
  T extends string,
  Result = "naughty",
> = T extends `${infer Head}${infer Rest}`
  ? NaughtyOrNice<Rest, Result extends "naughty" ? "nice" : "naughty">
  : Result;

export type FormatNames<
  T extends [string, string, string][],
> = {
    [K in keyof T]: T[K] extends [
      infer Name extends string,
      string,
      `${infer Count extends number}`,
    ]
    ? {
      name: Name;
      count: Count;
      rating: NaughtyOrNice<Name>;
    }
    : never;
  }
