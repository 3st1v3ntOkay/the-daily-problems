/**
 * @param {number[]} nums
 * @return {number}
 */

const myFindMin = function (nums) {
  // const initial = nums.toSorted();
  const array = new Array(...nums);
  const initial = array.sort((a, b) => a - b)[0];

  if (initial === nums[0]) {
    return nums.length;
  }

  let count = 0;
  for (let value of nums) {
    if (value === initial) break;
    else {
      count++;
    }
  }

  return count;
};

// TODO: debug
const neetCodeFindMin = function (nums) {
  let res = nums[0];
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let m = (left + right) % 2;
    res = Math.min(res, nums[m]);

    if (nums[m] >= nums[left]) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }

  console.log(res);
  return res;
};

// thanks @devanshupatel: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3545223/c-java-python-javascript-time-o-log-n-space-o-1-simple-code-with-explanation/
const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

const nums = [3, 4, 5, 1, 2];
// const nums = [4,5,6,7,0,1,2];
// const nums = [11, 13, 15, 17];

findMin(nums);
