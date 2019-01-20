// Pythagorean Triplet in an array
// https://www.youtube.com/watch?v=oNtexwxSZ3s
// http://www.geeksforgeeks.org/find-pythagorean-triplet-in-an-unsorted-array/
// TODO: this is not correct solution, but very close to solution
// you get the idea! finish it!
var tripletFun = function (arr) {
    arr = arr.sort();
    for (var i = 1; i < arr.length; i++) {
        var prev = arr[i - 1];
        var curr = arr[i];
        if (i + 1 > arr.length - 1) {
            return;
        }
        var next = arr[i + 1];
        if (prev * prev + curr * curr == next * next) {
            console.log(prev, curr);
        }
    }
}

var arr = [3, 1, 4, 6, 5];
tripletFun(arr);