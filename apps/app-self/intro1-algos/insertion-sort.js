function insertion_sort(s) {
  let chars = s.split('');
  // start from left, right pointers
  // move right all the way left until it is smaller than left
  // once right > length - 1 stop
  if (s.length === 1) {
    return s;
  }
  let left = 0;
  let right = 1;
  while (right < chars.length) {
    while (chars[right] < chars[right - 1]) {
      // swap right, left
      swap(chars, right, right - 1);
      right--;
    }
    left++;
    right = left + 1;
  }
  return chars.join('');
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

console.log(insertion_sort('INSERTIONSORT'));
console.log(insertion_sort('abcdefg'));
console.log(insertion_sort('gfedcba'));
console.log(insertion_sort('teoman'));
