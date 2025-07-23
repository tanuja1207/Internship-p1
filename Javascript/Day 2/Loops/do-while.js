// ######## do-while loop ########

let total = 0; 
let num = 2;
let i = 1;

do {
  total = total + i;  // Add current value of i to total
  i++;                // Increment i
} while (i <= num);

console.log(total);   // Output: 3 (1 + 2)
