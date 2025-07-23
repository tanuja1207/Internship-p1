#  Functions in JavaScript

## 1.Arrow Function
- Functionality :

Arrow functions are a concise way to write function expressions in JavaScript. They are introduced in ES6 and are particularly useful for writing short functions. One key feature of arrow functions is that they do not have their own "this" context; instead, they inherit "this" from their enclosing scope.

They are often used in situations where you want a simpler syntax and do not need to bind your own "this" (e.g., in array methods like "map", "filter", "reduce", or inside event handlers in some contexts).
##


- Syntax :

// Basic syntax
const functionName = (parameter1, parameter2, ...) => {
  // function body
};

// Single expression (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

// Returning an object
const getObject = () => ({ key: "value" });
##

- // Example : 

Using arrow function to double elements in an array
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
##


## 2. Callback Function  
- Functionality :

A callback function is a function that is passed as an argument to another function and is executed after that function completes its execution. Callbacks are commonly used in asynchronous programming, such as reading files, making API calls, and handling events.

They allow you to execute code only after a certain task has finished, helping manage execution flow in JavaScript.

##

- Syntax :

// Defining a callback function
function greet(name) {
  console.log("Hello, " + name);
}

// A function that accepts another function as an argument
function processUserInput(callback) {
  const name = "Tanuja";
  callback(name);
}

##

- // Example :

Using a callback to display a message

function displayMessage(message) {
  console.log("Message: " + message);
}

function getMessage(callback) {
  const msg = "Callback function executed";
  callback(msg);
}

getMessage(displayMessage); // Output: Message: Callback function executed
##


## 3. Default Parameter  
- Functionality :

Default parameters allow you to initialize function parameters with default values if no value or "undefined" is passed when the function is called. This helps prevent "undefined" errors and makes functions more flexible and self-contained.

It was introduced in ES6 and is useful for optional parameters.

##

- Syntax :

// Defining default parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

// Multiple parameters with some default
function createUser(name, age = 18) {
  return { name, age };
}

##

- // Example :

Using default parameter when no argument is passed

function greetUser(username = "Tanuja") {
  console.log("Welcome, " + username + "!");
}

greetUser();              // Output: Welcome, Tanuja!
greetUser("Kadam");       // Output: Welcome, Kadam!
##


## 4. Block Scope  
- Functionality :

Block scope refers to the area within curly braces "{}" where variables declared using "let" and "const" are accessible. These variables are not accessible outside the block in which they are defined.

This feature was introduced in ES6. Unlike "var", which has function or global scope, "let" and "const" respect block-level scope and help prevent unintended variable access or overwriting.

##

- Syntax :

// Block scope using let and const
{
  let a = 10;
  const b = 20;
  console.log(a); // Accessible
  console.log(b); // Accessible
}

// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined

##

- // Example :

Demonstrating block scope with if-statement

if (true) {
  let message = "Hello from inside the block";
  console.log(message); // Output: Hello from inside the block
}

// console.log(message); // Error: message is not defined
##


## 5. Function Returning Function  
- Functionality :

In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

A function returning another function is useful in advanced concepts like closures, currying, and functional programming patterns. The inner function can access variables from the outer function due to lexical scoping.

##

- Syntax :

// A function that returns another function
function outerFunction() {
  return function innerFunction() {
    console.log("Hello from the inner function!");
  };
}

// Storing the returned function
const func = outerFunction();

// Calling the returned function
func();

##

- // Example :

Function that customizes a greeting message

function greet(name) {
  return function(message) {
    console.log("${message}, ${name}!");
  };
}

const greetTanuja = greet("Tanuja");

greetTanuja("Good Morning");  // Output: Good Morning, Tanuja!
greetTanuja("Welcome");       // Output: Welcome, Tanuja!
##


## 6. Function Declaration  
- Functionality :

A function declaration is one of the most common ways to define a function in JavaScript. It starts with the "function" keyword, followed by the name of the function, a list of parameters in parentheses, and a block of code in curly braces.

Function declarations are hoisted, meaning they are moved to the top of their scope at runtime, so they can be called before they are defined in the code.

##

- Syntax :

// Function declaration
function functionName(parameter1, parameter2) {
  // function body
  return result;
}

##

- // Example :

Using function declaration to add two numbers

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));  // Output: 8

// Calling before declaration (works because of hoisting)
console.log(multiply(4, 2)); // Output: 8

function multiply(x, y) {
  return x * y;
}
##


## 7. Function Expression  
- Functionality :

A function expression involves creating a function and assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code.

Function expressions can be named or anonymous. They are useful when you want to define functions conditionally or pass them as arguments.

##

- Syntax :

