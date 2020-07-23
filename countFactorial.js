function countFactorial(number) {
  let helpers = [];
  for(let i = 1; i <= number; i += 1) {
    helpers.push(number - (number - i))
  }
  let factorial = helpers.reduce(function(total, currentVal) {
    return total * currentVal;
  });
return factorial;
}

console.log(countFactorial(8));

