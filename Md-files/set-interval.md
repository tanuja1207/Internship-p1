# setInterval()  

## Functionality :

setInterval() is a built-in JavaScript function that repeatedly calls another function or executes a code snippet with a fixed time delay between each call.

- It starts executing after the specified delay and then continues at regular intervals.
- The delay is specified in **milliseconds** (1000 ms = 1 second).
- It runs **asynchronously**, meaning the rest of the code continues to execute without waiting.

It is commonly used for:

- Running a task repeatedly (e.g., showing a live clock)
- Animations or UI updates
- Polling APIs at intervals
- Periodic logging or cleanup tasks


## Syntax :


// setInterval syntax
const intervalID = setInterval(callbackFunction, delay, optionalParam1, optionalParam2, ...);

// To stop the repeated execution
clearInterval(intervalID);

## Example: 

//Print a message every 2 seconds
function greet() {
  console.log("Hello, Tanuja!");
}

const intervalId = setInterval(greet, 2000);

// Stop the interval after 6 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped greeting.");
}, 6000);

