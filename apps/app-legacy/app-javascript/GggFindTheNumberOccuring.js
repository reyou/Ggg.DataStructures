//=============================================================================
// Find the Number Occurring Odd Number of Times
// https://www.youtube.com/watch?v=hySR1exD5PE
// http://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/
/*Given an array of positive integers. All numbers occur even number of times 
except one number which occurs odd number of times. Find the number in O(n)
time & constant space.
*/
var findNumber = function (arr) {
    var hashTable = [];
    for (var i = 0; i < arr.length; i++) {
        let v = arr[i];
        var indexVal = hashTable[v];
        if (indexVal) {
            hashTable[v] = indexVal + 1;
        }
        else {
            hashTable[v] = 1;
        }
    }
    for (var i = 0; i < hashTable.length; i++) {
        var v = hashTable[i];
        if (v % 2 == 1) {
            console.log(v);
        }
    }
}

var arr = [1, 2, 3, 2, 3, 1, 3];
// findNumber(arr);
//=============================================================================
/*The Best Solution is to do bitwise XOR of all the elements. 
XOR of all elements gives us odd occurring element. 
Please note that XOR of two elements is 0 if both elements are same and XOR of 
a number x with 0 is x.
*/
var getOddOccurrence = function (ar, ar_size) {
    var i;
    var res = 0;
    let ar_i;
    for (i = 0; i < ar_size; i++) {
        ar_i = ar[i]
        console.log("Before: ");
        console.log("res = res ^ ar_i;");
        console.log("" + res + " = " + res + " ^ " + ar_i + ";");
        console.log("\n");
        res = res ^ ar_i;
        console.log("After: ");
        console.log("res = res ^ ar_i;");
        console.log("" + res + " = " + res + " ^ " + ar_i + ";");
        console.log("\n");
    }
    return res;
}
var oddFun = function () {
    var ar = [2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2];
    var n = ar.length;
    console.log(getOddOccurrence(ar, n));
}
oddFun();
//=============================================================================