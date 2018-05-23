// ============================================================================
// Majority Element | GeeksforGeeks
// Majority Element: A majority element in an array A[] of size
// n is an element that appears more than n/2 times (and hence there is at 
// most one such element).
// https://www.youtube.com/watch?v=uwogtyFiDLg
// http://www.geeksforgeeks.org/majority-element/
// ============================================================================
let findMajor = function (arr) {
    console.log("findMajor");
    // create auxilary array to hold numbers 
    for (var i = 0; i < arr.length; i++) {
        var pivot = arr[i];
        var counter = 0;
        for (var j = i; j < arr.length; j++) {
            if (pivot == arr[j]) {
                counter++;
            }
            if (counter > Math.floor(arr.length / 2)) {
                console.log(pivot);
                return pivot;
            }
        }
    }
    console.log(-1);
    return -1;
}
let sampleArr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
// findMajor(sampleArr);
// ============================================================================
let binarySearchTree = function () {
    /*Insert elements in BST one by one and if an element is already present 
    then increment the count of the node. At any stage, if count of a node 
    becomes more than n/2 then return.
The method works well for the cases where n/2+1 occurrences of the majority 
element is present in the starting of the array, for example {1, 1, 1, 1, 1, 2, 3, 4}.

Time Complexity: If a binary search tree is used then time complexity will be 
O(n^2). If a self-balancing-binary-search tree is used then O(nlogn)
Auxiliary Space: O(n)*/
}
let sampleArrBs = [3, 3, 4, 2, 4, 4, 2, 4, 4];
binarySearchTree(sampleArrBs);
// ============================================================================


/* Function to print Majority Element */
function printMajority(a, size) {
    /* Find the candidate for Majority*/
    var cand = findCandidate(a, size);

    /* Print the candidate if it is Majority*/
    if (isMajority(a, size, cand))
        console.log(" %d ", cand);
    else
        console.log("No Majority Element");
}

/* Function to find the candidate for Majority */
function findCandidate(a, size) {
    var maj_index = 0, count = 1;
    var i;
    for (i = 1; i < size; i++) {
        if (a[maj_index] == a[i])
            count++;
        else
            count--;
        if (count == 0) {
            maj_index = i;
            count = 1;
        }
    }
    return a[maj_index];
}

/* Function to check if the candidate occurs more than n/2 times */
function isMajority(a, size, cand) {
    var i, count = 0;
    for (i = 0; i < size; i++)
        if (a[i] == cand)
            count++;
    if (count > size / 2)
        return 1;
    else
        return 0;
}
let sampleArrMaj = [3, 3, 4, 2, 4, 4, 2, 4, 4];
printMajority(sampleArrMaj, sampleArrMaj.length);
// ============================================================================

