/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  if (!candidates.length) return;

  let result = [];
  candidates.sort((a, b) => a - b);

  function backtrack(current, position, target) {
    if (target === 0) {
      result.push([...current]);
    }

    if (target <= 0) return;

    let prev = -1;
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

const candidates = [10,1,2,7,6,1,5];
const target = 8;

combinationSum2(candidates, target);
