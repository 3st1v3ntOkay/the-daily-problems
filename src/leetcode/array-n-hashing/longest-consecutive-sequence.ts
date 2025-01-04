function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let cnt: number = 1;
  let maxi: number = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        cnt++;
      }
      else {
        maxi = Math.max(maxi, cnt);
        cnt = 1;
      }
    }
  }

  return Math.max(maxi, cnt);
}

function longestConsecutiveAlt1(nums: number[]): number {
  const nums_set: Set<number> = new Set(nums);
  let count: number = 0;

  for (const n of nums_set) {
    if (nums_set.has(n - 1)) {
      continue;
    }

    let i: number = 0;
    while (nums_set.has(n + i)) {
      i++;
    }

    count = Math.max(i, count);
  }

  return count;
}

const input = [100, 4, 200, 1, 3, 2];

longestConsecutive(input);
longestConsecutiveAlt1(input);
