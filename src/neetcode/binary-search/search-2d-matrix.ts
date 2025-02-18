function searchMatrix(
  matrix: number[][],
  target: number,
): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let final: boolean = matrix[i].includes(target);

    if (final) {
      return true;
    }
  }

  return false;
}

function searchMatrixAlt1(
  matrix: number[][],
  target: number,
): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}

function searchMatrixAlt2(
  matrix: number[][],
  target: number,
): boolean {
  let m: number = matrix.length;
  let n: number = matrix[0].length;

  let left: number = 0;
  let right: number = m * n - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    let mid_val: number = matrix[Math.floor(mid / n)][mid % n];

    if (mid_val === target) {
      return true;
    }
    else if (mid_val < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return false;
}

const target: number = 61;
const matrix: number[][] = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

searchMatrix(matrix, target);
searchMatrixAlt1(matrix, target);
searchMatrixAlt2(matrix, target);
