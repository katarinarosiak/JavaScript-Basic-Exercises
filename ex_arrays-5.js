let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let answer = myArray.map(element => {
  if(element % 2 === 0) {
  console.log('even')
  }else{console.log('odd')}
  }
  )