let str = "kasia is good";

let newArr = str.split(" ").map(currentVal => 
 `${currentVal[0].toUpperCase()}${currentVal.slice(1)}`
);
