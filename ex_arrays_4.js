let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray2.forEach(element => 
  element.forEach(val => {
    if(val % 2 === 0) {
      console.log(val);
    }
  }
  )
)
  