// React using TypeScript, Don't use {} as a type. {: https://stackoverflow.com/questions/66773897/react-using-typescript-dont-use-as-a-type

// Good to know: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

type myAnyOf<T extends readonly any[]> =
  T extends [infer first, ...infer rest]
  ? true
  : false;

// Good to know: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
type Falsy =
  null
  | undefined
  | false
  // | NaN <- research how to make a NaN type
  | 0
  | -0
  | 0n
  | "";

// @deftliang: https://github.com/type-challenges/type-challenges/issues/1795
// Note: [] and {} are not falsy values but I think in this problem its consider because both are empty
type otherFalsy =
  | false
  | 0
  | ''
  | []
  | Record<string, never>
  // | { [key: string]: never }
  | null
  | undefined

type AnyOf<T extends readonly unknown[]> =
  T extends otherFalsy[] ? false : true

import type { Equal, Expect } from '@type-challenges/utils'

// If you are using eslint with typescript:
// https://typescript-eslint.io/rules/ban-types/

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]