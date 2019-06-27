let canPartition = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  // if 'sum' is a an odd number, we can't have two subsets with equal sum
  if (sum % 2 !== 0) {
    return false;
  }

  const dp = [];
  return canPartitionRecursive(dp, num, sum / 2, 0);
};

function canPartitionRecursive(dp, num, remaining, currentIndex) {
  // base check
  if (remaining === 0) {
    return true;
  }

  if (num.length === 0 || currentIndex >= num.length) {
    return false;
  }

  dp[currentIndex] = dp[currentIndex] || [];
  // if we have not already processed a similar problem
  if (typeof dp[currentIndex][remaining] === "undefined") {
    // recursive call after choosing the number at the currentIndex
    // if the number at currentIndex exceeds the remaining, we shouldn't process this
    if (num[currentIndex] <= remaining) {
      let result = canPartitionRecursive(
        dp,
        num,
        remaining - num[currentIndex],
        currentIndex + 1
      );
      if (result) {
        dp[currentIndex][remaining] = true;
        return true;
      }
    }

    // recursive call after excluding the number at the currentIndex
    dp[currentIndex][remaining] = canPartitionRecursive(
      dp,
      num,
      remaining,
      currentIndex + 1
    );
  }
  return dp[currentIndex][remaining];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);
