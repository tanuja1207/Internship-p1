// ################# ForEach on Numbers Array #################

const users = [
  { firstName: "Tanuja", age: 21 },
  { firstName: "Sanu", age: 19 },
  { firstName: "Shreya", age: 23 },
  { firstName: "Sneha", age: 17 },
  { firstName: "Priya", age: 18 },
];

// Method 1: Using anonymous function
users.forEach(function (user) {
  console.log(user.firstName);
});

// Method 2: Using for...of loop
for (let user of users) {
  console.log(user.firstName);
}

// Method 3: Using arrow function with index
users.forEach((user, index) => {
  console.log(`Index ${index}: ${user.firstName}`);
});
