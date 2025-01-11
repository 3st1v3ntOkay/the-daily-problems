type TypesAllowed = number | string;

type TRoute<TValue> =
  TValue extends TypesAllowed
  ? TValue
  : never;

export const createRoute = <Route>(
  author: string,
  route: TRoute<Route>,
): TRoute<Route> => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);

  return route;
}
