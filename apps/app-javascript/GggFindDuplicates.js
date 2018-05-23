//=============================================================================
// Find duplicates in O(n) time and O(1) extra space | Set 1
// https://www.youtube.com/watch?v=HuZJqRDOPo0
// http://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/
//=============================================================================\
// Given an array of n elements which contains elements from 0 to n-1, with any 
// of these numbers appearing any number of times. Find these repeating numbers 
// in O(n) and using only constant memory space.
// For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer 
// should be 1, 3 and 6.
//=============================================================================
function printRepeating(arr, size) {
    console.log("The repeating elements are : ");
    for (var i = 0; i < size; i++) {
        var v = arr[i];
        var abs = Math.abs(v);
        var arrAbs = arr[abs];
        if (arrAbs >= 0) {
            arr[abs] = -arrAbs;
        }
        else {
            console.log(abs + " ");
        }
    }
}
var arr2 = [1, 2, 3, 1, 3, 6, 6];
printRepeating(arr2, arr2.length)
//=============================================================================