// https://www.interviewbit.com/problems/min-steps-in-infinite-grid/
//param A : array of integers
//param B : array of integers
//return an integer

function MAX(x, y) {
    return (x > y) ? x : y;
}

var coverPoints = function (A, B) {
coverPoints2();
}
/**
 * @input X : Integer array corresponding to the X co-ordinate
 * @input n1 : Integer array's ( X ) length
 * @input Y : Integer array corresponding to the Y co-ordinate
 * @input n2 : Integer array's ( Y ) length
 *
 * Points are represented by (X[i], Y[i])
 * 
 * @Output Integer
 *
 */
function coverPoints2(X, n1, Y, n2) {
    var len = 0;
    var i;
    var startx, starty;

    if (n1 == 0) return 0;

    if (n1 == 1) return 0;

    startx = X[0];
    starty = Y[0];
    for (i = 1; i < n1; i++) {
        var x = abs(startx - X[i]);
        var y = abs(starty - Y[i]);
        startx = X[i];
        starty = Y[i];
        len += MAX(x, y);
    }
    return len;
}


var paramA = [-2];
var paramB = [7];
coverPoints(paramA, paramB);