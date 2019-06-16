/*Given an array of meeting time intervals consisting of start 
and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum 
number of conference rooms required. */
/*Example 1:
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:
Input: [[7,10],[2,4]]
Output: 1 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (intervals.length < 2) {
    return intervals.length;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let rooms = [];
  rooms.push([intervals[0]]);

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let roomAvailable = false;
    for (let j = 0; j < rooms.length; j++) {
      roomAvailable = true;
      let schedules = rooms[j];
      for (let k = 0; k < schedules.length; k++) {
        let schedule = schedules[k];
        if (interval[0] < schedule[1]) {
          roomAvailable = false;
          break;
        }
      }
      if (roomAvailable) {
        rooms[j].push(interval);
        break;
      }
    }
    if (!roomAvailable) {
      rooms.push([interval]);
    }
  }
  return rooms.length;
};
let result = minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
console.log(result);
