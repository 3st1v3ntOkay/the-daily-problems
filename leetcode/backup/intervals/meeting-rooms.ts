function meetingRooms(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i - 1];
    const [start, end] = intervals[i];

    if(currentEnd > start) {
      return false;
    }
  }

  return true;
}
