function exist(
  board: string[][],
  word: string,
): boolean {
  let ROWS: number = board.length;
  let COLS: number = board[0].length;

  function dfs(
    row: number,
    column: number,
    index: number,
  ): boolean {
    if (row === ROWS || row < 0 || column === COLS || column < 0 || board[row][column] !== word[index]) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    board[row][column] = ".";

    let res: boolean = (
      dfs(row + 1, column, index + 1) ||
      dfs(row - 1, column, index + 1) ||
      dfs(row, column + 1, index + 1) ||
      dfs(row, column - 1, index + 1)
    );

    board[row][column] = word[index];
    return res;
  }

  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLS; column++) {
      if (board[row][column] === word[0]) {
        if (dfs(row, column, 0)) {
          return true;
        }
      }
    }
  }

  return false;
}

const word = "ABCCED";
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];

exist(board, word);
