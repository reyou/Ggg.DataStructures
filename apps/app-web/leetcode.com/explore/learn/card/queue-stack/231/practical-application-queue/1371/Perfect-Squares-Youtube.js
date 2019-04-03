// Title:	LeetCode #279. Perfect Squares Explanation and Solution - YouTube
// Url:	https://www.youtube.com/watch?v=KaXeidsmvVQ

function numSquares(n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = i;
  }
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i <= n; i++) {
    // 4, 5, 6,
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}
console.log(numSquares(12));
