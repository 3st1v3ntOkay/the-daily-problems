import type { Equal, Expect } from "@type-challenges/utils";

type Cases = '';
type myCapitalizeWords<
  S extends string,
  StrRes extends string = ''
> =
  S extends `${infer first}${Cases}${infer rest}`
  ? myCapitalizeWords<rest>
  : StrRes;

// @zhaoyao91
type CapitalizeWords<
  S extends string,
  W extends string = ''
> =
  S extends `${infer A}${infer B}`
  ? Uppercase<A> extends Lowercase<A>
  ? `${Capitalize<`${W}${A}`>}${CapitalizeWords<B>}`
  : CapitalizeWords<B, `${W}${A}`>
  : Capitalize<W>;

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
];
