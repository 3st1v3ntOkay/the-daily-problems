// my try
type MyDayCounter<
  InputA extends number,
  InputB extends number,
  Counter extends 0[] = [0],
> =
  InputB extends Counter["length"]
  ? InputA | MyDayCounter<[...Counter, 0]["length"], InputB>
  : never;

// @satoshi
export type DayCounter<
  Start extends number,
  End extends number,
  _Count extends number[] = [],
> = `${Start}` extends keyof [..._Count, never]
  ? `${End}` extends keyof _Count
  ? _Count[number]
  : DayCounter<Start, End, [..._Count, _Count["length"]]>
  : DayCounter<Start, End, [..._Count, never]>;
