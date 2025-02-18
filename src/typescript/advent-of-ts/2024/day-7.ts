// my attemp
type Demo<
  TRoute extends string[],
  Store extends string[] = [],
> =
  TRoute extends [
    infer First extends string,
    ...infer Rest extends string[]
  ]
  ? Demo<[...Rest], [...Store, First]>
  : Store;

// thanks to @FuzeTox: https://www.youtube.com/@FuzeTox
export const createRoute = <
  T extends string,
  Route extends [T, ...T[]],
>(
  author: string,
  route: Route
) => ({
  author,
  route,
  createdAt: Date.now(),
});
