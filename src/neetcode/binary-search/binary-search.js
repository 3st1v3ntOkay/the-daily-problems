/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchFor = function (nums, target) {
  let res = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res = i;
      break;
    }
  }

  console.log(res);
  return res;
};

const searchWhile = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let m = left + ((right - left) % 2);

    if (nums[m] > target) {
      right = m - 1;
    } else if (nums[m] < target) {
      left = m + 1;
    } else {
      console.log(m);
      return m;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

searchWhile(nums, target);
searchFor(nums, target);
