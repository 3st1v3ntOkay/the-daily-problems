const InsertionNums: number[] = [64, 34, 25, 12, 22, 11, 90, 5];

function InsertionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let temp: number = array[i];
    let j: number = i;

    while (j > 0 && temp < array[j - 1]) {
      array[j] = array[j - 1];
      j = j - 1; // j -= 1;
    }

    array[j] = temp;
  }

  return array;
}

function InsertionSortVariant1(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let j: number = i;

    while (j > 0 && array[j - 1] > array[j]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j = j - 1; // j -= 1;
    }
  }

  return array;
}

InsertionSort(InsertionNums);
InsertionSortVariant1(InsertionNums);
