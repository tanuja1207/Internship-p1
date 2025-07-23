// Constructor Function (starts with Capital Letter by convention)
// It creates objects with shared structure
function CreateUser(first_name, last_name, email, age, address) {
    // 'this' refers to the newly created object
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.address = address;

    // 'return this' is implicit when using 'new', so this line is optional
    return this;
}

// --------------------------------------------------------------
// Instead of defining functions inside the constructor (which would
// create a new copy for every object), we attach methods to the prototype.

// Shared method: about
CreateUser.prototype.about = function () {
    return `${this.first_name} ${this.last_name} is ${this.age} years old.`;
};

// Shared method: is18
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};

// Shared method: sing
CreateUser.prototype.sing = function () {
    return 'firstname';
};
console.log(CreateUser.prototype);

// --------------------------------------------------------------
// Create a new user object using 'new' keyword
const user1 = new CreateUser("Tanuja", "Kadam", "tanuja7614@gmail.com", 21, "home,building,pincode,state");

// Use the methods defined on the prototype
console.log(user1);                   // User object
console.log(user1.is18());           // true
console.log(user1.about());          // "Tanuja Kadam is 21 years old."

// --------------------------------------------------------------
// Print only user’s own properties (not inherited ones)
for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key); 
    }
}
