// Find minimum number of merge operations to make an array palindrome
// http://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/
// https://www.youtube.com/watch?v=wBGxPHXAPM4
/*Input : arr[] = {15, 4, 15}
Output : 0
Array is already a palindrome. So we
do not need any merge operation.

Input : arr[] = {1, 4, 5, 1}
Output : 1
We can make given array palindrome with
minimum one merging (merging 4 and 5 to
make 9)

Input : arr[] = {11, 14, 15, 99}
Output : 3
We need to merge all elements to make a palindrome.
*/
var findMinPal = function (arr) {
    var leftP = 0;
    var rightP = arr.length - 1;
    var stepCounter = 0;
    while (leftP < rightP) {
        var leftV = arr[leftP];
        var rightV = arr[rightP];
        if (leftV == rightV) {
            leftP++;
            rightP--;
        }
        else if (leftV < rightV) {
            if (leftP + 1 > rightP) {
                break;
            }
            else {
                arr[leftP + 1] = arr[leftP + 1] + leftV;
                leftP++;
                stepCounter++
            }
        }
        else if (rightV < leftV) {
            if (rightP - 1 < leftP) {
                break;
            }
            else {
                arr[rightP - 1] = arr[rightP - 1] + rightV;
                rightP--;
                stepCounter++
            }
        }
    }
    console.log(stepCounter);
}
var arr1 = [2, 4, 50, 14, 1, 5];
var arr2 = [1, 4, 5, 1];
var arr3 = [15, 4, 15];
findMinPal(arr3);