import { LogTests } from "@/utils/log-tests";

// @neetcode code
function rotate(matrix: number[][]): void {
  let left: number = 0;
  let right: number = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top: number = left;
      let bottom: number = right;

      let topLeft: number = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }

    right -= 1;
    left += 1;
  }
}

// @neetcode code
function rotateAlt1(matrix: number[][]): void {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

// @neetcode code
function rotateAlt2(matrix: number[][]): void {
  const n: number = matrix.length;

  const rotated: number[][] =
    Array.from({ length: n }, () =>
      Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = rotated[i][j];
    }
  }
}

// test zone
const matrix1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2: number[][] = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const test1: void = rotate(matrix1);
const test2: void = rotate(matrix2);

const test3: void = rotateAlt1(matrix1);
const test4: void = rotateAlt1(matrix2);

const test5: void = rotateAlt2(matrix1);
const test6: void = rotateAlt2(matrix2);

const tests: void[] = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
];

LogTests(tests);
