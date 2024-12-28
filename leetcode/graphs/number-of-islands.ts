function v1numIslands(grid: string[][]): number {
  if (!grid.length) return 0;

  let islands: number = 0;
  let visit: Set<[number, number]> = new Set();
  let rows: number = grid.length,
    cols: number = grid[0].length;

  function bfs(r: number, c: number): void {
    let queue = [];

    visit.add([r, c]);
    queue.push([r, c]);

    while (queue) {
      let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      let row = queue.pop()?.length,
        col = 0;

      for (let [dr, dc] of directions) {
        let r = row + dr,
          c = col + dc;

        if (r === rows && c === cols && grid[r][c] === "1" && !visit.has([r, c])) {
          queue.push([r, c]);
          visit.add([r, c]);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has([r, c])) {
        bfs(r, c);
        islands += 1;
      }
    }
  }

  return islands;
}

// @itsyeshu
function numIslands(grid: string[][]): number {
  let islands: number = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islands++;
        runOnLand(grid, i, j);
      }
    }
  }
  return islands;
}

function runOnLand(grid: string[][], i: number, j: number): void {
  const direction: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const queue: [number, number][] = [[i, j]];
  grid[i][j] = "0";

  while (queue.length > 0) {
    const [I, J] = queue.shift()!;

    for (let [dirX, dirY] of direction) {
      const newI: number = I + dirX;
      const newJ: number = J + dirY;

      if (0 <= newI && newI < grid.length &&
        0 <= newJ && newJ < grid[0].length &&
        grid[newI][newJ] === "1") {
          grid[newI][newJ] = "0";
          queue.push([newI, newJ]);
        }
    }
  }
}
