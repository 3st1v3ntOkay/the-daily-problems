function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  const pair: number[][] = position.map((pos, idx) => [pos, speed[idx]]);

  let stack: number[] = [];

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
}

const target: number = 12;
const position: number[] = [10, 8, 0, 5, 3];
const speed: number[] = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
