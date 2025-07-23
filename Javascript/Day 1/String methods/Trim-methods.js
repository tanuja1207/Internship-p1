// ############# Useful String Methods ################

let first_name = " T a n u j a ";

console.log(first_name.length); // 13

// This won't change original string
first_name.trim(); 
console.log(first_name.length); // Still 13 

// Store trimmed string in new variable
let newString = first_name.trim();
console.log(newString); // "T a n u j a"
console.log(newString.length); // 11 (2 spaces removed)
console.log(first_name.length); // Still 13

// Now store it back into original variable
first_name = first_name.trim();
console.log(first_name); // "T a n u j a"
console.log(newString.length); // 11
console.log(first_name.length); // 11 

