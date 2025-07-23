// ################# Check if Variable is an Array #################

let fruits = ["apple", "mango", "grapes"];

// typeof returns "object" for arrays (not very helpful)
console.log(typeof fruits); // Output: "object"

// Use Array.isArray() to properly check
console.log(Array.isArray(fruits)); // Output: true

// ################# push() Method #################

// Adds an item at the end of the array
fruits.push("banana");
console.log(fruits); // Output: ["apple", "mango", "grapes", "banana"]

// ################# pop() Method #################

// Removes the last item and returns it
let poppedelement = fruits.pop();
console.log(fruits);          // Output: ["apple", "mango", "grapes"]
console.log(poppedelement);   // Output: "banana"

// ################# unshift() Method #################

// Adds item at the beginning of the array
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits); 
// Output: ["myfruit", "banana", "apple", "mango", "grapes"]

// ################# shift() Method #################

// Removes the first item and returns it
let shiftedele = fruits.shift();
console.log(fruits);         // Output: ["banana", "apple", "mango", "grapes"]
console.log(shiftedele);     // Output: "myfruit"
