// @DimitarNestorov solution
export type FilterChildrenBy<A, B> =
  A extends B
  ? never
  : A;
