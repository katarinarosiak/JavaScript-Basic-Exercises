function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

function factorial(number) {
  let result = 1;
  let counter = number;
  counter -= 1;
  result *= counter;
  if(counter <= 0) {
    factorial(number);
  }
  return result;
}

console.log(factorial(5));