// Function Declaration

sayHi();  // This works due to hoisting

function sayHi() {
  console.log("Hi");
}



// Function Expression

// Hosting error
// greetUser();  // Error: Cannot access 'greetUser' before initialization

const greetUser = function () {
  console.log("Welcome user!");
}

greetUser();  // This works after initialization



// var hoisting

console.log(message);  // undefined because 'var' is hoisted but not its value
var message = "Message";
console.log(message);  // Message



//  let hoisting

// Hoisting error
// console.log(user);  // Error: Cannot access before initialization
let user = "Tanuja";
console.log(user);  // Tanuja



// const hoisting

// Hoisting error
// console.log(count);  // Error: Cannot access before initialization
const count = 5;
console.log(count);  // 5
