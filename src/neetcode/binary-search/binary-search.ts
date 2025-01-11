function searchFor(
  nums: number[],
  target: number,
): number {
  let res: number = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res = i;
      break;
    }
  }

  return res;
}

function searchWhile(
  nums: number[],
  target: number,
): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let m: number = left + ((right - left) % 2);

    if (nums[m] > target) {
      right = m - 1;
    }
    else if (nums[m] < target) {
      left = m + 1;
    }
    else {
      console.log(m);
      return m;
    }
  }

  return -1;
}

const input: number[] = [-1, 0, 3, 5, 9, 12];
const target: number = 9;

searchWhile(input, target);
searchFor(input, target);
