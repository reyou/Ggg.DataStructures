// https://www.youtube.com/watch?v=NFvAD5na5oU
// http://www.geeksforgeeks.org/find-a-peak-in-a-given-array/
// this uses same technique of binary search
// but in here list is unsorted. But the target
// we are looking for depends on it's neighbours
// so same type of appproach works.

var divideConquer = function (arr) {
    var n = arr.length;
    var result = findPeakUtil(arr, 0, n - 1, n);
    console.log(result);
}

function findPeakUtil(arr, low, high, n) {
    // Find index of middle element
    var mid = low + (high - low) / 2;  /* (low + high)/2 */
    mid = Math.floor(mid);
    // Compare middle element with its neighbours (if neighbours exist)
    if ((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid]))
        return mid;

    // If middle element is not peak and its left neighbour is greater 
    // than it, then left half must have a peak element
    else if (mid > 0 && arr[mid - 1] > arr[mid]) return findPeakUtil(arr, low, (mid - 1), n);

    // If middle element is not peak and its right neighbour is greater
    // than it, then right half must have a peak element
    else return findPeakUtil(arr, (mid + 1), high, n);
}

var printPeeks = function (arr) {
    if (!arr || arr.length == 0) {
        return null;
    }
    if (arr.length == 1) {
        return arr[0];
    }
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        // first
        if (i == 0) {
            if (cur > arr[i + 1]) {
                console.log(cur);
            }
        }
        // last
        else if (i + 1 == arr.length) {
            if (cur > arr[i - 1]) {
                console.log(cur);
            }
        }
        // middle
        else {
            if (cur > arr[i - 1] && cur > arr[i + 1]) {
                console.log(cur);
            }
        }
    }
}

var arr = [1, 3, 20, 4, 1, 0];
// printPeeks(arr);
divideConquer(arr);