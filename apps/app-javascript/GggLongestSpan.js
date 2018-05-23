// http://www.geeksforgeeks.org/longest-span-sum-two-binary-arrays/
// ============================================================================
// Output: 4
// The longest span with same sum is from index 1 to 4.

function print(obj) {
    var result = JSON.stringify(obj, null, 4);
    console.log(result);
}
var arr1 = [0, 1, 0, 0, 0, 0, 0, 1];
var arr2 = [1, 0, 1, 0, 0, 0, 1, 0];

let longestSpanFun2 = function () {
    var n = arr1.length;
    // initialize result
    var maxLen = 0;
    // initialize prefix sums of two arrays
    var preSum1 = 0, preSum2 = 0;

    // create an array to store starting and ending
    // indexes of all possible diff values. diff[i]
    // would store starting and ending points for
    // difference "i-n"
    var diff = new Array();

    // initialize everything to -1
    for (var i = 0; i < 2 * n + 1; i++) {
        diff[i] = -1;
    }

    for (var i = 0; i < n; i++) {
        // update prefix sums
        preSum1 += arr1[i];
        preSum2 += arr2[i];

        // compute current diff and index to be used
        // in diff array. note that diff can be negative
        // and can have min value as -1
        var curr_diff = preSum1 - preSum2;
        var diffIndex = n + curr_diff;

        // if current diff is 0, then there are a same number
        // of 1's so far in both arrays, i.e., (i+1) is 
        // maximum length.
        if (curr_diff == 0) {
            maxLen = i + 1;
        }
        // if current diff is seen first time, then update
        // starting index of diff.
        else if (diff[diffIndex] == -1) {
            diff[diffIndex] = i;
        }
        // current diff is already seen
        else {
            // find length of this same sum common span
            var len = i - diff[diffIndex];
            // update max len if needed
            if (len > maxLen) {
                maxLen = len;
            }
        }
    }
    return maxLen;
}
print(longestSpanFun2());

// best possible -> least possible
let longestSpanFun = function () {
    // initialize result
    var maxLen = 0;

    var n = arr1.length;
    // one by one pick all possible starting points
    // of subarrays
    for (var i = 0; i < n; i++) {
        // initialize sums of current subarrays
        var sum1 = 0, sum2 = 0;
        // consider all points for starting with arr[i]
        for (var j = i; j < n; j++) {
            // update sums
            sum1 += arr1[j];
            sum2 += arr2[j];
            // if sums are same and current length is
            // more than maxLen, update maxLen
            if (sum1 == sum2) {
                var len = j - i + 1;
                if (len > maxLen) {
                    maxLen = len;
                }
            }

        }
    }
    return maxLen;
}
// print(longestSpanFun());


