// some help from @UeberTimei
export type RemoveNaughtyChildren<A extends object> = {
  [key in keyof A as key extends `naughty_${string}`
  ? never
  : key
  ]: A[key]
}
