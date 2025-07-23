// #################### Clone Array ####################

// Basic array
let array_1 = ["item1", "item2"];

// If we assign directly, both variables point to the same array (not a real clone)
let array_2 = array_1;

array_1.push("item3");

console.log("Direct Assignment:");
console.log(array_1 == array_2); // true → same reference
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2", "item3"]


// #################### 1. Clone with slice() ####################

array_1 = ["item1", "item2"];
array_2 = array_1.slice(0);

array_1.push("item3");

console.log("Cloning with slice:");
console.log(array_1 == array_2); // false → different references
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2"]


// #################### 2. Clone with concat() ####################

array_1 = ["item1", "item2"];
array_2 = [].concat(array_1);

array_1.push("item3");

console.log("Cloning with concat:");
console.log(array_1 == array_2); // false
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2"]


// #################### 3. Clone with Spread Operator ####################

array_1 = ["item1", "item2"];
array_2 = [...array_1];

array_1.push("item3");

console.log("Cloning with spread operator:");
console.log(array_1 == array_2); // false
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2"]


// #################### 4. Clone & Add Extra Items ####################

// Using slice + concat
array_1 = ["item1", "item2"];
array_2 = array_1.slice(0).concat(["item3", "item4"]);

array_1.push("item3");

console.log("Clone with slice + extra items:");
console.log(array_1 == array_2); // false
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2", "item3", "item4"]


// Using concat directly
array_1 = ["item1", "item2"];
array_2 = [].concat(array_1, ["item3", "item4"]);

console.log("Clone with concat + extra items:");
console.log(array_1 == array_2); // false
console.log(array_1);            // ["item1", "item2"]
console.log(array_2);            // ["item1", "item2", "item3", "item4"]


// Using spread with another array
array_1 = ["item1", "item2"];
let oneMore = ["item3", "item4"];
array_2 = [...array_1, ...oneMore, "item5"];

array_1.push("item3");

console.log("Clone with spread + multiple sources:");
console.log(array_1 == array_2); // false
console.log(array_1);            // ["item1", "item2", "item3"]
console.log(array_2);            // ["item1", "item2", "item3", "item4", "item5"]
