var minMeetingRooms = function(intervals) {
  const starts = [];
  const ends = [];
  intervals.forEach(([start, end]) => {
    starts.push(start);
    ends.push(end);
  });
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let minRooms = 0;
  let rooms = 0;
  while (i < starts.length) {
    // new room required
    // starts before another ends
    if (starts[i] < ends[j]) {
      i += 1;
      rooms += 1;
      minRooms = Math.max(minRooms, rooms);
    }
    // same room can be used
    // reduce tracked room
    else {
      j += 1;
      rooms -= 1;
    }
  }
  return minRooms;
};
let result = minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
console.log(result);
