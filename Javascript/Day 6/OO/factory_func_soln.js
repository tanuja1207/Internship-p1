// Define Shared Methods
const userMethods = {
    about: function () {
        return `${this.first_name} ${this.last_name} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return `${this.first_name} is singing `;
    }
};

//  Factory Function (Create User)
function createUser(first_name, last_name, email, age, address) {
    const user = {};
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.age = age;
    user.address = address;

    // Attach shared method references
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;

    return user;
}

//  Create Users
const user1 = createUser("Tanuja", "Kadam", "tanuja7614@gmail.com", 21, "Maharashtra");
const user2 = createUser("Sanika", "Chaure", "sanika124@gmail.com", 22, "Pune");
const user3 = createUser("Sneha", "Gaikwad", "sneha231@gmail.com", 19, "Nashik");

//  Use Users
console.log("User 1:", user1);
console.log("User 2:", user2);
console.log("User 3:", user3);

console.log(user1.about()); // Tanuja Kadam is 21 years old.
console.log(user2.is18());  // true
console.log(user3.sing());  // Sneha is singing 
