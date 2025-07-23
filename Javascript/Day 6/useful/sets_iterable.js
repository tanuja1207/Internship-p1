// Sets are iterables that store **unique values** (no duplicates)

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2); // Ignored (duplicate)
numbers.add(3);
numbers.add(['a', 'b']); // Allowed (new reference)
numbers.add(['a', 'b']); // Allowed (different reference)

// Output
console.log(numbers); // Set(5) {1, 2, 3, Array(2), Array(2)}

// Check if an element exists
console.log(numbers.has(1)); // true
console.log(numbers.has(5)); // false

// Iterate through set
for (let num of numbers) {
  console.log(num);
}
