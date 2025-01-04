function kClosest(points: number[][], k: number): number[][] {
  let minHeap: number[][] = [];

  for (let pointArray of points) {
    const [x, y] = pointArray;

    let distance = (x ** 2) + (y ** 2);
    minHeap.push([distance, x, y]);
  }

  /*
  minHeap.sort((a, b) => {
    if(a[0] < b[0]) {
      return -1;
    }
    else if(a[0] > b[0]) {
      return 1;
    }
    else {
      return 0
    }
  });
  */
  minHeap.sort((a, b) => a[0] - b[0]);

  const finalPoints: number[][] = [];
  while (k > 0) {
    const value = minHeap.shift();
    finalPoints.push([value![1], value![2]]);
    k -= 1;
  }

  return finalPoints;
}

// @

const points = [[1, 3], [-2, 2]];
const k = 1;

console.log(kClosest(points, k));
