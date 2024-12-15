type Obj = {
  id: string
  name: string
  age: number
}

type Example = ExtractStringKeys<Obj>;
// type Example2 = "id" | "name" | never; 


//* Level 1
// type ExtractStringKeys<TObj> = {
//   [key in keyof TObj]: TObj[key] extends string
//     ? key
//     : never
// }[keyof TObj];


//* Level 2
// type ValuesOf<T> = T[keyof T];
// type ExtractStringKeys<TObj> = ValuesOf<{
//   [key in keyof TObj]: TObj[key] extends string
//     ? key
//     : never
// }>;


//* Level 3
type ExtractStringKeys<TObj> = ExtracKeysWhereValuesAreOfType<TObj, string>

type ValuesOf<T> = T[keyof T];
type ExtracKeysWhereValuesAreOfType<TObj, Condition> = ValuesOf<{
  [key in keyof TObj]: TObj[key] extends Condition
    ? key
    : never
}>;