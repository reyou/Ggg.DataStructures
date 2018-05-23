// Leaders in an array | GeeksforGeeks
// https://www.youtube.com/watch?v=NyRZm1pzNmQ
// http://www.geeksforgeeks.org/leaders-in-an-array/

// scan from right
// this run on time complexity O(n)
var scanFromRight = function (arr) {
    var max_from_right = arr[arr.length - 1];
    console.log(max_from_right);
    for (var i = arr.length - 2; i >= 0; i--) {
        if (max_from_right < arr[i]) {
            max_from_right = arr[i];
            console.log(max_from_right);
        }
    }
}

// this is generally not recommended way
var leardersInArray = function (arr) {
    var leaders = [];
    for (var i = 0; i < arr.length; i++) {
        var pivot = arr[i];
        for (var j = i; j < arr.length; j++) {
            var target = arr[j];
            if (target > pivot) {
                break;
            }
            if (j + 1 == arr.length) {
                leaders.push(pivot);
            }
        }
    }
    console.log(leaders);
}

var arr = [16, 17, 4, 3, 5, 2];
// leardersInArray(arr);
scanFromRight(arr);