// Anonymous function expression
const add = function(a, b) {
  return a + b;
};

// Named function expression
const multiply = function multiplyFunc(x, y) {
  return x * y;
};

##

- // Example :

Using function expression to subtract numbers

const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 4));  // Output: 6

// Calling before defining will cause an error
// console.log(subtractBefore(3, 2)); // Error: Cannot access 'subtractBefore' before initialization

const subtractBefore = function(a, b) {
  return a - b;
};
##


## 8. Function Inside Function  
- Functionality :

In JavaScript, you can define a function inside another function. The inner function is accessible only within the outer function's scope. This is commonly used for modularity, closures, and when a helper function is needed only in a specific context.

The inner function has access to the outer function’s variables due to lexical scoping.

##

- Syntax :

function outerFunction() {
  // Outer scope variables
  let outerVar = "I am outer";

  function innerFunction() {
    // Inner function can access outer scope
    console.log(outerVar);
  }

  innerFunction(); // Call inner function inside outer
}

outerFunction();

##

- // Example :

function calculate(num1, num2) {
  function add() {
    return num1 + num2;
  }

  function multiply() {
    return num1 * num2;
  }

  console.log("Sum:", add());
  console.log("Product:", multiply());
}

calculate(5, 3);
// Output:
// Sum: 8
// Product: 15
##


## 9. Hoisting Function  
- Functionality :

Hoisting in JavaScript is a behavior where function and variable declarations are moved to the top of their containing scope during the compilation phase. This means you can use function declarations before actually writing them in the code.

However, only function declarations are fully hoisted. Function expressions and arrow functions are not hoisted in the same way and will cause errors if called before initialization.

##

- Syntax :

// Function Declaration (hoisted)
console.log(add(2, 3)); // Output: 5

function add(a, b) {
  return a + b;
}

// Function Expression (not hoisted)
// console.log(subtract(5, 2)); // Error: Cannot access 'subtract' before initialization

const subtract = function(a, b) {
  return a - b;
};

##

- // Example :

Demonstrating hoisting behavior

// Hoisted: works even though it's called before declaration
greet(); // Output: Hello, Tanuja!

function greet() {
  console.log("Hello, Tanuja!");
}

// Not hoisted: causes an error if called before initialization
// sayHi(); // Error

const sayHi = function() {
  console.log("Hi!");
};
##


## 10. Lexical Scope  
- Functionality :

Lexical scope means that the scope of a variable is determined by its position in the source code. In JavaScript, functions are lexically scoped, which means a function can access variables defined in its own scope and in any outer (parent) scopes, but not in inner scopes.

This is the foundation for closures and how nested functions can retain access to variables even after the outer function has finished executing.

##

- Syntax :

function outerFunction() {
  let outerVar = "I am from outer scope";

  function innerFunction() {
    // innerFunction can access outerVar due to lexical scoping
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction();

##

- // Example :

Lexical scoping in nested functions

const lastName = "Kadam";

function printName() {
  const firstName = "Tanuja";

  function fullName() {
    console.log(firstName);   // Output: Tanuja
    console.log(lastName);    // Output: Kadam
  }

  fullName();
}

printName();
// The inner function has access to both its own scope and its outer (enclosing) scopes
##


## 11. Parameter Destructuring  
- Functionality :

Parameter destructuring is a convenient way to unpack values from objects or arrays directly into variables inside the function parameter list.

It helps write cleaner and more readable code, especially when working with functions that receive object or array arguments.

##

- Syntax :

// Object destructuring in function parameters
function printUser({ name, age }) {
  console.log("Name:", name);
  console.log("Age:", age);
}

// Array destructuring in function parameters
function displayCoordinates([x, y]) {
  console.log("X:", x);
  console.log("Y:", y);
}

##

- // Example :

Using parameter destructuring with objects

const user = {
  name: "Tanuja",
  age: 22
};

printUser(user);
// Output:
// Name: Tanuja
// Age: 22

Using parameter destructuring with arrays

const point = [10, 20];

displayCoordinates(point);
// Output:
// X: 10
// Y: 20
##


## 12. Rest Parameter  
- Functionality :

The rest parameter allows a function to accept an indefinite number of arguments as an array. It is written using three dots "..." before the parameter name and is useful when you don’t know how many arguments will be passed to the function.

Only the last parameter in a function can be a rest parameter.

##

- Syntax :

// Using rest parameter
function sum(...numbers) {
  console.log(numbers); // An array of all arguments
}

sum(1, 2, 3); // Output: [1, 2, 3]

##

- // Example :

Summing all arguments using rest parameter

function addAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(addAll(1, 2, 3, 4)); // Output: 10
console.log(addAll(5, 10));      // Output: 15
##
