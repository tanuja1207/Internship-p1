// #################### Primitive vs Reference Data Type ####################

// ----------- Primitive Type (Number, String, Boolean, etc.) -----------


let num1 = 6;
let num2 = num1; // Copying value of num1 into num2

console.log("Initial Values:");
console.log("Value of num1 is", num1); // 6
console.log("Value of num2 is", num2); // 6

num1++; // Incrementing num1

console.log("\nAfter Incrementing num1:");
console.log("Value of num1 is", num1); // 7
console.log("Value of num2 is", num2); // 6 

// Primitive types are copied **by value** (stored separately)


// ----------- Reference Type (Objects, Arrays, Functions) -----------

let arr1 = ["item1", "item2"];
let arr2 = arr1; // arr2 now refers to the same array as arr1

console.log("Initial Arrays:");
console.log("Array1:", arr1); // ["item1", "item2"]
console.log("Array2:", arr2); // ["item1", "item2"]

arr1.push("item3"); // Modify arr1

console.log("\nAfter pushing new element into arr1:");
console.log("Array1:", arr1); // ["item1", "item2", "item3"]
console.log("Array2:", arr2); // ["item1", "item2", "item3"]

// Reference types are copied **by reference** (both point to same memory)

