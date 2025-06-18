// ############# Useful String Methods ################


let first_name = " T a n u j a ";

// Spaces are even counted in String.length

console.log(first_name.length); 
first_name.trim();
console.log(first_name.length); 


// --------------------------------------------------------------
// Storing in completely new Variable
let newString = first_name.trim();
console.log(newString); 

console.log(newString.length); 
console.log(first_name.length); 

// --------------------------------------------------------------
// Storing in old Variable itself and modifying it

first_name = first_name.trim();
console.log(newString); 

console.log(newString.length); 
console.log(first_name.length); 

