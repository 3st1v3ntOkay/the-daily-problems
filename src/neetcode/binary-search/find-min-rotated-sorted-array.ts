function OwnFindMin(nums: number[]): number {
  // const initial = nums.toSorted();
  const array: number[] = new Array(...nums);
  const initial: number = array.sort((a, b) => a - b)[0];

  if (initial === nums[0]) {
    return nums.length;
  }

  let count: number = 0;
  for (let value of nums) {
    if (value === initial) {
      break;
    }
    else {
      count++;
    }
  }

  return count;
}

// TODO: debug
function neetCodeFindMin(nums: number[]): number {
  let res: number = nums[0];
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let m: number = (left + right) % 2;
    res = Math.min(res, nums[m]);

    if (nums[m] >= nums[left]) {
      left = m + 1;
    }
    else {
      right = m - 1;
    }
  }

  console.log(res);
  return res;
}

// thanks @devanshupatel: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3545223/c-java-python-javascript-time-o-log-n-space-o-1-simple-code-with-explanation/
function findMin(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return nums[left];
}

const input: number[] = [3, 4, 5, 1, 2];
const input2: number[] = [4, 5, 6, 7, 0, 1, 2];
const input3: number[] = [11, 13, 15, 17];

OwnFindMin(input);
neetCodeFindMin(input);
findMin(input);
