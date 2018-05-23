// Ceiling in a sorted array
// https://www.youtube.com/watch?v=Nzm9emAkSCM
// http://www.geeksforgeeks.org/ceiling-in-a-sorted-array/
//=============================================================================
/*
For x = 0:    floor doesn't exist in array,  ceil  = 1
For x = 1:    floor  = 1,  ceil  = 1
For x = 5:    floor  = 2,  ceil  = 8
For x = 20:   floor  = 19,  ceil doesn't exist in array
*/
var findFloorAndCeiling = function (arr, n) {
    if (!arr || arr.length === 0) {
        console.log("arr is null or empty.");
        return;
    }
    // method 1 = linear search
    var startIndex = 0;
    var endIndex = arr.length - 1;
    findFloorAndCeilingUtil(arr, n, startIndex, endIndex);
}

function findFloorAndCeilingUtil(arr, n, startIndex, endIndex) {
    var arrSize = arr.length;
    var midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var mid = arr[midIndex];
    if (mid == n) {
        console.log("floor: ", arr[midIndex - 1]);
        console.log("ceiling: ", arr[midIndex + 1]);
    }
    else if (mid > n) {
        if (startIndex > 0) {
            console.log("floor: ", arr[midIndex - 1]);
            return;
        }
        findFloorAndCeilingUtil(arr, n, 0, midIndex - 1);
    }
    else {
        if (endIndex < arrSize - 1) {
            console.log("ceiling: ", arr[midIndex + 1]);
            return;
        }
        findFloorAndCeiling(arr, n, midIndex + 1, arrSize - 1);
    }
}

// var arr = [1, 2, 8, 10, 10, 12, 19];
// findFloorAndCeiling(arr, 5);
//=============================================================================
function ceilSearch(arr, low, high, x) {
    var mid;

    /* If x is smaller than or equal to the 
       first element, then return the first element */
    if (x <= arr[low])
        return low;

    /* If x is greater than the last 
       element, then return -1 */
    if (x > arr[high])
        return -1;

    /* get the index of middle element 
       of arr[low..high]*/
    mid = (low + high) / 2;  /* low + (high - low)/2 */

    /* If x is same as middle element, 
       then return mid */
    if (arr[mid] == x)
        return mid;

    /* If x is greater than arr[mid], then 
       either arr[mid + 1] is ceiling of x or 
       ceiling lies in arr[mid+1...high] */
    else if (arr[mid] < x) {
        if (mid + 1 <= high && x <= arr[mid + 1])
            return mid + 1;
        else
            return ceilSearch(arr, mid + 1, high, x);
    }

    /* If x is smaller than arr[mid], 
       then either arr[mid] is ceiling of x 
       or ceiling lies in arr[mid-1...high] */
    else {
        if (mid - 1 >= low && x > arr[mid - 1])
            return mid;
        else
            return ceilSearch(arr, low, mid - 1, x);
    }
}
var ceilSearchFun = function () {
    var arr = [1, 2, 8, 10, 10, 12, 19];
    var n = arr.length;
    var x = 8;
    var index = ceilSearch(arr, 0, n - 1, x);
    if (index == -1)
        console.log("Ceiling of " + x + " doesn't exist in array");
    else
        console.log("ceiling of " + x + " is " + arr[index]);
}
 ceilSearchFun();
//=============================================================================