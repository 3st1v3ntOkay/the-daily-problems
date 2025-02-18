// my solution works but it has an error
type MyDecipherNaughtyList<
  Input extends string,
  Output extends string[] = [],
> =
  Input extends `${infer A}/${infer Rest}`
  ? MyDecipherNaughtyList<Rest, [...Output, A]>
  : (keyof Output)[number]; // error oever here

// @yangxin9003
export type DecipherNaughtyList<T extends string> =
  T extends `${infer P1}/${infer P2}`
  ? P1 | DecipherNaughtyList<P2>
  : T;
