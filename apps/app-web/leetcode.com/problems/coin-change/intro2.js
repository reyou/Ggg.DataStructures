/*You are given coins of different denominations and a total amount 
of money amount. Write a function to compute the fewest number of 
coins that you need to make up that amount. If that amount of money 
cannot be made up by any combination of the coins, return -1. */
/*Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let result = resolve(coins, amount, {});
  if (result === Number.MAX_VALUE) return -1;
  return result;
};

function resolve(coins, amount, cache) {
  if (cache[amount]) {
    return cache[amount];
  }
  let result = Number.MAX_VALUE;
  if (amount == 0) {
    return 0;
  }
  if (amount < 0) {
    return result;
  }
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    let remaining = amount - coin;
    let total = 1 + resolve(coins, remaining, cache);
    result = Math.min(result, total);
  }
  if (cache[amount] === undefined) {
    cache[amount] = result;
  }
  return result;
}

let input1 = [[1, 2, 5], 11];
let input2 = [[2], 3];
let output1 = coinChange(input1[0], input1[1]);
let output2 = coinChange(input2[0], input2[1]);
console.log(output1);
console.log(output2);
