// In global scope, 'this' refers to the global object, which is 'window' in browsers
console.log(this);        // Output: [object Window]
console.log(window);      // Output: [object Window]

// Function declaration in the global scope
function myfunc(){
    console.log("hello world ");
}

// Function call from global scope
myfunc();            

// In the browser, globally declared functions are added as properties of the window object
window.myfunc();          


// Re-defining the same function to show behavior of 'this' inside function
function myfunc(){
    console.log(this);    // 'this' refers to window object when called from global context (non-strict mode)
}

// Calling function directly
myfunc();                 

// Calling function using window object explicitly
window.myfunc();         
