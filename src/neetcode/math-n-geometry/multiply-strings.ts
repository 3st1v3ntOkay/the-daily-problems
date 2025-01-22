import { LogTests } from "@/utils/log-tests";

function multiply(num1: string, num2: string): string {
  return "1";
}

// test zone
const inputA1: string = "2";
const inputB1: string = "3";

const test1: string = multiply(inputA1, inputB1);

const inputA2: string = "2";
const inputB2: string = "3";

const test2: string = multiply(inputA2, inputB2);

const tests: string[] = [
  test1,
  test2,
];

LogTests(tests);
