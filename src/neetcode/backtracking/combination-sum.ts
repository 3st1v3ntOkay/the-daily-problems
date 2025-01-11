function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  let res: number[][] = [];

  function dfs(
    index: number,
    current: number[],
    total: number,
  ): void {
    if (total === target) {
      res.push([...current])
      return;
    }

    if (index >= candidates.length || total > target) return;

    current.push(candidates[index]);
    dfs(index, current, total + candidates[index]);

    current.pop();
    dfs(index + 1, current, total)
  }

  dfs(0, [], 0);
  return res;
}

const input: number[] = [2, 3, 6, 7];
const target: number = 7;

combinationSum(input, target);
