const ArrayNums: number[] = [1, 2, 3, 1];

function containsDuplicate(nums: number[]) {
  const noDoble = new Set(nums).size;

  return nums.length === noDoble ? false : true;
}

containsDuplicate(ArrayNums);
