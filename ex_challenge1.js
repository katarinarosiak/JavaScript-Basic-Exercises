function isNotANumber(number) {
  if(parseInt(number)) {
    return false;
  }else{
    return true;
  }
}

console.log(isNotANumber(9));