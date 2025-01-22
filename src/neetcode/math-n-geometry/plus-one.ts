import { LogTests } from "@/utils/log-tests";

// my solution fails for big numbers, i should use bigint instead of number
function myPlusOne(digits: number[]): number[] {
  let newDigits: string = "";

  for (const digit of digits) {
    newDigits += `${digit}`;
  }

  let newNumber: number = Number(newDigits);
  let semiOutput: number = newNumber + 1;

  let output: number[] = [];

  for (const digit of `${semiOutput}`) {
    output = [...output, Number(digit)];
  }

  return output;
}

function plusOne(digits: number[]): number[] {
  if (digits.length === 0) {
    return [1];
  }

  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;

    return digits;
  } else {
    return [
      ...plusOne(digits.slice(0, digits.length - 1)),
      0
    ];
  }
}

// test zone
const input: number[] = [4, 3, 2, 1];

const test1: number[] = plusOne(input);

const tests: number[][] = [
  test1,
];

LogTests(tests);
