# How JavaScript Works  

## Functionality :

JavaScript is a single-threaded, synchronous, and event-driven programming language that runs in the browser and Node.js environments.

JavaScript runs code line-by-line using a JavaScript Engine (like Google’s V8). However, it can handle asynchronous tasks like API calls, timers, or DOM events through a mechanism involving the Call Stack, Web APIs, Callback Queue, and the Event Loop.

## Core Components :

1. **Call Stack**:  
   Executes function calls in a LIFO (Last In First Out) order. Only one function runs at a time.

2. **Web APIs**:  
   Browser-provided features (e.g., setTimeout, DOM, Fetch) that handle asynchronous tasks separately from the call stack.

3. **Callback Queue**:  
   Stores completed Web API callbacks to be executed later.

4. **Event Loop**:  
   Continuously checks if the call stack is empty and pushes the next task from the callback queue to the call stack.

## Syntax :

// Synchronous code
console.log("Start");

function greet() {
  console.log("Hello, Tanuja!");
}

greet();
console.log("End");

// Asynchronous code with setTimeout
setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("Code after setTimeout");


## Example :

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
