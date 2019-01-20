// Count Strictly Increasing Subarrays
// https://www.youtube.com/watch?v=eMuC2LCoMvU
// http://www.geeksforgeeks.org/count-strictly-increasing-subarrays/
// Expected Time Complexity : O(n)
// Expected Extra Space: O(1)
var subArr = function (arr) {
    var tempAr = [];
    var arrCount = 0;
    var prevArrCounter = 0;
    for (var i = 1; i < arr.length; i++) {
        var prev = arr[i - 1];
        var curr = arr[i];
        if (prev < curr) {
            arrCount += 1 + prevArrCounter;
            prevArrCounter++;
        }
        else {
            prevArrCounter = 0;
        }
    }
    return arrCount;
}

let funqFun = function () {
    console.log("funqFun");
    var arr = [1, 2, 3, 4];
    var result = subArr(arr);
    console.log(result);
    console.log("\n");
}
funqFun();
//=============================================================================
let funwFun = function () {
    console.log("funwFun");
    var arr = [1, 4, 3, 5];
    var result = subArr(arr);
    console.log(result);
    console.log("\n");
}
funwFun();
//=============================================================================