//=============================================================================
// Find minimum difference between any two elements
// http://www.geeksforgeeks.org/find-minimum-difference-pair/
// https://www.youtube.com/watch?v=Cr20pvlhqBU
/*Given an unsorted array, find the minimum difference between any 
pair in given array.

Examples :

Input  : {1, 5, 3, 19, 18, 25};
Output : 1
Minimum difference is between 18 and 19

Input  : {30, 5, 20, 9};
Output : 4
Minimum difference is between 5 and 9

Input  : {1, 19, -4, 31, 38, 25, 100};
Output : 5
Minimum difference is between 1 and -4
*/

var findMin = function (arr1) {
    // method 1: nested loop O(n*n)
    // method 2: sort and check i + i+1 O(nlogn)
    arr1 = arr1.sort(function (a, b) {
        return a - b;
    });
    var min = null;
    for (var i = 1; i < arr1.length; i++) {
        var prev = arr1[i - 1];
        var curr = arr1[i];
        if (min === null || min > Math.abs(prev - curr)) {
            min = Math.abs(prev - curr);
        }
    }
    console.log(min);
}
var arr1 = [1, 5, 3, 19, 18, 25];
findMin(arr1);