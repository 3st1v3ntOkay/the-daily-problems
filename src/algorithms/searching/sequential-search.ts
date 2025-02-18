function SequentialSearch(array: number[], target: number): boolean {
  for (const item of array) {
    if (item === target) {
      return true;
    }
  }

  return false;
}

const test = [1, 2, 3, 4];

SequentialSearch(test, 0);
