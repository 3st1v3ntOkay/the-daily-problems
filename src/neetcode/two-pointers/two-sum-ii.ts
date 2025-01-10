function TwoSumII(
  numbers: number[],
  target: number
): number[] {
  let left: number = 0;
  let right: number = numbers.length - 1;

  while (left < right) {
    let sum: number = numbers[left] + numbers[right];

    if (sum > target) {
      right -= 1;
    }
    else if (sum < target) {
      left += 1;
    }
    else {
      return [left + 1, right + 1];
    }
  }

  return [];
};

const input: number[] = [2, 11, 15, 7];
const target: number = 9;

console.log(TwoSumII(input, target));
