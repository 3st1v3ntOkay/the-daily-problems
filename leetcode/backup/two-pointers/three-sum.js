/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let array = [];
  nums.sort((a, b) => a - b);

  if (nums.length < 3) return array;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        array.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return array;
};

threeSum([-1, 0, 1, 2, -1, -4]);

//  3 Sum | Brute - Better - Optimal with Codes: https://www.youtube.com/watch?v=DhFh8Kw7ymk
//  Most Common Concepts for Coding Interviews: https://www.youtube.com/watch?v=UrcwDOEBzZE
