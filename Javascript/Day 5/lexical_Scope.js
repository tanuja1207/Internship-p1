// ################# Lexical Scope ##################################

// Function demonstrating lexical scope
function myApp() {
    const myvar = "value1"; // variable in outer function scope

    function myfunc() {
        const myvar = "value59"; // variable in inner function scope (shadows outer myvar)
        console.log("inside myFunc", myvar); // prints inner myvar: "value59"
    }

    const myfunc2 = function() {};  // function expression (empty)
    const myfunc3 = () => {};        // arrow function (empty)

    console.log(myvar); // prints outer myvar: "value1"
    myfunc();           // calls inner function
}

myApp(); // invoke the main function

