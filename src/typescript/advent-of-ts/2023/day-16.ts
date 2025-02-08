// my try
type CheckElements<
  Input extends string[],
  X extends 0[],
  Y extends 0[],
> =
  Input extends [
    infer First,
    ...infer Rest extends string[]
  ]
  ? First extends "🎅🏼"
  ? [X, Y]
  : CheckElements<Rest, [...X, 0], Y>
  : [];

type MyFindSanta<
  Input extends string[][],
  X extends 0[] = [],
  Y extends 0[] = [],
> =
  Input extends [
    infer First extends string[],
    ...infer Rest extends string[][]
  ]
  ? CheckElements<First, X, Y>["length"] extends 0
  ? MyFindSanta<
    Rest,
    X,
    [...Y, 0]
  >
  : [X, Y]
  : never;

// @santoshi
type ParseInt<T> =
  T extends `${infer N extends number}`
  ? N
  : never;

export type FindSanta<T extends Array<string[]>> = [
  {
    [N in keyof T]: ParseInt<"🎅🏼" extends T[N][number]
      ? N
      : never
    >
  }[number],
  {
    [N in keyof T[number]]: ParseInt<"🎅🏼" extends T[number][N]
      ? N
      : never
    >
  }[keyof T[number]]
];
