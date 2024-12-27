/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  if (!nums.length) return;
  let auth = new Map();

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];

    if (auth.has(number)) {
      auth.set(number, auth.get(number) + 1);
    } else {
      auth.set(number, 1);
    }
  }

  let array = [];
  for (let value of auth) {
    array = [...array, value];
  }

  array.sort((a, b) => b[1] - a[1]);

  let newArray = [];
  for (let value of array) {
    newArray = [...newArray, value[0]];
  }

  return newArray.slice(0, k);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
