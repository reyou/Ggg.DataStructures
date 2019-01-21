function backtracking(text, counter) {
  if (counter >= text.length) {
    console.log("done");
    return;
  }
  text = swap(text, 0, counter);
  console.log("swapped: " + text);
  backtracking(text, counter + 1);
  text = swap(text, 0, counter);
  console.log("unswapped: " + text);
}

function swap(text, first, second) {
  let textArr = text.split("");
  let temp = textArr[first];
  textArr[first] = textArr[second];
  textArr[second] = temp;
  return textArr.join("");
}

console.log(backtracking("abc", 0));
