// Default value for 'b' is set to 0
function addTwo(a, b = 0) {
  return a + b;
}

console.log(addTwo(4));      // Output: 4 
console.log(addTwo(4, 10));  // Output: 14
