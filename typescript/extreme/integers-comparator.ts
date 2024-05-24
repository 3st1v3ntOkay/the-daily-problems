/**
 * Implement a type-level integers comparator. We've provided an enum for indicating the comparison result, like this:
 * 
 * If a is greater than b, type should be Comparison.Greater.
 * If a and b are equal, type should be Comparison.Equal.
 * If a is lower than b, type should be Comparison.Lower.
 * 
 * Note that a and b can be positive integers or negative integers or zero, even one is positive while another one is negative.
 */

import type { Equal, Expect } from "@type-challenges/utils";

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type ArrayLenght<
  Input extends number,
  Array extends 0[] = []
> =
  Array["length"] extends Input
  ? Array
  : ArrayLenght<Input, [...Array, 0]>;

// if left is greater than right is Comparison.Greater
// if right is greater than left is Comparison.Lower
type myComparator<A extends number, B extends number> =
  A extends B
  ? Comparison.Equal
  : never;

// @Alexsey
type Comparator<
  A extends number | string,
  B extends number | string
> =
  `${A}` extends `-${infer AbsA}`
  ? `${B}` extends `-${infer AbsB}`
  ? ComparePositives<AbsB, AbsA>
  : Comparison.Lower
  : `${B}` extends `-${number}`
  ? Comparison.Greater
  : ComparePositives<`${A}`, `${B}`>;

// Compares two positive long numbers
type ComparePositives<
  A extends string,
  B extends string,
  ByLength = CompareByLength<A, B>
> =
  ByLength extends Comparison.Equal
  ? CompareByDigits<A, B>
  : ByLength;

// Compares two strings by length
type CompareByLength<
  A extends string,
  B extends string
> =
  A extends `${infer AF}${infer AR}`
  ? B extends `${infer BF}${infer BR}`
  ? CompareByLength<AR, BR>
  : Comparison.Greater
  : B extends `${infer BF}${infer BR}`
  ? Comparison.Lower
  : Comparison.Equal;

// Compares two positive long numbers of the same length
type CompareByDigits<
  A extends string,
  B extends string
> =
  `${A}|${B}` extends `${infer AF}${infer AR}|${infer BF}${infer BR}`
  ? CompareDigits<AF, BF> extends Comparison.Equal
  ? CompareByDigits<AR, BR>
  : CompareDigits<AF, BF>
  : Comparison.Equal;

// Compares two digits
type CompareDigits<
  A extends string,
  B extends string
> =
  A extends B
  ? Comparison.Equal
  : '0123456789' extends `${string}${A}${string}${B}${string}`
  ? Comparison.Lower
  : Comparison.Greater;

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,

  Expect<Equal<Comparator<1, 100>, Comparison.Lower>>,
  Expect<Equal<Comparator<100, 1>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, 1>, Comparison.Lower>>,
  Expect<Equal<Comparator<1, -100>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, -1>, Comparison.Lower>>,
  Expect<Equal<Comparator<-1, -100>, Comparison.Greater>>,

  // Extra tests if you like to challenge yourself!
  Expect<Equal<Comparator<9007199254740992, 9007199254740992>, Comparison.Equal>>,
  Expect<Equal<Comparator<-9007199254740992, -9007199254740992>, Comparison.Equal>>,
  Expect<Equal<Comparator<9007199254740991, 9007199254740992>, Comparison.Lower>>,
  Expect<Equal<Comparator<9007199254740992, 9007199254740991>, Comparison.Greater>>,
  Expect<Equal<Comparator<-9007199254740992, -9007199254740991>, Comparison.Lower>>,
  Expect<Equal<Comparator<-9007199254740991, -9007199254740992>, Comparison.Greater>>,
];
