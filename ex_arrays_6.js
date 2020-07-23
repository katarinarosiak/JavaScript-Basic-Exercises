let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let arrLength = arr.map(element => {
  return element.length;
}).filter(number => {
  return number % 2 !== 0;
});

console.log(arrLength);