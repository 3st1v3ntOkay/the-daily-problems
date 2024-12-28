/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const mySearch1 = function (nums, target) {
  const exist = nums.includes(target);
  console.log(exist);

  if (!exist) {
    console.log(-1);
    return -1;
  }

  let count = 0;
  for (let value of nums) {
    if (value === target) break;
    else {
      count++;
    }
  }

  console.log(count);
  return count;
};

const mySearch2 = function (nums, target) {
  let count = 0;
  for (let value of nums) {
    if (value === target) break;
    else {
      count++;
    }
  }

  if (count === nums.length) {
    console.log(-1);
    return -1;
  }

  console.log(count);
  return count;
};

// @neetcode
const mySearch3 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (target === nums[mid]) {
      return mid
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 3;

// const nums = [4,5,6,7,0,1,2];
// const target = 3;

// const nums = [1];
// const target = 0;

mySearch1(nums, target);
mySearch2(nums, target);
