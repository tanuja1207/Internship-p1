// ====================  Basic Usage ====================

const myArray = ["hello", "catt", "dog", "lion"];

// Function to check if string has length 3
function isLength3(str) {
  return str.length === 3;
}

// find() returns the first element that matches the condition
const result = myArray.find(isLength3);
console.log(result); // Output: "dog"

// ================================================================


// ==================== Example 2: Real-World Use ===================

const users = [
  { userId: 1, firstName: "Tanuja", age: 22 },
  { userId: 2, firstName: "Sanika", age: 20 },
  { userId: 3, firstName: "Sneha", age: 17 },
  { userId: 4, firstName: "Shweta", age: 28 },
  { userId: 5, firstName: "Priyanka", age: 19 },
];

// Find the user with userId === 4
const userFound = users.find(user => user.userId === 4);

console.log(userFound);
// Output: { userId: 4, firstName: "Ramesh", age: 27 }
