var spiralOrderMatrixFun = function () {
    var A = [
        [1, 2]
    ];
    let rowCount = A.length;
    let colCount = A[0].length;
    var resultArray = [];
    var rowPointer = 0;
    var colPointer = 0;
    let condition = true;
    while (condition) {
        if (rowCount <= 0 || colCount <= 0) {
            condition = false;
            break;
        }
        // lr
        for (var i = 0; i < colCount; i++) {
            resultArray.push(A[rowPointer][colPointer]);
            colPointer++;
        }
        colPointer--;
        rowPointer++;
        rowCount--;
        // rd
        for (var i = 0; i < rowCount; i++) {
            if (rowPointer < A.length) {
                resultArray.push(A[rowPointer][colPointer]);
                rowPointer++;
            }
        }
        colCount--;
        colPointer--;
        rowPointer--;
        // dl
        if (rowCount > 0) {
            for (var i = 0; i < colCount; i++) {
                if (colPointer >= 0) {
                    resultArray.push(A[rowPointer][colPointer]);
                    colPointer--;
                }
            }
        }

        colPointer++;
        rowCount--;
        // lu
        if (colCount > 0) {
            for (var i = 0; i < rowCount; i++) {
                rowPointer--;
                resultArray.push(A[rowPointer][colPointer]);
            }
        }
        colCount--;
        colPointer++;

    }
    console.log("resultArray", resultArray);

}
spiralOrderMatrixFun();