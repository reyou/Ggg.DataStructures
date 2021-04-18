function factorial(number) {
  if (number === 1) {
    console.log(`Ending recursive: ${number}`);
    return number;
  }
  console.log(`Calculating: factorial(${number} - 1) * ${number}`);
  return factorial(number - 1) * number;
}

console.log(factorial(5));
