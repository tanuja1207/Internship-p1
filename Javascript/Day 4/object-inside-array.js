// Array of user objects
const users = [
  { userid: 1, user_name: "Tanuja", gender: "female" },
  { userid: 2, user_name: "Sneha", gender: "female" },
  { userid: 3, user_name: "Rushi", gender: "male" }
];

// Looping through each user object using for...of loop
for (let user of users) {
  // Accessing and printing individual properties
  console.log(`ID: ${user.userid}, Name: ${user.user_name}`);
}
