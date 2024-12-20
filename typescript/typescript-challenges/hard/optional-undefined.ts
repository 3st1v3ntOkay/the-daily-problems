import type { Equal, Expect } from "@type-challenges/utils";

type myOptionalUndefined<
  T,
  Props extends keyof T = keyof T
> = {
    [key in keyof T as key extends Props
    ? key
    : never]: T[key]
  }

// @jiangshanmeta
type Merge<T> = {
  [K in keyof T]: T[K]
}

type OptionalUndefined<
  T,
  Props extends keyof T = keyof T,
  OptionsProps extends keyof T =
  Props extends keyof T
  ? undefined extends T[Props] ? Props : never
  : never
> =
  Merge<{
    [K in OptionsProps]?: T[K]
  } & {
      [K in Exclude<keyof T, OptionsProps>]: T[K]
    }>

type cases = [
  Expect<Equal<OptionalUndefined<{ value: string | undefined }, 'value'>, { value?: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string, desc: string }, 'value'>, { value: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }, 'value'>, { value?: string | undefined, desc: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value' | 'desc'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }>, { value?: string, desc?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }, 'value'>, { value?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
];
