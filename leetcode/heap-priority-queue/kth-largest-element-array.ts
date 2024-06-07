function cheatFindKthLargest(nums: number[], k: number): number {
  nums.sort((a: number, b: number) => b - a);
  // also is valid nums[nums.length - k]; in case you sorted minor to major
  return nums[k - 1];
}

// this algorithm passed almost all tests except the last one because of "time limit exceeded"; try to find the error
function almostGoodFindKthLargest(nums: number[], k: number): number {
  k = nums.length - k;

  function quickSelect(l: number, r: number): number {
    let pivot = nums[r],
      p = l;

    for (let i = l; i <= r; i++) {
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p += 1;
      }
    }

    [nums[p], nums[r]] = [nums[r], nums[p]];

    if (p > k) {
      return quickSelect(l, p - 1);
    }
    else if (p < k) {
      return quickSelect(p + 1, r);
    }
    else {
      return nums[p];
    }
  }

  return quickSelect(0, nums.length - 1);
}

function findKthLargest(nums: number[], k: number): number {
  let pivot = Math.floor(nums.length / 2);
  let mid: number[] = [];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[pivot]) {
      left.push(nums[i]);
    } else if (nums[i] > nums[pivot]) {
      right.push(nums[i]);
    } else {
      mid.push(nums[i])
    }
  }
  if (right.length >= k) {
    return findKthLargest(right, k);
  } else if (left.length > nums.length - k) {
    k = k - right.length - mid.length;
    return findKthLargest(left, k);
  } else {
    return nums[pivot];
  }
};

const nums = [3, 2, 1, 5, 6, 4];
const kth = 2;

findKthLargest(nums, kth);
