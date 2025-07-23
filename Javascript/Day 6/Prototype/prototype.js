
// A normal function
function printfunction() {
  console.log("hello world");
}

printfunction();

// Functions in JavaScript are objects too
console.log(printfunction.name); // Output: printfunction

// Adding custom properties to a function
printfunction.myownProperty = "Unique_Value";
console.log(printfunction.myownProperty); // Output: Unique_Value

// Checking the prototype of a function
console.log(printfunction.prototype); // Output: {}

// Only functions have a 'prototype' property
if (printfunction.prototype) {
  console.log("prototype is present.");
} else {
  console.log("prototype is not present.");
}

// Regular objects do NOT have 'prototype' property
const helloObj = {
  name: "Tanuja",
  age: 21
};

console.log(helloObj.prototype); // Output: undefined

if (helloObj.prototype) {
  console.log("prototype is present.");
} else {
  console.log("prototype is not present.");
}

// Working with function prototype
function hello() {
  console.log("hello world");
}

// Adding custom properties and a method to the prototype
hello.prototype.abcproperty = "Tanuja";
hello.prototype.xyzproperty = "Kadam";
hello.prototype.sing = function () {
  console.log("Singing from Nashik...");
};

// Calling the method defined in prototype
hello.prototype.sing(); // Output: Singing from Nashik...

// Accessing defined prototype properties
console.log(hello.prototype.abcproperty); // Output: Tanuja
console.log(hello.prototype.xyzproperty); // Output: Kadam

// Accessing undefined properties will return undefined
console.log(hello.prototype.tanujaproperty); // Output: undefined
console.log(hello.prototype.kadamproperty);  // Output: undefined
