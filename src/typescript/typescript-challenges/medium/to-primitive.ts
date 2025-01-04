import type { Equal, Expect } from '@type-challenges/utils';

type myToPrimitive<
  T extends Record<string, any>
> = {
    [key in keyof T]: myToPrimitive<T[key]>
  }

// @BOCbMOU
type ToPrimitive<T> =
  T extends object ? (
    T extends (...args: never[]) => unknown ? Function : {
      [Key in keyof T]: ToPrimitive<T[Key]>
    }
  ) : (
    T extends { valueOf: () => infer P } ? P : T
  )

type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
  readonlyArr: readonly ['test']
  fn: () => any
}

type ExpectedResult = {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
  readonlyArr: readonly [string]
  fn: Function
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
];
