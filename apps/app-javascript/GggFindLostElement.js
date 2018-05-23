//=============================================================================
// Find lost element from a duplicated array
// https://www.youtube.com/watch?v=dx8twFuPgvg
// http://www.geeksforgeeks.org/find-lost-element-from-a-duplicated-array/
//=============================================================================
// Given two arrays which are duplicates of each other except one element,
// that is one element from one of the array is missing, we need to find that 
// missing element.
/*
Input:  arr1[] = {1, 4, 5, 7, 9}
        arr2[] = {4, 5, 7, 9}
Output: 1
1 is missing from second array.

Input: arr1[] = {2, 3, 4, 5}
       arr2[] = {2, 3, 4, 5, 6}
Output: 6
6 is missing from first array.*/
var findLostElement = function (arr1, arr2) {
    // method1: nested loop until not found or exhausted
    // method2: dictionary / hashmap
    // method3: total and minus
    // method4: missing candidate
    var can1 = null;
    var can2 = null;
    var l1 = arr1.length;
    var l2 = arr2.length;
    var c = l1 > l2 ? l2 : l1;
    for (var i = 0; i < c; i++) {
        var v1 = arr1[i];
        var v2 = arr2[i];
        if (v1 != v2) {
            if (can1 == null) {
                can1 = v1;
            }
            if (can2 == null) {
                can2 = v2;
            }
        }
        if (v1 == can2) {
            can2 = null;
        }
        if (v2 == can1) {
            can1 = null;
        }
    }
    if (can1 != null) {
        console.log(can1);
    }
    else if (can2 != null) {
        console.log(can2);
    }
    else {
        console.log(arr2[arr2.length - 1]);
    }

}

var arr1 = [2, 3, 4, 5];
var arr2 = [2, 3, 4, 5, 6];
findLostElement(arr1, arr2);
//=============================================================================