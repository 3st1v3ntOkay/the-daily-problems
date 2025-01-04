import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type InmutableKeys<TObject extends object> = {
  readonly [key in keyof TObject]: TObject[key]
}

type myMutableKeys<TObject extends object> = {
  [key in keyof TObject as key extends `readonly key` ? never : key]: TObject[key]
}

// @Sun79 + @dimitropoulos
type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type MutableKeys<TObject extends object> = keyof {
  [key in keyof TObject as MyEqual<
    { [secondKey in key]: TObject[key] },
    { readonly [secondKey in key]: TObject[key] }
  > extends true
  ? never : key]: never;
}

type cases = [
  Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, "a">>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, "a">>,
  Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
  Expect<Equal<MutableKeys<{}>, never>>,
];
