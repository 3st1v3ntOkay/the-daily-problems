// my try + @santoshi Trim type for help
type Trim<
  T extends string,
  U extends string = " " | "\t",
> = T extends
  | `${infer F}${U}`
  | `${U}${infer F}`
  ? Trim<F>
  : T;

type StringHelper = "let" | "const" | "var";

type OutputStruc = {
  declared: [];
  used: [];
}

export type AnalyzeScope<
  T extends string,
  Declared extends string[] = [],
  Used extends string[] = [],
  Output extends Record<string, string[]> = OutputStruc,
> = T extends `${infer F}\n${infer R}`
  ? Trim<F> extends `${StringHelper} ${infer ID} = ${string}`
  ? AnalyzeScope<
    R,
    [...Declared, ID],
    [...Used],
    {
      declared: [...Declared, ID];
      used: [...Used];
    }
  >
  : Trim<F> extends `${string}(${infer Arg});`
  ? AnalyzeScope<
    R,
    [...Declared],
    [...Used, Arg],
    {
      declared: [...Declared];
      used: [...Used, Arg];
    }
  >
  : AnalyzeScope<R, [...Declared], [...Used], Output>
  : Output;
