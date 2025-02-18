import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type MyAwaited<T extends Promise<any>> =
  T extends Promise<infer U>
  ? U extends Promise<any>
  ? MyAwaited<U>
  : U
  : never;

type MyAwaitedLike<T extends PromiseLike<any>> =
  T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
  ? MyAwaitedLike<U>
  : U
  : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaitedLike<X>, string>>,
  Expect<Equal<MyAwaitedLike<Y>, { field: number }>>,
  Expect<Equal<MyAwaitedLike<Z>, string | number>>,
  Expect<Equal<MyAwaitedLike<Z1>, string | boolean>>,
  Expect<Equal<MyAwaitedLike<T>, number>>,
];

// @ts-expect-error
type error = MyAwaitedLike<number>;
