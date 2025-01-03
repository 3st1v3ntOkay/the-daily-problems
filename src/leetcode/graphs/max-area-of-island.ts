// @NeetCode
function maxAreaOfIsland1(grid: number[][]): number {
  let ROWS: number = grid.length,
    COLUMNS: number = grid[0].length;

  const directions: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(grid: number[][], row: number, column: number): number {
    let cells: number = 0;

    if (row < 0 || row >= ROWS || column < 0 || column >= COLUMNS || !grid[row][column]) {
      return 0;
    }

    grid[row][column] = 0;
    directions.forEach(([dR, dC]) => (
      cells += dfs(grid, row + dR, column + dC)
    ));

    return cells + 1;
  }

  let area: number = 0;
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      area = Math.max(area, dfs(grid, row, column));
    }
  }

  return area;
}

// @tombastep
function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0

  function getArea(row: number, col: number) {
    let area = 0

    if (grid[row][col]) {
      grid[row][col] = 0
      area++

      if (row > 0) {
        area += getArea(row - 1, col)
      }
      if (row < grid.length - 1) {
        area += getArea(row + 1, col)
      }
      if (col > 0) {
        area += getArea(row, col - 1)
      }
      if (col < grid[row].length - 1) {
        area += getArea(row, col + 1)
      }
    }

    return area
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      maxArea = Math.max(getArea(row, col), maxArea)
    }
  }

  return maxArea
}
