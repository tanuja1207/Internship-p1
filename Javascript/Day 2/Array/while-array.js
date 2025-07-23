// ####################### while Loop #######################

const fruits = ["apple", "mango", "orange"];

console.log("Using while loop:");
let i = 0;
while (i < fruits.length) {
    // Need to call .toUpperCase() with parentheses
    console.log(fruits[i].toUpperCase());
    i++;
}

console.log(fruits);  // ["apple", "mango", "orange"]


// ####################### for...of Loop #######################

console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log(fruit);  // Direct value from array
}


// ####################### for...in Loop #######################

console.log("Using for...in loop:");
for (let index in fruits) {
    console.log(fruits[index]);  // Index-based access
}
