function mySearch(
  nums: number[],
  target: number,
): number {
  const exist: boolean = nums.includes(target);
  console.log(exist);

  if (!exist) {
    console.log(-1);
    return -1;
  }

  let count: number = 0;
  for (let value of nums) {
    if (value === target) {
      break;
    }
    else {
      count++;
    }
  }

  console.log(count);
  return count;
}

function mySearchAlt1(
  nums: number[],
  target: number,
): number {
  let count: number = 0;

  for (let value of nums) {
    if (value === target) {
      break;
    }
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
}

// @neetcode
function mySearchAlt2(
  nums: number[],
  target: number,
): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((right + left) / 2);
    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
    else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
  }

  return -1;
}

const input1: number[] = [4, 5, 6, 7, 0, 1, 2];
const target1: number = 3;

const input2: number[] = [4, 5, 6, 7, 0, 1, 2];
const target2: number = 3;

const input3: number[] = [1];
const target3: number = 0;

mySearch(input1, target1);
mySearchAlt1(input2, target2);
mySearchAlt2(input3, target3);
