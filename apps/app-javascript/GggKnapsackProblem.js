// Dynamic Programming | Set 10 ( 0-1 Knapsack Problem)
// https://www.youtube.com/watch?v=T4bY72lCQac
// http://www.geeksforgeeks.org/knapsack-problem/
class Knapsack {
    // A utility function that returns maximum of two integers
    static max(a, b) {
        return (a > b) ? a : b;
    }
    // Returns the maximum value that can be put in a knapsack of capacity W
    static knapSack(W, wt, val, n) {
        // base case
        if (n == 0 || W == 0) {
            return 0;
        }
        // If weight of the nth item is more than Knapsack capacity W, then
        // this item cannot be included in the optimal solution
        if (wt[n - 1] > W) {
            return knapSack(W, wt, val, n - 1);
        }
        // Return the maximum of two cases: 
        // (1) nth item included 
        // (2) not included
        else return Knapsack.max(val[n - 1] + Knapsack.knapSack(W - wt[n - 1], wt, val, n - 1), Knapsack.knapSack(W, wt, val, n - 1));
    }
}

var knapsackFun = function () {
    var val = [60, 100, 120];
    var wt = [10, 20, 30];
    var W = 50;
    var n = val.length;
    console.log(Knapsack.knapSack(W, wt, val, n));
}
//knapsackFun();
//=============================================================================
var knapsackTempArrayFun = function () {
    class Knapsack {
        static Create2DArray(rows) {
            var arr = [];

            for (var i = 0; i < rows; i++) {
                arr[i] = [];
            }

            return arr;
        }
        static max(a, b) {
            return a > b ? a : b;
        }
        static knapSack(W, wt, val, n) {
            var i, w;
            var K = Knapsack.Create2DArray(n + 1);
            // Build table K[][] in bottom up manner
            for (i = 0; i <= n; i++) {
                for (w = 0; w <= W; w++) {
                    if (i == 0 || w == 0)
                        K[i][w] = 0;
                    else if (wt[i - 1] <= w)
                        K[i][w] = Knapsack.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
                    else
                        K[i][w] = K[i - 1][w];
                }
            }
            return K[n][W];
        }
    }

    // execute
    var val = [60, 100, 120];
    var wt = [10, 20, 30];
    var W = 50;
    var n = val.length;
    console.log(Knapsack.knapSack(W, wt, val, n));

}
knapsackTempArrayFun();