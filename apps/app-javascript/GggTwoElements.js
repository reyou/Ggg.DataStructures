// Two elements whose sum is closest to zero
// http://www.geeksforgeeks.org/two-elements-whose-sum-is-closest-to-zero/
// https://www.youtube.com/watch?v=HUwYrtrOcd0
//=============================================================================
/*
Question: An Array of integers is given, both +ve and -ve. You need to find 
the two elements such that their sum is closest to zero.
For the below array, program should print -80 and 85.
[1, 60, -10, 70, -80, 85]
*/
//=============================================================================
var twoElementsFun = function (arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    var min = null;
    var a;
    var b;
    var leftIndex = 0;
    var rightIndex = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        if (leftIndex == rightIndex) {
           continue;
        }
        var l = arr[leftIndex];
        var r = arr[rightIndex];
        var sum = l + r;
        var absV = Math.abs(sum);
        if (absV === 0) {
            a = l;
            b = r;
            return;
        }
        else if (absV > 0) {
            rightIndex--;
        }
        else {
            leftIndex++;
        }
        if (min === null || (absV < min)) {
            min = absV;
            a = l;
            b = r;
        }
    }
    console.log("a: ", a, "b: ", b);
}
var arr1 = [1, 60, -10, 70, -80, 85];
twoElementsFun(arr1);
//=============================================================================