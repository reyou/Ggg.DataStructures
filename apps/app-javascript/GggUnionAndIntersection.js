// Union and Intersection of two sorted arrays | GeeksforGeeks
// https://www.youtube.com/watch?v=EQQp4B_CU5Q
// http://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/
// time comlexity: O(m+n)
function Union(arr1, arr2) {
    var l1 = arr1.length;
    var l2 = arr2.length;
    var c1 = 0;
    var c2 = 0;
    while (c1 < l1 && c2 < l2) {
        var v1 = arr1[c1];
        var v2 = arr2[c2];
        if (v1 < v2) {
            console.log(v1);
            c1++;
        }
        else if (v1 == v2) {
            console.log(v1);
            c1++;
            c2++;
        }
        // v1 > v2
        else {
            console.log(v2);
            c2++;
        }
    }
    // arr1
    for (var i = c1; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
    // arr2
    for (var i = c2; i < arr2.length; i++) {
        console.log(arr2[i]);
    }

}
let unionExample = function () {
    let arr1 = [1, 3, 4, 5, 7]
    let arr2 = [2, 3, 5, 6]
    Union(arr1, arr2);
}
console.log("unionExample");
unionExample();
console.log("\n");

function Intersection(arr1, arr2) {
    var l1 = arr1.length;
    var l2 = arr2.length;
    var c1 = 0;
    var c2 = 0;
    while (c1 < l1 && c2 < l2) {
        var v1 = arr1[c1];
        var v2 = arr2[c2];
        if (v1 < v2) {
            c1++;
        }
        else if (v1 > v2) {
            c2++;
        }
        else {
            console.log(v1);
            c1++;
            v2++;
        }
    }
}

let intersectionExample = function () {
    let arr1 = [1, 3, 4, 5, 7]
    let arr2 = [2, 3, 5, 6]
    Intersection(arr1, arr2);
}
console.log("intersectionExample");
intersectionExample();
console.log("\n");