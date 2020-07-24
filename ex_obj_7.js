let objToCopy = {
  foo: 1,
  bar: 2,
};


function copyObj(sourseObj, arr) {
  let copiedObj = {};
 if(!arr){
  for(let prop in sourseObj) {
    copiedObj[prop] = sourseObj[prop];
  }
 }else{
   copiedObj[arr] = sourseObj[arr];
 }
  return copiedObj;
}


let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined