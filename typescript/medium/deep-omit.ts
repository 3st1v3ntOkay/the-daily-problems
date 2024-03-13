import type { Equal, Expect } from '@type-challenges/utils';

type myDeepOmit<
  Obj extends object,
  Key extends keyof Obj
> = {
    [key in keyof Obj as key extends Key ? never : key]: Obj[key]
  }

// @jiangshanmeta
type DeepOmit<
  T,
  Keys
> = {
    [K in keyof T as K extends Keys ? never : K]:
    K extends Keys
    ? never
    : Keys extends `${infer F}.${infer R}`
    ? K extends F
    ? DeepOmit<T[K], R>
    : T[K]
    : T[K]
  }

type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string, age: {} } }>>,
];
