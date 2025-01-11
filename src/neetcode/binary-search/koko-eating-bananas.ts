function minEatingSpeed(
  piles: number[],
  height: number,
): number {
  let min: number = 1;
  let max: number = Math.max(...piles);
  let best: number = max;

  function time(speed: number): number {
    return piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
  }

  while (min <= max) {
    let mid: number = Math.floor((min + max) / 2);

    if (time(mid) <= height) {
      best = mid;
      max = mid - 1;
    }
    else {
      min = mid + 1;
    }
  }

  return best;
}

const input: number[] = [3, 6, 7, 11];
const height: number = 8;

minEatingSpeed(input, height);
