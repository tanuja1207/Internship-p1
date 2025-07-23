// ################# Numbers Array #################

let arr = [1, 2, 3, 4, 5];

console.log(arr);       // Output: [1, 2, 3, 4, 5]
console.log(arr[0]);    // Output: 1
console.log(arr[1]);    // Output: 2
console.log(arr[2]);    // Output: 3

// ################# String Array #################

let names = ["tanu", "sanu", "sneha", "priya"];

console.log(names);     // Output: ["tanu", "sanu", "sneha", "priya"]
console.log(names[0]);  // Output: tanu
console.log(names[1]);  // Output: sanu
console.log(names[2]);  // Output: sneha

// ################# Mixed Data Types in Array #################

let mixed = [1, 2, 3.23, "tanu", null, undefined];
console.log(mixed);     // Output: [1, 2, 3.23, "tanu", null, undefined]

// ################# Modify Array Elements #################

let fruits = ["apple", "mango", "grapes"];

console.log(fruits);         // Output: ["apple", "mango", "grapes"]
fruits[1] = "banana";        // Replace "mango" with "banana"
console.log(fruits);         // Output: ["apple", "banana", "grapes"]
