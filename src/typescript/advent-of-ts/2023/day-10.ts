export type StreetSuffixTester<
  TString1 extends string,
  TString2 extends string,
> =
  TString1 extends `${string}${TString2}`
  ? true
  : false;
