// ["00:03", "23:59", "12:03"]
const timeDifference = (times) => {
  let minutesArr = [];
  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    let hour = parseInt(time.split(':')[0]);
    let minutes = parseInt(time.split(':')[1]);
    let totalMinutes = hour * 60 + minutes;
    minutesArr.push(totalMinutes);
  }

  minutesArr = minutesArr.sort((a, b) => a - b);
  let diff = 24 * 60;
  for (let i = 1; i < minutesArr.length; i++) {
    let diffLocal = minutesArr[i] - minutesArr[i - 1];
    if (diffLocal > 720) diffLocal = 1440 - diffLocal;
    diff = Math.min(diff, diffLocal);
  }
  // compare last and first elements
  let diffFirstAndLast = minutesArr[minutesArr.length - 1] - minutesArr[0];
  if (diffFirstAndLast > 720) diffFirstAndLast = 1440 - diffFirstAndLast;
  diff = Math.min(diff, diffFirstAndLast);

  return diff;
};

// Tests
console.log(timeDifference(['00:03', '23:59', '12:03']));
