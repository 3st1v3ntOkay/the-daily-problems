// some help from @yangxin9003
type TypeSantaListProtector = Record<string, unknown> | unknown[];

export type SantaListProtector<Input extends TypeSantaListProtector> = {
  readonly [key in keyof Input]: Input[key] extends TypeSantaListProtector
  ? SantaListProtector<Input[key]>
  : Input[key]
}
