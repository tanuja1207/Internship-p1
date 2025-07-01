// ################ Introduction to Objects .#############


// Object created for person
const person = {
    name : "Tanuja",
    age : 21,
    hobbie : ["riding","adventure","cricket"]
}

console.log(typeof person);
// -----------------------------------------------------------

// how to access data from objects (Dot Notation)
console.log(person.name);
console.log(person.age);
console.log(person);
console.log(person.hobbie);

// Accessing with help of key other way (Bracket Notation)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbie"]);
// -----------------------------------------------------------

// how to add key value pair to objects (Dot Notation)
person.gender = "female";
console.log(person);

// adding with help of (bracket Notation)

person["city"]="Nashik";
console.log(person);

// -----------------------------------------------------------


