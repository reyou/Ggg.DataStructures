var timeDifference = function (times) {
  var min = 720; // max difference
  times.forEach((t, i) => {
    // time in minutes
    let [h, m] = t.split(':');
    times[i] = +h * 60 + +m;
  });
  times.sort((a, b) => a - b); // ascending order sort
  for (let i = 1; i < times.length; i++) {
    // compare all consecutive items in the array
    let diff = times[i] - times[i - 1];
    diff = diff > 720 ? 1440 - diff : diff;
    min = diff < min ? diff : min;
  }
  let diff = times[times.length - 1] - times[0]; // compare first and last elements
  diff = diff > 720 ? 1440 - diff : diff;
  min = diff < min ? diff : min;
  return min;
};

console.log(timeDifference(['00:03', '23:59', '12:03']));
