# Callback Function  

## Functionality :

A callback function is a function that is passed as an argument to another function and is executed after that function finishes its task.

- It allows functions to be flexible and reusable.
- Useful for both synchronous and asynchronous operations.
- Commonly used in event handling, timers, array methods (map, filter, forEach), and asynchronous APIs (like fetch, setTimeout, etc.).

It is commonly used for:

- Handling asynchronous operations
- Executing a function after an event or task completes
- Passing custom behavior into functions

## Syntax :


// Define a callback function
function greet(name) {
  console.log("Hello, " + name);
}

// Function that takes a callback
function processUserInput(callback) {
  const userName = "Tanuja";
  callback(userName); // call the callback function
}
