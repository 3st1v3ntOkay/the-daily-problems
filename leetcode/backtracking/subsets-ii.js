/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  if (!nums.length) return;

  let res = [];
  nums.sort((a, b) => a - b);

  /**
   * @param {number} i
   * @param {number[]} subset
   * @returns {void}
   */
  function backtrack(i, subset) {
    if (i === nums.length) {
      res.push([...subset]);
      return;
    }
    
    subset.push(nums[i])
    backtrack(i + 1, subset);
    subset.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }

    backtrack(i + 1, subset);
  }

  backtrack(0, []);
  return res;
}

const nums1 = [1, 2, 2, 3];
subsetsWithDup(nums1);
