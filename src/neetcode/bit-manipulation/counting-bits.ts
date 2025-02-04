import { LogTests } from "@/utils/log-tests";

// @neetcode
function countBits(n: number): number[] {
  let dp: number[] = new Array(n + 1).fill(0);
  let offset: number = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    dp[i] = 1 + dp[i - offset];
  }

  return dp;
}

// @neetcode
function countBitsAlt1(n: number): number[] {
  let dp: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}

// @neetcode
function countBitsAlt2(n: number): number[] {
  let res = [];

  for (let i = 0; i <= n; i++) {
    res.push(i.toString(2).split('1').length - 1);
  }

  return res;
}

// @neetcode
function countBitsAlt3(n: number): number[] {
  let res = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let num = i;

    while (num !== 0) {
      res[i]++;
      num &= (num - 1);
    }
  }

  return res;
}

// @neetcode
function countBitsAlt4(n: number): number[] {
  let res = [];

  for (let num = 0; num <= n; num++) {
    let one = 0;

    for (let i = 0; i < 32; i++) {
      if ((num & (1 << i)) != 0) {
        one++;
      }
    }

    res.push(one);
  }

  return res;
}

// test zone
const input1: number = 2;
const input2: number = 5;

const test1: number[] = countBits(input1);
const test2: number[] = countBits(input2);

const tests: number[][] = [
  test1,
  test2,
];

LogTests(tests);
