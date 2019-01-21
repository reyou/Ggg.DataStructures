function indent(depth) {
  var qqq = "";
  for (var f = 0; f <= depth; f++) {
    qqq = qqq + "-";
  }
  return qqq;
}
function print(text) {
  var left = text;
  var right = "";
  print2(left, right);
}
var depth = 0;
function print2(left, right) {
  console.log(indent(depth) + 'left:"%s", right:"%s"', left, right);
  if (left.length == 0) {
    console.log(right);
  } else {
    for (var i = 0; i < left.length; i++) {
      var remaining = left.substring(0, i) + left.substring(i + 1);
      depth++;
      print2(remaining, right + left[i]);
    }
  }
  depth--;
}
print("abc");
