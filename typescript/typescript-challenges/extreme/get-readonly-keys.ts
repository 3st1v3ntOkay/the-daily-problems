import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myGetReadonlyKeys<
  T extends object,
  KeyArray extends string[] = []
> = {
  readonly [key in keyof T]: T[key]
} extends {
    [key in keyof T]: T[key]
  }
  ? never
  : never;

// @dqn + @ZhanghaoH
type CustomEqual<X, Y> =
  (<T>() => T extends X
    ? 1 : 2) extends <T>() => T extends Y
      ? 1
      : 2
  ? true
  : false;

// you could change "-readonly" to "readonly" but change the "true" to "false", it's the same thing but put readonly for each key instead of remove the readonly
type GetReadonlyKeys<T extends Record<string, any>> = {
  // [P in keyof Required<T>]: CustomEqual<{ [k in P]: T[k] }, { readonly [R in P]: T[R] }> extends false ...
  [P in keyof Required<T>]: CustomEqual<{ [k in P]: T[k] }, { -readonly [R in P]: T[R] }> extends true
  ? never
  : P
}[keyof T];

type cases = [
  Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>,
];

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}
