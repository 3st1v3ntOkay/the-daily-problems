// @me + not very good solution
function myPow(x: number, n: number): number {
  if (n <= 0) {
    return 1;
  }

  return x * myPow(x, n - 1);
}

// @neetcode
function myPowAlt1(x: number, n: number): number {
  function helper(x: number, n: number): number {
    if (x === 0) {
      return 0;
    }

    if (n === 0) {
      return 1;
    }

    const output = helper(x * x, Math.floor(n / 2));

    return (n % 2) ? x * output : output;
  }

  const output: number = helper(x, Math.abs(n));

  return (n >= 0) ? output : 1 / output;
}

// @neetcode + but fails in the last test (find out why?)
function myPowAlt2(x: number, n: number): number {
  if (x === 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  let output: number = 1;
  let power: number = Math.abs(n);

  while (power > 0) {
    if (power & 1) {
      output *= x;
    }

    x *= x;
    power >>= 1;
  }

  return (n >= 0) ? output : 1 / output;
}

const input1: number = 2.00000;
const n1: number = 10;

const input2: number = 2.10000;
const n2: number = 3;

const input3: number = 2.00000;
const n3: number = -2;

const test1 = myPowAlt1(input1, n1);
const test2 = myPowAlt1(input2, n2);
const test3 = myPowAlt1(input3, n3);

console.log("running ...");

console.log(test1);
console.log(test2);
console.log(test3);
