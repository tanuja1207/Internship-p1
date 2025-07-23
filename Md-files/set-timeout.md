# setTimeout()  

## Functionality :

setTimeout() is a built-in JavaScript function that executes a single function or code snippet once after a specified delay.

- The delay is specified in **milliseconds** (1000 ms = 1 second).
- The function runs **asynchronously** after the timer expires.
- It is often used to delay execution, schedule a task in the future, or simulate asynchronous behavior.

It is commonly used for:

- Delaying execution of a task
- Simulating loading behavior
- Deferring execution to allow other tasks to finish
- Scheduling UI updates or animations

## Syntax :

// setTimeout syntax
const timeoutID = setTimeout(callbackFunction, delay, optionalParam1, optionalParam2, ...);

// To cancel the timeout before it executes
clearTimeout(timeoutID);

## Example :

// Print a message after 3 seconds
function greetLater() {
  console.log("Hello after 3 seconds!");
}

const timeoutId = setTimeout(greetLater, 3000);

// Optionally cancel the timeout before it runs
// clearTimeout(timeoutId);
