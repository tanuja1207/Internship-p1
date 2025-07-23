// Filter Method 
// Extract even numbers from an array

const numbers = [1, 3, 2, 6, 4, 8];

// Define a function that checks if a number is even
const isEven = function(number) {
  return number % 2 === 0;
};

// Use filter to create a new array of even numbers
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 6, 4, 8]
