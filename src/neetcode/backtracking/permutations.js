/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let result = [];
  
  function dfs(nums, result, index) {
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

const nums = [1,2,3];
permute(nums);
