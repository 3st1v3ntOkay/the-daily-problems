import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type Changer<Str extends PropertyKey> =
  Str extends `${infer FPart}_${infer Rest}`
  ? `${FPart}${Changer<Capitalize<Rest>>}`
  : Str;

type myCamelize<T extends object> = {
  [key in keyof T as Changer<key>]: T[key] extends object
  ? myCamelize<T[key]>
  : T[key]
}

// @danvk
type CamelizeStr<T extends PropertyKey> =
  T extends `${infer Start}_${infer Rest}`
  ? `${Start}${Capitalize<CamelizeStr<Rest>>}`
  : T;

type Camelize<T> =
  T extends any[]
  ? {
    [K in keyof T]: Camelize<T[K]>
  }
  : {
    [K in keyof T as CamelizeStr<K>]: Camelize<T[K]>
  }

type cases = [
  Expect<Equal<
    Camelize<{
      some_prop: string
      prop: { another_prop: string }
      array: [
        { snake_case: string },
        { another_element: { yet_another_prop: string } },
        { yet_another_element: string },
      ]
    }>,
    {
      someProp: string
      prop: { anotherProp: string }
      array: [
        { snakeCase: string },
        { anotherElement: { yetAnotherProp: string } },
        { yetAnotherElement: string },
      ]
    }
  >>,
];
