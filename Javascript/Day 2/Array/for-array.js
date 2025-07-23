// ###################### For Loop with Arrays ######################

let fruits = ["apple", "mango", "orange"];
console.log("Original fruits array:", fruits);

// Create an empty array to store uppercase values
let fruitsUpper = [];

// Loop through each fruit and convert to uppercase
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
    fruitsUpper.push(fruits[i].toUpperCase());
}

console.log("Uppercase fruits array:", fruitsUpper);


// ###################### Using const with Primitives ######################

const pi = 3.14;
// pi = 233; // Error: Can't reassign a const variable
console.log("Value of pi:", pi);


// ###################### Using const with Arrays ######################

const num = [9, 10, 11];

// We cannot reassign the entire array (like num = [1,2,3]; ❌)
// But we CAN modify it using array methods like push(), pop(), etc.
num.push(12); // Allowed
console.log("Updated num array:", num);
