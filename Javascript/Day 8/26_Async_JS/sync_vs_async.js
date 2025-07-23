// Synchronous vs Asynchronous Programming in JavaScript
// JavaScript is single-threaded and synchronous by default

console.log('Script Start');

// Set up a setTimeout (asynchronous code)
const id = setTimeout(() => {
  console.log('Inside Timeout Function');
}, 0);

// Synchronous blocking loop
for (let i = 1; i < 10000; i++) {
  console.log('....');
}

// Show timeout ID and cancel the timeout
console.log('Timeout ID:', id);
console.log('Clearing Timeout');
clearTimeout(id);

console.log('Script End');
