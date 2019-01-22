/* 
abc
    a
        ab
            abc
    b
        bc
    c    
*/
function subsets(text) {
  resolve(text, 0, 1);
}
function resolve(text, start, count) {
  if (start + count > text.length) {
    return;
  }
  for (let i = start; i <= text.length; i++) {
    let subset = text.substring(i, i + count);
    console.log("Subset: " + subset);
    resolve(text, i, count + 1);
  }
}

subsets("abc");
