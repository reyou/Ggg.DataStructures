// Move all zeroes to end of array
// http://www.geeksforgeeks.org/move-zeroes-end-array/
// https://www.youtube.com/watch?v=0jXTju134Hw
/*Given an array of random numbers, Push all the zero’s of a given array to the
 end of the array. For example, if the given arrays is 
 {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to 
 {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be 
 same. Expected time complexity is O(n) and extra space is O(1).
*/
var moveFun2 = function (arr) {
    var zeroCounter = 0;
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val == 0) {
            zeroCounter++;
        }
        else {
            if (zeroCounter > 0) {
                arr[i - zeroCounter] = arr[i];
                arr[i] = 0;
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//=============================================================================
var moveFun = function (arr) {
    var leftIndex = Math.floor((arr.length - 1) / 2);
    var rightIndex = leftIndex + 1;
    while (leftIndex > 0 && rightIndex < arr.length) {
        var leftVal = arr[leftIndex];
        var rightVal = arr[rightIndex];
        if (leftVal == 0) {
            if (rightVal != 0) {
                var temp = leftVal;
                arr[rightIndex] = leftVal;
                arr[leftIndex] = rightVal;
                leftIndex--;
                rightIndex++;
            }
            else {
                rightIndex++;
            }
        }
        else {
            leftIndex--;
            rightIndex++;
        }
    }
    console.log(arr);
}

var arr1 = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
moveFun2(arr1);

