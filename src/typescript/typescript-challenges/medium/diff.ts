// it doesn't work but I was so close, or I think so 😗
type myDiff<
  O extends Record<string, Primitive>,
  O1 extends Record<string, Primitive>
> = {
    [key in keyof O1]: key extends keyof O
    ? never
    : O1[key];
  };

// @mefengl: https://github.com/type-challenges/type-challenges/issues/3014
type Diff<
  O extends Record<string, Primitive>,
  O1 extends Record<string, Primitive>
> = {
    [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K];
  };

// here @MuYunyun explains with more detail how this works: https://github.com/type-challenges/type-challenges/issues/3014

import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]