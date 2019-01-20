//=======================================================================================
// Given an array of integers print the missing elements that lie in range 0-99. 
// https://www.youtube.com/watch?v=qjNVJTUge7s
// http://www.geeksforgeeks.org/print-missing-elements-that-lie-in-range-0-99/
// Expected time complexity O(n), where n is the size of the input array.
var printMissingElements = function (arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    // check for 0-99
    // 0, 2, 3, 10, 88, 105, 200
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr >= 0 && curr <= 99) {
            var next = arr[i + 1];
            if (next > 99) {
                next = 100;
            }
            if (curr + 1 != next) {
                var dif = next - curr - 1;
                if (dif === 1) {
                    console.log(dif);
                }
                else {
                    console.log(curr + 1, "-", next - 1);
                }
            }
        }

    }
}

var arr = [88, 105, 3, 2, 200, 0, 10];
printMissingElements(arr);
/*
Output: 1
4-9
11-87
89-99
*/