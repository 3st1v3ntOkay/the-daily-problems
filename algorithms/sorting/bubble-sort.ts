const BubbleNums: number[] = [7, 3, 1, 5, 2, 4];

function BubbleSort(array: number[]): number[] {
  if (!array.length) return [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }

  return array;
}

function BubbleSortVariant1(array: number[]): number[] {
  if (!array.length) return [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

function BubbleSortVariant2(array: number[]): number[] {
  if (!array.length) return [];

  let temp: number;

  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}

BubbleSort(BubbleNums);

BubbleSortVariant1(BubbleNums);
BubbleSortVariant2(BubbleNums);
