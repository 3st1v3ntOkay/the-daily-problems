const BubbleNums: number[] = [3, 1, 2, 4];

function BubbleSort(nums: number[]): number[] {
  if (!nums.length) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }

  return nums;
}

function BubbleSortVariant1(nums: number[]): number[] {
  if (!nums.length) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }

  return nums;
}

BubbleSort(BubbleNums);
BubbleSortVariant1(BubbleNums);
