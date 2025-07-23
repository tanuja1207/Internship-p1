// Global Scope

console.log(this);           // In browser: refers to 'window' object
console.log(window);         // Prints the global window object
console.log(myfunction);     // Function is hoisted completely
console.log(full_name);      // undefined (hoisted but not initialized)

// Function Declaration (hoisted)
function myfunction() {
    console.log("this is my Function!!");
}

// Variable Declarations using var (hoisted with undefined)
var first_name = "Tanuja";
var last_name = "Kadam";

// Assignment after declaration
var full_name = first_name + "  " + last_name;

console.log(full_name);      // Output: Tanuja  Kadam
