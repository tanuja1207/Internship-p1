// Constructor Function
function CreateUser(first_name, last_name, email, age, address) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.email = email;
  this.age = age;
  this.address = address;
  // no return needed here
}

// Add shared methods to prototype
CreateUser.prototype.about = function () {
  return `${this.first_name} ${this.last_name} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return 'Kakan';
};

// Test
const user1 = new CreateUser(
  "Tanuja", "Kadam", "tanuja7614@gmail.com", 21, "Home, Building, Pincode, State"
);

console.log(user1);              // Shows the object
console.log(user1.about());      // "Tanuja Kadam is 21 years old."
console.log(user1.is18());       // true
console.log(user1.sing());       // "Kakan"
