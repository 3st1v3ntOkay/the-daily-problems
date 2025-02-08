export type BoxToys<
  Word extends string,
  Number extends number,
  Counter extends 0[] = [],
  Output extends string[] = [],
> =
  Number extends Counter["length"]
  ? Output
  : BoxToys<
    Word,
    Number,
    [...Counter, 0],
    [...Output, Word]
  >;
