/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

const carFleet = function (target, position, speed) {
  const pair = position.map((pos, idx) => [pos, speed[idx]]);

  let stack = [];

  pair.sort((posA, posB) => posA[0] - posB[0]);

  for (let i = pair.length - 1; i >= 0; i--) {
    const [position, speed] = pair[i];
    stack.push((target - position) / speed);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
// carFleet(10, [3], [3])
// carFleet(100, [0,2,4], [4,2,1])
