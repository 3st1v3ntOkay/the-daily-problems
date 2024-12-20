import type { Equal, Expect } from "@type-challenges/utils";

type myIsPalindrome<T extends string | number> =
  T extends `${infer left}${infer middle}${infer right}`
  ? left extends right
  ? myIsPalindrome<middle>
  : false
  : true;

// @jiangshanmeta
type StringToTuple<T extends string> =
  T extends `${infer F}${infer R}`
  ? [F, ...StringToTuple<R>]
  : [];

type IsPalindromeArray<T extends any[]> =
  T extends [infer R, ...infer M, infer L]
  ? R extends L
  ? IsPalindromeArray<M>
  : false
  : true;

type IsPalindrome<T extends string | number> = IsPalindromeArray<StringToTuple<`${T}`>>

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abba'>, true>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<2332>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
];
