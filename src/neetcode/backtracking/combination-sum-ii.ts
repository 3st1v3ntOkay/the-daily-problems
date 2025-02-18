function combinationSum2(
  candidates: number[],
  target: number,
): number[][] {
  if (!candidates.length) {
    return [];
  }

  let result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function backtrack(
    current: number[],
    position: number,
    target: number,
  ): void {
    if (target === 0) {
      result.push([...current]);
    }

    if (target <= 0) {
      return;
    }

    let prev: number = -1;
    for (let i = position; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      current.push(candidates[i]);
      backtrack(current, i + 1, target - candidates[i]);
      current.pop();

      prev = candidates[i];
    }
  }

  backtrack([], 0, target);
  return result;
}

const input: number[] = [10, 1, 2, 7, 6, 1, 5];
const target: number = 8;

combinationSum2(input, target);
