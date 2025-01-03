/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  let res = [];

  /**
   * 
   * @param {number} index 
   * @param {number[]} cur 
   * @param {number} total 
   * @returns {void}
   */
  function dfs(index, cur, total) {
    if (total === target) {
      res.push([...cur])
      return;
    }

    if (index >= candidates.length || total > target) return;

    cur.push(candidates[index]);
    dfs(index, cur, total + candidates[index]);

    cur.pop();
    dfs(index + 1, cur, total)
  }

  dfs(0, [], 0);
  return res;
}

const candidates = [2,3,6,7];
const target = 7;

combinationSum(candidates, target);
