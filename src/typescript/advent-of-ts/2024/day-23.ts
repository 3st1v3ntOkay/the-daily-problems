// @kana-sama solution
declare const _lazy_: unique symbol;
export type Lazy<F, X> = typeof _lazy_ & [F, X];

declare const _push_: unique symbol;
export type Push = typeof _push_;

declare const _extends_: unique symbol;
export type Extends = typeof _extends_;

declare const _filter_: unique symbol;
export type Filter = typeof _filter_;

declare const _apply_all_: unique symbol;
export type ApplyAll = typeof _apply_all_;

declare const _cap_: unique symbol;
export type Cap = typeof _cap_;

type FilterTuple<Xs, F> =
  Xs extends [infer X, ...infer Xs]
  ? Apply<F, X> extends true
  ? [X, ...FilterTuple<Xs, F>]
  : FilterTuple<Xs, F>
  : [];

export type Apply<F, X> =
  [F, X] extends [Lazy<Push, infer X>, [...infer Xs]]
  ? [...Xs, X]
  : F extends Lazy<Extends, infer T>
  ? X extends T
  ? true
  : false
  : F extends Lazy<Filter, infer F>
  ? FilterTuple<X, F>
  : F extends Lazy<ApplyAll, infer F>
  ? {
    [i in keyof X]: Apply<F, X[i]>
  }
  : [F, X] extends [Cap, infer S extends string]
  ? Capitalize<S>
  : Lazy<F, X>;
