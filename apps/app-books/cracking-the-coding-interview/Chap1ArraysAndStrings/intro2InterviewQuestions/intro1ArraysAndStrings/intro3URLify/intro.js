function URLify(str) {
  str = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    let prevChar;
    if (i >= 1) {
      prevChar = str[i - 1];
    }
    if (char == " " && (prevChar != " " || i == 0)) {
      shiftChars(str, i, "%20");
    }
  }
  return str;
}

function shiftChars(arr, start, replace) {
  for (let i = arr.length - 1; i >= start; i--) {
    if (i + (replace.length - 1) > arr.length - 1) {
      continue;
    }
    let target = i + (replace.length - 1);
    arr[target] = arr[i];
  }
  for (let i = 0; i < replace.length; i++) {
    arr[start + i] = replace[i];
  }
}

console.log(JSON.stringify(URLify(" Mr John Smith      ")));
