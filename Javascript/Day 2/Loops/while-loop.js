// ################## 1. Print numbers ##################

let i = 0;

while (i <= 9) {
    // Using template string for better formatting
    console.log(`Value of i is ${i}`);
    i++;
}

console.log(" Hello!");


// ################## 2. Sum numbers  ##################

i = 0;              // Start from 0
let total = 0;      // To store sum

while (i <= 10) {
    total = total + i; // Add i to total
    i++;               // Move to next number
}

console.log("Sum from 0 to 10 is:", total);  // Output: 55
