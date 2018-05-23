//=============================================================================
// Bubble Sort
// http://www.geeksforgeeks.org/bubble-sort/
// https://www.youtube.com/watch?v=nmhjrI-aW5o
//=============================================================================
var bubbleSortFun = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            var left = arr[j - 1];
            var right = arr[j];
            if (left > right) {
                swap(arr, j - 1, j);
            }
        }
    }
}
var swap = function (arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
var arr1 = [64, 34, 25, 12, 22, 11, 90]
bubbleSortFun(arr1);
console.log(arr1);
//=============================================================================
