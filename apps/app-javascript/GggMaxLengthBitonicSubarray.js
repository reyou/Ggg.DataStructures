//=============================================================================
// Maximum Length Bitonic Subarray | Set 1 (O(n) tine and O(n) space)
// http://www.geeksforgeeks.org/maximum-length-bitonic-subarray/
// https://www.youtube.com/watch?v=k4vMVTp6AuI
//=============================================================================
/*
Simple Examples
1) A[] = {12, 4, 78, 90, 45, 23}, the maximum length bitonic subarray is {4, 78, 90, 45, 23} which is of length 5.
2) A[] = {20, 4, 1, 2, 3, 4, 2, 10}, the maximum length bitonic subarray is {1, 2, 3, 4, 2} which is of length 5.
Extreme Examples
1) A[] = {10}, the single element is bitnoic, so output is 1.
2) A[] = {10, 20, 30, 40}, the complete array itself is bitonic, so output is 4.
3) A[] = {40, 30, 20, 10}, the complete array itself is bitonic, so output is 4
*/
//=============================================================================
// ++--, ----, ++++, ---++
var maxLengthBitonic = function (arr) {
    var isBreak = false;
    var dir = 0;
    var strike = 0;
    var maxStrike = 0;
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (i + 1 > arr.length - 1) {
            break;
        }
        var next = arr[i + 1];
        if (next > cur) {
            if (dir === -1) {
                if (strike > maxStrike) {
                    maxStrike = strike;
                }
                dir = 1;
                strike = 1;
                isBreak = false;
                continue;
            }
            if (!isBreak) {
                strike++;
                dir = 1;
            }
            else {
                if (strike > maxStrike) {
                    maxStrike = strike;
                }
                strike = 0;
            }

        }
        else if (next < cur) {
            if (dir === 1) {
                isBreak = true;
            }
            dir = -1;
            strike++;
        }
    }
    if (strike > maxStrike) {
        maxStrike = strike;
    }
    console.log(maxStrike + 1);

}
var maxLenFun = function () {
    var arr1 = [12, 4, 78, 90, 45, 23];
    var arr2 = [10, 20, 30, 40];
    var arr3 = [40, 30, 20, 10];
    var arr4 = [20, 4, 1, 2, 3, 4, 2, 10];
    maxLengthBitonic(arr4);
}
 maxLenFun();
//=============================================================================

