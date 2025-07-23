// ################### Basic Array Destructuring ####################

const myarr = ["value1", "value2"];

// Accessing elements manually
let var1 = myarr[0];
let var2 = myarr[1];

console.log(var1); // Output: value1
console.log(var2); // Output: value2

// ################### Destructuring with let ####################

const arr1 = ["value1", "value2"];
let [v1, v2] = arr1;

v1 = "changed value"; // allowed since 'let' allows reassignment
console.log(v1); // Output: changed value
console.log(v2); // Output: value2

// ################### Destructuring with const ####################

const arr2 = ["value1", "value2"];
const [c1, c2] = arr2;

console.log(c1); // Output: value1
console.log(c2); // Output: value2

// Note: c1 and c2 cannot be reassigned because they are declared with const

// ################### Case 1: Destructuring part of array ####################

const arr3 = ["value1", "value2", "value3"];
const [a1, a2] = arr3;

console.log(a1); // Output: value1
console.log(a2); // Output: value2

// ################### Case 2: Missing elements ####################

const arr4 = ["value1"];
const [b1, b2, b3] = arr4;

console.log(b1); // Output: value1
console.log(b2); // Output: undefined
console.log(b3); // Output: undefined

// ################### Case 3: Skipping elements ####################

const arr5 = ["value1", "value2", "value3", "value4", "value5"];
const [x1, , x2, , x3] = arr5;

console.log(x1); // Output: value1
console.log(x2); // Output: value3
console.log(x3); // Output: value5

// ################### Case 4: Using Rest(spread) Operator ####################

const arr6 = ["value1", "value2", "value3", "value4", "value5"];
const [y1, y2, y3, ...restValues] = arr6;

console.log(y1);        // Output: value1
console.log(y2);        // Output: value2
console.log(y3);        // Output: value3
console.log(restValues); // Output: ["value4", "value5"]
