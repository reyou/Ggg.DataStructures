// ============================================================================
// Find a Fixed Point (Value equal to index) in a given array
// https://www.youtube.com/watch?v=hASRzBXY5kY
// http://www.geeksforgeeks.org/find-a-fixed-point-in-a-given-array/
// ============================================================================
var findAFixedPoint = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        if (v == i + 1) {
            console.log(v);
        }
    }
}
var sampleArr = [-10, -5, 3, 4, 7, 9];
// findAFixedPoint(sampleArr);
// ============================================================================
var findAFixedPoint2 = function (sampleArr2) {
    var left = 0;
    var right = sampleArr2.length - 1;
    findAFixedPoint2Util(sampleArr2, left, right);
}
function findAFixedPoint2Util(arr, left, right) {
    var mid = Math.floor(0 + (arr.length - 0) / 2);
    if (arr[mid] == mid + 1) {
        console.log(mid + 1);
    }
    else if (mid + 1 < arr[mid]) {
        // -10 -5 3 5 70 90 100
        findAFixedPoint2Util(sampleArr2, 0, mid - 1);
    }
    // -10 -5 -1 3 5 6 7 10
    else if (mid + 1 > arr[mid]) {
        findAFixedPoint2Util(sampleArr2, mid + 1, arr.length - 1);
    }
}
var sampleArr2 = [-10, -5, 3, 4, 7, 9];
findAFixedPoint2(sampleArr2);
// ============================================================================
