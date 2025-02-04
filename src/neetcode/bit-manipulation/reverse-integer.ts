import { LogTests } from "@/utils/log-tests";

// my try
function MyReverseBits(n: number): number {
  let case1: string = `${n}`;
  let output: string = "";

  for (const character of case1) {
    output = character + output;
  }

  console.log("initial value: ");
  console.log(n);

  console.log("return value: ");
  return Number(output);
}

// @neetcode
function reverseBits(n: number): number {
  let output: number = 0;

  for (let i = 0; i < 32; i++) {
    let bit: number = (n >> i) & 1;
    // console.log(bit);

    output = output + (bit << (31 - i));
    // console.log(output);
  }

  return output >>> 0;
}

// @neetcode
function reverseBitsAlt1(n: number): number {
  let binary: string = "";

  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      binary += "1";
    }
    else {
      binary += "0";
    }
  }

  let res: number = 0;

  for (let i = 0; i < 32; i++) {
    if (binary[31 - i] === "1") {
      res |= (1 << i);
    }
  }

  return res >>> 0;
}

// @neetcode
function reverseBitsAlt2(n: number): number {
  let ret: number = n >>> 0;

  ret = (ret >>> 16) | (ret << 16);

  ret = ((ret & 0xff00ff00) >>> 8) | ((ret & 0x00ff00ff) << 8);

  ret = ((ret & 0xf0f0f0f0) >>> 4) | ((ret & 0x0f0f0f0f) << 4);

  ret = ((ret & 0xcccccccc) >>> 2) | ((ret & 0x33333333) << 2);

  ret = ((ret & 0xaaaaaaaa) >>> 1) | ((ret & 0x55555555) << 1);

  return ret >>> 0;
}

// test zone
const input1 = 0b00000010100101000001111010011100;
const input2 = 0b11111111111111111111111111111101;

const test1: number = reverseBits(input1);
const test2: number = reverseBits(input2);

const test3: number = reverseBitsAlt1(input1);
const test4: number = reverseBitsAlt1(input2);

const test5: number = reverseBitsAlt2(input1);
const test6: number = reverseBitsAlt2(input2);

const tests: number[] = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
];

LogTests(tests);
