function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let output: number[][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [cStart, cEnd] = currentInterval;
    const [start, end] = intervals[i];

    if (cEnd >= start) {
      currentInterval = [cStart, Math.max(cEnd, end)];
    }
    else {
      output.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  output.push(currentInterval);
  return output;
}

// @neetcode
function merge2(intervals: number[][]): number[][] {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) => aStart !== bStart ? aStart - bStart : aEnd - bEnd);
  
  return mergeInterval(intervals);
};

function mergeInterval(intervals: number[][]): number[][] {
  let merged = [];
  let prev = intervals.shift();
  
  for (const curr of intervals) {
      const [prevStart, prevEnd] = prev;
      const [currStart, currEnd] = curr;
      
      // Overlap occurs
      if (currStart <= prevEnd) {
          prev[1] = Math.max(prev[1], curr[1]);
          continue;
      }
      
      merged.push(prev);
      prev = curr;
  }
  return [...merged, prev];
}
