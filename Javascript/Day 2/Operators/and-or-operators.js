// ####################### AND / OR Operators in JavaScript #######################

let firstname = "Tanuja";
let age = 21;

// ------------------- 1. Separate Conditions -------------------

if (firstname[0] === "T") {
    console.log("Name starts with T");
}

if (age > 18) {
    console.log("You are above 18");
}


// ------------------- 2. Using AND (&&) Operator -------------------
// Both conditions must be true for the if block to run

if (firstname[0] === "T" && age > 18) {
    console.log("Name starts with T AND age is above 18");
} else {
    console.log(" Not qualified (both conditions not met)");
}


// ------------------- 3. Using OR (||) Operator -------------------
// At least one condition must be true for the if block to run

if (firstname[0] === "T" || age > 18) {
    console.log("Either name starts with T OR age is above 18 (or both)");
} else {
    console.log("Not qualified (neither condition met)");
}
