function threeSum(nums: number[]): number[][] {
  let output: number[][] = [];

  nums.sort((a, b) => a - b);

  if (nums.length < 3) {
    return output;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (left < right) {
      let sum: number = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right -= 1;
      }
      else if (sum < 0) {
        left += 1;
      }
      else {
        output.push([nums[i], nums[left], nums[right]]);

        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return output;
}

const input: number[] = [-1, 0, 1, 2, -1, -4];

threeSum(input);

//  3 Sum | Brute - Better - Optimal with Codes: https://www.youtube.com/watch?v=DhFh8Kw7ymk
//  Most Common Concepts for Coding Interviews: https://www.youtube.com/watch?v=UrcwDOEBzZE
