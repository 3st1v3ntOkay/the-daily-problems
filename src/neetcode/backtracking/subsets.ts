function subsets(nums: number[]): number[][] {
  if (!nums.length) {
    return [];
  }

  let res: number[][] = [];
  let subset: number[] = [];

  function dfs(index: number): void {
    if (index >= nums.length) {
      res.push([...subset])
      return;
    }

    subset.push(nums[index]);
    dfs(index + 1);

    subset.pop();
    dfs(index + 1);
  }

  dfs(0);
  return res;
}

const input: number[] = [1, 2, 3];

subsets(input);
