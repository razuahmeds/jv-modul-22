let first =5;
let secopnd =7;
console.log(first, secopnd);


// ----------     1      -----------------

let temp = first;
first = secopnd;
secopnd = temp;
console.log(first, secopnd);


// -------------- 2 -------------------



[first, secopnd] = [secopnd, first];
console.log(first, secopnd);