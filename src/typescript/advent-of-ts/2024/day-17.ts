// @sgrishchenko solution + some own modification
type TFirstChar<TValue extends string> =
  TValue extends `${infer FirstChar}${string}`
  ? FirstChar
  : never;

type TFirstItem<TValue extends unknown[]> =
  TValue extends [infer FirstItem, ...unknown[]]
  ? FirstItem
  : never;

export const compose = <A, B, C, R>(
  f: (arg: A) => B,
  g: (arg: B) => C,
  h: (arg: C) => R,
) => (a: A) => (
  h(g(f(a)))
);

export const upperCase = <T extends string>(x: T) => x.toUpperCase() as Uppercase<T>;

export const lowerCase = <T extends string>(x: T) => x.toLowerCase() as Lowercase<T>;

export const firstChar = <T extends string>(x: T) => x[0] as TFirstChar<T>;

export const firstItem = <T extends unknown[]>(x: T) => x[0] as TFirstItem<T>;

export const makeTuple = <T>(x: T): [T] => [x];

export const makeBox = <T>(value: T): { value: T } => ({ value });
