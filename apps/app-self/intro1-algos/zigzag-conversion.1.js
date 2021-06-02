/**
 * @param {string} s
 * @param {number} rows
 * @return {string}
 */
const zigzag = (s, rows) => {
  //
  // Y(1)E(2)L(3)L(4)O(3)W(2)P(1)I(2)N(3)K(4)
  if (rows === 1) {
    return s;
  }
  let results = [];
  for (let i = 0; i < rows; i++) {
    results[i] = '';
  }
  let chars = s.split('');
  let down = true;
  let row = 0;
  for (let i = 0; i < chars.length; i++) {
    results[row] += chars[i];
    if (down) {
      row++;
      if (row === rows - 1) {
        down = false;
      }
    } else {
      row--;
      if (row === 0) {
        down = true;
      }
    }
  }
  let result = '';
  for (let i = 0; i < results.length; i++) {
    result += results[i];
  }
  return result;
};
console.log(zigzag('YELLOWPINK', 4));
