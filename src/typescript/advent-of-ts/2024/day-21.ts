/* my try (it doesn't work):

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
    scope: {
      declared: [];
      used: [];
    },
    unused: [];
  }

  type MakeItReadable = Record<string, string[] | Record<string, string[]>>;

  type UnusedVariables<
    T1 extends string[],
    T2 extends unknown,
    Output extends string[] = []
  > =
    T1 extends [
      infer F extends string,
      ...infer Rest extends string[]
    ]
    ? F extends T2
    ? UnusedVariables<Rest, T2, [...Output]>
    : UnusedVariables<Rest, T2, [...Output, F]>
    : Output;

  type Lint<
    T extends string,
    Declared extends string[] = [],
    Used extends string[] = [],
    Output extends MakeItReadable = OutputStruc,
  > = T extends `${infer F}\n${infer R} `
    ? Trim<F> extends `${StringHelper} ${infer ID} = ${string} `
    ? Lint<
      R,
      [...Declared, ID],
      [...Used],
      {
        scope: {
          declared: [...Declared, ID];
          used: [...Used];
        },
        unused: UnusedVariables<Declared, Used[number]>;
      }
    >
    : Trim<F> extends `${string} (${infer Arg}); `
    ? Lint<
      R,
      [...Declared],
      [...Used, Arg],
      {
        scope: {
          declared: [...Declared];
          used: [...Used, Arg];
        },
        unused: UnusedVariables<Declared, Used[number]>;
      }
    >
    : Lint<R, [...Declared], [...Used], Output>
    : Output;
*/

// @santoshi solution + some own modification
type StringHelper = "let" | "const" | "var";

type Trim<
  T extends string,
  U extends string = " " | "\t",
> = T extends
  | `${infer F}${U}`
  | `${U}${infer F}`
  ? Trim<F>
  : T;

type Filter<
  T extends string[],
  D extends string,
> = T extends [
  infer F extends string,
  ...infer R extends string[],
]
  ? F extends D
  ? Filter<R, D>
  : [F, ...Filter<R, D>]
  : [];

export type Lint<
  T extends string,
  _Declared extends string[] = [],
  _Used extends string[] = [],
> = T extends `${infer F}\n${infer R}`
  ? Trim<F> extends `${StringHelper} ${infer I} = ${string}`
  ? Lint<R, [..._Declared, I], _Used>
  : Trim<F> extends `${string}(${infer Arg});`
  ? Lint<R, _Declared, [..._Used, Arg]>
  : Lint<R, _Declared, _Used>
  : {
    scope: {
      declared: _Declared;
      used: _Used;
    };
    unused: Filter<_Declared, _Used[number]>;
  };
