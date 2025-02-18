import { LogTests } from "@/utils/log-tests";

function missingNumber(nums: number[]): number {

}

// test zone
const input1: number[] = [3, 0, 1];
const input2: number[] = [0, 1];
const input3: number[] = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const test1: number = missingNumber(input1);
const test2: number = missingNumber(input2);
const test3: number = missingNumber(input3);

const tests: number[] = [
  test1,
  test2,
  test3,
];

LogTests(tests);
