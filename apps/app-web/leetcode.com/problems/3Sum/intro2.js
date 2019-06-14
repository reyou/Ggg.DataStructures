var threeSum = function(nums) {
  let results = {};
  resolve(nums, 0, [], results);
  let resultArr = [];
  for (let key in results) {
    resultArr.push(results[key]);
  }
  return resultArr;
};

function resolve(nums, left, buffer, results) {
  for (let i = buffer.length; i < nums.length; i++) {
    buffer.push(nums[i]);
    if (buffer.length === 3) {
      let sum = null;

      let key = "";
      for (let i = 0; i < buffer.length; i++) {
        sum += buffer[i];
        key += buffer[i].toString();
      }
      if (sum === 0) {
        results[key] = buffer.slice(0);
      }
    }
    resolve(nums, left + 1, buffer, results);
    buffer.pop();
  }
}
console.log(JSON.stringify(threeSum([-1, 1, 0])));
