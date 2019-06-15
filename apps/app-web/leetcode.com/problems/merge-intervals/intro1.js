/*
Given a collection of intervals, 
merge all overlapping intervals. */
/*Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]. */
/*Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping. */
var merge = function(intervals) {};
let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input3 = [[1, 4], [0, 4]];
let input4 = [[1, 4], [0, 0]];
let input5 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input6 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
let input = input6;
let output = merge(input);
console.log(JSON.stringify(output));
