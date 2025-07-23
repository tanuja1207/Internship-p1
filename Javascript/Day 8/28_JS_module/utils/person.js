// person.js

// Default export: simple greeting text
const hello = "hello world";
export default hello;

// Named export: Person2 class with constructor and info method
export class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  info() {
    console.log(
      `Buyer's Full Name is ${this.firstName} ${this.lastName} and Age is ${this.age}.`
    );
  }
}
