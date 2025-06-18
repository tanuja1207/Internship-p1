
// ################# null data type ################

let variable = null;
console.log(variable); 
console.log(typeof variable,variable); 

variable = "Tanuja";
console.log(typeof variable,variable); 

let mynull = null;
console.log(typeof mynull); 
// bug , error




// #################### BigInt ################

let no = 123;

console.log(no);
console.log(Number.MAX_SAFE_INTEGER);

// declaring big int
let num = BigInt(315);
let num1 = 123n;
console.log(num);
console.log(num + num1);
let num3 = 1245;
console.log(num + num3);
// error cannot mix bigint with other types.

