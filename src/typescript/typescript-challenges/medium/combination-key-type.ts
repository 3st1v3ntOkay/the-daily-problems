import type { Equal, Expect } from "@type-challenges/utils";

type Combs<T extends any[]> =
  T extends [
    infer first extends string,
    ...infer rest extends string[]
  ]
  ? `${first} ${rest[number]}` | Combs<rest> // just a few help with 'rest[number]' from @linjunc
  : never;

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn'];
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn';

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
];
