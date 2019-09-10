function meanTwo(firstNumber, secondNumber) {
  return (firstNumber + secondNumber) / 2;
}

console.log(meanTwo(5, 10));

function meanThree(firstNumber, secondNumber, thirdNumber) {
  return (firstNumber + secondNumber + thirdNumber) / 3;
}

console.log(meanThree(1, 2, 3));

function mean(...args) {
  let sum = 0;
  for (const num of args) {
    // sum = sum + num;
    sum += num;
  }
  const mean = sum / args.length;
  return mean;
}

console.log(mean(5, 10));

console.log(mean(1, 2, 3));
