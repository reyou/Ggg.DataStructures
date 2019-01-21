function indent(depth) {
  var qqq = "";
  for (var f = 0; f <= depth; f++) {
    qqq = qqq + "-";
  }
  return qqq;
}
var depth = 0;
function RecPermute(collected, rest) {
  console.log(indent(depth) + 'collected:"%s", rest:"%s"', collected, rest);
  if (rest.length == 0) {
    console.log(collected);
    console.log("");
  } else {
    for (var i = 0; i < rest.length; i++) {
      let x = rest.substring(0, i);
      let y = rest.substring(i + 1);
      var remaining = x + y;
      depth++;
      RecPermute(collected + rest[i], remaining);
    }
  }
  depth--;
}

RecPermute("", "abc");
