import type { Equal, Expect } from "@type-challenges/utils";

type myDeepPick<
  Obj extends object,
  Key extends string
> =
  Key extends `${infer FKey}.${infer RKey}`
  ? {
    [key in keyof Obj as FKey extends key
    ? key
    : never]: Obj[key] extends object
    ? myDeepPick<Obj[key], RKey>
    : Obj[key]
  }
  : unknown;

// @
type TypeGet<T, Paths> =
  Paths extends `${infer A}.${infer B}`
  ? A extends keyof T
  ? {
    [K in A]: TypeGet<T[A], B>
  }
  : never
  : Paths extends keyof T
  ? {
    [K in Paths]: T[Paths]
  }
  : never;

type UnionToIntercetion<U> =
  (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => any)
  ? I
  : never;

type DeepPick<T, PathUnion extends string> =
  UnionToIntercetion<PathUnion extends infer Keys ? TypeGet<T, Keys> : never>

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }>>,
];
