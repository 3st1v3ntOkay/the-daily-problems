function topKFrequent(nums: number[], k: number): number[] {
  if (!nums.length) {
    return [];
  }

  let auth = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];

    if (auth.has(number)) {
      auth.set(number, auth.get(number)! + 1);
    } else {
      auth.set(number, 1);
    }
  }

  let array: number[][] = [];

  for (let value of auth) {
    array = [...array, value];
  }

  array.sort((a, b) => b[1] - a[1]);

  let newArray: number[] = [];

  for (let value of array) {
    newArray = [...newArray, value[0]];
  }

  return newArray.slice(0, k);
};

const input: number[] = [1, 1, 1, 2, 2, 3];
const k: number = 2;

topKFrequent(input, k);
