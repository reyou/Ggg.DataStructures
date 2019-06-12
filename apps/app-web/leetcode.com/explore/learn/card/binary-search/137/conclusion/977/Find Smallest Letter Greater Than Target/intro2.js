var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return letters[left % letters.length];
};
