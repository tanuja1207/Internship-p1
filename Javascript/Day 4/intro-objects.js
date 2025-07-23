// ################ Introduction to Objects ##################

// Object created for a person
const person = {
  name: "Tanuja",
  age: 21,
  hobbie: ["riding", "adventure", "cricket"]
};

// -----------------------------------------------------------
// Check type of the object
console.log(typeof person); // Output: object

// -----------------------------------------------------------
// Accessing object properties using Dot Notation
console.log(person.name);   // "Tanuja"
console.log(person.age);    // 21
console.log(person.hobbie); // ["riding", "adventure", "cricket"]

// -----------------------------------------------------------
// Accessing object properties using Bracket Notation
console.log(person["name"]);   // "Tanuja"
console.log(person["age"]);    // 21
console.log(person["hobbie"]); // ["riding", "adventure", "cricket"]

// -----------------------------------------------------------
// Adding new key-value pairs using Dot Notation
person.gender = "female";
console.log(person); // Now includes gender

// Adding new key-value pairs using Bracket Notation
person["city"] = "Nashik";
console.log(person); // Now includes city

// Final Output of `person` object:
console.log("Final Person Object:", person);

