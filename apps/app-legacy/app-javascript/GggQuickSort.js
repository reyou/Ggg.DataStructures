//=============================================================================
// https://stackoverflow.com/questions/5185864/javascript-quicksort/45581276#45581276
//=============================================================================
const QuickSort = function (A, start, end) {
    // 
    if (start >= end) {
        return;
    }
    // return index of the pivot
    var pIndex = Partition(A, start, end);
    // partition left side
    QuickSort(A, start, pIndex - 1);
    // partition right side
    QuickSort(A, pIndex + 1, end);
}
const Partition = function (A, start, end) {
    if (A.length > 1 == false) {
        return 0;
    }
    let pivotIndex = Math.ceil((start + end) / 2);
    let pivotValue = A[pivotIndex];
    for (var i = 0; i < A.length; i++) {
        var leftValue = A[i];
        // 
        if (i < pivotIndex) {
            if (leftValue > pivotValue) {
                let temp = pivotValue;
                A[pivotIndex] = leftValue;
                A[i] = pivotValue;
                pivotIndex = i;
            }
        }
        else if (i > pivotIndex) {
            if (leftValue < pivotValue) {
                let temp = pivotValue;
                A[pivotIndex] = leftValue;
                A[i] = pivotValue;
                pivotIndex = i;
            }
        }
    }
    return pivotIndex;

}
//=============================================================================
const QuickSortTest = function () {
    const arrTest = [3, 5, 6, 22, 7, 1, 8, 9];
    QuickSort(arrTest, 0, arrTest.length - 1);
    console.log("arrTest", arrTest);
}
// 
QuickSortTest();
//=============================================================================