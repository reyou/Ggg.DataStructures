//=============================================================================
// Replace every element with the greatest element on right side | GeeksforGeeks
// https://www.youtube.com/watch?v=bLb8e83OK7o
// http://www.geeksforgeeks.org/replace-every-element-with-the-greatest-on-right-side/
/*For example, if the array is {16, 17, 4, 3, 5, 2}, then it should be modified 
to {17, 5, 5, 5, 2, -1}.
*/

function replaceArr(arr) {
    // right to left
    var rmax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (var i = arr.length - 2; i >= 0; i--) {  
        var c = arr[i];  
        arr[i] = rmax; 
        if (c > rmax) {
            rmax = c;
        }
    }
    return arr;
};

var arr = [16, 17, 4, 3, 5, 2];
var result = replaceArr(arr);
console.log(result);