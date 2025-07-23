// Global Scope
console.log("User: " + username); // Output: undefined because var is hoisted
var username = "Tanuja";
console.log("User: " + username); // Output: Tanuja

//  let
// console.log(age); // This will throw ReferenceError
let age = 25;

// Function Scope 
function showDetails() {
  console.log("Inside showDetails function");

  console.log("Username: " + username); // Uses global 'username'
  console.log("Role: " + role); // Output: undefined because of hoisting

  var role = "Frontend Developer";
  console.log("I am " + role); // Output: Frontend Developer
}

showDetails();
