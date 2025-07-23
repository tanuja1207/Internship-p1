# Global Execution Context (GEC)  

## Functionality :

When a JavaScript program runs, the first thing the engine does is create the Global Execution Context (GEC).

- It is the default execution context.

- It is created only once when the JavaScript code starts running.

- It represents the global scope where global variables and functions live.

- The this keyword in the GEC refers to the global object (window in browsers, global in Node.js).

The Global Execution Context is the first context pushed onto the Call Stack and remains there until the program finishes executing.

## Phases of GEC Creation :

1. **Creation Phase**:
   - Memory is allocated for variables and functions.
   - Variables declared with var are initialized with undefined.
   - Function declarations are hoisted and stored in memory.

2. **Execution Phase**:
   - Code is executed line-by-line.
   - Variable assignments are completed.
   - Functions are executed when called, and new execution contexts are created and pushed to the call stack.

## Syntax :

// Global code (GEC)
var name = "Tanuja";

function greet() {
  console.log("Hello " + name);
}

greet(); // Function creates a new execution context on call stack
