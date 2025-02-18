import type { Equal, Expect } from '@type-challenges/utils';

type myParseUrlParams<
  T extends string,
  Stringy extends string = '',
  Acum extends string[] = [],
> =
  T extends `${infer first}${infer rest}`
  ? ':' extends first
  ? '/' extends `${string}${string}${string}`
  ? myParseUrlParams<rest, `${Stringy}`, [...Acum, Stringy]>
  : myParseUrlParams<rest, `${Stringy}${first}`>
  : myParseUrlParams<rest>
  : Acum["length"] extends 0
  ? never
  : Acum[number];

// @jiaowoxiaobala
type ParseUrlParams<
  T extends string,
> =
  T extends `${infer _}:${infer R}`
  ? R extends `${infer A}/${infer B}`
    ? A | ParseUrlParams<B>
    : R
  : never;

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
];
