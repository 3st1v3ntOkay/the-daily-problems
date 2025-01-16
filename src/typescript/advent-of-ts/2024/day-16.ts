/* my try (it doesn't work):

  type CustomParameters<TSome> =
    TSome extends (...args: infer Args) => any
    ? Args
    : never;

  type CustomReturnType<TSome> =
    TSome extends (...args: any) => infer Returning
    ? Returning
    : never;

  declare function DynamicParamsCurrying<
    TArgs extends (...args: any[]) => any
  >(
    ...args: Parameters<TArgs>
  ): ReturnType<TArgs>;
*/

// @satohshi solution
export declare function DynamicParamsCurrying<
  TOriginalArg extends unknown[],
  TReturn,
>(
  fn: (...args: TOriginalArg) => TReturn,
): <TCalledArgs extends unknown[]>(
  ...args: TCalledArgs
) => TOriginalArg extends [
  ...TCalledArgs,
  ...infer RestArgs]
    ? ReturnType<typeof DynamicParamsCurrying<RestArgs, TReturn>>
    : TReturn;
