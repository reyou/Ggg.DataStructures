// Insertion Sort
// http://www.geeksforgeeks.org/insertion-sort/
// https://www.youtube.com/watch?v=OGzPmgsI-pQ
//=============================================================================
var insertionSortFun = function (arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position*/
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
var arr1 = [12, 11, 13, 5, 6];
insertionSortFun(arr1);
console.log(arr1);
//=============================================================================