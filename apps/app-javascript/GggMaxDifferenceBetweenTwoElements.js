// Maximum difference between two elements such that larger element appears after the smaller number
// https://www.youtube.com/watch?v=SO0bwMziLlU
// http://www.geeksforgeeks.org/maximum-difference-between-two-elements/
// Examples: If array is [2, 3, 10, 6, 4, 8, 1] then returned value 
// should be 8 (Diff between 10 and 2). If array is [ 7, 9, 5, 6, 3, 2 ]
// then returned value should be 2 (Diff between 7 and 9)
var maxDiffFun = function (arr) {
    var maxDif = 0;
    var min = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (!min || val < min) {
            min = val;
            max = 0;
        }
        else if (!max || val > max) {
            max = val;
        }
        if (max - min > maxDif) {
            maxDif = max - min;
        }
    }
    console.log(maxDif);
}
// 
var arr1 = [2, 3, 10, 6, 4, 8, 1];
var arr2 = [7, 9, 5, 6, 3, 2];
maxDiffFun(arr2);