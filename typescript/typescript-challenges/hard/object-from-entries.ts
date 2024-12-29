import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myObjectFromEntries<T> =
  T extends [infer key, ...infer value]
  ? {
    key: value
  }
  : {};

// @AlexeyDuybo
type ObjectFromEntries<T extends [string, any]> = {
  [key in T[0]]: T extends [key, any] ? T[1] : never
}

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ["name", string] | ["age", number] | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
];
