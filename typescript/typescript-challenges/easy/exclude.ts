// 43 - Exclude #18522 -> https://github.com/type-challenges/type-challenges/issues/18522

// Explicacion/Explanation -> https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type MyExclude<T extends any, U extends any> =
  T extends U ? never : T;

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
];
