let arr = "AABAACAADAABAABA";
let pat = "AABA";
function search(arr, pat) {
  for (let i = 0; i < arr.length; i++) {
    if (i + pat.length > arr.length) {
      break;
    }
    let sub = arr.substring(i, i + pat.length);
    if (sub === pat) {
      console.log("Found at: " + i);
    }
  }
}

search(arr, pat);
