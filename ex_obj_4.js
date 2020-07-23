let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let newArr = []; 
newArr = Object.keys(obj).map(element => element.toUpperCase());
console.log(newArr);
