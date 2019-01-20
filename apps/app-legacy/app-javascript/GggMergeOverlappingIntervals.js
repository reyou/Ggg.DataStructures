//=============================================================================
// Merge Overlapping Intervals
// https://www.youtube.com/watch?v=WdgAKCnWnwA
// http://www.geeksforgeeks.org/merging-intervals/
//=============================================================================
/*For example, let the given set of intervals be {{1,3}, {2,4}, {5,7}, {6,8} }. 
The intervals {1,3} and {2,4} overlap with each other, so they should be merged 
and become {1, 4}. Similarly {5, 7} and {6, 8} should be merged and become {5, 8} */
//=============================================================================
// stack solution
//=============================================================================
var overlapFun = function (arr1) {
    return overlapFunUtility(arr1, 0);
}
var overlapFunUtility = function (arr1, counter) {
    var resultArr = [];
    if (counter + 1 > arr1.length - 1) {
        return arr1;
    }
    var leftArr = arr1[counter];
    var rightArr = arr1[counter + 1];
    if (leftArr[1] > rightArr[0] && leftArr[1] < rightArr[1]) {
        resultArr.push([leftArr[0], rightArr[1]]);
        for (var i = counter + 2; i < arr1.length; i++) {
            resultArr.push(arr1[i]);
        }
    }
    else {
        resultArr = arr1;
    }
    counter++;
    return overlapFunUtility(resultArr, counter)
}
//
var arr1 = [[1, 3], [2, 4], [5, 7], [6, 8]];
var result = overlapFun(arr1);
console.log(result)
//=============================================================================