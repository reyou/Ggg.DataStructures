/**
 * @param {string} s
 * @param {number} rows
 * @return {string}
 */
const zigzag = (s, rows) => {
  // determine matrix size
  // N / row = full columns
  // N % row = spare columns
  // place spare columns in between, 1 item at a time
  // top, bottom, if spare decrease row, increase column

  let fullColumns = Math.floor(s.length / rows);
  let spareColumns = s.length % rows;
  let matrix = [];

  for (let i = 0; i < fullColumns + spareColumns; i++) {
    matrix[i] = [];
  }

  let chars = s.split('');
  let row = 0;
  let col = 0;
  for (let i = 0; i < chars.length; i++) {
    if (row < rows) {
      matrix[row][col] = chars[i];
      row++;
    } else {
      row--;
      for (let j = 0; j < spareColumns; j++) {
        row--;
        col++;
        matrix[row][col] = chars[i];
        i++;
      }
      i--;
      row--;
      col++;
    }
  }

  let result = '';
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        result += matrix[i][j];
      }
    }
  }

  return result;
};

console.log(zigzag('YELLOWPINK', 4));
// console.log(zigzag('Y', 4));
// console.log(zigzag('YELLOW', 2));
// console.log(zigzag('REDBLUEBLACK', 2));
