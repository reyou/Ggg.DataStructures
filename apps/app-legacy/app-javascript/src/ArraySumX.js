// ============================================================================
// Given an array A[] and a number x, check for pair in A[] with sum as x
// https://www.youtube.com/watch?v=I7Nz1XzzPYc
// http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/
// Write a C program that, given an array A[] of n numbers and another number x,
// determines whether or not there exist two elements in S whose sum is exactly x.
var sumFun = function (arr, sum) {
    // double loop and check elements
    for (var i = 0; i < arr.length; i++) {
        var v1 = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            var v2 = arr[j];
            if (v1 + v2 === sum) {
                console.log("numbers:", v1, v2);
            }
        }
    }
}
// var arr = [1, 4, 45, 6, 10, -8];
// sumFun(arr, 16);
// ============================================================================
// determines whether or not there exist two elements in S whose sum is exactly x.
var sumFunWithSort = function (arr, sum) {
    // double loop and check elements
    // O(n*logn)
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    // N
    for (var i = 1; i < arr.length; i++) {
        var prev = arr[i - 1];
        var curr = arr[i];
        if (prev + curr > sum) {
            break;
        }
        if (prev + curr == sum) {
            console.log("numbers:", prev, curr);
        }
    }

}
// var arr = [1, 4, 45, 6, 10, -8];
// sumFunWithSort(arr, 16);
// ============================================================================
function printpairs(arr, sum) {
    // Declares and initializes the whole array as false
    var binmap = [];
    for (var i = 0; i < arr.length; ++i) {
        var temp = sum - arr[i];
        // checking for condition
        if (temp >= 0 && binmap[temp]) {
            console.log("Pair with given sum " + sum + " is (" + arr[i] + ", " + temp + ")");
        }
        binmap[arr[i]] = true;
    }
}
 var arr = [1, 4, 45, 6, 10, -8];
 printpairs(arr, 16);
// ============================================================================