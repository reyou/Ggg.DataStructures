<<<<<<< HEAD
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
=======
/*
abc
    {}
    a
        ab
            abc
        ac
    b
        bc
    c
*/

function subsetprint(text) {
    let builder = "";
    subset(builder, text)
}
function subset(builder, rem) {
    console.log("subset: " + builder);
    if (rem.length == 0) {
        return;
    }
    for (let i = 0; i < rem.length; i++) {
        subset(builder + rem[i], rem.substring(i + 1));
    }
}
subsetprint("abc")

>>>>>>> a65b5b59e7409201ff0bd187eebce86b2d620d96
