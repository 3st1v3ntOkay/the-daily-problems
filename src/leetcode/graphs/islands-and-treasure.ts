function IslandsAndTreasure(grid: number[][]): void {
  let ROWS: number = grid.length,
    COLUMNS: number = grid[0].length;

  // let visit: Set<number[]> = new Set();
  let visit: Set<string> = new Set();
  let queue: Array<number[]> = [];

  function addRoom(r: number, c: number): void {
    if (
      // r < 0 ||
      // c < 0 ||
      Math.min(r, c) < 0 ||
      r === ROWS ||
      c === COLUMNS ||
      visit.has(r + ',' + c) ||
      grid[r][c] === -1
    ) {
      return;
    }

    visit.add(r + ',' + c);
    queue.push([r, c]);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
      if (grid[r][c] === 0) {
        queue.push([r, c]);
        visit.add(r + ',' + c);
      }
    }
  }

  let dist: number = 0;
  while (queue.length > 0) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let [r, c] = queue.shift();

      grid[r][c] = dist;

      addRoom(r + 1, c);
      addRoom(r - 1, c);
      addRoom(r, c + 1);
      addRoom(r, c - 1);
    }

    dist += 1;
  }
}

const input = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

/*
  Output: [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4]
  ]
*/

console.log(IslandsAndTreasure(input));
