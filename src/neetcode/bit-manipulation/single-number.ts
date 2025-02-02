import { LogTests } from "@/utils/log-tests";

// @me
function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  let output: number = 0;

  for (const number of nums) {
    if (map.has(number)) {
      map.set(number, map.get(number)! + 1);
    }
    else {
      map.set(number, 1);
    }
  }

  for (const [key, _value] of map) {
    if (map.get(key) === 1) {
      output = key;
      break;
    }
  }

  return output;
}

// @neetcode
function singleNumberAlt1(nums: number[]): number {
  let res: number = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
}

// @neetcode
function singleNumberAlt2(nums: number[]): number {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    }
    else {
      seen.add(num);
    }
  }

  return Array.from(seen)[0];
}

// test zone
const input1: number[] = [2, 2, 1, 1, 3];
const input2: number[] = [4, 1, 2, 1, 2];
const input3: number[] = [1];

const test1 = singleNumber(input1);
const test2 = singleNumber(input2);
const test3 = singleNumber(input3);

const test4 = singleNumberAlt1(input1);
const test5 = singleNumberAlt1(input2);
const test6 = singleNumberAlt1(input3);

const test7 = singleNumberAlt2(input1);
const test8 = singleNumberAlt2(input2);
const test9 = singleNumberAlt2(input3);

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
