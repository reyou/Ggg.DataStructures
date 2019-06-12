var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  if (target.charCodeAt(0) < letters[0].charCodeAt(0)) {
    return letters[0];
  }
  if (target.charCodeAt(0) > letters[right].charCodeAt(0)) {
    return letters[0];
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (letters[mid] == target) {
      if (mid + 1 <= letters.length - 1 && letters[mid + 1] != target) {
        return letters[mid + 1];
      }
      // move right
      left = mid + 1;
    } else if (target.charCodeAt(0) < letters[mid].charCodeAt(0)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left > letters.length - 1) return letters[0];
  return letters[left];
};
