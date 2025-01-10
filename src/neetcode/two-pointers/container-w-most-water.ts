function maxArea(height: number[]): number {
  if (height.length < 2) {
    return height[0];
  }

  let left: number = 0;
  let right: number = height.length - 1;

  let res: number = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

    res = Math.max(res, area);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return res;
}

const input: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(input));
