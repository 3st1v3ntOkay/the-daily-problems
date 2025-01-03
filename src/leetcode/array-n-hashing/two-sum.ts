function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum: number = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// @Piotr Maminski
function twoSumAlt(nums: number[], target: number): number[] {
  const HashTable = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (HashTable.has(target - num)) {
      return [HashTable.get(target - num)!, i];
    }

    HashTable.set(num, i);
  }

  return [];
}

function twoSumAlt2(nums: number[], target: number): number[] {
  let hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target - nums[i])) {
      return [hashMap.get(target - nums[i])!, i];
    }
    else {
      hashMap.set(nums[i], i);
    }
  }

  return [-1, -1];
}

const numbers = [2, 11, 15, 7];
const target = 9;

twoSum(numbers, target);
twoSumAlt(numbers, target);
twoSumAlt2(numbers, target);
