// ################## For Loop ##################

let total = 0;
let num = 100;

for (let i = 0; i <= num; i++) {
  total = total + i; // Add current i to total
}

console.log("Sum from 0 to", num, "is:", total);  // Output: 5050


// ################## break Keyword ##################

console.log("Using break:");
for (let j = 0; j <= 9; j++) {
  if (j === 5) {
    break;  // Stop the loop when j is 5
  }
  console.log(j);  // Output: 0 to 4
}


// ################## continue Keyword ##################

console.log("Using continue:");
for (let j = 0; j <= 9; j++) {
  if (j === 5) {
    continue;  // Skip the 5th iteration
  }
  console.log(j);  // Output: 0 to 9, except 5
}
