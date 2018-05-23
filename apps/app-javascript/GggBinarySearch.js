// https://www.youtube.com/watch?v=T2sFYY-fT5o
// http://geeksquiz.com/binary-search/
function BS(arr, L, R, x) {
    if (R >= L) {
        var mid = L + (R - L) / 2;
        mid = Math.floor(mid);
        if (arr[mid] == x) {
            return mid;
        }
        else if (arr[mid] > x) {
            return BS(arr, 0, mid - 1, x);
        }
        else {
            return BS(arr, mid + 1, R, x);
        }
    }
    else {
        return -1;
    }
}
var arr = [1, 4, 6, 7, 8, 9, 10, 11, 34, 55]
var resIndex = BS(arr, 0, arr.length - 1, 11);
console.log("resIndex:", resIndex);
