function resolve(data) {
  return resolve2(data);
}

function resolve2(data) {
  if (data.length == "0") {
    return 1;
  }
  let data1 = data.substring(0, 1);
  if (data1 == "0") {
    return 0;
  }
  let remaining = data.substring(1);
  let result = resolve2(remaining);
  if (data.length >= 2) {
    let pick2 = data.substring(0, 2);
    if (parseInt(pick2) <= 26) {
      let remaining2 = data.substring(2);
      result += resolve2(remaining2);
    }
  }
  return result;
}

console.log(resolve("12345"));
