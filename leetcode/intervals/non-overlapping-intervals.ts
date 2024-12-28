type IntervalTuple = [number, number];

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);

  let output: number = 0;
  let prevEnd: number = intervals[0][1];

  let newStart: number[][] = intervals.slice(1);
  for (let [start, end] of newStart) {
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      output += 1;
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return output;
}
