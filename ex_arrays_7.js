let numbers = [3, 5, 7];

let answer = numbers.reduce((total, element) => {
  return total + element * element;
},0); 

console.log(answer);


