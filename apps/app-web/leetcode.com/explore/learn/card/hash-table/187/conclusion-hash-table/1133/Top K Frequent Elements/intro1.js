/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let hash = {};
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] = hash[nums[i]] + 1;
    }
  }

  for (let key in hash) {
    if (freq[hash[key]] === undefined) {
      freq[hash[key]] = [key];
    } else {
      freq[hash[key]].push(key);
    }
  }

  let results = [];
  for (let key in freq) {
    let items = freq[key];
    for (let i = 0; i < items.length; i++) {
      results.push(items[i]);
    }
  }
  return results.splice(results.length - k);
};
console.log(topKFrequent([3, 0, 1, 0], 1));
// console.log(topKFrequent([1, 2], 2));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
