function subsetsWithDup(nums: number[]): number[][] {
  if (!nums.length) {
    return [];
  }

  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(
    index: number,
    subset: number[],
  ): void {
    if (index === nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    backtrack(index + 1, subset);
    subset.pop();

    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index += 1;
    }

    backtrack(index + 1, subset);
  }

  backtrack(0, []);
  return res;
}

const input: number[] = [1, 2, 2, 3];

subsetsWithDup(input);
