// ---------------------- Block Scope (let, const) ----------------------

{
    const firstName = "Tanuja";
    console.log("Inside block:", firstName); // Tanuja
}

// This is outside the block
const firstName = "Shweta";
console.log("Outside block:", firstName); // Shweta

// ---------------------- Function Scope (var) ----------------------

{
    var city = "Nashik";
}

console.log("Accessing var outside block:", city); // Nashik

// var is function scoped, so it can be accessed outside block but not outside a function

// ---------------------- Example with Function & Block ----------------------

let name = "Tanu"; // Global scope

function myApp() {
    if (true) {
        let name = "Tanuja"; // Block scope inside if
        console.log("Inside if block:", name); // Tanuja
    }
    console.log("Inside function:", name); // Tanu (from outer lexical/global scope)
}

myApp();
