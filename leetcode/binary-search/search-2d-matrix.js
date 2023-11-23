/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrixKawaii = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let final = matrix[i].includes(target);

    if (final) return true;
  }

  return false;
};

const searchMatrixFor = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }

  return false;
};

const searchMatrixLogmLogn = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / n)][mid % n];

    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const target = 61;
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

searchMatrixKawaii(matrix, target);
searchMatrixFor(matrix, target);
searchMatrixLogmLogn(matrix, target);
