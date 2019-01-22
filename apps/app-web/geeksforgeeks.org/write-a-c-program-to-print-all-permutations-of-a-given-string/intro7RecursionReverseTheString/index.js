function reverse(text) {
  let result = explore(text, 0);
  console.log(result);
}
function explore(text, i) {
  if (i < text.length - 1) {
    let char = explore(text, i + 1);
    return char + text[i];
  }
  return text[i];
}

reverse("monday");
