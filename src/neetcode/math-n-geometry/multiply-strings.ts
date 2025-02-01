import { LogTests } from "@/utils/log-tests";

// @me + but it doesn't allowed
function multiplyMe(num1: string, num2: string): string {
  const output: number = Number(num1) * Number(num2);
  return `${output}`;
}

// @neetcode solution
function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let output: number[] = new Array(num1.length + num2.length).fill(0);

  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  for (let n = 0; n < num1.length; n++) {
    for (let m = 0; m < num2.length; m++) {
      let digit: number = parseInt(num1[n]) * parseInt(num2[m]);

      output[n + m] += digit;
      output[n + m + 1] += Math.floor(output[n + m] / 10);
      output[n + m] %= 10;
    }
  }

  let finalOutput: string = "";
  let index: number = output.length - 1;

  while (index >= 0 && output[index] === 0) {
    index--;
  }

  while (index >= 0) {
    finalOutput += output[index--];
  }

  return finalOutput;
}

// @neetcode solution (check this one)
function multiplyAlt1(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  if (num1.length < num2.length) {
    return multiply(num2, num1);
  }

  let res = "";
  let zero = 0;
  for (let i = num2.length - 1; i >= 0; i--) {
    const cur = mul(num1, num2[i], zero);
    res = add(res, cur);
    zero++;
  }

  return res;
}

function mul(
  s: string,
  d: string,
  zero: number,
): string {
  let i = s.length - 1;
  let carry = 0;
  const digit = Number(d);
  let cur = "";

  while (i >= 0 || carry) {
    const n = i >= 0 ? Number(s[i]) : 0;
    const prod = n * digit + carry;

    cur = (prod % 10) + cur;
    carry = Math.floor(prod / 10);
    i--;
  }

  return cur + "0".repeat(zero);
}

function add(num1: string, num2: string): string {
  let i = num1.length - 1, j = num2.length - 1, carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry) {
    const n1 = i >= 0 ? Number(num1[i]) : 0;
    const n2 = j >= 0 ? Number(num2[j]) : 0;
    const total = n1 + n2 + carry;

    res = (total % 10) + res;
    carry = Math.floor(total / 10);
    i--;
    j--;
  }

  return res;
}

// test zone
const inputA1: string = "2";
const inputB1: string = "3";

const test1: string = multiply(inputA1, inputB1);

const inputA2: string = "2";
const inputB2: string = "3";

const test2: string = multiply(inputA2, inputB2);

const inputA3: string = "2";
const inputB3: string = "0";

const test3: string = multiply(inputA3, inputB3);

const tests: string[] = [
  test1,
  test2,
  test3,
];

LogTests(tests);
