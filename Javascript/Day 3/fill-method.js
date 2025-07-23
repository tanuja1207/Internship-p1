// ####################### fill Method ##################################

// Fill an array with 0s using fill()
const arr = new Array(10).fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// ------------------------------------------------------

// Fill specific portion of an array
const numbers = [1, 2, 3, 4, 5, 76, 6, 78, 9, 9, 8];

// Fills 0 from index 3 to 6 (end is exclusive)
numbers.fill(0, 3, 7);
console.log(numbers); 
// Output: [1, 2, 3, 0, 0, 0, 0, 78, 9, 9, 8]
