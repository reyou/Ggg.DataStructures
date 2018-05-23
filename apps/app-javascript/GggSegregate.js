// Segregate 0s and 1s in an array
// https://www.youtube.com/watch?v=DR7NgPnErxI
// http://www.geeksforgeeks.org/segregate-0s-and-1s-in-an-array-by-traversing-array-once/
/*You are given an array of 0s and 1s in random order. 
Segregate 0s on left side and 1s on right side of the array. 
Traverse array only once.*/
var segregateFun = function (arr) {
    var aux = [];
    var leftP = 0;
    var rightP = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (cur === 0) {
            aux[leftP] = cur;
            leftP++;
        }
        else {
            aux[rightP] = cur;
            rightP--;
        }
    }
    console.log(aux);
}
var arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
// segregateFun(arr);

/*Function to put all 0s on left and all 1s on right*/
function segregate0and1(arr, size) {
    /* Initialize left and right indexes */
    var left = 0;
    var right = size - 1;

    while (left < right) {
        /* Increment left index while we see 0 at left */
        while (arr[left] == 0 && left < right)
            left++;

        /* Decrement right index while we see 1 at right */
        while (arr[right] == 1 && left < right)
            right--;

        /* If left is smaller than right then there is a 1 at left
           and a 0 at right.  Exchange arr[left] and arr[right]*/
        if (left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
}
var arr2 = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
segregate0and1(arr2, arr2.length);
console.log(arr2);