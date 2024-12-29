import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

/* 
type myEnum<
  T extends readonly string[],
  N extends boolean = false,
  Counter extends 0[] = []
> =
  N extends false
  ? T extends [infer TKey, ...infer rest]
  ? {
      readonly Capitalize<TKey> : Tkey
    } & myEnum<rest, N>
    : { }
    : T extends [infer TKey, ...infer rest]
  ? {
    readonly Capitalize<TKey> : Counter["length"]
    } & myEnum<rest, N, [...Counter, 0]>
    : { };
*/

// @uid11
type TupleKeys<
  T extends readonly unknown[]
> =
  T extends readonly [
    infer Head,
    ...infer Tail
  ]
  ? TupleKeys<Tail> | Tail["length"]
  : never;

type Enum<
  T extends readonly string[],
  N extends boolean = false
> = {
    readonly [K in TupleKeys<T> as Capitalize<T[K]>]: N extends true ? K : T[K]
  };

const OperatingSystem = ["macOS", "Windows", "Linux"] as const;
const Command = ["echo", "grep", "sed", "awk", "cut", "uniq", "head", "tail", "xargs", "shift"] as const;

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<Equal<
    Enum<typeof OperatingSystem>,
    {
      readonly MacOS: "macOS"
      readonly Windows: "Windows"
      readonly Linux: "Linux"
    }
  >>,
  Expect<Equal<
    Enum<typeof OperatingSystem, true>,
    {
      readonly MacOS: 0
      readonly Windows: 1
      readonly Linux: 2
    }
  >>,
  Expect<Equal<
    Enum<typeof Command>,
    {
      readonly Echo: "echo"
      readonly Grep: "grep"
      readonly Sed: "sed"
      readonly Awk: "awk"
      readonly Cut: "cut"
      readonly Uniq: "uniq"
      readonly Head: "head"
      readonly Tail: "tail"
      readonly Xargs: "xargs"
      readonly Shift: "shift"
    }
  >>,
  Expect<Equal<
    Enum<typeof Command, true>,
    {
      readonly Echo: 0
      readonly Grep: 1
      readonly Sed: 2
      readonly Awk: 3
      readonly Cut: 4
      readonly Uniq: 5
      readonly Head: 6
      readonly Tail: 7
      readonly Xargs: 8
      readonly Shift: 9
    }
  >>,
];
