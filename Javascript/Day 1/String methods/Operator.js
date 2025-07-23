
// ####################### typeof operator ###############
let age = 20;
let name = "tanuja";

console.log(typeof age);  // "number"
console.log(typeof name); // "string"


// ######### Convert number to string ###################

console.log(typeof age);       // "number"
console.log(typeof(age + "")); // "string"

age = age + "";
console.log(typeof age); // "string"


// // Other way : String function

let num = 18;
num = String(num);
console.log(typeof num); // "string"

// ############### Convert String to number ##############
//##Unary Operator

let myStr = +"3";
console.log(typeof myStr); // "number"


// Other way : Number function

let age1 = "20";
age1 = Number(age1);
console.log(typeof age1); // "number"

