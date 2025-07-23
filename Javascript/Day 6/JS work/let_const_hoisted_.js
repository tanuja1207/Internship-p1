// Hoisting with let

// Access before declaration - causes ReferenceError
// console.log(myName); 

let myName = "Tanuja";
console.log(myName); //  Output: Tanuja



// -------------------
// Hoisting with const
// -------------------

// const must be declared and initialized together
// console.log(myAge); //  ReferenceError: Cannot access 'myAge' before initialization
const myAge = 22;
console.log(myAge); //  Output: 22

// const without initializer - invalid
// const city; // SyntaxError: Missing initializer in const declaration
