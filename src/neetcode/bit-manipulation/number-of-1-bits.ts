import { LogTests } from "@/utils/log-tests";

function ExampleLog(
  inputN: number,
  inputOutput: number,
): void {
  console.log(`-----------------------------------`);

  console.log(`n value: ${inputN}`);
  console.log(`output value: ${inputOutput}`);
}

// @neetcode
function hammingWeight(n: number): number {
  let output: number = 0;

  while (n) {
    output += n % 2;
    n = n >> 1;
  }

  return output;
}

// @neetcode
function hammingWeightAlt1(n: number): number {
  let output: number = 0;

  while (n) {
    n &= (n - 1);
    output += 1;
  }

  return output;
}

// @neetcode
function hammingWeightAlt2(n: number): number {
  return n.toString(2).split("0").join("").length;
}

// test zone
const input1: number = 11;
const input2: number = 128;
const input3: number = 2147483645;

const test1 = hammingWeight(input1);
const test2 = hammingWeight(input2);
const test3 = hammingWeight(input3);

const test4 = hammingWeightAlt1(input1);
const test5 = hammingWeightAlt1(input2);
const test6 = hammingWeightAlt1(input3);

const test7 = hammingWeightAlt2(input1);
const test8 = hammingWeightAlt2(input2);
const test9 = hammingWeightAlt2(input3);

const tests: number[] = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
];

LogTests(tests);
