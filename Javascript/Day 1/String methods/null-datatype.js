
// ################# null data type ################
let variable = null;
console.log(variable);  // Output: null
console.log(typeof variable, variable); // Output: "object", null

variable = "Tanuja";
console.log(typeof variable, variable); // Output: "string", "Tanuja"

let mynull = null;
console.log(typeof mynull); // Output: "object" 



// #################### BigInt ################

let no = 123;
console.log(no); // Output: 123
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

// Declaring BigInt
let num = BigInt(315);  // BigInt function
let num1 = 123n;        // BigInt literal using 'n'

console.log(num);       // Output: 315n
console.log(num + num1); // Output: 438n BigInt + BigInt is OK

let num3 = 1245;
console.log(num + BigInt(num3)); // Correct


