

// More about Prototype .

let numbers = [1, 2, 3];

// Using an array method (inherited from Array.prototype)
console.log(numbers.includes(2)); // true

// Checking the prototype
console.log(Object.getPrototypeOf(numbers) === Array.prototype); // true

