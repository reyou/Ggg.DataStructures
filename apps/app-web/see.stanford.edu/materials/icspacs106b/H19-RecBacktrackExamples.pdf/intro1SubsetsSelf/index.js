function FindWord(text) {
  let builder = "";
  let remaining = text;
  let result = FindWord2(builder, remaining);
  return result;
}
function CheckIfExists(text) {
  if (text.indexOf("car") > -1) {
    console.log("Text found in", text);
    return true;
  }
  return false;
}
function FindWord2(builder, remaining) {
  if (remaining.length == 0) {
    let result = CheckIfExists(builder);
    return result;
  } else {
    for (let i = 0; i < remaining.length; i++) {
      let rem = remaining.substring(0, i) + remaining.substring(i + 1);
      let result = FindWord2(builder + remaining[i], rem);
      if (result) {
        return result;
      }
    }
  }
}

let result = FindWord("cxrza");
console.log(result);
