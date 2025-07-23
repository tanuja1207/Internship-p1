// ################### Map Method  #####################

// Array of user objects
const users = [
  { firstName: "Tanu", age: 22 },
  { firstName: "", age: 20 },
  { firstName: "Sanu", age: 21 },
  { firstName: "Priya", age: 17 },
  { firstName: "Sneha", age: 16 },
];

// Extracting only first names using map()
// map() returns a new array of values returned by the callback
const user_names = users.map((user) => {
  return user.firstName;
});

// Output: [ 'Tanu', '', 'Sanu', 'Priya', 'Sneha' ]
console.log(user_names);
