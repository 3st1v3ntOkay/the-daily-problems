function permute(nums: number[]): number[][] {
  let result: number[][] = [];

  function dfs(
    nums: number[],
    result: number[][],
    index: number,
  ): void | number {
    if (index === nums.length - 1) {
      return result.push([...nums]);
    }

    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      dfs(nums, result, index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }

  dfs(nums, result, 0);
  return result;
}

const input: number[] = [1, 2, 3];
permute(input);
