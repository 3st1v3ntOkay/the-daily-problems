type TArray = readonly any[];

// a little help from @dan-lee
export type SantasList<
  FirstArray extends TArray,
  SecondArray extends TArray,
> =
  [...FirstArray, ...SecondArray];
