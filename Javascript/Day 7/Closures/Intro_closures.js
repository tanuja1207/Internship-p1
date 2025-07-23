// Example: Function returning another function

function printFullName(first_name, last_name) {
    // Inner function forms a closure
    function printName() {
        console.log(first_name, last_name); // Has access to outer variables
    }
    return printName;
}

// Calling outer function
const ans2 = printFullName("Tanuja", "Kadam");

// Logs the inner function definition (closure)
console.log(ans2);

// Calling the returned inner function
ans2(); // Output: Tanuja Kadam
