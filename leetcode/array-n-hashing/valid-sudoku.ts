function isValidSudoku(board: string[][]): boolean {
  for (let x = 0; x < 9; x++) {
    let row = new Set<string>();
    let col = new Set<string>();
    let grd = new Set<string>();

    for (let y = 0; y < 9; y++) {
      let rowBox = board[x][y];
      let colBox = board[y][x];

      let xGrd = 3 * Math.floor(x / 3) + Math.floor(y / 3);
      let yGrd = 3 * (x % 3) + (y % 3);
      let grdBox = board[xGrd][yGrd];

      if (rowBox !== ".") {
        if (row.has(rowBox)) return false;
        row.add(rowBox);
      }

      if (colBox !== ".") {
        if (col.has(colBox)) return false;
        col.add(colBox);
      }

      if (grdBox !== ".") {
        if (grd.has(grdBox)) return false;
        grd.add(grdBox);
      }
    }
  }

  return true;
}

const input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(input);
