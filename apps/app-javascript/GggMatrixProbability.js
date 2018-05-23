//=============================================================================
// A matrix probability question
// http://www.geeksforgeeks.org/a-matrix-probability-question/
// https://www.youtube.com/watch?v=1VbNIBsrPCM
/*The idea is to perform something similar to DFS. We recursively traverse in each
of the 4 allowed direction and for each cell encountered, we calculate the required
probability with one less move. As each direction has equal probability, each
direction will contribute to 1/4 of total probability of that cell i.e. 0.25.
We return 0 if we step outside the matrix and return 1 if N steps are completed 
without crossing matrix boundaries.*/


// check if (x, y) is valid matrix coordinate
function isSafe(x, y, m, n) {
    return (x >= 0 && x < m && y >= 0 && y < n);
}

// function to calculate probability that after N
// moves from a given position (x, y) in m x n matrix,
// boundaries of the matrix will not be crossed
function findProbability(m, n, x, y, N) {
    // boundry crossed
    if (!isSafe(x, y, m, n))
        return 0.0;
    // N steps taken
    if (N == 0)
        return 1.0;

    // initialize result
    var prob = 0.0;

    // move up
    prob += findProbability(m, n, x - 1, y, N - 1) * 0.25;

    // move right
    prob += findProbability(m, n, x, y + 1, N - 1) * 0.25;

    // move down
    prob += findProbability(m, n, x + 1, y, N - 1) * 0.25;

    // move left
    prob += findProbability(m, n, x, y - 1, N - 1) * 0.25;

    return prob;
}

