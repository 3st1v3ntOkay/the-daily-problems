import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type myClassPublicKeys<ClassType> = {
  [key in keyof ClassType]: ClassType[key]
}

// @dimitropoulos
type ClassPublicKeys<ClassType> = keyof ClassType;

class A {
  public str: string;
  protected num: number;
  private bool: boolean;

  constructor() {
    this.str = "naive";
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random();
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, "str" | "getNum">>,
];
