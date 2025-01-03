function BinarySearch(array: number[], target: number): boolean {
  let low: number = 0;
  let high: number = array.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (target < array[mid]) {
      high = mid - 1;
    }
    else if (target > array[mid]) {
      low = mid + 1;
    }
    else {
      return true;
    }
  }

  return false;
}

const test = [1, 2, 3, 4];

BinarySearch(test, 2);
