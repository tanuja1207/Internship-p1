// Global Scope
const last_name = "Kadam"; // Declared in the global scope

// Function defined in the global scope
const printName = function () {
    const first_name = "Tanuja"; // Declared in the local scope of printName

    // Nested function inside printName
    function myfunction() {
        // myfunction() can access variables from its own scope,
        // and outer (parent) scopes due to lexical scoping
        console.log(first_name);   // Accessing from printName()'s scope
        console.log(last_name);   // Accessing from global scope
    }

    myfunction(); // Calling the inner function
};

// Calling the outer function
printName();
