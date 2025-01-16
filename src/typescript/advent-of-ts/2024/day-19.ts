/* my try (it doesn't work):

  type Helper = "let" | "const" | "var";

  type MyParse<
    T extends string,
    Output extends Record<string, string>[] = []
  > =
    T extends `${Helper} ${infer ID} = ${string};${infer Rest}`
    ? MyParse<
      Rest,
      [
        ...Output,
        {
          id: ID;
          type: "VariableDeclaration";
        },
      ]
    >
    : T extends `${string}(${infer Argument});${infer Rest}`
    ? MyParse<
      Rest,
      [
        ...Output,
        {
          argument: Argument;
          type: "CallExpression";
        }
      ]
    >
    : Output;
*/

// @santoshi solution + some own modification
type Trim<
  T extends string,
  U extends string = " " | "\t",
> = T extends
  | `${infer F}${U}`
  | `${U}${infer F}`
  ? Trim<F>
  : T;

type StringHelper = "let" | "const" | "var";

export type Parse<
  T extends string,
  _Res extends Record<string, string>[] = [],
> = T extends `${infer F}\n${infer R}`
  ? Trim<F> extends `${StringHelper} ${infer ID} = ${string}`
  ? Parse<
    R,
    [
      ..._Res,
      { id: ID; type: "VariableDeclaration"; }
    ]
  >
  : Trim<F> extends `${string}(${infer Arg});`
  ? Parse<
    R,
    [
      ..._Res,
      { argument: Arg; type: "CallExpression"; }
    ]
  >
  : Parse<R, _Res>
  : _Res;
