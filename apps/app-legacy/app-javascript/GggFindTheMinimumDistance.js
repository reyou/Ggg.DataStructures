// Find the minimum distance between two numbers
// https://www.youtube.com/watch?v=hoceGcqQczM
// http://www.geeksforgeeks.org/find-the-minimum-distance-between-two-numbers/
// unsorted array between 2 numbers

var trickyFun = function (arr, x, y) {
    var tempX = null;
    var tempY = null;
    var minDist = null;
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        if (v == x) {
            tempX = i;
        }
        else if (v == y) {
            tempY = i;
        }
        if (tempX != null && tempY != null && (Math.abs(tempX - tempY) < minDist || minDist == null)) {
            minDist = Math.abs(tempX - tempY);
        }
    }
    console.log(minDist);
}

var twoLoopsFun = function (arr, x, y) {
    var xInd = [];
    var yInd = [];
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (n == x) {
            xInd.push(i);
        }
        else if (n == y) {
            yInd.push(i);
        }
    }
    var minDist = null;
    for (var i = 0; i < xInd.length; i++) {
        var xVal = xInd[i];
        for (var j = 0; j < yInd.length; j++) {
            var yVal = yInd[j];
            var diff = Math.abs(xVal - yVal);
            if (diff < minDist || minDist === null) {
                minDist = diff;
            }
        }
    }
    console.log(minDist);
}

var arr = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3];
// twoLoopsFun(arr, 3, 6);
trickyFun(arr, 3, 6);

