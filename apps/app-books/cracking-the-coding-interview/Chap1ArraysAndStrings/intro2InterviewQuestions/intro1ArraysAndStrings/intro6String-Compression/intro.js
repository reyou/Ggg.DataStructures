function compressor(str) {
  let builder = "";
  let arr = str.split("");
  let curr = arr[0];
  let counter = 1;
  let gotsmaller = false;
  for (let i = 1; i < arr.length; i++) {
    if (curr == arr[i]) {
      gotsmaller = true;
      counter++;
    } else {
      builder += curr + counter;
      curr = arr[i];
      counter = 1;
    }
  }
  builder += curr + counter;
  if (gotsmaller) {
    return builder;
  } else {
    return str;
  }
}

console.log(compressor("aabcccccaaa"));
console.log(compressor("abcde"));
