// @neetcode code
function spiralOrder(matrix: number[][]): number[] {
  let output: number[] = [];

  let left: number = 0;
  let right: number = matrix[0].length;
  let top: number = 0;
  let bottom: number = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      output.push(matrix[top][i]);
    }
    top += 1;
    // top++;

    for (let i = top; i < bottom; i++) {
      output.push(matrix[i][right - 1]);
    }
    right -= 1;
    // right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (let i = right - 1; i >= left; i--) {
      output.push(matrix[bottom - 1][i]);
    }
    bottom -= 1;
    // bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      output.push(matrix[i][left]);
    }
    left += 1;
    // left++;
  }

  return output;
}

const matrix1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

spiralOrder(matrix1)
spiralOrder(matrix2)
