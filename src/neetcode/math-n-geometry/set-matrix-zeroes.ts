import { LogTests } from "@/utils/log-tests";

// @neetcode code
function setZeroes(matrix: number[][]): void {
  let rows: number = matrix.length;
  let cols: number = matrix[0].length;
  let rowZero: boolean = false;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;

        if (row > 0) {
          matrix[row][0] = 0
        }
        else {
          rowZero = true;
        }
      }
    }
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }

  if (rowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }
}

// test zone
const matrix1: number[][] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const matrix2: number[][] = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

const test1: void = setZeroes(matrix1);
const test2: void = setZeroes(matrix2);

const tests: void[] = [
  test1,
  test2,
];

LogTests(tests);
