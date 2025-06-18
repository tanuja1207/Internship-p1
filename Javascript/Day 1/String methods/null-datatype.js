
// ################# null data type ################

let myvar = null;
console.log(myvar); 
console.log(typeof myvar,myvar); 
myvar = "uadasfa";
console.log(typeof myvar,myvar); 
let mynull = null;
console.log(typeof mynull); 




// #################### BigInt ################

let mynum = 123;

console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);

// declaring big int
let num = BigInt(315);
let num1 = 123n;
console.log(num);
console.log(num + num1);
let num3 = 1245;
console.log(num + num3);
// error cannot mix bigint with other types.

