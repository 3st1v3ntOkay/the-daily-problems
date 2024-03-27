/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  if (!nums.length) return;

  let res = [],
      subset = [];
  
  /**
   * @param {number} i 
   * @returns {void}
   */
  function dfs(i) {
    if (i >= nums.length) {
      res.push([...subset])
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return res;
}

const nums1 = [1, 2, 3];
subsets(nums1);
