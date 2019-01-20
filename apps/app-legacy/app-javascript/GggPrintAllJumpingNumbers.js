//=============================================================================
// Print all Jumping Numbers smaller than or equal to a given value
// http://www.geeksforgeeks.org/print-all-jumping-numbers-smaller-than-or-equal-to-a-given-value/
// https://www.youtube.com/watch?v=5lFiDUmTtCM
//=============================================================================
// A number is called as a Jumping Number if all adjacent digits in it differ 
// by 1. The difference between ‘9’ and ‘0’ is not considered as 1. All single 
// digit numbers are considered as Jumping Numbers.
//=============================================================================
/*Input: x = 20
Output:  0 1 2 3 4 5 6 7 8 9 10 12

Input: x = 105
Output:  0 1 2 3 4 5 6 7 8 9 10 12
         21 23 32 34 43 45 54 56 65
         67 76 78 87 89 98 101

Note: Order of output doesn't matter, 
i,e., numbers can be printed in any order*/
//=============================================================================
var printJumping = function (n) {
    var divider = 10;

    for (var i = 0; i <= n; i++) {
        if (i % 10 == i) {
            console.log(i);
        }
        else {
            var parts = [];
            var result = i;
            while (result > 0) {
                var isMoreThanTen = false;
                if (result >= 10) {
                    isMoreThanTen = true;
                }
                var remainder = parseInt(result % 10);
                result = parseInt(result / 10);
                parts.push(remainder);
            }
            var isPrint = true;
            for (var j = 1; j < parts.length; j++) {
                var cur = parts[j];
                var prev = parts[j - 1];
                if (Math.abs(cur - prev) != 1) {
                    isPrint = false;
                }
            }
            if (isPrint) {
                console.log(i);
            }
        }
    }
}
// printJumping(20);
printJumping(105);
//=============================================================================