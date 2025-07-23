// ################### Truthy & Falsy Check ###################

// Declare a variable without assigning any value
let firstname;

// This if-condition checks whether 'firstname' has a truthy value
if (firstname) {
    // If 'firstname' has some value (not undefined, null, 0, "", etc.)
    console.log(firstname);
} else {
    // If 'firstname' is falsy (like undefined), this block will run
    console.log("empty variable");
}
