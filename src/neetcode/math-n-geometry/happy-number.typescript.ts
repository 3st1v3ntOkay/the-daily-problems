import { LogTests } from "@/utils/log-tests";

// @NeetCode
function isHappy(n: number): boolean {
  const visit = new Set<number>();

  while (!visit.has(n)) {
    visit.add(n);
    n = sumOfSquares(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
}

function sumOfSquares(n: number): number {
  let output: number = 0;

  while (n > 0) {
    let digit = n % 10;
    output += (digit * digit);

    n = Math.floor(n / 10);
  }

  return output;
}

// @mlajkim
function getFasterN(n: number): number {
  let returning: number = 0;

  while (n !== 0) {
    const digit: number = n % 10;
    returning += digit * digit;

    n = Math.floor(n / 10);
  }

  return returning;
}

function isHappyAlt(n: number): boolean {
  let fast: number = n;
  let slow: number = n;

  do {
    fast = getFasterN(getFasterN(fast));
    slow = getFasterN(slow);
  } while (fast !== slow);

  return slow === 1;
}

// test zone
const input: number = 19;

const test1: boolean = isHappy(input);
const test2: boolean = isHappyAlt(input);

const tests: boolean[] = [
  test1,
  test2,
];

LogTests(tests);
