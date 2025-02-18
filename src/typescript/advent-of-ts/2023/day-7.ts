export type AppendGood<A extends object> = {
  [key in keyof A as `good_${key & string}`]: A[key]
}
