# Hoisting  

## Functionality :

Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (global or function scope) before code execution.

- Function declarations and variable declarations (var) are hoisted.

- Function expressions, let, and const declarations are not hoisted in the same way.

- Only declarations are hoisted, initializations are not.

This means you can call a function or access a var variable before it's actually declared in the code.

## Syntax :


// Function Declaration (Hoisted)
greet(); // Works

function greet() {
  console.log("Hello from hoisted function!");
}

// Variable hoisting with var
console.log(x); // undefined
var x = 10;

// let and const are not hoisted
console.log(y); // ReferenceError
let y = 20;

## Example :

// Function declaration is hoisted
sayHello();

function sayHello() {
  console.log("Hello, Tanuja!");
}

// Variable hoisting with var
console.log(name); // undefined
var name = "Tanuja";

// let and const (not hoisted the same way)
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 22;
