/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  if (height.length < 2) return height;

  let l = 0;
  let r = height.length - 1;
  let res = 0;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  console.log(res);
  return res;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
