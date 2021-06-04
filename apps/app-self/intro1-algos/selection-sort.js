function selectionSort(s) {
  // identify smalles remainin item and
  // put at the end of the sorted list
  // have a pointer starts from 0 to the end
  // have another pointer for where last sorted element
  let sChars = s.split('');
  if (sChars.length === 1) {
    return s;
  }
  let lastSorted = -1;
  let smallest = '';
  let smallestIndex = 0;
  let visitor = 0;
  // [b, a]
  while (lastSorted < sChars.length - 1) {
    while (visitor < sChars.length) {
      if (smallest === '' || sChars[visitor] <= smallest) {
        smallest = sChars[visitor];
        smallestIndex = visitor;
      }
      visitor++;
    }
    // swap
    lastSorted++;
    let temp = sChars[lastSorted];
    sChars[lastSorted] = smallest;
    sChars[smallestIndex] = temp;
    smallest = '';

    // increase
    visitor = lastSorted + 1;
  }

  return sChars.join('');
}
console.log(selectionSort('SELECTIONSORT'));
console.log(selectionSort('abcdefg'));
console.log(selectionSort('gfedcba'));
console.log(selectionSort('teoman'));
console.log(selectionSort('gggaaafffttt'));
